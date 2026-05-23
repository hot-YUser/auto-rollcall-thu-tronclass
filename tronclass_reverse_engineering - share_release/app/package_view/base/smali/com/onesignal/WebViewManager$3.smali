.class Lcom/onesignal/WebViewManager$3;
.super Ljava/lang/Object;
.source "WebViewManager.java"

# interfaces
.implements Ljava/lang/Runnable;


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

.field final synthetic val$message:Lcom/onesignal/OSInAppMessageInternal;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V
    .locals 0

    .line 121
    iput-object p1, p0, Lcom/onesignal/WebViewManager$3;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    iput-object p2, p0, Lcom/onesignal/WebViewManager$3;->val$content:Lcom/onesignal/OSInAppMessageContent;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 124
    iget-object v0, p0, Lcom/onesignal/WebViewManager$3;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    iget-object v1, p0, Lcom/onesignal/WebViewManager$3;->val$content:Lcom/onesignal/OSInAppMessageContent;

    invoke-static {v0, v1}, Lcom/onesignal/WebViewManager;->showMessageContent(Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V

    return-void
.end method
