.class Lcom/mesmotronic/plugins/FullScreenPlugin$1;
.super Ljava/lang/Object;
.source "FullScreenPlugin.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/mesmotronic/plugins/FullScreenPlugin;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;


# direct methods
.method constructor <init>(Lcom/mesmotronic/plugins/FullScreenPlugin;)V
    .locals 0

    .line 39
    iput-object p1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$1;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 1

    .line 42
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$1;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-virtual {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->leanMode()Z

    return-void
.end method
