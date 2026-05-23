package com.google.android.datatransport.runtime.scheduling.persistence;

import android.database.sqlite.SQLiteDatabase;
import com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore;
final /* synthetic */ class SQLiteEventStore$$Lambda$17 implements SQLiteEventStore.Producer {
    private final SQLiteDatabase arg$1;

    private SQLiteEventStore$$Lambda$17(SQLiteDatabase sQLiteDatabase) {
        this.arg$1 = sQLiteDatabase;
    }

    public static SQLiteEventStore.Producer lambdaFactory$(SQLiteDatabase sQLiteDatabase) {
        return new SQLiteEventStore$$Lambda$17(sQLiteDatabase);
    }

    @Override // com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore.Producer
    public Object produce() {
        return SQLiteEventStore.lambda$ensureBeginTransaction$14(this.arg$1);
    }
}

