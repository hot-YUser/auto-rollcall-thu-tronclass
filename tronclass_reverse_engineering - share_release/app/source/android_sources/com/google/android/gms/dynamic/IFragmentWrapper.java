package com.google.android.gms.dynamic;

import android.content.Intent;
import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.RemoteException;
import com.google.android.gms.dynamic.IObjectWrapper;
import com.google.android.gms.internal.common.zzb;
import com.google.android.gms.internal.common.zzc;
public interface IFragmentWrapper extends IInterface {

    public static abstract class Stub extends zzb implements IFragmentWrapper {
        public Stub() {
            super("com.google.android.gms.dynamic.IFragmentWrapper");
        }

        public static class zza extends com.google.android.gms.internal.common.zza implements IFragmentWrapper {
            zza(IBinder iBinder) {
                super(iBinder, "com.google.android.gms.dynamic.IFragmentWrapper");
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final IObjectWrapper zzae() throws RemoteException {
                Parcel parcelZza = zza(2, zza());
                IObjectWrapper iObjectWrapperAsInterface = IObjectWrapper.Stub.asInterface(parcelZza.readStrongBinder());
                parcelZza.recycle();
                return iObjectWrapperAsInterface;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final Bundle getArguments() throws RemoteException {
                Parcel parcelZza = zza(3, zza());
                Bundle bundle = (Bundle) zzc.zza(parcelZza, Bundle.CREATOR);
                parcelZza.recycle();
                return bundle;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final int getId() throws RemoteException {
                Parcel parcelZza = zza(4, zza());
                int i = parcelZza.readInt();
                parcelZza.recycle();
                return i;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final IFragmentWrapper zzaf() throws RemoteException {
                Parcel parcelZza = zza(5, zza());
                IFragmentWrapper iFragmentWrapperAsInterface = Stub.asInterface(parcelZza.readStrongBinder());
                parcelZza.recycle();
                return iFragmentWrapperAsInterface;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final IObjectWrapper zzag() throws RemoteException {
                Parcel parcelZza = zza(6, zza());
                IObjectWrapper iObjectWrapperAsInterface = IObjectWrapper.Stub.asInterface(parcelZza.readStrongBinder());
                parcelZza.recycle();
                return iObjectWrapperAsInterface;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final boolean getRetainInstance() throws RemoteException {
                Parcel parcelZza = zza(7, zza());
                boolean zZza = zzc.zza(parcelZza);
                parcelZza.recycle();
                return zZza;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final String getTag() throws RemoteException {
                Parcel parcelZza = zza(8, zza());
                String string = parcelZza.readString();
                parcelZza.recycle();
                return string;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final IFragmentWrapper zzah() throws RemoteException {
                Parcel parcelZza = zza(9, zza());
                IFragmentWrapper iFragmentWrapperAsInterface = Stub.asInterface(parcelZza.readStrongBinder());
                parcelZza.recycle();
                return iFragmentWrapperAsInterface;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final int getTargetRequestCode() throws RemoteException {
                Parcel parcelZza = zza(10, zza());
                int i = parcelZza.readInt();
                parcelZza.recycle();
                return i;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final boolean getUserVisibleHint() throws RemoteException {
                Parcel parcelZza = zza(11, zza());
                boolean zZza = zzc.zza(parcelZza);
                parcelZza.recycle();
                return zZza;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final IObjectWrapper zzai() throws RemoteException {
                Parcel parcelZza = zza(12, zza());
                IObjectWrapper iObjectWrapperAsInterface = IObjectWrapper.Stub.asInterface(parcelZza.readStrongBinder());
                parcelZza.recycle();
                return iObjectWrapperAsInterface;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final boolean isAdded() throws RemoteException {
                Parcel parcelZza = zza(13, zza());
                boolean zZza = zzc.zza(parcelZza);
                parcelZza.recycle();
                return zZza;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final boolean isDetached() throws RemoteException {
                Parcel parcelZza = zza(14, zza());
                boolean zZza = zzc.zza(parcelZza);
                parcelZza.recycle();
                return zZza;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final boolean isHidden() throws RemoteException {
                Parcel parcelZza = zza(15, zza());
                boolean zZza = zzc.zza(parcelZza);
                parcelZza.recycle();
                return zZza;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final boolean isInLayout() throws RemoteException {
                Parcel parcelZza = zza(16, zza());
                boolean zZza = zzc.zza(parcelZza);
                parcelZza.recycle();
                return zZza;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final boolean isRemoving() throws RemoteException {
                Parcel parcelZza = zza(17, zza());
                boolean zZza = zzc.zza(parcelZza);
                parcelZza.recycle();
                return zZza;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final boolean isResumed() throws RemoteException {
                Parcel parcelZza = zza(18, zza());
                boolean zZza = zzc.zza(parcelZza);
                parcelZza.recycle();
                return zZza;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final boolean isVisible() throws RemoteException {
                Parcel parcelZza = zza(19, zza());
                boolean zZza = zzc.zza(parcelZza);
                parcelZza.recycle();
                return zZza;
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final void zza(IObjectWrapper iObjectWrapper) throws RemoteException {
                Parcel parcelZza = zza();
                zzc.zza(parcelZza, iObjectWrapper);
                zzb(20, parcelZza);
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final void setHasOptionsMenu(boolean z) throws RemoteException {
                Parcel parcelZza = zza();
                zzc.writeBoolean(parcelZza, z);
                zzb(21, parcelZza);
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final void setMenuVisibility(boolean z) throws RemoteException {
                Parcel parcelZza = zza();
                zzc.writeBoolean(parcelZza, z);
                zzb(22, parcelZza);
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final void setRetainInstance(boolean z) throws RemoteException {
                Parcel parcelZza = zza();
                zzc.writeBoolean(parcelZza, z);
                zzb(23, parcelZza);
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final void setUserVisibleHint(boolean z) throws RemoteException {
                Parcel parcelZza = zza();
                zzc.writeBoolean(parcelZza, z);
                zzb(24, parcelZza);
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final void startActivity(Intent intent) throws RemoteException {
                Parcel parcelZza = zza();
                zzc.zza(parcelZza, intent);
                zzb(25, parcelZza);
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final void startActivityForResult(Intent intent, int i) throws RemoteException {
                Parcel parcelZza = zza();
                zzc.zza(parcelZza, intent);
                parcelZza.writeInt(i);
                zzb(26, parcelZza);
            }

            @Override // com.google.android.gms.dynamic.IFragmentWrapper
            public final void zzb(IObjectWrapper iObjectWrapper) throws RemoteException {
                Parcel parcelZza = zza();
                zzc.zza(parcelZza, iObjectWrapper);
                zzb(27, parcelZza);
            }
        }

        public static IFragmentWrapper asInterface(IBinder iBinder) {
            if (iBinder == null) {
                return null;
            }
            IInterface iInterfaceQueryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.dynamic.IFragmentWrapper");
            if (iInterfaceQueryLocalInterface instanceof IFragmentWrapper) {
                return (IFragmentWrapper) iInterfaceQueryLocalInterface;
            }
            return new zza(iBinder);
        }

        @Override // com.google.android.gms.internal.common.zzb
        protected final boolean zza(int i, Parcel parcel, Parcel parcel2, int i2) throws RemoteException {
            switch (i) {
                case 2:
                    IObjectWrapper iObjectWrapperZzae = zzae();
                    parcel2.writeNoException();
                    zzc.zza(parcel2, iObjectWrapperZzae);
                    return true;
                case 3:
                    Bundle arguments = getArguments();
                    parcel2.writeNoException();
                    zzc.zzb(parcel2, arguments);
                    return true;
                case 4:
                    int id = getId();
                    parcel2.writeNoException();
                    parcel2.writeInt(id);
                    return true;
                case 5:
                    IFragmentWrapper iFragmentWrapperZzaf = zzaf();
                    parcel2.writeNoException();
                    zzc.zza(parcel2, iFragmentWrapperZzaf);
                    return true;
                case 6:
                    IObjectWrapper iObjectWrapperZzag = zzag();
                    parcel2.writeNoException();
                    zzc.zza(parcel2, iObjectWrapperZzag);
                    return true;
                case 7:
                    boolean retainInstance = getRetainInstance();
                    parcel2.writeNoException();
                    zzc.writeBoolean(parcel2, retainInstance);
                    return true;
                case 8:
                    String tag = getTag();
                    parcel2.writeNoException();
                    parcel2.writeString(tag);
                    return true;
                case 9:
                    IFragmentWrapper iFragmentWrapperZzah = zzah();
                    parcel2.writeNoException();
                    zzc.zza(parcel2, iFragmentWrapperZzah);
                    return true;
                case 10:
                    int targetRequestCode = getTargetRequestCode();
                    parcel2.writeNoException();
                    parcel2.writeInt(targetRequestCode);
                    return true;
                case 11:
                    boolean userVisibleHint = getUserVisibleHint();
                    parcel2.writeNoException();
                    zzc.writeBoolean(parcel2, userVisibleHint);
                    return true;
                case 12:
                    IObjectWrapper iObjectWrapperZzai = zzai();
                    parcel2.writeNoException();
                    zzc.zza(parcel2, iObjectWrapperZzai);
                    return true;
                case 13:
                    boolean zIsAdded = isAdded();
                    parcel2.writeNoException();
                    zzc.writeBoolean(parcel2, zIsAdded);
                    return true;
                case 14:
                    boolean zIsDetached = isDetached();
                    parcel2.writeNoException();
                    zzc.writeBoolean(parcel2, zIsDetached);
                    return true;
                case 15:
                    boolean zIsHidden = isHidden();
                    parcel2.writeNoException();
                    zzc.writeBoolean(parcel2, zIsHidden);
                    return true;
                case 16:
                    boolean zIsInLayout = isInLayout();
                    parcel2.writeNoException();
                    zzc.writeBoolean(parcel2, zIsInLayout);
                    return true;
                case 17:
                    boolean zIsRemoving = isRemoving();
                    parcel2.writeNoException();
                    zzc.writeBoolean(parcel2, zIsRemoving);
                    return true;
                case 18:
                    boolean zIsResumed = isResumed();
                    parcel2.writeNoException();
                    zzc.writeBoolean(parcel2, zIsResumed);
                    return true;
                case 19:
                    boolean zIsVisible = isVisible();
                    parcel2.writeNoException();
                    zzc.writeBoolean(parcel2, zIsVisible);
                    return true;
                case 20:
                    zza(IObjectWrapper.Stub.asInterface(parcel.readStrongBinder()));
                    parcel2.writeNoException();
                    return true;
                case 21:
                    setHasOptionsMenu(zzc.zza(parcel));
                    parcel2.writeNoException();
                    return true;
                case 22:
                    setMenuVisibility(zzc.zza(parcel));
                    parcel2.writeNoException();
                    return true;
                case 23:
                    setRetainInstance(zzc.zza(parcel));
                    parcel2.writeNoException();
                    return true;
                case 24:
                    setUserVisibleHint(zzc.zza(parcel));
                    parcel2.writeNoException();
                    return true;
                case 25:
                    startActivity((Intent) zzc.zza(parcel, Intent.CREATOR));
                    parcel2.writeNoException();
                    return true;
                case 26:
                    startActivityForResult((Intent) zzc.zza(parcel, Intent.CREATOR), parcel.readInt());
                    parcel2.writeNoException();
                    return true;
                case 27:
                    zzb(IObjectWrapper.Stub.asInterface(parcel.readStrongBinder()));
                    parcel2.writeNoException();
                    return true;
                default:
                    return false;
            }
        }
    }

    Bundle getArguments() throws RemoteException;

    int getId() throws RemoteException;

    boolean getRetainInstance() throws RemoteException;

    String getTag() throws RemoteException;

    int getTargetRequestCode() throws RemoteException;

    boolean getUserVisibleHint() throws RemoteException;

    boolean isAdded() throws RemoteException;

    boolean isDetached() throws RemoteException;

    boolean isHidden() throws RemoteException;

    boolean isInLayout() throws RemoteException;

    boolean isRemoving() throws RemoteException;

    boolean isResumed() throws RemoteException;

    boolean isVisible() throws RemoteException;

    void setHasOptionsMenu(boolean z) throws RemoteException;

    void setMenuVisibility(boolean z) throws RemoteException;

    void setRetainInstance(boolean z) throws RemoteException;

    void setUserVisibleHint(boolean z) throws RemoteException;

    void startActivity(Intent intent) throws RemoteException;

    void startActivityForResult(Intent intent, int i) throws RemoteException;

    void zza(IObjectWrapper iObjectWrapper) throws RemoteException;

    IObjectWrapper zzae() throws RemoteException;

    IFragmentWrapper zzaf() throws RemoteException;

    IObjectWrapper zzag() throws RemoteException;

    IFragmentWrapper zzah() throws RemoteException;

    IObjectWrapper zzai() throws RemoteException;

    void zzb(IObjectWrapper iObjectWrapper) throws RemoteException;
}

