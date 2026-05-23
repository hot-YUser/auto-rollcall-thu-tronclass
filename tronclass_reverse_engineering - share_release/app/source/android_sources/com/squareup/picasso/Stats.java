package com.squareup.picasso;

import android.graphics.Bitmap;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import android.os.Message;
class Stats {
    private static final int BITMAP_DECODE_FINISHED = 2;
    private static final int BITMAP_TRANSFORMED_FINISHED = 3;
    private static final int CACHE_HIT = 0;
    private static final int CACHE_MISS = 1;
    private static final int DOWNLOAD_FINISHED = 4;
    private static final String STATS_THREAD_NAME = "Picasso-Stats";
    long averageDownloadSize;
    long averageOriginalBitmapSize;
    long averageTransformedBitmapSize;
    final Cache cache;
    long cacheHits;
    long cacheMisses;
    int downloadCount;
    final Handler handler;
    int originalBitmapCount;
    final HandlerThread statsThread;
    long totalDownloadSize;
    long totalOriginalBitmapSize;
    long totalTransformedBitmapSize;
    int transformedBitmapCount;

    Stats(Cache cache) {
        this.cache = cache;
        HandlerThread handlerThread = new HandlerThread(STATS_THREAD_NAME, 10);
        this.statsThread = handlerThread;
        handlerThread.start();
        Utils.flushStackLocalLeaks(handlerThread.getLooper());
        this.handler = new StatsHandler(handlerThread.getLooper(), this);
    }

    void dispatchBitmapDecoded(Bitmap bitmap) {
        processBitmap(bitmap, 2);
    }

    void dispatchBitmapTransformed(Bitmap bitmap) {
        processBitmap(bitmap, 3);
    }

    void dispatchDownloadFinished(long j) {
        Handler handler = this.handler;
        handler.sendMessage(handler.obtainMessage(4, Long.valueOf(j)));
    }

    void dispatchCacheHit() {
        this.handler.sendEmptyMessage(0);
    }

    void dispatchCacheMiss() {
        this.handler.sendEmptyMessage(1);
    }

    void shutdown() {
        this.statsThread.quit();
    }

    void performCacheHit() {
        this.cacheHits++;
    }

    void performCacheMiss() {
        this.cacheMisses++;
    }

    void performDownloadFinished(Long l) {
        this.downloadCount++;
        long jLongValue = this.totalDownloadSize + l.longValue();
        this.totalDownloadSize = jLongValue;
        this.averageDownloadSize = getAverage(this.downloadCount, jLongValue);
    }

    void performBitmapDecoded(long j) {
        int i = this.originalBitmapCount + 1;
        this.originalBitmapCount = i;
        long j2 = this.totalOriginalBitmapSize + j;
        this.totalOriginalBitmapSize = j2;
        this.averageOriginalBitmapSize = getAverage(i, j2);
    }

    void performBitmapTransformed(long j) {
        this.transformedBitmapCount++;
        long j2 = this.totalTransformedBitmapSize + j;
        this.totalTransformedBitmapSize = j2;
        this.averageTransformedBitmapSize = getAverage(this.originalBitmapCount, j2);
    }

    StatsSnapshot createSnapshot() {
        return new StatsSnapshot(this.cache.maxSize(), this.cache.size(), this.cacheHits, this.cacheMisses, this.totalDownloadSize, this.totalOriginalBitmapSize, this.totalTransformedBitmapSize, this.averageDownloadSize, this.averageOriginalBitmapSize, this.averageTransformedBitmapSize, this.downloadCount, this.originalBitmapCount, this.transformedBitmapCount, System.currentTimeMillis());
    }

    private void processBitmap(Bitmap bitmap, int i) {
        int bitmapBytes = Utils.getBitmapBytes(bitmap);
        Handler handler = this.handler;
        handler.sendMessage(handler.obtainMessage(i, bitmapBytes, 0));
    }

    private static long getAverage(int i, long j) {
        return j / ((long) i);
    }

    private static class StatsHandler extends Handler {
        private final Stats stats;

        StatsHandler(Looper looper, Stats stats) {
            super(looper);
            this.stats = stats;
        }

        @Override // android.os.Handler
        public void handleMessage(final Message message) {
            int i = message.what;
            if (i == 0) {
                this.stats.performCacheHit();
                return;
            }
            if (i == 1) {
                this.stats.performCacheMiss();
                return;
            }
            if (i == 2) {
                this.stats.performBitmapDecoded(message.arg1);
                return;
            }
            if (i == 3) {
                this.stats.performBitmapTransformed(message.arg1);
            } else if (i == 4) {
                this.stats.performDownloadFinished((Long) message.obj);
            } else {
                Picasso.HANDLER.post(new Runnable() { // from class: com.squareup.picasso.Stats.StatsHandler.1
                    @Override // java.lang.Runnable
                    public void run() {
                        throw new AssertionError("Unhandled stats message." + message.what);
                    }
                });
            }
        }
    }
}

