package com.google.android.datatransport.runtime.backends;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
public class TransportBackendDiscovery extends Service {
    @Override // android.app.Service
    public IBinder onBind(Intent intent) {
        return null;
    }
}

