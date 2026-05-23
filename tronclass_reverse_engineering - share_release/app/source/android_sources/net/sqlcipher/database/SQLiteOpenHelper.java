package net.sqlcipher.database;

import android.content.Context;
import android.util.Log;
import java.io.File;
import net.sqlcipher.DatabaseErrorHandler;
import net.sqlcipher.DefaultDatabaseErrorHandler;
import net.sqlcipher.database.SQLiteDatabase;
public abstract class SQLiteOpenHelper {
    private static final String TAG = "SQLiteOpenHelper";
    private final Context mContext;
    private SQLiteDatabase mDatabase;
    private boolean mDeferSetWriteAheadLoggingEnabled;
    private boolean mEnableWriteAheadLogging;
    private final DatabaseErrorHandler mErrorHandler;
    private final SQLiteDatabase.CursorFactory mFactory;
    private final SQLiteDatabaseHook mHook;
    private boolean mIsInitializing;
    private final String mName;
    private final int mNewVersion;

    public void onConfigure(SQLiteDatabase sQLiteDatabase) {
    }

    public abstract void onCreate(SQLiteDatabase sQLiteDatabase);

    public void onOpen(SQLiteDatabase sQLiteDatabase) {
    }

    public abstract void onUpgrade(SQLiteDatabase sQLiteDatabase, int i, int i2);

    public SQLiteOpenHelper(Context context, String str, SQLiteDatabase.CursorFactory cursorFactory, int i) {
        this(context, str, cursorFactory, i, null, new DefaultDatabaseErrorHandler());
    }

    public SQLiteOpenHelper(Context context, String str, SQLiteDatabase.CursorFactory cursorFactory, int i, SQLiteDatabaseHook sQLiteDatabaseHook) {
        this(context, str, cursorFactory, i, sQLiteDatabaseHook, new DefaultDatabaseErrorHandler());
    }

    public SQLiteOpenHelper(Context context, String str, SQLiteDatabase.CursorFactory cursorFactory, int i, SQLiteDatabaseHook sQLiteDatabaseHook, DatabaseErrorHandler databaseErrorHandler) {
        this.mDatabase = null;
        this.mIsInitializing = false;
        if (i < 1) {
            throw new IllegalArgumentException("Version must be >= 1, was " + i);
        }
        if (databaseErrorHandler == null) {
            throw new IllegalArgumentException("DatabaseErrorHandler param value can't be null.");
        }
        this.mContext = context;
        this.mName = str;
        this.mFactory = cursorFactory;
        this.mNewVersion = i;
        this.mHook = sQLiteDatabaseHook;
        this.mErrorHandler = databaseErrorHandler;
    }

    public synchronized SQLiteDatabase getWritableDatabase(String str) {
        return getWritableDatabase(str == null ? null : str.toCharArray());
    }

    public synchronized SQLiteDatabase getWritableDatabase(char[] cArr) {
        return getWritableDatabase(cArr == null ? null : SQLiteDatabase.getBytes(cArr));
    }

    public synchronized SQLiteDatabase getWritableDatabase(byte[] bArr) {
        SQLiteDatabase sQLiteDatabaseOpenOrCreateDatabase;
        SQLiteDatabase sQLiteDatabase = this.mDatabase;
        if (sQLiteDatabase != null && sQLiteDatabase.isOpen() && !this.mDatabase.isReadOnly()) {
            return this.mDatabase;
        }
        if (this.mIsInitializing) {
            throw new IllegalStateException("getWritableDatabase called recursively");
        }
        SQLiteDatabase sQLiteDatabase2 = this.mDatabase;
        if (sQLiteDatabase2 != null) {
            sQLiteDatabase2.lock();
        }
        SQLiteDatabase sQLiteDatabase3 = null;
        try {
            this.mIsInitializing = true;
            String str = this.mName;
            if (str == null) {
                sQLiteDatabaseOpenOrCreateDatabase = SQLiteDatabase.create((SQLiteDatabase.CursorFactory) null, "");
            } else {
                String path = this.mContext.getDatabasePath(str).getPath();
                File file = new File(path);
                if (!file.exists()) {
                    file.getParentFile().mkdirs();
                }
                sQLiteDatabaseOpenOrCreateDatabase = SQLiteDatabase.openOrCreateDatabase(path, bArr, this.mFactory, this.mHook, this.mErrorHandler);
            }
            sQLiteDatabase3 = sQLiteDatabaseOpenOrCreateDatabase;
            if (this.mDeferSetWriteAheadLoggingEnabled) {
                this.mEnableWriteAheadLogging = sQLiteDatabase3.enableWriteAheadLogging();
            }
            onConfigure(sQLiteDatabase3);
            int version = sQLiteDatabase3.getVersion();
            if (version != this.mNewVersion) {
                sQLiteDatabase3.beginTransaction();
                try {
                    if (version == 0) {
                        onCreate(sQLiteDatabase3);
                    } else {
                        int i = this.mNewVersion;
                        if (version > i) {
                            onDowngrade(sQLiteDatabase3, version, i);
                        } else {
                            onUpgrade(sQLiteDatabase3, version, i);
                        }
                    }
                    sQLiteDatabase3.setVersion(this.mNewVersion);
                    sQLiteDatabase3.setTransactionSuccessful();
                    sQLiteDatabase3.endTransaction();
                } catch (Throwable th) {
                    sQLiteDatabase3.endTransaction();
                    throw th;
                }
            }
            onOpen(sQLiteDatabase3);
            this.mIsInitializing = false;
            SQLiteDatabase sQLiteDatabase4 = this.mDatabase;
            if (sQLiteDatabase4 != null) {
                try {
                    sQLiteDatabase4.close();
                } catch (Exception unused) {
                }
                this.mDatabase.unlock();
            }
            this.mDatabase = sQLiteDatabase3;
            return sQLiteDatabase3;
        } catch (Throwable th2) {
            this.mIsInitializing = false;
            SQLiteDatabase sQLiteDatabase5 = this.mDatabase;
            if (sQLiteDatabase5 != null) {
                sQLiteDatabase5.unlock();
            }
            if (sQLiteDatabase3 != null) {
                sQLiteDatabase3.close();
            }
            throw th2;
        }
    }

    public synchronized SQLiteDatabase getReadableDatabase(String str) {
        return getReadableDatabase(str == null ? null : str.toCharArray());
    }

    public synchronized SQLiteDatabase getReadableDatabase(char[] cArr) {
        return getReadableDatabase(cArr == null ? null : SQLiteDatabase.getBytes(cArr));
    }

    public synchronized SQLiteDatabase getReadableDatabase(byte[] bArr) {
        SQLiteDatabase sQLiteDatabase = this.mDatabase;
        if (sQLiteDatabase != null && sQLiteDatabase.isOpen()) {
            return this.mDatabase;
        }
        if (this.mIsInitializing) {
            throw new IllegalStateException("getReadableDatabase called recursively");
        }
        try {
            return getWritableDatabase(bArr);
        } catch (SQLiteException e) {
            if (this.mName == null) {
                throw e;
            }
            String str = TAG;
            Log.e(str, "Couldn't open " + this.mName + " for writing (will try read-only):", e);
            AutoCloseable autoCloseable = null;
            try {
                this.mIsInitializing = true;
                String path = this.mContext.getDatabasePath(this.mName).getPath();
                File file = new File(path);
                File file2 = new File(this.mContext.getDatabasePath(this.mName).getParent());
                if (!file2.exists()) {
                    file2.mkdirs();
                }
                if (!file.exists()) {
                    this.mIsInitializing = false;
                    SQLiteDatabase writableDatabase = getWritableDatabase(bArr);
                    this.mIsInitializing = true;
                    writableDatabase.close();
                }
                SQLiteDatabase sQLiteDatabaseOpenDatabase = SQLiteDatabase.openDatabase(path, bArr, this.mFactory, 1, this.mHook, this.mErrorHandler);
                if (sQLiteDatabaseOpenDatabase.getVersion() != this.mNewVersion) {
                    throw new SQLiteException("Can't upgrade read-only database from version " + sQLiteDatabaseOpenDatabase.getVersion() + " to " + this.mNewVersion + ": " + path);
                }
                onOpen(sQLiteDatabaseOpenDatabase);
                Log.w(str, "Opened " + this.mName + " in read-only mode");
                this.mDatabase = sQLiteDatabaseOpenDatabase;
                this.mIsInitializing = false;
                return sQLiteDatabaseOpenDatabase;
            } catch (Throwable th) {
                this.mIsInitializing = false;
                if (0 != 0 && null != this.mDatabase) {
                    autoCloseable.close();
                }
                throw th;
            }
        }
    }

    public synchronized void close() {
        if (this.mIsInitializing) {
            throw new IllegalStateException("Closed during initialization");
        }
        SQLiteDatabase sQLiteDatabase = this.mDatabase;
        if (sQLiteDatabase != null && sQLiteDatabase.isOpen()) {
            this.mDatabase.close();
            this.mDatabase = null;
        }
    }

    public String getDatabaseName() {
        return this.mName;
    }

    public void setWriteAheadLoggingEnabled(boolean z) {
        synchronized (this) {
            if (this.mEnableWriteAheadLogging != z) {
                SQLiteDatabase sQLiteDatabase = this.mDatabase;
                if (sQLiteDatabase != null && sQLiteDatabase.isOpen() && !this.mDatabase.isReadOnly()) {
                    if (z) {
                        this.mDatabase.enableWriteAheadLogging();
                    } else {
                        this.mDatabase.disableWriteAheadLogging();
                    }
                    this.mEnableWriteAheadLogging = z;
                } else {
                    this.mDeferSetWriteAheadLoggingEnabled = z;
                }
            }
        }
    }

    public void onDowngrade(SQLiteDatabase sQLiteDatabase, int i, int i2) {
        throw new SQLiteException("Can't downgrade database from version " + i + " to " + i2);
    }
}

