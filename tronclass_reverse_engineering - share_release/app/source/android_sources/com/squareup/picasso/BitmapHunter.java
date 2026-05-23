package com.squareup.picasso;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.net.NetworkInfo;
import androidx.camera.video.AudioStats;
import com.squareup.picasso.NetworkRequestHandler;
import com.squareup.picasso.Picasso;
import com.squareup.picasso.RequestHandler;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.Future;
import java.util.concurrent.atomic.AtomicInteger;
import okio.BufferedSource;
import okio.Okio;
import okio.Source;
class BitmapHunter implements Runnable {
    Action action;
    List<Action> actions;
    final Cache cache;
    final Request data;
    final Dispatcher dispatcher;
    Exception exception;
    int exifOrientation;
    Future<?> future;
    final String key;
    Picasso.LoadedFrom loadedFrom;
    final int memoryPolicy;
    int networkPolicy;
    final Picasso picasso;
    Picasso.Priority priority;
    final RequestHandler requestHandler;
    Bitmap result;
    int retryCount;
    final int sequence = SEQUENCE_GENERATOR.incrementAndGet();
    final Stats stats;
    private static final Object DECODE_LOCK = new Object();
    private static final ThreadLocal<StringBuilder> NAME_BUILDER = new ThreadLocal<StringBuilder>() { // from class: com.squareup.picasso.BitmapHunter.1
        @Override // java.lang.ThreadLocal
        public StringBuilder initialValue() {
            return new StringBuilder("Picasso-");
        }
    };
    private static final AtomicInteger SEQUENCE_GENERATOR = new AtomicInteger();
    private static final RequestHandler ERRORING_HANDLER = new RequestHandler() { // from class: com.squareup.picasso.BitmapHunter.2
        @Override // com.squareup.picasso.RequestHandler
        public boolean canHandleRequest(Request request) {
            return true;
        }

        @Override // com.squareup.picasso.RequestHandler
        public RequestHandler.Result load(Request request, int i) throws IOException {
            throw new IllegalStateException("Unrecognized type of request: " + request);
        }
    };

    static int getExifRotation(int i) {
        switch (i) {
            case 3:
            case 4:
                return 180;
            case 5:
            case 6:
                return 90;
            case 7:
            case 8:
                return 270;
            default:
                return 0;
        }
    }

    static int getExifTranslation(int i) {
        return (i == 2 || i == 7 || i == 4 || i == 5) ? -1 : 1;
    }

    private static boolean shouldResize(boolean z, int i, int i2, int i3, int i4) {
        return !z || (i3 != 0 && i > i3) || (i4 != 0 && i2 > i4);
    }

    BitmapHunter(Picasso picasso, Dispatcher dispatcher, Cache cache, Stats stats, Action action, RequestHandler requestHandler) {
        this.picasso = picasso;
        this.dispatcher = dispatcher;
        this.cache = cache;
        this.stats = stats;
        this.action = action;
        this.key = action.getKey();
        this.data = action.getRequest();
        this.priority = action.getPriority();
        this.memoryPolicy = action.getMemoryPolicy();
        this.networkPolicy = action.getNetworkPolicy();
        this.requestHandler = requestHandler;
        this.retryCount = requestHandler.getRetryCount();
    }

    static Bitmap decodeStream(Source source, Request request) throws IOException {
        BufferedSource bufferedSourceBuffer = Okio.buffer(source);
        boolean zIsWebPFile = Utils.isWebPFile(bufferedSourceBuffer);
        boolean z = request.purgeable;
        BitmapFactory.Options optionsCreateBitmapOptions = RequestHandler.createBitmapOptions(request);
        boolean zRequiresInSampleSize = RequestHandler.requiresInSampleSize(optionsCreateBitmapOptions);
        if (zIsWebPFile) {
            byte[] byteArray = bufferedSourceBuffer.readByteArray();
            if (zRequiresInSampleSize) {
                BitmapFactory.decodeByteArray(byteArray, 0, byteArray.length, optionsCreateBitmapOptions);
                RequestHandler.calculateInSampleSize(request.targetWidth, request.targetHeight, optionsCreateBitmapOptions, request);
            }
            return BitmapFactory.decodeByteArray(byteArray, 0, byteArray.length, optionsCreateBitmapOptions);
        }
        InputStream inputStream = bufferedSourceBuffer.inputStream();
        if (zRequiresInSampleSize) {
            MarkableInputStream markableInputStream = new MarkableInputStream(inputStream);
            markableInputStream.allowMarksToExpire(false);
            long jSavePosition = markableInputStream.savePosition(1024);
            BitmapFactory.decodeStream(markableInputStream, null, optionsCreateBitmapOptions);
            RequestHandler.calculateInSampleSize(request.targetWidth, request.targetHeight, optionsCreateBitmapOptions, request);
            markableInputStream.reset(jSavePosition);
            markableInputStream.allowMarksToExpire(true);
            inputStream = markableInputStream;
        }
        Bitmap bitmapDecodeStream = BitmapFactory.decodeStream(inputStream, null, optionsCreateBitmapOptions);
        if (bitmapDecodeStream != null) {
            return bitmapDecodeStream;
        }
        throw new IOException("Failed to decode stream.");
    }

    @Override // java.lang.Runnable
    public void run() {
        try {
            try {
                try {
                    updateThreadName(this.data);
                    if (this.picasso.loggingEnabled) {
                        Utils.log("Hunter", "executing", Utils.getLogIdsForHunter(this));
                    }
                    Bitmap bitmapHunt = hunt();
                    this.result = bitmapHunt;
                    if (bitmapHunt == null) {
                        this.dispatcher.dispatchFailed(this);
                    } else {
                        this.dispatcher.dispatchComplete(this);
                    }
                } catch (Exception e) {
                    this.exception = e;
                    this.dispatcher.dispatchFailed(this);
                } catch (OutOfMemoryError e2) {
                    StringWriter stringWriter = new StringWriter();
                    this.stats.createSnapshot().dump(new PrintWriter(stringWriter));
                    this.exception = new RuntimeException(stringWriter.toString(), e2);
                    this.dispatcher.dispatchFailed(this);
                }
            } catch (NetworkRequestHandler.ResponseException e3) {
                if (!NetworkPolicy.isOfflineOnly(e3.networkPolicy) || e3.code != 504) {
                    this.exception = e3;
                }
                this.dispatcher.dispatchFailed(this);
            } catch (IOException e4) {
                this.exception = e4;
                this.dispatcher.dispatchRetry(this);
            }
        } finally {
            Thread.currentThread().setName("Picasso-Idle");
        }
    }

    Bitmap hunt() throws IOException {
        Bitmap bitmapTransformResult;
        if (MemoryPolicy.shouldReadFromMemoryCache(this.memoryPolicy)) {
            bitmapTransformResult = this.cache.get(this.key);
            if (bitmapTransformResult != null) {
                this.stats.dispatchCacheHit();
                this.loadedFrom = Picasso.LoadedFrom.MEMORY;
                if (this.picasso.loggingEnabled) {
                    Utils.log("Hunter", "decoded", this.data.logId(), "from cache");
                }
                return bitmapTransformResult;
            }
        } else {
            bitmapTransformResult = null;
        }
        int i = this.retryCount == 0 ? NetworkPolicy.OFFLINE.index : this.networkPolicy;
        this.networkPolicy = i;
        RequestHandler.Result resultLoad = this.requestHandler.load(this.data, i);
        if (resultLoad != null) {
            this.loadedFrom = resultLoad.getLoadedFrom();
            this.exifOrientation = resultLoad.getExifOrientation();
            bitmapTransformResult = resultLoad.getBitmap();
            if (bitmapTransformResult == null) {
                Source source = resultLoad.getSource();
                try {
                    bitmapTransformResult = decodeStream(source, this.data);
                } finally {
                    try {
                        source.close();
                    } catch (IOException unused) {
                    }
                }
            }
        }
        if (bitmapTransformResult != null) {
            if (this.picasso.loggingEnabled) {
                Utils.log("Hunter", "decoded", this.data.logId());
            }
            this.stats.dispatchBitmapDecoded(bitmapTransformResult);
            if (this.data.needsTransformation() || this.exifOrientation != 0) {
                synchronized (DECODE_LOCK) {
                    if (this.data.needsMatrixTransform() || this.exifOrientation != 0) {
                        bitmapTransformResult = transformResult(this.data, bitmapTransformResult, this.exifOrientation);
                        if (this.picasso.loggingEnabled) {
                            Utils.log("Hunter", "transformed", this.data.logId());
                        }
                    }
                    if (this.data.hasCustomTransformations()) {
                        bitmapTransformResult = applyCustomTransformations(this.data.transformations, bitmapTransformResult);
                        if (this.picasso.loggingEnabled) {
                            Utils.log("Hunter", "transformed", this.data.logId(), "from custom transformations");
                        }
                    }
                }
                if (bitmapTransformResult != null) {
                    this.stats.dispatchBitmapTransformed(bitmapTransformResult);
                }
            }
        }
        return bitmapTransformResult;
    }

    void attach(Action action) {
        boolean z = this.picasso.loggingEnabled;
        Request request = action.request;
        if (this.action == null) {
            this.action = action;
            if (z) {
                List<Action> list = this.actions;
                if (list == null || list.isEmpty()) {
                    Utils.log("Hunter", "joined", request.logId(), "to empty hunter");
                    return;
                } else {
                    Utils.log("Hunter", "joined", request.logId(), Utils.getLogIdsForHunter(this, "to "));
                    return;
                }
            }
            return;
        }
        if (this.actions == null) {
            this.actions = new ArrayList(3);
        }
        this.actions.add(action);
        if (z) {
            Utils.log("Hunter", "joined", request.logId(), Utils.getLogIdsForHunter(this, "to "));
        }
        Picasso.Priority priority = action.getPriority();
        if (priority.ordinal() > this.priority.ordinal()) {
            this.priority = priority;
        }
    }

    void detach(Action action) {
        boolean zRemove;
        if (this.action == action) {
            this.action = null;
            zRemove = true;
        } else {
            List<Action> list = this.actions;
            zRemove = list != null ? list.remove(action) : false;
        }
        if (zRemove && action.getPriority() == this.priority) {
            this.priority = computeNewPriority();
        }
        if (this.picasso.loggingEnabled) {
            Utils.log("Hunter", "removed", action.request.logId(), Utils.getLogIdsForHunter(this, "from "));
        }
    }

    private Picasso.Priority computeNewPriority() {
        Picasso.Priority priority = Picasso.Priority.LOW;
        List<Action> list = this.actions;
        boolean z = (list == null || list.isEmpty()) ? false : true;
        Action action = this.action;
        if (action == null && !z) {
            return priority;
        }
        if (action != null) {
            priority = action.getPriority();
        }
        if (z) {
            int size = this.actions.size();
            for (int i = 0; i < size; i++) {
                Picasso.Priority priority2 = this.actions.get(i).getPriority();
                if (priority2.ordinal() > priority.ordinal()) {
                    priority = priority2;
                }
            }
        }
        return priority;
    }

    boolean cancel() {
        Future<?> future;
        if (this.action != null) {
            return false;
        }
        List<Action> list = this.actions;
        return (list == null || list.isEmpty()) && (future = this.future) != null && future.cancel(false);
    }

    boolean isCancelled() {
        Future<?> future = this.future;
        return future != null && future.isCancelled();
    }

    boolean shouldRetry(boolean z, NetworkInfo networkInfo) {
        int i = this.retryCount;
        if (i <= 0) {
            return false;
        }
        this.retryCount = i - 1;
        return this.requestHandler.shouldRetry(z, networkInfo);
    }

    boolean supportsReplay() {
        return this.requestHandler.supportsReplay();
    }

    Bitmap getResult() {
        return this.result;
    }

    String getKey() {
        return this.key;
    }

    int getMemoryPolicy() {
        return this.memoryPolicy;
    }

    Request getData() {
        return this.data;
    }

    Action getAction() {
        return this.action;
    }

    Picasso getPicasso() {
        return this.picasso;
    }

    List<Action> getActions() {
        return this.actions;
    }

    Exception getException() {
        return this.exception;
    }

    Picasso.LoadedFrom getLoadedFrom() {
        return this.loadedFrom;
    }

    Picasso.Priority getPriority() {
        return this.priority;
    }

    static void updateThreadName(Request request) {
        String name = request.getName();
        StringBuilder sb = NAME_BUILDER.get();
        sb.ensureCapacity("Picasso-".length() + name.length());
        sb.replace("Picasso-".length(), sb.length(), name);
        Thread.currentThread().setName(sb.toString());
    }

    static BitmapHunter forRequest(Picasso picasso, Dispatcher dispatcher, Cache cache, Stats stats, Action action) {
        Request request = action.getRequest();
        List<RequestHandler> requestHandlers = picasso.getRequestHandlers();
        int size = requestHandlers.size();
        for (int i = 0; i < size; i++) {
            RequestHandler requestHandler = requestHandlers.get(i);
            if (requestHandler.canHandleRequest(request)) {
                return new BitmapHunter(picasso, dispatcher, cache, stats, action, requestHandler);
            }
        }
        return new BitmapHunter(picasso, dispatcher, cache, stats, action, ERRORING_HANDLER);
    }

    static Bitmap applyCustomTransformations(List<Transformation> list, Bitmap bitmap) {
        int size = list.size();
        int i = 0;
        while (i < size) {
            final Transformation transformation = list.get(i);
            try {
                Bitmap bitmapTransform = transformation.transform(bitmap);
                if (bitmapTransform == null) {
                    final StringBuilder sbAppend = new StringBuilder().append("Transformation ").append(transformation.key()).append(" returned null after ").append(i).append(" previous transformation(s).\n\nTransformation list:\n");
                    Iterator<Transformation> it = list.iterator();
                    while (it.hasNext()) {
                        sbAppend.append(it.next().key()).append('\n');
                    }
                    Picasso.HANDLER.post(new Runnable() { // from class: com.squareup.picasso.BitmapHunter.4
                        @Override // java.lang.Runnable
                        public void run() {
                            throw new NullPointerException(sbAppend.toString());
                        }
                    });
                    return null;
                }
                if (bitmapTransform == bitmap && bitmap.isRecycled()) {
                    Picasso.HANDLER.post(new Runnable() { // from class: com.squareup.picasso.BitmapHunter.5
                        @Override // java.lang.Runnable
                        public void run() {
                            throw new IllegalStateException("Transformation " + transformation.key() + " returned input Bitmap but recycled it.");
                        }
                    });
                    return null;
                }
                if (bitmapTransform != bitmap && !bitmap.isRecycled()) {
                    Picasso.HANDLER.post(new Runnable() { // from class: com.squareup.picasso.BitmapHunter.6
                        @Override // java.lang.Runnable
                        public void run() {
                            throw new IllegalStateException("Transformation " + transformation.key() + " mutated input Bitmap but failed to recycle the original.");
                        }
                    });
                    return null;
                }
                i++;
                bitmap = bitmapTransform;
            } catch (RuntimeException e) {
                Picasso.HANDLER.post(new Runnable() { // from class: com.squareup.picasso.BitmapHunter.3
                    @Override // java.lang.Runnable
                    public void run() {
                        throw new RuntimeException("Transformation " + transformation.key() + " crashed with exception.", e);
                    }
                });
                return null;
            }
        }
        return bitmap;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:93:0x026b  */
    /* high-level source view WARN: Removed duplicated region for block: B:94:0x026f  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    static Bitmap transformResult(Request request, Bitmap bitmap, int i) {
        int i2;
        int i3;
        boolean z;
        Matrix matrix;
        Matrix matrix2;
        int i4;
        int i5;
        float f;
        float f2;
        float f3;
        float f4;
        float f5;
        float f6;
        float f7;
        float f8;
        int i6;
        int i7;
        float f9;
        float f10;
        float f11;
        int i8;
        int i9;
        float f12;
        boolean z2;
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        Bitmap bitmapCreateBitmap;
        int width = bitmap.getWidth();
        int height = bitmap.getHeight();
        boolean z3 = request.onlyScaleDown;
        Matrix matrix3 = new Matrix();
        if (request.needsMatrixTransform() || i != 0) {
            int iFloor = request.targetWidth;
            int iFloor2 = request.targetHeight;
            float f13 = request.rotationDegrees;
            if (f13 != 0.0f) {
                double d = f13;
                double dCos = Math.cos(Math.toRadians(d));
                double dSin = Math.sin(Math.toRadians(d));
                if (request.hasRotationPivot) {
                    matrix3.setRotate(f13, request.rotationPivotX, request.rotationPivotY);
                    double d2 = 1.0d - dCos;
                    double d3 = (((double) request.rotationPivotX) * d2) + (((double) request.rotationPivotY) * dSin);
                    double d4 = (((double) request.rotationPivotY) * d2) - (((double) request.rotationPivotX) * dSin);
                    double d5 = (((double) request.targetWidth) * dCos) + d3;
                    i3 = height;
                    z = z3;
                    double d6 = (((double) request.targetWidth) * dSin) + d4;
                    matrix = matrix3;
                    i2 = width;
                    double d7 = ((((double) request.targetWidth) * dCos) + d3) - (((double) request.targetHeight) * dSin);
                    double d8 = (((double) request.targetWidth) * dSin) + d4 + (((double) request.targetHeight) * dCos);
                    double d9 = d3 - (((double) request.targetHeight) * dSin);
                    double d10 = (((double) request.targetHeight) * dCos) + d4;
                    double dMax = Math.max(d9, Math.max(d7, Math.max(d3, d5)));
                    double dMin = Math.min(d9, Math.min(d7, Math.min(d3, d5)));
                    double dMax2 = Math.max(d10, Math.max(d8, Math.max(d4, d6)));
                    double dMin2 = Math.min(d10, Math.min(d8, Math.min(d4, d6)));
                    iFloor = (int) Math.floor(dMax - dMin);
                    iFloor2 = (int) Math.floor(dMax2 - dMin2);
                } else {
                    i2 = width;
                    i3 = height;
                    z = z3;
                    matrix3.setRotate(f13);
                    double d11 = ((double) request.targetWidth) * dCos;
                    double d12 = ((double) request.targetWidth) * dSin;
                    double d13 = (((double) request.targetWidth) * dCos) - (((double) request.targetHeight) * dSin);
                    double d14 = (((double) request.targetWidth) * dSin) + (((double) request.targetHeight) * dCos);
                    double d15 = -(((double) request.targetHeight) * dSin);
                    double d16 = ((double) request.targetHeight) * dCos;
                    matrix = matrix3;
                    double dMax3 = Math.max(d15, Math.max(d13, Math.max(AudioStats.AUDIO_AMPLITUDE_NONE, d11)));
                    double dMin3 = Math.min(d15, Math.min(d13, Math.min(AudioStats.AUDIO_AMPLITUDE_NONE, d11)));
                    double dMax4 = Math.max(d16, Math.max(d14, Math.max(AudioStats.AUDIO_AMPLITUDE_NONE, d12)));
                    double dMin4 = Math.min(d16, Math.min(d14, Math.min(AudioStats.AUDIO_AMPLITUDE_NONE, d12)));
                    int iFloor3 = (int) Math.floor(dMax3 - dMin3);
                    iFloor2 = (int) Math.floor(dMax4 - dMin4);
                    iFloor = iFloor3;
                }
            } else {
                i2 = width;
                i3 = height;
                z = z3;
                matrix = matrix3;
            }
            if (i != 0) {
                int exifRotation = getExifRotation(i);
                int exifTranslation = getExifTranslation(i);
                if (exifRotation != 0) {
                    matrix2 = matrix;
                    matrix2.preRotate(exifRotation);
                    if (exifRotation == 90 || exifRotation == 270) {
                        int i18 = iFloor2;
                        iFloor2 = iFloor;
                        iFloor = i18;
                    }
                } else {
                    matrix2 = matrix;
                }
                if (exifTranslation != 1) {
                    matrix2.postScale(exifTranslation, 1.0f);
                }
            } else {
                matrix2 = matrix;
            }
            if (request.centerCrop) {
                if (iFloor != 0) {
                    i6 = i2;
                    f9 = iFloor / i6;
                    i7 = i3;
                } else {
                    i6 = i2;
                    i7 = i3;
                    f9 = iFloor2 / i7;
                }
                if (iFloor2 != 0) {
                    f10 = iFloor2;
                    f11 = i7;
                } else {
                    f10 = iFloor;
                    f11 = i6;
                }
                float f14 = f10 / f11;
                if (f9 > f14) {
                    int iCeil = (int) Math.ceil(i7 * (f14 / f9));
                    if ((request.centerCropGravity & 48) == 48) {
                        i17 = 0;
                    } else {
                        i17 = (request.centerCropGravity & 80) == 80 ? i7 - iCeil : (i7 - iCeil) / 2;
                    }
                    f12 = iFloor2 / iCeil;
                    i9 = iCeil;
                    z2 = z;
                    i11 = 0;
                    i10 = i17;
                    i8 = i6;
                } else if (f9 < f14) {
                    int iCeil2 = (int) Math.ceil(i6 * (f9 / f14));
                    if ((request.centerCropGravity & 3) == 3) {
                        i12 = 0;
                    } else {
                        i12 = (request.centerCropGravity & 5) == 5 ? i6 - iCeil2 : (i6 - iCeil2) / 2;
                    }
                    i11 = i12;
                    i8 = iCeil2;
                    i9 = i7;
                    f9 = iFloor / iCeil2;
                    z2 = z;
                    f12 = f14;
                    i10 = 0;
                } else {
                    i8 = i6;
                    i9 = i7;
                    f9 = f14;
                    f12 = f9;
                    z2 = z;
                    i10 = 0;
                    i11 = 0;
                }
                if (shouldResize(z2, i6, i7, iFloor, iFloor2)) {
                    matrix2.preScale(f9, f12);
                }
                i13 = i10;
                i14 = i9;
                i15 = i11;
                i16 = i8;
                bitmapCreateBitmap = Bitmap.createBitmap(bitmap, i15, i13, i16, i14, matrix2, true);
                if (bitmapCreateBitmap != bitmap) {
                    return bitmap;
                }
                bitmap.recycle();
                return bitmapCreateBitmap;
            }
            i4 = i3;
            boolean z4 = z;
            i5 = i2;
            if (request.centerInside) {
                if (iFloor != 0) {
                    f5 = iFloor;
                    f6 = i5;
                } else {
                    f5 = iFloor2;
                    f6 = i4;
                }
                float f15 = f5 / f6;
                if (iFloor2 != 0) {
                    f7 = iFloor2;
                    f8 = i4;
                } else {
                    f7 = iFloor;
                    f8 = i5;
                }
                float f16 = f7 / f8;
                if (f15 >= f16) {
                    f15 = f16;
                }
                if (shouldResize(z4, i5, i4, iFloor, iFloor2)) {
                    matrix2.preScale(f15, f15);
                }
            } else if ((iFloor != 0 || iFloor2 != 0) && (iFloor != i5 || iFloor2 != i4)) {
                if (iFloor != 0) {
                    f = iFloor;
                    f2 = i5;
                } else {
                    f = iFloor2;
                    f2 = i4;
                }
                float f17 = f / f2;
                if (iFloor2 != 0) {
                    f3 = iFloor2;
                    f4 = i4;
                } else {
                    f3 = iFloor;
                    f4 = i5;
                }
                float f18 = f3 / f4;
                if (shouldResize(z4, i5, i4, iFloor, iFloor2)) {
                    matrix2.preScale(f17, f18);
                }
            }
        } else {
            i4 = height;
            matrix2 = matrix3;
            i5 = width;
        }
        i16 = i5;
        i14 = i4;
        i15 = 0;
        i13 = 0;
        bitmapCreateBitmap = Bitmap.createBitmap(bitmap, i15, i13, i16, i14, matrix2, true);
        if (bitmapCreateBitmap != bitmap) {
        }
    }
}

