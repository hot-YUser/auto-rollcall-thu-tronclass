.class Lcom/getcapacitor/Dialogs$2;
.super Ljava/lang/Object;
.source "Dialogs.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/Dialogs;->confirm(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$confirmCancelButtonTitle:Ljava/lang/String;

.field final synthetic val$confirmOkButtonTitle:Ljava/lang/String;

.field final synthetic val$confirmTitle:Ljava/lang/String;

.field final synthetic val$context:Landroid/content/Context;

.field final synthetic val$listener:Lcom/getcapacitor/Dialogs$OnResultListener;

.field final synthetic val$message:Ljava/lang/String;


# direct methods
.method constructor <init>(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;Ljava/lang/String;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 104
    iput-object p1, p0, Lcom/getcapacitor/Dialogs$2;->val$context:Landroid/content/Context;

    iput-object p2, p0, Lcom/getcapacitor/Dialogs$2;->val$message:Ljava/lang/String;

    iput-object p3, p0, Lcom/getcapacitor/Dialogs$2;->val$confirmTitle:Ljava/lang/String;

    iput-object p4, p0, Lcom/getcapacitor/Dialogs$2;->val$confirmOkButtonTitle:Ljava/lang/String;

    iput-object p5, p0, Lcom/getcapacitor/Dialogs$2;->val$listener:Lcom/getcapacitor/Dialogs$OnResultListener;

    iput-object p6, p0, Lcom/getcapacitor/Dialogs$2;->val$confirmCancelButtonTitle:Ljava/lang/String;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 107
    new-instance v0, Landroid/app/AlertDialog$Builder;

    iget-object v1, p0, Lcom/getcapacitor/Dialogs$2;->val$context:Landroid/content/Context;

    invoke-direct {v0, v1}, Landroid/app/AlertDialog$Builder;-><init>(Landroid/content/Context;)V

    .line 109
    iget-object v1, p0, Lcom/getcapacitor/Dialogs$2;->val$message:Ljava/lang/String;

    .line 110
    invoke-virtual {v0, v1}, Landroid/app/AlertDialog$Builder;->setMessage(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    move-result-object v1

    iget-object v2, p0, Lcom/getcapacitor/Dialogs$2;->val$confirmTitle:Ljava/lang/String;

    .line 111
    invoke-virtual {v1, v2}, Landroid/app/AlertDialog$Builder;->setTitle(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    move-result-object v1

    iget-object v2, p0, Lcom/getcapacitor/Dialogs$2;->val$confirmOkButtonTitle:Ljava/lang/String;

    new-instance v3, Lcom/getcapacitor/Dialogs$2$3;

    invoke-direct {v3, p0}, Lcom/getcapacitor/Dialogs$2$3;-><init>(Lcom/getcapacitor/Dialogs$2;)V

    .line 112
    invoke-virtual {v1, v2, v3}, Landroid/app/AlertDialog$Builder;->setPositiveButton(Ljava/lang/CharSequence;Landroid/content/DialogInterface$OnClickListener;)Landroid/app/AlertDialog$Builder;

    move-result-object v1

    iget-object v2, p0, Lcom/getcapacitor/Dialogs$2;->val$confirmCancelButtonTitle:Ljava/lang/String;

    new-instance v3, Lcom/getcapacitor/Dialogs$2$2;

    invoke-direct {v3, p0}, Lcom/getcapacitor/Dialogs$2$2;-><init>(Lcom/getcapacitor/Dialogs$2;)V

    .line 118
    invoke-virtual {v1, v2, v3}, Landroid/app/AlertDialog$Builder;->setNegativeButton(Ljava/lang/CharSequence;Landroid/content/DialogInterface$OnClickListener;)Landroid/app/AlertDialog$Builder;

    move-result-object v1

    new-instance v2, Lcom/getcapacitor/Dialogs$2$1;

    invoke-direct {v2, p0}, Lcom/getcapacitor/Dialogs$2$1;-><init>(Lcom/getcapacitor/Dialogs$2;)V

    .line 125
    invoke-virtual {v1, v2}, Landroid/app/AlertDialog$Builder;->setOnCancelListener(Landroid/content/DialogInterface$OnCancelListener;)Landroid/app/AlertDialog$Builder;

    .line 132
    invoke-virtual {v0}, Landroid/app/AlertDialog$Builder;->create()Landroid/app/AlertDialog;

    move-result-object v0

    .line 134
    invoke-virtual {v0}, Landroid/app/AlertDialog;->show()V

    return-void
.end method
