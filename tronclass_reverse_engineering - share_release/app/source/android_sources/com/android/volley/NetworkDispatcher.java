package com.android.volley;

import android.net.TrafficStats;
import android.os.Process;
import android.os.SystemClock;
import java.util.concurrent.BlockingQueue;
public class NetworkDispatcher extends Thread {
    private final Cache mCache;
    private final ResponseDelivery mDelivery;
    private final Network mNetwork;
    private final BlockingQueue<Request<?>> mQueue;
    private volatile boolean mQuit = false;

    public NetworkDispatcher(BlockingQueue<Request<?>> blockingQueue, Network network, Cache cache, ResponseDelivery responseDelivery) {
        this.mQueue = blockingQueue;
        this.mNetwork = network;
        this.mCache = cache;
        this.mDelivery = responseDelivery;
    }

    public void quit() {
        this.mQuit = true;
        interrupt();
    }

    private void addTrafficStatsTag(Request<?> request) {
        TrafficStats.setThreadStatsTag(request.getTrafficStatsTag());
    }

    @Override // java.lang.Thread, java.lang.Runnable
    public void run() {
        Process.setThreadPriority(10);
        while (true) {
            try {
                processRequest();
            } catch (InterruptedException unused) {
                if (this.mQuit) {
                    Thread.currentThread().interrupt();
                    return;
                }
                VolleyLog.e("Ignoring spurious interrupt of NetworkDispatcher thread; use quit() to terminate it", new Object[0]);
            }
        }
    }

    private void processRequest() throws InterruptedException {
        processRequest(this.mQueue.take());
    }

    void processRequest(Request<?> request) {
        long jElapsedRealtime = SystemClock.elapsedRealtime();
        request.sendEvent(3);
        try {
            try {
                try {
                    request.addMarker("network-queue-take");
                } catch (VolleyError e) {
                    e.setNetworkTimeMs(SystemClock.elapsedRealtime() - jElapsedRealtime);
                    parseAndDeliverNetworkError(request, e);
                    request.notifyListenerResponseNotUsable();
                }
            } catch (Exception e2) {
                VolleyLog.e(e2, "Unhandled exception %s", e2.toString());
                VolleyError volleyError = new VolleyError(e2);
                volleyError.setNetworkTimeMs(SystemClock.elapsedRealtime() - jElapsedRealtime);
                this.mDelivery.postError(request, volleyError);
                request.notifyListenerResponseNotUsable();
            }
            if (request.isCanceled()) {
                request.finish("network-discard-cancelled");
                request.notifyListenerResponseNotUsable();
                return;
            }
            addTrafficStatsTag(request);
            NetworkResponse networkResponsePerformRequest = this.mNetwork.performRequest(request);
            request.addMarker("network-http-complete");
            if (networkResponsePerformRequest.notModified && request.hasHadResponseDelivered()) {
                request.finish("not-modified");
                request.notifyListenerResponseNotUsable();
                return;
            }
            Response<?> networkResponse = request.parseNetworkResponse(networkResponsePerformRequest);
            request.addMarker("network-parse-complete");
            if (request.shouldCache() && networkResponse.cacheEntry != null) {
                this.mCache.put(request.getCacheKey(), networkResponse.cacheEntry);
                request.addMarker("network-cache-written");
            }
            request.markDelivered();
            this.mDelivery.postResponse(request, networkResponse);
            request.notifyListenerResponseReceived(networkResponse);
        } finally {
            request.sendEvent(4);
        }
    }

    private void parseAndDeliverNetworkError(Request<?> request, VolleyError volleyError) {
        this.mDelivery.postError(request, request.parseNetworkError(volleyError));
    }
}

