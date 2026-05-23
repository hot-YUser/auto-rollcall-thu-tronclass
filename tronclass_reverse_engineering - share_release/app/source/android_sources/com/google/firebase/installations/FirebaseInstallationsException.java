package com.google.firebase.installations;

import com.google.firebase.FirebaseException;
public class FirebaseInstallationsException extends FirebaseException {
    private final Status status;
    public enum Status {
        BAD_CONFIG
    }

    public FirebaseInstallationsException(Status status) {
        this.status = status;
    }

    public FirebaseInstallationsException(String str, Status status) {
        super(str);
        this.status = status;
    }

    public FirebaseInstallationsException(String str, Status status, Throwable th) {
        super(str, th);
        this.status = status;
    }

    public Status getStatus() {
        return this.status;
    }
}

