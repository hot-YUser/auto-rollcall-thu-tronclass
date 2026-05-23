package org.apache.cordova;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Pair;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;
public class CordovaInterfaceImpl implements CordovaInterface {
    private static final String TAG = "CordovaInterfaceImpl";
    protected Activity activity;
    protected CordovaPlugin activityResultCallback;
    protected int activityResultRequestCode;
    protected boolean activityWasDestroyed;
    protected String initCallbackService;
    protected CallbackMap permissionResultCallbacks;
    protected PluginManager pluginManager;
    protected Bundle savedPluginState;
    protected ActivityResultHolder savedResult;
    protected ExecutorService threadPool;

    public CordovaInterfaceImpl(Activity activity) {
        this(activity, Executors.newCachedThreadPool());
    }

    public CordovaInterfaceImpl(Activity activity, ExecutorService executorService) {
        this.activityWasDestroyed = false;
        this.activity = activity;
        this.threadPool = executorService;
        this.permissionResultCallbacks = new CallbackMap();
    }

    @Override // org.apache.cordova.CordovaInterface
    public void startActivityForResult(CordovaPlugin cordovaPlugin, Intent intent, int i) {
        setActivityResultCallback(cordovaPlugin);
        try {
            this.activity.startActivityForResult(intent, i);
        } catch (RuntimeException e) {
            this.activityResultCallback = null;
            throw e;
        }
    }

    @Override // org.apache.cordova.CordovaInterface
    public void setActivityResultCallback(CordovaPlugin cordovaPlugin) {
        CordovaPlugin cordovaPlugin2 = this.activityResultCallback;
        if (cordovaPlugin2 != null) {
            cordovaPlugin2.onActivityResult(this.activityResultRequestCode, 0, null);
        }
        this.activityResultCallback = cordovaPlugin;
    }

    @Override // org.apache.cordova.CordovaInterface
    public Activity getActivity() {
        return this.activity;
    }

    @Override // org.apache.cordova.CordovaInterface
    public Context getContext() {
        return this.activity;
    }

    @Override // org.apache.cordova.CordovaInterface
    public Object onMessage(String str, Object obj) {
        if (!"exit".equals(str)) {
            return null;
        }
        this.activity.finish();
        return null;
    }

    @Override // org.apache.cordova.CordovaInterface
    public ExecutorService getThreadPool() {
        return this.threadPool;
    }

    public void onCordovaInit(PluginManager pluginManager) {
        CoreAndroid coreAndroid;
        this.pluginManager = pluginManager;
        ActivityResultHolder activityResultHolder = this.savedResult;
        if (activityResultHolder == null) {
            if (this.activityWasDestroyed) {
                this.activityWasDestroyed = false;
                if (pluginManager == null || (coreAndroid = (CoreAndroid) pluginManager.getPlugin(CoreAndroid.PLUGIN_NAME)) == null) {
                    return;
                }
                JSONObject jSONObject = new JSONObject();
                try {
                    jSONObject.put("action", "resume");
                } catch (JSONException e) {
                    LOG.e(TAG, "Failed to create event message", e);
                }
                coreAndroid.sendResumeEvent(new PluginResult(PluginResult.Status.OK, jSONObject));
                return;
            }
            return;
        }
        onActivityResult(activityResultHolder.requestCode, this.savedResult.resultCode, this.savedResult.intent);
    }

    public boolean onActivityResult(int i, int i2, Intent intent) {
        CordovaPlugin plugin = this.activityResultCallback;
        if (plugin == null && this.initCallbackService != null) {
            this.savedResult = new ActivityResultHolder(i, i2, intent);
            PluginManager pluginManager = this.pluginManager;
            if (pluginManager != null && (plugin = pluginManager.getPlugin(this.initCallbackService)) != null) {
                plugin.onRestoreStateForActivityResult(this.savedPluginState.getBundle(plugin.getServiceName()), new ResumeCallback(plugin.getServiceName(), this.pluginManager));
            }
        }
        this.activityResultCallback = null;
        if (plugin != null) {
            LOG.d(TAG, "Sending activity result to plugin");
            this.initCallbackService = null;
            this.savedResult = null;
            plugin.onActivityResult(i, i2, intent);
            return true;
        }
        LOG.w(TAG, "Got an activity result, but no plugin was registered to receive it".concat(this.savedResult != null ? " yet!" : "."));
        return false;
    }

    public void setActivityResultRequestCode(int i) {
        this.activityResultRequestCode = i;
    }

    public void onSaveInstanceState(Bundle bundle) {
        CordovaPlugin cordovaPlugin = this.activityResultCallback;
        if (cordovaPlugin != null) {
            bundle.putString("callbackService", cordovaPlugin.getServiceName());
        }
        PluginManager pluginManager = this.pluginManager;
        if (pluginManager != null) {
            bundle.putBundle("plugin", pluginManager.onSaveInstanceState());
        }
    }

    public void restoreInstanceState(Bundle bundle) {
        this.initCallbackService = bundle.getString("callbackService");
        this.savedPluginState = bundle.getBundle("plugin");
        this.activityWasDestroyed = true;
    }

    private static class ActivityResultHolder {
        private Intent intent;
        private int requestCode;
        private int resultCode;

        public ActivityResultHolder(int i, int i2, Intent intent) {
            this.requestCode = i;
            this.resultCode = i2;
            this.intent = intent;
        }
    }

    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) throws JSONException {
        Pair<CordovaPlugin, Integer> andRemoveCallback = this.permissionResultCallbacks.getAndRemoveCallback(i);
        if (andRemoveCallback != null) {
            ((CordovaPlugin) andRemoveCallback.first).onRequestPermissionResult(((Integer) andRemoveCallback.second).intValue(), strArr, iArr);
        }
    }

    @Override // org.apache.cordova.CordovaInterface
    public void requestPermission(CordovaPlugin cordovaPlugin, int i, String str) {
        requestPermissions(cordovaPlugin, i, new String[]{str});
    }

    @Override // org.apache.cordova.CordovaInterface
    public void requestPermissions(CordovaPlugin cordovaPlugin, int i, String[] strArr) {
        getActivity().requestPermissions(strArr, this.permissionResultCallbacks.registerCallback(cordovaPlugin, i));
    }

    @Override // org.apache.cordova.CordovaInterface
    public boolean hasPermission(String str) {
        return this.activity.checkSelfPermission(str) == 0;
    }
}

