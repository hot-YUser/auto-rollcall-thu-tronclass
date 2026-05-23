.class public final synthetic Lcom/onesignal/OSInAppMessagePushPrompt$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Lcom/onesignal/OneSignal$PromptForPushNotificationPermissionResponseHandler;


# instance fields
.field public final synthetic f$0:Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;


# direct methods
.method public synthetic constructor <init>(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/onesignal/OSInAppMessagePushPrompt$$ExternalSyntheticLambda0;->f$0:Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;

    return-void
.end method


# virtual methods
.method public final response(Z)V
    .locals 1

    .line 0
    iget-object v0, p0, Lcom/onesignal/OSInAppMessagePushPrompt$$ExternalSyntheticLambda0;->f$0:Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;

    invoke-static {v0, p1}, Lcom/onesignal/OSInAppMessagePushPrompt;->lambda$handlePrompt$0(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;Z)V

    return-void
.end method
