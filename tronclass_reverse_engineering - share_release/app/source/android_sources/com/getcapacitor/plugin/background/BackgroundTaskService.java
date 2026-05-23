package com.getcapacitor.plugin.background;

import android.app.IntentService;
import android.content.Intent;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
import com.getcapacitor.Logger;
public class BackgroundTaskService extends IntentService {
    public BackgroundTaskService() {
        super("CapacitorBackgroundTaskService");
    }

    @Override // android.app.IntentService
    protected void onHandleIntent(Intent intent) {
        String stringExtra = intent.getStringExtra("taskId");
        Logger.debug("Doing background task: " + stringExtra);
        LocalBroadcastManager.getInstance(this).sendBroadcast(new Intent(BackgroundTask.TASK_BROADCAST_ACTION).putExtra("taskId", stringExtra));
    }
}

