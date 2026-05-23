package com.onesignal;

import com.onesignal.OneSignal;
class OSInAppMessageLocationPrompt extends OSInAppMessagePrompt {
    static final String LOCATION_PROMPT_KEY = "location";

    OSInAppMessageLocationPrompt() {
    }

    @Override // com.onesignal.OSInAppMessagePrompt
    void handlePrompt(OneSignal.OSPromptActionCompletionCallback oSPromptActionCompletionCallback) {
        OneSignal.promptLocation(oSPromptActionCompletionCallback, true);
    }

    @Override // com.onesignal.OSInAppMessagePrompt
    String getPromptKey() {
        return LOCATION_PROMPT_KEY;
    }
}

