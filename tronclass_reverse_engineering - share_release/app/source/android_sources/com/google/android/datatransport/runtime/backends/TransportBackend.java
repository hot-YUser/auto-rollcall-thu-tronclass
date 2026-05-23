package com.google.android.datatransport.runtime.backends;

import com.google.android.datatransport.runtime.EventInternal;
public interface TransportBackend {
    EventInternal decorate(EventInternal eventInternal);

    BackendResponse send(BackendRequest backendRequest);
}

