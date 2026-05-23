package com.google.android.datatransport.runtime.scheduling.persistence;

import android.database.sqlite.SQLiteDatabase;
import com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore;
final /* synthetic */ class SQLiteEventStore$$Lambda$14 implements SQLiteEventStore.Function {
    private static final SQLiteEventStore$$Lambda$14 instance = new SQLiteEventStore$$Lambda$14();

    private SQLiteEventStore$$Lambda$14() {
    }

    @Override // com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore.Function
    public Object apply(Object obj) {
        return SQLiteEventStore.lambda$clearDb$11((SQLiteDatabase) obj);
    }
}

