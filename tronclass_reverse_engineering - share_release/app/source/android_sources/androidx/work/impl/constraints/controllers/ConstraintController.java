package androidx.work.impl.constraints.controllers;

import androidx.work.impl.constraints.ConstraintListener;
import androidx.work.impl.constraints.trackers.ConstraintTracker;
import androidx.work.impl.model.WorkSpec;
import java.util.ArrayList;
import java.util.List;
public abstract class ConstraintController<T> implements ConstraintListener<T> {
    private OnConstraintUpdatedCallback mCallback;
    private T mCurrentValue;
    private final List<String> mMatchingWorkSpecIds = new ArrayList();
    private ConstraintTracker<T> mTracker;

    public interface OnConstraintUpdatedCallback {
        void onConstraintMet(List<String> workSpecIds);

        void onConstraintNotMet(List<String> workSpecIds);
    }

    abstract boolean hasConstraint(WorkSpec workSpec);

    abstract boolean isConstrained(T currentValue);

    ConstraintController(ConstraintTracker<T> tracker) {
        this.mTracker = tracker;
    }

    public void setCallback(OnConstraintUpdatedCallback callback) {
        if (this.mCallback != callback) {
            this.mCallback = callback;
            updateCallback(callback, this.mCurrentValue);
        }
    }

    public void replace(Iterable<WorkSpec> workSpecs) {
        this.mMatchingWorkSpecIds.clear();
        for (WorkSpec workSpec : workSpecs) {
            if (hasConstraint(workSpec)) {
                this.mMatchingWorkSpecIds.add(workSpec.id);
            }
        }
        if (this.mMatchingWorkSpecIds.isEmpty()) {
            this.mTracker.removeListener(this);
        } else {
            this.mTracker.addListener(this);
        }
        updateCallback(this.mCallback, this.mCurrentValue);
    }

    public void reset() {
        if (this.mMatchingWorkSpecIds.isEmpty()) {
            return;
        }
        this.mMatchingWorkSpecIds.clear();
        this.mTracker.removeListener(this);
    }

    public boolean isWorkSpecConstrained(String workSpecId) {
        T t = this.mCurrentValue;
        return t != null && isConstrained(t) && this.mMatchingWorkSpecIds.contains(workSpecId);
    }

    private void updateCallback(OnConstraintUpdatedCallback callback, T currentValue) {
        if (this.mMatchingWorkSpecIds.isEmpty() || callback == null) {
            return;
        }
        if (currentValue == null || isConstrained(currentValue)) {
            callback.onConstraintNotMet(this.mMatchingWorkSpecIds);
        } else {
            callback.onConstraintMet(this.mMatchingWorkSpecIds);
        }
    }

    @Override // androidx.work.impl.constraints.ConstraintListener
    public void onConstraintChanged(T newValue) {
        this.mCurrentValue = newValue;
        updateCallback(this.mCallback, newValue);
    }
}

