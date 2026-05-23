.class Lcom/onesignal/OneSignal$19;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->sendTags(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$changeTagsUpdateHandler:Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;

.field final synthetic val$keyValues:Lorg/json/JSONObject;


# direct methods
.method constructor <init>(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V
    .locals 0

    .line 1966
    iput-object p1, p0, Lcom/onesignal/OneSignal$19;->val$keyValues:Lorg/json/JSONObject;

    iput-object p2, p0, Lcom/onesignal/OneSignal$19;->val$changeTagsUpdateHandler:Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 1969
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running sendTags() operation from pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1970
    iget-object v0, p0, Lcom/onesignal/OneSignal$19;->val$keyValues:Lorg/json/JSONObject;

    iget-object v1, p0, Lcom/onesignal/OneSignal$19;->val$changeTagsUpdateHandler:Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->sendTags(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V

    return-void
.end method
