.class Lcom/getcapacitor/plugin/Keyboard$1$1;
.super Ljava/lang/Object;
.source "Keyboard.java"

# interfaces
.implements Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Keyboard$1;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field previousHeightDiff:I

.field final synthetic this$1:Lcom/getcapacitor/plugin/Keyboard$1;

.field final synthetic val$density:F


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/Keyboard$1;F)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 47
    iput-object p1, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$1;

    iput p2, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->val$density:F

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 p1, 0x0

    .line 48
    iput p1, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->previousHeightDiff:I

    return-void
.end method


# virtual methods
.method public onGlobalLayout()V
    .locals 5

    .line 51
    new-instance v0, Landroid/graphics/Rect;

    invoke-direct {v0}, Landroid/graphics/Rect;-><init>()V

    .line 53
    iget-object v1, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$1;

    iget-object v1, v1, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v1}, Lcom/getcapacitor/plugin/Keyboard;->access$000(Lcom/getcapacitor/plugin/Keyboard;)Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/view/View;->getWindowVisibleDisplayFrame(Landroid/graphics/Rect;)V

    .line 56
    iget-object v1, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$1;

    iget-object v1, v1, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v1}, Lcom/getcapacitor/plugin/Keyboard;->access$000(Lcom/getcapacitor/plugin/Keyboard;)Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1}, Landroid/view/View;->getRootView()Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1}, Landroid/view/View;->getHeight()I

    move-result v1

    .line 57
    iget v0, v0, Landroid/graphics/Rect;->bottom:I

    .line 61
    iget-object v2, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$1;

    iget-object v2, v2, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v2}, Lcom/getcapacitor/plugin/Keyboard;->access$000(Lcom/getcapacitor/plugin/Keyboard;)Landroid/view/View;

    move-result-object v2

    invoke-virtual {v2}, Landroid/view/View;->getRootWindowInsets()Landroid/view/WindowInsets;

    move-result-object v2

    .line 62
    invoke-virtual {v2}, Landroid/view/WindowInsets;->getStableInsetBottom()I

    move-result v2

    add-int/2addr v0, v2

    sub-int/2addr v1, v0

    int-to-float v0, v1

    .line 76
    iget v1, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->val$density:F

    div-float/2addr v0, v1

    float-to-int v0, v0

    const/16 v1, 0x64

    if-le v0, v1, :cond_0

    .line 77
    iget v2, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->previousHeightDiff:I

    if-eq v0, v2, :cond_0

    .line 78
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "{ \'keyboardHeight\': "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " }"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 79
    iget-object v2, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$1;

    iget-object v2, v2, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v2}, Lcom/getcapacitor/plugin/Keyboard;->access$200(Lcom/getcapacitor/plugin/Keyboard;)Lcom/getcapacitor/Bridge;

    move-result-object v2

    const-string v3, "keyboardWillShow"

    invoke-virtual {v2, v3, v1}, Lcom/getcapacitor/Bridge;->triggerWindowJSEvent(Ljava/lang/String;Ljava/lang/String;)V

    .line 80
    iget-object v2, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$1;

    iget-object v2, v2, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v2}, Lcom/getcapacitor/plugin/Keyboard;->access$300(Lcom/getcapacitor/plugin/Keyboard;)Lcom/getcapacitor/Bridge;

    move-result-object v2

    const-string v4, "keyboardDidShow"

    invoke-virtual {v2, v4, v1}, Lcom/getcapacitor/Bridge;->triggerWindowJSEvent(Ljava/lang/String;Ljava/lang/String;)V

    .line 81
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 82
    const-string v2, "keyboardHeight"

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;I)Lcom/getcapacitor/JSObject;

    .line 83
    iget-object v2, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$1;

    iget-object v2, v2, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v2, v3, v1}, Lcom/getcapacitor/plugin/Keyboard;->access$400(Lcom/getcapacitor/plugin/Keyboard;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    .line 84
    iget-object v2, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$1;

    iget-object v2, v2, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v2, v4, v1}, Lcom/getcapacitor/plugin/Keyboard;->access$500(Lcom/getcapacitor/plugin/Keyboard;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    .line 86
    :cond_0
    iget v2, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->previousHeightDiff:I

    if-eq v0, v2, :cond_1

    sub-int/2addr v2, v0

    if-le v2, v1, :cond_1

    .line 87
    iget-object v1, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$1;

    iget-object v1, v1, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v1}, Lcom/getcapacitor/plugin/Keyboard;->access$600(Lcom/getcapacitor/plugin/Keyboard;)Lcom/getcapacitor/Bridge;

    move-result-object v1

    const-string v2, "keyboardWillHide"

    invoke-virtual {v1, v2}, Lcom/getcapacitor/Bridge;->triggerWindowJSEvent(Ljava/lang/String;)V

    .line 88
    iget-object v1, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$1;

    iget-object v1, v1, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v1}, Lcom/getcapacitor/plugin/Keyboard;->access$700(Lcom/getcapacitor/plugin/Keyboard;)Lcom/getcapacitor/Bridge;

    move-result-object v1

    const-string v3, "keyboardDidHide"

    invoke-virtual {v1, v3}, Lcom/getcapacitor/Bridge;->triggerWindowJSEvent(Ljava/lang/String;)V

    .line 89
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 90
    iget-object v4, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$1;

    iget-object v4, v4, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v4, v2, v1}, Lcom/getcapacitor/plugin/Keyboard;->access$800(Lcom/getcapacitor/plugin/Keyboard;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    .line 91
    iget-object v2, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$1;

    iget-object v2, v2, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v2, v3, v1}, Lcom/getcapacitor/plugin/Keyboard;->access$900(Lcom/getcapacitor/plugin/Keyboard;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    .line 93
    :cond_1
    :goto_0
    iput v0, p0, Lcom/getcapacitor/plugin/Keyboard$1$1;->previousHeightDiff:I

    return-void
.end method
