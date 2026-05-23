package net.sqlcipher;

import android.os.Bundle;
import android.os.IInterface;
import android.os.RemoteException;
import java.util.Map;
public interface IBulkCursor extends IInterface {
    public static final int CLOSE_TRANSACTION = 12;
    public static final int COUNT_TRANSACTION = 2;
    public static final int DEACTIVATE_TRANSACTION = 6;
    public static final int DELETE_ROW_TRANSACTION = 5;
    public static final int GET_COLUMN_NAMES_TRANSACTION = 3;
    public static final int GET_CURSOR_WINDOW_TRANSACTION = 1;
    public static final int GET_EXTRAS_TRANSACTION = 10;
    public static final int ON_MOVE_TRANSACTION = 8;
    public static final int REQUERY_TRANSACTION = 7;
    public static final int RESPOND_TRANSACTION = 11;
    public static final int UPDATE_ROWS_TRANSACTION = 4;
    public static final int WANTS_ON_MOVE_TRANSACTION = 9;
    public static final String descriptor = "android.content.IBulkCursor";

    void close() throws RemoteException;

    int count() throws RemoteException;

    void deactivate() throws RemoteException;

    boolean deleteRow(int i) throws RemoteException;

    String[] getColumnNames() throws RemoteException;

    Bundle getExtras() throws RemoteException;

    boolean getWantsAllOnMoveCalls() throws RemoteException;

    CursorWindow getWindow(int i) throws RemoteException;

    void onMove(int i) throws RemoteException;

    int requery(IContentObserver iContentObserver, CursorWindow cursorWindow) throws RemoteException;

    Bundle respond(Bundle bundle) throws RemoteException;

    boolean updateRows(Map<? extends Long, ? extends Map<String, Object>> map) throws RemoteException;
}

