package net.sqlcipher.database;

import androidx.sqlite.db.SupportSQLiteDatabase;
import androidx.sqlite.db.SupportSQLiteOpenHelper;
public class SupportHelper implements SupportSQLiteOpenHelper {
    private final boolean clearPassphrase;
    private byte[] passphrase;
    private SQLiteOpenHelper standardHelper;

    SupportHelper(final SupportSQLiteOpenHelper.Configuration configuration, byte[] bArr, SQLiteDatabaseHook sQLiteDatabaseHook, boolean z) {
        SQLiteDatabase.loadLibs(configuration.context);
        this.passphrase = bArr;
        this.clearPassphrase = z;
        this.standardHelper = new SQLiteOpenHelper(configuration.context, configuration.name, null, configuration.callback.version, sQLiteDatabaseHook) { // from class: net.sqlcipher.database.SupportHelper.1
            @Override // net.sqlcipher.database.SQLiteOpenHelper
            public void onCreate(SQLiteDatabase sQLiteDatabase) {
                configuration.callback.onCreate(sQLiteDatabase);
            }

            @Override // net.sqlcipher.database.SQLiteOpenHelper
            public void onUpgrade(SQLiteDatabase sQLiteDatabase, int i, int i2) {
                configuration.callback.onUpgrade(sQLiteDatabase, i, i2);
            }

            @Override // net.sqlcipher.database.SQLiteOpenHelper
            public void onDowngrade(SQLiteDatabase sQLiteDatabase, int i, int i2) {
                configuration.callback.onDowngrade(sQLiteDatabase, i, i2);
            }

            @Override // net.sqlcipher.database.SQLiteOpenHelper
            public void onOpen(SQLiteDatabase sQLiteDatabase) {
                configuration.callback.onOpen(sQLiteDatabase);
            }

            @Override // net.sqlcipher.database.SQLiteOpenHelper
            public void onConfigure(SQLiteDatabase sQLiteDatabase) {
                configuration.callback.onConfigure(sQLiteDatabase);
            }
        };
    }

    @Override // androidx.sqlite.db.SupportSQLiteOpenHelper
    public String getDatabaseName() {
        return this.standardHelper.getDatabaseName();
    }

    @Override // androidx.sqlite.db.SupportSQLiteOpenHelper
    public void setWriteAheadLoggingEnabled(boolean z) {
        this.standardHelper.setWriteAheadLoggingEnabled(z);
    }

    @Override // androidx.sqlite.db.SupportSQLiteOpenHelper
    public SupportSQLiteDatabase getWritableDatabase() {
        try {
            SQLiteDatabase writableDatabase = this.standardHelper.getWritableDatabase(this.passphrase);
            if (this.clearPassphrase && this.passphrase != null) {
                int i = 0;
                while (true) {
                    byte[] bArr = this.passphrase;
                    if (i >= bArr.length) {
                        break;
                    }
                    bArr[i] = 0;
                    i++;
                }
            }
            return writableDatabase;
        } catch (SQLiteException e) {
            byte[] bArr2 = this.passphrase;
            if (bArr2 != null) {
                boolean z = true;
                for (byte b : bArr2) {
                    z = z && b == 0;
                }
                if (z) {
                    throw new IllegalStateException("The passphrase appears to be cleared. This happens bydefault the first time you use the factory to open a database, so we can remove thecleartext passphrase from memory. If you close the database yourself, please use afresh SupportFactory to reopen it. If something else (e.g., Room) closed thedatabase, and you cannot control that, use SupportFactory boolean constructor option to opt out of the automatic password clearing step. See the project README for more information.", e);
                }
            }
            throw e;
        }
    }

    @Override // androidx.sqlite.db.SupportSQLiteOpenHelper
    public SupportSQLiteDatabase getReadableDatabase() {
        return getWritableDatabase();
    }

    @Override // androidx.sqlite.db.SupportSQLiteOpenHelper, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.standardHelper.close();
    }
}

