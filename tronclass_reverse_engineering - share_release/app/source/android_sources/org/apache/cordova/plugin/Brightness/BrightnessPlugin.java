package org.apache.cordova.plugin.Brightness;

import android.app.Activity;
import android.view.Window;
import android.view.WindowManager;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
public class BrightnessPlugin extends CordovaPlugin {

    public enum Action {
        setBrightness,
        getBrightness,
        setKeepScreenOn
    }

    private class SetTask implements Runnable {
        private WindowManager.LayoutParams lp;
        private Activity target;

        private SetTask() {
            this.target = null;
            this.lp = null;
        }

        /* synthetic */ SetTask(BrightnessPlugin brightnessPlugin, AnonymousClass1 anonymousClass1) {
            this();
        }

        @Override // java.lang.Runnable
        public void run() {
            this.target.getWindow().setAttributes(this.lp);
        }

        public void setParams(Activity activity, WindowManager.LayoutParams layoutParams) {
            this.target = activity;
            this.lp = layoutParams;
        }
    }

    private class KeepOnTask implements Runnable {
        private boolean state;
        private Window win;

        private KeepOnTask() {
            this.win = null;
            this.state = false;
        }

        /* synthetic */ KeepOnTask(BrightnessPlugin brightnessPlugin, AnonymousClass1 anonymousClass1) {
            this();
        }

        @Override // java.lang.Runnable
        public void run() {
            if (this.state) {
                this.win.addFlags(128);
            } else {
                this.win.clearFlags(128);
            }
        }

        public void setParams(Window window, boolean z) {
            this.win = window;
            this.state = z;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        System.out.println("plugin has been started");
        int i = AnonymousClass1.$SwitchMap$org$apache$cordova$plugin$Brightness$BrightnessPlugin$Action[Action.valueOf(str).ordinal()];
        if (i == 1) {
            setBrightness(jSONArray, callbackContext);
            return true;
        }
        if (i == 2) {
            getBrightness(jSONArray, callbackContext);
            return true;
        }
        if (i != 3) {
            return false;
        }
        setKeepScreenOn(jSONArray, callbackContext);
        return true;
    }
    static /* synthetic */ class AnonymousClass1 {
        static final /* synthetic */ int[] $SwitchMap$org$apache$cordova$plugin$Brightness$BrightnessPlugin$Action;

        static {
            int[] iArr = new int[Action.values().length];
            $SwitchMap$org$apache$cordova$plugin$Brightness$BrightnessPlugin$Action = iArr;
            try {
                iArr[Action.setBrightness.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$org$apache$cordova$plugin$Brightness$BrightnessPlugin$Action[Action.getBrightness.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$org$apache$cordova$plugin$Brightness$BrightnessPlugin$Action[Action.setKeepScreenOn.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    private boolean setBrightness(JSONArray jSONArray, CallbackContext callbackContext) {
        try {
            Activity activity = this.f7cordova.getActivity();
            WindowManager.LayoutParams attributes = activity.getWindow().getAttributes();
            attributes.screenBrightness = (float) Double.parseDouble(jSONArray.getString(0));
            SetTask setTask = new SetTask(this, null);
            setTask.setParams(activity, attributes);
            activity.runOnUiThread(setTask);
            callbackContext.success("OK");
            System.out.println("All went fine.");
            return true;
        } catch (NullPointerException e) {
            System.out.println("Null pointer exception");
            System.out.println(e.getMessage());
            callbackContext.error(e.getMessage());
            return false;
        } catch (JSONException e2) {
            System.out.println("JSONException exception");
            System.out.println(e2.getMessage());
            callbackContext.error(e2.getMessage());
            return false;
        }
    }

    private boolean getBrightness(JSONArray jSONArray, CallbackContext callbackContext) {
        try {
            callbackContext.success(Double.valueOf(this.f7cordova.getActivity().getWindow().getAttributes().screenBrightness).toString());
            System.out.println("All went fine.");
            return true;
        } catch (NullPointerException e) {
            System.out.println("Null pointer exception");
            System.out.println(e.getMessage());
            callbackContext.error(e.getMessage());
            return false;
        }
    }

    private boolean setKeepScreenOn(JSONArray jSONArray, CallbackContext callbackContext) {
        try {
            boolean z = jSONArray.getBoolean(0);
            Activity activity = this.f7cordova.getActivity();
            KeepOnTask keepOnTask = new KeepOnTask(this, null);
            keepOnTask.setParams(activity.getWindow(), z);
            activity.runOnUiThread(keepOnTask);
            callbackContext.success("OK");
            System.out.println("All went fine.");
            return true;
        } catch (NullPointerException e) {
            System.out.println("Null pointer exception");
            System.out.println(e.getMessage());
            callbackContext.error(e.getMessage());
            return false;
        } catch (JSONException e2) {
            System.out.println("JSONException");
            System.out.println(e2.getMessage());
            callbackContext.error(e2.getMessage());
            return false;
        }
    }
}

