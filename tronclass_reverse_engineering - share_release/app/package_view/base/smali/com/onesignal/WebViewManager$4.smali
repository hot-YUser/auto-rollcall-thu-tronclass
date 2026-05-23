.class Lcom/onesignal/WebViewManager$4;
.super Ljava/lang/Object;
.source "WebViewManager.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/WebViewManager;->initInAppMessage(Landroid/app/Activity;Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$base64Str:Ljava/lang/String;

.field final synthetic val$content:Lcom/onesignal/OSInAppMessageContent;

.field final synthetic val$currentActivity:Landroid/app/Activity;

.field final synthetic val$webViewManager:Lcom/onesignal/WebViewManager;


# direct methods
.method constructor <init>(Lcom/onesignal/WebViewManager;Landroid/app/Activity;Ljava/lang/String;Lcom/onesignal/OSInAppMessageContent;)V
    .locals 0

    .line 160
    iput-object p1, p0, Lcom/onesignal/WebViewManager$4;->val$webViewManager:Lcom/onesignal/WebViewManager;

    iput-object p2, p0, Lcom/onesignal/WebViewManager$4;->val$currentActivity:Landroid/app/Activity;

    iput-object p3, p0, Lcom/onesignal/WebViewManager$4;->val$base64Str:Ljava/lang/String;

    iput-object p4, p0, Lcom/onesignal/WebViewManager$4;->val$content:Lcom/onesignal/OSInAppMessageContent;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 165
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/WebViewManager$4;->val$webViewManager:Lcom/onesignal/WebViewManager;

    iget-object v1, p0, Lcom/onesignal/WebViewManager$4;->val$currentActivity:Landroid/app/Activity;

    iget-object v2, p0, Lcom/onesignal/WebViewManager$4;->val$base64Str:Ljava/lang/String;

    iget-object v3, p0, Lcom/onesignal/WebViewManager$4;->val$content:Lcom/onesignal/OSInAppMessageContent;

    invoke-virtual {v3}, Lcom/onesignal/OSInAppMessageContent;->isFullBleed()Z

    move-result v3

    invoke-static {v0, v1, v2, v3}, Lcom/onesignal/WebViewManager;->access$100(Lcom/onesignal/WebViewManager;Landroid/app/Activity;Ljava/lang/String;Z)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 168
    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v1

    if-eqz v1, :cond_0

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v1

    const-string v2, "No WebView installed"

    invoke-virtual {v1, v2}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 169
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v2, "Error setting up WebView: "

    invoke-static {v1, v2, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_0
    return-void

    .line 171
    :cond_0
    throw v0
.end method
