package com.google.android.datatransport.runtime.scheduling.persistence;

import android.database.Cursor;
import com.google.android.datatransport.runtime.TransportContext;
import com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore;
import java.util.List;
final /* synthetic */ class SQLiteEventStore$$Lambda$15 implements SQLiteEventStore.Function {
    private final List arg$1;
    private final TransportContext arg$2;

    private SQLiteEventStore$$Lambda$15(List list, TransportContext transportContext) {
        this.arg$1 = list;
        this.arg$2 = transportContext;
    }

    public static SQLiteEventStore.Function lambdaFactory$(List list, TransportContext transportContext) {
        return new SQLiteEventStore$$Lambda$15(list, transportContext);
    }

    @Override // com.google.android.datatransport.runtime.scheduling.persistence.SQLiteEventStore.Function
    public Object apply(Object obj) {
        return SQLiteEventStore.lambda$loadEvents$12(this.arg$1, this.arg$2, (Cursor) obj);
    }
}

