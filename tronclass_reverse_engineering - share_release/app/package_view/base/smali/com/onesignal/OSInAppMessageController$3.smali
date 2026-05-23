.class Lcom/onesignal/OSInAppMessageController$3;
.super Ljava/lang/Object;
.source "OSInAppMessageController.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageController;->receivedInAppMessageJson(Lorg/json/JSONArray;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSInAppMessageController;

.field final synthetic val$json:Lorg/json/JSONArray;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageController;Lorg/json/JSONArray;)V
    .locals 0

    .line 213
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController$3;->this$0:Lcom/onesignal/OSInAppMessageController;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageController$3;->val$json:Lorg/json/JSONArray;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 216
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$3;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageController;->access$400(Lcom/onesignal/OSInAppMessageController;)V

    .line 218
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$3;->this$0:Lcom/onesignal/OSInAppMessageController;

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController$3;->val$json:Lorg/json/JSONArray;

    invoke-static {v0, v1}, Lcom/onesignal/OSInAppMessageController;->access$500(Lcom/onesignal/OSInAppMessageController;Lorg/json/JSONArray;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 220
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController$3;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v1}, Lcom/onesignal/OSInAppMessageController;->access$300(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSLogger;

    move-result-object v1

    const-string v2, "ERROR processing InAppMessageJson JSON Response."

    invoke-interface {v1, v2, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_0
    return-void
.end method
