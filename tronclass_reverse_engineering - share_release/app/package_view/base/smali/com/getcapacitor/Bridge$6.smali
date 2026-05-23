.class Lcom/getcapacitor/Bridge$6;
.super Ljava/lang/Object;
.source "Bridge.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/Bridge;->setServerAssetPath(Ljava/lang/String;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/Bridge;


# direct methods
.method constructor <init>(Lcom/getcapacitor/Bridge;)V
    .locals 0

    .line 893
    iput-object p1, p0, Lcom/getcapacitor/Bridge$6;->this$0:Lcom/getcapacitor/Bridge;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 896
    iget-object v0, p0, Lcom/getcapacitor/Bridge$6;->this$0:Lcom/getcapacitor/Bridge;

    invoke-static {v0}, Lcom/getcapacitor/Bridge;->access$000(Lcom/getcapacitor/Bridge;)Landroid/webkit/WebView;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/Bridge$6;->this$0:Lcom/getcapacitor/Bridge;

    invoke-static {v1}, Lcom/getcapacitor/Bridge;->access$100(Lcom/getcapacitor/Bridge;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/webkit/WebView;->loadUrl(Ljava/lang/String;)V

    return-void
.end method
