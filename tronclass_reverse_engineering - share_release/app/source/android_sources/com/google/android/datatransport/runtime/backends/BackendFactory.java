package com.google.android.datatransport.runtime.backends;
public interface BackendFactory {
    TransportBackend create(CreationContext creationContext);
}

