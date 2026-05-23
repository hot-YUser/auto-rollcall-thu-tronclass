package com.google.firebase.installations;

import com.google.android.gms.tasks.TaskCompletionSource;
import com.google.firebase.installations.local.PersistedInstallationEntry;
class GetIdListener implements StateListener {
    final TaskCompletionSource<String> taskCompletionSource;

    @Override // com.google.firebase.installations.StateListener
    public boolean onException(PersistedInstallationEntry persistedInstallationEntry, Exception exc) {
        return false;
    }

    public GetIdListener(TaskCompletionSource<String> taskCompletionSource) {
        this.taskCompletionSource = taskCompletionSource;
    }

    @Override // com.google.firebase.installations.StateListener
    public boolean onStateReached(PersistedInstallationEntry persistedInstallationEntry) {
        if (!persistedInstallationEntry.isUnregistered() && !persistedInstallationEntry.isRegistered() && !persistedInstallationEntry.isErrored()) {
            return false;
        }
        this.taskCompletionSource.trySetResult(persistedInstallationEntry.getFirebaseInstallationId());
        return true;
    }
}

