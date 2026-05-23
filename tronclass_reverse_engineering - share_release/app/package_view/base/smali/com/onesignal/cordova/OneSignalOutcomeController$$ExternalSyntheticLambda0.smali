.class public final synthetic Lcom/onesignal/cordova/OneSignalOutcomeController$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Lcom/onesignal/OneSignal$OutcomeCallback;


# instance fields
.field public final synthetic f$0:Lorg/apache/cordova/CallbackContext;

.field public final synthetic f$1:Ljava/lang/String;


# direct methods
.method public synthetic constructor <init>(Lorg/apache/cordova/CallbackContext;Ljava/lang/String;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/onesignal/cordova/OneSignalOutcomeController$$ExternalSyntheticLambda0;->f$0:Lorg/apache/cordova/CallbackContext;

    iput-object p2, p0, Lcom/onesignal/cordova/OneSignalOutcomeController$$ExternalSyntheticLambda0;->f$1:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public final onSuccess(Lcom/onesignal/OSOutcomeEvent;)V
    .locals 2

    .line 0
    iget-object v0, p0, Lcom/onesignal/cordova/OneSignalOutcomeController$$ExternalSyntheticLambda0;->f$0:Lorg/apache/cordova/CallbackContext;

    iget-object v1, p0, Lcom/onesignal/cordova/OneSignalOutcomeController$$ExternalSyntheticLambda0;->f$1:Ljava/lang/String;

    invoke-static {v0, v1, p1}, Lcom/onesignal/cordova/OneSignalOutcomeController;->lambda$sendOutcome$1(Lorg/apache/cordova/CallbackContext;Ljava/lang/String;Lcom/onesignal/OSOutcomeEvent;)V

    return-void
.end method
