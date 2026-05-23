package org.apache.cordova.filetransfer;

import android.net.Uri;
import android.webkit.CookieManager;
import com.silkimen.http.HttpRequest;
import java.io.BufferedReader;
import java.io.Closeable;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.HttpURLConnection;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.zip.GZIPInputStream;
import java.util.zip.Inflater;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaResourceApi;
import org.apache.cordova.LOG;
import org.apache.cordova.PluginManager;
import org.apache.cordova.PluginResult;
import org.apache.cordova.Whitelist;
import org.apache.cordova.file.FileUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.opencv.videoio.Videoio;
public class FileTransfer extends CordovaPlugin {
    public static int ABORTED_ERR = 4;
    private static final String BOUNDARY = "+++++";
    public static int CONNECTION_ERR = 3;
    public static int FILE_NOT_FOUND_ERR = 1;
    public static int INVALID_URL_ERR = 2;
    private static final String LINE_END = "\r\n";
    private static final String LINE_START = "--";
    private static final String LOG_TAG = "FileTransfer";
    private static final int MAX_BUFFER_SIZE = 16384;
    public static int NOT_MODIFIED_ERR = 5;
    private static HashMap<String, RequestContext> activeRequests = new HashMap<>();

    private static final class RequestContext {
        boolean aborted;
        CallbackContext callbackContext;
        HttpURLConnection connection;
        String source;
        String target;
        File targetFile;

        RequestContext(String str, String str2, CallbackContext callbackContext) {
            this.source = str;
            this.target = str2;
            this.callbackContext = callbackContext;
        }

        void sendPluginResult(PluginResult pluginResult) {
            synchronized (this) {
                if (!this.aborted) {
                    this.callbackContext.sendPluginResult(pluginResult);
                }
            }
        }
    }

    private static abstract class TrackingInputStream extends FilterInputStream {
        public abstract long getTotalRawBytesRead();

        public TrackingInputStream(InputStream inputStream) {
            super(inputStream);
        }
    }

    private static class ExposedGZIPInputStream extends GZIPInputStream {
        public ExposedGZIPInputStream(InputStream inputStream) throws IOException {
            super(inputStream);
        }

        public Inflater getInflater() {
            return this.inf;
        }
    }

    private static class TrackingGZIPInputStream extends TrackingInputStream {
        private ExposedGZIPInputStream gzin;

        public TrackingGZIPInputStream(ExposedGZIPInputStream exposedGZIPInputStream) throws IOException {
            super(exposedGZIPInputStream);
            this.gzin = exposedGZIPInputStream;
        }

        @Override // org.apache.cordova.filetransfer.FileTransfer.TrackingInputStream
        public long getTotalRawBytesRead() {
            return this.gzin.getInflater().getBytesRead();
        }
    }

    private static class SimpleTrackingInputStream extends TrackingInputStream {
        private long bytesRead;

        public SimpleTrackingInputStream(InputStream inputStream) {
            super(inputStream);
            this.bytesRead = 0L;
        }

        private int updateBytesRead(int i) {
            if (i != -1) {
                this.bytesRead += (long) i;
            }
            return i;
        }

        @Override // java.io.FilterInputStream, java.io.InputStream
        public int read() throws IOException {
            return updateBytesRead(super.read());
        }

        @Override // java.io.FilterInputStream, java.io.InputStream
        public int read(byte[] bArr, int i, int i2) throws IOException {
            return updateBytesRead(super.read(bArr, i, i2));
        }

        @Override // org.apache.cordova.filetransfer.FileTransfer.TrackingInputStream
        public long getTotalRawBytesRead() {
            return this.bytesRead;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        if (str.equals("upload") || str.equals("download")) {
            String string = jSONArray.getString(0);
            String string2 = jSONArray.getString(1);
            if (str.equals("upload")) {
                upload(string, string2, jSONArray, callbackContext);
            } else {
                download(string, string2, jSONArray, callbackContext);
            }
            return true;
        }
        if (!str.equals("abort")) {
            return false;
        }
        abort(jSONArray.getString(0));
        callbackContext.success();
        return true;
    }
    public static void addHeadersToRequest(URLConnection uRLConnection, JSONObject jSONObject) {
        try {
            Iterator<String> itKeys = jSONObject.keys();
            while (itKeys.hasNext()) {
                String string = itKeys.next().toString();
                String strReplaceAll = string.replaceAll("\\n", "").replaceAll("\\s+", "").replaceAll(":", "").replaceAll("[^\\x20-\\x7E]+", "");
                JSONArray jSONArrayOptJSONArray = jSONObject.optJSONArray(string);
                if (jSONArrayOptJSONArray == null) {
                    jSONArrayOptJSONArray = new JSONArray();
                    jSONArrayOptJSONArray.put(jSONObject.getString(string).replaceAll("\\s+", " ").replaceAll("\\n", " ").replaceAll("[^\\x20-\\x7E]+", " "));
                }
                uRLConnection.setRequestProperty(strReplaceAll, jSONArrayOptJSONArray.getString(0));
                for (int i = 1; i < jSONArrayOptJSONArray.length(); i++) {
                    uRLConnection.addRequestProperty(string, jSONArrayOptJSONArray.getString(i));
                }
            }
        } catch (JSONException unused) {
        }
    }
    public String getCookies(String str) {
        String str2;
        boolean z = false;
        try {
            Method method = this.webView.getClass().getMethod("getCookieManager", new Class[0]);
            Class<?> returnType = method.getReturnType();
            str2 = (String) returnType.getMethod("getCookie", String.class).invoke(returnType.cast(method.invoke(this.webView, new Object[0])), str);
            z = true;
        } catch (ClassCastException | IllegalAccessException | NoSuchMethodException | InvocationTargetException unused) {
            str2 = null;
        }
        return (z || CookieManager.getInstance() == null) ? str2 : CookieManager.getInstance().getCookie(str);
    }

    private void upload(final String str, final String str2, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        int i;
        boolean z;
        LOG.d(LOG_TAG, "upload " + str + " to " + str2);
        final String argument = getArgument(jSONArray, 2, "file");
        final String argument2 = getArgument(jSONArray, 3, "image.jpg");
        final String argument3 = getArgument(jSONArray, 4, "image/jpeg");
        final JSONObject jSONObject = jSONArray.optJSONObject(5) == null ? new JSONObject() : jSONArray.optJSONObject(5);
        final boolean z2 = jSONArray.optBoolean(7) || jSONArray.isNull(7);
        final JSONObject jSONObjectOptJSONObject = jSONArray.optJSONObject(8) == null ? jSONObject.optJSONObject("headers") : jSONArray.optJSONObject(8);
        final String string = jSONArray.getString(9);
        final String argument4 = getArgument(jSONArray, 10, "POST");
        final CordovaResourceApi resourceApi = this.webView.getResourceApi();
        LOG.d(LOG_TAG, "fileKey: " + argument);
        LOG.d(LOG_TAG, "fileName: " + argument2);
        LOG.d(LOG_TAG, "mimeType: " + argument3);
        LOG.d(LOG_TAG, "params: " + jSONObject);
        LOG.d(LOG_TAG, "chunkedMode: " + z2);
        LOG.d(LOG_TAG, "headers: " + jSONObjectOptJSONObject);
        LOG.d(LOG_TAG, "objectId: " + string);
        LOG.d(LOG_TAG, "httpMethod: " + argument4);
        final Uri uriRemapUri = resourceApi.remapUri(Uri.parse(str2));
        int uriType = CordovaResourceApi.getUriType(uriRemapUri);
        if (uriType == 6) {
            i = 5;
            z = true;
        } else {
            i = 5;
            z = false;
        }
        if (uriType != i && !z) {
            JSONObject jSONObjectCreateFileTransferError = createFileTransferError(INVALID_URL_ERR, str, str2, null, 0, null);
            LOG.e(LOG_TAG, "Unsupported URI: " + uriRemapUri);
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.IO_EXCEPTION, jSONObjectCreateFileTransferError));
        } else {
            final RequestContext requestContext = new RequestContext(str, str2, callbackContext);
            synchronized (activeRequests) {
                activeRequests.put(string, requestContext);
            }
            final boolean z3 = z;
            this.f7cordova.getThreadPool().execute(new Runnable() { // from class: org.apache.cordova.filetransfer.FileTransfer.1
                /* high-level source view WARN: Removed duplicated region for block: B:22:0x005f A[Catch: IOException -> 0x0059, all -> 0x03e2, FileNotFoundException -> 0x03ec, JSONException -> 0x0429, TRY_LEAVE, TryCatch #10 {JSONException -> 0x0429, blocks: (B:10:0x0029, B:12:0x003c, B:14:0x004e, B:22:0x005f, B:23:0x0066, B:25:0x0070, B:26:0x0075, B:28:0x0079, B:29:0x007c, B:41:0x00ea, B:44:0x015b, B:48:0x0161, B:53:0x016d, B:58:0x018e, B:60:0x0195, B:63:0x01a7, B:70:0x01b8, B:101:0x027b, B:102:0x0285, B:105:0x028c, B:112:0x02f4, B:113:0x02f6, B:116:0x02fd, B:129:0x0317, B:137:0x033f, B:138:0x0341, B:141:0x0348, B:154:0x0396, B:163:0x03a1, B:164:0x03a3, B:167:0x03aa, B:168:0x03ad, B:172:0x03b1, B:176:0x03b5, B:196:0x03d2, B:197:0x03da, B:62:0x019d, B:40:0x00e1), top: B:274:0x0029, outer: #5 }] */
                /* high-level source view WARN: Removed duplicated region for block: B:25:0x0070 A[Catch: IOException -> 0x0059, all -> 0x03e2, FileNotFoundException -> 0x03ec, JSONException -> 0x0429, TRY_ENTER, TRY_LEAVE, TryCatch #10 {JSONException -> 0x0429, blocks: (B:10:0x0029, B:12:0x003c, B:14:0x004e, B:22:0x005f, B:23:0x0066, B:25:0x0070, B:26:0x0075, B:28:0x0079, B:29:0x007c, B:41:0x00ea, B:44:0x015b, B:48:0x0161, B:53:0x016d, B:58:0x018e, B:60:0x0195, B:63:0x01a7, B:70:0x01b8, B:101:0x027b, B:102:0x0285, B:105:0x028c, B:112:0x02f4, B:113:0x02f6, B:116:0x02fd, B:129:0x0317, B:137:0x033f, B:138:0x0341, B:141:0x0348, B:154:0x0396, B:163:0x03a1, B:164:0x03a3, B:167:0x03aa, B:168:0x03ad, B:172:0x03b1, B:176:0x03b5, B:196:0x03d2, B:197:0x03da, B:62:0x019d, B:40:0x00e1), top: B:274:0x0029, outer: #5 }] */
                /* high-level source view WARN: Removed duplicated region for block: B:277:0x04a6 A[EXC_TOP_SPLITTER, SYNTHETIC] */
                /* high-level source view WARN: Removed duplicated region for block: B:283:0x01b1 A[EXC_TOP_SPLITTER, SYNTHETIC] */
                /* high-level source view WARN: Removed duplicated region for block: B:28:0x0079 A[Catch: IOException -> 0x0059, all -> 0x03e2, FileNotFoundException -> 0x03ec, JSONException -> 0x0429, TRY_ENTER, TRY_LEAVE, TryCatch #10 {JSONException -> 0x0429, blocks: (B:10:0x0029, B:12:0x003c, B:14:0x004e, B:22:0x005f, B:23:0x0066, B:25:0x0070, B:26:0x0075, B:28:0x0079, B:29:0x007c, B:41:0x00ea, B:44:0x015b, B:48:0x0161, B:53:0x016d, B:58:0x018e, B:60:0x0195, B:63:0x01a7, B:70:0x01b8, B:101:0x027b, B:102:0x0285, B:105:0x028c, B:112:0x02f4, B:113:0x02f6, B:116:0x02fd, B:129:0x0317, B:137:0x033f, B:138:0x0341, B:141:0x0348, B:154:0x0396, B:163:0x03a1, B:164:0x03a3, B:167:0x03aa, B:168:0x03ad, B:172:0x03b1, B:176:0x03b5, B:196:0x03d2, B:197:0x03da, B:62:0x019d, B:40:0x00e1), top: B:274:0x0029, outer: #5 }] */
                /* high-level source view WARN: Removed duplicated region for block: B:34:0x008f A[Catch: IOException -> 0x0059, JSONException -> 0x00df, all -> 0x03e2, FileNotFoundException -> 0x03ec, TryCatch #14 {IOException -> 0x0059, blocks: (B:14:0x004e, B:22:0x005f, B:25:0x0070, B:28:0x0079, B:31:0x0083, B:32:0x0089, B:34:0x008f, B:36:0x009f, B:44:0x015b), top: B:287:0x004e }] */
                /* high-level source view WARN: Removed duplicated region for block: B:44:0x015b A[Catch: IOException -> 0x0059, all -> 0x03e2, FileNotFoundException -> 0x03ec, JSONException -> 0x0429, TRY_ENTER, TRY_LEAVE, TryCatch #10 {JSONException -> 0x0429, blocks: (B:10:0x0029, B:12:0x003c, B:14:0x004e, B:22:0x005f, B:23:0x0066, B:25:0x0070, B:26:0x0075, B:28:0x0079, B:29:0x007c, B:41:0x00ea, B:44:0x015b, B:48:0x0161, B:53:0x016d, B:58:0x018e, B:60:0x0195, B:63:0x01a7, B:70:0x01b8, B:101:0x027b, B:102:0x0285, B:105:0x028c, B:112:0x02f4, B:113:0x02f6, B:116:0x02fd, B:129:0x0317, B:137:0x033f, B:138:0x0341, B:141:0x0348, B:154:0x0396, B:163:0x03a1, B:164:0x03a3, B:167:0x03aa, B:168:0x03ad, B:172:0x03b1, B:176:0x03b5, B:196:0x03d2, B:197:0x03da, B:62:0x019d, B:40:0x00e1), top: B:274:0x0029, outer: #5 }] */
                /* high-level source view WARN: Removed duplicated region for block: B:52:0x016c  */
                /* high-level source view WARN: Removed duplicated region for block: B:56:0x018b A[ADDED_TO_REGION] */
                /* high-level source view WARN: Removed duplicated region for block: B:62:0x019d A[Catch: IOException -> 0x03db, all -> 0x03e2, FileNotFoundException -> 0x03ec, JSONException -> 0x0429, TRY_ENTER, TryCatch #10 {JSONException -> 0x0429, blocks: (B:10:0x0029, B:12:0x003c, B:14:0x004e, B:22:0x005f, B:23:0x0066, B:25:0x0070, B:26:0x0075, B:28:0x0079, B:29:0x007c, B:41:0x00ea, B:44:0x015b, B:48:0x0161, B:53:0x016d, B:58:0x018e, B:60:0x0195, B:63:0x01a7, B:70:0x01b8, B:101:0x027b, B:102:0x0285, B:105:0x028c, B:112:0x02f4, B:113:0x02f6, B:116:0x02fd, B:129:0x0317, B:137:0x033f, B:138:0x0341, B:141:0x0348, B:154:0x0396, B:163:0x03a1, B:164:0x03a3, B:167:0x03aa, B:168:0x03ad, B:172:0x03b1, B:176:0x03b5, B:196:0x03d2, B:197:0x03da, B:62:0x019d, B:40:0x00e1), top: B:274:0x0029, outer: #5 }] */
                /*  high-level source view ERROR: high-level source viewRuntimeException in pass: RegionMakerVisitor
                    high-level source view.core.utils.exceptions.high-level source viewRuntimeException: Can't find top splitter block for handler:B:188:0x03c6
                    	at high-level source view.core.utils.BlockUtils.getTopSplitterForHandler(BlockUtils.java:1182)
                    	at high-level source view.core.dex.visitors.regions.maker.ExcHandlersRegionMaker.collectHandlerRegions(ExcHandlersRegionMaker.java:53)
                    	at high-level source view.core.dex.visitors.regions.maker.ExcHandlersRegionMaker.process(ExcHandlersRegionMaker.java:38)
                    	at high-level source view.core.dex.visitors.regions.RegionMakerVisitor.visit(RegionMakerVisitor.java:27)
                    */
                @Override // java.lang.Runnable
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                */
                public void run() {
                    /*
                        Method dump skipped, instruction units count: 1282
                        To view this dump add '--comments-level debug' option
                    */
                    throw new UnsupportedOperationException("Method not decompiled: org.apache.cordova.filetransfer.FileTransfer.AnonymousClass1.run():void");
                }
            });
        }
    }
    public static void safeClose(Closeable closeable) {
        if (closeable != null) {
            try {
                closeable.close();
            } catch (IOException unused) {
            }
        }
    }
    public static TrackingInputStream getInputStream(URLConnection uRLConnection) throws IOException {
        String contentEncoding = uRLConnection.getContentEncoding();
        if (contentEncoding != null && contentEncoding.equalsIgnoreCase(HttpRequest.ENCODING_GZIP)) {
            return new TrackingGZIPInputStream(new ExposedGZIPInputStream(uRLConnection.getInputStream()));
        }
        return new SimpleTrackingInputStream(uRLConnection.getInputStream());
    }
    public static JSONObject createFileTransferError(int i, String str, String str2, URLConnection uRLConnection, Throwable th) {
        StringBuilder sb = new StringBuilder();
        int responseCode = 0;
        String str3 = null;
        if (uRLConnection != null) {
            try {
                if (uRLConnection instanceof HttpURLConnection) {
                    responseCode = ((HttpURLConnection) uRLConnection).getResponseCode();
                    InputStream errorStream = ((HttpURLConnection) uRLConnection).getErrorStream();
                    if (errorStream != null) {
                        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(errorStream, HttpRequest.CHARSET_UTF8));
                        try {
                            String line = bufferedReader.readLine();
                            while (line != null) {
                                sb.append(line);
                                line = bufferedReader.readLine();
                                if (line != null) {
                                    sb.append('\n');
                                }
                            }
                            String string = sb.toString();
                            try {
                                str3 = string;
                            } catch (Throwable th2) {
                                th = th2;
                                str3 = string;
                                LOG.w(LOG_TAG, "Error getting HTTP status code from connection.", th);
                            }
                        } finally {
                            bufferedReader.close();
                        }
                    }
                }
            } catch (Throwable th3) {
                th = th3;
            }
        }
        return createFileTransferError(i, str, str2, str3, Integer.valueOf(responseCode), th);
    }
    public static JSONObject createFileTransferError(int i, String str, String str2, String str3, Integer num, Throwable th) {
        JSONObject jSONObject = null;
        try {
            JSONObject jSONObject2 = new JSONObject();
            try {
                jSONObject2.put("code", i);
                jSONObject2.put("source", str);
                jSONObject2.put("target", str2);
                if (str3 != null) {
                    jSONObject2.put("body", str3);
                }
                if (num != null) {
                    jSONObject2.put("http_status", num);
                }
                if (th == null) {
                    return jSONObject2;
                }
                String message = th.getMessage();
                if (message == null || "".equals(message)) {
                    message = th.toString();
                }
                jSONObject2.put("exception", message);
                return jSONObject2;
            } catch (JSONException e) {
                e = e;
                jSONObject = jSONObject2;
                LOG.e(LOG_TAG, e.getMessage(), e);
                return jSONObject;
            }
        } catch (JSONException e2) {
            e = e2;
        }
    }

    private static String getArgument(JSONArray jSONArray, int i, String str) {
        String strOptString;
        return (jSONArray.length() <= i || (strOptString = jSONArray.optString(i)) == null || "null".equals(strOptString)) ? str : strOptString;
    }

    private void download(final String str, final String str2, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        LOG.d(LOG_TAG, "download " + str + " to " + str2);
        final CordovaResourceApi resourceApi = this.webView.getResourceApi();
        final String string = jSONArray.getString(3);
        final JSONObject jSONObjectOptJSONObject = jSONArray.optJSONObject(4);
        final Uri uriRemapUri = resourceApi.remapUri(Uri.parse(str));
        int uriType = CordovaResourceApi.getUriType(uriRemapUri);
        boolean z = (uriType == 6 || uriType == 5) ? false : true;
        if (uriType == -1) {
            JSONObject jSONObjectCreateFileTransferError = createFileTransferError(INVALID_URL_ERR, str, str2, null, 0, null);
            LOG.e(LOG_TAG, "Unsupported URI: " + uriRemapUri);
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.IO_EXCEPTION, jSONObjectCreateFileTransferError));
            return;
        }
        Boolean boolValueOf = z ? true : null;
        if (boolValueOf == null) {
            try {
                boolValueOf = Boolean.valueOf(((Whitelist) this.webView.getClass().getMethod("getWhitelist", new Class[0]).invoke(this.webView, new Object[0])).isUrlWhiteListed(str));
            } catch (IllegalAccessException | NoSuchMethodException | InvocationTargetException unused) {
            }
        }
        if (boolValueOf == null) {
            try {
                PluginManager pluginManager = (PluginManager) this.webView.getClass().getMethod("getPluginManager", new Class[0]).invoke(this.webView, new Object[0]);
                boolValueOf = (Boolean) pluginManager.getClass().getMethod("shouldAllowRequest", String.class).invoke(pluginManager, str);
            } catch (IllegalAccessException | NoSuchMethodException | InvocationTargetException unused2) {
            }
        }
        if (!Boolean.TRUE.equals(boolValueOf)) {
            LOG.w(LOG_TAG, "Source URL is not in white list: '" + str + "'");
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.IO_EXCEPTION, createFileTransferError(CONNECTION_ERR, str, str2, null, Integer.valueOf(Videoio.CAP_PROP_XI_DATA_FORMAT), null)));
            return;
        }
        final RequestContext requestContext = new RequestContext(str, str2, callbackContext);
        synchronized (activeRequests) {
            activeRequests.put(string, requestContext);
        }
        final boolean z2 = z;
        this.f7cordova.getThreadPool().execute(new Runnable() { // from class: org.apache.cordova.filetransfer.FileTransfer.2
            /* high-level source view WARN: Multi-variable type inference failed */
            /* high-level source view WARN: Removed duplicated region for block: B:190:0x034b A[PHI: r0 r3 r4 r5 r6 r8
  0x034b: PHI (r0v20 org.apache.cordova.PluginResult) = 
  (r0v12 org.apache.cordova.PluginResult)
  (r0v15 org.apache.cordova.PluginResult)
  (r0v18 org.apache.cordova.PluginResult)
  (r0v23 org.apache.cordova.PluginResult)
 binds: [B:173:0x0312, B:189:0x0349, B:206:0x0393, B:222:0x03d4] A[DONT_GENERATE, DONT_INLINE]
  0x034b: PHI (r3v6 boolean) = (r3v3 boolean), (r3v4 boolean), (r3v5 boolean), (r3v8 boolean) binds: [B:173:0x0312, B:189:0x0349, B:206:0x0393, B:222:0x03d4] A[DONT_GENERATE, DONT_INLINE]
  0x034b: PHI (r4v6 java.lang.String) = (r4v23 java.lang.String), (r4v24 java.lang.String), (r4v25 java.lang.String), (r4v26 java.lang.String) binds: [B:173:0x0312, B:189:0x0349, B:206:0x0393, B:222:0x03d4] A[DONT_GENERATE, DONT_INLINE]
  0x034b: PHI (r5v12 java.io.File) = (r5v9 java.io.File), (r5v10 java.io.File), (r5v11 java.io.File), (r5v14 java.io.File) binds: [B:173:0x0312, B:189:0x0349, B:206:0x0393, B:222:0x03d4] A[DONT_GENERATE, DONT_INLINE]
  0x034b: PHI (r6v12 java.net.HttpURLConnection) = 
  (r6v9 java.net.HttpURLConnection)
  (r6v10 java.net.HttpURLConnection)
  (r6v11 java.net.HttpURLConnection)
  (r6v14 java.net.HttpURLConnection)
 binds: [B:173:0x0312, B:189:0x0349, B:206:0x0393, B:222:0x03d4] A[DONT_GENERATE, DONT_INLINE]
  0x034b: PHI (r8v10 java.lang.Object) = (r8v65 java.lang.Object), (r8v66 java.lang.Object), (r8v67 java.lang.Object), (r8v68 java.lang.Object) binds: [B:173:0x0312, B:189:0x0349, B:206:0x0393, B:222:0x03d4] A[DONT_GENERATE, DONT_INLINE]] */
            /* high-level source view WARN: Removed duplicated region for block: B:263:0x0331 A[EXC_TOP_SPLITTER, SYNTHETIC] */
            /* high-level source view WARN: Removed duplicated region for block: B:265:0x02fa A[EXC_TOP_SPLITTER, SYNTHETIC] */
            /* high-level source view WARN: Removed duplicated region for block: B:267:0x037b A[EXC_TOP_SPLITTER, SYNTHETIC] */
            /* high-level source view WARN: Removed duplicated region for block: B:272:0x03bc A[EXC_TOP_SPLITTER, SYNTHETIC] */
            /* high-level source view WARN: Type inference failed for: r1v2, types: [org.apache.cordova.filetransfer.FileTransfer$RequestContext] */
            /* high-level source view WARN: Type inference failed for: r4v1 */
            /* high-level source view WARN: Type inference failed for: r4v10 */
            /* high-level source view WARN: Type inference failed for: r4v11 */
            /* high-level source view WARN: Type inference failed for: r4v12 */
            /* high-level source view WARN: Type inference failed for: r4v13 */
            /* high-level source view WARN: Type inference failed for: r4v14 */
            /* high-level source view WARN: Type inference failed for: r4v15 */
            /* high-level source view WARN: Type inference failed for: r4v16 */
            /* high-level source view WARN: Type inference failed for: r4v17 */
            /* high-level source view WARN: Type inference failed for: r4v18 */
            /* high-level source view WARN: Type inference failed for: r4v19 */
            /* high-level source view WARN: Type inference failed for: r4v2, types: [java.lang.Throwable] */
            /* high-level source view WARN: Type inference failed for: r4v20 */
            /* high-level source view WARN: Type inference failed for: r4v21 */
            /* high-level source view WARN: Type inference failed for: r4v22 */
            /* high-level source view WARN: Type inference failed for: r4v7 */
            /* high-level source view WARN: Type inference failed for: r8v1, types: [org.apache.cordova.PluginResult] */
            /* high-level source view WARN: Type inference failed for: r8v72 */
            /* high-level source view WARN: Type inference failed for: r8v73 */
            /* high-level source view WARN: Type inference fix 'apply assigned field type' failed
            java.lang.UnsupportedOperationException: ArgType.getObject(), call class: class high-level source view.core.dex.instructions.args.ArgType$UnknownArg
            	at high-level source view.core.dex.instructions.args.ArgType.getObject(ArgType.java:593)
            	at high-level source view.core.dex.attributes.nodes.ClassTypeVarsAttr.getTypeVarsMapFor(ClassTypeVarsAttr.java:35)
            	at high-level source view.core.dex.nodes.utils.TypeUtils.replaceClassGenerics(TypeUtils.java:177)
            	at high-level source view.core.dex.visitors.typeinference.FixTypesVisitor.insertExplicitUseCast(FixTypesVisitor.java:397)
            	at high-level source view.core.dex.visitors.typeinference.FixTypesVisitor.tryFieldTypeWithNewCasts(FixTypesVisitor.java:359)
            	at high-level source view.core.dex.visitors.typeinference.FixTypesVisitor.applyFieldType(FixTypesVisitor.java:309)
            	at high-level source view.core.dex.visitors.typeinference.FixTypesVisitor.visit(FixTypesVisitor.java:94)
             */
            @Override // java.lang.Runnable
            /*
                Code decompiled incorrectly, please refer to instructions dump.
            */
            public void run() {
                File fileMapUriToFile;
                HttpURLConnection httpURLConnectionCreateHttpConnection;
                Object obj;
                Object obj2;
                Object obj3;
                Object obj4;
                PluginResult pluginResult;
                String str3;
                String str4;
                String str5;
                Object obj5;
                String str6;
                Object obj6;
                String str7;
                TrackingInputStream inputStream;
                boolean z3;
                PluginResult pluginResult2;
                OutputStream outputStreamOpenOutputStream;
                PluginManager pluginManager2;
                PluginResult pluginResult3;
                PluginResult pluginResult4;
                PluginResult pluginResult5;
                if (requestContext.aborted) {
                    return;
                }
                Uri uriFromFile = Uri.parse(str2);
                CordovaResourceApi cordovaResourceApi = resourceApi;
                if (uriFromFile.getScheme() == null) {
                    uriFromFile = Uri.fromFile(new File(str2));
                }
                Uri uriRemapUri2 = cordovaResourceApi.remapUri(uriFromFile);
                boolean z4 = false;
                ?? r4 = 0;
                try {
                    try {
                        fileMapUriToFile = resourceApi.mapUriToFile(uriRemapUri2);
                    } catch (Throwable th) {
                        synchronized (FileTransfer.activeRequests) {
                            FileTransfer.activeRequests.remove(string);
                            ?? pluginResult6 = obj6;
                            if (obj6 == null) {
                                pluginResult6 = new PluginResult(PluginResult.Status.ERROR, FileTransfer.createFileTransferError(FileTransfer.CONNECTION_ERR, str, str2, httpURLConnectionCreateHttpConnection, r4));
                            }
                            if (!z4 && pluginResult6.getStatus() != PluginResult.Status.OK.ordinal() && fileMapUriToFile != null) {
                                fileMapUriToFile.delete();
                            }
                            requestContext.sendPluginResult(pluginResult6);
                            throw th;
                        }
                    }
                } catch (FileNotFoundException e) {
                    e = e;
                    fileMapUriToFile = null;
                    httpURLConnectionCreateHttpConnection = null;
                } catch (IOException e2) {
                    e = e2;
                    fileMapUriToFile = null;
                    httpURLConnectionCreateHttpConnection = null;
                } catch (JSONException e3) {
                    e = e3;
                    fileMapUriToFile = null;
                    httpURLConnectionCreateHttpConnection = null;
                } catch (Throwable th2) {
                    th = th2;
                    fileMapUriToFile = null;
                    httpURLConnectionCreateHttpConnection = null;
                }
                try {
                    requestContext.targetFile = fileMapUriToFile;
                    LOG.d(FileTransfer.LOG_TAG, "Download file:" + uriRemapUri);
                    FileProgressResult fileProgressResult = new FileProgressResult();
                    if (z2) {
                        CordovaResourceApi.OpenForReadResult openForReadResultOpenForRead = resourceApi.openForRead(uriRemapUri);
                        if (openForReadResultOpenForRead.length != -1) {
                            fileProgressResult.setLengthComputable(true);
                            fileProgressResult.setTotal(openForReadResultOpenForRead.length);
                        }
                        z3 = false;
                        pluginResult2 = null;
                        inputStream = new SimpleTrackingInputStream(openForReadResultOpenForRead.inputStream);
                        httpURLConnectionCreateHttpConnection = null;
                    } else {
                        httpURLConnectionCreateHttpConnection = resourceApi.createHttpConnection(uriRemapUri);
                        try {
                            httpURLConnectionCreateHttpConnection.setRequestMethod("GET");
                            String cookies = FileTransfer.this.getCookies(uriRemapUri.toString());
                            if (cookies != null) {
                                httpURLConnectionCreateHttpConnection.setRequestProperty("cookie", cookies);
                            }
                            httpURLConnectionCreateHttpConnection.setRequestProperty(HttpRequest.HEADER_ACCEPT_ENCODING, HttpRequest.ENCODING_GZIP);
                            JSONObject jSONObject = jSONObjectOptJSONObject;
                            if (jSONObject != null) {
                                FileTransfer.addHeadersToRequest(httpURLConnectionCreateHttpConnection, jSONObject);
                            }
                            httpURLConnectionCreateHttpConnection.connect();
                            if (httpURLConnectionCreateHttpConnection.getResponseCode() == 304) {
                                try {
                                    httpURLConnectionCreateHttpConnection.disconnect();
                                    LOG.d(FileTransfer.LOG_TAG, "Resource not modified: " + str);
                                    inputStream = null;
                                    z3 = true;
                                    pluginResult2 = new PluginResult(PluginResult.Status.ERROR, FileTransfer.createFileTransferError(FileTransfer.NOT_MODIFIED_ERR, str, str2, httpURLConnectionCreateHttpConnection, null));
                                } catch (FileNotFoundException e4) {
                                    e = e4;
                                    obj4 = null;
                                    z4 = true;
                                    JSONObject jSONObjectCreateFileTransferError2 = FileTransfer.createFileTransferError(FileTransfer.FILE_NOT_FOUND_ERR, str, str2, httpURLConnectionCreateHttpConnection, e);
                                    LOG.e(FileTransfer.LOG_TAG, jSONObjectCreateFileTransferError2.toString(), e);
                                    pluginResult = new PluginResult(PluginResult.Status.IO_EXCEPTION, jSONObjectCreateFileTransferError2);
                                    synchronized (FileTransfer.activeRequests) {
                                    }
                                } catch (IOException e5) {
                                    e = e5;
                                    obj3 = null;
                                    z4 = true;
                                    JSONObject jSONObjectCreateFileTransferError3 = FileTransfer.createFileTransferError(FileTransfer.CONNECTION_ERR, str, str2, httpURLConnectionCreateHttpConnection, e);
                                    LOG.e(FileTransfer.LOG_TAG, jSONObjectCreateFileTransferError3.toString(), e);
                                    pluginResult = new PluginResult(PluginResult.Status.IO_EXCEPTION, jSONObjectCreateFileTransferError3);
                                    synchronized (FileTransfer.activeRequests) {
                                    }
                                } catch (JSONException e6) {
                                    e = e6;
                                    obj2 = null;
                                    z4 = true;
                                    LOG.e(FileTransfer.LOG_TAG, e.getMessage(), e);
                                    pluginResult = new PluginResult(PluginResult.Status.JSON_EXCEPTION);
                                    synchronized (FileTransfer.activeRequests) {
                                    }
                                } catch (Throwable th3) {
                                    th = th3;
                                    obj = null;
                                    z4 = true;
                                    JSONObject jSONObjectCreateFileTransferError4 = FileTransfer.createFileTransferError(FileTransfer.CONNECTION_ERR, str, str2, httpURLConnectionCreateHttpConnection, th);
                                    LOG.e(FileTransfer.LOG_TAG, jSONObjectCreateFileTransferError4.toString(), th);
                                    pluginResult = new PluginResult(PluginResult.Status.IO_EXCEPTION, jSONObjectCreateFileTransferError4);
                                    synchronized (FileTransfer.activeRequests) {
                                    }
                                }
                            } else {
                                if ((httpURLConnectionCreateHttpConnection.getContentEncoding() == null || httpURLConnectionCreateHttpConnection.getContentEncoding().equalsIgnoreCase(HttpRequest.ENCODING_GZIP)) && httpURLConnectionCreateHttpConnection.getContentLength() != -1) {
                                    fileProgressResult.setLengthComputable(true);
                                    fileProgressResult.setTotal(httpURLConnectionCreateHttpConnection.getContentLength());
                                }
                                inputStream = FileTransfer.getInputStream(httpURLConnectionCreateHttpConnection);
                                z3 = false;
                                pluginResult2 = null;
                            }
                        } catch (FileNotFoundException e7) {
                            e = e7;
                            obj4 = null;
                        } catch (IOException e8) {
                            e = e8;
                            obj3 = null;
                        } catch (JSONException e9) {
                            e = e9;
                            obj2 = null;
                        } catch (Throwable th4) {
                            th = th4;
                            obj = null;
                        }
                    }
                    try {
                        if (!z3) {
                            try {
                                synchronized (requestContext) {
                                    if (requestContext.aborted) {
                                        synchronized (requestContext) {
                                            requestContext.connection = null;
                                        }
                                        FileTransfer.safeClose(inputStream);
                                        FileTransfer.safeClose(null);
                                        synchronized (FileTransfer.activeRequests) {
                                            FileTransfer.activeRequests.remove(string);
                                            pluginResult4 = pluginResult2;
                                        }
                                        if (pluginResult2 == null) {
                                            pluginResult4 = new PluginResult(PluginResult.Status.ERROR, FileTransfer.createFileTransferError(FileTransfer.CONNECTION_ERR, str, str2, httpURLConnectionCreateHttpConnection, null));
                                        }
                                        if (!z3 && pluginResult4.getStatus() != PluginResult.Status.OK.ordinal() && fileMapUriToFile != null) {
                                            fileMapUriToFile.delete();
                                        }
                                        requestContext.sendPluginResult(pluginResult4);
                                        return;
                                    }
                                    requestContext.connection = httpURLConnectionCreateHttpConnection;
                                    byte[] bArr = new byte[16384];
                                    outputStreamOpenOutputStream = resourceApi.openOutputStream(uriRemapUri2);
                                    while (true) {
                                        try {
                                            int i = inputStream.read(bArr);
                                            if (i <= 0) {
                                                break;
                                            }
                                            outputStreamOpenOutputStream.write(bArr, 0, i);
                                            fileProgressResult.setLoaded(inputStream.getTotalRawBytesRead());
                                            PluginResult pluginResult7 = new PluginResult(PluginResult.Status.OK, fileProgressResult.toJSONObject());
                                            pluginResult7.setKeepCallback(true);
                                            requestContext.sendPluginResult(pluginResult7);
                                        } catch (Throwable th5) {
                                            th = th5;
                                            synchronized (requestContext) {
                                                requestContext.connection = null;
                                            }
                                            FileTransfer.safeClose(inputStream);
                                            FileTransfer.safeClose(outputStreamOpenOutputStream);
                                            throw th;
                                        }
                                    }
                                    synchronized (requestContext) {
                                        requestContext.connection = null;
                                    }
                                    FileTransfer.safeClose(inputStream);
                                    FileTransfer.safeClose(outputStreamOpenOutputStream);
                                    LOG.d(FileTransfer.LOG_TAG, "Saved file: " + str2);
                                    Class<?> cls = FileTransfer.this.webView.getClass();
                                    try {
                                        pluginManager2 = (PluginManager) cls.getMethod("getPluginManager", new Class[0]).invoke(FileTransfer.this.webView, new Object[0]);
                                    } catch (IllegalAccessException | NoSuchMethodException | InvocationTargetException unused3) {
                                        pluginManager2 = null;
                                    }
                                    if (pluginManager2 == null) {
                                        try {
                                            pluginManager2 = (PluginManager) cls.getField("pluginManager").get(FileTransfer.this.webView);
                                        } catch (IllegalAccessException | NoSuchFieldException unused4) {
                                        }
                                    }
                                    fileMapUriToFile = resourceApi.mapUriToFile(uriRemapUri2);
                                    requestContext.targetFile = fileMapUriToFile;
                                    FileUtils fileUtils = (FileUtils) pluginManager2.getPlugin("File");
                                    if (fileUtils != null) {
                                        JSONObject entryForFile = fileUtils.getEntryForFile(fileMapUriToFile);
                                        if (entryForFile != null) {
                                            pluginResult3 = new PluginResult(PluginResult.Status.OK, entryForFile);
                                        } else {
                                            JSONObject jSONObjectCreateFileTransferError5 = FileTransfer.createFileTransferError(FileTransfer.CONNECTION_ERR, str, str2, httpURLConnectionCreateHttpConnection, null);
                                            LOG.e(FileTransfer.LOG_TAG, "File plugin cannot represent download path");
                                            pluginResult3 = new PluginResult(PluginResult.Status.IO_EXCEPTION, jSONObjectCreateFileTransferError5);
                                        }
                                        pluginResult2 = pluginResult3;
                                    } else {
                                        LOG.e(FileTransfer.LOG_TAG, "File plugin not found; cannot save downloaded file");
                                        pluginResult2 = new PluginResult(PluginResult.Status.ERROR, "File plugin not found; cannot save downloaded file");
                                    }
                                }
                            } catch (Throwable th6) {
                                th = th6;
                                outputStreamOpenOutputStream = null;
                            }
                        }
                        synchronized (FileTransfer.activeRequests) {
                            FileTransfer.activeRequests.remove(string);
                            pluginResult5 = pluginResult2;
                        }
                        if (pluginResult2 == null) {
                            pluginResult5 = new PluginResult(PluginResult.Status.ERROR, FileTransfer.createFileTransferError(FileTransfer.CONNECTION_ERR, str, str2, httpURLConnectionCreateHttpConnection, null));
                        }
                        if (!z3 && pluginResult5.getStatus() != PluginResult.Status.OK.ordinal() && fileMapUriToFile != null) {
                            fileMapUriToFile.delete();
                        }
                        requestContext.sendPluginResult(pluginResult5);
                    } catch (FileNotFoundException e10) {
                        e = e10;
                        z4 = z3;
                        obj4 = pluginResult2;
                        JSONObject jSONObjectCreateFileTransferError22 = FileTransfer.createFileTransferError(FileTransfer.FILE_NOT_FOUND_ERR, str, str2, httpURLConnectionCreateHttpConnection, e);
                        LOG.e(FileTransfer.LOG_TAG, jSONObjectCreateFileTransferError22.toString(), e);
                        pluginResult = new PluginResult(PluginResult.Status.IO_EXCEPTION, jSONObjectCreateFileTransferError22);
                        synchronized (FileTransfer.activeRequests) {
                            HashMap map = FileTransfer.activeRequests;
                            str7 = string;
                            map.remove(str7);
                            r4 = str7;
                            obj6 = obj4;
                        }
                        if (!z4) {
                            r4 = str7;
                            r4 = str7;
                            obj6 = obj4;
                            obj6 = obj4;
                            str6 = str7;
                            obj5 = obj4;
                            if (pluginResult.getStatus() != PluginResult.Status.OK.ordinal() && fileMapUriToFile != null) {
                                fileMapUriToFile.delete();
                                r4 = str6;
                                obj6 = obj5;
                            }
                        }
                        requestContext.sendPluginResult(pluginResult);
                    } catch (IOException e11) {
                        e = e11;
                        z4 = z3;
                        obj3 = pluginResult2;
                        JSONObject jSONObjectCreateFileTransferError32 = FileTransfer.createFileTransferError(FileTransfer.CONNECTION_ERR, str, str2, httpURLConnectionCreateHttpConnection, e);
                        LOG.e(FileTransfer.LOG_TAG, jSONObjectCreateFileTransferError32.toString(), e);
                        pluginResult = new PluginResult(PluginResult.Status.IO_EXCEPTION, jSONObjectCreateFileTransferError32);
                        synchronized (FileTransfer.activeRequests) {
                            HashMap map2 = FileTransfer.activeRequests;
                            str5 = string;
                            map2.remove(str5);
                            r4 = str5;
                            obj6 = obj3;
                        }
                        if (!z4) {
                            r4 = str5;
                            r4 = str5;
                            obj6 = obj3;
                            obj6 = obj3;
                            str6 = str5;
                            obj5 = obj3;
                            if (pluginResult.getStatus() != PluginResult.Status.OK.ordinal() && fileMapUriToFile != null) {
                            }
                        }
                        requestContext.sendPluginResult(pluginResult);
                    } catch (JSONException e12) {
                        e = e12;
                        z4 = z3;
                        obj2 = pluginResult2;
                        LOG.e(FileTransfer.LOG_TAG, e.getMessage(), e);
                        pluginResult = new PluginResult(PluginResult.Status.JSON_EXCEPTION);
                        synchronized (FileTransfer.activeRequests) {
                            HashMap map3 = FileTransfer.activeRequests;
                            str4 = string;
                            map3.remove(str4);
                            r4 = str4;
                            obj6 = obj2;
                        }
                        if (!z4) {
                            r4 = str4;
                            r4 = str4;
                            obj6 = obj2;
                            obj6 = obj2;
                            str6 = str4;
                            obj5 = obj2;
                            if (pluginResult.getStatus() != PluginResult.Status.OK.ordinal() && fileMapUriToFile != null) {
                            }
                        }
                        requestContext.sendPluginResult(pluginResult);
                    } catch (Throwable th7) {
                        th = th7;
                        z4 = z3;
                        obj = pluginResult2;
                        JSONObject jSONObjectCreateFileTransferError42 = FileTransfer.createFileTransferError(FileTransfer.CONNECTION_ERR, str, str2, httpURLConnectionCreateHttpConnection, th);
                        LOG.e(FileTransfer.LOG_TAG, jSONObjectCreateFileTransferError42.toString(), th);
                        pluginResult = new PluginResult(PluginResult.Status.IO_EXCEPTION, jSONObjectCreateFileTransferError42);
                        synchronized (FileTransfer.activeRequests) {
                            HashMap map4 = FileTransfer.activeRequests;
                            str3 = string;
                            map4.remove(str3);
                            r4 = str3;
                            obj6 = obj;
                        }
                        if (!z4) {
                            r4 = str3;
                            r4 = str3;
                            obj6 = obj;
                            obj6 = obj;
                            str6 = str3;
                            obj5 = obj;
                            if (pluginResult.getStatus() != PluginResult.Status.OK.ordinal() && fileMapUriToFile != null) {
                            }
                        }
                        requestContext.sendPluginResult(pluginResult);
                    }
                } catch (FileNotFoundException e13) {
                    e = e13;
                    httpURLConnectionCreateHttpConnection = null;
                    obj4 = httpURLConnectionCreateHttpConnection;
                    JSONObject jSONObjectCreateFileTransferError222 = FileTransfer.createFileTransferError(FileTransfer.FILE_NOT_FOUND_ERR, str, str2, httpURLConnectionCreateHttpConnection, e);
                    LOG.e(FileTransfer.LOG_TAG, jSONObjectCreateFileTransferError222.toString(), e);
                    pluginResult = new PluginResult(PluginResult.Status.IO_EXCEPTION, jSONObjectCreateFileTransferError222);
                    synchronized (FileTransfer.activeRequests) {
                    }
                } catch (IOException e14) {
                    e = e14;
                    httpURLConnectionCreateHttpConnection = null;
                    obj3 = httpURLConnectionCreateHttpConnection;
                    JSONObject jSONObjectCreateFileTransferError322 = FileTransfer.createFileTransferError(FileTransfer.CONNECTION_ERR, str, str2, httpURLConnectionCreateHttpConnection, e);
                    LOG.e(FileTransfer.LOG_TAG, jSONObjectCreateFileTransferError322.toString(), e);
                    pluginResult = new PluginResult(PluginResult.Status.IO_EXCEPTION, jSONObjectCreateFileTransferError322);
                    synchronized (FileTransfer.activeRequests) {
                    }
                } catch (JSONException e15) {
                    e = e15;
                    httpURLConnectionCreateHttpConnection = null;
                    obj2 = httpURLConnectionCreateHttpConnection;
                    LOG.e(FileTransfer.LOG_TAG, e.getMessage(), e);
                    pluginResult = new PluginResult(PluginResult.Status.JSON_EXCEPTION);
                    synchronized (FileTransfer.activeRequests) {
                    }
                } catch (Throwable th8) {
                    th = th8;
                    httpURLConnectionCreateHttpConnection = null;
                    obj = httpURLConnectionCreateHttpConnection;
                    JSONObject jSONObjectCreateFileTransferError422 = FileTransfer.createFileTransferError(FileTransfer.CONNECTION_ERR, str, str2, httpURLConnectionCreateHttpConnection, th);
                    LOG.e(FileTransfer.LOG_TAG, jSONObjectCreateFileTransferError422.toString(), th);
                    pluginResult = new PluginResult(PluginResult.Status.IO_EXCEPTION, jSONObjectCreateFileTransferError422);
                    synchronized (FileTransfer.activeRequests) {
                    }
                }
            }
        });
    }

    private void abort(String str) {
        final RequestContext requestContextRemove;
        synchronized (activeRequests) {
            requestContextRemove = activeRequests.remove(str);
        }
        if (requestContextRemove != null) {
            this.f7cordova.getThreadPool().execute(new Runnable() { // from class: org.apache.cordova.filetransfer.FileTransfer.3
                @Override // java.lang.Runnable
                public void run() {
                    synchronized (requestContextRemove) {
                        File file = requestContextRemove.targetFile;
                        if (file != null) {
                            file.delete();
                        }
                        requestContextRemove.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, FileTransfer.createFileTransferError(FileTransfer.ABORTED_ERR, requestContextRemove.source, requestContextRemove.target, null, -1, null)));
                        requestContextRemove.aborted = true;
                        if (requestContextRemove.connection != null) {
                            try {
                                requestContextRemove.connection.disconnect();
                            } catch (Exception e) {
                                LOG.e(FileTransfer.LOG_TAG, "CB-8431 Catch workaround for fatal exception", e);
                            }
                        }
                    }
                }
            });
        }
    }
}

