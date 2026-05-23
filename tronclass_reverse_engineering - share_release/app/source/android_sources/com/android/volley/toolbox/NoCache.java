package com.android.volley.toolbox;

import com.android.volley.Cache;
public class NoCache implements Cache {
    @Override // com.android.volley.Cache
    public void clear() {
    }

    @Override // com.android.volley.Cache
    public Cache.Entry get(String str) {
        return null;
    }

    @Override // com.android.volley.Cache
    public void initialize() {
    }

    @Override // com.android.volley.Cache
    public void invalidate(String str, boolean z) {
    }

    @Override // com.android.volley.Cache
    public void put(String str, Cache.Entry entry) {
    }

    @Override // com.android.volley.Cache
    public void remove(String str) {
    }
}

