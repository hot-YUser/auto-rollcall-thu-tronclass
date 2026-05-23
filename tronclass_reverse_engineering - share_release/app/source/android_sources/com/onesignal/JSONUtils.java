package com.onesignal;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
class JSONUtils {
    JSONUtils() {
    }

    static JSONObject generateJsonDiff(JSONObject jSONObject, JSONObject jSONObject2, JSONObject jSONObject3, Set<String> set) {
        if (jSONObject == null) {
            return null;
        }
        if (jSONObject2 == null) {
            return jSONObject3;
        }
        Iterator<String> itKeys = jSONObject2.keys();
        JSONObject jSONObject4 = jSONObject3 != null ? jSONObject3 : new JSONObject();
        while (itKeys.hasNext()) {
            try {
                String next = itKeys.next();
                Object obj = jSONObject2.get(next);
                if (jSONObject.has(next)) {
                    if (obj instanceof JSONObject) {
                        String string = generateJsonDiff(jSONObject.getJSONObject(next), (JSONObject) obj, (jSONObject3 == null || !jSONObject3.has(next)) ? null : jSONObject3.getJSONObject(next), set).toString();
                        if (!string.equals("{}")) {
                            jSONObject4.put(next, new JSONObject(string));
                        }
                    } else if (obj instanceof JSONArray) {
                        handleJsonArray(next, (JSONArray) obj, jSONObject.getJSONArray(next), jSONObject4);
                    } else if (set != null && set.contains(next)) {
                        jSONObject4.put(next, obj);
                    } else {
                        Object obj2 = jSONObject.get(next);
                        if (!obj.equals(obj2)) {
                            if (!(obj2 instanceof Number) || !(obj instanceof Number)) {
                                jSONObject4.put(next, obj);
                            } else if (((Number) obj2).doubleValue() != ((Number) obj).doubleValue()) {
                                jSONObject4.put(next, obj);
                            }
                        }
                    }
                } else if (obj instanceof JSONObject) {
                    jSONObject4.put(next, new JSONObject(obj.toString()));
                } else if (obj instanceof JSONArray) {
                    handleJsonArray(next, (JSONArray) obj, null, jSONObject4);
                } else {
                    jSONObject4.put(next, obj);
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
        return jSONObject4;
    }

    private static void handleJsonArray(String str, JSONArray jSONArray, JSONArray jSONArray2, JSONObject jSONObject) throws JSONException {
        if (str.endsWith("_a") || str.endsWith("_d")) {
            jSONObject.put(str, jSONArray);
            return;
        }
        String stringNE = toStringNE(jSONArray);
        JSONArray jSONArray3 = new JSONArray();
        JSONArray jSONArray4 = new JSONArray();
        String stringNE2 = jSONArray2 == null ? null : toStringNE(jSONArray2);
        for (int i = 0; i < jSONArray.length(); i++) {
            String str2 = (String) jSONArray.get(i);
            if (jSONArray2 == null || !stringNE2.contains(str2)) {
                jSONArray3.put(str2);
            }
        }
        if (jSONArray2 != null) {
            for (int i2 = 0; i2 < jSONArray2.length(); i2++) {
                String string = jSONArray2.getString(i2);
                if (!stringNE.contains(string)) {
                    jSONArray4.put(string);
                }
            }
        }
        if (!jSONArray3.toString().equals("[]")) {
            jSONObject.put(str + "_a", jSONArray3);
        }
        if (jSONArray4.toString().equals("[]")) {
            return;
        }
        jSONObject.put(str + "_d", jSONArray4);
    }

    static String toStringNE(JSONArray jSONArray) {
        String str = "[";
        for (int i = 0; i < jSONArray.length(); i++) {
            try {
                str = str + "\"" + jSONArray.getString(i) + "\"";
            } catch (JSONException unused) {
            }
        }
        return str + "]";
    }

    static String toUnescapedEUIDString(JSONObject jSONObject) {
        String strGroup;
        String string = jSONObject.toString();
        if (!jSONObject.has("external_user_id")) {
            return string;
        }
        Matcher matcher = Pattern.compile("(?<=\"external_user_id\":\").*?(?=\")").matcher(string);
        return (!matcher.find() || (strGroup = matcher.group(0)) == null) ? string : matcher.replaceAll(Matcher.quoteReplacement(strGroup.replace("\\/", "/")));
    }

    static JSONObject getJSONObjectWithoutBlankValues(ImmutableJSONObject immutableJSONObject, String str) {
        if (!immutableJSONObject.has(str)) {
            return null;
        }
        JSONObject jSONObject = new JSONObject();
        JSONObject jSONObjectOptJSONObject = immutableJSONObject.optJSONObject(str);
        Iterator<String> itKeys = jSONObjectOptJSONObject.keys();
        while (itKeys.hasNext()) {
            String next = itKeys.next();
            try {
                Object obj = jSONObjectOptJSONObject.get(next);
                if (!"".equals(obj)) {
                    jSONObject.put(next, obj);
                }
            } catch (JSONException unused) {
            }
        }
        return jSONObject;
    }

    static Map<String, Object> jsonObjectToMap(JSONObject jSONObject) throws JSONException {
        if (jSONObject == null || jSONObject == JSONObject.NULL) {
            return null;
        }
        return jsonObjectToMapNonNull(jSONObject);
    }

    private static Map<String, Object> jsonObjectToMapNonNull(JSONObject jSONObject) throws JSONException {
        HashMap map = new HashMap();
        Iterator<String> itKeys = jSONObject.keys();
        while (itKeys.hasNext()) {
            String next = itKeys.next();
            map.put(next, convertNestedJSONType(jSONObject.get(next)));
        }
        return map;
    }

    static List<Object> jsonArrayToList(JSONArray jSONArray) throws JSONException {
        if (jSONArray == null) {
            return null;
        }
        return jsonArrayToListNonNull(jSONArray);
    }

    private static List<Object> jsonArrayToListNonNull(JSONArray jSONArray) throws JSONException {
        ArrayList arrayList = new ArrayList();
        for (int i = 0; i < jSONArray.length(); i++) {
            arrayList.add(convertNestedJSONType(jSONArray.get(i)));
        }
        return arrayList;
    }

    private static Object convertNestedJSONType(Object obj) throws JSONException {
        if (obj instanceof JSONObject) {
            return jsonObjectToMapNonNull((JSONObject) obj);
        }
        return obj instanceof JSONArray ? jsonArrayToListNonNull((JSONArray) obj) : obj;
    }

    /* high-level source view WARN: Code restructure failed: missing block: B:21:0x003b, code lost:
    
        r2 = r2 + 1;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    static boolean compareJSONArrays(JSONArray jSONArray, JSONArray jSONArray2) {
        if (jSONArray == null && jSONArray2 == null) {
            return true;
        }
        if (jSONArray == null || jSONArray2 == null || jSONArray.length() != jSONArray2.length()) {
            return false;
        }
        int i = 0;
        while (i < jSONArray.length()) {
            try {
                for (int i2 = 0; i2 < jSONArray2.length(); i2++) {
                    if (normalizeType(jSONArray.get(i)).equals(normalizeType(jSONArray2.get(i2)))) {
                        break;
                    }
                }
                return false;
            } catch (JSONException e) {
                e.printStackTrace();
                return false;
            }
        }
        return true;
    }

    public static Object normalizeType(Object obj) {
        Class<?> cls = obj.getClass();
        if (cls.equals(Integer.class)) {
            return Long.valueOf(((Integer) obj).intValue());
        }
        return cls.equals(Float.class) ? Double.valueOf(((Float) obj).floatValue()) : obj;
    }
}

