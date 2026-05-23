package net.sqlcipher;
public class InvalidRowColumnException extends RuntimeException {
    public InvalidRowColumnException() {
    }

    public InvalidRowColumnException(String str) {
        super(str);
    }
}

