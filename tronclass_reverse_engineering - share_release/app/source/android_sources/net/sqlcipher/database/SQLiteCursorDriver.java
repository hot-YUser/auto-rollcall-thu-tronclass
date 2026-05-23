package net.sqlcipher.database;

import android.database.Cursor;
import net.sqlcipher.database.SQLiteDatabase;
public interface SQLiteCursorDriver {
    void cursorClosed();

    void cursorDeactivated();

    void cursorRequeried(Cursor cursor);

    net.sqlcipher.Cursor query(SQLiteDatabase.CursorFactory cursorFactory, String[] strArr);

    void setBindArguments(String[] strArr);
}

