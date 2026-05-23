package net.sqlcipher;

import android.database.CharArrayBuffer;
import android.database.ContentObserver;
import android.database.DataSetObserver;
import android.os.Bundle;
import android.os.RemoteException;
import android.util.Log;
import java.util.Map;
import net.sqlcipher.AbstractCursor;
public final class BulkCursorToCursorAdaptor extends AbstractWindowedCursor {
    private static final String TAG = "BulkCursor";
    private IBulkCursor mBulkCursor;
    private String[] mColumns;
    private int mCount;
    private AbstractCursor.SelfContentObserver mObserverBridge;
    private boolean mWantsAllOnMoveCalls;

    @Override // net.sqlcipher.AbstractWindowedCursor, net.sqlcipher.AbstractCursor, android.database.Cursor
    public void copyStringToBuffer(int i, CharArrayBuffer charArrayBuffer) {
    }

    @Override // net.sqlcipher.AbstractCursor, android.database.Cursor
    public void registerContentObserver(ContentObserver contentObserver) {
    }

    @Override // net.sqlcipher.AbstractCursor, android.database.Cursor
    public void registerDataSetObserver(DataSetObserver dataSetObserver) {
    }

    @Override // net.sqlcipher.AbstractCursor, android.database.Cursor
    public void unregisterContentObserver(ContentObserver contentObserver) {
    }

    @Override // net.sqlcipher.AbstractCursor, android.database.Cursor
    public void unregisterDataSetObserver(DataSetObserver dataSetObserver) {
    }

    public void set(IBulkCursor iBulkCursor) {
        this.mBulkCursor = iBulkCursor;
        try {
            this.mCount = iBulkCursor.count();
            this.mWantsAllOnMoveCalls = this.mBulkCursor.getWantsAllOnMoveCalls();
            String[] columnNames = this.mBulkCursor.getColumnNames();
            this.mColumns = columnNames;
            this.mRowIdColumnIndex = findRowIdColumnIndex(columnNames);
        } catch (RemoteException unused) {
            Log.e(TAG, "Setup failed because the remote process is dead");
        }
    }

    public void set(IBulkCursor iBulkCursor, int i, int i2) {
        this.mBulkCursor = iBulkCursor;
        this.mColumns = null;
        this.mCount = i;
        this.mRowIdColumnIndex = i2;
    }

    public static int findRowIdColumnIndex(String[] strArr) {
        int length = strArr.length;
        for (int i = 0; i < length; i++) {
            if (strArr[i].equals("_id")) {
                return i;
            }
        }
        return -1;
    }

    public synchronized IContentObserver getObserver() {
        if (this.mObserverBridge == null) {
            this.mObserverBridge = new AbstractCursor.SelfContentObserver(this);
        }
        return null;
    }

    @Override // net.sqlcipher.AbstractCursor, android.database.Cursor
    public int getCount() {
        return this.mCount;
    }

    @Override // net.sqlcipher.AbstractCursor, android.database.CrossProcessCursor
    public boolean onMove(int i, int i2) {
        try {
            if (this.mWindow == null || i2 < this.mWindow.getStartPosition() || i2 >= this.mWindow.getStartPosition() + this.mWindow.getNumRows()) {
                this.mWindow = this.mBulkCursor.getWindow(i2);
            } else if (this.mWantsAllOnMoveCalls) {
                this.mBulkCursor.onMove(i2);
            }
            return this.mWindow != null;
        } catch (RemoteException unused) {
            Log.e(TAG, "Unable to get window because the remote process is dead");
            return false;
        }
    }

    @Override // net.sqlcipher.AbstractCursor, android.database.Cursor
    public void deactivate() {
        super.deactivate();
        try {
            this.mBulkCursor.deactivate();
        } catch (RemoteException unused) {
            Log.w(TAG, "Remote process exception when deactivating");
        }
        this.mWindow = null;
    }

    @Override // net.sqlcipher.AbstractCursor, android.database.Cursor, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        super.close();
        try {
            this.mBulkCursor.close();
        } catch (RemoteException unused) {
            Log.w(TAG, "Remote process exception when closing");
        }
        this.mWindow = null;
    }

    @Override // net.sqlcipher.AbstractCursor, android.database.Cursor
    public boolean requery() {
        try {
            int iRequery = this.mBulkCursor.requery(getObserver(), new CursorWindow(false));
            this.mCount = iRequery;
            if (iRequery != -1) {
                this.mPos = -1;
                this.mWindow = null;
                super.requery();
                return true;
            }
            deactivate();
            return false;
        } catch (Exception e) {
            Log.e(TAG, "Unable to requery because the remote process exception " + e.getMessage());
            deactivate();
            return false;
        }
    }

    @Override // net.sqlcipher.AbstractCursor
    public boolean deleteRow() {
        try {
            boolean zDeleteRow = this.mBulkCursor.deleteRow(this.mPos);
            if (zDeleteRow) {
                this.mWindow = null;
                this.mCount = this.mBulkCursor.count();
                int i = this.mPos;
                int i2 = this.mCount;
                if (i < i2) {
                    int i3 = this.mPos;
                    this.mPos = -1;
                    moveToPosition(i3);
                } else {
                    this.mPos = i2;
                }
                onChange(true);
            }
            return zDeleteRow;
        } catch (RemoteException unused) {
            Log.e(TAG, "Unable to delete row because the remote process is dead");
            return false;
        }
    }

    @Override // net.sqlcipher.AbstractCursor, android.database.Cursor
    public String[] getColumnNames() {
        if (this.mColumns == null) {
            try {
                this.mColumns = this.mBulkCursor.getColumnNames();
            } catch (RemoteException unused) {
                Log.e(TAG, "Unable to fetch column names because the remote process is dead");
                return null;
            }
        }
        return this.mColumns;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:12:0x0021 A[Catch: all -> 0x0041, DONT_GENERATE, TRY_LEAVE, TryCatch #0 {, blocks: (B:9:0x0014, B:10:0x0019, B:12:0x0021, B:14:0x0023, B:16:0x002e, B:17:0x0036, B:19:0x0038, B:20:0x003f), top: B:25:0x0014, inners: #1 }] */
    /* high-level source view WARN: Removed duplicated region for block: B:26:0x0023 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    @Override // net.sqlcipher.AbstractCursor
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public boolean commitUpdates(Map<? extends Long, ? extends Map<String, Object>> map) {
        if (!supportsUpdates()) {
            Log.e(TAG, "commitUpdates not supported on this cursor, did you include the _id column?");
            return false;
        }
        synchronized (this.mUpdatedRows) {
            if (map != null) {
                this.mUpdatedRows.putAll(map);
                if (this.mUpdatedRows.size() > 0) {
                    return false;
                }
                try {
                    boolean zUpdateRows = this.mBulkCursor.updateRows(this.mUpdatedRows);
                    if (zUpdateRows) {
                        this.mUpdatedRows.clear();
                        onChange(true);
                    }
                    return zUpdateRows;
                } catch (RemoteException unused) {
                    Log.e(TAG, "Unable to commit updates because the remote process is dead");
                    return false;
                }
            }
            if (this.mUpdatedRows.size() > 0) {
            }
        }
    }

    @Override // net.sqlcipher.AbstractCursor, android.database.Cursor
    public Bundle getExtras() {
        try {
            return this.mBulkCursor.getExtras();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    @Override // net.sqlcipher.AbstractCursor, android.database.Cursor
    public Bundle respond(Bundle bundle) {
        try {
            return this.mBulkCursor.respond(bundle);
        } catch (RemoteException e) {
            Log.w(TAG, "respond() threw RemoteException, returning an empty bundle.", e);
            return Bundle.EMPTY;
        }
    }
}

