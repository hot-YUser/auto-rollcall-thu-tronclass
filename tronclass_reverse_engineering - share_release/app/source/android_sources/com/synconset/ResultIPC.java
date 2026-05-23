package com.synconset;

import android.os.Bundle;
public class ResultIPC {
    private static ResultIPC instance;
    private Bundle largeData;
    private int sync = 0;

    public static synchronized ResultIPC get() {
        if (instance == null) {
            instance = new ResultIPC();
        }
        return instance;
    }

    public int setLargeData(Bundle bundle) {
        this.largeData = bundle;
        int i = this.sync + 1;
        this.sync = i;
        return i;
    }

    public Bundle getLargeData(int i) {
        if (i == this.sync) {
            return this.largeData;
        }
        return null;
    }
}

