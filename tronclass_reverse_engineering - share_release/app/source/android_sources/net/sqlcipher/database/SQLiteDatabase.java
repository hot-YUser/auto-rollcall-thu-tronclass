package net.sqlcipher.database;

import android.content.ContentValues;
import android.content.Context;
import android.os.CancellationSignal;
import android.os.Debug;
import android.os.SystemClock;
import android.text.TextUtils;
import android.util.Log;
import android.util.Pair;
import androidx.room.FtsOptions;
import androidx.sqlite.db.SupportSQLiteDatabase;
import androidx.sqlite.db.SupportSQLiteQuery;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.charset.Charset;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.WeakHashMap;
import java.util.concurrent.locks.ReentrantLock;
import java.util.regex.Pattern;
import java.util.zip.ZipInputStream;
import net.sqlcipher.CrossProcessCursorWrapper;
import net.sqlcipher.Cursor;
import net.sqlcipher.CursorWrapper;
import net.sqlcipher.DatabaseErrorHandler;
import net.sqlcipher.DatabaseUtils;
import net.sqlcipher.DefaultDatabaseErrorHandler;
import net.sqlcipher.SQLException;
import net.sqlcipher.database.SQLiteDebug;
public class SQLiteDatabase extends SQLiteClosable implements SupportSQLiteDatabase {
    private static final String COMMIT_SQL = "COMMIT;";
    public static final int CONFLICT_ABORT = 2;
    public static final int CONFLICT_FAIL = 3;
    public static final int CONFLICT_IGNORE = 4;
    public static final int CONFLICT_NONE = 0;
    public static final int CONFLICT_REPLACE = 5;
    public static final int CONFLICT_ROLLBACK = 1;
    public static final int CREATE_IF_NECESSARY = 268435456;
    private static final int EVENT_DB_CORRUPT = 75004;
    private static final int EVENT_DB_OPERATION = 52000;
    static final String GET_LOCK_LOG_PREFIX = "GETLOCK:";
    private static final String KEY_ENCODING = "UTF-8";
    private static final int LOCK_ACQUIRED_WARNING_THREAD_TIME_IN_MS = 100;
    private static final int LOCK_ACQUIRED_WARNING_TIME_IN_MS = 300;
    private static final int LOCK_ACQUIRED_WARNING_TIME_IN_MS_ALWAYS_PRINT = 2000;
    private static final int LOCK_WARNING_WINDOW_IN_MS = 20000;
    private static final String LOG_SLOW_QUERIES_PROPERTY = "db.log.slow_query_threshold";
    public static final int MAX_SQL_CACHE_SIZE = 250;
    private static final int MAX_WARNINGS_ON_CACHESIZE_CONDITION = 1;
    public static final String MEMORY = ":memory:";
    public static final int NO_LOCALIZED_COLLATORS = 16;
    public static final int OPEN_READONLY = 1;
    public static final int OPEN_READWRITE = 0;
    private static final int OPEN_READ_MASK = 1;
    private static final int QUERY_LOG_SQL_LENGTH = 64;
    private static final int SLEEP_AFTER_YIELD_QUANTUM = 1000;
    public static final String SQLCIPHER_ANDROID_VERSION = "4.4.0";
    public static final int SQLITE_MAX_LIKE_PATTERN_LENGTH = 50000;
    private static final String TAG = "Database";
    private int mCacheFullWarnings;
    Map<String, SQLiteCompiledSql> mCompiledQueries;
    private final DatabaseErrorHandler mErrorHandler;
    private CursorFactory mFactory;
    private int mFlags;
    private boolean mInnerTransactionIsSuccessful;
    private long mLastLockMessageTime;
    private String mLastSqlStatement;
    private final ReentrantLock mLock;
    private long mLockAcquiredThreadTime;
    private long mLockAcquiredWallTime;
    private boolean mLockingEnabled;
    private int mMaxSqlCacheSize;
    long mNativeHandle;
    private int mNumCacheHits;
    private int mNumCacheMisses;
    private String mPath;
    private String mPathForLogs;
    private WeakHashMap<SQLiteClosable, Object> mPrograms;
    private final int mSlowQueryThreshold;
    private Throwable mStackTrace;
    private final Map<String, SyncUpdateInfo> mSyncUpdateInfo;
    int mTempTableSequence;
    private String mTimeClosed;
    private String mTimeOpened;
    private boolean mTransactionIsSuccessful;
    private SQLiteTransactionListener mTransactionListener;
    private static WeakHashMap<SQLiteDatabase, Object> sActiveDatabases = new WeakHashMap<>();
    private static final String[] CONFLICT_VALUES = {"", " OR ROLLBACK ", " OR ABORT ", " OR FAIL ", " OR IGNORE ", " OR REPLACE "};
    private static final Pattern EMAIL_IN_DB_PATTERN = Pattern.compile("[\\w\\.\\-]+@[\\w\\.\\-]+");
    private static int sQueryLogTimeInMillis = 0;

    public interface CursorFactory {
        Cursor newCursor(SQLiteDatabase sQLiteDatabase, SQLiteCursorDriver sQLiteCursorDriver, String str, SQLiteQuery sQLiteQuery);
    }

    public interface LibraryLoader {
        void loadLibraries(String... strArr);
    }

    private enum SQLiteDatabaseTransactionType {
        Deferred,
        Immediate,
        Exclusive
    }

    private native void dbclose();

    private native void dbopen(String str, int i);

    private native void enableSqlProfiling(String str);

    private native void enableSqlTracing(String str);
    public native void key(byte[] bArr) throws SQLException;
    public native void key_mutf8(char[] cArr) throws SQLException;

    private native int native_getDbLookaside();

    private native void native_rawExecSQL(String str);

    private native int native_status(int i, boolean z);

    private native void rekey(byte[] bArr) throws SQLException;

    public static native int releaseMemory();

    public static native void setICURoot(String str);

    native int lastChangeCount();

    native long lastInsertRow();

    native void native_execSQL(String str) throws SQLException;

    native void native_setLocale(String str, int i);

    public int status(int i, boolean z) {
        return native_status(i, z);
    }

    public void changePassword(String str) throws SQLiteException {
        if (!isOpen()) {
            throw new SQLiteException("database not open");
        }
        if (str != null) {
            byte[] bytes = getBytes(str.toCharArray());
            rekey(bytes);
            Arrays.fill(bytes, (byte) 0);
        }
    }

    public void changePassword(char[] cArr) throws SQLiteException {
        if (!isOpen()) {
            throw new SQLiteException("database not open");
        }
        if (cArr != null) {
            byte[] bytes = getBytes(cArr);
            rekey(bytes);
            Arrays.fill(bytes, (byte) 0);
        }
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Type inference failed for: r1v2 */
    /* high-level source view WARN: Type inference failed for: r1v3 */
    /* high-level source view WARN: Type inference failed for: r1v4, types: [java.util.zip.ZipInputStream] */
    /* high-level source view WARN: Type inference failed for: r1v7 */
    private static void loadICUData(Context context, File file) throws Throwable {
        FileOutputStream fileOutputStream;
        FileOutputStream fileOutputStream2;
        File file2 = new File(file, FtsOptions.TOKENIZER_ICU);
        File file3 = new File(file2, "icudt46l.dat");
        ?? r1 = 0;
        ZipInputStream zipInputStream = null;
        try {
            try {
                if (!file2.exists()) {
                    file2.mkdirs();
                }
                if (file3.exists()) {
                    fileOutputStream2 = null;
                } else {
                    ZipInputStream zipInputStream2 = new ZipInputStream(context.getAssets().open("icudt46l.zip"));
                    try {
                        zipInputStream2.getNextEntry();
                        fileOutputStream2 = new FileOutputStream(file3);
                    } catch (Exception e) {
                        e = e;
                    }
                    try {
                        byte[] bArr = new byte[1024];
                        while (true) {
                            int i = zipInputStream2.read(bArr);
                            if (i <= 0) {
                                break;
                            } else {
                                fileOutputStream2.write(bArr, 0, i);
                            }
                        }
                        zipInputStream = zipInputStream2;
                    } catch (Exception e2) {
                        e = e2;
                        if (file3.exists()) {
                            file3.delete();
                        }
                        throw new RuntimeException(e);
                    } catch (Throwable th) {
                        r1 = zipInputStream2;
                        fileOutputStream = fileOutputStream2;
                        th = th;
                        if (r1 != 0) {
                            try {
                                r1.close();
                            } catch (IOException e3) {
                                throw new RuntimeException(e3);
                            }
                        }
                        if (fileOutputStream != null) {
                            fileOutputStream.flush();
                            fileOutputStream.close();
                        }
                        throw th;
                    }
                }
                if (zipInputStream != null) {
                    try {
                        zipInputStream.close();
                    } catch (IOException e4) {
                        throw new RuntimeException(e4);
                    }
                }
                if (fileOutputStream2 != null) {
                    fileOutputStream2.flush();
                    fileOutputStream2.close();
                }
            } catch (Throwable th2) {
                th = th2;
                fileOutputStream = null;
                r1 = file2;
            }
        } catch (Exception e5) {
            e = e5;
        } catch (Throwable th3) {
            th = th3;
            fileOutputStream = null;
        }
    }

    public static synchronized void loadLibs(Context context) {
        loadLibs(context, context.getFilesDir());
    }

    public static synchronized void loadLibs(Context context, File file) {
        loadLibs(context, file, new LibraryLoader() { // from class: net.sqlcipher.database.SQLiteDatabase.1
            @Override // net.sqlcipher.database.SQLiteDatabase.LibraryLoader
            public void loadLibraries(String... strArr) {
                for (String str : strArr) {
                    System.loadLibrary(str);
                }
            }
        });
    }

    public static synchronized void loadLibs(Context context, LibraryLoader libraryLoader) {
        loadLibs(context, context.getFilesDir(), libraryLoader);
    }

    public static synchronized void loadLibs(Context context, File file, LibraryLoader libraryLoader) {
        libraryLoader.loadLibraries("sqlcipher");
    }

    void addSQLiteClosable(SQLiteClosable sQLiteClosable) {
        lock();
        try {
            this.mPrograms.put(sQLiteClosable, null);
        } finally {
            unlock();
        }
    }

    void removeSQLiteClosable(SQLiteClosable sQLiteClosable) {
        lock();
        try {
            this.mPrograms.remove(sQLiteClosable);
        } finally {
            unlock();
        }
    }

    @Override // net.sqlcipher.database.SQLiteClosable
    protected void onAllReferencesReleased() {
        if (isOpen()) {
            if (SQLiteDebug.DEBUG_SQL_CACHE) {
                this.mTimeClosed = getTime();
            }
            dbclose();
            synchronized (sActiveDatabases) {
                sActiveDatabases.remove(this);
            }
        }
    }

    public void setLockingEnabled(boolean z) {
        this.mLockingEnabled = z;
    }

    void onCorruption() {
        this.mErrorHandler.onCorruption(this);
    }

    void lock() {
        if (this.mLockingEnabled) {
            this.mLock.lock();
            if (SQLiteDebug.DEBUG_LOCK_TIME_TRACKING && this.mLock.getHoldCount() == 1) {
                this.mLockAcquiredWallTime = SystemClock.elapsedRealtime();
                this.mLockAcquiredThreadTime = Debug.threadCpuTimeNanos();
            }
        }
    }

    private void lockForced() {
        this.mLock.lock();
        if (SQLiteDebug.DEBUG_LOCK_TIME_TRACKING && this.mLock.getHoldCount() == 1) {
            this.mLockAcquiredWallTime = SystemClock.elapsedRealtime();
            this.mLockAcquiredThreadTime = Debug.threadCpuTimeNanos();
        }
    }

    void unlock() {
        if (this.mLockingEnabled) {
            if (SQLiteDebug.DEBUG_LOCK_TIME_TRACKING && this.mLock.getHoldCount() == 1) {
                checkLockHoldTime();
            }
            this.mLock.unlock();
        }
    }

    private void unlockForced() {
        if (SQLiteDebug.DEBUG_LOCK_TIME_TRACKING && this.mLock.getHoldCount() == 1) {
            checkLockHoldTime();
        }
        this.mLock.unlock();
    }

    private void checkLockHoldTime() {
        long jElapsedRealtime = SystemClock.elapsedRealtime();
        long j = jElapsedRealtime - this.mLockAcquiredWallTime;
        if ((j >= 2000 || Log.isLoggable(TAG, 2) || jElapsedRealtime - this.mLastLockMessageTime >= 20000) && j > 300) {
            int iThreadCpuTimeNanos = (int) ((Debug.threadCpuTimeNanos() - this.mLockAcquiredThreadTime) / 1000000);
            if (iThreadCpuTimeNanos > 100 || j > 2000) {
                this.mLastLockMessageTime = jElapsedRealtime;
                String str = "lock held on " + this.mPath + " for " + j + "ms. Thread time was " + iThreadCpuTimeNanos + "ms";
                boolean z = SQLiteDebug.DEBUG_LOCK_TIME_TRACKING_STACK_TRACE;
            }
        }
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public boolean isDatabaseIntegrityOk() {
        Pair<Boolean, String> resultFromPragma = getResultFromPragma("PRAGMA integrity_check;");
        return ((Boolean) resultFromPragma.first).booleanValue() ? ((String) resultFromPragma.second).equals("ok") : ((Boolean) resultFromPragma.first).booleanValue();
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public List<Pair<String, String>> getAttachedDbs() {
        return getAttachedDbs(this);
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public boolean enableWriteAheadLogging() {
        if (inTransaction()) {
            throw new IllegalStateException("Write Ahead Logging cannot be enabled while in a transaction");
        }
        ArrayList<Pair<String, String>> attachedDbs = getAttachedDbs(this);
        if ((attachedDbs != null && attachedDbs.size() > 1) || isReadOnly() || getPath().equals(MEMORY)) {
            return false;
        }
        rawExecSQL("PRAGMA journal_mode = WAL;");
        return true;
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void disableWriteAheadLogging() {
        if (inTransaction()) {
            throw new IllegalStateException("Write Ahead Logging cannot be disabled while in a transaction");
        }
        rawExecSQL("PRAGMA journal_mode = DELETE;");
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public boolean isWriteAheadLoggingEnabled() {
        Pair<Boolean, String> resultFromPragma = getResultFromPragma("PRAGMA journal_mode;");
        return ((Boolean) resultFromPragma.first).booleanValue() ? ((String) resultFromPragma.second).equals("wal") : ((Boolean) resultFromPragma.first).booleanValue();
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void setForeignKeyConstraintsEnabled(boolean z) {
        if (inTransaction()) {
            throw new IllegalStateException("Foreign key constraints may not be changed while in a transaction");
        }
        execSQL(String.format("PRAGMA foreign_keys = %s;", z ? "ON" : "OFF"));
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void beginTransaction() {
        beginTransactionWithListener((SQLiteTransactionListener) null);
    }

    public void beginTransactionWithListener(SQLiteTransactionListener sQLiteTransactionListener) {
        beginTransactionWithListenerInternal(sQLiteTransactionListener, SQLiteDatabaseTransactionType.Exclusive);
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void beginTransactionNonExclusive() {
        beginTransactionWithListenerInternal(null, SQLiteDatabaseTransactionType.Immediate);
    }

    public void beginTransactionWithListenerNonExclusive(SQLiteTransactionListener sQLiteTransactionListener) {
        beginTransactionWithListenerInternal(sQLiteTransactionListener, SQLiteDatabaseTransactionType.Immediate);
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void endTransaction() {
        if (!isOpen()) {
            throw new IllegalStateException("database not open");
        }
        if (!this.mLock.isHeldByCurrentThread()) {
            throw new IllegalStateException("no transaction pending");
        }
        try {
            if (this.mInnerTransactionIsSuccessful) {
                this.mInnerTransactionIsSuccessful = false;
            } else {
                this.mTransactionIsSuccessful = false;
            }
            if (this.mLock.getHoldCount() != 1) {
                return;
            }
            SQLiteTransactionListener sQLiteTransactionListener = this.mTransactionListener;
            if (sQLiteTransactionListener != null) {
                try {
                    if (this.mTransactionIsSuccessful) {
                        sQLiteTransactionListener.onCommit();
                    } else {
                        sQLiteTransactionListener.onRollback();
                    }
                    e = null;
                } catch (RuntimeException e) {
                    e = e;
                    this.mTransactionIsSuccessful = false;
                }
            } else {
                e = null;
            }
            if (this.mTransactionIsSuccessful) {
                execSQL(COMMIT_SQL);
            } else {
                try {
                    execSQL("ROLLBACK;");
                    if (e != null) {
                        throw e;
                    }
                } catch (SQLException unused) {
                }
            }
        } finally {
            this.mTransactionListener = null;
            unlockForced();
        }
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void setTransactionSuccessful() {
        if (!isOpen()) {
            throw new IllegalStateException("database not open");
        }
        if (!this.mLock.isHeldByCurrentThread()) {
            throw new IllegalStateException("no transaction pending");
        }
        if (this.mInnerTransactionIsSuccessful) {
            throw new IllegalStateException("setTransactionSuccessful may only be called once per call to beginTransaction");
        }
        this.mInnerTransactionIsSuccessful = true;
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public boolean inTransaction() {
        return this.mLock.getHoldCount() > 0;
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public boolean isDbLockedByCurrentThread() {
        return this.mLock.isHeldByCurrentThread();
    }

    public boolean isDbLockedByOtherThreads() {
        return !this.mLock.isHeldByCurrentThread() && this.mLock.isLocked();
    }

    @Deprecated
    public boolean yieldIfContended() {
        if (isOpen()) {
            return yieldIfContendedHelper(false, -1L);
        }
        return false;
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public boolean yieldIfContendedSafely() {
        if (isOpen()) {
            return yieldIfContendedHelper(true, -1L);
        }
        return false;
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public boolean yieldIfContendedSafely(long j) {
        if (isOpen()) {
            return yieldIfContendedHelper(true, j);
        }
        return false;
    }

    private boolean yieldIfContendedHelper(boolean z, long j) {
        if (this.mLock.getQueueLength() == 0) {
            this.mLockAcquiredWallTime = SystemClock.elapsedRealtime();
            this.mLockAcquiredThreadTime = Debug.threadCpuTimeNanos();
            return false;
        }
        setTransactionSuccessful();
        SQLiteTransactionListener sQLiteTransactionListener = this.mTransactionListener;
        endTransaction();
        if (z && isDbLockedByCurrentThread()) {
            throw new IllegalStateException("Db locked more than once. yielfIfContended cannot yield");
        }
        if (j > 0) {
            while (j > 0) {
                try {
                    Thread.sleep(j < 1000 ? j : 1000L);
                } catch (InterruptedException unused) {
                    Thread.interrupted();
                }
                j -= 1000;
                if (this.mLock.getQueueLength() == 0) {
                    break;
                }
            }
        }
        beginTransactionWithListener(sQLiteTransactionListener);
        return true;
    }

    public Map<String, String> getSyncedTables() {
        HashMap map;
        synchronized (this.mSyncUpdateInfo) {
            map = new HashMap();
            for (String str : this.mSyncUpdateInfo.keySet()) {
                SyncUpdateInfo syncUpdateInfo = this.mSyncUpdateInfo.get(str);
                if (syncUpdateInfo.deletedTable != null) {
                    map.put(str, syncUpdateInfo.deletedTable);
                }
            }
        }
        return map;
    }

    private static class SyncUpdateInfo {
        String deletedTable;
        String foreignKey;
        String masterTable;

        SyncUpdateInfo(String str, String str2, String str3) {
            this.masterTable = str;
            this.deletedTable = str2;
            this.foreignKey = str3;
        }
    }

    public static SQLiteDatabase openDatabase(String str, String str2, CursorFactory cursorFactory, int i) {
        return openDatabase(str, str2, cursorFactory, i, (SQLiteDatabaseHook) null);
    }

    public static SQLiteDatabase openDatabase(String str, char[] cArr, CursorFactory cursorFactory, int i) {
        return openDatabase(str, cArr, cursorFactory, i, (SQLiteDatabaseHook) null, (DatabaseErrorHandler) null);
    }

    public static SQLiteDatabase openDatabase(String str, String str2, CursorFactory cursorFactory, int i, SQLiteDatabaseHook sQLiteDatabaseHook) {
        return openDatabase(str, str2, cursorFactory, i, sQLiteDatabaseHook, (DatabaseErrorHandler) null);
    }

    public static SQLiteDatabase openDatabase(String str, char[] cArr, CursorFactory cursorFactory, int i, SQLiteDatabaseHook sQLiteDatabaseHook) {
        return openDatabase(str, cArr, cursorFactory, i, sQLiteDatabaseHook, (DatabaseErrorHandler) null);
    }

    public static SQLiteDatabase openDatabase(String str, String str2, CursorFactory cursorFactory, int i, SQLiteDatabaseHook sQLiteDatabaseHook, DatabaseErrorHandler databaseErrorHandler) {
        return openDatabase(str, str2 == null ? null : str2.toCharArray(), cursorFactory, i, sQLiteDatabaseHook, databaseErrorHandler);
    }

    public static SQLiteDatabase openDatabase(String str, char[] cArr, CursorFactory cursorFactory, int i, SQLiteDatabaseHook sQLiteDatabaseHook, DatabaseErrorHandler databaseErrorHandler) {
        return openDatabase(str, getBytes(cArr), cursorFactory, i, sQLiteDatabaseHook, databaseErrorHandler);
    }

    public static SQLiteDatabase openDatabase(String str, byte[] bArr, CursorFactory cursorFactory, int i, SQLiteDatabaseHook sQLiteDatabaseHook, DatabaseErrorHandler databaseErrorHandler) {
        SQLiteDatabase sQLiteDatabase;
        if (databaseErrorHandler == null) {
            databaseErrorHandler = new DefaultDatabaseErrorHandler();
        }
        try {
            sQLiteDatabase = new SQLiteDatabase(str, cursorFactory, i, databaseErrorHandler);
        } catch (SQLiteDatabaseCorruptException unused) {
            sQLiteDatabase = null;
        }
        try {
            sQLiteDatabase.openDatabaseInternal(bArr, sQLiteDatabaseHook);
        } catch (SQLiteDatabaseCorruptException unused2) {
            databaseErrorHandler.onCorruption(sQLiteDatabase);
            sQLiteDatabase = new SQLiteDatabase(str, cursorFactory, i, databaseErrorHandler);
            sQLiteDatabase.openDatabaseInternal(bArr, sQLiteDatabaseHook);
        }
        if (SQLiteDebug.DEBUG_SQL_STATEMENTS) {
            sQLiteDatabase.enableSqlTracing(str);
        }
        if (SQLiteDebug.DEBUG_SQL_TIME) {
            sQLiteDatabase.enableSqlProfiling(str);
        }
        synchronized (sActiveDatabases) {
            sActiveDatabases.put(sQLiteDatabase, null);
        }
        return sQLiteDatabase;
    }

    public static SQLiteDatabase openOrCreateDatabase(File file, String str, CursorFactory cursorFactory, SQLiteDatabaseHook sQLiteDatabaseHook) {
        return openOrCreateDatabase(file, str, cursorFactory, sQLiteDatabaseHook, (DatabaseErrorHandler) null);
    }

    public static SQLiteDatabase openOrCreateDatabase(File file, String str, CursorFactory cursorFactory, SQLiteDatabaseHook sQLiteDatabaseHook, DatabaseErrorHandler databaseErrorHandler) {
        return openOrCreateDatabase(file == null ? null : file.getPath(), str, cursorFactory, sQLiteDatabaseHook, databaseErrorHandler);
    }

    public static SQLiteDatabase openOrCreateDatabase(String str, String str2, CursorFactory cursorFactory, SQLiteDatabaseHook sQLiteDatabaseHook) {
        return openDatabase(str, str2, cursorFactory, 268435456, sQLiteDatabaseHook);
    }

    public static SQLiteDatabase openOrCreateDatabase(String str, String str2, CursorFactory cursorFactory, SQLiteDatabaseHook sQLiteDatabaseHook, DatabaseErrorHandler databaseErrorHandler) {
        return openDatabase(str, str2 == null ? null : str2.toCharArray(), cursorFactory, 268435456, sQLiteDatabaseHook, databaseErrorHandler);
    }

    public static SQLiteDatabase openOrCreateDatabase(String str, char[] cArr, CursorFactory cursorFactory, SQLiteDatabaseHook sQLiteDatabaseHook) {
        return openDatabase(str, cArr, cursorFactory, 268435456, sQLiteDatabaseHook);
    }

    public static SQLiteDatabase openOrCreateDatabase(String str, char[] cArr, CursorFactory cursorFactory, SQLiteDatabaseHook sQLiteDatabaseHook, DatabaseErrorHandler databaseErrorHandler) {
        return openDatabase(str, cArr, cursorFactory, 268435456, sQLiteDatabaseHook, databaseErrorHandler);
    }

    public static SQLiteDatabase openOrCreateDatabase(String str, byte[] bArr, CursorFactory cursorFactory, SQLiteDatabaseHook sQLiteDatabaseHook) {
        return openDatabase(str, bArr, cursorFactory, 268435456, sQLiteDatabaseHook, (DatabaseErrorHandler) null);
    }

    public static SQLiteDatabase openOrCreateDatabase(String str, byte[] bArr, CursorFactory cursorFactory, SQLiteDatabaseHook sQLiteDatabaseHook, DatabaseErrorHandler databaseErrorHandler) {
        return openDatabase(str, bArr, cursorFactory, 268435456, sQLiteDatabaseHook, databaseErrorHandler);
    }

    public static SQLiteDatabase openOrCreateDatabase(File file, String str, CursorFactory cursorFactory) {
        return openOrCreateDatabase(file, str, cursorFactory, (SQLiteDatabaseHook) null);
    }

    public static SQLiteDatabase openOrCreateDatabase(String str, String str2, CursorFactory cursorFactory) {
        return openDatabase(str, str2, cursorFactory, 268435456, (SQLiteDatabaseHook) null);
    }

    public static SQLiteDatabase openOrCreateDatabase(String str, char[] cArr, CursorFactory cursorFactory) {
        return openDatabase(str, cArr, cursorFactory, 268435456, (SQLiteDatabaseHook) null);
    }

    public static SQLiteDatabase openOrCreateDatabase(String str, byte[] bArr, CursorFactory cursorFactory) {
        return openDatabase(str, bArr, cursorFactory, 268435456, (SQLiteDatabaseHook) null, (DatabaseErrorHandler) null);
    }

    public static SQLiteDatabase create(CursorFactory cursorFactory, String str) {
        return openDatabase(MEMORY, str == null ? null : str.toCharArray(), cursorFactory, 268435456);
    }

    public static SQLiteDatabase create(CursorFactory cursorFactory, char[] cArr) {
        return openDatabase(MEMORY, cArr, cursorFactory, 268435456);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (isOpen()) {
            lock();
            try {
                closeClosable();
                onAllReferencesReleased();
            } finally {
                unlock();
            }
        }
    }

    private void closeClosable() {
        deallocCachedSqlStatements();
        Iterator<Map.Entry<SQLiteClosable, Object>> it = this.mPrograms.entrySet().iterator();
        while (it.hasNext()) {
            SQLiteClosable key = it.next().getKey();
            if (key != null) {
                key.onAllReferencesReleasedFromContainer();
            }
        }
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public int getVersion() throws Throwable {
        SQLiteStatement sQLiteStatement;
        Throwable th;
        lock();
        try {
            if (!isOpen()) {
                throw new IllegalStateException("database not open");
            }
            sQLiteStatement = new SQLiteStatement(this, "PRAGMA user_version;");
            try {
                int iSimpleQueryForLong = (int) sQLiteStatement.simpleQueryForLong();
                sQLiteStatement.close();
                unlock();
                return iSimpleQueryForLong;
            } catch (Throwable th2) {
                th = th2;
                if (sQLiteStatement != null) {
                    sQLiteStatement.close();
                }
                unlock();
                throw th;
            }
        } catch (Throwable th3) {
            sQLiteStatement = null;
            th = th3;
        }
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void setVersion(int i) {
        execSQL("PRAGMA user_version = " + i);
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public long getMaximumSize() throws Throwable {
        SQLiteStatement sQLiteStatement;
        Throwable th;
        lock();
        try {
            if (!isOpen()) {
                throw new IllegalStateException("database not open");
            }
            sQLiteStatement = new SQLiteStatement(this, "PRAGMA max_page_count;");
            try {
                long jSimpleQueryForLong = sQLiteStatement.simpleQueryForLong() * getPageSize();
                sQLiteStatement.close();
                unlock();
                return jSimpleQueryForLong;
            } catch (Throwable th2) {
                th = th2;
                if (sQLiteStatement != null) {
                    sQLiteStatement.close();
                }
                unlock();
                throw th;
            }
        } catch (Throwable th3) {
            sQLiteStatement = null;
            th = th3;
        }
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public long setMaximumSize(long j) throws Throwable {
        lock();
        SQLiteStatement sQLiteStatement = null;
        try {
            if (!isOpen()) {
                throw new IllegalStateException("database not open");
            }
            long pageSize = getPageSize();
            long j2 = j / pageSize;
            if (j % pageSize != 0) {
                j2++;
            }
            SQLiteStatement sQLiteStatement2 = new SQLiteStatement(this, "PRAGMA max_page_count = " + j2);
            try {
                long jSimpleQueryForLong = sQLiteStatement2.simpleQueryForLong() * pageSize;
                sQLiteStatement2.close();
                unlock();
                return jSimpleQueryForLong;
            } catch (Throwable th) {
                th = th;
                sQLiteStatement = sQLiteStatement2;
                if (sQLiteStatement != null) {
                    sQLiteStatement.close();
                }
                unlock();
                throw th;
            }
        } catch (Throwable th2) {
            th = th2;
        }
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public long getPageSize() throws Throwable {
        SQLiteStatement sQLiteStatement;
        Throwable th;
        lock();
        try {
            if (!isOpen()) {
                throw new IllegalStateException("database not open");
            }
            sQLiteStatement = new SQLiteStatement(this, "PRAGMA page_size;");
            try {
                long jSimpleQueryForLong = sQLiteStatement.simpleQueryForLong();
                sQLiteStatement.close();
                unlock();
                return jSimpleQueryForLong;
            } catch (Throwable th2) {
                th = th2;
                if (sQLiteStatement != null) {
                    sQLiteStatement.close();
                }
                unlock();
                throw th;
            }
        } catch (Throwable th3) {
            sQLiteStatement = null;
            th = th3;
        }
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void setPageSize(long j) {
        execSQL("PRAGMA page_size = " + j);
    }

    public void markTableSyncable(String str, String str2) {
        if (!isOpen()) {
            throw new SQLiteException("database not open");
        }
        markTableSyncable(str, "_id", str, str2);
    }

    public void markTableSyncable(String str, String str2, String str3) {
        if (!isOpen()) {
            throw new SQLiteException("database not open");
        }
        markTableSyncable(str, str2, str3, null);
    }

    private void markTableSyncable(String str, String str2, String str3, String str4) {
        lock();
        try {
            native_execSQL("SELECT _sync_dirty FROM " + str3 + " LIMIT 0");
            native_execSQL("SELECT " + str2 + " FROM " + str + " LIMIT 0");
            unlock();
            SyncUpdateInfo syncUpdateInfo = new SyncUpdateInfo(str3, str4, str2);
            synchronized (this.mSyncUpdateInfo) {
                this.mSyncUpdateInfo.put(str, syncUpdateInfo);
            }
        } catch (Throwable th) {
            unlock();
            throw th;
        }
    }

    void rowUpdated(String str, long j) {
        SyncUpdateInfo syncUpdateInfo;
        synchronized (this.mSyncUpdateInfo) {
            syncUpdateInfo = this.mSyncUpdateInfo.get(str);
        }
        if (syncUpdateInfo != null) {
            execSQL("UPDATE " + syncUpdateInfo.masterTable + " SET _sync_dirty=1 WHERE _id=(SELECT " + syncUpdateInfo.foreignKey + " FROM " + str + " WHERE _id=" + j + ")");
        }
    }

    public static String findEditTable(String str) {
        if (!TextUtils.isEmpty(str)) {
            int iIndexOf = str.indexOf(32);
            int iIndexOf2 = str.indexOf(44);
            if (iIndexOf <= 0 || (iIndexOf >= iIndexOf2 && iIndexOf2 >= 0)) {
                return iIndexOf2 > 0 ? (iIndexOf2 < iIndexOf || iIndexOf < 0) ? str.substring(0, iIndexOf2) : str : str;
            }
            return str.substring(0, iIndexOf);
        }
        throw new IllegalStateException("Invalid tables");
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public SQLiteStatement compileStatement(String str) throws SQLException {
        lock();
        try {
            if (!isOpen()) {
                throw new IllegalStateException("database not open");
            }
            return new SQLiteStatement(this, str);
        } finally {
            unlock();
        }
    }

    public Cursor query(boolean z, String str, String[] strArr, String str2, String[] strArr2, String str3, String str4, String str5, String str6) {
        return queryWithFactory(null, z, str, strArr, str2, strArr2, str3, str4, str5, str6);
    }

    public Cursor queryWithFactory(CursorFactory cursorFactory, boolean z, String str, String[] strArr, String str2, String[] strArr2, String str3, String str4, String str5, String str6) {
        if (!isOpen()) {
            throw new IllegalStateException("database not open");
        }
        return rawQueryWithFactory(cursorFactory, SQLiteQueryBuilder.buildQueryString(z, str, strArr, str2, str3, str4, str5, str6), strArr2, findEditTable(str));
    }

    public Cursor query(String str, String[] strArr, String str2, String[] strArr2, String str3, String str4, String str5) {
        return query(false, str, strArr, str2, strArr2, str3, str4, str5, null);
    }

    public Cursor query(String str, String[] strArr, String str2, String[] strArr2, String str3, String str4, String str5, String str6) {
        return query(false, str, strArr, str2, strArr2, str3, str4, str5, str6);
    }

    public Cursor rawQuery(String str, String[] strArr) {
        return rawQueryWithFactory(null, str, strArr, null);
    }

    public SQLiteQueryStats getQueryStats(String str, Object[] objArr) {
        try {
            execSQL(String.format("CREATE TABLE tempstat AS %s", str), objArr);
            Cursor cursorRawQuery = rawQuery("SELECT sum(payload) FROM dbstat WHERE name = 'tempstat';", new Object[0]);
            if (cursorRawQuery == null) {
                return new SQLiteQueryStats(0L, 0L);
            }
            cursorRawQuery.moveToFirst();
            long j = cursorRawQuery.getLong(0);
            cursorRawQuery.close();
            Cursor cursorRawQuery2 = rawQuery("SELECT max(mx_payload) FROM dbstat WHERE name = 'tempstat';", new Object[0]);
            if (cursorRawQuery2 == null) {
                return new SQLiteQueryStats(j, 0L);
            }
            cursorRawQuery2.moveToFirst();
            long j2 = cursorRawQuery2.getLong(0);
            cursorRawQuery2.close();
            execSQL("DROP TABLE tempstat;");
            return new SQLiteQueryStats(j, j2);
        } catch (SQLiteException e) {
            execSQL("DROP TABLE IF EXISTS tempstat;");
            throw e;
        }
    }

    /* high-level source view WARN: Finally extract failed */
    public Cursor rawQuery(String str, Object[] objArr) {
        if (!isOpen()) {
            throw new IllegalStateException("database not open");
        }
        long jCurrentTimeMillis = this.mSlowQueryThreshold != -1 ? System.currentTimeMillis() : 0L;
        SQLiteDirectCursorDriver sQLiteDirectCursorDriver = new SQLiteDirectCursorDriver(this, str, null);
        try {
            Cursor cursorQuery = sQLiteDirectCursorDriver.query(this.mFactory, objArr);
            if (this.mSlowQueryThreshold != -1) {
                int count = cursorQuery != null ? cursorQuery.getCount() : -1;
                long jCurrentTimeMillis2 = System.currentTimeMillis() - jCurrentTimeMillis;
                if (jCurrentTimeMillis2 >= this.mSlowQueryThreshold) {
                    Log.v(TAG, "query (" + jCurrentTimeMillis2 + " ms): " + sQLiteDirectCursorDriver.toString() + ", args are <redacted>, count is " + count);
                }
            }
            return new CrossProcessCursorWrapper(cursorQuery);
        } catch (Throwable th) {
            if (this.mSlowQueryThreshold != -1) {
                long jCurrentTimeMillis3 = System.currentTimeMillis() - jCurrentTimeMillis;
                if (jCurrentTimeMillis3 >= this.mSlowQueryThreshold) {
                    Log.v(TAG, "query (" + jCurrentTimeMillis3 + " ms): " + sQLiteDirectCursorDriver.toString() + ", args are <redacted>, count is -1");
                }
            }
            throw th;
        }
    }

    /* high-level source view WARN: Finally extract failed */
    public Cursor rawQueryWithFactory(CursorFactory cursorFactory, String str, String[] strArr, String str2) {
        if (!isOpen()) {
            throw new IllegalStateException("database not open");
        }
        long jCurrentTimeMillis = this.mSlowQueryThreshold != -1 ? System.currentTimeMillis() : 0L;
        SQLiteDirectCursorDriver sQLiteDirectCursorDriver = new SQLiteDirectCursorDriver(this, str, str2);
        if (cursorFactory == null) {
            try {
                cursorFactory = this.mFactory;
            } catch (Throwable th) {
                if (this.mSlowQueryThreshold != -1) {
                    long jCurrentTimeMillis2 = System.currentTimeMillis() - jCurrentTimeMillis;
                    if (jCurrentTimeMillis2 >= this.mSlowQueryThreshold) {
                        Log.v(TAG, "query (" + jCurrentTimeMillis2 + " ms): " + sQLiteDirectCursorDriver.toString() + ", args are <redacted>, count is -1");
                    }
                }
                throw th;
            }
        }
        Cursor cursorQuery = sQLiteDirectCursorDriver.query(cursorFactory, strArr);
        if (this.mSlowQueryThreshold != -1) {
            int count = cursorQuery != null ? cursorQuery.getCount() : -1;
            long jCurrentTimeMillis3 = System.currentTimeMillis() - jCurrentTimeMillis;
            if (jCurrentTimeMillis3 >= this.mSlowQueryThreshold) {
                Log.v(TAG, "query (" + jCurrentTimeMillis3 + " ms): " + sQLiteDirectCursorDriver.toString() + ", args are <redacted>, count is " + count);
            }
        }
        return new CrossProcessCursorWrapper(cursorQuery);
    }

    public Cursor rawQuery(String str, String[] strArr, int i, int i2) {
        CursorWrapper cursorWrapper = (CursorWrapper) rawQueryWithFactory(null, str, strArr, null);
        ((SQLiteCursor) cursorWrapper.getWrappedCursor()).setLoadStyle(i, i2);
        return cursorWrapper;
    }

    public long insert(String str, String str2, ContentValues contentValues) {
        try {
            return insertWithOnConflict(str, str2, contentValues, 0);
        } catch (SQLException unused) {
            return -1L;
        }
    }

    public long insertOrThrow(String str, String str2, ContentValues contentValues) throws SQLException {
        return insertWithOnConflict(str, str2, contentValues, 0);
    }

    public long replace(String str, String str2, ContentValues contentValues) {
        try {
            return insertWithOnConflict(str, str2, contentValues, 5);
        } catch (SQLException unused) {
            return -1L;
        }
    }

    public long replaceOrThrow(String str, String str2, ContentValues contentValues) throws SQLException {
        return insertWithOnConflict(str, str2, contentValues, 5);
    }

    public long insertWithOnConflict(String str, String str2, ContentValues contentValues, int i) {
        Set<Map.Entry<String, Object>> setValueSet;
        if (!isOpen()) {
            throw new IllegalStateException("database not open");
        }
        StringBuilder sb = new StringBuilder(152);
        sb.append("INSERT");
        sb.append(CONFLICT_VALUES[i]);
        sb.append(" INTO ");
        sb.append(str);
        StringBuilder sb2 = new StringBuilder(40);
        int i2 = 0;
        SQLiteStatement sQLiteStatementCompileStatement = null;
        if (contentValues != null && contentValues.size() > 0) {
            setValueSet = contentValues.valueSet();
            Iterator<Map.Entry<String, Object>> it = setValueSet.iterator();
            sb.append('(');
            boolean z = false;
            while (it.hasNext()) {
                if (z) {
                    sb.append(", ");
                    sb2.append(", ");
                }
                sb.append(it.next().getKey());
                sb2.append('?');
                z = true;
            }
            sb.append(')');
        } else {
            sb.append("(" + str2 + ") ");
            sb2.append("NULL");
            setValueSet = null;
        }
        sb.append(" VALUES(");
        sb.append((CharSequence) sb2);
        sb.append(");");
        lock();
        try {
            try {
                sQLiteStatementCompileStatement = compileStatement(sb.toString());
                if (setValueSet != null) {
                    int size = setValueSet.size();
                    Iterator<Map.Entry<String, Object>> it2 = setValueSet.iterator();
                    while (i2 < size) {
                        i2++;
                        DatabaseUtils.bindObjectToProgram(sQLiteStatementCompileStatement, i2, it2.next().getValue());
                    }
                }
                sQLiteStatementCompileStatement.execute();
                return lastChangeCount() > 0 ? lastInsertRow() : -1L;
            } catch (SQLiteDatabaseCorruptException e) {
                onCorruption();
                throw e;
            }
        } finally {
            if (sQLiteStatementCompileStatement != null) {
                sQLiteStatementCompileStatement.close();
            }
            unlock();
        }
    }

    public int delete(String str, String str2, String[] strArr) {
        return delete(str, str2, (Object[]) strArr);
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public int delete(String str, String str2, Object[] objArr) {
        lock();
        AutoCloseable autoCloseable = null;
        try {
            try {
                if (!isOpen()) {
                    throw new IllegalStateException("database not open");
                }
                SQLiteStatement sQLiteStatementCompileStatement = compileStatement("DELETE FROM " + str + (!TextUtils.isEmpty(str2) ? " WHERE " + str2 : ""));
                if (objArr != null) {
                    int length = objArr.length;
                    int i = 0;
                    while (i < length) {
                        int i2 = i + 1;
                        DatabaseUtils.bindObjectToProgram(sQLiteStatementCompileStatement, i2, objArr[i]);
                        i = i2;
                    }
                }
                sQLiteStatementCompileStatement.execute();
                int iLastChangeCount = lastChangeCount();
                if (sQLiteStatementCompileStatement != null) {
                    sQLiteStatementCompileStatement.close();
                }
                unlock();
                return iLastChangeCount;
            } catch (SQLiteDatabaseCorruptException e) {
                onCorruption();
                throw e;
            }
        } catch (Throwable th) {
            if (0 != 0) {
                autoCloseable.close();
            }
            unlock();
            throw th;
        }
    }

    public int update(String str, ContentValues contentValues, String str2, String[] strArr) {
        return updateWithOnConflict(str, contentValues, str2, strArr, 0);
    }

    public int updateWithOnConflict(String str, ContentValues contentValues, String str2, String[] strArr, int i) {
        if (contentValues == null || contentValues.size() == 0) {
            throw new IllegalArgumentException("Empty values");
        }
        StringBuilder sb = new StringBuilder(120);
        sb.append("UPDATE ");
        sb.append(CONFLICT_VALUES[i]);
        sb.append(str);
        sb.append(" SET ");
        Set<Map.Entry<String, Object>> setValueSet = contentValues.valueSet();
        Iterator<Map.Entry<String, Object>> it = setValueSet.iterator();
        while (it.hasNext()) {
            sb.append(it.next().getKey());
            sb.append("=?");
            if (it.hasNext()) {
                sb.append(", ");
            }
        }
        if (!TextUtils.isEmpty(str2)) {
            sb.append(" WHERE ");
            sb.append(str2);
        }
        lock();
        AutoCloseable autoCloseable = null;
        try {
            try {
                try {
                    if (!isOpen()) {
                        throw new IllegalStateException("database not open");
                    }
                    SQLiteStatement sQLiteStatementCompileStatement = compileStatement(sb.toString());
                    int size = setValueSet.size();
                    Iterator<Map.Entry<String, Object>> it2 = setValueSet.iterator();
                    int i2 = 1;
                    for (int i3 = 0; i3 < size; i3++) {
                        DatabaseUtils.bindObjectToProgram(sQLiteStatementCompileStatement, i2, it2.next().getValue());
                        i2++;
                    }
                    if (strArr != null) {
                        for (String str3 : strArr) {
                            sQLiteStatementCompileStatement.bindString(i2, str3);
                            i2++;
                        }
                    }
                    sQLiteStatementCompileStatement.execute();
                    int iLastChangeCount = lastChangeCount();
                    if (sQLiteStatementCompileStatement != null) {
                        sQLiteStatementCompileStatement.close();
                    }
                    unlock();
                    return iLastChangeCount;
                } catch (SQLException e) {
                    throw e;
                }
            } catch (SQLiteDatabaseCorruptException e2) {
                onCorruption();
                throw e2;
            }
        } catch (Throwable th) {
            if (0 != 0) {
                autoCloseable.close();
            }
            unlock();
            throw th;
        }
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void execSQL(String str) throws SQLException {
        SystemClock.uptimeMillis();
        lock();
        try {
            try {
                if (!isOpen()) {
                    throw new IllegalStateException("database not open");
                }
                native_execSQL(str);
            } catch (SQLiteDatabaseCorruptException e) {
                onCorruption();
                throw e;
            }
        } finally {
            unlock();
        }
    }

    public void rawExecSQL(String str) {
        SystemClock.uptimeMillis();
        lock();
        try {
            try {
                if (!isOpen()) {
                    throw new IllegalStateException("database not open");
                }
                native_rawExecSQL(str);
            } catch (SQLiteDatabaseCorruptException e) {
                onCorruption();
                throw e;
            }
        } finally {
            unlock();
        }
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void execSQL(String str, Object[] objArr) throws SQLException {
        if (objArr == null) {
            throw new IllegalArgumentException("Empty bindArgs");
        }
        SystemClock.uptimeMillis();
        lock();
        AutoCloseable autoCloseable = null;
        try {
            try {
                if (!isOpen()) {
                    throw new IllegalStateException("database not open");
                }
                SQLiteStatement sQLiteStatementCompileStatement = compileStatement(str);
                if (objArr != null) {
                    int length = objArr.length;
                    int i = 0;
                    while (i < length) {
                        int i2 = i + 1;
                        DatabaseUtils.bindObjectToProgram(sQLiteStatementCompileStatement, i2, objArr[i]);
                        i = i2;
                    }
                }
                sQLiteStatementCompileStatement.execute();
                if (sQLiteStatementCompileStatement != null) {
                    sQLiteStatementCompileStatement.close();
                }
                unlock();
            } catch (SQLiteDatabaseCorruptException e) {
                onCorruption();
                throw e;
            }
        } catch (Throwable th) {
            if (0 != 0) {
                autoCloseable.close();
            }
            unlock();
            throw th;
        }
    }

    protected void finalize() {
        if (isOpen()) {
            closeClosable();
            onAllReferencesReleased();
        }
    }

    public SQLiteDatabase(String str, char[] cArr, CursorFactory cursorFactory, int i) {
        this(str, cursorFactory, i, (DatabaseErrorHandler) null);
        openDatabaseInternal(cArr, (SQLiteDatabaseHook) null);
    }

    public SQLiteDatabase(String str, char[] cArr, CursorFactory cursorFactory, int i, SQLiteDatabaseHook sQLiteDatabaseHook) {
        this(str, cursorFactory, i, (DatabaseErrorHandler) null);
        openDatabaseInternal(cArr, sQLiteDatabaseHook);
    }

    public SQLiteDatabase(String str, byte[] bArr, CursorFactory cursorFactory, int i, SQLiteDatabaseHook sQLiteDatabaseHook) {
        this(str, cursorFactory, i, (DatabaseErrorHandler) null);
        openDatabaseInternal(bArr, sQLiteDatabaseHook);
    }

    private SQLiteDatabase(String str, CursorFactory cursorFactory, int i, DatabaseErrorHandler databaseErrorHandler) {
        this.mLock = new ReentrantLock(true);
        this.mLockAcquiredWallTime = 0L;
        this.mLockAcquiredThreadTime = 0L;
        this.mLastLockMessageTime = 0L;
        this.mLastSqlStatement = null;
        this.mNativeHandle = 0L;
        this.mTempTableSequence = 0;
        this.mPathForLogs = null;
        this.mCompiledQueries = new HashMap();
        this.mMaxSqlCacheSize = 250;
        this.mTimeOpened = null;
        this.mTimeClosed = null;
        this.mStackTrace = null;
        this.mLockingEnabled = true;
        this.mSyncUpdateInfo = new HashMap();
        if (str == null) {
            throw new IllegalArgumentException("path should not be null");
        }
        this.mFlags = i;
        this.mPath = str;
        this.mSlowQueryThreshold = -1;
        this.mStackTrace = new DatabaseObjectNotClosedException().fillInStackTrace();
        this.mFactory = cursorFactory;
        this.mPrograms = new WeakHashMap<>();
        this.mErrorHandler = databaseErrorHandler;
    }

    private void openDatabaseInternal(char[] cArr, SQLiteDatabaseHook sQLiteDatabaseHook) {
        openDatabaseInternal(getBytes(cArr), sQLiteDatabaseHook);
    }

    private void openDatabaseInternal(final byte[] bArr, SQLiteDatabaseHook sQLiteDatabaseHook) {
        dbopen(this.mPath, this.mFlags);
        try {
            try {
                keyDatabase(sQLiteDatabaseHook, new Runnable() { // from class: net.sqlcipher.database.SQLiteDatabase.2
                    @Override // java.lang.Runnable
                    public void run() {
                        byte[] bArr2 = bArr;
                        if (bArr2 == null || bArr2.length <= 0) {
                            return;
                        }
                        SQLiteDatabase.this.key(bArr2);
                    }
                });
            } catch (RuntimeException e) {
                final char[] chars = getChars(bArr);
                if (containsNull(chars)) {
                    keyDatabase(sQLiteDatabaseHook, new Runnable() { // from class: net.sqlcipher.database.SQLiteDatabase.3
                        @Override // java.lang.Runnable
                        public void run() {
                            if (bArr != null) {
                                SQLiteDatabase.this.key_mutf8(chars);
                            }
                        }
                    });
                    if (bArr != null && bArr.length > 0) {
                        rekey(bArr);
                    }
                    if (chars == null || chars.length <= 0) {
                        return;
                    }
                    Arrays.fill(chars, (char) 0);
                    return;
                }
                throw e;
            }
        } catch (Throwable th) {
            if (1 != 0) {
                dbclose();
                if (SQLiteDebug.DEBUG_SQL_CACHE) {
                    this.mTimeClosed = getTime();
                }
            }
            throw th;
        }
    }

    private boolean containsNull(char[] cArr) {
        if (cArr == null || cArr.length <= 0) {
            return false;
        }
        for (char c : cArr) {
            if (c == 0) {
                return true;
            }
        }
        return false;
    }

    private void keyDatabase(SQLiteDatabaseHook sQLiteDatabaseHook, Runnable runnable) {
        if (sQLiteDatabaseHook != null) {
            sQLiteDatabaseHook.preKey(this);
        }
        if (runnable != null) {
            runnable.run();
        }
        if (sQLiteDatabaseHook != null) {
            sQLiteDatabaseHook.postKey(this);
        }
        if (SQLiteDebug.DEBUG_SQL_CACHE) {
            this.mTimeOpened = getTime();
        }
        Cursor cursorRawQuery = rawQuery("select count(*) from sqlite_master;", new String[0]);
        if (cursorRawQuery != null) {
            cursorRawQuery.moveToFirst();
            cursorRawQuery.getInt(0);
            cursorRawQuery.close();
        }
    }

    private String getTime() {
        return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS ", Locale.US).format(Long.valueOf(System.currentTimeMillis()));
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public boolean isReadOnly() {
        return (this.mFlags & 1) == 1;
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public boolean isOpen() {
        return this.mNativeHandle != 0;
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public boolean needUpgrade(int i) {
        return i > getVersion();
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public final String getPath() {
        return this.mPath;
    }

    private String getPathForLogs() {
        String str = this.mPathForLogs;
        if (str != null) {
            return str;
        }
        String str2 = this.mPath;
        if (str2 == null) {
            return null;
        }
        if (str2.indexOf(64) == -1) {
            this.mPathForLogs = this.mPath;
        } else {
            this.mPathForLogs = EMAIL_IN_DB_PATTERN.matcher(this.mPath).replaceAll("XX@YY");
        }
        return this.mPathForLogs;
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void setLocale(Locale locale) {
        lock();
        try {
            native_setLocale(locale.toString(), this.mFlags);
        } finally {
            unlock();
        }
    }

    void addToCompiledQueries(String str, SQLiteCompiledSql sQLiteCompiledSql) {
        if (this.mMaxSqlCacheSize == 0) {
            boolean z = SQLiteDebug.DEBUG_SQL_CACHE;
            return;
        }
        synchronized (this.mCompiledQueries) {
            if (this.mCompiledQueries.get(str) != null) {
                return;
            }
            if (this.mCompiledQueries.size() == this.mMaxSqlCacheSize) {
                this.mCacheFullWarnings++;
            } else {
                this.mCompiledQueries.put(str, sQLiteCompiledSql);
                boolean z2 = SQLiteDebug.DEBUG_SQL_CACHE;
            }
        }
    }

    private void deallocCachedSqlStatements() {
        synchronized (this.mCompiledQueries) {
            Iterator<SQLiteCompiledSql> it = this.mCompiledQueries.values().iterator();
            while (it.hasNext()) {
                it.next().releaseSqlStatement();
            }
            this.mCompiledQueries.clear();
        }
    }

    SQLiteCompiledSql getCompiledStatementForSql(String str) {
        synchronized (this.mCompiledQueries) {
            if (this.mMaxSqlCacheSize == 0) {
                boolean z = SQLiteDebug.DEBUG_SQL_CACHE;
                return null;
            }
            SQLiteCompiledSql sQLiteCompiledSql = this.mCompiledQueries.get(str);
            boolean z2 = sQLiteCompiledSql != null;
            if (z2) {
                this.mNumCacheHits++;
            } else {
                this.mNumCacheMisses++;
            }
            boolean z3 = SQLiteDebug.DEBUG_SQL_CACHE;
            return sQLiteCompiledSql;
        }
    }

    public boolean isInCompiledSqlCache(String str) {
        boolean zContainsKey;
        synchronized (this.mCompiledQueries) {
            zContainsKey = this.mCompiledQueries.containsKey(str);
        }
        return zContainsKey;
    }

    public void purgeFromCompiledSqlCache(String str) {
        synchronized (this.mCompiledQueries) {
            this.mCompiledQueries.remove(str);
        }
    }

    public void resetCompiledSqlCache() {
        synchronized (this.mCompiledQueries) {
            this.mCompiledQueries.clear();
        }
    }

    public synchronized int getMaxSqlCacheSize() {
        return this.mMaxSqlCacheSize;
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public synchronized void setMaxSqlCacheSize(int i) {
        if (i > 250 || i < 0) {
            throw new IllegalStateException("expected value between 0 and 250");
        }
        if (i < this.mMaxSqlCacheSize) {
            throw new IllegalStateException("cannot set cacheSize to a value less than the value set with previous setMaxSqlCacheSize() call.");
        }
        this.mMaxSqlCacheSize = i;
    }

    public static byte[] getBytes(char[] cArr) {
        if (cArr == null || cArr.length == 0) {
            return null;
        }
        ByteBuffer byteBufferEncode = Charset.forName("UTF-8").encode(CharBuffer.wrap(cArr));
        byte[] bArr = new byte[byteBufferEncode.limit()];
        byteBufferEncode.get(bArr);
        return bArr;
    }

    public static char[] getChars(byte[] bArr) {
        if (bArr == null || bArr.length == 0) {
            return null;
        }
        CharBuffer charBufferDecode = Charset.forName("UTF-8").decode(ByteBuffer.wrap(bArr));
        char[] cArr = new char[charBufferDecode.limit()];
        charBufferDecode.get(cArr);
        return cArr;
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public android.database.Cursor query(String str) {
        return rawQuery(str, (String[]) null);
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public android.database.Cursor query(String str, Object[] objArr) {
        return rawQuery(str, objArr);
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public android.database.Cursor query(SupportSQLiteQuery supportSQLiteQuery) {
        return query(supportSQLiteQuery, (CancellationSignal) null);
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public android.database.Cursor query(SupportSQLiteQuery supportSQLiteQuery, CancellationSignal cancellationSignal) {
        String sql = supportSQLiteQuery.getSql();
        Object[] objArr = new Object[supportSQLiteQuery.getArgCount()];
        SQLiteDirectCursorDriver sQLiteDirectCursorDriver = new SQLiteDirectCursorDriver(this, sql, null);
        SQLiteQuery sQLiteQuery = new SQLiteQuery(this, sql, 0, objArr);
        supportSQLiteQuery.bindTo(sQLiteQuery);
        return new CrossProcessCursorWrapper(new SQLiteCursor(this, sQLiteDirectCursorDriver, null, sQLiteQuery));
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public long insert(String str, int i, ContentValues contentValues) throws android.database.SQLException {
        return insertWithOnConflict(str, null, contentValues, i);
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public int update(String str, int i, ContentValues contentValues, String str2, Object[] objArr) {
        String[] strArr = new String[objArr.length];
        for (int i2 = 0; i2 < objArr.length; i2++) {
            strArr[i2] = objArr[i2].toString();
        }
        return updateWithOnConflict(str, contentValues, str2, strArr, i);
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void beginTransactionWithListener(final android.database.sqlite.SQLiteTransactionListener sQLiteTransactionListener) {
        beginTransactionWithListener(new SQLiteTransactionListener() { // from class: net.sqlcipher.database.SQLiteDatabase.4
            @Override // net.sqlcipher.database.SQLiteTransactionListener
            public void onBegin() {
                sQLiteTransactionListener.onBegin();
            }

            @Override // net.sqlcipher.database.SQLiteTransactionListener
            public void onCommit() {
                sQLiteTransactionListener.onCommit();
            }

            @Override // net.sqlcipher.database.SQLiteTransactionListener
            public void onRollback() {
                sQLiteTransactionListener.onRollback();
            }
        });
    }

    @Override // androidx.sqlite.db.SupportSQLiteDatabase
    public void beginTransactionWithListenerNonExclusive(final android.database.sqlite.SQLiteTransactionListener sQLiteTransactionListener) {
        beginTransactionWithListenerNonExclusive(new SQLiteTransactionListener() { // from class: net.sqlcipher.database.SQLiteDatabase.5
            @Override // net.sqlcipher.database.SQLiteTransactionListener
            public void onBegin() {
                sQLiteTransactionListener.onBegin();
            }

            @Override // net.sqlcipher.database.SQLiteTransactionListener
            public void onCommit() {
                sQLiteTransactionListener.onCommit();
            }

            @Override // net.sqlcipher.database.SQLiteTransactionListener
            public void onRollback() {
                sQLiteTransactionListener.onRollback();
            }
        });
    }

    private void beginTransactionWithListenerInternal(SQLiteTransactionListener sQLiteTransactionListener, SQLiteDatabaseTransactionType sQLiteDatabaseTransactionType) {
        lockForced();
        if (!isOpen()) {
            throw new IllegalStateException("database not open");
        }
        try {
            if (this.mLock.getHoldCount() > 1) {
                if (this.mInnerTransactionIsSuccessful) {
                    throw new IllegalStateException("Cannot call beginTransaction between calling setTransactionSuccessful and endTransaction");
                }
                return;
            }
            if (sQLiteDatabaseTransactionType == SQLiteDatabaseTransactionType.Exclusive) {
                execSQL("BEGIN EXCLUSIVE;");
            } else if (sQLiteDatabaseTransactionType == SQLiteDatabaseTransactionType.Immediate) {
                execSQL("BEGIN IMMEDIATE;");
            } else if (sQLiteDatabaseTransactionType == SQLiteDatabaseTransactionType.Deferred) {
                execSQL("BEGIN DEFERRED;");
            } else {
                throw new IllegalArgumentException(String.format("%s is an unsupported transaction type", sQLiteDatabaseTransactionType));
            }
            this.mTransactionListener = sQLiteTransactionListener;
            this.mTransactionIsSuccessful = true;
            this.mInnerTransactionIsSuccessful = false;
            if (sQLiteTransactionListener != null) {
                try {
                    sQLiteTransactionListener.onBegin();
                } catch (RuntimeException e) {
                    execSQL("ROLLBACK;");
                    throw e;
                }
            }
        } catch (Throwable th) {
            unlockForced();
            throw th;
        }
    }

    static ArrayList<SQLiteDebug.DbStats> getDbStats() throws Throwable {
        String str;
        ArrayList<SQLiteDebug.DbStats> arrayList = new ArrayList<>();
        for (SQLiteDatabase sQLiteDatabase : getActiveDatabases()) {
            if (sQLiteDatabase != null && sQLiteDatabase.isOpen()) {
                int iNative_getDbLookaside = sQLiteDatabase.native_getDbLookaside();
                String path = sQLiteDatabase.getPath();
                int iLastIndexOf = path.lastIndexOf("/");
                String strSubstring = path.substring(iLastIndexOf != -1 ? iLastIndexOf + 1 : 0);
                ArrayList<Pair<String, String>> attachedDbs = getAttachedDbs(sQLiteDatabase);
                if (attachedDbs != null) {
                    for (int i = 0; i < attachedDbs.size(); i++) {
                        Pair<String, String> pair = attachedDbs.get(i);
                        long pragmaVal = getPragmaVal(sQLiteDatabase, ((String) pair.first) + ".page_count;");
                        if (i == 0) {
                            str = strSubstring;
                        } else {
                            String str2 = "  (attached) " + ((String) pair.first);
                            if (((String) pair.second).trim().length() > 0) {
                                int iLastIndexOf2 = ((String) pair.second).lastIndexOf("/");
                                str2 = str2 + " : " + ((String) pair.second).substring(iLastIndexOf2 != -1 ? iLastIndexOf2 + 1 : 0);
                            }
                            str = str2;
                            iNative_getDbLookaside = 0;
                        }
                        if (pragmaVal > 0) {
                            arrayList.add(new SQLiteDebug.DbStats(str, pragmaVal, sQLiteDatabase.getPageSize(), iNative_getDbLookaside));
                        }
                    }
                }
            }
        }
        return arrayList;
    }

    private static ArrayList<SQLiteDatabase> getActiveDatabases() {
        ArrayList<SQLiteDatabase> arrayList = new ArrayList<>();
        synchronized (sActiveDatabases) {
            arrayList.addAll(sActiveDatabases.keySet());
        }
        return arrayList;
    }

    private static long getPragmaVal(SQLiteDatabase sQLiteDatabase, String str) throws Throwable {
        if (!sQLiteDatabase.isOpen()) {
            return 0L;
        }
        SQLiteStatement sQLiteStatement = null;
        try {
            SQLiteStatement sQLiteStatement2 = new SQLiteStatement(sQLiteDatabase, "PRAGMA " + str);
            try {
                long jSimpleQueryForLong = sQLiteStatement2.simpleQueryForLong();
                sQLiteStatement2.close();
                return jSimpleQueryForLong;
            } catch (Throwable th) {
                th = th;
                sQLiteStatement = sQLiteStatement2;
                if (sQLiteStatement != null) {
                    sQLiteStatement.close();
                }
                throw th;
            }
        } catch (Throwable th2) {
            th = th2;
        }
    }

    private static ArrayList<Pair<String, String>> getAttachedDbs(SQLiteDatabase sQLiteDatabase) {
        if (!sQLiteDatabase.isOpen()) {
            return null;
        }
        ArrayList<Pair<String, String>> arrayList = new ArrayList<>();
        Cursor cursorRawQuery = sQLiteDatabase.rawQuery("pragma database_list;", (String[]) null);
        while (cursorRawQuery.moveToNext()) {
            arrayList.add(new Pair<>(cursorRawQuery.getString(1), cursorRawQuery.getString(2)));
        }
        cursorRawQuery.close();
        return arrayList;
    }

    private Pair<Boolean, String> getResultFromPragma(String str) {
        Cursor cursorRawQuery = rawQuery(str, new Object[0]);
        if (cursorRawQuery == null) {
            return new Pair<>(false, "");
        }
        cursorRawQuery.moveToFirst();
        String string = cursorRawQuery.getString(0);
        cursorRawQuery.close();
        return new Pair<>(true, string);
    }
}

