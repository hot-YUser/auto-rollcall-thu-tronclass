package com.getcapacitor;

import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.net.Uri;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.apache.commons.io.IOUtils;
import org.json.JSONException;
import org.json.JSONObject;
public class Plugin {
    private static final String BUNDLE_PERSISTED_OPTIONS_JSON_KEY = "_json";
    protected Bridge bridge;
    protected PluginHandle handle;
    protected PluginCall savedLastCall;
    private final Map<String, List<PluginCall>> eventListeners = new HashMap();
    private final Map<String, JSObject> retainedEventArguments = new HashMap();

    protected void handleOnActivityResult(int i, int i2, Intent intent) {
    }

    protected void handleOnDestroy() {
    }

    protected void handleOnNewIntent(Intent intent) {
    }

    protected void handleOnPause() {
    }

    protected void handleOnRestart() {
    }

    protected void handleOnResume() {
    }

    protected void handleOnStart() {
    }

    protected void handleOnStop() {
    }

    public void load() {
    }

    protected void restoreState(Bundle bundle) {
    }

    public Boolean shouldOverrideLoad(Uri uri) {
        return null;
    }

    public Context getContext() {
        return this.bridge.getContext();
    }

    public AppCompatActivity getActivity() {
        return (AppCompatActivity) this.bridge.getActivity();
    }

    public void setBridge(Bridge bridge) {
        this.bridge = bridge;
    }

    public Bridge getBridge() {
        return this.bridge;
    }

    public void setPluginHandle(PluginHandle pluginHandle) {
        this.handle = pluginHandle;
    }

    public PluginHandle getPluginHandle() {
        return this.handle;
    }

    public String getAppId() {
        return getContext().getPackageName();
    }

    public void saveCall(PluginCall pluginCall) {
        this.savedLastCall = pluginCall;
    }

    public void freeSavedCall() {
        if (!this.savedLastCall.isReleased()) {
            this.savedLastCall.release(this.bridge);
        }
        this.savedLastCall = null;
    }

    public PluginCall getSavedCall() {
        return this.savedLastCall;
    }

    public Object getConfigValue(String str) {
        try {
            JSONObject object = this.bridge.getConfig().getObject("plugins");
            if (object == null) {
                return null;
            }
            return object.getJSONObject(getPluginHandle().getId()).get(str);
        } catch (JSONException unused) {
            return null;
        }
    }

    public String[] getUndefinedPermissions(String[] strArr) {
        ArrayList arrayList = new ArrayList();
        String[] manifestPermissions = getManifestPermissions();
        if (manifestPermissions == null || manifestPermissions.length <= 0) {
            return strArr;
        }
        List listAsList = Arrays.asList(manifestPermissions);
        ArrayList arrayList2 = new ArrayList();
        arrayList2.addAll(listAsList);
        for (String str : strArr) {
            if (!arrayList2.contains(str)) {
                arrayList.add(str);
            }
        }
        return (String[]) arrayList.toArray(new String[arrayList.size()]);
    }

    public boolean hasDefinedPermission(String str) {
        String[] manifestPermissions = getManifestPermissions();
        if (manifestPermissions != null && manifestPermissions.length > 0) {
            List listAsList = Arrays.asList(manifestPermissions);
            ArrayList arrayList = new ArrayList();
            arrayList.addAll(listAsList);
            if (arrayList.contains(str)) {
                return true;
            }
        }
        return false;
    }

    private String[] getManifestPermissions() {
        try {
            PackageInfo packageInfo = getContext().getPackageManager().getPackageInfo(getAppId(), 4096);
            if (packageInfo != null) {
                return packageInfo.requestedPermissions;
            }
            return null;
        } catch (Exception unused) {
            return null;
        }
    }

    public boolean hasDefinedPermissions(String[] strArr) {
        for (String str : strArr) {
            if (!hasDefinedPermission(str)) {
                return false;
            }
        }
        return true;
    }

    public boolean hasDefinedRequiredPermissions() {
        return hasDefinedPermissions(this.handle.getPluginAnnotation().permissions());
    }

    public boolean hasPermission(String str) {
        return ActivityCompat.checkSelfPermission(getContext(), str) == 0;
    }

    public boolean hasRequiredPermissions() {
        for (String str : this.handle.getPluginAnnotation().permissions()) {
            if (!hasPermission(str)) {
                return false;
            }
        }
        return true;
    }

    public void pluginRequestPermissions(String[] strArr, int i) {
        ActivityCompat.requestPermissions(getActivity(), strArr, i);
    }

    public void pluginRequestAllPermissions() {
        NativePlugin pluginAnnotation = this.handle.getPluginAnnotation();
        ActivityCompat.requestPermissions(getActivity(), pluginAnnotation.permissions(), pluginAnnotation.permissionRequestCode());
    }

    public void pluginRequestPermission(String str, int i) {
        ActivityCompat.requestPermissions(getActivity(), new String[]{str}, i);
    }

    private void addEventListener(String str, PluginCall pluginCall) {
        List<PluginCall> list = this.eventListeners.get(str);
        if (list == null || list.isEmpty()) {
            ArrayList arrayList = new ArrayList();
            this.eventListeners.put(str, arrayList);
            arrayList.add(pluginCall);
            sendRetainedArgumentsForEvent(str);
            return;
        }
        list.add(pluginCall);
    }

    private void removeEventListener(String str, PluginCall pluginCall) {
        List<PluginCall> list = this.eventListeners.get(str);
        if (list == null) {
            return;
        }
        list.remove(pluginCall);
    }

    protected void notifyListeners(String str, JSObject jSObject, boolean z) {
        Logger.verbose(getLogTag(), "Notifying listeners for event " + str);
        List<PluginCall> list = this.eventListeners.get(str);
        if (list == null || list.isEmpty()) {
            Logger.debug(getLogTag(), "No listeners found for event " + str);
            if (z) {
                this.retainedEventArguments.put(str, jSObject);
                return;
            }
            return;
        }
        Iterator<PluginCall> it = list.iterator();
        while (it.hasNext()) {
            it.next().success(jSObject);
        }
    }

    protected void notifyListeners(String str, JSObject jSObject) {
        notifyListeners(str, jSObject, false);
    }

    protected boolean hasListeners(String str) {
        List<PluginCall> list = this.eventListeners.get(str);
        return list != null && list.size() > 0;
    }

    private void sendRetainedArgumentsForEvent(String str) {
        JSObject jSObject = this.retainedEventArguments.get(str);
        if (jSObject == null) {
            return;
        }
        notifyListeners(str, jSObject);
        this.retainedEventArguments.remove(str);
    }

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void addListener(PluginCall pluginCall) {
        String string = pluginCall.getString("eventName");
        pluginCall.save();
        addEventListener(string, pluginCall);
    }

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void removeListener(PluginCall pluginCall) {
        String string = pluginCall.getString("eventName");
        PluginCall savedCall = this.bridge.getSavedCall(pluginCall.getString("callbackId"));
        if (savedCall != null) {
            removeEventListener(string, savedCall);
            this.bridge.releaseCall(savedCall);
        }
    }

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void removeAllListeners(PluginCall pluginCall) {
        this.eventListeners.clear();
    }

    @PluginMethod
    public void requestPermissions(PluginCall pluginCall) {
        NativePlugin pluginAnnotation = this.handle.getPluginAnnotation();
        String[] strArrPermissions = pluginAnnotation.permissions();
        if (strArrPermissions.length > 0) {
            saveCall(pluginCall);
            pluginRequestPermissions(strArrPermissions, pluginAnnotation.permissionRequestCode());
        } else {
            pluginCall.success();
        }
    }

    protected void handleRequestPermissionsResult(int i, String[] strArr, int[] iArr) {
        if (hasDefinedPermissions(strArr)) {
            return;
        }
        StringBuilder sb = new StringBuilder("Missing the following permissions in AndroidManifest.xml:\n");
        for (String str : getUndefinedPermissions(strArr)) {
            sb.append(str + IOUtils.LINE_SEPARATOR_UNIX);
        }
        this.savedLastCall.error(sb.toString());
        this.savedLastCall = null;
    }

    protected Bundle saveInstanceState() {
        PluginCall savedCall = getSavedCall();
        if (savedCall == null) {
            return null;
        }
        Bundle bundle = new Bundle();
        JSObject data = savedCall.getData();
        if (data != null) {
            bundle.putString(BUNDLE_PERSISTED_OPTIONS_JSON_KEY, data.toString());
        }
        return bundle;
    }

    protected void startActivityForResult(PluginCall pluginCall, Intent intent, int i) {
        this.bridge.startActivityForPluginWithResult(pluginCall, intent, i);
    }

    public void execute(Runnable runnable) {
        this.bridge.execute(runnable);
    }

    protected String getLogTag(String... strArr) {
        return Logger.tags(strArr);
    }

    protected String getLogTag() {
        return Logger.tags(getClass().getSimpleName());
    }
}

