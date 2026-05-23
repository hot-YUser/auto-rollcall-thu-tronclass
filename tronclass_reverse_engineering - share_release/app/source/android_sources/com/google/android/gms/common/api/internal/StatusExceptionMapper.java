package com.google.android.gms.common.api.internal;

import com.google.android.gms.common.api.Status;
public interface StatusExceptionMapper {
    Exception getException(Status status);
}

