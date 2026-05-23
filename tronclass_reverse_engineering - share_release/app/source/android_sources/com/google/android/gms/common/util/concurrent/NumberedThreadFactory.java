package com.google.android.gms.common.util.concurrent;

import com.google.android.gms.common.internal.Preconditions;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;
public class NumberedThreadFactory implements ThreadFactory {
    private final int priority;
    private final ThreadFactory zzhr;
    private final String zzhs;
    private final AtomicInteger zzht;

    public NumberedThreadFactory(String str) {
        this(str, 0);
    }

    private NumberedThreadFactory(String str, int i) {
        this.zzht = new AtomicInteger();
        this.zzhr = Executors.defaultThreadFactory();
        this.zzhs = (String) Preconditions.checkNotNull(str, "Name must not be null");
        this.priority = 0;
    }

    @Override // java.util.concurrent.ThreadFactory
    public Thread newThread(Runnable runnable) {
        Thread threadNewThread = this.zzhr.newThread(new zza(runnable, 0));
        String str = this.zzhs;
        threadNewThread.setName(new StringBuilder(String.valueOf(str).length() + 13).append(str).append("[").append(this.zzht.getAndIncrement()).append("]").toString());
        return threadNewThread;
    }
}

