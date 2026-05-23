package com.google.android.datatransport.runtime.scheduling.persistence;

import android.database.sqlite.SQLiteDatabase;
import com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore;
final /* synthetic */ class SQLiteEventStore$$Lambda$13 implements SQLiteEventStore.Function {
    private final long arg$1;

    private SQLiteEventStore$$Lambda$13(long j) {
        this.arg$1 = j;
    }

    public static SQLiteEventStore.Function lambdaFactory$(long j) {
        return new SQLiteEventStore$$Lambda$13(j);
    }

    @Override // com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore.Function
    public Object apply(Object obj) {
        return SQLiteEventStore.lambda$cleanUp$10(this.arg$1, (SQLiteDatabase) obj);
    }
}

