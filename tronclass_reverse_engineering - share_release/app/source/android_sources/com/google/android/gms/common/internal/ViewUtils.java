package com.google.android.gms.common.internal;

import android.content.Context;
import android.content.res.Resources;
import android.util.AttributeSet;
import android.util.Log;
import android.util.TypedValue;
public class ViewUtils {
    private ViewUtils() {
    }

    public static String getXmlAttributeString(String str, String str2, Context context, AttributeSet attributeSet, boolean z, boolean z2, String str3) {
        String attributeValue = attributeSet == null ? null : attributeSet.getAttributeValue(str, str2);
        if (attributeValue != null && attributeValue.startsWith("@string/") && z) {
            String strSubstring = attributeValue.substring(8);
            String packageName = context.getPackageName();
            TypedValue typedValue = new TypedValue();
            try {
                context.getResources().getValue(new StringBuilder(String.valueOf(packageName).length() + 8 + String.valueOf(strSubstring).length()).append(packageName).append(":string/").append(strSubstring).toString(), typedValue, true);
            } catch (Resources.NotFoundException unused) {
                Log.w(str3, new StringBuilder(String.valueOf(str2).length() + 30 + String.valueOf(attributeValue).length()).append("Could not find resource for ").append(str2).append(": ").append(attributeValue).toString());
            }
            if (typedValue.string != null) {
                attributeValue = typedValue.string.toString();
            } else {
                String strValueOf = String.valueOf(typedValue);
                Log.w(str3, new StringBuilder(String.valueOf(str2).length() + 28 + String.valueOf(strValueOf).length()).append("Resource ").append(str2).append(" was not a string: ").append(strValueOf).toString());
            }
        }
        if (z2 && attributeValue == null) {
            Log.w(str3, new StringBuilder(String.valueOf(str2).length() + 33).append("Required XML attribute \"").append(str2).append("\" missing").toString());
        }
        return attributeValue;
    }
}

