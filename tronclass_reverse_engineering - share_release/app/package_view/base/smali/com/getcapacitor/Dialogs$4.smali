.class Lcom/getcapacitor/Dialogs$4;
.super Ljava/lang/Object;
.source "Dialogs.java"

# interfaces
.implements Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/Dialogs;->actions(Landroidx/appcompat/app/AppCompatActivity;[Ljava/lang/Object;Lcom/getcapacitor/Dialogs$OnSelectListener;Lcom/getcapacitor/Dialogs$OnCancelListener;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$fragment:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

.field final synthetic val$listener:Lcom/getcapacitor/Dialogs$OnSelectListener;


# direct methods
.method constructor <init>(Lcom/getcapacitor/Dialogs$OnSelectListener;Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 214
    iput-object p1, p0, Lcom/getcapacitor/Dialogs$4;->val$listener:Lcom/getcapacitor/Dialogs$OnSelectListener;

    iput-object p2, p0, Lcom/getcapacitor/Dialogs$4;->val$fragment:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onSelected(I)V
    .locals 1

    .line 217
    iget-object v0, p0, Lcom/getcapacitor/Dialogs$4;->val$listener:Lcom/getcapacitor/Dialogs$OnSelectListener;

    invoke-interface {v0, p1}, Lcom/getcapacitor/Dialogs$OnSelectListener;->onSelect(I)V

    .line 218
    iget-object p1, p0, Lcom/getcapacitor/Dialogs$4;->val$fragment:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

    invoke-virtual {p1}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->dismiss()V

    return-void
.end method
