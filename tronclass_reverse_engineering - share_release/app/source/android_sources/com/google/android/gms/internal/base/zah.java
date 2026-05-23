package com.google.android.gms.internal.base;

import android.graphics.drawable.Drawable;
final class zah extends Drawable.ConstantState {
    private zah() {
    }

    @Override // android.graphics.drawable.Drawable.ConstantState
    public final int getChangingConfigurations() {
        return 0;
    }

    @Override // android.graphics.drawable.Drawable.ConstantState
    public final Drawable newDrawable() {
        return zag.zanu;
    }
}

