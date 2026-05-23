package com.getcapacitor;

import com.silkimen.http.HttpRequest;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import org.apache.commons.io.IOUtils;
class JSInjector {
    private String cordovaJS;
    private String cordovaPluginsFileJS;
    private String cordovaPluginsJS;
    private String coreJS;
    private String globalJS;
    private String localUrlJS;
    private String pluginJS;

    public JSInjector(String str, String str2, String str3) {
        this(str, str2, str3, "", "", "", "");
    }

    public JSInjector(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.globalJS = str;
        this.coreJS = str2;
        this.pluginJS = str3;
        this.cordovaJS = str4;
        this.cordovaPluginsJS = str5;
        this.cordovaPluginsFileJS = str6;
        this.localUrlJS = str7;
    }

    public String getScriptString() {
        return this.globalJS + "\n\n" + this.coreJS + "\n\n" + this.pluginJS + "\n\n" + this.cordovaJS + "\n\n" + this.cordovaPluginsFileJS + "\n\n" + this.cordovaPluginsJS + "\n\n" + this.localUrlJS;
    }

    public InputStream getInjectedStream(InputStream inputStream) {
        String str = "<script type=\"text/javascript\">" + getScriptString() + "</script>";
        String assetStream = readAssetStream(inputStream);
        if (assetStream.contains("<head>")) {
            assetStream = assetStream.replace("<head>", "<head>\n" + str + IOUtils.LINE_SEPARATOR_UNIX);
        } else if (assetStream.contains("</head>")) {
            assetStream = assetStream.replace("</head>", str + "\n</head>");
        } else {
            Logger.error("Unable to inject Capacitor, Plugins won't work");
        }
        return new ByteArrayInputStream(assetStream.getBytes(StandardCharsets.UTF_8));
    }

    private String readAssetStream(InputStream inputStream) {
        try {
            char[] cArr = new char[1024];
            StringBuilder sb = new StringBuilder();
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream, HttpRequest.CHARSET_UTF8);
            while (true) {
                int i = inputStreamReader.read(cArr, 0, 1024);
                if (i >= 0) {
                    sb.append(cArr, 0, i);
                } else {
                    return sb.toString();
                }
            }
        } catch (Exception e) {
            Logger.error("Unable to process HTML asset file. This is a fatal error", e);
            return "";
        }
    }
}

