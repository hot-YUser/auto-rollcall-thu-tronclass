.class Lcom/getcapacitor/Dialogs$2$1;
.super Ljava/lang/Object;
.source "Dialogs.java"

# interfaces
.implements Landroid/content/DialogInterface$OnCancelListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/Dialogs$2;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/Dialogs$2;


# direct methods
.method constructor <init>(Lcom/getcapacitor/Dialogs$2;)V
    .locals 0

    .line 125
    iput-object p1, p0, Lcom/getcapacitor/Dialogs$2$1;->this$0:Lcom/getcapacitor/Dialogs$2;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onCancel(Landroid/content/DialogInterface;)V
    .locals 3

    .line 127
    invoke-interface {p1}, Landroid/content/DialogInterface;->dismiss()V

    .line 128
    iget-object p1, p0, Lcom/getcapacitor/Dialogs$2$1;->this$0:Lcom/getcapacitor/Dialogs$2;

    iget-object p1, p1, Lcom/getcapacitor/Dialogs$2;->val$listener:Lcom/getcapacitor/Dialogs$OnResultListener;

    const/4 v0, 0x1

    const/4 v1, 0x0

    const/4 v2, 0x0

    invoke-interface {p1, v2, v0, v1}, Lcom/getcapacitor/Dialogs$OnResultListener;->onResult(ZZLjava/lang/String;)V

    return-void
.end method
