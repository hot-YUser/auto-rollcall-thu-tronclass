.class Lcom/silkimen/cordovahttp/CordovaServerTrust;
.super Ljava/lang/Object;
.source "CordovaServerTrust.java"

# interfaces
.implements Ljava/lang/Runnable;


# static fields
.field private static final TAG:Ljava/lang/String; = "Cordova-Plugin-HTTP"


# instance fields
.field private activity:Landroid/app/Activity;

.field private callbackContext:Lorg/apache/cordova/CallbackContext;

.field private mode:Ljava/lang/String;

.field private final noOpTrustManagers:[Ljavax/net/ssl/TrustManager;

.field private final noOpVerifier:Ljavax/net/ssl/HostnameVerifier;

.field private tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;


# direct methods
.method public constructor <init>(Ljava/lang/String;Landroid/app/Activity;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 35
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 37
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->mode:Ljava/lang/String;

    .line 38
    iput-object p2, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->activity:Landroid/app/Activity;

    .line 39
    iput-object p3, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    .line 40
    iput-object p4, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->callbackContext:Lorg/apache/cordova/CallbackContext;

    const/4 p1, 0x1

    .line 42
    new-array p1, p1, [Ljavax/net/ssl/TrustManager;

    new-instance p2, Lcom/silkimen/cordovahttp/CordovaServerTrust$1;

    invoke-direct {p2, p0}, Lcom/silkimen/cordovahttp/CordovaServerTrust$1;-><init>(Lcom/silkimen/cordovahttp/CordovaServerTrust;)V

    const/4 p3, 0x0

    aput-object p2, p1, p3

    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->noOpTrustManagers:[Ljavax/net/ssl/TrustManager;

    .line 56
    new-instance p1, Lcom/silkimen/cordovahttp/CordovaServerTrust$2;

    invoke-direct {p1, p0}, Lcom/silkimen/cordovahttp/CordovaServerTrust$2;-><init>(Lcom/silkimen/cordovahttp/CordovaServerTrust;)V

    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->noOpVerifier:Ljavax/net/ssl/HostnameVerifier;

    return-void
.end method

.method private getCertsFromBundle(Ljava/lang/String;)Ljava/security/KeyStore;
    .locals 8
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/security/GeneralSecurityException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 96
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->activity:Landroid/app/Activity;

    invoke-virtual {v0}, Landroid/app/Activity;->getAssets()Landroid/content/res/AssetManager;

    move-result-object v0

    .line 97
    invoke-virtual {v0, p1}, Landroid/content/res/AssetManager;->list(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object v1

    .line 99
    const-string v2, "X.509"

    invoke-static {v2}, Ljava/security/cert/CertificateFactory;->getInstance(Ljava/lang/String;)Ljava/security/cert/CertificateFactory;

    move-result-object v2

    .line 100
    invoke-static {}, Ljava/security/KeyStore;->getDefaultType()Ljava/lang/String;

    move-result-object v3

    .line 101
    invoke-static {v3}, Ljava/security/KeyStore;->getInstance(Ljava/lang/String;)Ljava/security/KeyStore;

    move-result-object v3

    const/4 v4, 0x0

    .line 103
    invoke-virtual {v3, v4, v4}, Ljava/security/KeyStore;->load(Ljava/io/InputStream;[C)V

    const/4 v4, 0x0

    .line 105
    :goto_0
    array-length v5, v1

    if-ge v4, v5, :cond_2

    .line 106
    aget-object v5, v1, v4

    const/16 v6, 0x2e

    invoke-virtual {v5, v6}, Ljava/lang/String;->lastIndexOf(I)I

    move-result v5

    const/4 v6, -0x1

    if-eq v5, v6, :cond_1

    .line 108
    aget-object v6, v1, v4

    invoke-virtual {v6, v5}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object v5

    const-string v6, ".cer"

    invoke-virtual {v5, v6}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v5

    if-nez v5, :cond_0

    goto :goto_1

    .line 112
    :cond_0
    new-instance v5, Ljava/lang/StringBuilder;

    const-string v6, "CA"

    invoke-direct {v5, v6}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v5, v4}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    new-instance v6, Ljava/lang/StringBuilder;

    invoke-direct {v6}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v6, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    const-string v7, "/"

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    aget-object v7, v1, v4

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {v0, v6}, Landroid/content/res/AssetManager;->open(Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object v6

    invoke-virtual {v2, v6}, Ljava/security/cert/CertificateFactory;->generateCertificate(Ljava/io/InputStream;)Ljava/security/cert/Certificate;

    move-result-object v6

    invoke-virtual {v3, v5, v6}, Ljava/security/KeyStore;->setCertificateEntry(Ljava/lang/String;Ljava/security/cert/Certificate;)V

    :cond_1
    :goto_1
    add-int/lit8 v4, v4, 0x1

    goto :goto_0

    :cond_2
    return-object v3
.end method

.method private getCertsFromKeyStore(Ljava/lang/String;)Ljava/security/KeyStore;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/security/GeneralSecurityException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 119
    invoke-static {p1}, Ljava/security/KeyStore;->getInstance(Ljava/lang/String;)Ljava/security/KeyStore;

    move-result-object p1

    const/4 v0, 0x0

    .line 120
    invoke-virtual {p1, v0}, Ljava/security/KeyStore;->load(Ljava/security/KeyStore$LoadStoreParameter;)V

    return-object p1
.end method

.method private getTrustManagers(Ljava/security/KeyStore;)[Ljavax/net/ssl/TrustManager;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/security/GeneralSecurityException;
        }
    .end annotation

    .line 88
    invoke-static {}, Ljavax/net/ssl/TrustManagerFactory;->getDefaultAlgorithm()Ljava/lang/String;

    move-result-object v0

    .line 89
    invoke-static {v0}, Ljavax/net/ssl/TrustManagerFactory;->getInstance(Ljava/lang/String;)Ljavax/net/ssl/TrustManagerFactory;

    move-result-object v0

    .line 90
    invoke-virtual {v0, p1}, Ljavax/net/ssl/TrustManagerFactory;->init(Ljava/security/KeyStore;)V

    .line 92
    invoke-virtual {v0}, Ljavax/net/ssl/TrustManagerFactory;->getTrustManagers()[Ljavax/net/ssl/TrustManager;

    move-result-object p1

    return-object p1
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 66
    :try_start_0
    const-string v0, "legacy"

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->mode:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    .line 67
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {v0, v1}, Lcom/silkimen/http/TLSConfiguration;->setHostnameVerifier(Ljavax/net/ssl/HostnameVerifier;)V

    .line 68
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {v0, v1}, Lcom/silkimen/http/TLSConfiguration;->setTrustManagers([Ljavax/net/ssl/TrustManager;)V

    goto :goto_0

    .line 69
    :cond_0
    const-string v0, "nocheck"

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->mode:Ljava/lang/String;

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 70
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->noOpVerifier:Ljavax/net/ssl/HostnameVerifier;

    invoke-virtual {v0, v1}, Lcom/silkimen/http/TLSConfiguration;->setHostnameVerifier(Ljavax/net/ssl/HostnameVerifier;)V

    .line 71
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->noOpTrustManagers:[Ljavax/net/ssl/TrustManager;

    invoke-virtual {v0, v1}, Lcom/silkimen/http/TLSConfiguration;->setTrustManagers([Ljavax/net/ssl/TrustManager;)V

    goto :goto_0

    .line 72
    :cond_1
    const-string v0, "pinned"

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->mode:Ljava/lang/String;

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 73
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {v0, v1}, Lcom/silkimen/http/TLSConfiguration;->setHostnameVerifier(Ljavax/net/ssl/HostnameVerifier;)V

    .line 74
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    const-string v1, "www/certificates"

    invoke-direct {p0, v1}, Lcom/silkimen/cordovahttp/CordovaServerTrust;->getCertsFromBundle(Ljava/lang/String;)Ljava/security/KeyStore;

    move-result-object v1

    invoke-direct {p0, v1}, Lcom/silkimen/cordovahttp/CordovaServerTrust;->getTrustManagers(Ljava/security/KeyStore;)[Ljavax/net/ssl/TrustManager;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/silkimen/http/TLSConfiguration;->setTrustManagers([Ljavax/net/ssl/TrustManager;)V

    goto :goto_0

    .line 76
    :cond_2
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {v0, v1}, Lcom/silkimen/http/TLSConfiguration;->setHostnameVerifier(Ljavax/net/ssl/HostnameVerifier;)V

    .line 77
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    const-string v1, "AndroidCAStore"

    invoke-direct {p0, v1}, Lcom/silkimen/cordovahttp/CordovaServerTrust;->getCertsFromKeyStore(Ljava/lang/String;)Ljava/security/KeyStore;

    move-result-object v1

    invoke-direct {p0, v1}, Lcom/silkimen/cordovahttp/CordovaServerTrust;->getTrustManagers(Ljava/security/KeyStore;)[Ljavax/net/ssl/TrustManager;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/silkimen/http/TLSConfiguration;->setTrustManagers([Ljavax/net/ssl/TrustManager;)V

    .line 80
    :goto_0
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception v0

    .line 82
    const-string v1, "Cordova-Plugin-HTTP"

    const-string v2, "An error occured while configuring SSL cert mode"

    invoke-static {v1, v2, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 83
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, v2}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_1
    return-void
.end method
