package com.google.android.datatransport.runtime.scheduling.persistence;

import android.database.sqlite.SQLiteDatabase;
import com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore;
final /* synthetic */ class SQLiteEventStore$$Lambda$12 implements SQLiteEventStore.Function {
    private static final SQLiteEventStore$$Lambda$12 instance = new SQLiteEventStore$$Lambda$12();

    private SQLiteEventStore$$Lambda$12() {
    }

    @Override // com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore.Function
    public Object apply(Object obj) {
        return SQLiteEventStore.lambda$loadActiveContexts$9((SQLiteDatabase) obj);
    }
}

