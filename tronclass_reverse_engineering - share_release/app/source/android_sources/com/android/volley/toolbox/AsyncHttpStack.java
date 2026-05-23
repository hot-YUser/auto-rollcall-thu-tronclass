package com.android.volley.toolbox;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.VolleyLog;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.util.Map;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.atomic.AtomicReference;
public abstract class AsyncHttpStack extends BaseHttpStack {
    private ExecutorService mBlockingExecutor;
    private ExecutorService mNonBlockingExecutor;

    public interface OnRequestComplete {
        void onAuthError(AuthFailureError authFailureError);

        void onError(IOException iOException);

        void onSuccess(HttpResponse httpResponse);
    }

    public abstract void executeRequest(Request<?> request, Map<String, String> map, OnRequestComplete onRequestComplete);

    public void setNonBlockingExecutor(ExecutorService executorService) {
        this.mNonBlockingExecutor = executorService;
    }

    public void setBlockingExecutor(ExecutorService executorService) {
        this.mBlockingExecutor = executorService;
    }

    protected ExecutorService getBlockingExecutor() {
        return this.mBlockingExecutor;
    }

    protected ExecutorService getNonBlockingExecutor() {
        return this.mNonBlockingExecutor;
    }

    @Override // com.android.volley.toolbox.BaseHttpStack
    public final HttpResponse executeRequest(Request<?> request, Map<String, String> map) throws IOException, AuthFailureError {
        final CountDownLatch countDownLatch = new CountDownLatch(1);
        final AtomicReference atomicReference = new AtomicReference();
        executeRequest(request, map, new OnRequestComplete() { // from class: com.android.volley.toolbox.AsyncHttpStack.1
            /* high-level source view WARN: Multi-variable type inference failed */
            @Override // com.android.volley.toolbox.AsyncHttpStack.OnRequestComplete
            public void onSuccess(HttpResponse httpResponse) {
                atomicReference.set(new Response(httpResponse, null, 0 == true ? 1 : 0));
                countDownLatch.countDown();
            }

            /* high-level source view WARN: Multi-variable type inference failed */
            @Override // com.android.volley.toolbox.AsyncHttpStack.OnRequestComplete
            public void onAuthError(AuthFailureError authFailureError) {
                atomicReference.set(new Response(null, 0 == true ? 1 : 0, authFailureError));
                countDownLatch.countDown();
            }

            /* high-level source view WARN: Multi-variable type inference failed */
            @Override // com.android.volley.toolbox.AsyncHttpStack.OnRequestComplete
            public void onError(IOException iOException) {
                atomicReference.set(new Response(null, iOException, 0 == true ? 1 : 0));
                countDownLatch.countDown();
            }
        });
        try {
            countDownLatch.await();
            Response response = (Response) atomicReference.get();
            if (response.httpResponse != null) {
                return response.httpResponse;
            }
            if (response.ioException != null) {
                throw response.ioException;
            }
            throw response.authFailureError;
        } catch (InterruptedException e) {
            VolleyLog.e(e, "while waiting for CountDownLatch", new Object[0]);
            Thread.currentThread().interrupt();
            throw new InterruptedIOException(e.toString());
        }
    }

    private static class Response {
        AuthFailureError authFailureError;
        HttpResponse httpResponse;
        IOException ioException;

        private Response(HttpResponse httpResponse, IOException iOException, AuthFailureError authFailureError) {
            this.httpResponse = httpResponse;
            this.ioException = iOException;
            this.authFailureError = authFailureError;
        }
    }
}

