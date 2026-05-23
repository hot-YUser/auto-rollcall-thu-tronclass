package com.getcapacitor;
public class PluginLoadException extends Exception {
    public PluginLoadException(String str) {
        super(str);
    }

    public PluginLoadException(Throwable th) {
        super(th);
    }

    public PluginLoadException(String str, Throwable th) {
        super(str, th);
    }
}

