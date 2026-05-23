package com.getcapacitor;
class PluginInvocationException extends Exception {
    public PluginInvocationException(String str) {
        super(str);
    }

    public PluginInvocationException(Throwable th) {
        super(th);
    }

    public PluginInvocationException(String str, Throwable th) {
        super(str, th);
    }
}

