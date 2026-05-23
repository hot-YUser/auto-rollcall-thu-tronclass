package com.onesignal;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteCantOpenDatabaseException;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteDatabaseLockedException;
import android.database.sqlite.SQLiteException;
import android.database.sqlite.SQLiteOpenHelper;
import android.os.SystemClock;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalDbContract;
import com.onesignal.outcomes.data.OSOutcomeTableProvider;
import com.onesignal.outcomes.data.OutcomesDbContract;
import java.util.ArrayList;
class OneSignalDbHelper extends SQLiteOpenHelper implements OneSignalDb {
    private static final String COMMA_SEP = ",";
    private static final String DATABASE_NAME = "OneSignal.db";
    static final int DATABASE_VERSION = 8;
    private static final int DB_OPEN_RETRY_BACKOFF = 400;
    private static final int DB_OPEN_RETRY_MAX = 5;
    private static final String FLOAT_TYPE = " FLOAT";
    private static final String INTEGER_PRIMARY_KEY_TYPE = " INTEGER PRIMARY KEY";
    private static final String INT_TYPE = " INTEGER";
    protected static final String SQL_CREATE_ENTRIES = "CREATE TABLE notification (_id INTEGER PRIMARY KEY,notification_id TEXT,android_notification_id INTEGER,group_id TEXT,collapse_id TEXT,is_summary INTEGER DEFAULT 0,opened INTEGER DEFAULT 0,dismissed INTEGER DEFAULT 0,title TEXT,message TEXT,full_data TEXT,created_time TIMESTAMP DEFAULT (strftime('%s', 'now')),expire_time TIMESTAMP);";
    private static final String SQL_CREATE_IN_APP_MESSAGE_ENTRIES = "CREATE TABLE in_app_message (_id INTEGER PRIMARY KEY,display_quantity INTEGER,last_display INTEGER,message_id TEXT,displayed_in_session INTEGER,click_ids TEXT);";
    private static final String TEXT_TYPE = " TEXT";
    private static final String TIMESTAMP_TYPE = " TIMESTAMP";
    private static OneSignalDbHelper sInstance;
    private static final Object LOCK = new Object();
    protected static final String[] SQL_INDEX_ENTRIES = {OneSignalDbContract.NotificationTable.INDEX_CREATE_NOTIFICATION_ID, OneSignalDbContract.NotificationTable.INDEX_CREATE_ANDROID_NOTIFICATION_ID, OneSignalDbContract.NotificationTable.INDEX_CREATE_GROUP_ID, OneSignalDbContract.NotificationTable.INDEX_CREATE_COLLAPSE_ID, OneSignalDbContract.NotificationTable.INDEX_CREATE_CREATED_TIME, OneSignalDbContract.NotificationTable.INDEX_CREATE_EXPIRE_TIME};
    private static OSLogger logger = new OSLogWrapper();
    private static OSOutcomeTableProvider outcomeTableProvider = new OSOutcomeTableProvider();

    private static int getDbVersion() {
        return 8;
    }

    void setOutcomeTableProvider(OSOutcomeTableProvider oSOutcomeTableProvider) {
        outcomeTableProvider = oSOutcomeTableProvider;
    }

    OneSignalDbHelper(Context context) {
        super(context, DATABASE_NAME, (SQLiteDatabase.CursorFactory) null, getDbVersion());
    }

    public static OneSignalDbHelper getInstance(Context context) {
        if (sInstance == null) {
            synchronized (LOCK) {
                if (sInstance == null) {
                    sInstance = new OneSignalDbHelper(context.getApplicationContext());
                }
            }
        }
        return sInstance;
    }

    private SQLiteDatabase getSQLiteDatabase() {
        SQLiteDatabase writableDatabase;
        synchronized (LOCK) {
            try {
                try {
                    writableDatabase = getWritableDatabase();
                } finally {
                }
            } catch (SQLiteCantOpenDatabaseException e) {
                throw e;
            } catch (SQLiteDatabaseLockedException e2) {
                throw e2;
            }
        }
        return writableDatabase;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:14:0x0012  */
    /* high-level source view WARN: Removed duplicated region for block: B:17:0x0018 A[Catch: all -> 0x000b, LOOP:0: B:21:0x0005->B:17:0x0018, LOOP_END, TryCatch #2 {all -> 0x000b, blocks: (B:5:0x0005, B:6:0x0009, B:15:0x0013, B:17:0x0018, B:18:0x001f), top: B:21:0x0005 }] */
    /* high-level source view WARN: Removed duplicated region for block: B:23:0x001f A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private SQLiteDatabase getSQLiteDatabaseWithRetries() {
        SQLiteDatabase sQLiteDatabase;
        synchronized (LOCK) {
            Throwable th = null;
            int i = 0;
            while (true) {
                try {
                    try {
                        sQLiteDatabase = getSQLiteDatabase();
                    } catch (Throwable th2) {
                        throw th2;
                    }
                } catch (SQLiteCantOpenDatabaseException e) {
                    e = e;
                    if (th == null) {
                        th = e;
                    }
                    i++;
                    if (i < 5) {
                        throw th;
                    }
                    SystemClock.sleep(i * 400);
                } catch (SQLiteDatabaseLockedException e2) {
                    e = e2;
                    if (th == null) {
                    }
                    i++;
                    if (i < 5) {
                    }
                }
                SystemClock.sleep(i * 400);
            }
        }
        return sQLiteDatabase;
    }

    @Override // com.onesignal.OneSignalDb
    public Cursor query(String str, String[] strArr, String str2, String[] strArr2, String str3, String str4, String str5) {
        Cursor cursorQuery;
        synchronized (LOCK) {
            cursorQuery = getSQLiteDatabaseWithRetries().query(str, strArr, str2, strArr2, str3, str4, str5);
        }
        return cursorQuery;
    }

    @Override // com.onesignal.OneSignalDb
    public Cursor query(String str, String[] strArr, String str2, String[] strArr2, String str3, String str4, String str5, String str6) {
        Cursor cursorQuery;
        synchronized (LOCK) {
            cursorQuery = getSQLiteDatabaseWithRetries().query(str, strArr, str2, strArr2, str3, str4, str5, str6);
        }
        return cursorQuery;
    }

    @Override // com.onesignal.OneSignalDb
    public void insert(String str, String str2, ContentValues contentValues) {
        OSLogger oSLogger;
        String str3;
        OSLogger oSLogger2;
        String str4;
        synchronized (LOCK) {
            SQLiteDatabase sQLiteDatabaseWithRetries = getSQLiteDatabaseWithRetries();
            try {
                try {
                    sQLiteDatabaseWithRetries.beginTransaction();
                    sQLiteDatabaseWithRetries.insert(str, str2, contentValues);
                    sQLiteDatabaseWithRetries.setTransactionSuccessful();
                    if (sQLiteDatabaseWithRetries != null) {
                        try {
                            sQLiteDatabaseWithRetries.endTransaction();
                        } catch (SQLiteException e) {
                            e = e;
                            oSLogger2 = logger;
                            str4 = "Error closing transaction! ";
                            oSLogger2.error(str4, e);
                        } catch (IllegalStateException e2) {
                            e = e2;
                            oSLogger = logger;
                            str3 = "Error closing transaction! ";
                            oSLogger.error(str3, e);
                        }
                    }
                } finally {
                }
            } catch (SQLiteException e3) {
                logger.error("Error inserting on table: " + str + " with nullColumnHack: " + str2 + " and values: " + contentValues, e3);
                if (sQLiteDatabaseWithRetries != null) {
                    try {
                        sQLiteDatabaseWithRetries.endTransaction();
                    } catch (SQLiteException e4) {
                        e = e4;
                        oSLogger2 = logger;
                        str4 = "Error closing transaction! ";
                        oSLogger2.error(str4, e);
                    } catch (IllegalStateException e5) {
                        e = e5;
                        oSLogger = logger;
                        str3 = "Error closing transaction! ";
                        oSLogger.error(str3, e);
                    }
                }
            } catch (IllegalStateException e6) {
                logger.error("Error under inserting transaction under table: " + str + " with nullColumnHack: " + str2 + " and values: " + contentValues, e6);
                if (sQLiteDatabaseWithRetries != null) {
                    try {
                        sQLiteDatabaseWithRetries.endTransaction();
                    } catch (SQLiteException e7) {
                        e = e7;
                        oSLogger2 = logger;
                        str4 = "Error closing transaction! ";
                        oSLogger2.error(str4, e);
                    } catch (IllegalStateException e8) {
                        e = e8;
                        oSLogger = logger;
                        str3 = "Error closing transaction! ";
                        oSLogger.error(str3, e);
                    }
                }
            }
        }
    }

    @Override // com.onesignal.OneSignalDb
    public void insertOrThrow(String str, String str2, ContentValues contentValues) throws SQLException {
        OSLogger oSLogger;
        String str3;
        OSLogger oSLogger2;
        String str4;
        synchronized (LOCK) {
            SQLiteDatabase sQLiteDatabaseWithRetries = getSQLiteDatabaseWithRetries();
            try {
                try {
                    sQLiteDatabaseWithRetries.beginTransaction();
                    sQLiteDatabaseWithRetries.insertOrThrow(str, str2, contentValues);
                    sQLiteDatabaseWithRetries.setTransactionSuccessful();
                    if (sQLiteDatabaseWithRetries != null) {
                        try {
                            sQLiteDatabaseWithRetries.endTransaction();
                        } catch (SQLiteException e) {
                            e = e;
                            oSLogger2 = logger;
                            str4 = "Error closing transaction! ";
                            oSLogger2.error(str4, e);
                        } catch (IllegalStateException e2) {
                            e = e2;
                            oSLogger = logger;
                            str3 = "Error closing transaction! ";
                            oSLogger.error(str3, e);
                        }
                    }
                } finally {
                }
            } catch (SQLiteException e3) {
                logger.error("Error inserting or throw on table: " + str + " with nullColumnHack: " + str2 + " and values: " + contentValues, e3);
                if (sQLiteDatabaseWithRetries != null) {
                    try {
                        sQLiteDatabaseWithRetries.endTransaction();
                    } catch (SQLiteException e4) {
                        e = e4;
                        oSLogger2 = logger;
                        str4 = "Error closing transaction! ";
                        oSLogger2.error(str4, e);
                    } catch (IllegalStateException e5) {
                        e = e5;
                        oSLogger = logger;
                        str3 = "Error closing transaction! ";
                        oSLogger.error(str3, e);
                    }
                }
            } catch (IllegalStateException e6) {
                logger.error("Error under inserting or throw transaction under table: " + str + " with nullColumnHack: " + str2 + " and values: " + contentValues, e6);
                if (sQLiteDatabaseWithRetries != null) {
                    try {
                        sQLiteDatabaseWithRetries.endTransaction();
                    } catch (SQLiteException e7) {
                        e = e7;
                        oSLogger2 = logger;
                        str4 = "Error closing transaction! ";
                        oSLogger2.error(str4, e);
                    } catch (IllegalStateException e8) {
                        e = e8;
                        oSLogger = logger;
                        str3 = "Error closing transaction! ";
                        oSLogger.error(str3, e);
                    }
                }
            }
        }
    }

    @Override // com.onesignal.OneSignalDb
    public int update(String str, ContentValues contentValues, String str2, String[] strArr) {
        OSLogger oSLogger;
        String str3;
        OSLogger oSLogger2;
        String str4;
        int iUpdate = 0;
        if (contentValues == null || contentValues.toString().isEmpty()) {
            return 0;
        }
        synchronized (LOCK) {
            SQLiteDatabase sQLiteDatabaseWithRetries = getSQLiteDatabaseWithRetries();
            try {
                try {
                    sQLiteDatabaseWithRetries.beginTransaction();
                    iUpdate = sQLiteDatabaseWithRetries.update(str, contentValues, str2, strArr);
                    sQLiteDatabaseWithRetries.setTransactionSuccessful();
                    if (sQLiteDatabaseWithRetries != null) {
                        try {
                            sQLiteDatabaseWithRetries.endTransaction();
                        } catch (SQLiteException e) {
                            e = e;
                            oSLogger2 = logger;
                            str4 = "Error closing transaction! ";
                            oSLogger2.error(str4, e);
                        } catch (IllegalStateException e2) {
                            e = e2;
                            oSLogger = logger;
                            str3 = "Error closing transaction! ";
                            oSLogger.error(str3, e);
                        }
                    }
                } finally {
                }
            } catch (SQLiteException e3) {
                logger.error("Error updating on table: " + str + " with whereClause: " + str2 + " and whereArgs: " + strArr, e3);
                if (sQLiteDatabaseWithRetries != null) {
                    try {
                        sQLiteDatabaseWithRetries.endTransaction();
                    } catch (SQLiteException e4) {
                        e = e4;
                        oSLogger2 = logger;
                        str4 = "Error closing transaction! ";
                        oSLogger2.error(str4, e);
                    } catch (IllegalStateException e5) {
                        e = e5;
                        oSLogger = logger;
                        str3 = "Error closing transaction! ";
                        oSLogger.error(str3, e);
                    }
                }
            } catch (IllegalStateException e6) {
                logger.error("Error under update transaction under table: " + str + " with whereClause: " + str2 + " and whereArgs: " + strArr, e6);
                if (sQLiteDatabaseWithRetries != null) {
                    try {
                        sQLiteDatabaseWithRetries.endTransaction();
                    } catch (SQLiteException e7) {
                        e = e7;
                        oSLogger2 = logger;
                        str4 = "Error closing transaction! ";
                        oSLogger2.error(str4, e);
                    } catch (IllegalStateException e8) {
                        e = e8;
                        oSLogger = logger;
                        str3 = "Error closing transaction! ";
                        oSLogger.error(str3, e);
                    }
                }
            }
        }
        return iUpdate;
    }

    @Override // com.onesignal.OneSignalDb
    public void delete(String str, String str2, String[] strArr) {
        OSLogger oSLogger;
        String str3;
        OSLogger oSLogger2;
        String str4;
        synchronized (LOCK) {
            SQLiteDatabase sQLiteDatabaseWithRetries = getSQLiteDatabaseWithRetries();
            try {
                try {
                    sQLiteDatabaseWithRetries.beginTransaction();
                    sQLiteDatabaseWithRetries.delete(str, str2, strArr);
                    sQLiteDatabaseWithRetries.setTransactionSuccessful();
                    if (sQLiteDatabaseWithRetries != null) {
                        try {
                            sQLiteDatabaseWithRetries.endTransaction();
                        } catch (SQLiteException e) {
                            e = e;
                            oSLogger2 = logger;
                            str4 = "Error closing transaction! ";
                            oSLogger2.error(str4, e);
                        } catch (IllegalStateException e2) {
                            e = e2;
                            oSLogger = logger;
                            str3 = "Error closing transaction! ";
                            oSLogger.error(str3, e);
                        }
                    }
                } finally {
                }
            } catch (SQLiteException e3) {
                logger.error("Error deleting on table: " + str + " with whereClause: " + str2 + " and whereArgs: " + strArr, e3);
                if (sQLiteDatabaseWithRetries != null) {
                    try {
                        sQLiteDatabaseWithRetries.endTransaction();
                    } catch (SQLiteException e4) {
                        e = e4;
                        oSLogger2 = logger;
                        str4 = "Error closing transaction! ";
                        oSLogger2.error(str4, e);
                    } catch (IllegalStateException e5) {
                        e = e5;
                        oSLogger = logger;
                        str3 = "Error closing transaction! ";
                        oSLogger.error(str3, e);
                    }
                }
            } catch (IllegalStateException e6) {
                logger.error("Error under delete transaction under table: " + str + " with whereClause: " + str2 + " and whereArgs: " + strArr, e6);
                if (sQLiteDatabaseWithRetries != null) {
                    try {
                        sQLiteDatabaseWithRetries.endTransaction();
                    } catch (SQLiteException e7) {
                        e = e7;
                        oSLogger2 = logger;
                        str4 = "Error closing transaction! ";
                        oSLogger2.error(str4, e);
                    } catch (IllegalStateException e8) {
                        e = e8;
                        oSLogger = logger;
                        str3 = "Error closing transaction! ";
                        oSLogger.error(str3, e);
                    }
                }
            }
        }
    }

    @Override // android.database.sqlite.SQLiteOpenHelper
    public void onCreate(SQLiteDatabase sQLiteDatabase) {
        synchronized (LOCK) {
            sQLiteDatabase.execSQL(SQL_CREATE_ENTRIES);
            sQLiteDatabase.execSQL(OutcomesDbContract.SQL_CREATE_OUTCOME_ENTRIES_V3);
            sQLiteDatabase.execSQL(OutcomesDbContract.SQL_CREATE_UNIQUE_OUTCOME_ENTRIES_V2);
            sQLiteDatabase.execSQL(SQL_CREATE_IN_APP_MESSAGE_ENTRIES);
            for (String str : SQL_INDEX_ENTRIES) {
                sQLiteDatabase.execSQL(str);
            }
        }
    }

    @Override // android.database.sqlite.SQLiteOpenHelper
    public void onUpgrade(SQLiteDatabase sQLiteDatabase, int i, int i2) {
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OneSignal Database onUpgrade from: " + i + " to: " + i2);
        synchronized (LOCK) {
            try {
                internalOnUpgrade(sQLiteDatabase, i);
            } catch (SQLiteException e) {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Error in upgrade, migration may have already run! Skipping!", e);
            }
        }
    }

    private void internalOnUpgrade(SQLiteDatabase sQLiteDatabase, int i) {
        if (i < 2) {
            upgradeToV2(sQLiteDatabase);
        }
        if (i < 3) {
            upgradeToV3(sQLiteDatabase);
        }
        if (i < 4) {
            upgradeToV4(sQLiteDatabase);
        }
        if (i < 5) {
            upgradeToV5(sQLiteDatabase);
        }
        if (i == 5) {
            upgradeFromV5ToV6(sQLiteDatabase);
        }
        if (i < 7) {
            upgradeToV7(sQLiteDatabase);
        }
        if (i < 8) {
            upgradeToV8(sQLiteDatabase);
        }
    }

    private static void upgradeToV2(SQLiteDatabase sQLiteDatabase) {
        safeExecSQL(sQLiteDatabase, "ALTER TABLE notification ADD COLUMN collapse_id TEXT;");
        safeExecSQL(sQLiteDatabase, OneSignalDbContract.NotificationTable.INDEX_CREATE_GROUP_ID);
    }

    private static void upgradeToV3(SQLiteDatabase sQLiteDatabase) {
        safeExecSQL(sQLiteDatabase, "ALTER TABLE notification ADD COLUMN expire_time TIMESTAMP;");
        safeExecSQL(sQLiteDatabase, "UPDATE notification SET expire_time = created_time + 259200;");
        safeExecSQL(sQLiteDatabase, OneSignalDbContract.NotificationTable.INDEX_CREATE_EXPIRE_TIME);
    }

    private static void upgradeToV4(SQLiteDatabase sQLiteDatabase) {
        safeExecSQL(sQLiteDatabase, OutcomesDbContract.SQL_CREATE_OUTCOME_ENTRIES_V1);
    }

    private static void upgradeToV5(SQLiteDatabase sQLiteDatabase) {
        safeExecSQL(sQLiteDatabase, OutcomesDbContract.SQL_CREATE_UNIQUE_OUTCOME_ENTRIES_V1);
        upgradeFromV5ToV6(sQLiteDatabase);
    }

    private static void upgradeFromV5ToV6(SQLiteDatabase sQLiteDatabase) {
        outcomeTableProvider.upgradeOutcomeTableRevision1To2(sQLiteDatabase);
    }

    private static void upgradeToV7(SQLiteDatabase sQLiteDatabase) {
        safeExecSQL(sQLiteDatabase, SQL_CREATE_IN_APP_MESSAGE_ENTRIES);
    }

    private void upgradeToV8(SQLiteDatabase sQLiteDatabase) {
        outcomeTableProvider.upgradeOutcomeTableRevision2To3(sQLiteDatabase);
        outcomeTableProvider.upgradeCacheOutcomeTableRevision1To2(sQLiteDatabase);
    }

    private static void safeExecSQL(SQLiteDatabase sQLiteDatabase, String str) {
        try {
            sQLiteDatabase.execSQL(str);
        } catch (SQLiteException e) {
            e.printStackTrace();
        }
    }

    @Override // android.database.sqlite.SQLiteOpenHelper
    public void onDowngrade(SQLiteDatabase sQLiteDatabase, int i, int i2) {
        OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "SDK version rolled back! Clearing OneSignal.db as it could be in an unexpected state.");
        synchronized (LOCK) {
            Cursor cursorRawQuery = sQLiteDatabase.rawQuery("SELECT name FROM sqlite_master WHERE type='table'", null);
            try {
                ArrayList<String> arrayList = new ArrayList(cursorRawQuery.getCount());
                while (cursorRawQuery.moveToNext()) {
                    arrayList.add(cursorRawQuery.getString(0));
                }
                for (String str : arrayList) {
                    if (!str.startsWith("sqlite_")) {
                        sQLiteDatabase.execSQL("DROP TABLE IF EXISTS " + str);
                    }
                }
                cursorRawQuery.close();
                onCreate(sQLiteDatabase);
            } catch (Throwable th) {
                cursorRawQuery.close();
                throw th;
            }
        }
    }

    static StringBuilder recentUninteractedWithNotificationsWhere() {
        long currentTimeMillis = OneSignal.getTime().getCurrentTimeMillis() / 1000;
        StringBuilder sb = new StringBuilder("created_time > " + (currentTimeMillis - 604800) + " AND dismissed = 0 AND opened = 0 AND is_summary = 0");
        if (OneSignal.getRemoteParamController().isRestoreTTLFilterActive()) {
            sb.append(" AND expire_time > " + currentTimeMillis);
        }
        return sb;
    }
}

