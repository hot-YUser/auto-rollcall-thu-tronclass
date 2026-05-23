package com.getcapacitor;

import android.content.Context;
import android.net.Uri;
import android.util.TypedValue;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
public class AndroidProtocolHandler {
    static final /* synthetic */ boolean $assertionsDisabled = false;
    private Context context;

    public AndroidProtocolHandler(Context context) {
        this.context = context;
    }

    public InputStream openAsset(String str) throws IOException {
        return this.context.getAssets().open(str, 2);
    }

    public InputStream openResource(Uri uri) {
        List<String> pathSegments = uri.getPathSegments();
        String str = pathSegments.get(pathSegments.size() - 2);
        String str2 = pathSegments.get(pathSegments.size() - 1).split("\\.")[0];
        try {
            if (this.context.getApplicationContext() != null) {
                this.context = this.context.getApplicationContext();
            }
            int fieldId = getFieldId(this.context, str, str2);
            if (getValueType(this.context, fieldId) == 3) {
                return this.context.getResources().openRawResource(fieldId);
            }
            Logger.error("Asset not of type string: " + uri);
            return null;
        } catch (ClassNotFoundException | IllegalAccessException | NoSuchFieldException e) {
            Logger.error("Unable to open resource URL: " + uri, e);
            return null;
        }
    }

    private static int getFieldId(Context context, String str, String str2) throws IllegalAccessException, NoSuchFieldException, ClassNotFoundException {
        return context.getClassLoader().loadClass(context.getPackageName() + ".R$" + str).getField(str2).getInt(null);
    }

    public InputStream openFile(String str) throws IOException {
        return new FileInputStream(new File(str.replace(Bridge.CAPACITOR_FILE_START, "")));
    }

    public InputStream openContentUrl(Uri uri) throws IOException {
        Integer numValueOf = Integer.valueOf(uri.getPort());
        String str = uri.getScheme() + "://" + uri.getHost();
        if (numValueOf.intValue() != -1) {
            str = str + ":" + numValueOf;
        }
        try {
            return this.context.getContentResolver().openInputStream(Uri.parse(uri.toString().replace(str + Bridge.CAPACITOR_CONTENT_START, "content:/")));
        } catch (SecurityException e) {
            Logger.error("Unable to open content URL: " + uri, e);
            return null;
        }
    }

    private static int getValueType(Context context, int i) {
        TypedValue typedValue = new TypedValue();
        context.getResources().getValue(i, typedValue, true);
        return typedValue.type;
    }
}

