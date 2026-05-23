package okhttp3.internal.huc;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ProtocolException;
import java.net.URL;
import java.security.Permission;
import java.security.Principal;
import java.security.cert.Certificate;
import java.util.Map;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLPeerUnverifiedException;
import javax.net.ssl.SSLSocketFactory;
import okhttp3.Handshake;
import okhttp3.OkHttpClient;
import okhttp3.internal.URLFilter;
public final class OkHttpsURLConnection extends DelegatingHttpsURLConnection {
    private final OkHttpURLConnection delegate;

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ void addRequestProperty(String str, String str2) {
        super.addRequestProperty(str, str2);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ void connect() throws IOException {
        super.connect();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection
    public /* bridge */ /* synthetic */ void disconnect() {
        super.disconnect();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ boolean getAllowUserInteraction() {
        return super.getAllowUserInteraction();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, javax.net.ssl.HttpsURLConnection
    public /* bridge */ /* synthetic */ String getCipherSuite() {
        return super.getCipherSuite();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ int getConnectTimeout() {
        return super.getConnectTimeout();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ Object getContent() throws IOException {
        return super.getContent();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ Object getContent(Class[] clsArr) throws IOException {
        return super.getContent(clsArr);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ String getContentEncoding() {
        return super.getContentEncoding();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ int getContentLength() {
        return super.getContentLength();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ long getContentLengthLong() {
        return super.getContentLengthLong();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ String getContentType() {
        return super.getContentType();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ long getDate() {
        return super.getDate();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ boolean getDefaultUseCaches() {
        return super.getDefaultUseCaches();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ boolean getDoInput() {
        return super.getDoInput();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ boolean getDoOutput() {
        return super.getDoOutput();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection
    public /* bridge */ /* synthetic */ InputStream getErrorStream() {
        return super.getErrorStream();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ long getExpiration() {
        return super.getExpiration();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ String getHeaderField(int i) {
        return super.getHeaderField(i);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ String getHeaderField(String str) {
        return super.getHeaderField(str);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ long getHeaderFieldDate(String str, long j) {
        return super.getHeaderFieldDate(str, j);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ int getHeaderFieldInt(String str, int i) {
        return super.getHeaderFieldInt(str, i);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ String getHeaderFieldKey(int i) {
        return super.getHeaderFieldKey(i);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ long getHeaderFieldLong(String str, long j) {
        return super.getHeaderFieldLong(str, j);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ Map getHeaderFields() {
        return super.getHeaderFields();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ long getIfModifiedSince() {
        return super.getIfModifiedSince();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ InputStream getInputStream() throws IOException {
        return super.getInputStream();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection
    public /* bridge */ /* synthetic */ boolean getInstanceFollowRedirects() {
        return super.getInstanceFollowRedirects();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ long getLastModified() {
        return super.getLastModified();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, javax.net.ssl.HttpsURLConnection
    public /* bridge */ /* synthetic */ Certificate[] getLocalCertificates() {
        return super.getLocalCertificates();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, javax.net.ssl.HttpsURLConnection
    public /* bridge */ /* synthetic */ Principal getLocalPrincipal() {
        return super.getLocalPrincipal();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ OutputStream getOutputStream() throws IOException {
        return super.getOutputStream();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, javax.net.ssl.HttpsURLConnection
    public /* bridge */ /* synthetic */ Principal getPeerPrincipal() throws SSLPeerUnverifiedException {
        return super.getPeerPrincipal();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ Permission getPermission() throws IOException {
        return super.getPermission();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ int getReadTimeout() {
        return super.getReadTimeout();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection
    public /* bridge */ /* synthetic */ String getRequestMethod() {
        return super.getRequestMethod();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ Map getRequestProperties() {
        return super.getRequestProperties();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ String getRequestProperty(String str) {
        return super.getRequestProperty(str);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection
    public /* bridge */ /* synthetic */ int getResponseCode() throws IOException {
        return super.getResponseCode();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection
    public /* bridge */ /* synthetic */ String getResponseMessage() throws IOException {
        return super.getResponseMessage();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, javax.net.ssl.HttpsURLConnection
    public /* bridge */ /* synthetic */ Certificate[] getServerCertificates() throws SSLPeerUnverifiedException {
        return super.getServerCertificates();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ URL getURL() {
        return super.getURL();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ boolean getUseCaches() {
        return super.getUseCaches();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ void setAllowUserInteraction(boolean z) {
        super.setAllowUserInteraction(z);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection
    public /* bridge */ /* synthetic */ void setChunkedStreamingMode(int i) {
        super.setChunkedStreamingMode(i);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ void setConnectTimeout(int i) {
        super.setConnectTimeout(i);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ void setDefaultUseCaches(boolean z) {
        super.setDefaultUseCaches(z);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ void setDoInput(boolean z) {
        super.setDoInput(z);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ void setDoOutput(boolean z) {
        super.setDoOutput(z);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection
    public /* bridge */ /* synthetic */ void setFixedLengthStreamingMode(int i) {
        super.setFixedLengthStreamingMode(i);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection
    public /* bridge */ /* synthetic */ void setFixedLengthStreamingMode(long j) {
        super.setFixedLengthStreamingMode(j);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ void setIfModifiedSince(long j) {
        super.setIfModifiedSince(j);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection
    public /* bridge */ /* synthetic */ void setInstanceFollowRedirects(boolean z) {
        super.setInstanceFollowRedirects(z);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ void setReadTimeout(int i) {
        super.setReadTimeout(i);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection
    public /* bridge */ /* synthetic */ void setRequestMethod(String str) throws ProtocolException {
        super.setRequestMethod(str);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ void setRequestProperty(String str, String str2) {
        super.setRequestProperty(str, str2);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ void setUseCaches(boolean z) {
        super.setUseCaches(z);
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.URLConnection
    public /* bridge */ /* synthetic */ String toString() {
        return super.toString();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, java.net.HttpURLConnection
    public /* bridge */ /* synthetic */ boolean usingProxy() {
        return super.usingProxy();
    }

    public OkHttpsURLConnection(URL url, OkHttpClient okHttpClient) {
        this(new OkHttpURLConnection(url, okHttpClient));
    }

    public OkHttpsURLConnection(URL url, OkHttpClient okHttpClient, URLFilter uRLFilter) {
        this(new OkHttpURLConnection(url, okHttpClient, uRLFilter));
    }

    public OkHttpsURLConnection(OkHttpURLConnection okHttpURLConnection) {
        super(okHttpURLConnection);
        this.delegate = okHttpURLConnection;
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection
    protected Handshake handshake() {
        if (this.delegate.call == null) {
            throw new IllegalStateException("Connection has not yet been established");
        }
        return this.delegate.handshake;
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, javax.net.ssl.HttpsURLConnection
    public void setHostnameVerifier(HostnameVerifier hostnameVerifier) {
        OkHttpURLConnection okHttpURLConnection = this.delegate;
        okHttpURLConnection.client = okHttpURLConnection.client.newBuilder().hostnameVerifier(hostnameVerifier).build();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, javax.net.ssl.HttpsURLConnection
    public HostnameVerifier getHostnameVerifier() {
        return this.delegate.client.hostnameVerifier();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, javax.net.ssl.HttpsURLConnection
    public void setSSLSocketFactory(SSLSocketFactory sSLSocketFactory) {
        if (sSLSocketFactory == null) {
            throw new IllegalArgumentException("sslSocketFactory == null");
        }
        OkHttpURLConnection okHttpURLConnection = this.delegate;
        okHttpURLConnection.client = okHttpURLConnection.client.newBuilder().sslSocketFactory(sSLSocketFactory).build();
    }

    @Override // okhttp3.internal.huc.DelegatingHttpsURLConnection, javax.net.ssl.HttpsURLConnection
    public SSLSocketFactory getSSLSocketFactory() {
        return this.delegate.client.sslSocketFactory();
    }
}

