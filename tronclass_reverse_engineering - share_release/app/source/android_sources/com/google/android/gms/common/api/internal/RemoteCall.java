package com.google.android.gms.common.api.internal;

import android.os.RemoteException;
public interface RemoteCall<T, U> {
    void accept(T t, U u) throws RemoteException;
}

