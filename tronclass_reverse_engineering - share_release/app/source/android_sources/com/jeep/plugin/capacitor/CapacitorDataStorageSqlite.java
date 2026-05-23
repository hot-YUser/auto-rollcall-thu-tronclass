package com.jeep.plugin.capacitor;

import android.content.Context;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.jeep.plugin.capacitor.cdssUtils.Data;
import com.jeep.plugin.capacitor.cdssUtils.Global;
import com.jeep.plugin.capacitor.cdssUtils.StorageDatabaseHelper;
import com.onesignal.OneSignalDbContract;
import java.util.List;
import org.json.JSONException;
@NativePlugin
public class CapacitorDataStorageSqlite extends Plugin {
    private Context context;
    private Global globalData = new Global();
    private StorageDatabaseHelper mDb;

    @Override // com.getcapacitor.Plugin
    public void load() {
        this.context = getContext();
    }

    @PluginMethod
    public void echo(PluginCall pluginCall) {
        String string = pluginCall.getString("value");
        JSObject jSObject = new JSObject();
        jSObject.put("value", string);
        pluginCall.success(jSObject);
    }

    /* high-level source view WARN: Removed duplicated region for block: B:40:0x00c7  */
    /* high-level source view WARN: Removed duplicated region for block: B:41:0x00cb  */
    @PluginMethod
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public void openStore(PluginCall pluginCall) {
        String str;
        String str2;
        String str3;
        StorageDatabaseHelper storageDatabaseHelper;
        String str4;
        JSObject jSObject = new JSObject();
        String string = pluginCall.getString("database");
        if (string == null) {
            string = "storage";
        }
        String string2 = pluginCall.getString("table");
        if (string2 == null) {
            string2 = "storage_table";
        }
        String str5 = string2;
        Boolean bool = pluginCall.getBoolean("encrypted", false);
        String str6 = null;
        if (bool.booleanValue()) {
            String string3 = pluginCall.getString("mode", "no-encryption");
            str2 = "wrongsecret";
            if (!string3.equals("no-encryption") && !string3.equals("encryption") && !string3.equals("secret") && !string3.equals("newsecret") && !string3.equals("wrongsecret")) {
                jSObject.put("result", false);
                jSObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "OpenStore: Error inMode must be in ['encryption','secret','newsecret']");
                pluginCall.resolve(jSObject);
            }
            if (string3.equals("encryption") || string3.equals("secret")) {
                str4 = this.globalData.secret;
            } else if (string3.equals("newsecret")) {
                str4 = this.globalData.secret;
                str6 = this.globalData.newsecret;
                this.globalData.secret = str6;
            } else if (!string3.equals("wrongsecret")) {
                str = string3;
                str2 = "";
            } else {
                str = "secret";
                str3 = str6;
                storageDatabaseHelper = new StorageDatabaseHelper(this.context, string + "SQLite.db", str5, bool, str, str2, str3, 1);
                this.mDb = storageDatabaseHelper;
                if (!storageDatabaseHelper.isOpen.booleanValue()) {
                    jSObject.put("result", false);
                } else {
                    jSObject.put("result", true);
                }
                pluginCall.resolve(jSObject);
            }
            str = string3;
            str2 = str4;
            str3 = str6;
            storageDatabaseHelper = new StorageDatabaseHelper(this.context, string + "SQLite.db", str5, bool, str, str2, str3, 1);
            this.mDb = storageDatabaseHelper;
            if (!storageDatabaseHelper.isOpen.booleanValue()) {
            }
            pluginCall.resolve(jSObject);
        }
        str = "no-encryption";
        str2 = null;
        str3 = str2;
        storageDatabaseHelper = new StorageDatabaseHelper(this.context, string + "SQLite.db", str5, bool, str, str2, str3, 1);
        this.mDb = storageDatabaseHelper;
        if (!storageDatabaseHelper.isOpen.booleanValue()) {
        }
        pluginCall.resolve(jSObject);
    }

    @PluginMethod
    public void setTable(PluginCall pluginCall) {
        boolean table;
        String str;
        String string = pluginCall.getString("table");
        if (string == null) {
            pluginCall.reject("Must provide a table name");
            return;
        }
        StorageDatabaseHelper storageDatabaseHelper = this.mDb;
        if (storageDatabaseHelper != null) {
            table = storageDatabaseHelper.setTable(string);
            if (table) {
                str = "";
            } else {
                str = "failed in adding table";
            }
        } else {
            table = false;
            str = "Must open a store first";
        }
        JSObject jSObject = new JSObject();
        jSObject.put("result", table);
        jSObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, str);
        pluginCall.resolve(jSObject);
    }

    @PluginMethod
    public void set(PluginCall pluginCall) {
        String string = pluginCall.getString("key");
        if (string == null) {
            pluginCall.reject("Must provide key");
            return;
        }
        String string2 = pluginCall.getString("value");
        Data data = new Data();
        data.name = string;
        data.value = string2;
        Boolean boolValueOf = Boolean.valueOf(this.mDb.set(data));
        JSObject jSObject = new JSObject();
        jSObject.put("result", (Object) boolValueOf);
        pluginCall.resolve(jSObject);
    }

    @PluginMethod
    public void get(PluginCall pluginCall) {
        String string = pluginCall.getString("key");
        if (string == null) {
            pluginCall.reject("Must provide key");
            return;
        }
        Data data = this.mDb.get(string);
        JSObject jSObject = new JSObject();
        jSObject.put("value", data.id == null ? JSObject.NULL : data.value);
        pluginCall.resolve(jSObject);
    }

    @PluginMethod
    public void iskey(PluginCall pluginCall) {
        String string = pluginCall.getString("key");
        if (string == null) {
            pluginCall.reject("Must provide key");
            return;
        }
        boolean zIskey = this.mDb.iskey(string);
        JSObject jSObject = new JSObject();
        jSObject.put("result", zIskey);
        pluginCall.resolve(jSObject);
    }

    @PluginMethod
    public void remove(PluginCall pluginCall) {
        String string = pluginCall.getString("key");
        if (string == null) {
            pluginCall.reject("Must provide key");
            return;
        }
        boolean zRemove = this.mDb.remove(string);
        JSObject jSObject = new JSObject();
        jSObject.put("result", zRemove);
        pluginCall.resolve(jSObject);
    }

    @PluginMethod
    public void clear(PluginCall pluginCall) {
        boolean zClear = this.mDb.clear();
        JSObject jSObject = new JSObject();
        jSObject.put("result", zClear);
        pluginCall.resolve(jSObject);
    }

    @PluginMethod
    public void keys(PluginCall pluginCall) {
        List<String> listKeys = this.mDb.keys();
        String[] strArr = (String[]) listKeys.toArray(new String[listKeys.size()]);
        JSObject jSObject = new JSObject();
        try {
            jSObject.put("keys", (Object) new JSArray(strArr));
            pluginCall.resolve(jSObject);
        } catch (JSONException unused) {
            pluginCall.reject("Unable to create key array.");
        }
    }

    @PluginMethod
    public void values(PluginCall pluginCall) {
        List<String> listValues = this.mDb.values();
        String[] strArr = (String[]) listValues.toArray(new String[listValues.size()]);
        JSObject jSObject = new JSObject();
        try {
            jSObject.put("values", (Object) new JSArray(strArr));
            pluginCall.resolve(jSObject);
        } catch (JSONException unused) {
            pluginCall.reject("Unable to create value array.");
        }
    }

    @PluginMethod
    public void keysvalues(PluginCall pluginCall) {
        List<Data> listKeysvalues = this.mDb.keysvalues();
        JSObject[] jSObjectArr = new JSObject[listKeysvalues.size()];
        for (int i = 0; i < listKeysvalues.size(); i++) {
            JSObject jSObject = new JSObject();
            jSObject.put("key", listKeysvalues.get(i).name);
            jSObject.put("value", listKeysvalues.get(i).value);
            jSObjectArr[i] = jSObject;
        }
        JSObject jSObject2 = new JSObject();
        try {
            jSObject2.put("keysvalues", (Object) new JSArray(jSObjectArr));
            pluginCall.resolve(jSObject2);
        } catch (JSONException unused) {
            pluginCall.reject("Unable to create key/value array.");
        }
    }

    @PluginMethod
    public void deleteStore(PluginCall pluginCall) {
        String string = pluginCall.getString("database");
        if (string == null) {
            string = "storage";
        }
        JSObject jSObject = new JSObject();
        this.context.deleteDatabase(string + "SQLite.db");
        this.context.deleteFile(string + "SQLite.db");
        if (this.context.getDatabasePath(string + "SQLite.db").exists()) {
            jSObject.put("result", false);
        } else {
            jSObject.put("result", true);
        }
        pluginCall.resolve(jSObject);
    }
}

