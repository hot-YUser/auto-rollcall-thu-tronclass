.class public interface abstract Lcom/onesignal/OneSignal$OSSMSUpdateHandler;
.super Ljava/lang/Object;
.source "OneSignal.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OneSignal;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x609
    name = "OSSMSUpdateHandler"
.end annotation


# virtual methods
.method public abstract onFailure(Lcom/onesignal/OneSignal$OSSMSUpdateError;)V
.end method

.method public abstract onSuccess(Lorg/json/JSONObject;)V
.end method
