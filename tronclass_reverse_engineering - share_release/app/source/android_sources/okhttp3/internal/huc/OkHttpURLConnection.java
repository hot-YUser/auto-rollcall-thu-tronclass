package okhttp3.internal.huc;

import com.android.volley.toolbox.HttpClientStack;
import com.silkimen.http.HttpRequest;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InterruptedIOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.ProtocolException;
import java.net.Proxy;
import java.net.SocketPermission;
import java.net.URL;
import java.security.Permission;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Dispatcher;
import okhttp3.Handshake;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.internal.Internal;
import okhttp3.internal.JavaNetHeaders;
import okhttp3.internal.URLFilter;
import okhttp3.internal.Version;
import okhttp3.internal.http.HttpDate;
import okhttp3.internal.http.HttpHeaders;
import okhttp3.internal.http.HttpMethod;
import okhttp3.internal.http.StatusLine;
import okhttp3.internal.platform.Platform;
import okio.Buffer;
public final class OkHttpURLConnection extends HttpURLConnection implements Callback {
    Call call;
    private Throwable callFailure;
    OkHttpClient client;
    boolean connectPending;
    private boolean executed;
    private long fixedContentLength;
    Handshake handshake;
    private final Object lock;
    private final NetworkInterceptor networkInterceptor;
    Response networkResponse;
    Proxy proxy;
    private Headers.Builder requestHeaders;
    private Response response;
    private Headers responseHeaders;
    URLFilter urlFilter;
    public static final String SELECTED_PROTOCOL = Platform.get().getPrefix() + "-Selected-Protocol";
    public static final String RESPONSE_SOURCE = Platform.get().getPrefix() + "-Response-Source";
    private static final Set<String> METHODS = new LinkedHashSet(Arrays.asList(HttpRequest.METHOD_OPTIONS, "GET", HttpRequest.METHOD_HEAD, "POST", HttpRequest.METHOD_PUT, HttpRequest.METHOD_DELETE, HttpRequest.METHOD_TRACE, HttpClientStack.HttpPatch.METHOD_NAME));

    public OkHttpURLConnection(URL url, OkHttpClient okHttpClient) {
        super(url);
        this.networkInterceptor = new NetworkInterceptor();
        this.requestHeaders = new Headers.Builder();
        this.fixedContentLength = -1L;
        this.lock = new Object();
        this.connectPending = true;
        this.client = okHttpClient;
    }

    public OkHttpURLConnection(URL url, OkHttpClient okHttpClient, URLFilter uRLFilter) {
        this(url, okHttpClient);
        this.urlFilter = uRLFilter;
    }

    @Override // java.net.URLConnection
    public void connect() throws IOException {
        if (this.executed) {
            return;
        }
        Call callBuildCall = buildCall();
        this.executed = true;
        callBuildCall.enqueue(this);
        synchronized (this.lock) {
            while (this.connectPending && this.response == null && this.callFailure == null) {
                try {
                    this.lock.wait();
                } catch (InterruptedException unused) {
                    throw new InterruptedIOException();
                }
            }
            Throwable th = this.callFailure;
            if (th != null) {
                throw propagate(th);
            }
        }
    }

    @Override // java.net.HttpURLConnection
    public void disconnect() {
        if (this.call == null) {
            return;
        }
        this.networkInterceptor.proceed();
        this.call.cancel();
    }

    @Override // java.net.HttpURLConnection
    public InputStream getErrorStream() {
        try {
            Response response = getResponse(true);
            if (HttpHeaders.hasBody(response) && response.code() >= 400) {
                return response.body().byteStream();
            }
        } catch (IOException unused) {
        }
        return null;
    }

    private Headers getHeaders() throws IOException {
        if (this.responseHeaders == null) {
            Response response = getResponse(true);
            this.responseHeaders = response.headers().newBuilder().add(SELECTED_PROTOCOL, response.protocol().toString()).add(RESPONSE_SOURCE, responseSourceHeader(response)).build();
        }
        return this.responseHeaders;
    }

    private static String responseSourceHeader(Response response) {
        if (response.networkResponse() == null) {
            if (response.cacheResponse() == null) {
                return "NONE";
            }
            return "CACHE " + response.code();
        }
        if (response.cacheResponse() == null) {
            return "NETWORK " + response.code();
        }
        return "CONDITIONAL_CACHE " + response.networkResponse().code();
    }

    @Override // java.net.HttpURLConnection, java.net.URLConnection
    public String getHeaderField(int i) {
        try {
            Headers headers = getHeaders();
            if (i >= 0 && i < headers.size()) {
                return headers.value(i);
            }
        } catch (IOException unused) {
        }
        return null;
    }

    @Override // java.net.URLConnection
    public String getHeaderField(String str) {
        String string;
        try {
            if (str == null) {
                string = StatusLine.get(getResponse(true)).toString();
            } else {
                string = getHeaders().get(str);
            }
            return string;
        } catch (IOException unused) {
            return null;
        }
    }

    @Override // java.net.HttpURLConnection, java.net.URLConnection
    public String getHeaderFieldKey(int i) {
        try {
            Headers headers = getHeaders();
            if (i >= 0 && i < headers.size()) {
                return headers.name(i);
            }
        } catch (IOException unused) {
        }
        return null;
    }

    @Override // java.net.URLConnection
    public Map<String, List<String>> getHeaderFields() {
        try {
            return JavaNetHeaders.toMultimap(getHeaders(), StatusLine.get(getResponse(true)).toString());
        } catch (IOException unused) {
            return Collections.emptyMap();
        }
    }

    @Override // java.net.URLConnection
    public Map<String, List<String>> getRequestProperties() {
        if (this.connected) {
            throw new IllegalStateException("Cannot access request header fields after connection is set");
        }
        return JavaNetHeaders.toMultimap(this.requestHeaders.build(), null);
    }

    @Override // java.net.URLConnection
    public InputStream getInputStream() throws IOException {
        if (!this.doInput) {
            throw new ProtocolException("This protocol does not support input");
        }
        Response response = getResponse(false);
        if (response.code() >= 400) {
            throw new FileNotFoundException(this.url.toString());
        }
        return response.body().byteStream();
    }

    @Override // java.net.URLConnection
    public OutputStream getOutputStream() throws IOException {
        OutputStreamRequestBody outputStreamRequestBody = (OutputStreamRequestBody) buildCall().request().body();
        if (outputStreamRequestBody == null) {
            throw new ProtocolException("method does not support a request body: " + this.method);
        }
        if (outputStreamRequestBody instanceof StreamedRequestBody) {
            connect();
            this.networkInterceptor.proceed();
        }
        if (outputStreamRequestBody.isClosed()) {
            throw new ProtocolException("cannot write request body after response has been read");
        }
        return outputStreamRequestBody.outputStream();
    }

    @Override // java.net.HttpURLConnection, java.net.URLConnection
    public Permission getPermission() throws IOException {
        int iDefaultPort;
        URL url = getURL();
        String host = url.getHost();
        if (url.getPort() != -1) {
            iDefaultPort = url.getPort();
        } else {
            iDefaultPort = HttpUrl.defaultPort(url.getProtocol());
        }
        if (usingProxy()) {
            InetSocketAddress inetSocketAddress = (InetSocketAddress) this.client.proxy().address();
            host = inetSocketAddress.getHostName();
            iDefaultPort = inetSocketAddress.getPort();
        }
        return new SocketPermission(host + ":" + iDefaultPort, "connect, resolve");
    }

    @Override // java.net.URLConnection
    public String getRequestProperty(String str) {
        if (str == null) {
            return null;
        }
        return this.requestHeaders.get(str);
    }

    @Override // java.net.URLConnection
    public void setConnectTimeout(int i) {
        this.client = this.client.newBuilder().connectTimeout(i, TimeUnit.MILLISECONDS).build();
    }

    @Override // java.net.HttpURLConnection
    public void setInstanceFollowRedirects(boolean z) {
        this.client = this.client.newBuilder().followRedirects(z).build();
    }

    @Override // java.net.HttpURLConnection
    public boolean getInstanceFollowRedirects() {
        return this.client.followRedirects();
    }

    @Override // java.net.URLConnection
    public int getConnectTimeout() {
        return this.client.connectTimeoutMillis();
    }

    @Override // java.net.URLConnection
    public void setReadTimeout(int i) {
        this.client = this.client.newBuilder().readTimeout(i, TimeUnit.MILLISECONDS).build();
    }

    @Override // java.net.URLConnection
    public int getReadTimeout() {
        return this.client.readTimeoutMillis();
    }

    private Call buildCall() throws IOException {
        OutputStreamRequestBody bufferedRequestBody;
        Call call = this.call;
        if (call != null) {
            return call;
        }
        boolean z = true;
        this.connected = true;
        if (this.doOutput) {
            if (this.method.equals("GET")) {
                this.method = "POST";
            } else if (!HttpMethod.permitsRequestBody(this.method)) {
                throw new ProtocolException(this.method + " does not support writing");
            }
        }
        if (this.requestHeaders.get(HttpRequest.HEADER_USER_AGENT) == null) {
            this.requestHeaders.add(HttpRequest.HEADER_USER_AGENT, defaultUserAgent());
        }
        if (HttpMethod.permitsRequestBody(this.method)) {
            if (this.requestHeaders.get("Content-Type") == null) {
                this.requestHeaders.add("Content-Type", "application/x-www-form-urlencoded");
            }
            long j = -1;
            if (this.fixedContentLength == -1 && this.chunkLength <= 0) {
                z = false;
            }
            String str = this.requestHeaders.get(HttpRequest.HEADER_CONTENT_LENGTH);
            long j2 = this.fixedContentLength;
            if (j2 != -1) {
                j = j2;
            } else if (str != null) {
                j = Long.parseLong(str);
            }
            if (z) {
                bufferedRequestBody = new StreamedRequestBody(j);
            } else {
                bufferedRequestBody = new BufferedRequestBody(j);
            }
            bufferedRequestBody.timeout().timeout(this.client.writeTimeoutMillis(), TimeUnit.MILLISECONDS);
        } else {
            bufferedRequestBody = null;
        }
        Request requestBuild = new Request.Builder().url(Internal.instance.getHttpUrlChecked(getURL().toString())).headers(this.requestHeaders.build()).method(this.method, bufferedRequestBody).build();
        URLFilter uRLFilter = this.urlFilter;
        if (uRLFilter != null) {
            uRLFilter.checkURLPermitted(requestBuild.url().url());
        }
        OkHttpClient.Builder builderNewBuilder = this.client.newBuilder();
        builderNewBuilder.interceptors().clear();
        builderNewBuilder.interceptors().add(UnexpectedException.INTERCEPTOR);
        builderNewBuilder.networkInterceptors().clear();
        builderNewBuilder.networkInterceptors().add(this.networkInterceptor);
        builderNewBuilder.dispatcher(new Dispatcher(this.client.dispatcher().executorService()));
        if (!getUseCaches()) {
            builderNewBuilder.cache(null);
        }
        Call callNewCall = builderNewBuilder.build().newCall(requestBuild);
        this.call = callNewCall;
        return callNewCall;
    }

    private String defaultUserAgent() {
        String property = System.getProperty("http.agent");
        return property != null ? toHumanReadableAscii(property) : Version.userAgent();
    }

    private static String toHumanReadableAscii(String str) {
        int length = str.length();
        int iCharCount = 0;
        while (iCharCount < length) {
            int iCodePointAt = str.codePointAt(iCharCount);
            if (iCodePointAt > 31 && iCodePointAt < 127) {
                iCharCount += Character.charCount(iCodePointAt);
            } else {
                Buffer buffer = new Buffer();
                buffer.writeUtf8(str, 0, iCharCount);
                buffer.writeUtf8CodePoint(63);
                while (true) {
                    iCharCount += Character.charCount(iCodePointAt);
                    if (iCharCount < length) {
                        iCodePointAt = str.codePointAt(iCharCount);
                        buffer.writeUtf8CodePoint((iCodePointAt <= 31 || iCodePointAt >= 127) ? 63 : iCodePointAt);
                    } else {
                        return buffer.readUtf8();
                    }
                }
            }
        }
        return str;
    }

    private Response getResponse(boolean z) throws IOException {
        Response response;
        synchronized (this.lock) {
            Response response2 = this.response;
            if (response2 != null) {
                return response2;
            }
            Throwable th = this.callFailure;
            if (th != null) {
                if (!z || (response = this.networkResponse) == null) {
                    throw propagate(th);
                }
                return response;
            }
            Call callBuildCall = buildCall();
            this.networkInterceptor.proceed();
            OutputStreamRequestBody outputStreamRequestBody = (OutputStreamRequestBody) callBuildCall.request().body();
            if (outputStreamRequestBody != null) {
                outputStreamRequestBody.outputStream().close();
            }
            if (this.executed) {
                synchronized (this.lock) {
                    while (this.response == null && this.callFailure == null) {
                        try {
                            try {
                                this.lock.wait();
                            } catch (InterruptedException unused) {
                                throw new InterruptedIOException();
                            }
                        } finally {
                        }
                    }
                }
            } else {
                this.executed = true;
                try {
                    onResponse(callBuildCall, callBuildCall.execute());
                } catch (IOException e) {
                    onFailure(callBuildCall, e);
                }
            }
            synchronized (this.lock) {
                Throwable th2 = this.callFailure;
                if (th2 != null) {
                    throw propagate(th2);
                }
                Response response3 = this.response;
                if (response3 != null) {
                    return response3;
                }
                throw new AssertionError();
            }
        }
    }

    @Override // java.net.HttpURLConnection
    public boolean usingProxy() {
        if (this.proxy != null) {
            return true;
        }
        Proxy proxy = this.client.proxy();
        return (proxy == null || proxy.type() == Proxy.Type.DIRECT) ? false : true;
    }

    @Override // java.net.HttpURLConnection
    public String getResponseMessage() throws IOException {
        return getResponse(true).message();
    }

    @Override // java.net.HttpURLConnection
    public int getResponseCode() throws IOException {
        return getResponse(true).code();
    }

    @Override // java.net.URLConnection
    public void setRequestProperty(String str, String str2) {
        if (this.connected) {
            throw new IllegalStateException("Cannot set request property after connection is made");
        }
        if (str == null) {
            throw new NullPointerException("field == null");
        }
        if (str2 == null) {
            Platform.get().log(5, "Ignoring header " + str + " because its value was null.", null);
        } else {
            this.requestHeaders.set(str, str2);
        }
    }

    @Override // java.net.URLConnection
    public void setIfModifiedSince(long j) {
        super.setIfModifiedSince(j);
        if (this.ifModifiedSince != 0) {
            this.requestHeaders.set("If-Modified-Since", HttpDate.format(new Date(this.ifModifiedSince)));
        } else {
            this.requestHeaders.removeAll("If-Modified-Since");
        }
    }

    @Override // java.net.URLConnection
    public void addRequestProperty(String str, String str2) {
        if (this.connected) {
            throw new IllegalStateException("Cannot add request property after connection is made");
        }
        if (str == null) {
            throw new NullPointerException("field == null");
        }
        if (str2 == null) {
            Platform.get().log(5, "Ignoring header " + str + " because its value was null.", null);
        } else {
            this.requestHeaders.add(str, str2);
        }
    }

    @Override // java.net.HttpURLConnection
    public void setRequestMethod(String str) throws ProtocolException {
        Set<String> set = METHODS;
        if (!set.contains(str)) {
            throw new ProtocolException("Expected one of " + set + " but was " + str);
        }
        this.method = str;
    }

    @Override // java.net.HttpURLConnection
    public void setFixedLengthStreamingMode(int i) {
        setFixedLengthStreamingMode(i);
    }

    @Override // java.net.HttpURLConnection
    public void setFixedLengthStreamingMode(long j) {
        if (((HttpURLConnection) this).connected) {
            throw new IllegalStateException("Already connected");
        }
        if (this.chunkLength > 0) {
            throw new IllegalStateException("Already in chunked mode");
        }
        if (j < 0) {
            throw new IllegalArgumentException("contentLength < 0");
        }
        this.fixedContentLength = j;
        ((HttpURLConnection) this).fixedContentLength = (int) Math.min(j, 2147483647L);
    }

    @Override // okhttp3.Callback
    public void onFailure(Call call, IOException iOException) {
        synchronized (this.lock) {
            boolean z = iOException instanceof UnexpectedException;
            IOException cause = iOException;
            if (z) {
                cause = iOException.getCause();
            }
            this.callFailure = cause;
            this.lock.notifyAll();
        }
    }

    @Override // okhttp3.Callback
    public void onResponse(Call call, Response response) {
        synchronized (this.lock) {
            this.response = response;
            this.handshake = response.handshake();
            this.url = response.request().url().url();
            this.lock.notifyAll();
        }
    }

    static final class UnexpectedException extends IOException {
        static final Interceptor INTERCEPTOR = new Interceptor() { // from class: okhttp3.internal.huc.OkHttpURLConnection.UnexpectedException.1
            @Override // okhttp3.Interceptor
            public Response intercept(Interceptor.Chain chain) throws IOException {
                try {
                    return chain.proceed(chain.request());
                } catch (Error | RuntimeException e) {
                    throw new UnexpectedException(e);
                }
            }
        };

        UnexpectedException(Throwable th) {
            super(th);
        }
    }

    private static IOException propagate(Throwable th) throws IOException {
        if (th instanceof IOException) {
            throw ((IOException) th);
        }
        if (th instanceof Error) {
            throw ((Error) th);
        }
        if (th instanceof RuntimeException) {
            throw ((RuntimeException) th);
        }
        throw new AssertionError();
    }

    final class NetworkInterceptor implements Interceptor {
        private boolean proceed;

        NetworkInterceptor() {
        }

        public void proceed() {
            synchronized (OkHttpURLConnection.this.lock) {
                this.proceed = true;
                OkHttpURLConnection.this.lock.notifyAll();
            }
        }

        @Override // okhttp3.Interceptor
        public Response intercept(Interceptor.Chain chain) throws IOException {
            Request request = chain.request();
            if (OkHttpURLConnection.this.urlFilter != null) {
                OkHttpURLConnection.this.urlFilter.checkURLPermitted(request.url().url());
            }
            synchronized (OkHttpURLConnection.this.lock) {
                OkHttpURLConnection.this.connectPending = false;
                OkHttpURLConnection.this.proxy = chain.connection().route().proxy();
                OkHttpURLConnection.this.handshake = chain.connection().handshake();
                OkHttpURLConnection.this.lock.notifyAll();
                while (!this.proceed) {
                    try {
                        OkHttpURLConnection.this.lock.wait();
                    } catch (InterruptedException unused) {
                        throw new InterruptedIOException();
                    }
                }
            }
            if (request.body() instanceof OutputStreamRequestBody) {
                request = ((OutputStreamRequestBody) request.body()).prepareToSendRequest(request);
            }
            Response responseProceed = chain.proceed(request);
            synchronized (OkHttpURLConnection.this.lock) {
                OkHttpURLConnection.this.networkResponse = responseProceed;
                OkHttpURLConnection.this.url = responseProceed.request().url().url();
            }
            return responseProceed;
        }
    }
}

