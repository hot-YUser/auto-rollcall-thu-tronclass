package com.synconset;

import android.R;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Matrix;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.AsyncTask;
import android.os.Handler;
import android.provider.MediaStore;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import java.lang.ref.SoftReference;
import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
public class ImageFetcher {
    private static final int DELAY_BEFORE_PURGE = 10000;
    private static final int HARD_CACHE_CAPACITY = 100;
    private static final ConcurrentHashMap<Integer, SoftReference<Bitmap>> sSoftBitmapCache = new ConcurrentHashMap<>(50);
    private int colWidth;
    private long origId;
    private final HashMap<Integer, Bitmap> sHardBitmapCache = new LinkedHashMap<Integer, Bitmap>(50, 0.75f, true) { // from class: com.synconset.ImageFetcher.1
        @Override // java.util.LinkedHashMap
        protected boolean removeEldestEntry(Map.Entry<Integer, Bitmap> entry) {
            if (size() <= 100) {
                return false;
            }
            ImageFetcher.sSoftBitmapCache.put(entry.getKey(), new SoftReference(entry.getValue()));
            return true;
        }
    };
    private final Handler purgeHandler = new Handler();
    private final Runnable purger = new Runnable() { // from class: com.synconset.ImageFetcher.2
        @Override // java.lang.Runnable
        public void run() {
            ImageFetcher.this.clearCache();
        }
    };
    private ExecutorService executor = Executors.newCachedThreadPool();

    private void resetPurgeTimer() {
    }

    public void fetch(Integer num, ImageView imageView, int i, int i2) {
        resetPurgeTimer();
        this.colWidth = i;
        this.origId = num.intValue();
        Bitmap bitmapFromCache = getBitmapFromCache(num);
        if (bitmapFromCache == null) {
            forceDownload(num, imageView, i2);
        } else {
            cancelPotentialDownload(num, imageView);
            imageView.setImageBitmap(bitmapFromCache);
        }
    }

    private void forceDownload(Integer num, ImageView imageView, int i) {
        if (num == null) {
            imageView.setImageDrawable(null);
        } else if (cancelPotentialDownload(num, imageView)) {
            BitmapFetcherTask bitmapFetcherTask = new BitmapFetcherTask(imageView.getContext(), imageView, i);
            imageView.setImageDrawable(new DownloadedDrawable(imageView.getContext(), bitmapFetcherTask, this.origId));
            imageView.setMinimumHeight(this.colWidth);
            bitmapFetcherTask.executeOnExecutor(this.executor, num);
        }
    }

    private static boolean cancelPotentialDownload(Integer num, ImageView imageView) {
        BitmapFetcherTask bitmapDownloaderTask = getBitmapDownloaderTask(imageView);
        long origId = getOrigId(imageView);
        if (bitmapDownloaderTask != null) {
            Integer num2 = bitmapDownloaderTask.position;
            if (num2 != null && num2.equals(num)) {
                return false;
            }
            MediaStore.Images.Thumbnails.cancelThumbnailRequest(imageView.getContext().getContentResolver(), origId, 12345L);
            bitmapDownloaderTask.cancel(true);
        }
        return true;
    }
    public static BitmapFetcherTask getBitmapDownloaderTask(ImageView imageView) {
        if (imageView == null) {
            return null;
        }
        Drawable drawable = imageView.getDrawable();
        if (drawable instanceof DownloadedDrawable) {
            return ((DownloadedDrawable) drawable).getBitmapDownloaderTask();
        }
        return null;
    }

    private static long getOrigId(ImageView imageView) {
        if (imageView == null) {
            return -1L;
        }
        Drawable drawable = imageView.getDrawable();
        if (drawable instanceof DownloadedDrawable) {
            return ((DownloadedDrawable) drawable).getOrigId();
        }
        return -1L;
    }

    class BitmapFetcherTask extends AsyncTask<Integer, Void, Bitmap> {
        private final WeakReference<ImageView> imageViewReference;
        private final Context mContext;
        private Integer position;
        private final int rotate;

        public BitmapFetcherTask(Context context, ImageView imageView, int i) {
            this.imageViewReference = new WeakReference<>(imageView);
            this.mContext = context;
            this.rotate = i;
        }
        @Override // android.os.AsyncTask
        public Bitmap doInBackground(Integer... numArr) {
            try {
                this.position = numArr[0];
                if (isCancelled()) {
                    return null;
                }
                Bitmap thumbnail = MediaStore.Images.Thumbnails.getThumbnail(this.mContext.getContentResolver(), this.position.intValue(), 12345L, 1, null);
                if (isCancelled() || thumbnail == null || isCancelled()) {
                    return null;
                }
                if (this.rotate == 0) {
                    return thumbnail;
                }
                return Bitmap.createBitmap(thumbnail, 0, 0, thumbnail.getWidth(), thumbnail.getHeight(), new Matrix(), true);
            } catch (OutOfMemoryError unused) {
                ImageFetcher.this.clearCache();
                return null;
            }
        }

        private void setInvisible() {
            WeakReference<ImageView> weakReference = this.imageViewReference;
            if (weakReference != null) {
                ImageView imageView = weakReference.get();
                if (this == ImageFetcher.getBitmapDownloaderTask(imageView)) {
                    imageView.setVisibility(8);
                    imageView.setClickable(false);
                    imageView.setEnabled(false);
                }
            }
        }
        @Override // android.os.AsyncTask
        public void onPostExecute(Bitmap bitmap) {
            if (isCancelled()) {
                bitmap = null;
            }
            ImageFetcher.this.addBitmapToCache(this.position, bitmap);
            WeakReference<ImageView> weakReference = this.imageViewReference;
            if (weakReference != null) {
                ImageView imageView = weakReference.get();
                if (this == ImageFetcher.getBitmapDownloaderTask(imageView)) {
                    imageView.setImageBitmap(bitmap);
                    Animation animationLoadAnimation = AnimationUtils.loadAnimation(imageView.getContext(), R.anim.fade_in);
                    imageView.setAnimation(animationLoadAnimation);
                    animationLoadAnimation.start();
                    return;
                }
                return;
            }
            setInvisible();
        }
    }

    static class DownloadedDrawable extends ColorDrawable {
        private final WeakReference<BitmapFetcherTask> bitmapDownloaderTaskReference;
        private long origId;

        public DownloadedDrawable(Context context, BitmapFetcherTask bitmapFetcherTask, long j) {
            super(0);
            this.bitmapDownloaderTaskReference = new WeakReference<>(bitmapFetcherTask);
            this.origId = j;
        }

        public long getOrigId() {
            return this.origId;
        }

        public BitmapFetcherTask getBitmapDownloaderTask() {
            return this.bitmapDownloaderTaskReference.get();
        }
    }
    public void addBitmapToCache(Integer num, Bitmap bitmap) {
        if (bitmap != null) {
            synchronized (this.sHardBitmapCache) {
                this.sHardBitmapCache.put(num, bitmap);
            }
        }
    }

    private Bitmap getBitmapFromCache(Integer num) {
        synchronized (this.sHardBitmapCache) {
            Bitmap bitmap = this.sHardBitmapCache.get(num);
            if (bitmap != null) {
                return bitmap;
            }
            ConcurrentHashMap<Integer, SoftReference<Bitmap>> concurrentHashMap = sSoftBitmapCache;
            SoftReference<Bitmap> softReference = concurrentHashMap.get(num);
            if (softReference == null) {
                return null;
            }
            Bitmap bitmap2 = softReference.get();
            if (bitmap2 != null) {
                return bitmap2;
            }
            concurrentHashMap.remove(num);
            return null;
        }
    }

    public void clearCache() {
        this.sHardBitmapCache.clear();
        sSoftBitmapCache.clear();
    }
}

