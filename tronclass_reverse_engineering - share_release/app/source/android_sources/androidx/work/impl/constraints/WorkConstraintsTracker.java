package androidx.work.impl.constraints;

import android.content.Context;
import androidx.work.Logger;
import androidx.work.impl.constraints.controllers.BatteryChargingController;
import androidx.work.impl.constraints.controllers.BatteryNotLowController;
import androidx.work.impl.constraints.controllers.ConstraintController;
import androidx.work.impl.constraints.controllers.NetworkConnectedController;
import androidx.work.impl.constraints.controllers.NetworkMeteredController;
import androidx.work.impl.constraints.controllers.NetworkNotRoamingController;
import androidx.work.impl.constraints.controllers.NetworkUnmeteredController;
import androidx.work.impl.constraints.controllers.StorageNotLowController;
import androidx.work.impl.model.WorkSpec;
import androidx.work.impl.utils.taskexecutor.TaskExecutor;
import java.util.ArrayList;
import java.util.List;
public class WorkConstraintsTracker implements ConstraintController.OnConstraintUpdatedCallback {
    private static final String TAG = Logger.tagWithPrefix("WorkConstraintsTracker");
    private final WorkConstraintsCallback mCallback;
    private final ConstraintController<?>[] mConstraintControllers;
    private final Object mLock;

    public WorkConstraintsTracker(Context context, TaskExecutor taskExecutor, WorkConstraintsCallback callback) {
        Context applicationContext = context.getApplicationContext();
        this.mCallback = callback;
        this.mConstraintControllers = new ConstraintController[]{new BatteryChargingController(applicationContext, taskExecutor), new BatteryNotLowController(applicationContext, taskExecutor), new StorageNotLowController(applicationContext, taskExecutor), new NetworkConnectedController(applicationContext, taskExecutor), new NetworkUnmeteredController(applicationContext, taskExecutor), new NetworkNotRoamingController(applicationContext, taskExecutor), new NetworkMeteredController(applicationContext, taskExecutor)};
        this.mLock = new Object();
    }

    WorkConstraintsTracker(WorkConstraintsCallback callback, ConstraintController<?>[] controllers) {
        this.mCallback = callback;
        this.mConstraintControllers = controllers;
        this.mLock = new Object();
    }

    public void replace(Iterable<WorkSpec> workSpecs) {
        synchronized (this.mLock) {
            for (ConstraintController<?> constraintController : this.mConstraintControllers) {
                constraintController.setCallback(null);
            }
            for (ConstraintController<?> constraintController2 : this.mConstraintControllers) {
                constraintController2.replace(workSpecs);
            }
            for (ConstraintController<?> constraintController3 : this.mConstraintControllers) {
                constraintController3.setCallback(this);
            }
        }
    }

    public void reset() {
        synchronized (this.mLock) {
            for (ConstraintController<?> constraintController : this.mConstraintControllers) {
                constraintController.reset();
            }
        }
    }

    public boolean areAllConstraintsMet(String workSpecId) {
        synchronized (this.mLock) {
            for (ConstraintController<?> constraintController : this.mConstraintControllers) {
                if (constraintController.isWorkSpecConstrained(workSpecId)) {
                    Logger.get().debug(TAG, String.format("Work %s constrained by %s", workSpecId, constraintController.getClass().getSimpleName()), new Throwable[0]);
                    return false;
                }
            }
            return true;
        }
    }

    @Override // androidx.work.impl.constraints.controllers.ConstraintController.OnConstraintUpdatedCallback
    public void onConstraintMet(List<String> workSpecIds) {
        synchronized (this.mLock) {
            ArrayList arrayList = new ArrayList();
            for (String str : workSpecIds) {
                if (areAllConstraintsMet(str)) {
                    Logger.get().debug(TAG, String.format("Constraints met for %s", str), new Throwable[0]);
                    arrayList.add(str);
                }
            }
            WorkConstraintsCallback workConstraintsCallback = this.mCallback;
            if (workConstraintsCallback != null) {
                workConstraintsCallback.onAllConstraintsMet(arrayList);
            }
        }
    }

    @Override // androidx.work.impl.constraints.controllers.ConstraintController.OnConstraintUpdatedCallback
    public void onConstraintNotMet(List<String> workSpecIds) {
        synchronized (this.mLock) {
            WorkConstraintsCallback workConstraintsCallback = this.mCallback;
            if (workConstraintsCallback != null) {
                workConstraintsCallback.onAllConstraintsNotMet(workSpecIds);
            }
        }
    }
}

