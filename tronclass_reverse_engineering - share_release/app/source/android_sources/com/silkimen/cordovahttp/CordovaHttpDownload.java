package com.silkimen.cordovahttp;

import com.silkimen.http.HttpRequest;
import com.silkimen.http.TLSConfiguration;
import java.io.File;
import java.net.URI;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.file.FileUtils;
import org.json.JSONObject;
class CordovaHttpDownload extends CordovaHttpBase {
    private String filePath;

    public CordovaHttpDownload(String str, JSONObject jSONObject, String str2, int i, boolean z, TLSConfiguration tLSConfiguration, CallbackContext callbackContext) {
        super("GET", str, jSONObject, i, z, "text", tLSConfiguration, callbackContext);
        this.filePath = str2;
    }

    @Override // com.silkimen.cordovahttp.CordovaHttpBase
    protected void processResponse(HttpRequest httpRequest, CordovaHttpResponse cordovaHttpResponse) throws Exception {
        cordovaHttpResponse.setStatus(httpRequest.code());
        cordovaHttpResponse.setUrl(httpRequest.url().toString());
        cordovaHttpResponse.setHeaders(httpRequest.headers());
        if (httpRequest.code() >= 200 && httpRequest.code() < 300) {
            File file = new File(new URI(this.filePath));
            JSONObject entryForFile = FileUtils.getFilePlugin().getEntryForFile(file);
            httpRequest.receive(file);
            cordovaHttpResponse.setFileEntry(entryForFile);
            return;
        }
        cordovaHttpResponse.setErrorMessage("There was an error downloading the file");
    }
}

