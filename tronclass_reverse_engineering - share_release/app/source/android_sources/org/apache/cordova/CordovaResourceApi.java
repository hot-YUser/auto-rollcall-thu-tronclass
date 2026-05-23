package org.apache.cordova;

import android.content.ContentResolver;
import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.content.res.AssetManager;
import android.database.Cursor;
import android.net.Uri;
import android.os.Looper;
import android.util.Base64;
import android.webkit.MimeTypeMap;
import com.getcapacitor.Bridge;
import com.silkimen.http.HttpRequest;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.channels.FileChannel;
import java.util.Locale;
public class CordovaResourceApi {
    private static final String[] LOCAL_FILE_PROJECTION = {"_data"};
    private static final String LOG_TAG = "CordovaResourceApi";
    public static final String PLUGIN_URI_SCHEME = "cdvplugin";
    public static final int URI_TYPE_ASSET = 1;
    public static final int URI_TYPE_CONTENT = 2;
    public static final int URI_TYPE_DATA = 4;
    public static final int URI_TYPE_FILE = 0;
    public static final int URI_TYPE_HTTP = 5;
    public static final int URI_TYPE_HTTPS = 6;
    public static final int URI_TYPE_PLUGIN = 7;
    public static final int URI_TYPE_RESOURCE = 3;
    public static final int URI_TYPE_UNKNOWN = -1;
    public static Thread jsThread;
    private final AssetManager assetManager;
    private final ContentResolver contentResolver;
    private final PluginManager pluginManager;
    private boolean threadCheckingEnabled = true;

    public CordovaResourceApi(Context context, PluginManager pluginManager) {
        this.contentResolver = context.getContentResolver();
        this.assetManager = context.getAssets();
        this.pluginManager = pluginManager;
    }

    public void setThreadCheckingEnabled(boolean z) {
        this.threadCheckingEnabled = z;
    }

    public boolean isThreadCheckingEnabled() {
        return this.threadCheckingEnabled;
    }

    public static int getUriType(Uri uri) {
        assertNonRelative(uri);
        String scheme = uri.getScheme();
        if ("content".equalsIgnoreCase(scheme)) {
            return 2;
        }
        if ("android.resource".equalsIgnoreCase(scheme)) {
            return 3;
        }
        if ("file".equalsIgnoreCase(scheme)) {
            return uri.getPath().startsWith("/android_asset/") ? 1 : 0;
        }
        if ("data".equalsIgnoreCase(scheme)) {
            return 4;
        }
        if (Bridge.CAPACITOR_HTTP_SCHEME.equalsIgnoreCase(scheme)) {
            return 5;
        }
        if (Bridge.CAPACITOR_HTTPS_SCHEME.equalsIgnoreCase(scheme)) {
            return 6;
        }
        return PLUGIN_URI_SCHEME.equalsIgnoreCase(scheme) ? 7 : -1;
    }

    public Uri remapUri(Uri uri) {
        assertNonRelative(uri);
        Uri uriRemapUri = this.pluginManager.remapUri(uri);
        return uriRemapUri != null ? uriRemapUri : uri;
    }

    public String remapPath(String str) {
        return remapUri(Uri.fromFile(new File(str))).getPath();
    }

    public File mapUriToFile(Uri uri) {
        assertBackgroundThread();
        int uriType = getUriType(uri);
        if (uriType == 0) {
            return new File(uri.getPath());
        }
        if (uriType != 2) {
            return null;
        }
        ContentResolver contentResolver = this.contentResolver;
        String[] strArr = LOCAL_FILE_PROJECTION;
        Cursor cursorQuery = contentResolver.query(uri, strArr, null, null, null);
        if (cursorQuery == null) {
            return null;
        }
        try {
            int columnIndex = cursorQuery.getColumnIndex(strArr[0]);
            if (columnIndex != -1 && cursorQuery.getCount() > 0) {
                cursorQuery.moveToFirst();
                String string = cursorQuery.getString(columnIndex);
                if (string != null) {
                    return new File(string);
                }
            }
            return null;
        } finally {
            cursorQuery.close();
        }
    }

    public String getMimeType(Uri uri) {
        switch (getUriType(uri)) {
            case 0:
            case 1:
                return getMimeTypeFromPath(uri.getPath());
            case 2:
            case 3:
                return this.contentResolver.getType(uri);
            case 4:
                return getDataUriMimeType(uri);
            case 5:
            case 6:
                try {
                    HttpURLConnection httpURLConnection = (HttpURLConnection) new URL(uri.toString()).openConnection();
                    httpURLConnection.setDoInput(false);
                    httpURLConnection.setRequestMethod(HttpRequest.METHOD_HEAD);
                    String headerField = httpURLConnection.getHeaderField("Content-Type");
                    return headerField != null ? headerField.split(";")[0] : headerField;
                } catch (IOException unused) {
                    return null;
                }
            default:
                return null;
        }
    }

    private String getMimeTypeFromPath(String str) {
        int iLastIndexOf = str.lastIndexOf(46);
        if (iLastIndexOf != -1) {
            str = str.substring(iLastIndexOf + 1);
        }
        String lowerCase = str.toLowerCase(Locale.getDefault());
        if (lowerCase.equals("3ga")) {
            return "audio/3gpp";
        }
        if (lowerCase.equals("js")) {
            return "text/javascript";
        }
        return MimeTypeMap.getSingleton().getMimeTypeFromExtension(lowerCase);
    }

    public OpenForReadResult openForRead(Uri uri) throws IOException {
        return openForRead(uri, false);
    }

    public OpenForReadResult openForRead(Uri uri, boolean z) throws IOException {
        InputStream inputStreamOpen;
        long length;
        if (!z) {
            assertBackgroundThread();
        }
        switch (getUriType(uri)) {
            case 0:
                FileInputStream fileInputStream = new FileInputStream(uri.getPath());
                return new OpenForReadResult(uri, fileInputStream, getMimeTypeFromPath(uri.getPath()), fileInputStream.getChannel().size(), null);
            case 1:
                String strSubstring = uri.getPath().substring(15);
                AssetFileDescriptor assetFileDescriptorOpenFd = null;
                try {
                    assetFileDescriptorOpenFd = this.assetManager.openFd(strSubstring);
                    inputStreamOpen = assetFileDescriptorOpenFd.createInputStream();
                    length = assetFileDescriptorOpenFd.getLength();
                    break;
                } catch (FileNotFoundException unused) {
                    inputStreamOpen = this.assetManager.open(strSubstring);
                    length = -1;
                }
                return new OpenForReadResult(uri, inputStreamOpen, getMimeTypeFromPath(strSubstring), length, assetFileDescriptorOpenFd);
            case 2:
            case 3:
                String type = this.contentResolver.getType(uri);
                AssetFileDescriptor assetFileDescriptorOpenAssetFileDescriptor = this.contentResolver.openAssetFileDescriptor(uri, "r");
                return new OpenForReadResult(uri, assetFileDescriptorOpenAssetFileDescriptor.createInputStream(), type, assetFileDescriptorOpenAssetFileDescriptor.getLength(), assetFileDescriptorOpenAssetFileDescriptor);
            case 4:
                OpenForReadResult dataUri = readDataUri(uri);
                if (dataUri != null) {
                    return dataUri;
                }
                break;
            case 5:
            case 6:
                HttpURLConnection httpURLConnection = (HttpURLConnection) new URL(uri.toString()).openConnection();
                httpURLConnection.setDoInput(true);
                String headerField = httpURLConnection.getHeaderField("Content-Type");
                if (headerField != null) {
                    headerField = headerField.split(";")[0];
                }
                return new OpenForReadResult(uri, httpURLConnection.getInputStream(), headerField, httpURLConnection.getContentLength(), null);
            case 7:
                CordovaPlugin plugin = this.pluginManager.getPlugin(uri.getHost());
                if (plugin == null) {
                    throw new FileNotFoundException("Invalid plugin ID in URI: " + uri);
                }
                return plugin.handleOpenForRead(uri);
        }
        throw new FileNotFoundException("URI not supported by CordovaResourceApi: " + uri);
    }

    public OutputStream openOutputStream(Uri uri) throws IOException {
        return openOutputStream(uri, false);
    }

    public OutputStream openOutputStream(Uri uri, boolean z) throws IOException {
        assertBackgroundThread();
        int uriType = getUriType(uri);
        if (uriType != 0) {
            if (uriType == 2 || uriType == 3) {
                return this.contentResolver.openAssetFileDescriptor(uri, z ? "wa" : "w").createOutputStream();
            }
            throw new FileNotFoundException("URI not supported by CordovaResourceApi: " + uri);
        }
        File file = new File(uri.getPath());
        File parentFile = file.getParentFile();
        if (parentFile != null) {
            parentFile.mkdirs();
        }
        return new FileOutputStream(file, z);
    }

    public HttpURLConnection createHttpConnection(Uri uri) throws IOException {
        assertBackgroundThread();
        return (HttpURLConnection) new URL(uri.toString()).openConnection();
    }

    public void copyResource(OpenForReadResult openForReadResult, OutputStream outputStream) throws IOException {
        assertBackgroundThread();
        try {
            InputStream inputStream = openForReadResult.inputStream;
            if ((inputStream instanceof FileInputStream) && (outputStream instanceof FileOutputStream)) {
                FileChannel channel = ((FileInputStream) openForReadResult.inputStream).getChannel();
                FileChannel channel2 = ((FileOutputStream) outputStream).getChannel();
                long j = openForReadResult.length;
                channel.position(openForReadResult.assetFd != null ? openForReadResult.assetFd.getStartOffset() : 0L);
                channel2.transferFrom(channel, 0L, j);
            } else {
                byte[] bArr = new byte[8192];
                while (true) {
                    int i = inputStream.read(bArr, 0, 8192);
                    if (i <= 0) {
                        break;
                    } else {
                        outputStream.write(bArr, 0, i);
                    }
                }
            }
        } finally {
            openForReadResult.inputStream.close();
            if (outputStream != null) {
                outputStream.close();
            }
        }
    }

    public void copyResource(Uri uri, OutputStream outputStream) throws IOException {
        copyResource(openForRead(uri), outputStream);
    }

    public void copyResource(Uri uri, Uri uri2) throws IOException {
        copyResource(openForRead(uri), openOutputStream(uri2));
    }

    private void assertBackgroundThread() {
        if (this.threadCheckingEnabled) {
            Thread threadCurrentThread = Thread.currentThread();
            if (threadCurrentThread == Looper.getMainLooper().getThread()) {
                throw new IllegalStateException("Do not perform IO operations on the UI thread. Use CordovaInterface.getThreadPool() instead.");
            }
            if (threadCurrentThread == jsThread) {
                throw new IllegalStateException("Tried to perform an IO operation on the WebCore thread. Use CordovaInterface.getThreadPool() instead.");
            }
        }
    }

    private String getDataUriMimeType(Uri uri) {
        String schemeSpecificPart = uri.getSchemeSpecificPart();
        int iIndexOf = schemeSpecificPart.indexOf(44);
        if (iIndexOf == -1) {
            return null;
        }
        String[] strArrSplit = schemeSpecificPart.substring(0, iIndexOf).split(";");
        if (strArrSplit.length > 0) {
            return strArrSplit[0];
        }
        return null;
    }

    private OpenForReadResult readDataUri(Uri uri) {
        byte[] bytes;
        String schemeSpecificPart = uri.getSchemeSpecificPart();
        int iIndexOf = schemeSpecificPart.indexOf(44);
        if (iIndexOf == -1) {
            return null;
        }
        String[] strArrSplit = schemeSpecificPart.substring(0, iIndexOf).split(";");
        String str = strArrSplit.length > 0 ? strArrSplit[0] : null;
        boolean z = false;
        for (int i = 1; i < strArrSplit.length; i++) {
            if ("base64".equalsIgnoreCase(strArrSplit[i])) {
                z = true;
            }
        }
        String strSubstring = schemeSpecificPart.substring(iIndexOf + 1);
        if (z) {
            bytes = Base64.decode(strSubstring, 0);
        } else {
            try {
                bytes = strSubstring.getBytes(HttpRequest.CHARSET_UTF8);
            } catch (UnsupportedEncodingException unused) {
                bytes = strSubstring.getBytes();
            }
        }
        return new OpenForReadResult(uri, new ByteArrayInputStream(bytes), str, bytes.length, null);
    }

    private static void assertNonRelative(Uri uri) {
        if (!uri.isAbsolute()) {
            throw new IllegalArgumentException("Relative URIs are not supported.");
        }
    }

    public static final class OpenForReadResult {
        public final AssetFileDescriptor assetFd;
        public final InputStream inputStream;
        public final long length;
        public final String mimeType;
        public final Uri uri;

        public OpenForReadResult(Uri uri, InputStream inputStream, String str, long j, AssetFileDescriptor assetFileDescriptor) {
            this.uri = uri;
            this.inputStream = inputStream;
            this.mimeType = str;
            this.length = j;
            this.assetFd = assetFileDescriptor;
        }
    }
}

