package com.google.android.gms.common.internal;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
public interface IResolveAccountCallbacks extends IInterface {

    public static abstract class Stub extends com.google.android.gms.internal.base.zab implements IResolveAccountCallbacks {
        public Stub() {
            super("com.google.android.gms.common.internal.IResolveAccountCallbacks");
        }

        public static class Proxy extends com.google.android.gms.internal.base.zaa implements IResolveAccountCallbacks {
            Proxy(IBinder iBinder) {
                super(iBinder, "com.google.android.gms.common.internal.IResolveAccountCallbacks");
            }

            @Override // com.google.android.gms.common.internal.IResolveAccountCallbacks
            public void onAccountResolutionComplete(ResolveAccountResponse resolveAccountResponse) throws RemoteException {
                Parcel parcelZaa = zaa();
                com.google.android.gms.internal.base.zac.zaa(parcelZaa, resolveAccountResponse);
                zab(2, parcelZaa);
            }
        }

        public static IResolveAccountCallbacks asInterface(IBinder iBinder) {
            if (iBinder == null) {
                return null;
            }
            IInterface iInterfaceQueryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.IResolveAccountCallbacks");
            if (iInterfaceQueryLocalInterface instanceof IResolveAccountCallbacks) {
                return (IResolveAccountCallbacks) iInterfaceQueryLocalInterface;
            }
            return new Proxy(iBinder);
        }

        @Override // com.google.android.gms.internal.base.zab
        protected boolean dispatchTransaction(int i, Parcel parcel, Parcel parcel2, int i2) throws RemoteException {
            if (i != 2) {
                return false;
            }
            onAccountResolutionComplete((ResolveAccountResponse) com.google.android.gms.internal.base.zac.zaa(parcel, ResolveAccountResponse.CREATOR));
            parcel2.writeNoException();
            return true;
        }
    }

    void onAccountResolutionComplete(ResolveAccountResponse resolveAccountResponse) throws RemoteException;
}

