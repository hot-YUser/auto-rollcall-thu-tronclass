package com.onesignal;

import com.onesignal.language.LanguageContext;
class OSInAppMessageControllerFactory {
    private static final Object LOCK = new Object();
    private OSInAppMessageController controller;

    OSInAppMessageControllerFactory() {
    }

    public OSInAppMessageController getController(OneSignalDbHelper oneSignalDbHelper, OSTaskController oSTaskController, OSLogger oSLogger, OSSharedPreferences oSSharedPreferences, LanguageContext languageContext) {
        if (this.controller == null) {
            synchronized (LOCK) {
                if (this.controller == null) {
                    this.controller = new OSInAppMessageController(oneSignalDbHelper, oSTaskController, oSLogger, oSSharedPreferences, languageContext);
                }
            }
        }
        return this.controller;
    }
}

