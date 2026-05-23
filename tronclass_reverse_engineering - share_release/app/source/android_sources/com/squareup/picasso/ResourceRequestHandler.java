package com.squareup.picasso;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import com.squareup.picasso.Picasso;
import com.squareup.picasso.RequestHandler;
import java.io.IOException;
class ResourceRequestHandler extends RequestHandler {
    private final Context context;

    ResourceRequestHandler(Context context) {
        this.context = context;
    }

    @Override // com.squareup.picasso.RequestHandler
    public boolean canHandleRequest(Request request) {
        if (request.resourceId != 0) {
            return true;
        }
        return "android.resource".equals(request.uri.getScheme());
    }

    @Override // com.squareup.picasso.RequestHandler
    public RequestHandler.Result load(Request request, int i) throws IOException {
        Resources resources = Utils.getResources(this.context, request);
        return new RequestHandler.Result(decodeResource(resources, Utils.getResourceId(resources, request), request), Picasso.LoadedFrom.DISK);
    }

    private static Bitmap decodeResource(Resources resources, int i, Request request) {
        BitmapFactory.Options optionsCreateBitmapOptions = createBitmapOptions(request);
        if (requiresInSampleSize(optionsCreateBitmapOptions)) {
            BitmapFactory.decodeResource(resources, i, optionsCreateBitmapOptions);
            calculateInSampleSize(request.targetWidth, request.targetHeight, optionsCreateBitmapOptions, request);
        }
        return BitmapFactory.decodeResource(resources, i, optionsCreateBitmapOptions);
    }
}

