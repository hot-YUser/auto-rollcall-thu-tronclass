package com.squareup.picasso;

import android.graphics.Bitmap;
import com.squareup.picasso.Picasso;
class FetchAction extends Action<Object> {
    private Callback callback;
    private final Object target;

    FetchAction(Picasso picasso, Request request, int i, int i2, Object obj, String str, Callback callback) {
        super(picasso, null, request, i, i2, 0, null, str, obj, false);
        this.target = new Object();
        this.callback = callback;
    }

    @Override // com.squareup.picasso.Action
    void complete(Bitmap bitmap, Picasso.LoadedFrom loadedFrom) {
        Callback callback = this.callback;
        if (callback != null) {
            callback.onSuccess();
        }
    }

    @Override // com.squareup.picasso.Action
    void error(Exception exc) {
        Callback callback = this.callback;
        if (callback != null) {
            callback.onError(exc);
        }
    }

    @Override // com.squareup.picasso.Action
    void cancel() {
        super.cancel();
        this.callback = null;
    }

    @Override // com.squareup.picasso.Action
    Object getTarget() {
        return this.target;
    }
}

