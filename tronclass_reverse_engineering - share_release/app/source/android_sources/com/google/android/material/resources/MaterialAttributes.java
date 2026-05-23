package com.google.android.material.resources;

import android.content.Context;
import android.util.TypedValue;
import android.view.View;
import com.google.android.material.R;
public class MaterialAttributes {
    public static TypedValue resolve(Context context, int i) {
        TypedValue typedValue = new TypedValue();
        if (context.getTheme().resolveAttribute(i, typedValue, true)) {
            return typedValue;
        }
        return null;
    }

    public static int resolveOrThrow(Context context, int i, String str) {
        TypedValue typedValueResolve = resolve(context, i);
        if (typedValueResolve == null) {
            throw new IllegalArgumentException(String.format("%1$s requires a value for the %2$s attribute to be set in your app theme. You can either set the attribute in your theme or update your theme to inherit from Theme.MaterialComponents (or a descendant).", str, context.getResources().getResourceName(i)));
        }
        return typedValueResolve.data;
    }

    public static int resolveOrThrow(View view, int i) {
        return resolveOrThrow(view.getContext(), i, view.getClass().getCanonicalName());
    }

    public static boolean resolveBooleanOrThrow(Context context, int i, String str) {
        return resolveOrThrow(context, i, str) != 0;
    }

    public static boolean resolveBoolean(Context context, int i, boolean z) {
        TypedValue typedValueResolve = resolve(context, i);
        return (typedValueResolve == null || typedValueResolve.type != 18) ? z : typedValueResolve.data != 0;
    }

    public static int resolveMinimumAccessibleTouchTarget(Context context) {
        return resolveDimension(context, R.attr.minTouchTargetSize, R.dimen.mtrl_min_touch_target_size);
    }

    public static int resolveDimension(Context context, int i, int i2) {
        float dimension;
        TypedValue typedValueResolve = resolve(context, i);
        if (typedValueResolve == null || typedValueResolve.type != 5) {
            dimension = context.getResources().getDimension(i2);
        } else {
            dimension = typedValueResolve.getDimension(context.getResources().getDisplayMetrics());
        }
        return (int) dimension;
    }
}

