package com.lorentech.cordova.plugins.volumeControl;

import android.content.Context;
import android.media.AudioManager;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.json.JSONArray;
import org.json.JSONException;
public class VolumeControl extends CordovaPlugin {
    public static final String GET = "getVolume";
    public static final String HDV = "hideVolume";
    public static final String ISM = "isMuted";
    public static final String MUT = "toggleMute";
    public static final String SET = "setVolume";
    public static final String SOV = "showVolume";
    private static final String TAG = "VolumeControl";
    private Context context;
    private AudioManager manager;

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        Context applicationContext = this.f7cordova.getActivity().getApplicationContext();
        this.context = applicationContext;
        this.manager = (AudioManager) applicationContext.getSystemService("audio");
        int i = 4;
        if (SET.equals(str)) {
            try {
                int volumeToSet = getVolumeToSet((int) Math.round(jSONArray.getDouble(0) * 100.0d));
                boolean z = (jSONArray.length() <= 1 || jSONArray.isNull(1)) ? true : jSONArray.getBoolean(1);
                AudioManager audioManager = this.manager;
                if (!z) {
                    i = 0;
                }
                audioManager.setStreamVolume(3, volumeToSet, i);
                callbackContext.success();
            } catch (Exception e) {
                LOG.d(TAG, "Error setting volume " + e);
                return false;
            }
        } else if (GET.equals(str)) {
            try {
                callbackContext.success(String.valueOf(getCurrentVolume() / 100.0f));
            } catch (Exception e2) {
                LOG.d(TAG, "Error setting volume " + e2);
                return false;
            }
        } else if (MUT.equals(str)) {
            try {
                int volumeToSet2 = getCurrentVolume() > 1 ? 0 : getVolumeToSet(Math.round(((float) jSONArray.getDouble(0)) * 100.0f));
                this.manager.setStreamVolume(3, volumeToSet2, 4);
                callbackContext.success(volumeToSet2);
            } catch (Exception e3) {
                LOG.d(TAG, "Error setting mute/unmute " + e3);
                return false;
            }
        } else if (ISM.equals(str)) {
            try {
                callbackContext.success(getCurrentVolume() == 0 ? 0 : 1);
            } catch (Exception e4) {
                LOG.d(TAG, "Error checking mute volume " + e4);
                return false;
            }
        } else {
            if (!HDV.equals(str) && !SOV.equals(str)) {
                return false;
            }
            callbackContext.success();
        }
        return true;
    }

    private int getVolumeToSet(int i) {
        try {
            return Math.round((i * this.manager.getStreamMaxVolume(3)) / 100);
        } catch (Exception e) {
            LOG.d(TAG, "Error getting VolumeToSet: " + e);
            return 1;
        }
    }

    private int getCurrentVolume() {
        try {
            return Math.round((this.manager.getStreamVolume(3) * 100) / this.manager.getStreamMaxVolume(3));
        } catch (Exception e) {
            LOG.d(TAG, "Error getting CurrentVolume: " + e);
            return 1;
        }
    }
}

