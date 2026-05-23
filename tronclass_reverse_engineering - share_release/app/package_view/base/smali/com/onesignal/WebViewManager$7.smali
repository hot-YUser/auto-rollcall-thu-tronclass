.class Lcom/onesignal/WebViewManager$7;
.super Ljava/lang/Object;
.source "WebViewManager.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/WebViewManager;->setupWebView(Landroid/app/Activity;Ljava/lang/String;Z)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/WebViewManager;

.field final synthetic val$base64Message:Ljava/lang/String;

.field final synthetic val$currentActivity:Landroid/app/Activity;


# direct methods
.method constructor <init>(Lcom/onesignal/WebViewManager;Landroid/app/Activity;Ljava/lang/String;)V
    .locals 0

    .line 442
    iput-object p1, p0, Lcom/onesignal/WebViewManager$7;->this$0:Lcom/onesignal/WebViewManager;

    iput-object p2, p0, Lcom/onesignal/WebViewManager$7;->val$currentActivity:Landroid/app/Activity;

    iput-object p3, p0, Lcom/onesignal/WebViewManager$7;->val$base64Message:Ljava/lang/String;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 445
    iget-object v0, p0, Lcom/onesignal/WebViewManager$7;->this$0:Lcom/onesignal/WebViewManager;

    iget-object v1, p0, Lcom/onesignal/WebViewManager$7;->val$currentActivity:Landroid/app/Activity;

    invoke-static {v0, v1}, Lcom/onesignal/WebViewManager;->access$1000(Lcom/onesignal/WebViewManager;Landroid/app/Activity;)V

    .line 446
    iget-object v0, p0, Lcom/onesignal/WebViewManager$7;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v0}, Lcom/onesignal/WebViewManager;->access$900(Lcom/onesignal/WebViewManager;)Lcom/onesignal/OSWebView;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/WebViewManager$7;->val$base64Message:Ljava/lang/String;

    const-string v2, "text/html; charset=utf-8"

    const-string v3, "base64"

    invoke-virtual {v0, v1, v2, v3}, Lcom/onesignal/OSWebView;->loadData(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method
