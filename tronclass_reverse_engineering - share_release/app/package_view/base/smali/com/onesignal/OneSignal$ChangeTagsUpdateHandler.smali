.class public interface abstract Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;
.super Ljava/lang/Object;
.source "OneSignal.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OneSignal;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x609
    name = "ChangeTagsUpdateHandler"
.end annotation


# virtual methods
.method public abstract onFailure(Lcom/onesignal/OneSignal$SendTagsError;)V
.end method

.method public abstract onSuccess(Lorg/json/JSONObject;)V
.end method
