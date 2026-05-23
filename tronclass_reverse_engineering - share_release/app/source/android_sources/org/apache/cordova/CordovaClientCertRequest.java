package org.apache.cordova;

import android.webkit.ClientCertRequest;
import java.security.Principal;
import java.security.PrivateKey;
import java.security.cert.X509Certificate;
public class CordovaClientCertRequest implements ICordovaClientCertRequest {
    private final ClientCertRequest request;

    public CordovaClientCertRequest(ClientCertRequest clientCertRequest) {
        this.request = clientCertRequest;
    }

    @Override // org.apache.cordova.ICordovaClientCertRequest
    public void cancel() {
        this.request.cancel();
    }

    @Override // org.apache.cordova.ICordovaClientCertRequest
    public String getHost() {
        return this.request.getHost();
    }

    @Override // org.apache.cordova.ICordovaClientCertRequest
    public String[] getKeyTypes() {
        return this.request.getKeyTypes();
    }

    @Override // org.apache.cordova.ICordovaClientCertRequest
    public int getPort() {
        return this.request.getPort();
    }

    @Override // org.apache.cordova.ICordovaClientCertRequest
    public Principal[] getPrincipals() {
        return this.request.getPrincipals();
    }

    @Override // org.apache.cordova.ICordovaClientCertRequest
    public void ignore() {
        this.request.ignore();
    }

    @Override // org.apache.cordova.ICordovaClientCertRequest
    public void proceed(PrivateKey privateKey, X509Certificate[] x509CertificateArr) {
        this.request.proceed(privateKey, x509CertificateArr);
    }
}

