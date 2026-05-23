package com.google.firebase.messaging;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.text.TextUtils;
import android.util.Log;
import com.google.android.gms.common.internal.Preconditions;
import com.google.android.gms.tasks.Task;
import com.google.android.gms.tasks.Tasks;
import java.io.Closeable;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
final class zzm implements Closeable {
    private final URL zza;
    private Task<Bitmap> zzb;
    private volatile InputStream zzc;

    public static zzm zza(String str) {
        if (TextUtils.isEmpty(str)) {
            return null;
        }
        try {
            return new zzm(new URL(str));
        } catch (MalformedURLException unused) {
            String strValueOf = String.valueOf(str);
            Log.w("FirebaseMessaging", strValueOf.length() != 0 ? "Not downloading image, bad URL: ".concat(strValueOf) : new String("Not downloading image, bad URL: "));
            return null;
        }
    }

    private zzm(URL url) {
        this.zza = url;
    }

    public final void zza(Executor executor) {
        this.zzb = Tasks.call(executor, new Callable(this) { // from class: com.google.firebase.messaging.zzl
            private final zzm zza;

            {
                this.zza = this;
            }

            @Override // java.util.concurrent.Callable
            public final Object call() {
                return this.zza.zzb();
            }
        });
    }

    public final Task<Bitmap> zza() {
        return (Task) Preconditions.checkNotNull(this.zzb);
    }

    public final Bitmap zzb() throws IOException {
        String strValueOf = String.valueOf(this.zza);
        Log.i("FirebaseMessaging", new StringBuilder(String.valueOf(strValueOf).length() + 22).append("Starting download of: ").append(strValueOf).toString());
        byte[] bArrZzc = zzc();
        Bitmap bitmapDecodeByteArray = BitmapFactory.decodeByteArray(bArrZzc, 0, bArrZzc.length);
        if (bitmapDecodeByteArray == null) {
            String strValueOf2 = String.valueOf(this.zza);
            throw new IOException(new StringBuilder(String.valueOf(strValueOf2).length() + 24).append("Failed to decode image: ").append(strValueOf2).toString());
        }
        if (Log.isLoggable("FirebaseMessaging", 3)) {
            String strValueOf3 = String.valueOf(this.zza);
            Log.d("FirebaseMessaging", new StringBuilder(String.valueOf(strValueOf3).length() + 31).append("Successfully downloaded image: ").append(strValueOf3).toString());
        }
        return bitmapDecodeByteArray;
    }

    private final byte[] zzc() throws IOException {
        URLConnection uRLConnectionOpenConnection = this.zza.openConnection();
        if (uRLConnectionOpenConnection.getContentLength() > 1048576) {
            throw new IOException("Content-Length exceeds max size of 1048576");
        }
        InputStream inputStream = uRLConnectionOpenConnection.getInputStream();
        try {
            this.zzc = inputStream;
            byte[] bArrZza = com.google.android.gms.internal.firebase_messaging.zzj.zza(com.google.android.gms.internal.firebase_messaging.zzj.zza(inputStream, 1048577L));
            if (inputStream != null) {
                inputStream.close();
            }
            if (Log.isLoggable("FirebaseMessaging", 2)) {
                int length = bArrZza.length;
                String strValueOf = String.valueOf(this.zza);
                Log.v("FirebaseMessaging", new StringBuilder(String.valueOf(strValueOf).length() + 34).append("Downloaded ").append(length).append(" bytes from ").append(strValueOf).toString());
            }
            if (bArrZza.length <= 1048576) {
                return bArrZza;
            }
            throw new IOException("Image exceeds max size of 1048576");
        } catch (Throwable th) {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (Throwable th2) {
                    com.google.android.gms.internal.firebase_messaging.zzm.zza(th, th2);
                }
            }
            throw th;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
        try {
            com.google.android.gms.internal.firebase_messaging.zzk.zza(this.zzc);
        } catch (NullPointerException e) {
            Log.e("FirebaseMessaging", "Failed to close the image download stream.", e);
        }
    }
}

