package com.google.android.gms.internal.location;

import android.app.PendingIntent;
import android.location.Location;
import android.os.IBinder;
import android.os.Parcel;
import android.os.RemoteException;
import com.google.android.gms.common.api.internal.IStatusCallback;
import com.google.android.gms.location.ActivityTransitionRequest;
import com.google.android.gms.location.GeofencingRequest;
import com.google.android.gms.location.LocationAvailability;
import com.google.android.gms.location.LocationSettingsRequest;
public final class zzap extends zza implements zzao {
    zzap(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.location.internal.IGoogleLocationManagerService");
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final Location zza(String str) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        parcelObtainAndWriteInterfaceToken.writeString(str);
        Parcel parcelTransactAndReadException = transactAndReadException(21, parcelObtainAndWriteInterfaceToken);
        Location location = (Location) zzc.zza(parcelTransactAndReadException, Location.CREATOR);
        parcelTransactAndReadException.recycle();
        return location;
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final void zza(long j, boolean z, PendingIntent pendingIntent) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        parcelObtainAndWriteInterfaceToken.writeLong(j);
        zzc.zza(parcelObtainAndWriteInterfaceToken, true);
        zzc.zza(parcelObtainAndWriteInterfaceToken, pendingIntent);
        transactAndReadExceptionReturnVoid(5, parcelObtainAndWriteInterfaceToken);
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final void zza(PendingIntent pendingIntent, IStatusCallback iStatusCallback) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        zzc.zza(parcelObtainAndWriteInterfaceToken, pendingIntent);
        zzc.zza(parcelObtainAndWriteInterfaceToken, iStatusCallback);
        transactAndReadExceptionReturnVoid(73, parcelObtainAndWriteInterfaceToken);
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final void zza(Location location) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        zzc.zza(parcelObtainAndWriteInterfaceToken, location);
        transactAndReadExceptionReturnVoid(13, parcelObtainAndWriteInterfaceToken);
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final void zza(zzaj zzajVar) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        zzc.zza(parcelObtainAndWriteInterfaceToken, zzajVar);
        transactAndReadExceptionReturnVoid(67, parcelObtainAndWriteInterfaceToken);
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final void zza(zzbf zzbfVar) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        zzc.zza(parcelObtainAndWriteInterfaceToken, zzbfVar);
        transactAndReadExceptionReturnVoid(59, parcelObtainAndWriteInterfaceToken);
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final void zza(zzo zzoVar) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        zzc.zza(parcelObtainAndWriteInterfaceToken, zzoVar);
        transactAndReadExceptionReturnVoid(75, parcelObtainAndWriteInterfaceToken);
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final void zza(ActivityTransitionRequest activityTransitionRequest, PendingIntent pendingIntent, IStatusCallback iStatusCallback) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        zzc.zza(parcelObtainAndWriteInterfaceToken, activityTransitionRequest);
        zzc.zza(parcelObtainAndWriteInterfaceToken, pendingIntent);
        zzc.zza(parcelObtainAndWriteInterfaceToken, iStatusCallback);
        transactAndReadExceptionReturnVoid(72, parcelObtainAndWriteInterfaceToken);
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final void zza(GeofencingRequest geofencingRequest, PendingIntent pendingIntent, zzam zzamVar) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        zzc.zza(parcelObtainAndWriteInterfaceToken, geofencingRequest);
        zzc.zza(parcelObtainAndWriteInterfaceToken, pendingIntent);
        zzc.zza(parcelObtainAndWriteInterfaceToken, zzamVar);
        transactAndReadExceptionReturnVoid(57, parcelObtainAndWriteInterfaceToken);
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final void zza(LocationSettingsRequest locationSettingsRequest, zzaq zzaqVar, String str) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        zzc.zza(parcelObtainAndWriteInterfaceToken, locationSettingsRequest);
        zzc.zza(parcelObtainAndWriteInterfaceToken, zzaqVar);
        parcelObtainAndWriteInterfaceToken.writeString(str);
        transactAndReadExceptionReturnVoid(63, parcelObtainAndWriteInterfaceToken);
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final void zza(com.google.android.gms.location.zzal zzalVar, zzam zzamVar) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        zzc.zza(parcelObtainAndWriteInterfaceToken, zzalVar);
        zzc.zza(parcelObtainAndWriteInterfaceToken, zzamVar);
        transactAndReadExceptionReturnVoid(74, parcelObtainAndWriteInterfaceToken);
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final void zza(boolean z) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        zzc.zza(parcelObtainAndWriteInterfaceToken, z);
        transactAndReadExceptionReturnVoid(12, parcelObtainAndWriteInterfaceToken);
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final LocationAvailability zzb(String str) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        parcelObtainAndWriteInterfaceToken.writeString(str);
        Parcel parcelTransactAndReadException = transactAndReadException(34, parcelObtainAndWriteInterfaceToken);
        LocationAvailability locationAvailability = (LocationAvailability) zzc.zza(parcelTransactAndReadException, LocationAvailability.CREATOR);
        parcelTransactAndReadException.recycle();
        return locationAvailability;
    }

    @Override // com.google.android.gms.internal.location.zzao
    public final void zzb(PendingIntent pendingIntent) throws RemoteException {
        Parcel parcelObtainAndWriteInterfaceToken = obtainAndWriteInterfaceToken();
        zzc.zza(parcelObtainAndWriteInterfaceToken, pendingIntent);
        transactAndReadExceptionReturnVoid(6, parcelObtainAndWriteInterfaceToken);
    }
}

