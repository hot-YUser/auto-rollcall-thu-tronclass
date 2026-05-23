.class Lcom/onesignal/WebViewManager$9;
.super Ljava/lang/Object;
.source "WebViewManager.java"

# interfaces
.implements Lcom/onesignal/WebViewManager$OneSignalGenericCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/WebViewManager;->dismissAndAwaitNextMessage(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/WebViewManager;

.field final synthetic val$callback:Lcom/onesignal/WebViewManager$OneSignalGenericCallback;


# direct methods
.method constructor <init>(Lcom/onesignal/WebViewManager;Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V
    .locals 0

    .line 541
    iput-object p1, p0, Lcom/onesignal/WebViewManager$9;->this$0:Lcom/onesignal/WebViewManager;

    iput-object p2, p0, Lcom/onesignal/WebViewManager$9;->val$callback:Lcom/onesignal/WebViewManager$OneSignalGenericCallback;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onComplete()V
    .locals 2

    .line 544
    iget-object v0, p0, Lcom/onesignal/WebViewManager$9;->this$0:Lcom/onesignal/WebViewManager;

    const/4 v1, 0x0

    invoke-static {v0, v1}, Lcom/onesignal/WebViewManager;->access$1402(Lcom/onesignal/WebViewManager;Z)Z

    .line 545
    iget-object v0, p0, Lcom/onesignal/WebViewManager$9;->this$0:Lcom/onesignal/WebViewManager;

    const/4 v1, 0x0

    invoke-static {v0, v1}, Lcom/onesignal/WebViewManager;->access$1500(Lcom/onesignal/WebViewManager;Lcom/onesignal/InAppMessageView;)V

    .line 547
    iget-object v0, p0, Lcom/onesignal/WebViewManager$9;->val$callback:Lcom/onesignal/WebViewManager$OneSignalGenericCallback;

    if-eqz v0, :cond_0

    .line 548
    invoke-interface {v0}, Lcom/onesignal/WebViewManager$OneSignalGenericCallback;->onComplete()V

    :cond_0
    return-void
.end method
