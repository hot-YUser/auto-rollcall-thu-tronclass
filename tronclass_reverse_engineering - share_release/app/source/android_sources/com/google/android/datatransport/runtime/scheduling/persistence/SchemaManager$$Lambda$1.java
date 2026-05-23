package com.google.android.datatransport.runtime.scheduling.persistence;

import android.database.sqlite.SQLiteDatabase;
import com.google.android.datatransport.runtime.scheduling.persistence.SchemaManager;
final /* synthetic */ class SchemaManager$$Lambda$1 implements SchemaManager.Migration {
    private static final SchemaManager$$Lambda$1 instance = new SchemaManager$$Lambda$1();

    private SchemaManager$$Lambda$1() {
    }

    @Override // com.google.android.datatransport.runtime.scheduling.persistence.SchemaManager.Migration
    public void upgrade(SQLiteDatabase sQLiteDatabase) {
        SchemaManager.lambda$static$0(sQLiteDatabase);
    }
}

