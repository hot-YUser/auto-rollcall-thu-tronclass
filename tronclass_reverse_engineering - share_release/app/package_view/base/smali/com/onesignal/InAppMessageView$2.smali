.class Lcom/onesignal/InAppMessageView$2;
.super Ljava/lang/Object;
.source "InAppMessageView.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/InAppMessageView;->showDraggableView(Lcom/onesignal/WebViewManager$Position;Landroid/widget/RelativeLayout$LayoutParams;Landroid/widget/RelativeLayout$LayoutParams;Lcom/onesignal/DraggableRelativeLayout$Params;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/InAppMessageView;

.field final synthetic val$displayLocation:Lcom/onesignal/WebViewManager$Position;

.field final synthetic val$draggableRelativeLayoutParams:Landroid/widget/RelativeLayout$LayoutParams;

.field final synthetic val$relativeLayoutParams:Landroid/widget/RelativeLayout$LayoutParams;

.field final synthetic val$webViewLayoutParams:Lcom/onesignal/DraggableRelativeLayout$Params;


# direct methods
.method constructor <init>(Lcom/onesignal/InAppMessageView;Landroid/widget/RelativeLayout$LayoutParams;Landroid/widget/RelativeLayout$LayoutParams;Lcom/onesignal/DraggableRelativeLayout$Params;Lcom/onesignal/WebViewManager$Position;)V
    .locals 0

    .line 260
    iput-object p1, p0, Lcom/onesignal/InAppMessageView$2;->this$0:Lcom/onesignal/InAppMessageView;

    iput-object p2, p0, Lcom/onesignal/InAppMessageView$2;->val$relativeLayoutParams:Landroid/widget/RelativeLayout$LayoutParams;

    iput-object p3, p0, Lcom/onesignal/InAppMessageView$2;->val$draggableRelativeLayoutParams:Landroid/widget/RelativeLayout$LayoutParams;

    iput-object p4, p0, Lcom/onesignal/InAppMessageView$2;->val$webViewLayoutParams:Lcom/onesignal/DraggableRelativeLayout$Params;

    iput-object p5, p0, Lcom/onesignal/InAppMessageView$2;->val$displayLocation:Lcom/onesignal/WebViewManager$Position;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 263
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$2;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$000(Lcom/onesignal/InAppMessageView;)Landroid/webkit/WebView;

    move-result-object v0

    if-nez v0, :cond_0

    return-void

    .line 266
    :cond_0
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$2;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$000(Lcom/onesignal/InAppMessageView;)Landroid/webkit/WebView;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/InAppMessageView$2;->val$relativeLayoutParams:Landroid/widget/RelativeLayout$LayoutParams;

    invoke-virtual {v0, v1}, Landroid/webkit/WebView;->setLayoutParams(Landroid/view/ViewGroup$LayoutParams;)V

    .line 268
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$2;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$500(Lcom/onesignal/InAppMessageView;)Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    .line 269
    iget-object v1, p0, Lcom/onesignal/InAppMessageView$2;->this$0:Lcom/onesignal/InAppMessageView;

    iget-object v2, p0, Lcom/onesignal/InAppMessageView$2;->val$draggableRelativeLayoutParams:Landroid/widget/RelativeLayout$LayoutParams;

    iget-object v3, p0, Lcom/onesignal/InAppMessageView$2;->val$webViewLayoutParams:Lcom/onesignal/DraggableRelativeLayout$Params;

    invoke-static {v1, v0, v2, v3}, Lcom/onesignal/InAppMessageView;->access$600(Lcom/onesignal/InAppMessageView;Landroid/content/Context;Landroid/widget/RelativeLayout$LayoutParams;Lcom/onesignal/DraggableRelativeLayout$Params;)V

    .line 270
    iget-object v1, p0, Lcom/onesignal/InAppMessageView$2;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v1, v0}, Lcom/onesignal/InAppMessageView;->access$700(Lcom/onesignal/InAppMessageView;Landroid/content/Context;)V

    .line 271
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$2;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$800(Lcom/onesignal/InAppMessageView;)Landroid/widget/RelativeLayout;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/InAppMessageView;->access$900(Lcom/onesignal/InAppMessageView;Landroid/widget/RelativeLayout;)V

    .line 273
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$2;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$1000(Lcom/onesignal/InAppMessageView;)Lcom/onesignal/InAppMessageView$InAppMessageViewListener;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 274
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$2;->this$0:Lcom/onesignal/InAppMessageView;

    iget-object v1, p0, Lcom/onesignal/InAppMessageView$2;->val$displayLocation:Lcom/onesignal/WebViewManager$Position;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$100(Lcom/onesignal/InAppMessageView;)Lcom/onesignal/DraggableRelativeLayout;

    move-result-object v2

    iget-object v3, p0, Lcom/onesignal/InAppMessageView$2;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v3}, Lcom/onesignal/InAppMessageView;->access$800(Lcom/onesignal/InAppMessageView;)Landroid/widget/RelativeLayout;

    move-result-object v3

    invoke-static {v0, v1, v2, v3}, Lcom/onesignal/InAppMessageView;->access$1100(Lcom/onesignal/InAppMessageView;Lcom/onesignal/WebViewManager$Position;Landroid/view/View;Landroid/view/View;)V

    .line 277
    :cond_1
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$2;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$1200(Lcom/onesignal/InAppMessageView;)V

    return-void
.end method
