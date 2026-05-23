package com.getcapacitor;
class InvalidPluginMethodException extends Exception {
    public InvalidPluginMethodException(String str) {
        super(str);
    }

    public InvalidPluginMethodException(Throwable th) {
        super(th);
    }

    public InvalidPluginMethodException(String str, Throwable th) {
        super(str, th);
    }
}

