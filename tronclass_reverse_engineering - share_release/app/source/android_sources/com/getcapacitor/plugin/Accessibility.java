package com.getcapacitor.plugin;

import android.speech.tts.TextToSpeech;
import android.view.accessibility.AccessibilityManager;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import java.util.Locale;
@NativePlugin
public class Accessibility extends Plugin {
    private static final String EVENT_SCREEN_READER_STATE_CHANGE = "accessibilityScreenReaderStateChange";
    private AccessibilityManager am;
    private TextToSpeech tts;

    @Override // com.getcapacitor.Plugin
    public void load() {
        AccessibilityManager accessibilityManager = (AccessibilityManager) getContext().getSystemService("accessibility");
        this.am = accessibilityManager;
        accessibilityManager.addTouchExplorationStateChangeListener(new AccessibilityManager.TouchExplorationStateChangeListener() { // from class: com.getcapacitor.plugin.Accessibility.1
            @Override // android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener
            public void onTouchExplorationStateChanged(boolean z) {
                JSObject jSObject = new JSObject();
                jSObject.put("value", z);
                Accessibility.this.notifyListeners(Accessibility.EVENT_SCREEN_READER_STATE_CHANGE, jSObject);
            }
        });
    }

    @PluginMethod
    public void isScreenReaderEnabled(PluginCall pluginCall) {
        Logger.debug(getLogTag(), "Checking for screen reader");
        Logger.debug(getLogTag(), "Is it enabled? " + this.am.isTouchExplorationEnabled());
        JSObject jSObject = new JSObject();
        jSObject.put("value", this.am.isTouchExplorationEnabled());
        pluginCall.success(jSObject);
    }

    @PluginMethod
    public void speak(PluginCall pluginCall) {
        final String string = pluginCall.getString("value");
        final Locale localeForLanguageTag = Locale.forLanguageTag(pluginCall.getString("language", "en"));
        if (localeForLanguageTag == null) {
            pluginCall.error("Language was not a valid language tag.");
        } else {
            this.tts = new TextToSpeech(getContext(), new TextToSpeech.OnInitListener() { // from class: com.getcapacitor.plugin.Accessibility.2
                @Override // android.speech.tts.TextToSpeech.OnInitListener
                public void onInit(int i) {
                    Accessibility.this.tts.setLanguage(localeForLanguageTag);
                    Accessibility.this.tts.speak(string, 0, null, "capacitoraccessibility" + System.currentTimeMillis());
                }
            });
        }
    }
}

