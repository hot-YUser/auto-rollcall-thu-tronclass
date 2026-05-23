package androidx.work.impl.background.systemjob;

import android.app.Application;
import android.app.job.JobParameters;
import android.app.job.JobService;
import android.os.Build;
import android.os.PersistableBundle;
import android.text.TextUtils;
import androidx.work.Logger;
import androidx.work.WorkerParameters;
import androidx.work.impl.ExecutionListener;
import androidx.work.impl.WorkManagerImpl;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
public class SystemJobService extends JobService implements ExecutionListener {
    private static final String TAG = Logger.tagWithPrefix("SystemJobService");
    private final Map<String, JobParameters> mJobParameters = new HashMap();
    private WorkManagerImpl mWorkManagerImpl;

    @Override // android.app.Service
    public void onCreate() {
        super.onCreate();
        try {
            WorkManagerImpl workManagerImpl = WorkManagerImpl.getInstance(getApplicationContext());
            this.mWorkManagerImpl = workManagerImpl;
            workManagerImpl.getProcessor().addExecutionListener(this);
        } catch (IllegalStateException unused) {
            if (!Application.class.equals(getApplication().getClass())) {
                throw new IllegalStateException("WorkManager needs to be initialized via a ContentProvider#onCreate() or an Application#onCreate().");
            }
            Logger.get().warning(TAG, "Could not find WorkManager instance; this may be because an auto-backup is in progress. Ignoring JobScheduler commands for now. Please make sure that you are initializing WorkManager if you have manually disabled WorkManagerInitializer.", new Throwable[0]);
        }
    }

    @Override // android.app.Service
    public void onDestroy() {
        super.onDestroy();
        WorkManagerImpl workManagerImpl = this.mWorkManagerImpl;
        if (workManagerImpl != null) {
            workManagerImpl.getProcessor().removeExecutionListener(this);
        }
    }

    @Override // android.app.job.JobService
    public boolean onStartJob(JobParameters params) {
        if (this.mWorkManagerImpl == null) {
            Logger.get().debug(TAG, "WorkManager is not initialized; requesting retry.", new Throwable[0]);
            jobFinished(params, true);
            return false;
        }
        String workSpecIdFromJobParameters = getWorkSpecIdFromJobParameters(params);
        if (TextUtils.isEmpty(workSpecIdFromJobParameters)) {
            Logger.get().error(TAG, "WorkSpec id not found!", new Throwable[0]);
            return false;
        }
        synchronized (this.mJobParameters) {
            if (this.mJobParameters.containsKey(workSpecIdFromJobParameters)) {
                Logger.get().debug(TAG, String.format("Job is already being executed by SystemJobService: %s", workSpecIdFromJobParameters), new Throwable[0]);
                return false;
            }
            Logger.get().debug(TAG, String.format("onStartJob for %s", workSpecIdFromJobParameters), new Throwable[0]);
            this.mJobParameters.put(workSpecIdFromJobParameters, params);
            WorkerParameters.RuntimeExtras runtimeExtras = new WorkerParameters.RuntimeExtras();
            if (params.getTriggeredContentUris() != null) {
                runtimeExtras.triggeredContentUris = Arrays.asList(params.getTriggeredContentUris());
            }
            if (params.getTriggeredContentAuthorities() != null) {
                runtimeExtras.triggeredContentAuthorities = Arrays.asList(params.getTriggeredContentAuthorities());
            }
            if (Build.VERSION.SDK_INT >= 28) {
                runtimeExtras.network = params.getNetwork();
            }
            this.mWorkManagerImpl.startWork(workSpecIdFromJobParameters, runtimeExtras);
            return true;
        }
    }

    @Override // android.app.job.JobService
    public boolean onStopJob(JobParameters params) {
        if (this.mWorkManagerImpl == null) {
            Logger.get().debug(TAG, "WorkManager is not initialized; requesting retry.", new Throwable[0]);
            return true;
        }
        String workSpecIdFromJobParameters = getWorkSpecIdFromJobParameters(params);
        if (TextUtils.isEmpty(workSpecIdFromJobParameters)) {
            Logger.get().error(TAG, "WorkSpec id not found!", new Throwable[0]);
            return false;
        }
        Logger.get().debug(TAG, String.format("onStopJob for %s", workSpecIdFromJobParameters), new Throwable[0]);
        synchronized (this.mJobParameters) {
            this.mJobParameters.remove(workSpecIdFromJobParameters);
        }
        this.mWorkManagerImpl.stopWork(workSpecIdFromJobParameters);
        return !this.mWorkManagerImpl.getProcessor().isCancelled(workSpecIdFromJobParameters);
    }

    @Override // androidx.work.impl.ExecutionListener
    public void onExecuted(String workSpecId, boolean needsReschedule) {
        JobParameters jobParametersRemove;
        Logger.get().debug(TAG, String.format("%s executed on JobScheduler", workSpecId), new Throwable[0]);
        synchronized (this.mJobParameters) {
            jobParametersRemove = this.mJobParameters.remove(workSpecId);
        }
        if (jobParametersRemove != null) {
            jobFinished(jobParametersRemove, needsReschedule);
        }
    }

    private static String getWorkSpecIdFromJobParameters(JobParameters parameters) {
        try {
            PersistableBundle extras = parameters.getExtras();
            if (extras == null || !extras.containsKey("EXTRA_WORK_SPEC_ID")) {
                return null;
            }
            return extras.getString("EXTRA_WORK_SPEC_ID");
        } catch (NullPointerException unused) {
            return null;
        }
    }
}

