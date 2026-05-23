package com.google.android.datatransport.runtime.scheduling.persistence;

import android.database.sqlite.SQLiteDatabase;
import com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore;
final /* synthetic */ class SQLiteEventStore$$Lambda$7 implements SQLiteEventStore.Function {
    private final String arg$1;

    private SQLiteEventStore$$Lambda$7(String str) {
        this.arg$1 = str;
    }

    public static SQLiteEventStore.Function lambdaFactory$(String str) {
        return new SQLiteEventStore$$Lambda$7(str);
    }

    @Override // com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore.Function
    public Object apply(Object obj) {
        return SQLiteEventStore.lambda$recordFailure$3(this.arg$1, (SQLiteDatabase) obj);
    }
}

