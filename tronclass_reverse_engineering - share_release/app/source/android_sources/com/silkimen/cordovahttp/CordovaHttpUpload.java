package com.silkimen.cordovahttp;

import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.webkit.MimeTypeMap;
import com.silkimen.http.HttpRequest;
import com.silkimen.http.TLSConfiguration;
import java.io.File;
import java.io.InputStream;
import java.net.URI;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONObject;
class CordovaHttpUpload extends CordovaHttpBase {
    private Context applicationContext;
    private JSONArray filePaths;
    private JSONArray uploadNames;

    public CordovaHttpUpload(String str, JSONObject jSONObject, JSONArray jSONArray, JSONArray jSONArray2, int i, boolean z, String str2, TLSConfiguration tLSConfiguration, Context context, CallbackContext callbackContext) {
        super("POST", str, jSONObject, i, z, str2, tLSConfiguration, callbackContext);
        this.filePaths = jSONArray;
        this.uploadNames = jSONArray2;
        this.applicationContext = context;
    }

    @Override // com.silkimen.cordovahttp.CordovaHttpBase
    protected void sendBody(HttpRequest httpRequest) throws Exception {
        for (int i = 0; i < this.filePaths.length(); i++) {
            String string = this.uploadNames.getString(i);
            String string2 = this.filePaths.getString(i);
            Uri uri = Uri.parse(string2);
            if ("file".equals(uri.getScheme())) {
                File file = new File(new URI(string2));
                String strTrim = file.getName().trim();
                httpRequest.part(string, strTrim, getMimeTypeFromFileName(strTrim), file);
            }
            if ("content".equals(uri.getScheme())) {
                InputStream inputStreamOpenInputStream = this.applicationContext.getContentResolver().openInputStream(uri);
                String strTrim2 = getFileNameFromContentScheme(uri, this.applicationContext).trim();
                httpRequest.part(string, strTrim2, getMimeTypeFromFileName(strTrim2), inputStreamOpenInputStream);
            }
        }
    }

    private String getFileNameFromContentScheme(Uri uri, Context context) {
        Cursor cursorQuery = context.getContentResolver().query(uri, null, null, null, null);
        if (cursorQuery == null || !cursorQuery.moveToFirst()) {
            return null;
        }
        String string = cursorQuery.getString(cursorQuery.getColumnIndex("_display_name"));
        cursorQuery.close();
        return string;
    }

    private String getMimeTypeFromFileName(String str) {
        if (str == null || !str.contains(".")) {
            return null;
        }
        return MimeTypeMap.getSingleton().getMimeTypeFromExtension(str.substring(str.lastIndexOf(46) + 1).toLowerCase());
    }
}

