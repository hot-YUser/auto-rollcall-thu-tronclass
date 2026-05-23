package com.onesignal;
class OSThrowable {
    OSThrowable() {
    }

    static class OSMainThreadException extends RuntimeException {
        public OSMainThreadException(String str) {
            super(str);
        }
    }
}

