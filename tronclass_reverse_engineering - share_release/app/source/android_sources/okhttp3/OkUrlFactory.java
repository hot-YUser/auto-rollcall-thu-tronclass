package okhttp3;

import com.getcapacitor.Bridge;
import java.net.HttpURLConnection;
import java.net.Proxy;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLStreamHandler;
import java.net.URLStreamHandlerFactory;
import okhttp3.internal.URLFilter;
import okhttp3.internal.huc.OkHttpURLConnection;
import okhttp3.internal.huc.OkHttpsURLConnection;
public final class OkUrlFactory implements URLStreamHandlerFactory, Cloneable {
    private OkHttpClient client;
    private URLFilter urlFilter;

    public OkUrlFactory(OkHttpClient okHttpClient) {
        this.client = okHttpClient;
    }

    public OkHttpClient client() {
        return this.client;
    }

    public OkUrlFactory setClient(OkHttpClient okHttpClient) {
        this.client = okHttpClient;
        return this;
    }

    void setUrlFilter(URLFilter uRLFilter) {
        this.urlFilter = uRLFilter;
    }

    public OkUrlFactory clone() {
        return new OkUrlFactory(this.client);
    }

    public HttpURLConnection open(URL url) {
        return open(url, this.client.proxy());
    }

    HttpURLConnection open(URL url, Proxy proxy) {
        String protocol = url.getProtocol();
        OkHttpClient okHttpClientBuild = this.client.newBuilder().proxy(proxy).build();
        if (protocol.equals(Bridge.CAPACITOR_HTTP_SCHEME)) {
            return new OkHttpURLConnection(url, okHttpClientBuild, this.urlFilter);
        }
        if (protocol.equals(Bridge.CAPACITOR_HTTPS_SCHEME)) {
            return new OkHttpsURLConnection(url, okHttpClientBuild, this.urlFilter);
        }
        throw new IllegalArgumentException("Unexpected protocol: " + protocol);
    }

    @Override // java.net.URLStreamHandlerFactory
    public URLStreamHandler createURLStreamHandler(final String str) {
        if (str.equals(Bridge.CAPACITOR_HTTP_SCHEME) || str.equals(Bridge.CAPACITOR_HTTPS_SCHEME)) {
            return new URLStreamHandler() { // from class: okhttp3.OkUrlFactory.1
                @Override // java.net.URLStreamHandler
                protected URLConnection openConnection(URL url) {
                    return OkUrlFactory.this.open(url);
                }

                @Override // java.net.URLStreamHandler
                protected URLConnection openConnection(URL url, Proxy proxy) {
                    return OkUrlFactory.this.open(url, proxy);
                }

                @Override // java.net.URLStreamHandler
                protected int getDefaultPort() {
                    if (str.equals(Bridge.CAPACITOR_HTTP_SCHEME)) {
                        return 80;
                    }
                    if (str.equals(Bridge.CAPACITOR_HTTPS_SCHEME)) {
                        return 443;
                    }
                    throw new AssertionError();
                }
            };
        }
        return null;
    }
}

