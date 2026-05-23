.class Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$2;
.super Ljava/lang/Object;
.source "ModalsBottomSheetDialogFragment.java"

# interfaces
.implements Landroid/view/View$OnClickListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->setupDialog(Landroid/app/Dialog;I)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

.field final synthetic val$optionIndex:I


# direct methods
.method constructor <init>(Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 117
    iput-object p1, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$2;->this$0:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

    iput p2, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$2;->val$optionIndex:I

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onClick(Landroid/view/View;)V
    .locals 1

    .line 120
    new-instance p1, Ljava/lang/StringBuilder;

    const-string v0, "CliCKED: "

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v0, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$2;->val$optionIndex:I

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    .line 122
    iget-object p1, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$2;->this$0:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

    invoke-static {p1}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->access$000(Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;)Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 123
    iget-object p1, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$2;->this$0:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

    invoke-static {p1}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->access$000(Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;)Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;

    move-result-object p1

    iget v0, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$2;->val$optionIndex:I

    invoke-interface {p1, v0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;->onSelected(I)V

    :cond_0
    return-void
.end method
