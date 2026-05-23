.class public Lcom/onesignal/LocationController$LocationHandlerThread;
.super Landroid/os/HandlerThread;
.source "LocationController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/LocationController;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xc
    name = "LocationHandlerThread"
.end annotation


# instance fields
.field mHandler:Landroid/os/Handler;


# direct methods
.method constructor <init>()V
    .locals 2

    .line 420
    const-string v0, "OSH_LocationHandlerThread"

    invoke-direct {p0, v0}, Landroid/os/HandlerThread;-><init>(Ljava/lang/String;)V

    .line 421
    invoke-virtual {p0}, Lcom/onesignal/LocationController$LocationHandlerThread;->start()V

    .line 422
    new-instance v0, Landroid/os/Handler;

    invoke-virtual {p0}, Lcom/onesignal/LocationController$LocationHandlerThread;->getLooper()Landroid/os/Looper;

    move-result-object v1

    invoke-direct {v0, v1}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    iput-object v0, p0, Lcom/onesignal/LocationController$LocationHandlerThread;->mHandler:Landroid/os/Handler;

    return-void
.end method
