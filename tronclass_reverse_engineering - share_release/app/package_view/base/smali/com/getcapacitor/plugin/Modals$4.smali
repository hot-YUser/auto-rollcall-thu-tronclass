.class Lcom/getcapacitor/plugin/Modals$4;
.super Ljava/lang/Object;
.source "Modals.java"

# interfaces
.implements Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Modals;->showActions(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/Modals;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;

.field final synthetic val$fragment:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/Modals;Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 130
    iput-object p1, p0, Lcom/getcapacitor/plugin/Modals$4;->this$0:Lcom/getcapacitor/plugin/Modals;

    iput-object p2, p0, Lcom/getcapacitor/plugin/Modals$4;->val$call:Lcom/getcapacitor/PluginCall;

    iput-object p3, p0, Lcom/getcapacitor/plugin/Modals$4;->val$fragment:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onSelected(I)V
    .locals 2

    .line 133
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 134
    const-string v1, "index"

    invoke-virtual {v0, v1, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;I)Lcom/getcapacitor/JSObject;

    .line 135
    iget-object p1, p0, Lcom/getcapacitor/plugin/Modals$4;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    .line 136
    iget-object p1, p0, Lcom/getcapacitor/plugin/Modals$4;->val$fragment:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

    invoke-virtual {p1}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->dismiss()V

    return-void
.end method
