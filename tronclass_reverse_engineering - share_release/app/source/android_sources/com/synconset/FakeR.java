package com.synconset;

import android.app.Activity;
import android.content.Context;
public class FakeR {
    private Context context;
    private String packageName;

    public FakeR(Activity activity) {
        Context applicationContext = activity.getApplicationContext();
        this.context = applicationContext;
        this.packageName = applicationContext.getPackageName();
    }

    public FakeR(Context context) {
        this.context = context;
        this.packageName = context.getPackageName();
    }

    public int getId(String str, String str2) {
        return this.context.getResources().getIdentifier(str2, str, this.packageName);
    }

    public static int getId(Context context, String str, String str2) {
        return context.getResources().getIdentifier(str2, str, context.getPackageName());
    }
}

