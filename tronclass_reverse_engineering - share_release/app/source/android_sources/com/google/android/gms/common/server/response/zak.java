package com.google.android.gms.common.server.response;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.internal.Preconditions;
import com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelWriter;
import com.google.android.gms.common.server.response.FastJsonResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
public final class zak extends AbstractSafeParcelable {
    public static final Parcelable.Creator<zak> CREATOR = new zan();
    private final int zalf;
    private final HashMap<String, Map<String, FastJsonResponse.Field<?, ?>>> zaqv;
    private final ArrayList<zal> zaqw;
    private final String zaqx;

    zak(int i, ArrayList<zal> arrayList, String str) {
        this.zalf = i;
        this.zaqw = null;
        HashMap<String, Map<String, FastJsonResponse.Field<?, ?>>> map = new HashMap<>();
        int size = arrayList.size();
        for (int i2 = 0; i2 < size; i2++) {
            zal zalVar = arrayList.get(i2);
            String str2 = zalVar.className;
            HashMap map2 = new HashMap();
            int size2 = zalVar.zaqy.size();
            for (int i3 = 0; i3 < size2; i3++) {
                zam zamVar = zalVar.zaqy.get(i3);
                map2.put(zamVar.zaqz, zamVar.zara);
            }
            map.put(str2, map2);
        }
        this.zaqv = map;
        this.zaqx = (String) Preconditions.checkNotNull(str);
        zacr();
    }

    public final void zacr() {
        Iterator<String> it = this.zaqv.keySet().iterator();
        while (it.hasNext()) {
            Map<String, FastJsonResponse.Field<?, ?>> map = this.zaqv.get(it.next());
            Iterator<String> it2 = map.keySet().iterator();
            while (it2.hasNext()) {
                map.get(it2.next()).zaa(this);
            }
        }
    }

    public final void zacs() {
        for (String str : this.zaqv.keySet()) {
            Map<String, FastJsonResponse.Field<?, ?>> map = this.zaqv.get(str);
            HashMap map2 = new HashMap();
            for (String str2 : map.keySet()) {
                map2.put(str2, map.get(str2).zacl());
            }
            this.zaqv.put(str, map2);
        }
    }

    public zak(Class<? extends FastJsonResponse> cls) {
        this.zalf = 1;
        this.zaqw = null;
        this.zaqv = new HashMap<>();
        this.zaqx = cls.getCanonicalName();
    }

    public final void zaa(Class<? extends FastJsonResponse> cls, Map<String, FastJsonResponse.Field<?, ?>> map) {
        this.zaqv.put(cls.getCanonicalName(), map);
    }

    public final Map<String, FastJsonResponse.Field<?, ?>> zai(String str) {
        return this.zaqv.get(str);
    }

    public final boolean zaa(Class<? extends FastJsonResponse> cls) {
        return this.zaqv.containsKey(cls.getCanonicalName());
    }

    public final String zact() {
        return this.zaqx;
    }

    public final String toString() {
        StringBuilder sb = new StringBuilder();
        for (String str : this.zaqv.keySet()) {
            sb.append(str).append(":\n");
            Map<String, FastJsonResponse.Field<?, ?>> map = this.zaqv.get(str);
            for (String str2 : map.keySet()) {
                sb.append("  ").append(str2).append(": ");
                sb.append(map.get(str2));
            }
        }
        return sb.toString();
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i) {
        int iBeginObjectHeader = SafeParcelWriter.beginObjectHeader(parcel);
        SafeParcelWriter.writeInt(parcel, 1, this.zalf);
        ArrayList arrayList = new ArrayList();
        for (String str : this.zaqv.keySet()) {
            arrayList.add(new zal(str, this.zaqv.get(str)));
        }
        SafeParcelWriter.writeTypedList(parcel, 2, arrayList, false);
        SafeParcelWriter.writeString(parcel, 3, this.zaqx, false);
        SafeParcelWriter.finishObjectHeader(parcel, iBeginObjectHeader);
    }
}

