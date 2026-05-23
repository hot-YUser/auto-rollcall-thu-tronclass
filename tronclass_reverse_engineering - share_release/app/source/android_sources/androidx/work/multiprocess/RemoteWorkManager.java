package androidx.work.multiprocess;

import android.content.Context;
import androidx.work.Data;
import androidx.work.ExistingPeriodicWorkPolicy;
import androidx.work.ExistingWorkPolicy;
import androidx.work.OneTimeWorkRequest;
import androidx.work.PeriodicWorkRequest;
import androidx.work.WorkContinuation;
import androidx.work.WorkInfo;
import androidx.work.WorkQuery;
import androidx.work.WorkRequest;
import androidx.work.impl.WorkManagerImpl;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
public abstract class RemoteWorkManager {
    public abstract RemoteWorkContinuation beginUniqueWork(String uniqueWorkName, ExistingWorkPolicy existingWorkPolicy, List<OneTimeWorkRequest> work);

    public abstract RemoteWorkContinuation beginWith(List<OneTimeWorkRequest> work);

    public abstract ListenableFuture<Void> cancelAllWork();

    public abstract ListenableFuture<Void> cancelAllWorkByTag(String tag);

    public abstract ListenableFuture<Void> cancelUniqueWork(String uniqueWorkName);

    public abstract ListenableFuture<Void> cancelWorkById(UUID id);

    public abstract ListenableFuture<Void> enqueue(WorkContinuation continuation);

    public abstract ListenableFuture<Void> enqueue(WorkRequest request);

    public abstract ListenableFuture<Void> enqueue(List<WorkRequest> requests);

    public abstract ListenableFuture<Void> enqueueUniquePeriodicWork(String uniqueWorkName, ExistingPeriodicWorkPolicy existingPeriodicWorkPolicy, PeriodicWorkRequest periodicWork);

    public abstract ListenableFuture<Void> enqueueUniqueWork(String uniqueWorkName, ExistingWorkPolicy existingWorkPolicy, List<OneTimeWorkRequest> work);

    public abstract ListenableFuture<List<WorkInfo>> getWorkInfos(WorkQuery workQuery);

    public abstract ListenableFuture<Void> setProgress(UUID id, Data data);

    protected RemoteWorkManager() {
    }

    public final ListenableFuture<Void> enqueueUniqueWork(String uniqueWorkName, ExistingWorkPolicy existingWorkPolicy, OneTimeWorkRequest work) {
        return enqueueUniqueWork(uniqueWorkName, existingWorkPolicy, Collections.singletonList(work));
    }

    public final RemoteWorkContinuation beginWith(OneTimeWorkRequest work) {
        return beginWith(Collections.singletonList(work));
    }

    public final RemoteWorkContinuation beginUniqueWork(String uniqueWorkName, ExistingWorkPolicy existingWorkPolicy, OneTimeWorkRequest work) {
        return beginUniqueWork(uniqueWorkName, existingWorkPolicy, Collections.singletonList(work));
    }

    public static RemoteWorkManager getInstance(Context context) {
        RemoteWorkManager remoteWorkManager = WorkManagerImpl.getInstance(context).getRemoteWorkManager();
        if (remoteWorkManager != null) {
            return remoteWorkManager;
        }
        throw new IllegalStateException("Unable to initialize RemoteWorkManager");
    }
}

