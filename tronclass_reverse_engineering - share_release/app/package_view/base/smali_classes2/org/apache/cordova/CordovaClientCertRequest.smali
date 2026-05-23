.class public Lorg/apache/cordova/CordovaClientCertRequest;
.super Ljava/lang/Object;
.source "CordovaClientCertRequest.java"

# interfaces
.implements Lorg/apache/cordova/ICordovaClientCertRequest;


# instance fields
.field private final request:Landroid/webkit/ClientCertRequest;


# direct methods
.method public constructor <init>(Landroid/webkit/ClientCertRequest;)V
    .locals 0

    .line 36
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 37
    iput-object p1, p0, Lorg/apache/cordova/CordovaClientCertRequest;->request:Landroid/webkit/ClientCertRequest;

    return-void
.end method


# virtual methods
.method public cancel()V
    .locals 1

    .line 46
    iget-object v0, p0, Lorg/apache/cordova/CordovaClientCertRequest;->request:Landroid/webkit/ClientCertRequest;

    invoke-virtual {v0}, Landroid/webkit/ClientCertRequest;->cancel()V

    return-void
.end method

.method public getHost()Ljava/lang/String;
    .locals 1

    .line 55
    iget-object v0, p0, Lorg/apache/cordova/CordovaClientCertRequest;->request:Landroid/webkit/ClientCertRequest;

    invoke-virtual {v0}, Landroid/webkit/ClientCertRequest;->getHost()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public getKeyTypes()[Ljava/lang/String;
    .locals 1

    .line 64
    iget-object v0, p0, Lorg/apache/cordova/CordovaClientCertRequest;->request:Landroid/webkit/ClientCertRequest;

    invoke-virtual {v0}, Landroid/webkit/ClientCertRequest;->getKeyTypes()[Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public getPort()I
    .locals 1

    .line 73
    iget-object v0, p0, Lorg/apache/cordova/CordovaClientCertRequest;->request:Landroid/webkit/ClientCertRequest;

    invoke-virtual {v0}, Landroid/webkit/ClientCertRequest;->getPort()I

    move-result v0

    return v0
.end method

.method public getPrincipals()[Ljava/security/Principal;
    .locals 1

    .line 82
    iget-object v0, p0, Lorg/apache/cordova/CordovaClientCertRequest;->request:Landroid/webkit/ClientCertRequest;

    invoke-virtual {v0}, Landroid/webkit/ClientCertRequest;->getPrincipals()[Ljava/security/Principal;

    move-result-object v0

    return-object v0
.end method

.method public ignore()V
    .locals 1

    .line 91
    iget-object v0, p0, Lorg/apache/cordova/CordovaClientCertRequest;->request:Landroid/webkit/ClientCertRequest;

    invoke-virtual {v0}, Landroid/webkit/ClientCertRequest;->ignore()V

    return-void
.end method

.method public proceed(Ljava/security/PrivateKey;[Ljava/security/cert/X509Certificate;)V
    .locals 1

    .line 103
    iget-object v0, p0, Lorg/apache/cordova/CordovaClientCertRequest;->request:Landroid/webkit/ClientCertRequest;

    invoke-virtual {v0, p1, p2}, Landroid/webkit/ClientCertRequest;->proceed(Ljava/security/PrivateKey;[Ljava/security/cert/X509Certificate;)V

    return-void
.end method
