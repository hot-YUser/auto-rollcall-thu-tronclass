package androidx.work.impl.foreground;

import androidx.work.ForegroundInfo;
public interface ForegroundProcessor {
    void startForeground(String workSpecId, ForegroundInfo foregroundInfo);

    void stopForeground(String workSpecId);
}

