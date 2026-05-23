package androidx.work;

import android.app.PendingIntent;
import android.content.Context;
import androidx.lifecycle.LiveData;
import androidx.work.impl.WorkManagerImpl;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
public abstract class WorkManager {
    public abstract WorkContinuation beginUniqueWork(String uniqueWorkName, ExistingWorkPolicy existingWorkPolicy, List<OneTimeWorkRequest> work);

    public abstract WorkContinuation beginWith(List<OneTimeWorkRequest> work);

    public abstract Operation cancelAllWork();

    public abstract Operation cancelAllWorkByTag(String tag);

    public abstract Operation cancelUniqueWork(String uniqueWorkName);

    public abstract Operation cancelWorkById(UUID id);

    public abstract PendingIntent createCancelPendingIntent(UUID id);

    public abstract Operation enqueue(List<? extends WorkRequest> requests);

    public abstract Operation enqueueUniquePeriodicWork(String uniqueWorkName, ExistingPeriodicWorkPolicy existingPeriodicWorkPolicy, PeriodicWorkRequest periodicWork);

    public abstract Operation enqueueUniqueWork(String uniqueWorkName, ExistingWorkPolicy existingWorkPolicy, List<OneTimeWorkRequest> work);

    public abstract ListenableFuture<Long> getLastCancelAllTimeMillis();

    public abstract LiveData<Long> getLastCancelAllTimeMillisLiveData();

    public abstract ListenableFuture<WorkInfo> getWorkInfoById(UUID id);

    public abstract LiveData<WorkInfo> getWorkInfoByIdLiveData(UUID id);

    public abstract ListenableFuture<List<WorkInfo>> getWorkInfos(WorkQuery workQuery);

    public abstract ListenableFuture<List<WorkInfo>> getWorkInfosByTag(String tag);

    public abstract LiveData<List<WorkInfo>> getWorkInfosByTagLiveData(String tag);

    public abstract ListenableFuture<List<WorkInfo>> getWorkInfosForUniqueWork(String uniqueWorkName);

    public abstract LiveData<List<WorkInfo>> getWorkInfosForUniqueWorkLiveData(String uniqueWorkName);

    public abstract LiveData<List<WorkInfo>> getWorkInfosLiveData(WorkQuery workQuery);

    public abstract Operation pruneWork();

    @Deprecated
    public static WorkManager getInstance() {
        WorkManagerImpl workManagerImpl = WorkManagerImpl.getInstance();
        if (workManagerImpl != null) {
            return workManagerImpl;
        }
        throw new IllegalStateException("WorkManager is not initialized properly.  The most likely cause is that you disabled WorkManagerInitializer in your manifest but forgot to call WorkManager#initialize in your Application#onCreate or a ContentProvider.");
    }

    public static WorkManager getInstance(Context context) {
        return WorkManagerImpl.getInstance(context);
    }

    public static void initialize(Context context, Configuration configuration) {
        WorkManagerImpl.initialize(context, configuration);
    }

    public final Operation enqueue(WorkRequest workRequest) {
        return enqueue(Collections.singletonList(workRequest));
    }

    public final WorkContinuation beginWith(OneTimeWorkRequest work) {
        return beginWith(Collections.singletonList(work));
    }

    public final WorkContinuation beginUniqueWork(String uniqueWorkName, ExistingWorkPolicy existingWorkPolicy, OneTimeWorkRequest work) {
        return beginUniqueWork(uniqueWorkName, existingWorkPolicy, Collections.singletonList(work));
    }

    public Operation enqueueUniqueWork(String uniqueWorkName, ExistingWorkPolicy existingWorkPolicy, OneTimeWorkRequest work) {
        return enqueueUniqueWork(uniqueWorkName, existingWorkPolicy, Collections.singletonList(work));
    }

    protected WorkManager() {
    }
}

