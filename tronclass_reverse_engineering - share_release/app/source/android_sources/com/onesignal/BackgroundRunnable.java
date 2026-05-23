package com.onesignal;

import kotlin.Metadata;
@Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\b\u0010\u0018\u00002\u00020\u0001B\u0005¢\u0006\u0002\u0010\u0002J\b\u0010\u0003\u001a\u00020\u0004H\u0016¨\u0006\u0005"}, d2 = {"Lcom/onesignal/BackgroundRunnable;", "Ljava/lang/Runnable;", "()V", "run", "", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public class BackgroundRunnable implements Runnable {
    @Override // java.lang.Runnable
    public void run() {
        Thread.currentThread().setPriority(10);
    }
}

