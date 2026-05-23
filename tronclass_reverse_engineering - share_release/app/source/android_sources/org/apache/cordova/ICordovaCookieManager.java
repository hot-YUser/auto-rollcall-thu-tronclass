package org.apache.cordova;
public interface ICordovaCookieManager {
    void clearCookies();

    void flush();

    String getCookie(String str);

    void setCookie(String str, String str2);

    void setCookiesEnabled(boolean z);
}

