.class Lcom/mesmotronic/plugins/FullScreenPlugin$5$1;
.super Ljava/lang/Object;
.source "FullScreenPlugin.java"

# interfaces
.implements Landroid/view/View$OnSystemUiVisibilityChangeListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/mesmotronic/plugins/FullScreenPlugin$5;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$1:Lcom/mesmotronic/plugins/FullScreenPlugin$5;


# direct methods
.method constructor <init>(Lcom/mesmotronic/plugins/FullScreenPlugin$5;)V
    .locals 0

    .line 222
    iput-object p1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$5$1;->this$1:Lcom/mesmotronic/plugins/FullScreenPlugin$5;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onSystemUiVisibilityChange(I)V
    .locals 1

    .line 226
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$5$1;->this$1:Lcom/mesmotronic/plugins/FullScreenPlugin$5;

    iget-object v0, v0, Lcom/mesmotronic/plugins/FullScreenPlugin$5;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$400(Lcom/mesmotronic/plugins/FullScreenPlugin;)I

    move-result v0

    and-int/lit8 v0, v0, 0x2

    if-eqz v0, :cond_0

    and-int/lit8 v0, p1, 0x2

    if-nez v0, :cond_0

    .line 228
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$5$1;->this$1:Lcom/mesmotronic/plugins/FullScreenPlugin$5;

    iget-object v0, v0, Lcom/mesmotronic/plugins/FullScreenPlugin$5;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$500(Lcom/mesmotronic/plugins/FullScreenPlugin;)V

    .line 230
    :cond_0
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$5$1;->this$1:Lcom/mesmotronic/plugins/FullScreenPlugin$5;

    iget-object v0, v0, Lcom/mesmotronic/plugins/FullScreenPlugin$5;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v0, p1}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$402(Lcom/mesmotronic/plugins/FullScreenPlugin;I)I

    return-void
.end method
