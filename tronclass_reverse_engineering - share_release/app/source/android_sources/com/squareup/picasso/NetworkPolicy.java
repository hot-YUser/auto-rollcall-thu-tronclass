package com.squareup.picasso;
public enum NetworkPolicy {
    NO_CACHE(1),
    NO_STORE(2),
    OFFLINE(4);

    final int index;

    public static boolean shouldReadFromDiskCache(int i) {
        return (i & NO_CACHE.index) == 0;
    }

    public static boolean shouldWriteToDiskCache(int i) {
        return (i & NO_STORE.index) == 0;
    }

    public static boolean isOfflineOnly(int i) {
        return (i & OFFLINE.index) != 0;
    }

    NetworkPolicy(int i) {
        this.index = i;
    }
}

