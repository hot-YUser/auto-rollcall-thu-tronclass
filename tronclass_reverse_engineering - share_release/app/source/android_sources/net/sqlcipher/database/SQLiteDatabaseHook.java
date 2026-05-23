package net.sqlcipher.database;
public interface SQLiteDatabaseHook {
    void postKey(SQLiteDatabase sQLiteDatabase);

    void preKey(SQLiteDatabase sQLiteDatabase);
}

