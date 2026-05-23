package com.google.android.datatransport.runtime.retries;
public interface RetryStrategy<TInput, TResult> {
    TInput shouldRetry(TInput tinput, TResult tresult);
}

