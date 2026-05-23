package androidx.camera.camera2.internal.compat.workaround;

import androidx.camera.camera2.internal.SynchronizedCaptureSession;
import androidx.camera.camera2.internal.compat.quirk.CaptureSessionOnClosedNotCalledQuirk;
import androidx.camera.core.impl.Quirks;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
public class ForceCloseCaptureSession {
    private final CaptureSessionOnClosedNotCalledQuirk mCaptureSessionOnClosedNotCalledQuirk;

    @FunctionalInterface
    public interface OnConfigured {
        void run(SynchronizedCaptureSession synchronizedCaptureSession);
    }

    public ForceCloseCaptureSession(Quirks quirks) {
        this.mCaptureSessionOnClosedNotCalledQuirk = (CaptureSessionOnClosedNotCalledQuirk) quirks.get(CaptureSessionOnClosedNotCalledQuirk.class);
    }

    public boolean shouldForceClose() {
        return this.mCaptureSessionOnClosedNotCalledQuirk != null;
    }

    public void onSessionConfigured(SynchronizedCaptureSession synchronizedCaptureSession, List<SynchronizedCaptureSession> list, List<SynchronizedCaptureSession> list2, OnConfigured onConfigured) {
        SynchronizedCaptureSession next;
        SynchronizedCaptureSession next2;
        if (shouldForceClose()) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            Iterator<SynchronizedCaptureSession> it = list.iterator();
            while (it.hasNext() && (next2 = it.next()) != synchronizedCaptureSession) {
                linkedHashSet.add(next2);
            }
            forceOnConfigureFailed(linkedHashSet);
        }
        onConfigured.run(synchronizedCaptureSession);
        if (shouldForceClose()) {
            LinkedHashSet linkedHashSet2 = new LinkedHashSet();
            Iterator<SynchronizedCaptureSession> it2 = list2.iterator();
            while (it2.hasNext() && (next = it2.next()) != synchronizedCaptureSession) {
                linkedHashSet2.add(next);
            }
            forceOnClosed(linkedHashSet2);
        }
    }

    private void forceOnConfigureFailed(Set<SynchronizedCaptureSession> set) {
        for (SynchronizedCaptureSession synchronizedCaptureSession : set) {
            synchronizedCaptureSession.getStateCallback().onConfigureFailed(synchronizedCaptureSession);
        }
    }

    private void forceOnClosed(Set<SynchronizedCaptureSession> set) {
        for (SynchronizedCaptureSession synchronizedCaptureSession : set) {
            synchronizedCaptureSession.getStateCallback().onClosed(synchronizedCaptureSession);
        }
    }
}

