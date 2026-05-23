package com.getcapacitor;

import android.content.res.AssetManager;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class CapConfig {
    private JSONObject config;

    public CapConfig(AssetManager assetManager, JSONObject jSONObject) throws Throwable {
        this.config = new JSONObject();
        if (jSONObject != null) {
            this.config = jSONObject;
        } else {
            loadConfig(assetManager);
        }
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Removed duplicated region for block: B:22:0x0042 A[Catch: IOException -> 0x004f, PHI: r0
  0x0042: PHI (r0v4 java.io.BufferedReader) = (r0v18 java.io.BufferedReader), (r0v19 java.io.BufferedReader) binds: [B:21:0x0040, B:26:0x004c] A[DONT_GENERATE, DONT_INLINE], TRY_ENTER, TRY_LEAVE, TryCatch #6 {IOException -> 0x004f, blocks: (B:9:0x002b, B:22:0x0042), top: B:40:0x0001 }] */
    /* high-level source view WARN: Type inference failed for: r0v0 */
    /* high-level source view WARN: Type inference failed for: r0v1 */
    /* high-level source view WARN: Type inference failed for: r0v14 */
    /* high-level source view WARN: Type inference failed for: r0v15 */
    /* high-level source view WARN: Type inference failed for: r0v16 */
    /* high-level source view WARN: Type inference failed for: r0v17 */
    /* high-level source view WARN: Type inference failed for: r0v2, types: [java.io.BufferedReader] */
    /* high-level source view WARN: Type inference failed for: r0v6 */
    /* high-level source view WARN: Type inference failed for: r0v7 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private void loadConfig(AssetManager assetManager) throws Throwable {
        BufferedReader bufferedReader;
        BufferedReader bufferedReader2;
        StringBuilder sb;
        ?? r0 = 0;
        BufferedReader bufferedReader3 = null;
        BufferedReader bufferedReader4 = null;
        try {
            try {
                try {
                    bufferedReader2 = new BufferedReader(new InputStreamReader(assetManager.open("capacitor.config.json")));
                } catch (Throwable th) {
                    th = th;
                }
            } catch (IOException e) {
                e = e;
            } catch (JSONException e2) {
                e = e2;
            }
            try {
                sb = new StringBuilder();
            } catch (IOException e3) {
                e = e3;
                bufferedReader3 = bufferedReader2;
                Logger.error("Unable to load capacitor.config.json. Run npx cap copy first", e);
                r0 = bufferedReader3;
                bufferedReader = bufferedReader3;
                if (bufferedReader3 != null) {
                    bufferedReader.close();
                    r0 = bufferedReader;
                }
            } catch (JSONException e4) {
                e = e4;
                bufferedReader4 = bufferedReader2;
                Logger.error("Unable to parse capacitor.config.json. Make sure it's valid json", e);
                r0 = bufferedReader4;
                bufferedReader = bufferedReader4;
                if (bufferedReader4 != null) {
                }
            } catch (Throwable th2) {
                th = th2;
                r0 = bufferedReader2;
                if (r0 != 0) {
                    try {
                        r0.close();
                    } catch (IOException unused) {
                    }
                }
                throw th;
            }
            while (true) {
                String line = bufferedReader2.readLine();
                if (line == null) {
                    break;
                } else {
                    sb.append(line);
                }
            }
            JSONObject jSONObject = new JSONObject(sb.toString());
            this.config = jSONObject;
            bufferedReader2.close();
            r0 = jSONObject;
        } catch (IOException unused2) {
        }
    }

    public JSONObject getObject(String str) {
        try {
            return this.config.getJSONObject(str);
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

    public String getString(String str) {
        return getString(str, null);
    }

    public String getString(String str, String str2) {
        try {
            String string = getConfigObjectDeepest(str).getString(getConfigKey(str));
            return string == null ? str2 : string;
        } catch (Exception unused) {
            return str2;
        }
    }

    public boolean getBoolean(String str, boolean z) {
        try {
            return getConfigObjectDeepest(str).getBoolean(getConfigKey(str));
        } catch (Exception unused) {
            return z;
        }
    }

    public int getInt(String str, int i) {
        try {
            return getConfigObjectDeepest(str).getInt(getConfigKey(str));
        } catch (Exception unused) {
            return i;
        }
    }

    private String getConfigKey(String str) {
        String[] strArrSplit = str.split("\\.");
        if (strArrSplit.length > 0) {
            return strArrSplit[strArrSplit.length - 1];
        }
        return null;
    }

    public String[] getArray(String str) {
        return getArray(str, null);
    }

    public String[] getArray(String str, String[] strArr) {
        try {
            JSONArray jSONArray = getConfigObjectDeepest(str).getJSONArray(getConfigKey(str));
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

