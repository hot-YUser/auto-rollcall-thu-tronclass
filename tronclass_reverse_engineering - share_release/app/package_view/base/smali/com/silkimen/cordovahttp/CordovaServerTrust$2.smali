.class Lcom/silkimen/cordovahttp/CordovaServerTrust$2;
.super Ljava/lang/Object;
.source "CordovaServerTrust.java"

# interfaces
.implements Ljavax/net/ssl/HostnameVerifier;


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

    .line 56
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaServerTrust$2;->this$0:Lcom/silkimen/cordovahttp/CordovaServerTrust;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public verify(Ljava/lang/String;Ljavax/net/ssl/SSLSession;)Z
    .locals 0

    const/4 p1, 0x1

    return p1
.end method
