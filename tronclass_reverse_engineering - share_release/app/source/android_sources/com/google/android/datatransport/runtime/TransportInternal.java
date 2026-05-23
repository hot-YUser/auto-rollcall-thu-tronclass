package com.google.android.datatransport.runtime;

import com.google.android.datatransport.TransportScheduleCallback;
interface TransportInternal {
    void send(SendRequest sendRequest, TransportScheduleCallback transportScheduleCallback);
}

