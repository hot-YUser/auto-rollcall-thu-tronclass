package com.jeep.plugin.capacitor.cdssUtils;

import android.content.ContentValues;
import android.content.Context;
import android.util.Log;
import androidx.room.util.TableInfo;
import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import net.sqlcipher.Cursor;
import net.sqlcipher.database.SQLiteDatabase;
import net.sqlcipher.database.SQLiteOpenHelper;
public class StorageDatabaseHelper extends SQLiteOpenHelper {
    private static final String COL_ID = "id";
    private static final String COL_NAME = "name";
    private static final String COL_VALUE = "value";
    private static final String IDX_COL_NAME = "name";
    private static final String TAG = "StorageDatabaseHelper";
    private String dbName;
    private final int dbVersion;
    private Boolean encrypted;
    public Boolean isOpen;
    private String mode;
    private final String newsecret;
    private String secret;
    private String tableName;

    public StorageDatabaseHelper(Context context, String str, String str2, Boolean bool, String str3, String str4, String str5, int i) {
        super(context, str, null, i);
        this.isOpen = false;
        this.dbName = str;
        this.tableName = str2;
        this.dbVersion = i;
        this.encrypted = bool;
        this.secret = str4;
        this.newsecret = str5;
        this.mode = str3;
        InitializeSQLCipher(context);
    }

    private void createFilePath(File file) {
        if (file.exists()) {
            return;
        }
        file.mkdirs();
        file.delete();
    }

    private void InitializeSQLCipher(Context context) {
        File databasePath;
        StringBuilder sb;
        SQLiteDatabase sQLiteDatabaseOpenOrCreateDatabase;
        SQLiteDatabase.loadLibs(context);
        SQLiteDatabase sQLiteDatabase = null;
        if (!this.encrypted.booleanValue() && this.mode.equals("no-encryption")) {
            File databasePath2 = context.getDatabasePath(this.dbName);
            createFilePath(databasePath2);
            try {
                sQLiteDatabaseOpenOrCreateDatabase = SQLiteDatabase.openOrCreateDatabase(databasePath2, "", (SQLiteDatabase.CursorFactory) null);
                this.isOpen = true;
                sQLiteDatabase = sQLiteDatabaseOpenOrCreateDatabase;
            } catch (Exception unused) {
            }
        } else if (this.encrypted.booleanValue() && this.mode.equals("secret") && this.secret.length() > 0) {
            File databasePath3 = context.getDatabasePath(this.dbName);
            createFilePath(databasePath3);
            try {
                sQLiteDatabaseOpenOrCreateDatabase = SQLiteDatabase.openOrCreateDatabase(databasePath3, this.secret, (SQLiteDatabase.CursorFactory) null);
                this.isOpen = true;
                sQLiteDatabase = sQLiteDatabaseOpenOrCreateDatabase;
            } catch (Exception unused2) {
                Log.d(TAG, "InitializeSQLCipher: Wrong Secret ");
            }
        } else if (this.encrypted.booleanValue() && this.mode.equals("newsecret") && this.secret.length() > 0 && this.newsecret.length() > 0) {
            File databasePath4 = context.getDatabasePath(this.dbName);
            createFilePath(databasePath4);
            try {
                sQLiteDatabaseOpenOrCreateDatabase = SQLiteDatabase.openOrCreateDatabase(databasePath4, this.secret, (SQLiteDatabase.CursorFactory) null);
                sQLiteDatabaseOpenOrCreateDatabase.changePassword(this.newsecret);
                this.secret = this.newsecret;
                this.isOpen = true;
                sQLiteDatabase = sQLiteDatabaseOpenOrCreateDatabase;
            } catch (Exception e) {
                Log.d(TAG, "InitializeSQLCipher: " + e);
            }
        } else if (this.encrypted.booleanValue() && this.mode.equals("encryption") && this.secret.length() > 0) {
            File databasePath5 = context.getDatabasePath(this.dbName);
            if (databasePath5.exists()) {
                databasePath = context.getDatabasePath("temp.db");
                createFilePath(databasePath);
                databasePath5.renameTo(databasePath);
            } else {
                databasePath = null;
            }
            File databasePath6 = context.getDatabasePath(this.dbName);
            createFilePath(databasePath6);
            SQLiteDatabase sQLiteDatabaseOpenOrCreateDatabase2 = SQLiteDatabase.openOrCreateDatabase(databasePath6, this.secret, (SQLiteDatabase.CursorFactory) null);
            if (databasePath.exists()) {
                SQLiteDatabase sQLiteDatabaseOpenOrCreateDatabase3 = SQLiteDatabase.openOrCreateDatabase(databasePath, (String) null, (SQLiteDatabase.CursorFactory) null);
                List<String> tables = getTables(sQLiteDatabaseOpenOrCreateDatabase3);
                String str = this.tableName;
                for (String str2 : tables) {
                    System.out.println(str2);
                    this.tableName = str2;
                    List<Data> keysValues = getKeysValues(sQLiteDatabaseOpenOrCreateDatabase3);
                    if (createTable(sQLiteDatabaseOpenOrCreateDatabase2, str2, true).booleanValue()) {
                        sQLiteDatabaseOpenOrCreateDatabase2.beginTransaction();
                        try {
                            try {
                                ContentValues contentValues = new ContentValues();
                                for (Data data : keysValues) {
                                    try {
                                        contentValues.put("name", data.name);
                                        contentValues.put(COL_VALUE, data.value);
                                        sQLiteDatabaseOpenOrCreateDatabase2.insertOrThrow(str2, null, contentValues);
                                    } catch (Exception unused3) {
                                        Log.d(TAG, "InitializeSQLCipher: Error while trying to add data in table " + str2 + "of the encryptedDB");
                                        sQLiteDatabaseOpenOrCreateDatabase2.endTransaction();
                                        if (!createIndex(sQLiteDatabaseOpenOrCreateDatabase2, str2, "name", true).booleanValue()) {
                                            sb = new StringBuilder("InitializeSQLCipher: Error while trying to index table ");
                                            Log.d(TAG, sb.append(str2).append("of the encryptedDB").toString());
                                        }
                                    }
                                }
                                sQLiteDatabaseOpenOrCreateDatabase2.setTransactionSuccessful();
                                sQLiteDatabaseOpenOrCreateDatabase2.endTransaction();
                            } catch (Exception unused4) {
                            }
                            if (!createIndex(sQLiteDatabaseOpenOrCreateDatabase2, str2, "name", true).booleanValue()) {
                                sb = new StringBuilder("InitializeSQLCipher: Error while trying to index table ");
                                Log.d(TAG, sb.append(str2).append("of the encryptedDB").toString());
                            }
                        } catch (Throwable th) {
                            sQLiteDatabaseOpenOrCreateDatabase2.endTransaction();
                            if (!createIndex(sQLiteDatabaseOpenOrCreateDatabase2, str2, "name", true).booleanValue()) {
                                Log.d(TAG, "InitializeSQLCipher: Error while trying to index table " + str2 + "of the encryptedDB");
                            }
                            throw th;
                        }
                    } else {
                        Log.d(TAG, "InitializeSQLCipher: create Table failed during encryption process");
                    }
                }
                sQLiteDatabaseOpenOrCreateDatabase3.close();
                databasePath.delete();
                this.tableName = str;
                this.encrypted = true;
                this.isOpen = true;
            }
            sQLiteDatabase = sQLiteDatabaseOpenOrCreateDatabase2;
        }
        if (sQLiteDatabase != null) {
            sQLiteDatabase.close();
        }
        if (!this.isOpen.booleanValue() || checkForTableExists(this.tableName)) {
            return;
        }
        this.isOpen = Boolean.valueOf(setTable(this.tableName));
    }

    @Override // net.sqlcipher.database.SQLiteOpenHelper
    public void onCreate(SQLiteDatabase sQLiteDatabase) {
        Log.d(TAG, "******* onCreate: in ");
        if (createTable(sQLiteDatabase, this.tableName, true).booleanValue()) {
            Log.d(TAG, "onCreate: table " + this.tableName + " created");
            if (!createIndex(sQLiteDatabase, this.tableName, "name", true).booleanValue()) {
                Log.d(TAG, "onCreate: index table " + this.tableName + " not created");
                return;
            } else {
                Log.d(TAG, "onCreate: index table " + this.tableName + " created");
                return;
            }
        }
        Log.d(TAG, "onCreate: table " + this.tableName + " not created");
    }

    @Override // net.sqlcipher.database.SQLiteOpenHelper
    public void onUpgrade(SQLiteDatabase sQLiteDatabase, int i, int i2) {
        if (i != i2) {
            sQLiteDatabase.execSQL("DROP TABLE IF EXISTS " + this.tableName);
            onCreate(sQLiteDatabase);
        }
    }

    public boolean setTable(String str) {
        Boolean bool = false;
        SQLiteDatabase writableDatabase = getWritableDatabase(this.secret);
        if (createTable(writableDatabase, str, true).booleanValue()) {
            this.tableName = str;
            if (createIndex(writableDatabase, str, "name", true).booleanValue()) {
                bool = true;
            }
        }
        writableDatabase.close();
        return bool.booleanValue();
    }

    public boolean set(Data data) {
        Data data2 = get(data.name);
        SQLiteDatabase writableDatabase = getWritableDatabase(this.secret);
        if (data2.id != null) {
            writableDatabase.close();
            return update(data);
        }
        writableDatabase.beginTransaction();
        try {
            try {
                ContentValues contentValues = new ContentValues();
                contentValues.put("name", data.name);
                contentValues.put(COL_VALUE, data.value);
                writableDatabase.insertOrThrow(this.tableName, null, contentValues);
                writableDatabase.setTransactionSuccessful();
                writableDatabase.endTransaction();
                writableDatabase.close();
                return true;
            } catch (Exception unused) {
                Log.d(TAG, "set: Error while trying to add data to database");
                writableDatabase.endTransaction();
                writableDatabase.close();
                return false;
            }
        } catch (Throwable unused2) {
            writableDatabase.endTransaction();
            writableDatabase.close();
            return false;
        }
    }

    public boolean update(Data data) {
        SQLiteDatabase writableDatabase = getWritableDatabase(this.secret);
        ContentValues contentValues = new ContentValues();
        contentValues.put(COL_VALUE, data.value);
        writableDatabase.beginTransaction();
        try {
            try {
                writableDatabase.update(this.tableName, contentValues, "name = ?", new String[]{String.valueOf(data.name)});
                writableDatabase.setTransactionSuccessful();
                writableDatabase.endTransaction();
                writableDatabase.close();
                return true;
            } catch (Exception unused) {
                Log.d(TAG, "update: Error while trying to update " + data.name);
                writableDatabase.endTransaction();
                writableDatabase.close();
                return false;
            }
        } catch (Throwable unused2) {
            writableDatabase.endTransaction();
            writableDatabase.close();
            return false;
        }
    }

    public boolean remove(String str) {
        SQLiteDatabase writableDatabase = getWritableDatabase(this.secret);
        writableDatabase.beginTransaction();
        try {
            try {
                writableDatabase.execSQL("DELETE FROM " + this.tableName + " WHERE name = '" + str + "'");
                writableDatabase.setTransactionSuccessful();
                writableDatabase.endTransaction();
                writableDatabase.close();
                return true;
            } catch (Exception unused) {
                Log.d(TAG, "remove: Error while trying to delete " + str);
                writableDatabase.endTransaction();
                writableDatabase.close();
                return false;
            }
        } catch (Throwable unused2) {
            writableDatabase.endTransaction();
            writableDatabase.close();
            return false;
        }
    }

    public boolean clear() {
        if (!checkForTableExists(this.tableName)) {
            return true;
        }
        SQLiteDatabase writableDatabase = getWritableDatabase(this.secret);
        writableDatabase.beginTransaction();
        try {
            try {
                Log.d(TAG, "Clear: Delete from DB");
                writableDatabase.execSQL("DELETE FROM " + this.tableName);
                Log.d(TAG, "Clear: Delete from sqlite_sequence");
                writableDatabase.execSQL("DELETE FROM sqlite_sequence WHERE name = '" + this.tableName + "'");
                writableDatabase.setTransactionSuccessful();
                writableDatabase.endTransaction();
                writableDatabase.close();
                return true;
            } catch (Exception e) {
                Log.d(TAG, "Clear: Error while trying to delete all data" + e);
                writableDatabase.endTransaction();
                writableDatabase.close();
                return false;
            }
        } catch (Throwable unused) {
            writableDatabase.endTransaction();
            writableDatabase.close();
            return false;
        }
    }

    public boolean iskey(String str) {
        return get(str).id != null;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:13:0x0071 A[DONT_GENERATE, PHI: r1
  0x0071: PHI (r1v5 com.jeep.plugin.capacitor.cdssUtils.Data) = (r1v6 com.jeep.plugin.capacitor.cdssUtils.Data), (r1v7 com.jeep.plugin.capacitor.cdssUtils.Data) binds: [B:19:0x0084, B:12:0x006f] A[DONT_GENERATE, DONT_INLINE]] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public Data get(String str) {
        String str2 = "SELECT * FROM " + this.tableName + " WHERE name = '" + str + "'";
        SQLiteDatabase readableDatabase = getReadableDatabase(this.secret);
        Data data = null;
        Cursor cursorRawQuery = readableDatabase.rawQuery(str2, (String[]) null);
        try {
            if (cursorRawQuery.getCount() > 0) {
                try {
                    if (cursorRawQuery.moveToFirst()) {
                        Data data2 = new Data();
                        try {
                            data2.id = Long.valueOf(cursorRawQuery.getLong(cursorRawQuery.getColumnIndex("id")));
                            data2.name = cursorRawQuery.getString(cursorRawQuery.getColumnIndex("name"));
                            data2.value = cursorRawQuery.getString(cursorRawQuery.getColumnIndex(COL_VALUE));
                            data = data2;
                        } catch (Exception unused) {
                            data = data2;
                            Log.d(TAG, "get: Error while trying to get data from storage database");
                            if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                            }
                        }
                    }
                } catch (Exception unused2) {
                }
            } else {
                Data data3 = new Data();
                data3.id = null;
                if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                    cursorRawQuery.close();
                }
                data = data3;
            }
            readableDatabase.close();
            return data;
        } finally {
            if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                cursorRawQuery.close();
            }
        }
    }

    /* high-level source view WARN: Removed duplicated region for block: B:11:0x0048 A[DONT_GENERATE] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public List<String> keys() {
        List<String> arrayList = new ArrayList<>();
        String str = "SELECT * FROM " + this.tableName;
        SQLiteDatabase readableDatabase = getReadableDatabase(this.secret);
        Cursor cursorRawQuery = readableDatabase.rawQuery(str, (String[]) null);
        if (cursorRawQuery.getCount() > 0) {
            try {
                try {
                    if (cursorRawQuery.moveToFirst()) {
                        do {
                            arrayList.add(cursorRawQuery.getString(cursorRawQuery.getColumnIndex("name")));
                        } while (cursorRawQuery.moveToNext());
                    }
                } catch (Exception unused) {
                    Log.d(TAG, "keys: Error while trying to get all keys from storage database");
                    if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                    }
                }
            } finally {
                if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                    cursorRawQuery.close();
                }
            }
        } else {
            arrayList = Collections.emptyList();
            if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                cursorRawQuery.close();
            }
        }
        readableDatabase.close();
        return arrayList;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:11:0x0048 A[DONT_GENERATE] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public List<String> values() {
        List<String> arrayList = new ArrayList<>();
        String str = "SELECT * FROM " + this.tableName;
        SQLiteDatabase readableDatabase = getReadableDatabase(this.secret);
        Cursor cursorRawQuery = readableDatabase.rawQuery(str, (String[]) null);
        if (cursorRawQuery.getCount() > 0) {
            try {
                try {
                    if (cursorRawQuery.moveToFirst()) {
                        do {
                            arrayList.add(cursorRawQuery.getString(cursorRawQuery.getColumnIndex(COL_VALUE)));
                        } while (cursorRawQuery.moveToNext());
                    }
                } catch (Exception unused) {
                    Log.d(TAG, "values: Error while trying to get all values from storage database");
                    if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                    }
                }
            } finally {
                if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                    cursorRawQuery.close();
                }
            }
        } else {
            arrayList = Collections.emptyList();
            if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                cursorRawQuery.close();
            }
        }
        readableDatabase.close();
        return arrayList;
    }

    public List<Data> keysvalues() {
        new ArrayList();
        SQLiteDatabase readableDatabase = getReadableDatabase(this.secret);
        List<Data> keysValues = getKeysValues(readableDatabase);
        readableDatabase.close();
        return keysValues;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:14:0x003b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private List<String> getTables(SQLiteDatabase sQLiteDatabase) {
        List<String> arrayList = new ArrayList<>();
        Cursor cursorRawQuery = sQLiteDatabase.rawQuery("SELECT * FROM sqlite_master WHERE TYPE ='table'", (String[]) null);
        if (cursorRawQuery.getCount() > 0) {
            try {
                try {
                    if (cursorRawQuery.moveToFirst()) {
                        do {
                            String string = cursorRawQuery.getString(cursorRawQuery.getColumnIndex("name"));
                            if (!"sqlite_sequence".equals(string)) {
                                arrayList.add(string);
                            }
                        } while (cursorRawQuery.moveToNext());
                    }
                } catch (Exception unused) {
                    Log.d(TAG, "keys: Error while trying to get all keys from storage database");
                    if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                    }
                }
                if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                    cursorRawQuery.close();
                }
            } finally {
                if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                    cursorRawQuery.close();
                }
            }
        } else {
            arrayList = Collections.emptyList();
        }
        return arrayList;
    }

    private Boolean createTable(SQLiteDatabase sQLiteDatabase, String str, Boolean bool) {
        String str2 = bool.booleanValue() ? "IF NOT EXISTS" : "";
        sQLiteDatabase.beginTransaction();
        try {
            try {
                sQLiteDatabase.execSQL("CREATE TABLE " + str2 + " " + str + "(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,value TEXT)");
                sQLiteDatabase.setTransactionSuccessful();
                sQLiteDatabase.endTransaction();
                return true;
            } catch (Exception unused) {
                Log.d(TAG, "createTable: Error while creating table: " + str);
                sQLiteDatabase.endTransaction();
                return false;
            }
        } catch (Throwable unused2) {
            sQLiteDatabase.endTransaction();
            return false;
        }
    }

    private Boolean createIndex(SQLiteDatabase sQLiteDatabase, String str, String str2, Boolean bool) {
        String str3 = "CREATE INDEX " + (bool.booleanValue() ? "IF NOT EXISTS" : "") + " " + (TableInfo.Index.DEFAULT_PREFIX + str + "_on_" + str2) + " ON " + str + " (" + str2 + ");";
        sQLiteDatabase.beginTransaction();
        try {
            try {
                sQLiteDatabase.execSQL(str3);
                sQLiteDatabase.setTransactionSuccessful();
                sQLiteDatabase.endTransaction();
                return true;
            } catch (Exception unused) {
                Log.d(TAG, "createIndex: Error Index (idx) on table (tableName) could not be created.");
                sQLiteDatabase.endTransaction();
                return false;
            }
        } catch (Throwable unused2) {
            sQLiteDatabase.endTransaction();
            return false;
        }
    }

    /* high-level source view WARN: Removed duplicated region for block: B:11:0x0055  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private List<Data> getKeysValues(SQLiteDatabase sQLiteDatabase) {
        List<Data> arrayList = new ArrayList<>();
        Cursor cursorRawQuery = sQLiteDatabase.rawQuery("SELECT * FROM " + this.tableName, (String[]) null);
        if (cursorRawQuery.getCount() > 0) {
            try {
                try {
                    if (cursorRawQuery.moveToFirst()) {
                        do {
                            Data data = new Data();
                            data.name = cursorRawQuery.getString(cursorRawQuery.getColumnIndex("name"));
                            data.value = cursorRawQuery.getString(cursorRawQuery.getColumnIndex(COL_VALUE));
                            arrayList.add(data);
                        } while (cursorRawQuery.moveToNext());
                    }
                } catch (Exception unused) {
                    Log.d(TAG, "keysvalues: Error while trying to get all keys/values from storage database");
                    if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                    }
                }
                if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                    cursorRawQuery.close();
                }
            } finally {
                if (cursorRawQuery != null && !cursorRawQuery.isClosed()) {
                    cursorRawQuery.close();
                }
            }
        } else {
            arrayList = Collections.emptyList();
        }
        return arrayList;
    }

    private boolean checkForTableExists(String str) {
        Boolean bool = false;
        Cursor cursorRawQuery = getWritableDatabase(this.secret).rawQuery("SELECT name FROM sqlite_master WHERE type='table' AND name='" + str + "'", (String[]) null);
        if (cursorRawQuery.getCount() > 0) {
            bool = true;
        }
        cursorRawQuery.close();
        return bool.booleanValue();
    }
}

