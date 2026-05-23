package com.onesignal;

import android.app.job.JobParameters;
import android.app.job.JobService;
abstract class OneSignalJobServiceBase extends JobService {
    @Override // android.app.job.JobService
    public boolean onStopJob(JobParameters jobParameters) {
        return true;
    }

    abstract void startProcessing(JobService jobService, JobParameters jobParameters);

    OneSignalJobServiceBase() {
    }

    @Override // android.app.job.JobService
    public boolean onStartJob(final JobParameters jobParameters) {
        if (jobParameters.getExtras() == null) {
            return false;
        }
        new Thread(new Runnable() { // from class: com.onesignal.OneSignalJobServiceBase.1
            @Override // java.lang.Runnable
            public void run() {
                OneSignalJobServiceBase.this.startProcessing(this, jobParameters);
                OneSignalJobServiceBase.this.jobFinished(jobParameters, false);
            }
        }, "OS_JOBSERVICE_BASE").start();
        return true;
    }
}

