package com.android.volley.toolbox;

import android.os.SystemClock;
import com.android.volley.Header;
import com.android.volley.Network;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
public class BasicNetwork implements Network {
    private static final int DEFAULT_POOL_SIZE = 4096;
    private final BaseHttpStack mBaseHttpStack;

    @Deprecated
    protected final HttpStack mHttpStack;
    protected final ByteArrayPool mPool;

    @Deprecated
    public BasicNetwork(HttpStack httpStack) {
        this(httpStack, new ByteArrayPool(4096));
    }

    @Deprecated
    public BasicNetwork(HttpStack httpStack, ByteArrayPool byteArrayPool) {
        this.mHttpStack = httpStack;
        this.mBaseHttpStack = new AdaptedHttpStack(httpStack);
        this.mPool = byteArrayPool;
    }

    public BasicNetwork(BaseHttpStack baseHttpStack) {
        this(baseHttpStack, new ByteArrayPool(4096));
    }

    public BasicNetwork(BaseHttpStack baseHttpStack, ByteArrayPool byteArrayPool) {
        this.mBaseHttpStack = baseHttpStack;
        this.mHttpStack = baseHttpStack;
        this.mPool = byteArrayPool;
    }

    @Override // com.android.volley.Network
    public NetworkResponse performRequest(Request<?> request) throws Throwable {
        IOException iOException;
        HttpResponse httpResponse;
        byte[] bArr;
        HttpResponse httpResponseExecuteRequest;
        int statusCode;
        List<Header> headers;
        byte[] bArrInputStreamToBytes;
        long jElapsedRealtime = SystemClock.elapsedRealtime();
        while (true) {
            Collections.emptyList();
            try {
                httpResponseExecuteRequest = this.mBaseHttpStack.executeRequest(request, HttpHeaderParser.getCacheHeaders(request.getCacheEntry()));
                try {
                    statusCode = httpResponseExecuteRequest.getStatusCode();
                    headers = httpResponseExecuteRequest.getHeaders();
                    break;
                } catch (IOException e) {
                    bArr = null;
                    httpResponse = httpResponseExecuteRequest;
                    iOException = e;
                }
            } catch (IOException e2) {
                iOException = e2;
                httpResponse = null;
                bArr = null;
            }
            NetworkUtility.attemptRetryOnException(request, NetworkUtility.shouldRetryException(request, iOException, jElapsedRealtime, httpResponse, bArr));
        }
        if (statusCode == 304) {
            return NetworkUtility.getNotModifiedNetworkResponse(request, SystemClock.elapsedRealtime() - jElapsedRealtime, headers);
        }
        InputStream content = httpResponseExecuteRequest.getContent();
        if (content != null) {
            bArrInputStreamToBytes = NetworkUtility.inputStreamToBytes(content, httpResponseExecuteRequest.getContentLength(), this.mPool);
        } else {
            bArrInputStreamToBytes = new byte[0];
        }
        NetworkUtility.logSlowRequests(SystemClock.elapsedRealtime() - jElapsedRealtime, request, bArrInputStreamToBytes, statusCode);
        if (statusCode < 200 || statusCode > 299) {
            throw new IOException();
        }
        return new NetworkResponse(statusCode, bArrInputStreamToBytes, false, SystemClock.elapsedRealtime() - jElapsedRealtime, headers);
    }

    @Deprecated
    protected static Map<String, String> convertHeaders(Header[] headerArr) {
        TreeMap treeMap = new TreeMap(String.CASE_INSENSITIVE_ORDER);
        for (int i = 0; i < headerArr.length; i++) {
            treeMap.put(headerArr[i].getName(), headerArr[i].getValue());
        }
        return treeMap;
    }
}

