package com.onesignal;

import android.app.job.JobParameters;
import android.app.job.JobService;
import com.onesignal.OSSyncService;
import com.onesignal.OneSignal;
public class SyncJobService extends JobService {
    @Override // android.app.job.JobService
    public boolean onStartJob(JobParameters jobParameters) {
        OSSyncService.getInstance().doBackgroundSync(this, new OSSyncService.LollipopSyncRunnable(this, jobParameters));
        return true;
    }

    @Override // android.app.job.JobService
    public boolean onStopJob(JobParameters jobParameters) {
        boolean zStopSyncBgThread = OSSyncService.getInstance().stopSyncBgThread();
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "SyncJobService onStopJob called, system conditions not available reschedule: " + zStopSyncBgThread);
        return zStopSyncBgThread;
    }
}

