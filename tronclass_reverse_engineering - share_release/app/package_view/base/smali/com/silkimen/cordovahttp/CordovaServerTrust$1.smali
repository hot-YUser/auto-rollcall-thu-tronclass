.class Lcom/silkimen/cordovahttp/CordovaServerTrust$1;
.super Ljava/lang/Object;
.source "CordovaServerTrust.java"

# interfaces
.implements Ljavax/net/ssl/X509TrustManager;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/silkimen/cordovahttp/CordovaServerTrust;-><init>(Ljava/lang/String;Landroid/app/Activity;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/silkimen/cordovahttp/CordovaServerTrust;


# direct methods
.method constructor <init>(Lcom/silkimen/cordovahttp/CordovaServerTrust;)V
    .locals 0

    .line 42
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust$1;->this$0:Lcom/silkimen/cordovahttp/CordovaServerTrust;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public checkClientTrusted([Ljava/security/cert/X509Certificate;Ljava/lang/String;)V
    .locals 0

    return-void
.end method

.method public checkServerTrusted([Ljava/security/cert/X509Certificate;Ljava/lang/String;)V
    .locals 0

    return-void
.end method

.method public getAcceptedIssuers()[Ljava/security/cert/X509Certificate;
    .locals 1

    const/4 v0, 0x0

    .line 44
    new-array v0, v0, [Ljava/security/cert/X509Certificate;

    return-object v0
.end method
