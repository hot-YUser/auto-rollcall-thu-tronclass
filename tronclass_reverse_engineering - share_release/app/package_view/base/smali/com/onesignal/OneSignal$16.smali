.class Lcom/onesignal/OneSignal$16;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoCompletionHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->setLanguage(Ljava/lang/String;Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$completionCallback:Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;)V
    .locals 0

    .line 1788
    iput-object p1, p0, Lcom/onesignal/OneSignal$16;->val$completionCallback:Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoError;)V
    .locals 2

    .line 1796
    new-instance v0, Lcom/onesignal/OneSignal$OSLanguageError;

    iget v1, p1, Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoError;->errorCode:I

    iget-object p1, p1, Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoError;->message:Ljava/lang/String;

    invoke-direct {v0, v1, p1}, Lcom/onesignal/OneSignal$OSLanguageError;-><init>(ILjava/lang/String;)V

    .line 1797
    iget-object p1, p0, Lcom/onesignal/OneSignal$16;->val$completionCallback:Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;

    invoke-interface {p1, v0}, Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;->onFailure(Lcom/onesignal/OneSignal$OSLanguageError;)V

    return-void
.end method

.method public onSuccess(Ljava/lang/String;)V
    .locals 1

    .line 1791
    iget-object v0, p0, Lcom/onesignal/OneSignal$16;->val$completionCallback:Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;

    invoke-interface {v0, p1}, Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;->onSuccess(Ljava/lang/String;)V

    return-void
.end method
