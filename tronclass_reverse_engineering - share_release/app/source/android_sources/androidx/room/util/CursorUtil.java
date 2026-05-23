package androidx.room.util;

import android.database.Cursor;
import android.database.MatrixCursor;
public class CursorUtil {
    public static Cursor copyAndClose(Cursor cursor) {
        try {
            MatrixCursor matrixCursor = new MatrixCursor(cursor.getColumnNames(), cursor.getCount());
            while (cursor.moveToNext()) {
                Object[] objArr = new Object[cursor.getColumnCount()];
                for (int i = 0; i < cursor.getColumnCount(); i++) {
                    int type = cursor.getType(i);
                    if (type == 0) {
                        objArr[i] = null;
                    } else if (type == 1) {
                        objArr[i] = Long.valueOf(cursor.getLong(i));
                    } else if (type == 2) {
                        objArr[i] = Double.valueOf(cursor.getDouble(i));
                    } else if (type == 3) {
                        objArr[i] = cursor.getString(i);
                    } else if (type == 4) {
                        objArr[i] = cursor.getBlob(i);
                    } else {
                        throw new IllegalStateException();
                    }
                }
                matrixCursor.addRow(objArr);
            }
            return matrixCursor;
        } finally {
            cursor.close();
        }
    }

    public static int getColumnIndex(Cursor cursor, String str) {
        int columnIndex = cursor.getColumnIndex(str);
        return columnIndex >= 0 ? columnIndex : cursor.getColumnIndex("`" + str + "`");
    }

    public static int getColumnIndexOrThrow(Cursor cursor, String str) {
        int columnIndex = cursor.getColumnIndex(str);
        return columnIndex >= 0 ? columnIndex : cursor.getColumnIndexOrThrow("`" + str + "`");
    }

    private CursorUtil() {
    }
}

