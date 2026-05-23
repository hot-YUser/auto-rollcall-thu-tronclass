package com.android.volley.toolbox;

import android.os.SystemClock;
import com.android.volley.AuthFailureError;
import com.android.volley.Cache;
import com.android.volley.ClientError;
import com.android.volley.Header;
import com.android.volley.NetworkError;
import com.android.volley.NetworkResponse;
import com.android.volley.NoConnectionError;
import com.android.volley.Request;
import com.android.volley.RetryPolicy;
import com.android.volley.ServerError;
import com.android.volley.TimeoutError;
import com.android.volley.VolleyError;
import com.android.volley.VolleyLog;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.SocketTimeoutException;
import java.util.List;
import org.opencv.videoio.Videoio;
final class NetworkUtility {
    private static final int SLOW_REQUEST_THRESHOLD_MS = 3000;

    private NetworkUtility() {
    }

    static void logSlowRequests(long j, Request<?> request, byte[] bArr, int i) {
        if (VolleyLog.DEBUG || j > 3000) {
            VolleyLog.d("HTTP response for request=<%s> [lifetime=%d], [size=%s], [rc=%d], [retryCount=%s]", request, Long.valueOf(j), bArr != null ? Integer.valueOf(bArr.length) : "null", Integer.valueOf(i), Integer.valueOf(request.getRetryPolicy().getCurrentRetryCount()));
        }
    }

    static NetworkResponse getNotModifiedNetworkResponse(Request<?> request, long j, List<Header> list) {
        Cache.Entry cacheEntry = request.getCacheEntry();
        if (cacheEntry == null) {
            return new NetworkResponse(Videoio.CAP_PROP_PVAPI_BINNINGX, (byte[]) null, true, j, list);
        }
        return new NetworkResponse(Videoio.CAP_PROP_PVAPI_BINNINGX, cacheEntry.data, true, j, HttpHeaderParser.combineHeaders(list, cacheEntry));
    }

    static byte[] inputStreamToBytes(InputStream inputStream, int i, ByteArrayPool byteArrayPool) throws Throwable {
        byte[] buf;
        PoolingByteArrayOutputStream poolingByteArrayOutputStream = new PoolingByteArrayOutputStream(byteArrayPool, i);
        try {
            buf = byteArrayPool.getBuf(1024);
            while (true) {
                try {
                    int i2 = inputStream.read(buf);
                    if (i2 == -1) {
                        break;
                    }
                    poolingByteArrayOutputStream.write(buf, 0, i2);
                } catch (Throwable th) {
                    th = th;
                    if (inputStream != null) {
                        try {
                            inputStream.close();
                        } catch (IOException unused) {
                            VolleyLog.v("Error occurred when closing InputStream", new Object[0]);
                        }
                    }
                    byteArrayPool.returnBuf(buf);
                    poolingByteArrayOutputStream.close();
                    throw th;
                }
            }
            byte[] byteArray = poolingByteArrayOutputStream.toByteArray();
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException unused2) {
                    VolleyLog.v("Error occurred when closing InputStream", new Object[0]);
                }
            }
            byteArrayPool.returnBuf(buf);
            poolingByteArrayOutputStream.close();
            return byteArray;
        } catch (Throwable th2) {
            th = th2;
            buf = null;
        }
    }

    static void attemptRetryOnException(Request<?> request, RetryInfo retryInfo) throws VolleyError {
        RetryPolicy retryPolicy = request.getRetryPolicy();
        int timeoutMs = request.getTimeoutMs();
        try {
            retryPolicy.retry(retryInfo.errorToRetry);
            request.addMarker(String.format("%s-retry [timeout=%s]", retryInfo.logPrefix, Integer.valueOf(timeoutMs)));
        } catch (VolleyError e) {
            request.addMarker(String.format("%s-timeout-giveup [timeout=%s]", retryInfo.logPrefix, Integer.valueOf(timeoutMs)));
            throw e;
        }
    }

    static class RetryInfo {
        private final VolleyError errorToRetry;
        private final String logPrefix;

        private RetryInfo(String str, VolleyError volleyError) {
            this.logPrefix = str;
            this.errorToRetry = volleyError;
        }
    }

    static RetryInfo shouldRetryException(Request<?> request, IOException iOException, long j, HttpResponse httpResponse, byte[] bArr) throws VolleyError {
        if (iOException instanceof SocketTimeoutException) {
            return new RetryInfo("socket", new TimeoutError());
        }
        if (iOException instanceof MalformedURLException) {
            throw new RuntimeException("Bad URL " + request.getUrl(), iOException);
        }
        if (httpResponse != null) {
            int statusCode = httpResponse.getStatusCode();
            VolleyLog.e("Unexpected response code %d for %s", Integer.valueOf(statusCode), request.getUrl());
            if (bArr != null) {
                NetworkResponse networkResponse = new NetworkResponse(statusCode, bArr, false, SystemClock.elapsedRealtime() - j, httpResponse.getHeaders());
                if (statusCode == 401 || statusCode == 403) {
                    return new RetryInfo("auth", new AuthFailureError(networkResponse));
                }
                if (statusCode >= 400 && statusCode <= 499) {
                    throw new ClientError(networkResponse);
                }
                if (statusCode >= 500 && statusCode <= 599 && request.shouldRetryServerErrors()) {
                    return new RetryInfo("server", new ServerError(networkResponse));
                }
                throw new ServerError(networkResponse);
            }
            return new RetryInfo("network", new NetworkError());
        }
        if (request.shouldRetryConnectionErrors()) {
            return new RetryInfo("connection", new NoConnectionError());
        }
        throw new NoConnectionError(iOException);
    }
}

