.class Lcom/getcapacitor/Dialogs$3;
.super Ljava/lang/Object;
.source "Dialogs.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/Dialogs;->prompt(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$context:Landroid/content/Context;

.field final synthetic val$listener:Lcom/getcapacitor/Dialogs$OnResultListener;

.field final synthetic val$message:Ljava/lang/String;

.field final synthetic val$promptCancelButtonTitle:Ljava/lang/String;

.field final synthetic val$promptInputPlaceholder:Ljava/lang/String;

.field final synthetic val$promptInputText:Ljava/lang/String;

.field final synthetic val$promptOkButtonTitle:Ljava/lang/String;

.field final synthetic val$promptTitle:Ljava/lang/String;


# direct methods
.method constructor <init>(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;Ljava/lang/String;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 160
    iput-object p1, p0, Lcom/getcapacitor/Dialogs$3;->val$context:Landroid/content/Context;

    iput-object p2, p0, Lcom/getcapacitor/Dialogs$3;->val$promptInputPlaceholder:Ljava/lang/String;

    iput-object p3, p0, Lcom/getcapacitor/Dialogs$3;->val$promptInputText:Ljava/lang/String;

    iput-object p4, p0, Lcom/getcapacitor/Dialogs$3;->val$message:Ljava/lang/String;

    iput-object p5, p0, Lcom/getcapacitor/Dialogs$3;->val$promptTitle:Ljava/lang/String;

    iput-object p6, p0, Lcom/getcapacitor/Dialogs$3;->val$promptOkButtonTitle:Ljava/lang/String;

    iput-object p7, p0, Lcom/getcapacitor/Dialogs$3;->val$listener:Lcom/getcapacitor/Dialogs$OnResultListener;

    iput-object p8, p0, Lcom/getcapacitor/Dialogs$3;->val$promptCancelButtonTitle:Ljava/lang/String;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 5

    .line 163
    new-instance v0, Landroid/app/AlertDialog$Builder;

    iget-object v1, p0, Lcom/getcapacitor/Dialogs$3;->val$context:Landroid/content/Context;

    invoke-direct {v0, v1}, Landroid/app/AlertDialog$Builder;-><init>(Landroid/content/Context;)V

    .line 164
    new-instance v1, Landroid/widget/EditText;

    iget-object v2, p0, Lcom/getcapacitor/Dialogs$3;->val$context:Landroid/content/Context;

    invoke-direct {v1, v2}, Landroid/widget/EditText;-><init>(Landroid/content/Context;)V

    .line 166
    iget-object v2, p0, Lcom/getcapacitor/Dialogs$3;->val$promptInputPlaceholder:Ljava/lang/String;

    invoke-virtual {v1, v2}, Landroid/widget/EditText;->setHint(Ljava/lang/CharSequence;)V

    .line 167
    iget-object v2, p0, Lcom/getcapacitor/Dialogs$3;->val$promptInputText:Ljava/lang/String;

    invoke-virtual {v1, v2}, Landroid/widget/EditText;->setText(Ljava/lang/CharSequence;)V

    .line 169
    iget-object v2, p0, Lcom/getcapacitor/Dialogs$3;->val$message:Ljava/lang/String;

    .line 170
    invoke-virtual {v0, v2}, Landroid/app/AlertDialog$Builder;->setMessage(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    move-result-object v2

    iget-object v3, p0, Lcom/getcapacitor/Dialogs$3;->val$promptTitle:Ljava/lang/String;

    .line 171
    invoke-virtual {v2, v3}, Landroid/app/AlertDialog$Builder;->setTitle(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    move-result-object v2

    .line 172
    invoke-virtual {v2, v1}, Landroid/app/AlertDialog$Builder;->setView(Landroid/view/View;)Landroid/app/AlertDialog$Builder;

    move-result-object v2

    iget-object v3, p0, Lcom/getcapacitor/Dialogs$3;->val$promptOkButtonTitle:Ljava/lang/String;

    new-instance v4, Lcom/getcapacitor/Dialogs$3$3;

    invoke-direct {v4, p0, v1}, Lcom/getcapacitor/Dialogs$3$3;-><init>(Lcom/getcapacitor/Dialogs$3;Landroid/widget/EditText;)V

    .line 173
    invoke-virtual {v2, v3, v4}, Landroid/app/AlertDialog$Builder;->setPositiveButton(Ljava/lang/CharSequence;Landroid/content/DialogInterface$OnClickListener;)Landroid/app/AlertDialog$Builder;

    move-result-object v1

    iget-object v2, p0, Lcom/getcapacitor/Dialogs$3;->val$promptCancelButtonTitle:Ljava/lang/String;

    new-instance v3, Lcom/getcapacitor/Dialogs$3$2;

    invoke-direct {v3, p0}, Lcom/getcapacitor/Dialogs$3$2;-><init>(Lcom/getcapacitor/Dialogs$3;)V

    .line 181
    invoke-virtual {v1, v2, v3}, Landroid/app/AlertDialog$Builder;->setNegativeButton(Ljava/lang/CharSequence;Landroid/content/DialogInterface$OnClickListener;)Landroid/app/AlertDialog$Builder;

    move-result-object v1

    new-instance v2, Lcom/getcapacitor/Dialogs$3$1;

    invoke-direct {v2, p0}, Lcom/getcapacitor/Dialogs$3$1;-><init>(Lcom/getcapacitor/Dialogs$3;)V

    .line 187
    invoke-virtual {v1, v2}, Landroid/app/AlertDialog$Builder;->setOnCancelListener(Landroid/content/DialogInterface$OnCancelListener;)Landroid/app/AlertDialog$Builder;

    .line 194
    invoke-virtual {v0}, Landroid/app/AlertDialog$Builder;->create()Landroid/app/AlertDialog;

    move-result-object v0

    .line 196
    invoke-virtual {v0}, Landroid/app/AlertDialog;->show()V

    return-void
.end method
