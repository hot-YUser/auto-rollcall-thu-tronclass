.class Lcom/onesignal/TrackGooglePurchase$3;
.super Lcom/onesignal/OneSignalRestClient$ResponseHandler;
.source "TrackGooglePurchase.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/TrackGooglePurchase;->sendPurchases(Ljava/util/ArrayList;Ljava/util/ArrayList;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/TrackGooglePurchase;

.field final synthetic val$newPurchaseTokens:Ljava/util/ArrayList;


# direct methods
.method constructor <init>(Lcom/onesignal/TrackGooglePurchase;Ljava/util/ArrayList;)V
    .locals 0

    .line 223
    iput-object p1, p0, Lcom/onesignal/TrackGooglePurchase$3;->this$0:Lcom/onesignal/TrackGooglePurchase;

    iput-object p2, p0, Lcom/onesignal/TrackGooglePurchase$3;->val$newPurchaseTokens:Ljava/util/ArrayList;

    invoke-direct {p0}, Lcom/onesignal/OneSignalRestClient$ResponseHandler;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(ILorg/json/JSONObject;Ljava/lang/Throwable;)V
    .locals 0

    .line 225
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string p2, "HTTP sendPurchases failed to send."

    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 226
    iget-object p1, p0, Lcom/onesignal/TrackGooglePurchase$3;->this$0:Lcom/onesignal/TrackGooglePurchase;

    const/4 p2, 0x0

    invoke-static {p1, p2}, Lcom/onesignal/TrackGooglePurchase;->access$402(Lcom/onesignal/TrackGooglePurchase;Z)Z

    return-void
.end method

.method public onSuccess(Ljava/lang/String;)V
    .locals 2

    .line 230
    iget-object p1, p0, Lcom/onesignal/TrackGooglePurchase$3;->this$0:Lcom/onesignal/TrackGooglePurchase;

    invoke-static {p1}, Lcom/onesignal/TrackGooglePurchase;->access$900(Lcom/onesignal/TrackGooglePurchase;)Ljava/util/ArrayList;

    move-result-object p1

    iget-object v0, p0, Lcom/onesignal/TrackGooglePurchase$3;->val$newPurchaseTokens:Ljava/util/ArrayList;

    invoke-virtual {p1, v0}, Ljava/util/ArrayList;->addAll(Ljava/util/Collection;)Z

    .line 232
    iget-object p1, p0, Lcom/onesignal/TrackGooglePurchase$3;->this$0:Lcom/onesignal/TrackGooglePurchase;

    .line 233
    invoke-static {p1}, Lcom/onesignal/TrackGooglePurchase;->access$900(Lcom/onesignal/TrackGooglePurchase;)Ljava/util/ArrayList;

    move-result-object p1

    invoke-virtual {p1}, Ljava/util/ArrayList;->toString()Ljava/lang/String;

    move-result-object p1

    .line 232
    const-string v0, "GTPlayerPurchases"

    const-string v1, "purchaseTokens"

    invoke-static {v0, v1, p1}, Lcom/onesignal/OneSignalPrefs;->saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    .line 234
    const-string p1, "ExistingPurchases"

    const/4 v1, 0x1

    invoke-static {v0, p1, v1}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    .line 237
    iget-object p1, p0, Lcom/onesignal/TrackGooglePurchase$3;->this$0:Lcom/onesignal/TrackGooglePurchase;

    const/4 v0, 0x0

    invoke-static {p1, v0}, Lcom/onesignal/TrackGooglePurchase;->access$1102(Lcom/onesignal/TrackGooglePurchase;Z)Z

    .line 238
    iget-object p1, p0, Lcom/onesignal/TrackGooglePurchase$3;->this$0:Lcom/onesignal/TrackGooglePurchase;

    invoke-static {p1, v0}, Lcom/onesignal/TrackGooglePurchase;->access$402(Lcom/onesignal/TrackGooglePurchase;Z)Z

    return-void
.end method
