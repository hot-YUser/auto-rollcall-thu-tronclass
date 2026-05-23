.class Lcom/getcapacitor/Bridge$2;
.super Ljava/lang/Object;
.source "Bridge.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/Bridge;->eval(Ljava/lang/String;Landroid/webkit/ValueCallback;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/Bridge;

.field final synthetic val$callback:Landroid/webkit/ValueCallback;

.field final synthetic val$js:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/getcapacitor/Bridge;Ljava/lang/String;Landroid/webkit/ValueCallback;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 558
    iput-object p1, p0, Lcom/getcapacitor/Bridge$2;->this$0:Lcom/getcapacitor/Bridge;

    iput-object p2, p0, Lcom/getcapacitor/Bridge$2;->val$js:Ljava/lang/String;

    iput-object p3, p0, Lcom/getcapacitor/Bridge$2;->val$callback:Landroid/webkit/ValueCallback;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 561
    iget-object v0, p0, Lcom/getcapacitor/Bridge$2;->this$0:Lcom/getcapacitor/Bridge;

    invoke-static {v0}, Lcom/getcapacitor/Bridge;->access$000(Lcom/getcapacitor/Bridge;)Landroid/webkit/WebView;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/Bridge$2;->val$js:Ljava/lang/String;

    iget-object v2, p0, Lcom/getcapacitor/Bridge$2;->val$callback:Landroid/webkit/ValueCallback;

    invoke-virtual {v0, v1, v2}, Landroid/webkit/WebView;->evaluateJavascript(Ljava/lang/String;Landroid/webkit/ValueCallback;)V

    return-void
.end method
