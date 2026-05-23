package com.getcapacitor.plugin;

import android.R;
import android.graphics.Rect;
import android.os.Handler;
import android.util.DisplayMetrics;
import android.view.View;
import android.view.ViewTreeObserver;
import android.view.inputmethod.InputMethodManager;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
@NativePlugin
public class Keyboard extends Plugin {
    private static final String EVENT_KB_DID_HIDE = "keyboardDidHide";
    private static final String EVENT_KB_DID_SHOW = "keyboardDidShow";
    private static final String EVENT_KB_WILL_HIDE = "keyboardWillHide";
    private static final String EVENT_KB_WILL_SHOW = "keyboardWillShow";
    private ViewTreeObserver.OnGlobalLayoutListener list;
    private View rootView;

    @Override // com.getcapacitor.Plugin
    public void load() {
        execute(new Runnable() { // from class: com.getcapacitor.plugin.Keyboard.1
            @Override // java.lang.Runnable
            public void run() {
                DisplayMetrics displayMetrics = new DisplayMetrics();
                Keyboard.this.getActivity().getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);
                final float f = displayMetrics.density;
                Keyboard keyboard = Keyboard.this;
                keyboard.rootView = keyboard.getActivity().getWindow().getDecorView().findViewById(R.id.content).getRootView();
                Keyboard.this.list = new ViewTreeObserver.OnGlobalLayoutListener() { // from class: com.getcapacitor.plugin.Keyboard.1.1
                    int previousHeightDiff = 0;

                    @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
                    public void onGlobalLayout() {
                        Keyboard.this.rootView.getWindowVisibleDisplayFrame(new Rect());
                        int height = (int) ((Keyboard.this.rootView.getRootView().getHeight() - (r0.bottom + Keyboard.this.rootView.getRootWindowInsets().getStableInsetBottom())) / f);
                        if (height > 100 && height != this.previousHeightDiff) {
                            String str = "{ 'keyboardHeight': " + height + " }";
                            Keyboard.this.bridge.triggerWindowJSEvent(Keyboard.EVENT_KB_WILL_SHOW, str);
                            Keyboard.this.bridge.triggerWindowJSEvent(Keyboard.EVENT_KB_DID_SHOW, str);
                            JSObject jSObject = new JSObject();
                            jSObject.put("keyboardHeight", height);
                            Keyboard.this.notifyListeners(Keyboard.EVENT_KB_WILL_SHOW, jSObject);
                            Keyboard.this.notifyListeners(Keyboard.EVENT_KB_DID_SHOW, jSObject);
                        } else {
                            int i = this.previousHeightDiff;
                            if (height != i && i - height > 100) {
                                Keyboard.this.bridge.triggerWindowJSEvent(Keyboard.EVENT_KB_WILL_HIDE);
                                Keyboard.this.bridge.triggerWindowJSEvent(Keyboard.EVENT_KB_DID_HIDE);
                                JSObject jSObject2 = new JSObject();
                                Keyboard.this.notifyListeners(Keyboard.EVENT_KB_WILL_HIDE, jSObject2);
                                Keyboard.this.notifyListeners(Keyboard.EVENT_KB_DID_HIDE, jSObject2);
                            }
                        }
                        this.previousHeightDiff = height;
                    }
                };
                Keyboard.this.rootView.getViewTreeObserver().addOnGlobalLayoutListener(Keyboard.this.list);
            }
        });
    }

    @PluginMethod
    public void show(final PluginCall pluginCall) {
        execute(new Runnable() { // from class: com.getcapacitor.plugin.Keyboard.2
            @Override // java.lang.Runnable
            public void run() {
                new Handler().postDelayed(new Runnable() { // from class: com.getcapacitor.plugin.Keyboard.2.1
                    @Override // java.lang.Runnable
                    public void run() {
                        ((InputMethodManager) Keyboard.this.getActivity().getSystemService("input_method")).toggleSoftInput(0, 1);
                        pluginCall.success();
                    }
                }, 350L);
            }
        });
    }

    @PluginMethod
    public void hide(final PluginCall pluginCall) {
        execute(new Runnable() { // from class: com.getcapacitor.plugin.Keyboard.3
            @Override // java.lang.Runnable
            public void run() {
                InputMethodManager inputMethodManager = (InputMethodManager) Keyboard.this.getActivity().getSystemService("input_method");
                View currentFocus = Keyboard.this.getActivity().getCurrentFocus();
                if (currentFocus == null) {
                    pluginCall.error("Can't close keyboard, not currently focused");
                } else {
                    inputMethodManager.hideSoftInputFromWindow(currentFocus.getWindowToken(), 2);
                    pluginCall.success();
                }
            }
        });
    }

    @PluginMethod
    public void setAccessoryBarVisible(PluginCall pluginCall) {
        pluginCall.unimplemented();
    }

    @PluginMethod
    public void setStyle(PluginCall pluginCall) {
        pluginCall.unimplemented();
    }

    @PluginMethod
    public void setResizeMode(PluginCall pluginCall) {
        pluginCall.unimplemented();
    }

    @PluginMethod
    public void setScroll(PluginCall pluginCall) {
        pluginCall.unimplemented();
    }
}

