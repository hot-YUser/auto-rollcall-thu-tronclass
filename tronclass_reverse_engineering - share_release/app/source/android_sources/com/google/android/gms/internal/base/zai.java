package com.google.android.gms.internal.base;

import android.graphics.drawable.Drawable;
final class zai extends Drawable.ConstantState {
    int mChangingConfigurations;
    int zanw;

    zai(zai zaiVar) {
        if (zaiVar != null) {
            this.mChangingConfigurations = zaiVar.mChangingConfigurations;
            this.zanw = zaiVar.zanw;
        }
    }

    @Override // android.graphics.drawable.Drawable.ConstantState
    public final Drawable newDrawable() {
        return new zae(this);
    }

    @Override // android.graphics.drawable.Drawable.ConstantState
    public final int getChangingConfigurations() {
        return this.mChangingConfigurations;
    }
}

