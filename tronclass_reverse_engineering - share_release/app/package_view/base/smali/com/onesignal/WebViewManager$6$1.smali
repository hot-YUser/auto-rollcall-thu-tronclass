.class Lcom/onesignal/WebViewManager$6$1;
.super Ljava/lang/Object;
.source "WebViewManager.java"

# interfaces
.implements Landroid/webkit/ValueCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/WebViewManager$6;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroid/webkit/ValueCallback<",
        "Ljava/lang/String;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$1:Lcom/onesignal/WebViewManager$6;


# direct methods
.method constructor <init>(Lcom/onesignal/WebViewManager$6;)V
    .locals 0

    .line 353
    iput-object p1, p0, Lcom/onesignal/WebViewManager$6$1;->this$1:Lcom/onesignal/WebViewManager$6;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public bridge synthetic onReceiveValue(Ljava/lang/Object;)V
    .locals 0

    .line 353
    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/onesignal/WebViewManager$6$1;->onReceiveValue(Ljava/lang/String;)V

    return-void
.end method

.method public onReceiveValue(Ljava/lang/String;)V
    .locals 3

    .line 357
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/WebViewManager$6$1;->this$1:Lcom/onesignal/WebViewManager$6;

    iget-object v0, v0, Lcom/onesignal/WebViewManager$6;->this$0:Lcom/onesignal/WebViewManager;

    iget-object v1, p0, Lcom/onesignal/WebViewManager$6$1;->this$1:Lcom/onesignal/WebViewManager$6;

    iget-object v1, v1, Lcom/onesignal/WebViewManager$6;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v1}, Lcom/onesignal/WebViewManager;->access$500(Lcom/onesignal/WebViewManager;)Landroid/app/Activity;

    move-result-object v1

    new-instance v2, Lorg/json/JSONObject;

    invoke-direct {v2, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    invoke-static {v0, v1, v2}, Lcom/onesignal/WebViewManager;->access$600(Lcom/onesignal/WebViewManager;Landroid/app/Activity;Lorg/json/JSONObject;)I

    move-result p1

    .line 358
    iget-object v0, p0, Lcom/onesignal/WebViewManager$6$1;->this$1:Lcom/onesignal/WebViewManager$6;

    iget-object v0, v0, Lcom/onesignal/WebViewManager$6;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/WebViewManager;->access$1200(Lcom/onesignal/WebViewManager;Ljava/lang/Integer;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 360
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method
