package androidx.work.impl.constraints.trackers;

import android.content.Context;
import androidx.work.Logger;
import androidx.work.impl.constraints.ConstraintListener;
import androidx.work.impl.utils.taskexecutor.TaskExecutor;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;
public abstract class ConstraintTracker<T> {
    private static final String TAG = Logger.tagWithPrefix("ConstraintTracker");
    protected final Context mAppContext;
    T mCurrentState;
    protected final TaskExecutor mTaskExecutor;
    private final Object mLock = new Object();
    private final Set<ConstraintListener<T>> mListeners = new LinkedHashSet();

    public abstract T getInitialState();

    public abstract void startTracking();

    public abstract void stopTracking();

    ConstraintTracker(Context context, TaskExecutor taskExecutor) {
        this.mAppContext = context.getApplicationContext();
        this.mTaskExecutor = taskExecutor;
    }

    public void addListener(ConstraintListener<T> listener) {
        synchronized (this.mLock) {
            if (this.mListeners.add(listener)) {
                if (this.mListeners.size() == 1) {
                    this.mCurrentState = getInitialState();
                    Logger.get().debug(TAG, String.format("%s: initial state = %s", getClass().getSimpleName(), this.mCurrentState), new Throwable[0]);
                    startTracking();
                }
                listener.onConstraintChanged(this.mCurrentState);
            }
        }
    }

    public void removeListener(ConstraintListener<T> listener) {
        synchronized (this.mLock) {
            if (this.mListeners.remove(listener) && this.mListeners.isEmpty()) {
                stopTracking();
            }
        }
    }

    public void setState(T newState) {
        synchronized (this.mLock) {
            T t = this.mCurrentState;
            if (t != newState && (t == null || !t.equals(newState))) {
                this.mCurrentState = newState;
                final ArrayList arrayList = new ArrayList(this.mListeners);
                this.mTaskExecutor.getMainThreadExecutor().execute(new Runnable() { // from class: androidx.work.impl.constraints.trackers.ConstraintTracker.1
                    @Override // java.lang.Runnable
                    public void run() {
                        Iterator it = arrayList.iterator();
                        while (it.hasNext()) {
                            ((ConstraintListener) it.next()).onConstraintChanged(ConstraintTracker.this.mCurrentState);
                        }
                    }
                });
            }
        }
    }
}

