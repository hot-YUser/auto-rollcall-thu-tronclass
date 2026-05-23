.class Lcom/onesignal/WebViewManager$6;
.super Ljava/lang/Object;
.source "WebViewManager.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/WebViewManager;->calculateHeightAndShowWebViewAfterNewActivity()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/WebViewManager;


# direct methods
.method constructor <init>(Lcom/onesignal/WebViewManager;)V
    .locals 0

    .line 343
    iput-object p1, p0, Lcom/onesignal/WebViewManager$6;->this$0:Lcom/onesignal/WebViewManager;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 348
    iget-object v0, p0, Lcom/onesignal/WebViewManager$6;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v0}, Lcom/onesignal/WebViewManager;->access$500(Lcom/onesignal/WebViewManager;)Landroid/app/Activity;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/WebViewManager;->access$1000(Lcom/onesignal/WebViewManager;Landroid/app/Activity;)V

    .line 349
    iget-object v0, p0, Lcom/onesignal/WebViewManager$6;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v0}, Lcom/onesignal/WebViewManager;->access$300(Lcom/onesignal/WebViewManager;)Lcom/onesignal/OSInAppMessageContent;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageContent;->isFullBleed()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 350
    iget-object v0, p0, Lcom/onesignal/WebViewManager$6;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v0}, Lcom/onesignal/WebViewManager;->access$1100(Lcom/onesignal/WebViewManager;)V

    .line 353
    :cond_0
    iget-object v0, p0, Lcom/onesignal/WebViewManager$6;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v0}, Lcom/onesignal/WebViewManager;->access$900(Lcom/onesignal/WebViewManager;)Lcom/onesignal/OSWebView;

    move-result-object v0

    new-instance v1, Lcom/onesignal/WebViewManager$6$1;

    invoke-direct {v1, p0}, Lcom/onesignal/WebViewManager$6$1;-><init>(Lcom/onesignal/WebViewManager$6;)V

    const-string v2, "getPageMetaData()"

    invoke-virtual {v0, v2, v1}, Lcom/onesignal/OSWebView;->evaluateJavascript(Ljava/lang/String;Landroid/webkit/ValueCallback;)V

    return-void
.end method
