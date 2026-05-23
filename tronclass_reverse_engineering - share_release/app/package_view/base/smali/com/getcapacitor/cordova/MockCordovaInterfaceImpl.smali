.class public Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;
.super Lorg/apache/cordova/CordovaInterfaceImpl;
.source "MockCordovaInterfaceImpl.java"


# direct methods
.method public constructor <init>(Landroid/app/Activity;)V
    .locals 1

    .line 12
    invoke-static {}, Ljava/util/concurrent/Executors;->newCachedThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object v0

    invoke-direct {p0, p1, v0}, Lorg/apache/cordova/CordovaInterfaceImpl;-><init>(Landroid/app/Activity;Ljava/util/concurrent/ExecutorService;)V

    return-void
.end method


# virtual methods
.method public getActivityResultCallback()Lorg/apache/cordova/CordovaPlugin;
    .locals 1

    .line 16
    iget-object v0, p0, Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;->activityResultCallback:Lorg/apache/cordova/CordovaPlugin;

    return-object v0
.end method
