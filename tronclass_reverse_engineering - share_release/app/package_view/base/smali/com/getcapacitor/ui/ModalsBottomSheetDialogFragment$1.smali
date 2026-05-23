.class Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$1;
.super Lcom/google/android/material/bottomsheet/BottomSheetBehavior$BottomSheetCallback;
.source "ModalsBottomSheetDialogFragment.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;


# direct methods
.method constructor <init>(Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;)V
    .locals 0

    .line 60
    iput-object p1, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$1;->this$0:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

    invoke-direct {p0}, Lcom/google/android/material/bottomsheet/BottomSheetBehavior$BottomSheetCallback;-><init>()V

    return-void
.end method


# virtual methods
.method public onSlide(Landroid/view/View;F)V
    .locals 0

    return-void
.end method

.method public onStateChanged(Landroid/view/View;I)V
    .locals 0

    const/4 p1, 0x5

    if-ne p2, p1, :cond_0

    .line 65
    iget-object p1, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$1;->this$0:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

    invoke-virtual {p1}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->dismiss()V

    :cond_0
    return-void
.end method
