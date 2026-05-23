package com.google.android.gms.common.internal;

import android.accounts.Account;
import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.internal.IAccountAccessor;
import com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelWriter;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import javax.annotation.Nullable;
public class AuthAccountRequest extends AbstractSafeParcelable {
    public static final Parcelable.Creator<AuthAccountRequest> CREATOR = new zaa();
    private final int zalf;

    @Deprecated
    private final IBinder zanx;
    private final Scope[] zany;
    private Integer zanz;
    private Integer zaoa;
    private Account zax;

    AuthAccountRequest(int i, IBinder iBinder, Scope[] scopeArr, Integer num, Integer num2, Account account) {
        this.zalf = i;
        this.zanx = iBinder;
        this.zany = scopeArr;
        this.zanz = num;
        this.zaoa = num2;
        this.zax = account;
    }

    @Deprecated
    public AuthAccountRequest(IAccountAccessor iAccountAccessor, Set<Scope> set) {
        this(3, iAccountAccessor.asBinder(), (Scope[]) set.toArray(new Scope[set.size()]), null, null, null);
    }

    public AuthAccountRequest(Account account, Set<Scope> set) {
        this(3, null, (Scope[]) set.toArray(new Scope[set.size()]), null, null, (Account) Preconditions.checkNotNull(account));
    }

    public Account getAccount() {
        Account account = this.zax;
        if (account != null) {
            return account;
        }
        IBinder iBinder = this.zanx;
        if (iBinder != null) {
            return AccountAccessor.getAccountBinderSafe(IAccountAccessor.Stub.asInterface(iBinder));
        }
        return null;
    }

    public Set<Scope> getScopes() {
        return new HashSet(Arrays.asList(this.zany));
    }

    public AuthAccountRequest setOauthPolicy(@Nullable Integer num) {
        this.zanz = num;
        return this;
    }

    @Nullable
    public Integer getOauthPolicy() {
        return this.zanz;
    }

    public AuthAccountRequest setPolicyAction(@Nullable Integer num) {
        this.zaoa = num;
        return this;
    }

    @Nullable
    public Integer getPolicyAction() {
        return this.zaoa;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i) {
        int iBeginObjectHeader = SafeParcelWriter.beginObjectHeader(parcel);
        SafeParcelWriter.writeInt(parcel, 1, this.zalf);
        SafeParcelWriter.writeIBinder(parcel, 2, this.zanx, false);
        SafeParcelWriter.writeTypedArray(parcel, 3, this.zany, i, false);
        SafeParcelWriter.writeIntegerObject(parcel, 4, this.zanz, false);
        SafeParcelWriter.writeIntegerObject(parcel, 5, this.zaoa, false);
        SafeParcelWriter.writeParcelable(parcel, 6, this.zax, i, false);
        SafeParcelWriter.finishObjectHeader(parcel, iBeginObjectHeader);
    }
}

