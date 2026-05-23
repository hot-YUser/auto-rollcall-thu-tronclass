package com.wisdomgarden.trpc.openwith;

import android.content.ClipData;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import org.apache.cordova.globalization.Globalization;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
class Serializer {
    private static int MAX_ATTACHMENT_COUNT = 5;

    Serializer() {
    }

    public static void setMaxAttachmentCount(int i) {
        MAX_ATTACHMENT_COUNT = i;
    }

    public static JSONObject toJSONObject(Context context, Intent intent, File file) throws JSONException {
        SharedData sharedDataItemsFromClipData;
        try {
            sharedDataItemsFromClipData = itemsFromClipData(context, intent.getClipData(), file);
            if (sharedDataItemsFromClipData == null || sharedDataItemsFromClipData.items == null || sharedDataItemsFromClipData.items.length() == 0) {
                sharedDataItemsFromClipData = itemsFromExtras(context, intent.getExtras(), file);
            }
            if (sharedDataItemsFromClipData == null || sharedDataItemsFromClipData.items == null || sharedDataItemsFromClipData.items.length() == 0) {
                sharedDataItemsFromClipData = itemsFromData(context, intent.getData(), file);
            }
        } catch (Exception unused) {
            sharedDataItemsFromClipData = null;
        }
        if (sharedDataItemsFromClipData == null) {
            return null;
        }
        JSONObject jSONObject = new JSONObject();
        jSONObject.put("action", translateAction(intent.getAction()));
        jSONObject.put("exit", readExitOnSent(intent.getExtras()));
        jSONObject.put("items", sharedDataItemsFromClipData.items);
        jSONObject.put("receivedCounts", sharedDataItemsFromClipData.receivedCounts);
        jSONObject.put("maxAttachmentCount", MAX_ATTACHMENT_COUNT);
        return jSONObject;
    }

    public static String translateAction(String str) {
        if ("android.intent.action.SEND".equals(str) || "android.intent.action.SEND_MULTIPLE".equals(str)) {
            return "SEND";
        }
        return "android.intent.action.VIEW".equals(str) ? "VIEW" : str;
    }

    public static boolean readExitOnSent(Bundle bundle) {
        if (bundle == null) {
            return false;
        }
        return bundle.getBoolean("exit_on_sent", false);
    }

    public static SharedData itemsFromClipData(Context context, ClipData clipData, File file) throws JSONException {
        if (clipData == null) {
            return null;
        }
        int itemCount = clipData.getItemCount();
        JSONObject[] jSONObjectArr = new JSONObject[itemCount];
        for (int i = 0; i < itemCount; i++) {
            Uri uri = clipData.getItemAt(i).getUri();
            if (uri != null) {
                jSONObjectArr[i] = toJSONObject(context, uri, file);
            } else {
                String string = clipData.getItemAt(i).getText().toString();
                JSONObject jSONObject = new JSONObject();
                jSONObject.put(Globalization.TYPE, "text/plain");
                jSONObject.put("uri", "");
                jSONObject.put("path", "");
                jSONObject.put("text", string);
                jSONObject.put("name", "text");
                jSONObjectArr[i] = jSONObject;
            }
        }
        ArrayList arrayList = new ArrayList();
        for (int i2 = 0; i2 < itemCount; i2++) {
            JSONObject jSONObject2 = jSONObjectArr[i2];
            if (jSONObject2 != null) {
                arrayList.add(jSONObject2);
                if (arrayList.size() >= MAX_ATTACHMENT_COUNT) {
                    break;
                }
            }
        }
        return new SharedData(itemCount, new JSONArray((Collection) arrayList));
    }

    public static SharedData itemsFromExtras(Context context, Bundle bundle, File file) throws JSONException {
        ArrayList arrayList;
        if (bundle == null) {
            return null;
        }
        Object obj = bundle.get("android.intent.extra.STREAM");
        if (obj instanceof ArrayList) {
            arrayList = (ArrayList) obj;
        } else {
            arrayList = new ArrayList();
            arrayList.add((Uri) bundle.get("android.intent.extra.STREAM"));
        }
        ArrayList arrayList2 = new ArrayList();
        for (int i = 0; i < arrayList.size(); i++) {
            JSONObject jSONObject = toJSONObject(context, (Uri) arrayList.get(i), file);
            if (jSONObject != null) {
                arrayList2.add(jSONObject);
                if (arrayList2.size() >= MAX_ATTACHMENT_COUNT) {
                    break;
                }
            }
        }
        return new SharedData(arrayList.size(), new JSONArray((Collection) arrayList2));
    }

    public static SharedData itemsFromData(Context context, Uri uri, File file) throws JSONException {
        JSONObject jSONObject;
        if (uri == null || (jSONObject = toJSONObject(context, uri, file)) == null) {
            return null;
        }
        return new SharedData(1, new JSONArray(new JSONObject[]{jSONObject}));
    }

    private static JSONObject toJSONObject(Context context, Uri uri, File file) throws JSONException {
        PathData path;
        if (uri == null) {
            return null;
        }
        JSONObject jSONObject = new JSONObject();
        String type = context.getContentResolver().getType(uri);
        try {
            path = PathUtil.getPath(context, uri, file);
        } catch (Exception unused) {
            path = null;
        }
        if (path == null) {
            return null;
        }
        jSONObject.put(Globalization.TYPE, type);
        jSONObject.put("uri", uri);
        jSONObject.put("path", path.filePath);
        jSONObject.put("isTemp", path.isTemp);
        jSONObject.put("name", path.fileName);
        return jSONObject;
    }
}

