.class Lcom/getcapacitor/Dialogs$2$3;
.super Ljava/lang/Object;
.source "Dialogs.java"

# interfaces
.implements Landroid/content/DialogInterface$OnClickListener;


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

    .line 112
    iput-object p1, p0, Lcom/getcapacitor/Dialogs$2$3;->this$0:Lcom/getcapacitor/Dialogs$2;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onClick(Landroid/content/DialogInterface;I)V
    .locals 2

    .line 114
    invoke-interface {p1}, Landroid/content/DialogInterface;->dismiss()V

    .line 115
    iget-object p1, p0, Lcom/getcapacitor/Dialogs$2$3;->this$0:Lcom/getcapacitor/Dialogs$2;

    iget-object p1, p1, Lcom/getcapacitor/Dialogs$2;->val$listener:Lcom/getcapacitor/Dialogs$OnResultListener;

    const/4 p2, 0x0

    const/4 v0, 0x0

    const/4 v1, 0x1

    invoke-interface {p1, v1, p2, v0}, Lcom/getcapacitor/Dialogs$OnResultListener;->onResult(ZZLjava/lang/String;)V

    return-void
.end method
