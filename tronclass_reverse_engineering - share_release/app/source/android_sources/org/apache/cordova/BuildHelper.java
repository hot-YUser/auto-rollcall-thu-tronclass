package org.apache.cordova;

import android.content.Context;
public class BuildHelper {
    private static String TAG = "BuildHelper";

    public static Object getBuildConfigValue(Context context, String str) {
        try {
            return Class.forName(context.getPackageName() + ".BuildConfig").getField(str).get(null);
        } catch (ClassNotFoundException e) {
            LOG.d(TAG, "Unable to get the BuildConfig, is this built with ANT?");
            e.printStackTrace();
            return null;
        } catch (IllegalAccessException e2) {
            LOG.d(TAG, "Illegal Access Exception: Let's print a stack trace.");
            e2.printStackTrace();
            return null;
        } catch (NoSuchFieldException unused) {
            LOG.d(TAG, str + " is not a valid field. Check your build.gradle");
            return null;
        }
    }
}

