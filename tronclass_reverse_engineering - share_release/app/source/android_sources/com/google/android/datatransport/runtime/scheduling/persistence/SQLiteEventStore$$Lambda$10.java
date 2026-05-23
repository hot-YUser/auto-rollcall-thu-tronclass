package com.google.android.datatransport.runtime.scheduling.persistence;

import android.database.sqlite.SQLiteDatabase;
import com.google.android.datatransport.runtime.TransportContext;
import com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore;
final /* synthetic */ class SQLiteEventStore$$Lambda$10 implements SQLiteEventStore.Function {
    private final long arg$1;
    private final TransportContext arg$2;

    private SQLiteEventStore$$Lambda$10(long j, TransportContext transportContext) {
        this.arg$1 = j;
        this.arg$2 = transportContext;
    }

    public static SQLiteEventStore.Function lambdaFactory$(long j, TransportContext transportContext) {
        return new SQLiteEventStore$$Lambda$10(j, transportContext);
    }

    @Override // com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore.Function
    public Object apply(Object obj) {
        return SQLiteEventStore.lambda$recordNextCallTime$6(this.arg$1, this.arg$2, (SQLiteDatabase) obj);
    }
}

