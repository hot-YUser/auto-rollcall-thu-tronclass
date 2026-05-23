package net.sqlcipher;
public class StaleDataException extends RuntimeException {
    public StaleDataException() {
    }

    public StaleDataException(String str) {
        super(str);
    }
}

