package com.google.android.gms.auth.api.signin.internal;
public class HashAccumulator {
    private static int zaah = 31;
    private int zaai = 1;

    public HashAccumulator addObject(Object obj) {
        this.zaai = (zaah * this.zaai) + (obj == null ? 0 : obj.hashCode());
        return this;
    }

    public final HashAccumulator zaa(boolean z) {
        this.zaai = (zaah * this.zaai) + (z ? 1 : 0);
        return this;
    }

    public int hash() {
        return this.zaai;
    }
}

