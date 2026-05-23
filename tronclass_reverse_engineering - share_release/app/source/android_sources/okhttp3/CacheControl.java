package okhttp3;

import com.getcapacitor.Bridge;
import com.silkimen.http.HttpRequest;
import java.util.concurrent.TimeUnit;
import javax.annotation.Nullable;
import okhttp3.internal.http.HttpHeaders;
public final class CacheControl {

    @Nullable
    String headerValue;
    private final boolean immutable;
    private final boolean isPrivate;
    private final boolean isPublic;
    private final int maxAgeSeconds;
    private final int maxStaleSeconds;
    private final int minFreshSeconds;
    private final boolean mustRevalidate;
    private final boolean noCache;
    private final boolean noStore;
    private final boolean noTransform;
    private final boolean onlyIfCached;
    private final int sMaxAgeSeconds;
    public static final CacheControl FORCE_NETWORK = new Builder().noCache().build();
    public static final CacheControl FORCE_CACHE = new Builder().onlyIfCached().maxStale(Integer.MAX_VALUE, TimeUnit.SECONDS).build();

    private CacheControl(boolean z, boolean z2, int i, int i2, boolean z3, boolean z4, boolean z5, int i3, int i4, boolean z6, boolean z7, boolean z8, @Nullable String str) {
        this.noCache = z;
        this.noStore = z2;
        this.maxAgeSeconds = i;
        this.sMaxAgeSeconds = i2;
        this.isPrivate = z3;
        this.isPublic = z4;
        this.mustRevalidate = z5;
        this.maxStaleSeconds = i3;
        this.minFreshSeconds = i4;
        this.onlyIfCached = z6;
        this.noTransform = z7;
        this.immutable = z8;
        this.headerValue = str;
    }

    CacheControl(Builder builder) {
        this.noCache = builder.noCache;
        this.noStore = builder.noStore;
        this.maxAgeSeconds = builder.maxAgeSeconds;
        this.sMaxAgeSeconds = -1;
        this.isPrivate = false;
        this.isPublic = false;
        this.mustRevalidate = false;
        this.maxStaleSeconds = builder.maxStaleSeconds;
        this.minFreshSeconds = builder.minFreshSeconds;
        this.onlyIfCached = builder.onlyIfCached;
        this.noTransform = builder.noTransform;
        this.immutable = builder.immutable;
    }

    public boolean noCache() {
        return this.noCache;
    }

    public boolean noStore() {
        return this.noStore;
    }

    public int maxAgeSeconds() {
        return this.maxAgeSeconds;
    }

    public int sMaxAgeSeconds() {
        return this.sMaxAgeSeconds;
    }

    public boolean isPrivate() {
        return this.isPrivate;
    }

    public boolean isPublic() {
        return this.isPublic;
    }

    public boolean mustRevalidate() {
        return this.mustRevalidate;
    }

    public int maxStaleSeconds() {
        return this.maxStaleSeconds;
    }

    public int minFreshSeconds() {
        return this.minFreshSeconds;
    }

    public boolean onlyIfCached() {
        return this.onlyIfCached;
    }

    public boolean noTransform() {
        return this.noTransform;
    }

    public boolean immutable() {
        return this.immutable;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:15:0x0041  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public static CacheControl parse(Headers headers) {
        int i;
        int iSkipUntil;
        String strTrim;
        Headers headers2 = headers;
        int size = headers.size();
        int i2 = 0;
        boolean z = true;
        String str = null;
        boolean z2 = false;
        boolean z3 = false;
        int seconds = -1;
        int seconds2 = -1;
        boolean z4 = false;
        boolean z5 = false;
        boolean z6 = false;
        int seconds3 = -1;
        int seconds4 = -1;
        boolean z7 = false;
        boolean z8 = false;
        boolean z9 = false;
        while (i2 < size) {
            String strName = headers2.name(i2);
            String strValue = headers2.value(i2);
            if (!strName.equalsIgnoreCase(HttpRequest.HEADER_CACHE_CONTROL)) {
                if (!strName.equalsIgnoreCase("Pragma")) {
                    i2++;
                    headers2 = headers;
                }
            } else {
                if (str == null) {
                    str = strValue;
                }
                for (i = 0; i < strValue.length(); i = iSkipUntil) {
                    int iSkipUntil2 = HttpHeaders.skipUntil(strValue, i, "=,;");
                    String strTrim2 = strValue.substring(i, iSkipUntil2).trim();
                    if (iSkipUntil2 == strValue.length() || strValue.charAt(iSkipUntil2) == ',' || strValue.charAt(iSkipUntil2) == ';') {
                        iSkipUntil = iSkipUntil2 + 1;
                        strTrim = null;
                    } else {
                        int iSkipWhitespace = HttpHeaders.skipWhitespace(strValue, iSkipUntil2 + 1);
                        if (iSkipWhitespace < strValue.length() && strValue.charAt(iSkipWhitespace) == '\"') {
                            int i3 = iSkipWhitespace + 1;
                            int iSkipUntil3 = HttpHeaders.skipUntil(strValue, i3, "\"");
                            strTrim = strValue.substring(i3, iSkipUntil3);
                            iSkipUntil = iSkipUntil3 + 1;
                        } else {
                            iSkipUntil = HttpHeaders.skipUntil(strValue, iSkipWhitespace, ",;");
                            strTrim = strValue.substring(iSkipWhitespace, iSkipUntil).trim();
                        }
                    }
                    if ("no-cache".equalsIgnoreCase(strTrim2)) {
                        z2 = true;
                    } else if ("no-store".equalsIgnoreCase(strTrim2)) {
                        z3 = true;
                    } else if ("max-age".equalsIgnoreCase(strTrim2)) {
                        seconds = HttpHeaders.parseSeconds(strTrim, -1);
                    } else if ("s-maxage".equalsIgnoreCase(strTrim2)) {
                        seconds2 = HttpHeaders.parseSeconds(strTrim, -1);
                    } else if ("private".equalsIgnoreCase(strTrim2)) {
                        z4 = true;
                    } else if (Bridge.DEFAULT_WEB_ASSET_DIR.equalsIgnoreCase(strTrim2)) {
                        z5 = true;
                    } else if ("must-revalidate".equalsIgnoreCase(strTrim2)) {
                        z6 = true;
                    } else if ("max-stale".equalsIgnoreCase(strTrim2)) {
                        seconds3 = HttpHeaders.parseSeconds(strTrim, Integer.MAX_VALUE);
                    } else if ("min-fresh".equalsIgnoreCase(strTrim2)) {
                        seconds4 = HttpHeaders.parseSeconds(strTrim, -1);
                    } else if ("only-if-cached".equalsIgnoreCase(strTrim2)) {
                        z7 = true;
                    } else if ("no-transform".equalsIgnoreCase(strTrim2)) {
                        z8 = true;
                    } else if ("immutable".equalsIgnoreCase(strTrim2)) {
                        z9 = true;
                    }
                }
                i2++;
                headers2 = headers;
            }
            z = false;
            while (i < strValue.length()) {
            }
            i2++;
            headers2 = headers;
        }
        return new CacheControl(z2, z3, seconds, seconds2, z4, z5, z6, seconds3, seconds4, z7, z8, z9, !z ? null : str);
    }

    public String toString() {
        String str = this.headerValue;
        if (str != null) {
            return str;
        }
        String strHeaderValue = headerValue();
        this.headerValue = strHeaderValue;
        return strHeaderValue;
    }

    private String headerValue() {
        StringBuilder sb = new StringBuilder();
        if (this.noCache) {
            sb.append("no-cache, ");
        }
        if (this.noStore) {
            sb.append("no-store, ");
        }
        if (this.maxAgeSeconds != -1) {
            sb.append("max-age=").append(this.maxAgeSeconds).append(", ");
        }
        if (this.sMaxAgeSeconds != -1) {
            sb.append("s-maxage=").append(this.sMaxAgeSeconds).append(", ");
        }
        if (this.isPrivate) {
            sb.append("private, ");
        }
        if (this.isPublic) {
            sb.append("public, ");
        }
        if (this.mustRevalidate) {
            sb.append("must-revalidate, ");
        }
        if (this.maxStaleSeconds != -1) {
            sb.append("max-stale=").append(this.maxStaleSeconds).append(", ");
        }
        if (this.minFreshSeconds != -1) {
            sb.append("min-fresh=").append(this.minFreshSeconds).append(", ");
        }
        if (this.onlyIfCached) {
            sb.append("only-if-cached, ");
        }
        if (this.noTransform) {
            sb.append("no-transform, ");
        }
        if (this.immutable) {
            sb.append("immutable, ");
        }
        if (sb.length() == 0) {
            return "";
        }
        sb.delete(sb.length() - 2, sb.length());
        return sb.toString();
    }

    public static final class Builder {
        boolean immutable;
        int maxAgeSeconds = -1;
        int maxStaleSeconds = -1;
        int minFreshSeconds = -1;
        boolean noCache;
        boolean noStore;
        boolean noTransform;
        boolean onlyIfCached;

        public Builder noCache() {
            this.noCache = true;
            return this;
        }

        public Builder noStore() {
            this.noStore = true;
            return this;
        }

        public Builder maxAge(int i, TimeUnit timeUnit) {
            if (i < 0) {
                throw new IllegalArgumentException("maxAge < 0: " + i);
            }
            long seconds = timeUnit.toSeconds(i);
            this.maxAgeSeconds = seconds > 2147483647L ? Integer.MAX_VALUE : (int) seconds;
            return this;
        }

        public Builder maxStale(int i, TimeUnit timeUnit) {
            if (i < 0) {
                throw new IllegalArgumentException("maxStale < 0: " + i);
            }
            long seconds = timeUnit.toSeconds(i);
            this.maxStaleSeconds = seconds > 2147483647L ? Integer.MAX_VALUE : (int) seconds;
            return this;
        }

        public Builder minFresh(int i, TimeUnit timeUnit) {
            if (i < 0) {
                throw new IllegalArgumentException("minFresh < 0: " + i);
            }
            long seconds = timeUnit.toSeconds(i);
            this.minFreshSeconds = seconds > 2147483647L ? Integer.MAX_VALUE : (int) seconds;
            return this;
        }

        public Builder onlyIfCached() {
            this.onlyIfCached = true;
            return this;
        }

        public Builder noTransform() {
            this.noTransform = true;
            return this;
        }

        public Builder immutable() {
            this.immutable = true;
            return this;
        }

        public CacheControl build() {
            return new CacheControl(this);
        }
    }
}

