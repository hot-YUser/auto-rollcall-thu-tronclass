.class public Lcom/silkimen/http/KeyChainKeyManager;
.super Ljavax/net/ssl/X509ExtendedKeyManager;
.source "KeyChainKeyManager.java"


# instance fields
.field private final alias:Ljava/lang/String;

.field private final chain:[Ljava/security/cert/X509Certificate;

.field private final key:Ljava/security/PrivateKey;


# direct methods
.method public constructor <init>(Ljava/lang/String;Ljava/security/PrivateKey;[Ljava/security/cert/X509Certificate;)V
    .locals 0

    .line 19
    invoke-direct {p0}, Ljavax/net/ssl/X509ExtendedKeyManager;-><init>()V

    .line 20
    iput-object p1, p0, Lcom/silkimen/http/KeyChainKeyManager;->alias:Ljava/lang/String;

    .line 21
    iput-object p2, p0, Lcom/silkimen/http/KeyChainKeyManager;->key:Ljava/security/PrivateKey;

    .line 22
    iput-object p3, p0, Lcom/silkimen/http/KeyChainKeyManager;->chain:[Ljava/security/cert/X509Certificate;

    return-void
.end method


# virtual methods
.method public chooseClientAlias([Ljava/lang/String;[Ljava/security/Principal;Ljava/net/Socket;)Ljava/lang/String;
    .locals 0

    .line 27
    iget-object p1, p0, Lcom/silkimen/http/KeyChainKeyManager;->alias:Ljava/lang/String;

    return-object p1
.end method

.method public final chooseServerAlias(Ljava/lang/String;[Ljava/security/Principal;Ljava/net/Socket;)Ljava/lang/String;
    .locals 0

    .line 43
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    invoke-direct {p1}, Ljava/lang/UnsupportedOperationException;-><init>()V

    throw p1
.end method

.method public getCertificateChain(Ljava/lang/String;)[Ljava/security/cert/X509Certificate;
    .locals 0

    .line 32
    iget-object p1, p0, Lcom/silkimen/http/KeyChainKeyManager;->chain:[Ljava/security/cert/X509Certificate;

    return-object p1
.end method

.method public final getClientAliases(Ljava/lang/String;[Ljava/security/Principal;)[Ljava/lang/String;
    .locals 0

    .line 49
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    invoke-direct {p1}, Ljava/lang/UnsupportedOperationException;-><init>()V

    throw p1
.end method

.method public getPrivateKey(Ljava/lang/String;)Ljava/security/PrivateKey;
    .locals 0

    .line 37
    iget-object p1, p0, Lcom/silkimen/http/KeyChainKeyManager;->key:Ljava/security/PrivateKey;

    return-object p1
.end method

.method public final getServerAliases(Ljava/lang/String;[Ljava/security/Principal;)[Ljava/lang/String;
    .locals 0

    .line 55
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    invoke-direct {p1}, Ljava/lang/UnsupportedOperationException;-><init>()V

    throw p1
.end method
