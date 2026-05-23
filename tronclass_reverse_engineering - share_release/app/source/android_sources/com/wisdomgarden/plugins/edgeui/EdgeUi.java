package com.wisdomgarden.plugins.edgeui;

import android.graphics.Color;
import android.os.Build;
import android.util.Log;
import android.view.View;
import android.view.Window;
import android.view.WindowInsetsController;
public class EdgeUi {
    private static final String TAG = "EdgeUI";
    private final View decorView;
    private final Window uiWindow;

    public EdgeUi(Window window, View view) {
        this.uiWindow = window;
        this.decorView = view;
    }

    private int parseColorSafe(String str) {
        try {
            return Color.parseColor(str);
        } catch (Exception unused) {
            return -1;
        }
    }

    public boolean setEdgeUiStyle(String str) {
        if (Build.VERSION.SDK_INT < 30) {
            Log.w(TAG, "Android version not supported");
            return true;
        }
        int colorSafe = parseColorSafe(str);
        try {
            WindowInsetsController windowInsetsController = this.decorView.getWindowInsetsController();
            if (windowInsetsController == null) {
                Log.e(TAG, "WindowInsetsController is null");
                return false;
            }
            if (Build.VERSION.SDK_INT < 35) {
                this.uiWindow.setStatusBarColor(colorSafe);
            }
            this.decorView.setBackgroundColor(colorSafe);
            if (colorSafe == -1) {
                Log.i(TAG, "set with light");
                windowInsetsController.setSystemBarsAppearance(8, 8);
            } else {
                Log.i(TAG, "set with dark");
                windowInsetsController.setSystemBarsAppearance(0, 8);
            }
            return true;
        } catch (Exception e) {
            Log.e(TAG, "Failed to set Edge UI style: " + e.getMessage(), e);
            return false;
        }
    }
}

