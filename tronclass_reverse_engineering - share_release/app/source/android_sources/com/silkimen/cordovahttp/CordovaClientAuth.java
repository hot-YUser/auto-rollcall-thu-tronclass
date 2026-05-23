package com.silkimen.cordovahttp;

import android.app.Activity;
import android.content.Context;
import android.security.KeyChain;
import android.security.KeyChainAliasCallback;
import android.util.Log;
import com.silkimen.http.KeyChainKeyManager;
import com.silkimen.http.TLSConfiguration;
import java.io.ByteArrayInputStream;
import java.security.KeyStore;
import javax.net.ssl.KeyManager;
import javax.net.ssl.KeyManagerFactory;
import org.apache.cordova.CallbackContext;
class CordovaClientAuth implements Runnable, KeyChainAliasCallback {
    private static final String TAG = "Cordova-Plugin-HTTP";
    private Activity activity;
    private String aliasString;
    private CallbackContext callbackContext;
    private Context context;
    private String mode;
    private String pkcsPassword;
    private byte[] rawPkcs;
    private TLSConfiguration tlsConfiguration;

    public CordovaClientAuth(String str, String str2, byte[] bArr, String str3, Activity activity, Context context, TLSConfiguration tLSConfiguration, CallbackContext callbackContext) {
        this.mode = str;
        this.aliasString = str2;
        this.rawPkcs = bArr;
        this.pkcsPassword = str3;
        this.activity = activity;
        this.tlsConfiguration = tLSConfiguration;
        this.context = context;
        this.callbackContext = callbackContext;
    }

    @Override // java.lang.Runnable
    public void run() {
        if ("systemstore".equals(this.mode)) {
            loadFromSystemStore();
        } else if ("buffer".equals(this.mode)) {
            loadFromBuffer();
        } else {
            disableClientAuth();
        }
    }

    private void loadFromSystemStore() {
        String str = this.aliasString;
        if (str == null) {
            KeyChain.choosePrivateKeyAlias(this.activity, this, null, null, null, -1, null);
        } else {
            alias(str);
        }
    }

    private void loadFromBuffer() {
        try {
            KeyStore keyStore = KeyStore.getInstance("PKCS12");
            KeyManagerFactory keyManagerFactory = KeyManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm());
            keyStore.load(new ByteArrayInputStream(this.rawPkcs), this.pkcsPassword.toCharArray());
            keyManagerFactory.init(keyStore, this.pkcsPassword.toCharArray());
            this.tlsConfiguration.setKeyManagers(keyManagerFactory.getKeyManagers());
            this.callbackContext.success();
        } catch (Exception e) {
            Log.e(TAG, "Couldn't load given PKCS12 container for authentication", e);
            this.callbackContext.error("Couldn't load given PKCS12 container for authentication");
        }
    }

    private void disableClientAuth() {
        this.tlsConfiguration.setKeyManagers(null);
        this.callbackContext.success();
    }

    @Override // android.security.KeyChainAliasCallback
    public void alias(String str) {
        try {
            if (str == null) {
                throw new Exception("Couldn't get a consent for private key access");
            }
            this.tlsConfiguration.setKeyManagers(new KeyManager[]{new KeyChainKeyManager(str, KeyChain.getPrivateKey(this.context, str), KeyChain.getCertificateChain(this.context, str))});
            this.callbackContext.success(str);
        } catch (Exception e) {
            Log.e(TAG, "Couldn't load private key and certificate pair with given alias \"" + str + "\" for authentication", e);
            this.callbackContext.error("Couldn't load private key and certificate pair with given alias \"" + str + "\" for authentication");
        }
    }
}

