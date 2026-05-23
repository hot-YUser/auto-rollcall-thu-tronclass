package com.getcapacitor.ui;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
public class Toast {
    public static void show(Context context, String str) {
        show(context, str, 1);
    }

    public static void show(final Context context, final String str, final int i) {
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: com.getcapacitor.ui.Toast.1
            @Override // java.lang.Runnable
            public void run() {
                android.widget.Toast.makeText(context, str, i).show();
            }
        });
    }
}

