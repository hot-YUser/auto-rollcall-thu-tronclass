package com.getcapacitor;
public class JSExportException extends Exception {
    public JSExportException(String str) {
        super(str);
    }

    public JSExportException(Throwable th) {
        super(th);
    }

    public JSExportException(String str, Throwable th) {
        super(str, th);
    }
}

