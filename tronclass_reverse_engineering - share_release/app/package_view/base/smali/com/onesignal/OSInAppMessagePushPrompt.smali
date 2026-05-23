.class public Lcom/onesignal/OSInAppMessagePushPrompt;
.super Lcom/onesignal/OSInAppMessagePrompt;
.source "OSInAppMessagePushPrompt.java"


# static fields
.field static final PUSH_PROMPT_KEY:Ljava/lang/String; = "push"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 3
    invoke-direct {p0}, Lcom/onesignal/OSInAppMessagePrompt;-><init>()V

    return-void
.end method

.method static synthetic lambda$handlePrompt$0(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;Z)V
    .locals 0

    if-eqz p1, :cond_0

    .line 13
    sget-object p1, Lcom/onesignal/OneSignal$PromptActionResult;->PERMISSION_GRANTED:Lcom/onesignal/OneSignal$PromptActionResult;

    goto :goto_0

    .line 14
    :cond_0
    sget-object p1, Lcom/onesignal/OneSignal$PromptActionResult;->PERMISSION_DENIED:Lcom/onesignal/OneSignal$PromptActionResult;

    .line 15
    :goto_0
    invoke-interface {p0, p1}, Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;->onCompleted(Lcom/onesignal/OneSignal$PromptActionResult;)V

    return-void
.end method


# virtual methods
.method getPromptKey()Ljava/lang/String;
    .locals 1

    .line 22
    const-string v0, "push"

    return-object v0
.end method

.method handlePrompt(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;)V
    .locals 1

    .line 9
    new-instance v0, Lcom/onesignal/OSInAppMessagePushPrompt$$ExternalSyntheticLambda0;

    invoke-direct {v0, p1}, Lcom/onesignal/OSInAppMessagePushPrompt$$ExternalSyntheticLambda0;-><init>(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;)V

    const/4 p1, 0x1

    invoke-static {p1, v0}, Lcom/onesignal/OneSignal;->promptForPushNotifications(ZLcom/onesignal/OneSignal$PromptForPushNotificationPermissionResponseHandler;)V

    return-void
.end method
