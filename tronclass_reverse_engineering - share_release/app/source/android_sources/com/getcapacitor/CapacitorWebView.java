package com.getcapacitor;

import android.content.Context;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.view.inputmethod.BaseInputConnection;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputConnection;
import android.webkit.WebView;
public class CapacitorWebView extends WebView {
    private BaseInputConnection capInputConnection;

    public CapacitorWebView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
    }

    @Override // android.webkit.WebView, android.view.View
    public InputConnection onCreateInputConnection(EditorInfo editorInfo) {
        if (new CapConfig(getContext().getAssets(), null).getBoolean("android.captureInput", false)) {
            if (this.capInputConnection == null) {
                this.capInputConnection = new BaseInputConnection(this, false);
            }
            return this.capInputConnection;
        }
        return super.onCreateInputConnection(editorInfo);
    }

    @Override // android.webkit.WebView, android.view.ViewGroup, android.view.View
    public boolean dispatchKeyEvent(KeyEvent keyEvent) {
        if (keyEvent.getAction() == 2) {
            evaluateJavascript("document.activeElement.value = document.activeElement.value + '" + keyEvent.getCharacters() + "';", null);
            return false;
        }
        return super.dispatchKeyEvent(keyEvent);
    }
}

