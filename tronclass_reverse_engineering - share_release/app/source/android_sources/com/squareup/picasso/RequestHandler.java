package com.squareup.picasso;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.NetworkInfo;
import com.squareup.picasso.Picasso;
import java.io.IOException;
import okio.Source;
public abstract class RequestHandler {
    public abstract boolean canHandleRequest(Request request);

    int getRetryCount() {
        return 0;
    }

    public abstract Result load(Request request, int i) throws IOException;

    boolean shouldRetry(boolean z, NetworkInfo networkInfo) {
        return false;
    }

    boolean supportsReplay() {
        return false;
    }

    public static final class Result {
        private final Bitmap bitmap;
        private final int exifOrientation;
        private final Picasso.LoadedFrom loadedFrom;
        private final Source source;

        public Result(Bitmap bitmap, Picasso.LoadedFrom loadedFrom) {
            this((Bitmap) Utils.checkNotNull(bitmap, "bitmap == null"), null, loadedFrom, 0);
        }

        public Result(Source source, Picasso.LoadedFrom loadedFrom) {
            this(null, (Source) Utils.checkNotNull(source, "source == null"), loadedFrom, 0);
        }

        Result(Bitmap bitmap, Source source, Picasso.LoadedFrom loadedFrom, int i) {
            if ((bitmap != null) == (source != null)) {
                throw new AssertionError();
            }
            this.bitmap = bitmap;
            this.source = source;
            this.loadedFrom = (Picasso.LoadedFrom) Utils.checkNotNull(loadedFrom, "loadedFrom == null");
            this.exifOrientation = i;
        }

        public Bitmap getBitmap() {
            return this.bitmap;
        }

        public Source getSource() {
            return this.source;
        }

        public Picasso.LoadedFrom getLoadedFrom() {
            return this.loadedFrom;
        }

        int getExifOrientation() {
            return this.exifOrientation;
        }
    }

    static BitmapFactory.Options createBitmapOptions(Request request) {
        boolean zHasSize = request.hasSize();
        boolean z = request.config != null;
        if (!zHasSize && !z && !request.purgeable) {
            return null;
        }
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = zHasSize;
        options.inInputShareable = request.purgeable;
        options.inPurgeable = request.purgeable;
        if (z) {
            options.inPreferredConfig = request.config;
        }
        return options;
    }

    static boolean requiresInSampleSize(BitmapFactory.Options options) {
        return options != null && options.inJustDecodeBounds;
    }

    static void calculateInSampleSize(int i, int i2, BitmapFactory.Options options, Request request) {
        calculateInSampleSize(i, i2, options.outWidth, options.outHeight, options, request);
    }

    static void calculateInSampleSize(int i, int i2, int i3, int i4, BitmapFactory.Options options, Request request) {
        int iMin;
        double dFloor;
        if (i4 > i2 || i3 > i) {
            if (i2 == 0) {
                dFloor = Math.floor(i3 / i);
            } else if (i == 0) {
                dFloor = Math.floor(i4 / i2);
            } else {
                int iFloor = (int) Math.floor(i4 / i2);
                int iFloor2 = (int) Math.floor(i3 / i);
                if (request.centerInside) {
                    iMin = Math.max(iFloor, iFloor2);
                } else {
                    iMin = Math.min(iFloor, iFloor2);
                }
            }
            iMin = (int) dFloor;
        } else {
            iMin = 1;
        }
        options.inSampleSize = iMin;
        options.inJustDecodeBounds = false;
    }
}

