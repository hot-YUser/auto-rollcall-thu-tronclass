package com.onesignal;

import com.onesignal.OneSignal;
public abstract class OSInAppMessagePrompt {
    private boolean prompted = false;

    abstract String getPromptKey();

    abstract void handlePrompt(OneSignal.OSPromptActionCompletionCallback oSPromptActionCompletionCallback);

    OSInAppMessagePrompt() {
    }

    boolean hasPrompted() {
        return this.prompted;
    }

    void setPrompted(boolean z) {
        this.prompted = z;
    }

    public String toString() {
        return "OSInAppMessagePrompt{key=" + getPromptKey() + " prompted=" + this.prompted + '}';
    }
}

