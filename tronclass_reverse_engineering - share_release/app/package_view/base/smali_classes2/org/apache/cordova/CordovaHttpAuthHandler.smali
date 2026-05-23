.class public Lorg/apache/cordova/CordovaHttpAuthHandler;
.super Ljava/lang/Object;
.source "CordovaHttpAuthHandler.java"

# interfaces
.implements Lorg/apache/cordova/ICordovaHttpAuthHandler;


# instance fields
.field private final handler:Landroid/webkit/HttpAuthHandler;


# direct methods
.method public constructor <init>(Landroid/webkit/HttpAuthHandler;)V
    .locals 0

    .line 31
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 32
    iput-object p1, p0, Lorg/apache/cordova/CordovaHttpAuthHandler;->handler:Landroid/webkit/HttpAuthHandler;

    return-void
.end method


# virtual methods
.method public cancel()V
    .locals 1

    .line 39
    iget-object v0, p0, Lorg/apache/cordova/CordovaHttpAuthHandler;->handler:Landroid/webkit/HttpAuthHandler;

    invoke-virtual {v0}, Landroid/webkit/HttpAuthHandler;->cancel()V

    return-void
.end method

.method public proceed(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    .line 49
    iget-object v0, p0, Lorg/apache/cordova/CordovaHttpAuthHandler;->handler:Landroid/webkit/HttpAuthHandler;

    invoke-virtual {v0, p1, p2}, Landroid/webkit/HttpAuthHandler;->proceed(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method
