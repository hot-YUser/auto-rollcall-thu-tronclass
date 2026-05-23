package com.getcapacitor;

import android.app.Activity;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class Config {
    private static Config instance;
    private JSONObject config = new JSONObject();

    private static Config getInstance() {
        if (instance == null) {
            instance = new Config();
        }
        return instance;
    }

    public static void load(Activity activity) throws Throwable {
        getInstance().loadConfig(activity);
    }

    /* high-level source view WARN: Code restructure failed: missing block: B:21:0x0044, code lost:
    
        if (r0 == 0) goto L39;
     */
    /* high-level source view WARN: Code restructure failed: missing block: B:22:0x0046, code lost:
    
        r0.close();
        r0 = r0;
     */
    /* high-level source view WARN: Code restructure failed: missing block: B:26:0x0050, code lost:
    
        if (r0 == 0) goto L39;
     */
    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Type inference failed for: r0v0 */
    /* high-level source view WARN: Type inference failed for: r0v1 */
    /* high-level source view WARN: Type inference failed for: r0v10 */
    /* high-level source view WARN: Type inference failed for: r0v13 */
    /* high-level source view WARN: Type inference failed for: r0v14 */
    /* high-level source view WARN: Type inference failed for: r0v15 */
    /* high-level source view WARN: Type inference failed for: r0v16 */
    /* high-level source view WARN: Type inference failed for: r0v17 */
    /* high-level source view WARN: Type inference failed for: r0v18 */
    /* high-level source view WARN: Type inference failed for: r0v2, types: [java.io.BufferedReader] */
    /* high-level source view WARN: Type inference failed for: r0v3 */
    /* high-level source view WARN: Type inference failed for: r0v4, types: [java.io.BufferedReader] */
    /* high-level source view WARN: Type inference failed for: r0v5 */
    /* high-level source view WARN: Type inference failed for: r0v6 */
    /* high-level source view WARN: Type inference failed for: r0v7 */
    /* high-level source view WARN: Type inference failed for: r0v8 */
    /* high-level source view WARN: Type inference failed for: r0v9 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private void loadConfig(Activity activity) throws Throwable {
        ?? r0;
        BufferedReader bufferedReader;
        StringBuilder sb;
        ?? r02 = 0;
        r02 = 0;
        r02 = 0;
        try {
            try {
                try {
                    bufferedReader = new BufferedReader(new InputStreamReader(activity.getAssets().open("capacitor.config.json")));
                } catch (IOException unused) {
                    return;
                }
            } catch (IOException e) {
                e = e;
            } catch (JSONException e2) {
                e = e2;
            }
        } catch (Throwable th) {
            th = th;
        }
        try {
            sb = new StringBuilder();
        } catch (IOException e3) {
            e = e3;
            r02 = bufferedReader;
            Logger.error("Unable to load capacitor.config.json. Run npx cap copy first", e);
            r0 = r02;
        } catch (JSONException e4) {
            e = e4;
            r02 = bufferedReader;
            Logger.error("Unable to parse capacitor.config.json. Make sure it's valid json", e);
            r0 = r02;
        } catch (Throwable th2) {
            th = th2;
            r02 = bufferedReader;
            if (r02 != 0) {
                try {
                    r02.close();
                } catch (IOException unused2) {
                }
            }
            throw th;
        }
        while (true) {
            String line = bufferedReader.readLine();
            if (line == null) {
                break;
            } else {
                sb.append(line);
            }
        }
        JSONObject jSONObject = new JSONObject(sb.toString());
        this.config = jSONObject;
        bufferedReader.close();
        r02 = jSONObject;
    }

    public static JSONObject getObject(String str) {
        try {
            return getInstance().config.getJSONObject(str);
        } catch (Exception unused) {
            return null;
        }
    }

    private JSONObject getConfigObjectDeepest(String str) throws JSONException {
        String[] strArrSplit = str.split("\\.");
        JSONObject jSONObject = this.config;
        for (int i = 0; i < strArrSplit.length - 1; i++) {
            jSONObject = jSONObject.getJSONObject(strArrSplit[i]);
        }
        return jSONObject;
    }

    public static String getString(String str) {
        return getString(str, null);
    }

    public static String getString(String str, String str2) {
        try {
            String string = getInstance().getConfigObjectDeepest(str).getString(getConfigKey(str));
            return string == null ? str2 : string;
        } catch (Exception unused) {
            return str2;
        }
    }

    public static boolean getBoolean(String str, boolean z) {
        try {
            return getInstance().getConfigObjectDeepest(str).getBoolean(getConfigKey(str));
        } catch (Exception unused) {
            return z;
        }
    }

    public static int getInt(String str, int i) {
        try {
            return getInstance().getConfigObjectDeepest(str).getInt(getConfigKey(str));
        } catch (Exception unused) {
            return i;
        }
    }

    private static String getConfigKey(String str) {
        String[] strArrSplit = str.split("\\.");
        if (strArrSplit.length > 0) {
            return strArrSplit[strArrSplit.length - 1];
        }
        return null;
    }

    public static String[] getArray(String str) {
        return getArray(str, null);
    }

    public static String[] getArray(String str, String[] strArr) {
        try {
            JSONArray jSONArray = getInstance().getConfigObjectDeepest(str).getJSONArray(getConfigKey(str));
            if (jSONArray == null) {
                return strArr;
            }
            int length = jSONArray.length();
            String[] strArr2 = new String[length];
            for (int i = 0; i < length; i++) {
                strArr2[i] = (String) jSONArray.get(i);
            }
            return strArr2;
        } catch (Exception unused) {
            return strArr;
        }
    }
}

