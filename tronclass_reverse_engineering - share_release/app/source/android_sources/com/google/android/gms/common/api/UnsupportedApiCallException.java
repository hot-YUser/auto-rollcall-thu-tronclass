package com.google.android.gms.common.api;

import com.google.android.gms.common.Feature;
public final class UnsupportedApiCallException extends UnsupportedOperationException {
    private final Feature zzas;

    public UnsupportedApiCallException(Feature feature) {
        this.zzas = feature;
    }

    @Override // java.lang.Throwable
    public final String getMessage() {
        String strValueOf = String.valueOf(this.zzas);
        return new StringBuilder(String.valueOf(strValueOf).length() + 8).append("Missing ").append(strValueOf).toString();
    }
}

