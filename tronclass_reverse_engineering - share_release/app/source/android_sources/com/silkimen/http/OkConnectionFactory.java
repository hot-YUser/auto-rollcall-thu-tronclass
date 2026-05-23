package com.silkimen.http;

import com.silkimen.http.HttpRequest;
import java.net.HttpURLConnection;
import java.net.Proxy;
import java.net.URL;
import okhttp3.OkHttpClient;
import okhttp3.OkUrlFactory;
public class OkConnectionFactory implements HttpRequest.ConnectionFactory {
    private final OkHttpClient client = new OkHttpClient();

    @Override // com.silkimen.http.HttpRequest.ConnectionFactory
    public HttpURLConnection create(URL url) {
        return new OkUrlFactory(this.client).open(url);
    }

    @Override // com.silkimen.http.HttpRequest.ConnectionFactory
    public HttpURLConnection create(URL url, Proxy proxy) {
        return new OkUrlFactory(new OkHttpClient.Builder().proxy(proxy).build()).open(url);
    }
}

