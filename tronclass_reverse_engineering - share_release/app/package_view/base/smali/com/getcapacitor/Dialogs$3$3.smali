.class Lcom/getcapacitor/Dialogs$3$3;
.super Ljava/lang/Object;
.source "Dialogs.java"

# interfaces
.implements Landroid/content/DialogInterface$OnClickListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/Dialogs$3;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/Dialogs$3;

.field final synthetic val$input:Landroid/widget/EditText;


# direct methods
.method constructor <init>(Lcom/getcapacitor/Dialogs$3;Landroid/widget/EditText;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 173
    iput-object p1, p0, Lcom/getcapacitor/Dialogs$3$3;->this$0:Lcom/getcapacitor/Dialogs$3;

    iput-object p2, p0, Lcom/getcapacitor/Dialogs$3$3;->val$input:Landroid/widget/EditText;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onClick(Landroid/content/DialogInterface;I)V
    .locals 2

    .line 175
    invoke-interface {p1}, Landroid/content/DialogInterface;->dismiss()V

    .line 177
    iget-object p1, p0, Lcom/getcapacitor/Dialogs$3$3;->val$input:Landroid/widget/EditText;

    invoke-virtual {p1}, Landroid/widget/EditText;->getText()Landroid/text/Editable;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/String;->trim()Ljava/lang/String;

    move-result-object p1

    .line 178
    iget-object p2, p0, Lcom/getcapacitor/Dialogs$3$3;->this$0:Lcom/getcapacitor/Dialogs$3;

    iget-object p2, p2, Lcom/getcapacitor/Dialogs$3;->val$listener:Lcom/getcapacitor/Dialogs$OnResultListener;

    const/4 v0, 0x1

    const/4 v1, 0x0

    invoke-interface {p2, v0, v1, p1}, Lcom/getcapacitor/Dialogs$OnResultListener;->onResult(ZZLjava/lang/String;)V

    return-void
.end method
