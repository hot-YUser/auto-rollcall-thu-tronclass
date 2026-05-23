package com.android.volley.toolbox;

import android.os.Handler;
import android.os.Looper;
import com.android.volley.Cache;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.Response;
public class ClearCacheRequest extends Request<Object> {
    private final Cache mCache;
    private final Runnable mCallback;

    @Override // com.android.volley.Request
    protected void deliverResponse(Object obj) {
    }

    @Override // com.android.volley.Request
    protected Response<Object> parseNetworkResponse(NetworkResponse networkResponse) {
        return null;
    }

    public ClearCacheRequest(Cache cache, Runnable runnable) {
        super(0, null, null);
        this.mCache = cache;
        this.mCallback = runnable;
    }

    @Override // com.android.volley.Request
    public boolean isCanceled() {
        this.mCache.clear();
        if (this.mCallback == null) {
            return true;
        }
        new Handler(Looper.getMainLooper()).postAtFrontOfQueue(this.mCallback);
        return true;
    }

    @Override // com.android.volley.Request
    public Request.Priority getPriority() {
        return Request.Priority.IMMEDIATE;
    }
}

