package okhttp3;

import java.io.IOException;
import java.net.CookieHandler;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import okhttp3.Cookie;
import okhttp3.internal.Util;
import okhttp3.internal.platform.Platform;
public final class JavaNetCookieJar implements CookieJar {
    private final CookieHandler cookieHandler;

    public JavaNetCookieJar(CookieHandler cookieHandler) {
        this.cookieHandler = cookieHandler;
    }

    @Override // okhttp3.CookieJar
    public void saveFromResponse(HttpUrl httpUrl, List<Cookie> list) {
        if (this.cookieHandler != null) {
            ArrayList arrayList = new ArrayList();
            Iterator<Cookie> it = list.iterator();
            while (it.hasNext()) {
                arrayList.add(it.next().toString(true));
            }
            try {
                this.cookieHandler.put(httpUrl.uri(), Collections.singletonMap("Set-Cookie", arrayList));
            } catch (IOException e) {
                Platform.get().log(5, "Saving cookies failed for " + httpUrl.resolve("/..."), e);
            }
        }
    }

    @Override // okhttp3.CookieJar
    public List<Cookie> loadForRequest(HttpUrl httpUrl) {
        try {
            ArrayList arrayList = null;
            for (Map.Entry<String, List<String>> entry : this.cookieHandler.get(httpUrl.uri(), Collections.emptyMap()).entrySet()) {
                String key = entry.getKey();
                if ("Cookie".equalsIgnoreCase(key) || "Cookie2".equalsIgnoreCase(key)) {
                    if (!entry.getValue().isEmpty()) {
                        for (String str : entry.getValue()) {
                            if (arrayList == null) {
                                arrayList = new ArrayList();
                            }
                            arrayList.addAll(decodeHeaderAsJavaNetCookies(httpUrl, str));
                        }
                    }
                }
            }
            if (arrayList != null) {
                return Collections.unmodifiableList(arrayList);
            }
            return Collections.emptyList();
        } catch (IOException e) {
            Platform.get().log(5, "Loading cookies failed for " + httpUrl.resolve("/..."), e);
            return Collections.emptyList();
        }
    }

    private List<Cookie> decodeHeaderAsJavaNetCookies(HttpUrl httpUrl, String str) {
        String strSubstring;
        ArrayList arrayList = new ArrayList();
        int length = str.length();
        int i = 0;
        while (i < length) {
            int iDelimiterOffset = Util.delimiterOffset(str, i, length, ";,");
            int iDelimiterOffset2 = Util.delimiterOffset(str, i, iDelimiterOffset, '=');
            String strTrimSubstring = Util.trimSubstring(str, i, iDelimiterOffset2);
            if (!strTrimSubstring.startsWith("$")) {
                if (iDelimiterOffset2 < iDelimiterOffset) {
                    strSubstring = Util.trimSubstring(str, iDelimiterOffset2 + 1, iDelimiterOffset);
                } else {
                    strSubstring = "";
                }
                if (strSubstring.startsWith("\"") && strSubstring.endsWith("\"")) {
                    strSubstring = strSubstring.substring(1, strSubstring.length() - 1);
                }
                arrayList.add(new Cookie.Builder().name(strTrimSubstring).value(strSubstring).domain(httpUrl.host()).build());
            }
            i = iDelimiterOffset + 1;
        }
        return arrayList;
    }
}

