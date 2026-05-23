package com.silkimen.http;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class JsonUtils {
    public static HashMap<String, String> getStringMap(JSONObject jSONObject) throws JSONException {
        HashMap<String, String> map = new HashMap<>();
        if (jSONObject == null) {
            return map;
        }
        Iterator<String> itKeys = jSONObject.keys();
        while (itKeys.hasNext()) {
            String next = itKeys.next();
            map.put(next, jSONObject.getString(next));
        }
        return map;
    }

    public static HashMap<String, Object> getObjectMap(JSONObject jSONObject) throws JSONException {
        HashMap<String, Object> map = new HashMap<>();
        if (jSONObject == null) {
            return map;
        }
        Iterator<String> itKeys = jSONObject.keys();
        while (itKeys.hasNext()) {
            String next = itKeys.next();
            Object obj = jSONObject.get(next);
            if (obj instanceof JSONArray) {
                map.put(next, getObjectList((JSONArray) obj));
            } else {
                map.put(next, jSONObject.get(next));
            }
        }
        return map;
    }

    public static ArrayList<Object> getObjectList(JSONArray jSONArray) throws JSONException {
        ArrayList<Object> arrayList = new ArrayList<>();
        for (int i = 0; i < jSONArray.length(); i++) {
            arrayList.add(jSONArray.get(i));
        }
        return arrayList;
    }
}

