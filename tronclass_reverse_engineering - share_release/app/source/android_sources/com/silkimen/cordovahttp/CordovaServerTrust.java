package com.silkimen.cordovahttp;

import android.app.Activity;
import android.content.res.AssetManager;
import android.util.Log;
import com.silkimen.http.TLSConfiguration;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.KeyStore;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;
import javax.net.ssl.X509TrustManager;
import org.apache.cordova.CallbackContext;
class CordovaServerTrust implements Runnable {
    private static final String TAG = "Cordova-Plugin-HTTP";
    private Activity activity;
    private CallbackContext callbackContext;
    private String mode;
    private final TrustManager[] noOpTrustManagers = {new X509TrustManager() { // from class: com.silkimen.cordovahttp.CordovaServerTrust.1
        @Override // javax.net.ssl.X509TrustManager
        public void checkClientTrusted(X509Certificate[] x509CertificateArr, String str) {
        }

        @Override // javax.net.ssl.X509TrustManager
        public void checkServerTrusted(X509Certificate[] x509CertificateArr, String str) {
        }

        @Override // javax.net.ssl.X509TrustManager
        public X509Certificate[] getAcceptedIssuers() {
            return new X509Certificate[0];
        }
    }};
    private final HostnameVerifier noOpVerifier = new HostnameVerifier() { // from class: com.silkimen.cordovahttp.CordovaServerTrust.2
        @Override // javax.net.ssl.HostnameVerifier
        public boolean verify(String str, SSLSession sSLSession) {
            return true;
        }
    };
    private TLSConfiguration tlsConfiguration;

    public CordovaServerTrust(String str, Activity activity, TLSConfiguration tLSConfiguration, CallbackContext callbackContext) {
        this.mode = str;
        this.activity = activity;
        this.tlsConfiguration = tLSConfiguration;
        this.callbackContext = callbackContext;
    }

    @Override // java.lang.Runnable
    public void run() {
        try {
            if ("legacy".equals(this.mode)) {
                this.tlsConfiguration.setHostnameVerifier(null);
                this.tlsConfiguration.setTrustManagers(null);
            } else if ("nocheck".equals(this.mode)) {
                this.tlsConfiguration.setHostnameVerifier(this.noOpVerifier);
                this.tlsConfiguration.setTrustManagers(this.noOpTrustManagers);
            } else if ("pinned".equals(this.mode)) {
                this.tlsConfiguration.setHostnameVerifier(null);
                this.tlsConfiguration.setTrustManagers(getTrustManagers(getCertsFromBundle("www/certificates")));
            } else {
                this.tlsConfiguration.setHostnameVerifier(null);
                this.tlsConfiguration.setTrustManagers(getTrustManagers(getCertsFromKeyStore("AndroidCAStore")));
            }
            this.callbackContext.success();
        } catch (Exception e) {
            Log.e(TAG, "An error occured while configuring SSL cert mode", e);
            this.callbackContext.error("An error occured while configuring SSL cert mode");
        }
    }

    private TrustManager[] getTrustManagers(KeyStore keyStore) throws GeneralSecurityException {
        TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
        trustManagerFactory.init(keyStore);
        return trustManagerFactory.getTrustManagers();
    }

    private KeyStore getCertsFromBundle(String str) throws GeneralSecurityException, IOException {
        AssetManager assets = this.activity.getAssets();
        String[] list = assets.list(str);
        CertificateFactory certificateFactory = CertificateFactory.getInstance("X.509");
        KeyStore keyStore = KeyStore.getInstance(KeyStore.getDefaultType());
        keyStore.load(null, null);
        for (int i = 0; i < list.length; i++) {
            int iLastIndexOf = list[i].lastIndexOf(46);
            if (iLastIndexOf != -1 && list[i].substring(iLastIndexOf).equals(".cer")) {
                keyStore.setCertificateEntry("CA" + i, certificateFactory.generateCertificate(assets.open(str + "/" + list[i])));
            }
        }
        return keyStore;
    }

    private KeyStore getCertsFromKeyStore(String str) throws GeneralSecurityException, IOException {
        KeyStore keyStore = KeyStore.getInstance(str);
        keyStore.load(null);
        return keyStore;
    }
}

