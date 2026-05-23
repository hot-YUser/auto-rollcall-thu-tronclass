package com.synconset;

import android.content.Intent;
import android.os.Bundle;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import com.sarriaroman.PhotoViewer.PhotoViewer;
import java.util.Collection;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.apache.cordova.globalization.Globalization;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class ImagePicker extends CordovaPlugin {
    private static final String ACTION_GET_PICTURES = "getPictures";
    private static final String ACTION_HAS_READ_PERMISSION = "hasReadPermission";
    private static final String ACTION_REQUEST_READ_PERMISSION = "requestReadPermission";
    private static final int PERMISSION_REQUEST_CODE = 100;
    private CallbackContext callbackContext;

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        String string;
        String string2;
        String str2;
        String str3;
        String string3;
        String str4;
        String str5;
        String str6;
        String str7;
        this.callbackContext = callbackContext;
        if (ACTION_HAS_READ_PERMISSION.equals(str)) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, hasReadPermission()));
            return true;
        }
        if (ACTION_REQUEST_READ_PERMISSION.equals(str)) {
            requestReadPermission();
            return true;
        }
        if (!ACTION_GET_PICTURES.equals(str)) {
            return false;
        }
        JSONObject jSONObject = jSONArray.getJSONObject(0);
        Intent intent = new Intent(this.f7cordova.getActivity(), (Class<?>) MultiImageChooserActivity.class);
        int i = jSONObject.has("maximumImagesCount") ? jSONObject.getInt("maximumImagesCount") : 20;
        int i2 = jSONObject.has("width") ? jSONObject.getInt("width") : 0;
        int i3 = jSONObject.has("height") ? jSONObject.getInt("height") : 0;
        int i4 = jSONObject.has("quality") ? jSONObject.getInt("quality") : 100;
        int i5 = jSONObject.has("outputType") ? jSONObject.getInt("outputType") : 0;
        if (jSONObject.has(Globalization.OPTIONS)) {
            JSONObject jSONObject2 = jSONObject.getJSONObject(Globalization.OPTIONS);
            string = jSONObject2.has("imageChooserDoneText") ? jSONObject2.getString("imageChooserDoneText") : "imageChooserDoneText";
            string2 = jSONObject2.has("imageChooserDiscardText") ? jSONObject2.getString("imageChooserDiscardText") : "imageChooserDiscardText";
            String string4 = jSONObject2.has("limitAlertTitle") ? jSONObject2.getString("limitAlertTitle") : "limitAlertTitle";
            String string5 = jSONObject2.has("limitAlertContent") ? jSONObject2.getString("limitAlertContent") : "limitAlertContent";
            String string6 = jSONObject2.has("limitAlertButton") ? jSONObject2.getString("limitAlertButton") : "limitAlertButton";
            String string7 = jSONObject2.has("processingImagesTitle") ? jSONObject2.getString("processingImagesTitle") : "processingImagesTitle";
            if (jSONObject2.has("processingImagesMessage")) {
                str3 = "processingImagesMessage";
                str4 = "processingImagesTitle";
                str7 = string5;
                str6 = string6;
                str5 = string7;
                String str8 = string4;
                string3 = jSONObject2.getString("processingImagesMessage");
                str2 = str8;
            } else {
                str3 = "processingImagesMessage";
                str4 = "processingImagesTitle";
                str2 = string4;
                str5 = string7;
                string3 = str3;
                str7 = string5;
                str6 = string6;
            }
        } else {
            string = "imageChooserDoneText";
            string2 = "imageChooserDiscardText";
            str2 = "limitAlertTitle";
            str3 = "processingImagesMessage";
            string3 = str3;
            str4 = "processingImagesTitle";
            str5 = str4;
            str6 = "limitAlertButton";
            str7 = "limitAlertContent";
        }
        intent.putExtra(MultiImageChooserActivity.MAX_IMAGES_KEY, i);
        intent.putExtra(MultiImageChooserActivity.WIDTH_KEY, i2);
        intent.putExtra(MultiImageChooserActivity.HEIGHT_KEY, i3);
        intent.putExtra(MultiImageChooserActivity.QUALITY_KEY, i4);
        intent.putExtra(MultiImageChooserActivity.OUTPUT_TYPE_KEY, i5);
        Bundle bundle = new Bundle();
        bundle.putString("imageChooserDoneText", string);
        bundle.putString("imageChooserDiscardText", string2);
        bundle.putString("limitAlertTitle", str2);
        bundle.putString("limitAlertContent", str7);
        bundle.putString("limitAlertButton", str6);
        bundle.putString(str4, str5);
        bundle.putString(str3, string3);
        intent.putExtras(bundle);
        this.f7cordova.startActivityForResult(this, intent, 0);
        return true;
    }

    private boolean hasReadPermission() {
        return ContextCompat.checkSelfPermission(this.f7cordova.getActivity(), PhotoViewer.READ) == 0;
    }

    private void requestReadPermission() {
        if (!hasReadPermission()) {
            ActivityCompat.requestPermissions(this.f7cordova.getActivity(), new String[]{PhotoViewer.READ}, 100);
        }
        this.callbackContext.success();
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onActivityResult(int i, int i2, Intent intent) {
        if (i2 == -1 && intent != null) {
            this.callbackContext.success(new JSONArray((Collection) ResultIPC.get().getLargeData(intent.getIntExtra("bigdata:synccode", -1)).getStringArrayList("MULTIPLEFILENAMES")));
        } else if (i2 == 0 && intent != null) {
            this.callbackContext.error(intent.getStringExtra("ERRORMESSAGE"));
        } else if (i2 == 0) {
            this.callbackContext.success(new JSONArray());
        } else {
            this.callbackContext.error("No images selected");
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRestoreStateForActivityResult(Bundle bundle, CallbackContext callbackContext) {
        this.callbackContext = callbackContext;
    }
}

