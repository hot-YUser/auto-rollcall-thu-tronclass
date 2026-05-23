package okhttp3;

import com.android.volley.toolbox.HttpClientStack;
import com.silkimen.http.HttpRequest;
import java.net.URL;
import java.util.List;
import javax.annotation.Nullable;
import okhttp3.Headers;
import okhttp3.internal.Util;
import okhttp3.internal.http.HttpMethod;
public final class Request {

    @Nullable
    final RequestBody body;
    private volatile CacheControl cacheControl;
    final Headers headers;
    final String method;
    final Object tag;
    final HttpUrl url;

    Request(Builder builder) {
        this.url = builder.url;
        this.method = builder.method;
        this.headers = builder.headers.build();
        this.body = builder.body;
        this.tag = builder.tag != null ? builder.tag : this;
    }

    public HttpUrl url() {
        return this.url;
    }

    public String method() {
        return this.method;
    }

    public Headers headers() {
        return this.headers;
    }

    @Nullable
    public String header(String str) {
        return this.headers.get(str);
    }

    public List<String> headers(String str) {
        return this.headers.values(str);
    }

    @Nullable
    public RequestBody body() {
        return this.body;
    }

    public Object tag() {
        return this.tag;
    }

    public Builder newBuilder() {
        return new Builder(this);
    }

    public CacheControl cacheControl() {
        CacheControl cacheControl = this.cacheControl;
        if (cacheControl != null) {
            return cacheControl;
        }
        CacheControl cacheControl2 = CacheControl.parse(this.headers);
        this.cacheControl = cacheControl2;
        return cacheControl2;
    }

    public boolean isHttps() {
        return this.url.isHttps();
    }

    public String toString() {
        StringBuilder sbAppend = new StringBuilder("Request{method=").append(this.method).append(", url=").append(this.url).append(", tag=");
        Object obj = this.tag;
        if (obj == this) {
            obj = null;
        }
        return sbAppend.append(obj).append('}').toString();
    }

    public static class Builder {
        RequestBody body;
        Headers.Builder headers;
        String method;
        Object tag;
        HttpUrl url;

        public Builder() {
            this.method = "GET";
            this.headers = new Headers.Builder();
        }

        Builder(Request request) {
            this.url = request.url;
            this.method = request.method;
            this.body = request.body;
            this.tag = request.tag;
            this.headers = request.headers.newBuilder();
        }

        public Builder url(HttpUrl httpUrl) {
            if (httpUrl == null) {
                throw new NullPointerException("url == null");
            }
            this.url = httpUrl;
            return this;
        }

        public Builder url(String str) {
            if (str == null) {
                throw new NullPointerException("url == null");
            }
            if (str.regionMatches(true, 0, "ws:", 0, 3)) {
                str = "http:" + str.substring(3);
            } else if (str.regionMatches(true, 0, "wss:", 0, 4)) {
                str = "https:" + str.substring(4);
            }
            HttpUrl httpUrl = HttpUrl.parse(str);
            if (httpUrl == null) {
                throw new IllegalArgumentException("unexpected url: " + str);
            }
            return url(httpUrl);
        }

        public Builder url(URL url) {
            if (url == null) {
                throw new NullPointerException("url == null");
            }
            HttpUrl httpUrl = HttpUrl.get(url);
            if (httpUrl == null) {
                throw new IllegalArgumentException("unexpected url: " + url);
            }
            return url(httpUrl);
        }

        public Builder header(String str, String str2) {
            this.headers.set(str, str2);
            return this;
        }

        public Builder addHeader(String str, String str2) {
            this.headers.add(str, str2);
            return this;
        }

        public Builder removeHeader(String str) {
            this.headers.removeAll(str);
            return this;
        }

        public Builder headers(Headers headers) {
            this.headers = headers.newBuilder();
            return this;
        }

        public Builder cacheControl(CacheControl cacheControl) {
            String string = cacheControl.toString();
            return string.isEmpty() ? removeHeader(HttpRequest.HEADER_CACHE_CONTROL) : header(HttpRequest.HEADER_CACHE_CONTROL, string);
        }

        public Builder get() {
            return method("GET", null);
        }

        public Builder head() {
            return method(HttpRequest.METHOD_HEAD, null);
        }

        public Builder post(RequestBody requestBody) {
            return method("POST", requestBody);
        }

        public Builder delete(@Nullable RequestBody requestBody) {
            return method(HttpRequest.METHOD_DELETE, requestBody);
        }

        public Builder delete() {
            return delete(Util.EMPTY_REQUEST);
        }

        public Builder put(RequestBody requestBody) {
            return method(HttpRequest.METHOD_PUT, requestBody);
        }

        public Builder patch(RequestBody requestBody) {
            return method(HttpClientStack.HttpPatch.METHOD_NAME, requestBody);
        }

        public Builder method(String str, @Nullable RequestBody requestBody) {
            if (str == null) {
                throw new NullPointerException("method == null");
            }
            if (str.length() == 0) {
                throw new IllegalArgumentException("method.length() == 0");
            }
            if (requestBody != null && !HttpMethod.permitsRequestBody(str)) {
                throw new IllegalArgumentException("method " + str + " must not have a request body.");
            }
            if (requestBody == null && HttpMethod.requiresRequestBody(str)) {
                throw new IllegalArgumentException("method " + str + " must have a request body.");
            }
            this.method = str;
            this.body = requestBody;
            return this;
        }

        public Builder tag(Object obj) {
            this.tag = obj;
            return this;
        }

        public Request build() {
            if (this.url == null) {
                throw new IllegalStateException("url == null");
            }
            return new Request(this);
        }
    }
}

