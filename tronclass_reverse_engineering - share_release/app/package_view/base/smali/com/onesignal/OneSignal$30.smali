.class Lcom/onesignal/OneSignal$30;
.super Lcom/onesignal/LocationController$LocationPromptCompletionHandler;
.source "OneSignal.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->promptLocation(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;Z)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$callback:Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;)V
    .locals 0

    .line 2817
    iput-object p1, p0, Lcom/onesignal/OneSignal$30;->val$callback:Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;

    invoke-direct {p0}, Lcom/onesignal/LocationController$LocationPromptCompletionHandler;-><init>()V

    return-void
.end method


# virtual methods
.method public getType()Lcom/onesignal/LocationController$PermissionType;
    .locals 1

    .line 2820
    sget-object v0, Lcom/onesignal/LocationController$PermissionType;->PROMPT_LOCATION:Lcom/onesignal/LocationController$PermissionType;

    return-object v0
.end method

.method onAnswered(Lcom/onesignal/OneSignal$PromptActionResult;)V
    .locals 1

    .line 2835
    invoke-super {p0, p1}, Lcom/onesignal/LocationController$LocationPromptCompletionHandler;->onAnswered(Lcom/onesignal/OneSignal$PromptActionResult;)V

    .line 2836
    iget-object v0, p0, Lcom/onesignal/OneSignal$30;->val$callback:Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;

    if-eqz v0, :cond_0

    .line 2837
    invoke-interface {v0, p1}, Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;->onCompleted(Lcom/onesignal/OneSignal$PromptActionResult;)V

    :cond_0
    return-void
.end method

.method public onComplete(Lcom/onesignal/LocationController$LocationPoint;)V
    .locals 1

    .line 2826
    const-string v0, "promptLocation()"

    invoke-static {v0}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    :cond_0
    if-eqz p1, :cond_1

    .line 2830
    invoke-static {p1}, Lcom/onesignal/OneSignalStateSynchronizer;->updateLocation(Lcom/onesignal/LocationController$LocationPoint;)V

    :cond_1
    return-void
.end method
