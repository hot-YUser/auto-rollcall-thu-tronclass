.class interface abstract Lcom/onesignal/JobIntentService$CompatJobEngine;
.super Ljava/lang/Object;
.source "JobIntentService.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/JobIntentService;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x608
    name = "CompatJobEngine"
.end annotation


# virtual methods
.method public abstract compatGetBinder()Landroid/os/IBinder;
.end method

.method public abstract dequeueWork()Lcom/onesignal/JobIntentService$GenericWorkItem;
.end method
