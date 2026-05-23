package androidx.work.impl;
public interface ExecutionListener {
    void onExecuted(String workSpecId, boolean needsReschedule);
}

