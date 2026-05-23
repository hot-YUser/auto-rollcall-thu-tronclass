.class public final synthetic Lcom/onesignal/cordova/OneSignalController$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Lcom/onesignal/OneSignal$OSGetTagsHandler;


# instance fields
.field public final synthetic f$0:Lorg/apache/cordova/CallbackContext;


# direct methods
.method public synthetic constructor <init>(Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/onesignal/cordova/OneSignalController$$ExternalSyntheticLambda0;->f$0:Lorg/apache/cordova/CallbackContext;

    return-void
.end method


# virtual methods
.method public final tagsAvailable(Lorg/json/JSONObject;)V
    .locals 1

    .line 0
    iget-object v0, p0, Lcom/onesignal/cordova/OneSignalController$$ExternalSyntheticLambda0;->f$0:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, p1}, Lcom/onesignal/cordova/OneSignalController;->lambda$getTags$0(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    return-void
.end method
