.class Lcom/silkimen/cordovahttp/CordovaClientAuth;
.super Ljava/lang/Object;
.source "CordovaClientAuth.java"

# interfaces
.implements Ljava/lang/Runnable;
.implements Landroid/security/KeyChainAliasCallback;


# static fields
.field private static final TAG:Ljava/lang/String; = "Cordova-Plugin-HTTP"


# instance fields
.field private activity:Landroid/app/Activity;

.field private aliasString:Ljava/lang/String;

.field private callbackContext:Lorg/apache/cordova/CallbackContext;

.field private context:Landroid/content/Context;

.field private mode:Ljava/lang/String;

.field private pkcsPassword:Ljava/lang/String;

.field private rawPkcs:[B

.field private tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;


# direct methods
.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;[BLjava/lang/String;Landroid/app/Activity;Landroid/content/Context;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 38
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 40
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->mode:Ljava/lang/String;

    .line 41
    iput-object p2, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->aliasString:Ljava/lang/String;

    .line 42
    iput-object p3, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->rawPkcs:[B

    .line 43
    iput-object p4, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->pkcsPassword:Ljava/lang/String;

    .line 44
    iput-object p5, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->activity:Landroid/app/Activity;

    .line 45
    iput-object p7, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    .line 46
    iput-object p6, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->context:Landroid/content/Context;

    .line 47
    iput-object p8, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->callbackContext:Lorg/apache/cordova/CallbackContext;

    return-void
.end method

.method private disableClientAuth()V
    .locals 2

    .line 88
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Lcom/silkimen/http/TLSConfiguration;->setKeyManagers([Ljavax/net/ssl/KeyManager;)V

    .line 89
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V

    return-void
.end method

.method private loadFromBuffer()V
    .locals 4

    .line 71
    :try_start_0
    const-string v0, "PKCS12"

    invoke-static {v0}, Ljava/security/KeyStore;->getInstance(Ljava/lang/String;)Ljava/security/KeyStore;

    move-result-object v0

    .line 72
    invoke-static {}, Ljavax/net/ssl/KeyManagerFactory;->getDefaultAlgorithm()Ljava/lang/String;

    move-result-object v1

    .line 73
    invoke-static {v1}, Ljavax/net/ssl/KeyManagerFactory;->getInstance(Ljava/lang/String;)Ljavax/net/ssl/KeyManagerFactory;

    move-result-object v1

    .line 74
    new-instance v2, Ljava/io/ByteArrayInputStream;

    iget-object v3, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->rawPkcs:[B

    invoke-direct {v2, v3}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    .line 76
    iget-object v3, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->pkcsPassword:Ljava/lang/String;

    invoke-virtual {v3}, Ljava/lang/String;->toCharArray()[C

    move-result-object v3

    invoke-virtual {v0, v2, v3}, Ljava/security/KeyStore;->load(Ljava/io/InputStream;[C)V

    .line 77
    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->pkcsPassword:Ljava/lang/String;

    invoke-virtual {v2}, Ljava/lang/String;->toCharArray()[C

    move-result-object v2

    invoke-virtual {v1, v0, v2}, Ljavax/net/ssl/KeyManagerFactory;->init(Ljava/security/KeyStore;[C)V

    .line 79
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {v1}, Ljavax/net/ssl/KeyManagerFactory;->getKeyManagers()[Ljavax/net/ssl/KeyManager;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/silkimen/http/TLSConfiguration;->setKeyManagers([Ljavax/net/ssl/KeyManager;)V

    .line 80
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 82
    const-string v1, "Cordova-Plugin-HTTP"

    const-string v2, "Couldn\'t load given PKCS12 container for authentication"

    invoke-static {v1, v2, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 83
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, v2}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method private loadFromSystemStore()V
    .locals 8

    .line 62
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->aliasString:Ljava/lang/String;

    if-nez v0, :cond_0

    .line 63
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->activity:Landroid/app/Activity;

    const/4 v6, -0x1

    const/4 v7, 0x0

    const/4 v3, 0x0

    const/4 v4, 0x0

    const/4 v5, 0x0

    move-object v2, p0

    invoke-static/range {v1 .. v7}, Landroid/security/KeyChain;->choosePrivateKeyAlias(Landroid/app/Activity;Landroid/security/KeyChainAliasCallback;[Ljava/lang/String;[Ljava/security/Principal;Ljava/lang/String;ILjava/lang/String;)V

    goto :goto_0

    .line 65
    :cond_0
    invoke-virtual {p0, v0}, Lcom/silkimen/cordovahttp/CordovaClientAuth;->alias(Ljava/lang/String;)V

    :goto_0
    return-void
.end method


# virtual methods
.method public alias(Ljava/lang/String;)V
    .locals 5

    if-eqz p1, :cond_0

    .line 99
    :try_start_0
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->context:Landroid/content/Context;

    invoke-static {v0, p1}, Landroid/security/KeyChain;->getPrivateKey(Landroid/content/Context;Ljava/lang/String;)Ljava/security/PrivateKey;

    move-result-object v0

    .line 100
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->context:Landroid/content/Context;

    invoke-static {v1, p1}, Landroid/security/KeyChain;->getCertificateChain(Landroid/content/Context;Ljava/lang/String;)[Ljava/security/cert/X509Certificate;

    move-result-object v1

    .line 101
    new-instance v2, Lcom/silkimen/http/KeyChainKeyManager;

    invoke-direct {v2, p1, v0, v1}, Lcom/silkimen/http/KeyChainKeyManager;-><init>(Ljava/lang/String;Ljava/security/PrivateKey;[Ljava/security/cert/X509Certificate;)V

    .line 103
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    const/4 v1, 0x1

    new-array v1, v1, [Ljavax/net/ssl/KeyManager;

    const/4 v3, 0x0

    aput-object v2, v1, v3

    invoke-virtual {v0, v1}, Lcom/silkimen/http/TLSConfiguration;->setKeyManagers([Ljavax/net/ssl/KeyManager;)V

    .line 105
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    goto :goto_1

    :catch_0
    move-exception v0

    goto :goto_0

    .line 96
    :cond_0
    new-instance v0, Ljava/lang/Exception;

    const-string v1, "Couldn\'t get a consent for private key access"

    invoke-direct {v0, v1}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    throw v0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    .line 107
    :goto_0
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Couldn\'t load private key and certificate pair with given alias \""

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v3, "\" for authentication"

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    const-string v4, "Cordova-Plugin-HTTP"

    invoke-static {v4, v1, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 109
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->callbackContext:Lorg/apache/cordova/CallbackContext;

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_1
    return-void
.end method

.method public run()V
    .locals 2

    .line 52
    const-string v0, "systemstore"

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->mode:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 53
    invoke-direct {p0}, Lcom/silkimen/cordovahttp/CordovaClientAuth;->loadFromSystemStore()V

    goto :goto_0

    .line 54
    :cond_0
    const-string v0, "buffer"

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaClientAuth;->mode:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 55
    invoke-direct {p0}, Lcom/silkimen/cordovahttp/CordovaClientAuth;->loadFromBuffer()V

    goto :goto_0

    .line 57
    :cond_1
    invoke-direct {p0}, Lcom/silkimen/cordovahttp/CordovaClientAuth;->disableClientAuth()V

    :goto_0
    return-void
.end method
