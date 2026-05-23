package com.google.android.gms.common.api;

import com.google.android.gms.common.internal.Preconditions;
public class BooleanResult implements Result {
    private final Status mStatus;
    private final boolean zabg;

    public BooleanResult(Status status, boolean z) {
        this.mStatus = (Status) Preconditions.checkNotNull(status, "Status must not be null");
        this.zabg = z;
    }

    @Override // com.google.android.gms.common.api.Result
    public Status getStatus() {
        return this.mStatus;
    }

    public boolean getValue() {
        return this.zabg;
    }

    public final int hashCode() {
        return ((this.mStatus.hashCode() + 527) * 31) + (this.zabg ? 1 : 0);
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof BooleanResult)) {
            return false;
        }
        BooleanResult booleanResult = (BooleanResult) obj;
        return this.mStatus.equals(booleanResult.mStatus) && this.zabg == booleanResult.zabg;
    }
}

