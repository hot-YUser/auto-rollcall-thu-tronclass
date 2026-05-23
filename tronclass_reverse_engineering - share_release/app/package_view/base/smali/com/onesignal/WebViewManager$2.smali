.class Lcom/onesignal/WebViewManager$2;
.super Ljava/lang/Object;
.source "WebViewManager.java"

# interfaces
.implements Lcom/onesignal/WebViewManager$OneSignalGenericCallback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/WebViewManager;->showMessageContent(Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$content:Lcom/onesignal/OSInAppMessageContent;

.field final synthetic val$currentActivity:Landroid/app/Activity;

.field final synthetic val$message:Lcom/onesignal/OSInAppMessageInternal;


# direct methods
.method constructor <init>(Landroid/app/Activity;Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V
    .locals 0

    .line 105
    iput-object p1, p0, Lcom/onesignal/WebViewManager$2;->val$currentActivity:Landroid/app/Activity;

    iput-object p2, p0, Lcom/onesignal/WebViewManager$2;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    iput-object p3, p0, Lcom/onesignal/WebViewManager$2;->val$content:Lcom/onesignal/OSInAppMessageContent;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onComplete()V
    .locals 3

    const/4 v0, 0x0

    .line 108
    sput-object v0, Lcom/onesignal/WebViewManager;->lastInstance:Lcom/onesignal/WebViewManager;

    .line 109
    iget-object v0, p0, Lcom/onesignal/WebViewManager$2;->val$currentActivity:Landroid/app/Activity;

    iget-object v1, p0, Lcom/onesignal/WebViewManager$2;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    iget-object v2, p0, Lcom/onesignal/WebViewManager$2;->val$content:Lcom/onesignal/OSInAppMessageContent;

    invoke-static {v0, v1, v2}, Lcom/onesignal/WebViewManager;->access$000(Landroid/app/Activity;Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V

    return-void
.end method
