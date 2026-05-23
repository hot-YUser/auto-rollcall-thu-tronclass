package com.android.volley.toolbox;

import android.os.SystemClock;
import com.android.volley.AsyncNetwork;
import com.android.volley.AuthFailureError;
import com.android.volley.Header;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestTask;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.AsyncHttpStack;
import com.android.volley.toolbox.NetworkUtility;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.concurrent.ExecutorService;
public class BasicAsyncNetwork extends AsyncNetwork {
    private final AsyncHttpStack mAsyncStack;
    private final ByteArrayPool mPool;

    private BasicAsyncNetwork(AsyncHttpStack asyncHttpStack, ByteArrayPool byteArrayPool) {
        this.mAsyncStack = asyncHttpStack;
        this.mPool = byteArrayPool;
    }

    @Override // com.android.volley.AsyncNetwork
    public void setBlockingExecutor(ExecutorService executorService) {
        super.setBlockingExecutor(executorService);
        this.mAsyncStack.setBlockingExecutor(executorService);
    }

    @Override // com.android.volley.AsyncNetwork
    public void setNonBlockingExecutor(ExecutorService executorService) {
        super.setNonBlockingExecutor(executorService);
        this.mAsyncStack.setNonBlockingExecutor(executorService);
    }
    public void onRequestSucceeded(Request<?> request, long j, HttpResponse httpResponse, AsyncNetwork.OnRequestComplete onRequestComplete) {
        int statusCode = httpResponse.getStatusCode();
        List<Header> headers = httpResponse.getHeaders();
        if (statusCode == 304) {
            onRequestComplete.onSuccess(NetworkUtility.getNotModifiedNetworkResponse(request, SystemClock.elapsedRealtime() - j, headers));
            return;
        }
        byte[] contentBytes = httpResponse.getContentBytes();
        if (contentBytes == null && httpResponse.getContent() == null) {
            contentBytes = new byte[0];
        }
        byte[] bArr = contentBytes;
        if (bArr != null) {
            onResponseRead(j, statusCode, httpResponse, request, onRequestComplete, headers, bArr);
        } else {
            getBlockingExecutor().execute(new ResponseParsingTask(httpResponse.getContent(), httpResponse, request, onRequestComplete, j, headers, statusCode));
        }
    }
    public void onRequestFailed(Request<?> request, AsyncNetwork.OnRequestComplete onRequestComplete, IOException iOException, long j, HttpResponse httpResponse, byte[] bArr) {
        try {
            getBlockingExecutor().execute(new InvokeRetryPolicyTask(request, NetworkUtility.shouldRetryException(request, iOException, j, httpResponse, bArr), onRequestComplete));
        } catch (VolleyError e) {
            onRequestComplete.onError(e);
        }
    }

    private class InvokeRetryPolicyTask<T> extends RequestTask<T> {
        final AsyncNetwork.OnRequestComplete callback;
        final Request<T> request;
        final NetworkUtility.RetryInfo retryInfo;

        InvokeRetryPolicyTask(Request<T> request, NetworkUtility.RetryInfo retryInfo, AsyncNetwork.OnRequestComplete onRequestComplete) {
            super(request);
            this.request = request;
            this.retryInfo = retryInfo;
            this.callback = onRequestComplete;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                NetworkUtility.attemptRetryOnException(this.request, this.retryInfo);
                BasicAsyncNetwork.this.performRequest(this.request, this.callback);
            } catch (VolleyError e) {
                this.callback.onError(e);
            }
        }
    }

    @Override // com.android.volley.AsyncNetwork
    public void performRequest(final Request<?> request, final AsyncNetwork.OnRequestComplete onRequestComplete) {
        if (getBlockingExecutor() == null) {
            throw new IllegalStateException("mBlockingExecuter must be set before making a request");
        }
        final long jElapsedRealtime = SystemClock.elapsedRealtime();
        this.mAsyncStack.executeRequest(request, HttpHeaderParser.getCacheHeaders(request.getCacheEntry()), new AsyncHttpStack.OnRequestComplete() { // from class: com.android.volley.toolbox.BasicAsyncNetwork.1
            @Override // com.android.volley.toolbox.AsyncHttpStack.OnRequestComplete
            public void onSuccess(HttpResponse httpResponse) {
                BasicAsyncNetwork.this.onRequestSucceeded(request, jElapsedRealtime, httpResponse, onRequestComplete);
            }

            @Override // com.android.volley.toolbox.AsyncHttpStack.OnRequestComplete
            public void onAuthError(AuthFailureError authFailureError) {
                onRequestComplete.onError(authFailureError);
            }

            @Override // com.android.volley.toolbox.AsyncHttpStack.OnRequestComplete
            public void onError(IOException iOException) {
                BasicAsyncNetwork.this.onRequestFailed(request, onRequestComplete, iOException, jElapsedRealtime, null, null);
            }
        });
    }
    public void onResponseRead(long j, int i, HttpResponse httpResponse, Request<?> request, AsyncNetwork.OnRequestComplete onRequestComplete, List<Header> list, byte[] bArr) {
        NetworkUtility.logSlowRequests(SystemClock.elapsedRealtime() - j, request, bArr, i);
        if (i < 200 || i > 299) {
            onRequestFailed(request, onRequestComplete, new IOException(), j, httpResponse, bArr);
        } else {
            onRequestComplete.onSuccess(new NetworkResponse(i, bArr, false, SystemClock.elapsedRealtime() - j, list));
        }
    }

    private class ResponseParsingTask<T> extends RequestTask<T> {
        AsyncNetwork.OnRequestComplete callback;
        HttpResponse httpResponse;
        InputStream inputStream;
        Request<T> request;
        long requestStartMs;
        List<Header> responseHeaders;
        int statusCode;

        ResponseParsingTask(InputStream inputStream, HttpResponse httpResponse, Request<T> request, AsyncNetwork.OnRequestComplete onRequestComplete, long j, List<Header> list, int i) {
            super(request);
            this.inputStream = inputStream;
            this.httpResponse = httpResponse;
            this.request = request;
            this.callback = onRequestComplete;
            this.requestStartMs = j;
            this.responseHeaders = list;
            this.statusCode = i;
        }

        @Override // java.lang.Runnable
        public void run() throws Throwable {
            try {
                BasicAsyncNetwork.this.onResponseRead(this.requestStartMs, this.statusCode, this.httpResponse, this.request, this.callback, this.responseHeaders, NetworkUtility.inputStreamToBytes(this.inputStream, this.httpResponse.getContentLength(), BasicAsyncNetwork.this.mPool));
            } catch (IOException e) {
                BasicAsyncNetwork.this.onRequestFailed(this.request, this.callback, e, this.requestStartMs, this.httpResponse, null);
            }
        }
    }

    public static class Builder {
        private static final int DEFAULT_POOL_SIZE = 4096;
        private AsyncHttpStack mAsyncStack;
        private ByteArrayPool mPool = null;

        public Builder(AsyncHttpStack asyncHttpStack) {
            this.mAsyncStack = asyncHttpStack;
        }

        public Builder setPool(ByteArrayPool byteArrayPool) {
            this.mPool = byteArrayPool;
            return this;
        }

        public BasicAsyncNetwork build() {
            if (this.mPool == null) {
                this.mPool = new ByteArrayPool(4096);
            }
            return new BasicAsyncNetwork(this.mAsyncStack, this.mPool);
        }
    }
}

