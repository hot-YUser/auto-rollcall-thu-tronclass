package com.onesignal;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
public class NotificationOpenedActivityHMS extends Activity {
    @Override // android.app.Activity
    protected void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        processIntent();
    }

    @Override // android.app.Activity
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        processIntent();
    }

    private void processIntent() {
        processOpen(getIntent());
        finish();
    }

    private void processOpen(Intent intent) {
        NotificationPayloadProcessorHMS.handleHMSNotificationOpenIntent(this, intent);
    }
}

