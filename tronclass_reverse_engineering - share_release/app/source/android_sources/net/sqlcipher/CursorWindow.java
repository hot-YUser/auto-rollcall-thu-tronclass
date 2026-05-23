package net.sqlcipher;

import android.database.CharArrayBuffer;
import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
public class CursorWindow extends android.database.CursorWindow implements Parcelable {
    private int mRequiredPos;
    private int mStartPos;
    private long nWindow;
    private static CursorWindowAllocation allocation = new DefaultCursorWindowAllocation();
    public static final Parcelable.Creator<CursorWindow> CREATOR = new Parcelable.Creator<CursorWindow>() { // from class: net.sqlcipher.CursorWindow.1
        @Override // android.os.Parcelable.Creator
        public CursorWindow createFromParcel(Parcel parcel) {
            return new CursorWindow(parcel, 0);
        }

        @Override // android.os.Parcelable.Creator
        public CursorWindow[] newArray(int i) {
            return new CursorWindow[i];
        }
    };

    private native boolean allocRow_native();

    private native void close_native();

    private native char[] copyStringToBuffer_native(int i, int i2, int i3, CharArrayBuffer charArrayBuffer);

    private native void freeLastRow_native();

    private native byte[] getBlob_native(int i, int i2);

    private native double getDouble_native(int i, int i2);

    private native long getLong_native(int i, int i2);

    private native int getNumRows_native();

    private native String getString_native(int i, int i2);

    private native int getType_native(int i, int i2);

    private native boolean isBlob_native(int i, int i2);

    private native boolean isFloat_native(int i, int i2);

    private native boolean isInteger_native(int i, int i2);

    private native boolean isNull_native(int i, int i2);

    private native boolean isString_native(int i, int i2);

    private native void native_clear();

    private native IBinder native_getBinder();

    private native void native_init(IBinder iBinder);

    private native void native_init(boolean z, long j, long j2, long j3);

    private native boolean putBlob_native(byte[] bArr, int i, int i2);

    private native boolean putDouble_native(double d, int i, int i2);

    private native boolean putLong_native(long j, int i, int i2);

    private native boolean putNull_native(int i, int i2);

    private native boolean putString_native(String str, int i, int i2);

    private native boolean setNumColumns_native(int i);

    @Override // android.database.CursorWindow, android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public static void setCursorWindowAllocation(CursorWindowAllocation cursorWindowAllocation) {
        allocation = cursorWindowAllocation;
    }

    public static CursorWindowAllocation getCursorWindowAllocation() {
        return allocation;
    }

    public CursorWindow(boolean z) {
        super(z);
        this.mStartPos = 0;
        if (allocation == null) {
            allocation = new DefaultCursorWindowAllocation();
        }
        native_init(z, allocation.getInitialAllocationSize(), allocation.getGrowthPaddingSize(), allocation.getMaxAllocationSize());
    }

    @Override // android.database.CursorWindow
    public int getStartPosition() {
        return this.mStartPos;
    }

    @Override // android.database.CursorWindow
    public void setStartPosition(int i) {
        this.mStartPos = i;
    }

    public int getRequiredPosition() {
        return this.mRequiredPos;
    }

    public void setRequiredPosition(int i) {
        this.mRequiredPos = i;
    }

    @Override // android.database.CursorWindow
    public int getNumRows() {
        acquireReference();
        try {
            return getNumRows_native();
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public boolean setNumColumns(int i) {
        acquireReference();
        try {
            return setNumColumns_native(i);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public boolean allocRow() {
        acquireReference();
        try {
            return allocRow_native();
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public void freeLastRow() {
        acquireReference();
        try {
            freeLastRow_native();
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public boolean putBlob(byte[] bArr, int i, int i2) {
        acquireReference();
        try {
            return putBlob_native(bArr, i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public boolean putString(String str, int i, int i2) {
        acquireReference();
        try {
            return putString_native(str, i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public boolean putLong(long j, int i, int i2) {
        acquireReference();
        try {
            return putLong_native(j, i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public boolean putDouble(double d, int i, int i2) {
        acquireReference();
        try {
            return putDouble_native(d, i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public boolean putNull(int i, int i2) {
        acquireReference();
        try {
            return putNull_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public boolean isNull(int i, int i2) {
        acquireReference();
        try {
            return isNull_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public byte[] getBlob(int i, int i2) {
        acquireReference();
        try {
            return getBlob_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public int getType(int i, int i2) {
        acquireReference();
        try {
            return getType_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public boolean isBlob(int i, int i2) {
        acquireReference();
        try {
            return isBlob_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public boolean isLong(int i, int i2) {
        acquireReference();
        try {
            return isInteger_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public boolean isFloat(int i, int i2) {
        acquireReference();
        try {
            return isFloat_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public boolean isString(int i, int i2) {
        acquireReference();
        try {
            return isString_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public String getString(int i, int i2) {
        acquireReference();
        try {
            return getString_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public void copyStringToBuffer(int i, int i2, CharArrayBuffer charArrayBuffer) {
        if (charArrayBuffer == null) {
            throw new IllegalArgumentException("CharArrayBuffer should not be null");
        }
        if (charArrayBuffer.data == null) {
            charArrayBuffer.data = new char[64];
        }
        acquireReference();
        try {
            char[] cArrCopyStringToBuffer_native = copyStringToBuffer_native(i - this.mStartPos, i2, charArrayBuffer.data.length, charArrayBuffer);
            if (cArrCopyStringToBuffer_native != null) {
                charArrayBuffer.data = cArrCopyStringToBuffer_native;
            }
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public long getLong(int i, int i2) {
        acquireReference();
        try {
            return getLong_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public double getDouble(int i, int i2) {
        acquireReference();
        try {
            return getDouble_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public short getShort(int i, int i2) {
        acquireReference();
        try {
            return (short) getLong_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public int getInt(int i, int i2) {
        acquireReference();
        try {
            return (int) getLong_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public float getFloat(int i, int i2) {
        acquireReference();
        try {
            return (float) getDouble_native(i - this.mStartPos, i2);
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.CursorWindow
    public void clear() {
        acquireReference();
        try {
            this.mStartPos = 0;
            native_clear();
        } finally {
            releaseReference();
        }
    }

    @Override // android.database.sqlite.SQLiteClosable, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        releaseReference();
    }

    @Override // android.database.CursorWindow
    protected void finalize() {
        if (this.nWindow == 0) {
            return;
        }
        close_native();
    }

    public static CursorWindow newFromParcel(Parcel parcel) {
        return CREATOR.createFromParcel(parcel);
    }

    @Override // android.database.CursorWindow, android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i) {
        parcel.writeStrongBinder(native_getBinder());
        parcel.writeInt(this.mStartPos);
    }

    public CursorWindow(Parcel parcel, int i) {
        super(true);
        IBinder strongBinder = parcel.readStrongBinder();
        this.mStartPos = parcel.readInt();
        native_init(strongBinder);
    }

    @Override // android.database.CursorWindow, android.database.sqlite.SQLiteClosable
    protected void onAllReferencesReleased() {
        close_native();
        super.onAllReferencesReleased();
    }
}

