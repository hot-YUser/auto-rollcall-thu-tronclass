package com.squareup.picasso;

import java.io.IOException;
import okhttp3.Response;
public interface Downloader {
    Response load(okhttp3.Request request) throws IOException;

    void shutdown();
}

