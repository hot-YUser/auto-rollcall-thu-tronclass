.class Lcom/mesmotronic/plugins/FullScreenPlugin$9$1;
.super Ljava/lang/Object;
.source "FullScreenPlugin.java"

# interfaces
.implements Landroid/view/View$OnFocusChangeListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/mesmotronic/plugins/FullScreenPlugin$9;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$1:Lcom/mesmotronic/plugins/FullScreenPlugin$9;


# direct methods
.method constructor <init>(Lcom/mesmotronic/plugins/FullScreenPlugin$9;)V
    .locals 0

    .line 425
    iput-object p1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$9$1;->this$1:Lcom/mesmotronic/plugins/FullScreenPlugin$9;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFocusChange(Landroid/view/View;Z)V
    .locals 0

    if-eqz p2, :cond_0

    .line 431
    iget-object p1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$9$1;->this$1:Lcom/mesmotronic/plugins/FullScreenPlugin$9;

    iget-object p1, p1, Lcom/mesmotronic/plugins/FullScreenPlugin$9;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {p1}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$200(Lcom/mesmotronic/plugins/FullScreenPlugin;)Landroid/view/View;

    move-result-object p1

    const/16 p2, 0x1706

    invoke-virtual {p1, p2}, Landroid/view/View;->setSystemUiVisibility(I)V

    :cond_0
    return-void
.end method
