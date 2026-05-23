.class Lcom/getcapacitor/plugin/Accessibility$1;
.super Ljava/lang/Object;
.source "Accessibility.java"

# interfaces
.implements Landroid/view/accessibility/AccessibilityManager$TouchExplorationStateChangeListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Accessibility;->load()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/Accessibility;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/Accessibility;)V
    .locals 0

    .line 26
    iput-object p1, p0, Lcom/getcapacitor/plugin/Accessibility$1;->this$0:Lcom/getcapacitor/plugin/Accessibility;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onTouchExplorationStateChanged(Z)V
    .locals 2

    .line 29
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 30
    const-string v1, "value"

    invoke-virtual {v0, v1, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 31
    iget-object p1, p0, Lcom/getcapacitor/plugin/Accessibility$1;->this$0:Lcom/getcapacitor/plugin/Accessibility;

    const-string v1, "accessibilityScreenReaderStateChange"

    invoke-static {p1, v1, v0}, Lcom/getcapacitor/plugin/Accessibility;->access$000(Lcom/getcapacitor/plugin/Accessibility;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method
