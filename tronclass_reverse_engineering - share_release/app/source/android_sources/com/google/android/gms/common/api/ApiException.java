package com.google.android.gms.common.api;
public class ApiException extends Exception {
    protected final Status mStatus;

    /* high-level source view WARN: Illegal instructions before constructor call */
    public ApiException(Status status) {
        int statusCode = status.getStatusCode();
        String statusMessage = status.getStatusMessage() != null ? status.getStatusMessage() : "";
        super(new StringBuilder(String.valueOf(statusMessage).length() + 13).append(statusCode).append(": ").append(statusMessage).toString());
        this.mStatus = status;
    }

    public int getStatusCode() {
        return this.mStatus.getStatusCode();
    }

    @Deprecated
    public String getStatusMessage() {
        return this.mStatus.getStatusMessage();
    }
}

