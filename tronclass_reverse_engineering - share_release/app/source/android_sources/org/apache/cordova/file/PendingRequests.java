package org.apache.cordova.file;

import android.util.SparseArray;
import org.apache.cordova.CallbackContext;
class PendingRequests {
    private int currentReqId = 0;
    private SparseArray<Request> requests = new SparseArray<>();

    PendingRequests() {
    }

    static /* synthetic */ int access$208(PendingRequests pendingRequests) {
        int i = pendingRequests.currentReqId;
        pendingRequests.currentReqId = i + 1;
        return i;
    }

    public synchronized int createRequest(String str, int i, CallbackContext callbackContext) {
        Request request;
        request = new Request(str, i, callbackContext);
        this.requests.put(request.requestCode, request);
        return request.requestCode;
    }

    public synchronized Request getAndRemove(int i) {
        Request request;
        request = this.requests.get(i);
        this.requests.remove(i);
        return request;
    }

    public class Request {
        private int action;
        private CallbackContext callbackContext;
        private String rawArgs;
        private int requestCode;

        private Request(String str, int i, CallbackContext callbackContext) {
            this.rawArgs = str;
            this.action = i;
            this.callbackContext = callbackContext;
            this.requestCode = PendingRequests.access$208(PendingRequests.this);
        }

        public int getAction() {
            return this.action;
        }

        public String getRawArgs() {
            return this.rawArgs;
        }

        public CallbackContext getCallbackContext() {
            return this.callbackContext;
        }
    }
}

