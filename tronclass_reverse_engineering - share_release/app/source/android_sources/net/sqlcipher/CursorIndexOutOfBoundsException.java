package net.sqlcipher;
public class CursorIndexOutOfBoundsException extends IndexOutOfBoundsException {
    public CursorIndexOutOfBoundsException(int i, int i2) {
        super("Index " + i + " requested, with a size of " + i2);
    }

    public CursorIndexOutOfBoundsException(String str) {
        super(str);
    }
}

