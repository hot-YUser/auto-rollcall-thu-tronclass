package com.google.android.datatransport.runtime.scheduling.jobscheduling;

import android.app.job.JobParameters;
final /* synthetic */ class JobInfoSchedulerService$$Lambda$1 implements Runnable {
    private final JobInfoSchedulerService arg$1;
    private final JobParameters arg$2;

    private JobInfoSchedulerService$$Lambda$1(JobInfoSchedulerService jobInfoSchedulerService, JobParameters jobParameters) {
        this.arg$1 = jobInfoSchedulerService;
        this.arg$2 = jobParameters;
    }

    public static Runnable lambdaFactory$(JobInfoSchedulerService jobInfoSchedulerService, JobParameters jobParameters) {
        return new JobInfoSchedulerService$$Lambda$1(jobInfoSchedulerService, jobParameters);
    }

    @Override // java.lang.Runnable
    public void run() {
        this.arg$1.jobFinished(this.arg$2, false);
    }
}

