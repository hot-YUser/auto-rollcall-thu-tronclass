package com.onesignal;
class BundleCompatFactory {
    BundleCompatFactory() {
    }

    static BundleCompat getInstance() {
        return new BundleCompatPersistableBundle();
    }
}

