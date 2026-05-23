package net.sqlcipher;
public class UnknownTypeException extends RuntimeException {
    public UnknownTypeException() {
    }

    public UnknownTypeException(String str) {
        super(str);
    }
}

