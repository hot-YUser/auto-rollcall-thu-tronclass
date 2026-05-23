package androidx.work.impl.utils;

import android.os.Build;
import android.text.TextUtils;
import androidx.work.Constraints;
import androidx.work.Data;
import androidx.work.ExistingWorkPolicy;
import androidx.work.Logger;
import androidx.work.Operation;
import androidx.work.WorkInfo;
import androidx.work.WorkRequest;
import androidx.work.impl.OperationImpl;
import androidx.work.impl.Scheduler;
import androidx.work.impl.Schedulers;
import androidx.work.impl.WorkContinuationImpl;
import androidx.work.impl.WorkDatabase;
import androidx.work.impl.WorkManagerImpl;
import androidx.work.impl.background.systemalarm.RescheduleReceiver;
import androidx.work.impl.model.Dependency;
import androidx.work.impl.model.DependencyDao;
import androidx.work.impl.model.WorkName;
import androidx.work.impl.model.WorkSpec;
import androidx.work.impl.model.WorkSpecDao;
import androidx.work.impl.model.WorkTag;
import androidx.work.impl.workers.ConstraintTrackingWorker;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
public class EnqueueRunnable implements Runnable {
    private static final String TAG = Logger.tagWithPrefix("EnqueueRunnable");
    private final OperationImpl mOperation = new OperationImpl();
    private final WorkContinuationImpl mWorkContinuation;

    public EnqueueRunnable(WorkContinuationImpl workContinuation) {
        this.mWorkContinuation = workContinuation;
    }

    @Override // java.lang.Runnable
    public void run() {
        try {
            if (this.mWorkContinuation.hasCycles()) {
                throw new IllegalStateException(String.format("WorkContinuation has cycles (%s)", this.mWorkContinuation));
            }
            if (addToDatabase()) {
                PackageManagerHelper.setComponentEnabled(this.mWorkContinuation.getWorkManagerImpl().getApplicationContext(), RescheduleReceiver.class, true);
                scheduleWorkInBackground();
            }
            this.mOperation.setState(Operation.SUCCESS);
        } catch (Throwable th) {
            this.mOperation.setState(new Operation.State.FAILURE(th));
        }
    }

    public Operation getOperation() {
        return this.mOperation;
    }

    public boolean addToDatabase() {
        WorkDatabase workDatabase = this.mWorkContinuation.getWorkManagerImpl().getWorkDatabase();
        workDatabase.beginTransaction();
        try {
            boolean zProcessContinuation = processContinuation(this.mWorkContinuation);
            workDatabase.setTransactionSuccessful();
            return zProcessContinuation;
        } finally {
            workDatabase.endTransaction();
        }
    }

    public void scheduleWorkInBackground() {
        WorkManagerImpl workManagerImpl = this.mWorkContinuation.getWorkManagerImpl();
        Schedulers.schedule(workManagerImpl.getConfiguration(), workManagerImpl.getWorkDatabase(), workManagerImpl.getSchedulers());
    }

    private static boolean processContinuation(WorkContinuationImpl workContinuation) {
        List<WorkContinuationImpl> parents = workContinuation.getParents();
        boolean z = false;
        if (parents != null) {
            boolean zProcessContinuation = false;
            for (WorkContinuationImpl workContinuationImpl : parents) {
                if (!workContinuationImpl.isEnqueued()) {
                    zProcessContinuation |= processContinuation(workContinuationImpl);
                } else {
                    Logger.get().warning(TAG, String.format("Already enqueued work ids (%s).", TextUtils.join(", ", workContinuationImpl.getIds())), new Throwable[0]);
                }
            }
            z = zProcessContinuation;
        }
        return enqueueContinuation(workContinuation) | z;
    }

    private static boolean enqueueContinuation(WorkContinuationImpl workContinuation) {
        boolean zEnqueueWorkWithPrerequisites = enqueueWorkWithPrerequisites(workContinuation.getWorkManagerImpl(), workContinuation.getWork(), (String[]) WorkContinuationImpl.prerequisitesFor(workContinuation).toArray(new String[0]), workContinuation.getName(), workContinuation.getExistingWorkPolicy());
        workContinuation.markEnqueued();
        return zEnqueueWorkWithPrerequisites;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:82:0x013d A[PHI: r0 r8 r11 r12 r13
  0x013d: PHI (r0v1 java.lang.String[]) = 
  (r0v0 java.lang.String[])
  (r0v0 java.lang.String[])
  (r0v0 java.lang.String[])
  (r0v13 java.lang.String[])
  (r0v13 java.lang.String[])
 binds: [B:28:0x0061, B:29:0x0063, B:31:0x0071, B:81:0x013c, B:80:0x013a] A[DONT_GENERATE, DONT_INLINE]
  0x013d: PHI (r8v2 boolean) = (r8v1 boolean), (r8v1 boolean), (r8v1 boolean), (r8v6 boolean), (r8v7 boolean) binds: [B:28:0x0061, B:29:0x0063, B:31:0x0071, B:81:0x013c, B:80:0x013a] A[DONT_GENERATE, DONT_INLINE]
  0x013d: PHI (r11v2 boolean) = (r11v1 boolean), (r11v1 boolean), (r11v1 boolean), (r11v4 boolean), (r11v4 boolean) binds: [B:28:0x0061, B:29:0x0063, B:31:0x0071, B:81:0x013c, B:80:0x013a] A[DONT_GENERATE, DONT_INLINE]
  0x013d: PHI (r12v2 boolean) = (r12v1 boolean), (r12v1 boolean), (r12v1 boolean), (r12v5 boolean), (r12v5 boolean) binds: [B:28:0x0061, B:29:0x0063, B:31:0x0071, B:81:0x013c, B:80:0x013a] A[DONT_GENERATE, DONT_INLINE]
  0x013d: PHI (r13v2 boolean) = (r13v1 boolean), (r13v1 boolean), (r13v1 boolean), (r13v5 boolean), (r13v5 boolean) binds: [B:28:0x0061, B:29:0x0063, B:31:0x0071, B:81:0x013c, B:80:0x013a] A[DONT_GENERATE, DONT_INLINE]] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private static boolean enqueueWorkWithPrerequisites(WorkManagerImpl workManagerImpl, List<? extends WorkRequest> workList, String[] prerequisiteIds, String name, ExistingWorkPolicy existingWorkPolicy) {
        boolean z;
        boolean z2;
        boolean z3;
        boolean z4;
        String[] strArr = prerequisiteIds;
        long jCurrentTimeMillis = System.currentTimeMillis();
        WorkDatabase workDatabase = workManagerImpl.getWorkDatabase();
        boolean z5 = strArr != null && strArr.length > 0;
        if (z5) {
            z = false;
            z2 = false;
            z3 = true;
            for (String str : strArr) {
                WorkSpec workSpec = workDatabase.workSpecDao().getWorkSpec(str);
                if (workSpec == null) {
                    Logger.get().error(TAG, String.format("Prerequisite %s doesn't exist; not enqueuing", str), new Throwable[0]);
                    return false;
                }
                WorkInfo.State state = workSpec.state;
                z3 &= state == WorkInfo.State.SUCCEEDED;
                if (state == WorkInfo.State.FAILED) {
                    z2 = true;
                } else if (state == WorkInfo.State.CANCELLED) {
                    z = true;
                }
            }
        } else {
            z = false;
            z2 = false;
            z3 = true;
        }
        boolean zIsEmpty = TextUtils.isEmpty(name);
        if (zIsEmpty || z5) {
            z4 = false;
        } else {
            List<WorkSpec.IdAndState> workSpecIdAndStatesForName = workDatabase.workSpecDao().getWorkSpecIdAndStatesForName(name);
            if (!workSpecIdAndStatesForName.isEmpty()) {
                if (existingWorkPolicy == ExistingWorkPolicy.APPEND || existingWorkPolicy == ExistingWorkPolicy.APPEND_OR_REPLACE) {
                    DependencyDao dependencyDao = workDatabase.dependencyDao();
                    List arrayList = new ArrayList();
                    for (WorkSpec.IdAndState idAndState : workSpecIdAndStatesForName) {
                        if (!dependencyDao.hasDependents(idAndState.id)) {
                            boolean z6 = (idAndState.state == WorkInfo.State.SUCCEEDED) & z3;
                            if (idAndState.state == WorkInfo.State.FAILED) {
                                z2 = true;
                            } else if (idAndState.state == WorkInfo.State.CANCELLED) {
                                z = true;
                            }
                            arrayList.add(idAndState.id);
                            z3 = z6;
                        }
                    }
                    if (existingWorkPolicy == ExistingWorkPolicy.APPEND_OR_REPLACE && (z || z2)) {
                        WorkSpecDao workSpecDao = workDatabase.workSpecDao();
                        Iterator<WorkSpec.IdAndState> it = workSpecDao.getWorkSpecIdAndStatesForName(name).iterator();
                        while (it.hasNext()) {
                            workSpecDao.delete(it.next().id);
                        }
                        arrayList = Collections.emptyList();
                        z = false;
                        z2 = false;
                    }
                    strArr = (String[]) arrayList.toArray(strArr);
                    z5 = strArr.length > 0;
                    z4 = false;
                } else {
                    if (existingWorkPolicy == ExistingWorkPolicy.KEEP) {
                        for (WorkSpec.IdAndState idAndState2 : workSpecIdAndStatesForName) {
                            if (idAndState2.state == WorkInfo.State.ENQUEUED || idAndState2.state == WorkInfo.State.RUNNING) {
                                return false;
                            }
                        }
                    }
                    CancelWorkRunnable.forName(name, workManagerImpl, false).run();
                    WorkSpecDao workSpecDao2 = workDatabase.workSpecDao();
                    Iterator<WorkSpec.IdAndState> it2 = workSpecIdAndStatesForName.iterator();
                    while (it2.hasNext()) {
                        workSpecDao2.delete(it2.next().id);
                    }
                    z4 = true;
                }
            }
        }
        for (WorkRequest workRequest : workList) {
            WorkSpec workSpec2 = workRequest.getWorkSpec();
            if (!z5 || z3) {
                if (!workSpec2.isPeriodic()) {
                    workSpec2.periodStartTime = jCurrentTimeMillis;
                } else {
                    workSpec2.periodStartTime = 0L;
                }
            } else if (z2) {
                workSpec2.state = WorkInfo.State.FAILED;
            } else if (z) {
                workSpec2.state = WorkInfo.State.CANCELLED;
            } else {
                workSpec2.state = WorkInfo.State.BLOCKED;
            }
            if (Build.VERSION.SDK_INT <= 25) {
                tryDelegateConstrainedWorkSpec(workSpec2);
            }
            if (workSpec2.state == WorkInfo.State.ENQUEUED) {
                z4 = true;
            }
            workDatabase.workSpecDao().insertWorkSpec(workSpec2);
            if (z5) {
                int length = strArr.length;
                int i = 0;
                while (i < length) {
                    workDatabase.dependencyDao().insertDependency(new Dependency(workRequest.getStringId(), strArr[i]));
                    i++;
                    strArr = strArr;
                    z4 = z4;
                }
            }
            String[] strArr2 = strArr;
            boolean z7 = z4;
            Iterator<String> it3 = workRequest.getTags().iterator();
            while (it3.hasNext()) {
                workDatabase.workTagDao().insert(new WorkTag(it3.next(), workRequest.getStringId()));
            }
            if (!zIsEmpty) {
                workDatabase.workNameDao().insert(new WorkName(name, workRequest.getStringId()));
            }
            strArr = strArr2;
            z4 = z7;
        }
        return z4;
    }

    private static void tryDelegateConstrainedWorkSpec(WorkSpec workSpec) {
        Constraints constraints = workSpec.constraints;
        String str = workSpec.workerClassName;
        if (str.equals(ConstraintTrackingWorker.class.getName())) {
            return;
        }
        if (constraints.requiresBatteryNotLow() || constraints.requiresStorageNotLow()) {
            Data.Builder builder = new Data.Builder();
            builder.putAll(workSpec.input).putString(ConstraintTrackingWorker.ARGUMENT_CLASS_NAME, str);
            workSpec.workerClassName = ConstraintTrackingWorker.class.getName();
            workSpec.input = builder.build();
        }
    }

    private static boolean usesScheduler(WorkManagerImpl workManager, String className) {
        try {
            Class<?> cls = Class.forName(className);
            Iterator<Scheduler> it = workManager.getSchedulers().iterator();
            while (it.hasNext()) {
                if (cls.isAssignableFrom(it.next().getClass())) {
                    return true;
                }
            }
        } catch (ClassNotFoundException unused) {
        }
        return false;
    }
}

