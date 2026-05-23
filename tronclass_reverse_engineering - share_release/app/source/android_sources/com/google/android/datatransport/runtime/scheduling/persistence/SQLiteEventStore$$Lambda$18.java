package com.google.android.datatransport.runtime.scheduling.persistence;

import com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore;
final /* synthetic */ class SQLiteEventStore$$Lambda$18 implements SQLiteEventStore.Function {
    private static final SQLiteEventStore$$Lambda$18 instance = new SQLiteEventStore$$Lambda$18();

    private SQLiteEventStore$$Lambda$18() {
    }

    @Override // com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore.Function
    public Object apply(Object obj) {
        return SQLiteEventStore.lambda$ensureBeginTransaction$15((Throwable) obj);
    }
}

