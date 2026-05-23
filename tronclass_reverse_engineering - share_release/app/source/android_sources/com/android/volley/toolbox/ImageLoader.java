package com.android.volley.toolbox;

import android.graphics.Bitmap;
import android.os.Handler;
import android.os.Looper;
import android.widget.ImageView;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
public class ImageLoader {
    private final ImageCache mCache;
    private final RequestQueue mRequestQueue;
    private Runnable mRunnable;
    private int mBatchResponseDelayMs = 100;
    private final HashMap<String, BatchedImageRequest> mInFlightRequests = new HashMap<>();
    private final HashMap<String, BatchedImageRequest> mBatchedResponses = new HashMap<>();
    private final Handler mHandler = new Handler(Looper.getMainLooper());

    public interface ImageCache {
        Bitmap getBitmap(String str);

        void putBitmap(String str, Bitmap bitmap);
    }

    public interface ImageListener extends Response.ErrorListener {
        void onResponse(ImageContainer imageContainer, boolean z);
    }

    public ImageLoader(RequestQueue requestQueue, ImageCache imageCache) {
        this.mRequestQueue = requestQueue;
        this.mCache = imageCache;
    }

    public static ImageListener getImageListener(final ImageView imageView, final int i, final int i2) {
        return new ImageListener() { // from class: com.android.volley.toolbox.ImageLoader.1
            @Override // com.android.volley.Response.ErrorListener
            public void onErrorResponse(VolleyError volleyError) {
                int i3 = i2;
                if (i3 != 0) {
                    imageView.setImageResource(i3);
                }
            }

            @Override // com.android.volley.toolbox.ImageLoader.ImageListener
            public void onResponse(ImageContainer imageContainer, boolean z) {
                if (imageContainer.getBitmap() != null) {
                    imageView.setImageBitmap(imageContainer.getBitmap());
                    return;
                }
                int i3 = i;
                if (i3 != 0) {
                    imageView.setImageResource(i3);
                }
            }
        };
    }

    public boolean isCached(String str, int i, int i2) {
        return isCached(str, i, i2, ImageView.ScaleType.CENTER_INSIDE);
    }

    public boolean isCached(String str, int i, int i2, ImageView.ScaleType scaleType) {
        Threads.throwIfNotOnMainThread();
        return this.mCache.getBitmap(getCacheKey(str, i, i2, scaleType)) != null;
    }

    public ImageContainer get(String str, ImageListener imageListener) {
        return get(str, imageListener, 0, 0);
    }

    public ImageContainer get(String str, ImageListener imageListener, int i, int i2) {
        return get(str, imageListener, i, i2, ImageView.ScaleType.CENTER_INSIDE);
    }

    public ImageContainer get(String str, ImageListener imageListener, int i, int i2, ImageView.ScaleType scaleType) {
        Threads.throwIfNotOnMainThread();
        String cacheKey = getCacheKey(str, i, i2, scaleType);
        Bitmap bitmap = this.mCache.getBitmap(cacheKey);
        if (bitmap != null) {
            ImageContainer imageContainer = new ImageContainer(bitmap, str, null, null);
            imageListener.onResponse(imageContainer, true);
            return imageContainer;
        }
        ImageContainer imageContainer2 = new ImageContainer(null, str, cacheKey, imageListener);
        imageListener.onResponse(imageContainer2, true);
        BatchedImageRequest batchedImageRequest = this.mInFlightRequests.get(cacheKey);
        if (batchedImageRequest == null) {
            batchedImageRequest = this.mBatchedResponses.get(cacheKey);
        }
        if (batchedImageRequest != null) {
            batchedImageRequest.addContainer(imageContainer2);
            return imageContainer2;
        }
        Request<Bitmap> requestMakeImageRequest = makeImageRequest(str, i, i2, scaleType, cacheKey);
        this.mRequestQueue.add(requestMakeImageRequest);
        this.mInFlightRequests.put(cacheKey, new BatchedImageRequest(requestMakeImageRequest, imageContainer2));
        return imageContainer2;
    }

    protected Request<Bitmap> makeImageRequest(String str, int i, int i2, ImageView.ScaleType scaleType, final String str2) {
        return new ImageRequest(str, new Response.Listener<Bitmap>() { // from class: com.android.volley.toolbox.ImageLoader.2
            @Override // com.android.volley.Response.Listener
            public void onResponse(Bitmap bitmap) {
                ImageLoader.this.onGetImageSuccess(str2, bitmap);
            }
        }, i, i2, scaleType, Bitmap.Config.RGB_565, new Response.ErrorListener() { // from class: com.android.volley.toolbox.ImageLoader.3
            @Override // com.android.volley.Response.ErrorListener
            public void onErrorResponse(VolleyError volleyError) {
                ImageLoader.this.onGetImageError(str2, volleyError);
            }
        });
    }

    public void setBatchedResponseDelay(int i) {
        this.mBatchResponseDelayMs = i;
    }

    protected void onGetImageSuccess(String str, Bitmap bitmap) {
        this.mCache.putBitmap(str, bitmap);
        BatchedImageRequest batchedImageRequestRemove = this.mInFlightRequests.remove(str);
        if (batchedImageRequestRemove != null) {
            batchedImageRequestRemove.mResponseBitmap = bitmap;
            batchResponse(str, batchedImageRequestRemove);
        }
    }

    protected void onGetImageError(String str, VolleyError volleyError) {
        BatchedImageRequest batchedImageRequestRemove = this.mInFlightRequests.remove(str);
        if (batchedImageRequestRemove != null) {
            batchedImageRequestRemove.setError(volleyError);
            batchResponse(str, batchedImageRequestRemove);
        }
    }

    public class ImageContainer {
        private Bitmap mBitmap;
        private final String mCacheKey;
        private final ImageListener mListener;
        private final String mRequestUrl;

        public ImageContainer(Bitmap bitmap, String str, String str2, ImageListener imageListener) {
            this.mBitmap = bitmap;
            this.mRequestUrl = str;
            this.mCacheKey = str2;
            this.mListener = imageListener;
        }

        public void cancelRequest() {
            Threads.throwIfNotOnMainThread();
            if (this.mListener == null) {
                return;
            }
            BatchedImageRequest batchedImageRequest = (BatchedImageRequest) ImageLoader.this.mInFlightRequests.get(this.mCacheKey);
            if (batchedImageRequest == null) {
                BatchedImageRequest batchedImageRequest2 = (BatchedImageRequest) ImageLoader.this.mBatchedResponses.get(this.mCacheKey);
                if (batchedImageRequest2 != null) {
                    batchedImageRequest2.removeContainerAndCancelIfNecessary(this);
                    if (batchedImageRequest2.mContainers.size() == 0) {
                        ImageLoader.this.mBatchedResponses.remove(this.mCacheKey);
                        return;
                    }
                    return;
                }
                return;
            }
            if (batchedImageRequest.removeContainerAndCancelIfNecessary(this)) {
                ImageLoader.this.mInFlightRequests.remove(this.mCacheKey);
            }
        }

        public Bitmap getBitmap() {
            return this.mBitmap;
        }

        public String getRequestUrl() {
            return this.mRequestUrl;
        }
    }

    private static class BatchedImageRequest {
        private final List<ImageContainer> mContainers;
        private VolleyError mError;
        private final Request<?> mRequest;
        private Bitmap mResponseBitmap;

        public BatchedImageRequest(Request<?> request, ImageContainer imageContainer) {
            ArrayList arrayList = new ArrayList();
            this.mContainers = arrayList;
            this.mRequest = request;
            arrayList.add(imageContainer);
        }

        public void setError(VolleyError volleyError) {
            this.mError = volleyError;
        }

        public VolleyError getError() {
            return this.mError;
        }

        public void addContainer(ImageContainer imageContainer) {
            this.mContainers.add(imageContainer);
        }

        public boolean removeContainerAndCancelIfNecessary(ImageContainer imageContainer) {
            this.mContainers.remove(imageContainer);
            if (this.mContainers.size() != 0) {
                return false;
            }
            this.mRequest.cancel();
            return true;
        }
    }

    private void batchResponse(String str, BatchedImageRequest batchedImageRequest) {
        this.mBatchedResponses.put(str, batchedImageRequest);
        if (this.mRunnable == null) {
            Runnable runnable = new Runnable() { // from class: com.android.volley.toolbox.ImageLoader.4
                @Override // java.lang.Runnable
                public void run() {
                    for (BatchedImageRequest batchedImageRequest2 : ImageLoader.this.mBatchedResponses.values()) {
                        for (ImageContainer imageContainer : batchedImageRequest2.mContainers) {
                            if (imageContainer.mListener != null) {
                                if (batchedImageRequest2.getError() == null) {
                                    imageContainer.mBitmap = batchedImageRequest2.mResponseBitmap;
                                    imageContainer.mListener.onResponse(imageContainer, false);
                                } else {
                                    imageContainer.mListener.onErrorResponse(batchedImageRequest2.getError());
                                }
                            }
                        }
                    }
                    ImageLoader.this.mBatchedResponses.clear();
                    ImageLoader.this.mRunnable = null;
                }
            };
            this.mRunnable = runnable;
            this.mHandler.postDelayed(runnable, this.mBatchResponseDelayMs);
        }
    }

    private static String getCacheKey(String str, int i, int i2, ImageView.ScaleType scaleType) {
        return new StringBuilder(str.length() + 12).append("#W").append(i).append("#H").append(i2).append("#S").append(scaleType.ordinal()).append(str).toString();
    }
}

