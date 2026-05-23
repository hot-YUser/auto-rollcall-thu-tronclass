package com.google.android.datatransport.runtime.scheduling.persistence;

import android.database.Cursor;
import com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore;
import java.util.Map;
final /* synthetic */ class SQLiteEventStore$$Lambda$16 implements SQLiteEventStore.Function {
    private final Map arg$1;

    private SQLiteEventStore$$Lambda$16(Map map) {
        this.arg$1 = map;
    }

    public static SQLiteEventStore.Function lambdaFactory$(Map map) {
        return new SQLiteEventStore$$Lambda$16(map);
    }

    @Override // com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore.Function
    public Object apply(Object obj) {
        return SQLiteEventStore.lambda$loadMetadata$13(this.arg$1, (Cursor) obj);
    }
}

