package com.google.android.gms.internal.location;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.ClientIdentity;
import com.google.android.gms.common.internal.safeparcel.SafeParcelReader;
import com.google.android.gms.location.LocationRequest;
import java.util.List;
public final class zzbe implements Parcelable.Creator<zzbd> {
    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ zzbd createFromParcel(Parcel parcel) {
        int iValidateObjectHeader = SafeParcelReader.validateObjectHeader(parcel);
        List<ClientIdentity> listCreateTypedList = zzbd.zzcd;
        LocationRequest locationRequest = null;
        String strCreateString = null;
        String strCreateString2 = null;
        boolean z = false;
        boolean z2 = false;
        boolean z3 = false;
        while (parcel.dataPosition() < iValidateObjectHeader) {
            int header = SafeParcelReader.readHeader(parcel);
            int fieldId = SafeParcelReader.getFieldId(header);
            if (fieldId != 1) {
                switch (fieldId) {
                    case 5:
                        listCreateTypedList = SafeParcelReader.createTypedList(parcel, header, ClientIdentity.CREATOR);
                        break;
                    case 6:
                        strCreateString = SafeParcelReader.createString(parcel, header);
                        break;
                    case 7:
                        z = SafeParcelReader.readBoolean(parcel, header);
                        break;
                    case 8:
                        z2 = SafeParcelReader.readBoolean(parcel, header);
                        break;
                    case 9:
                        z3 = SafeParcelReader.readBoolean(parcel, header);
                        break;
                    case 10:
                        strCreateString2 = SafeParcelReader.createString(parcel, header);
                        break;
                    default:
                        SafeParcelReader.skipUnknownField(parcel, header);
                        break;
                }
            } else {
                locationRequest = (LocationRequest) SafeParcelReader.createParcelable(parcel, header, LocationRequest.CREATOR);
            }
        }
        SafeParcelReader.ensureAtEnd(parcel, iValidateObjectHeader);
        return new zzbd(locationRequest, listCreateTypedList, strCreateString, z, z2, z3, strCreateString2);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ zzbd[] newArray(int i) {
        return new zzbd[i];
    }
}

