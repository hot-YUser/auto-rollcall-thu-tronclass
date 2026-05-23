.class Lorg/apache/cordova/CordovaActivity$4;
.super Ljava/lang/Object;
.source "CordovaActivity.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/CordovaActivity;->displayError(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Z)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/CordovaActivity;

.field final synthetic val$button:Ljava/lang/String;

.field final synthetic val$exit:Z

.field final synthetic val$me:Lorg/apache/cordova/CordovaActivity;

.field final synthetic val$message:Ljava/lang/String;

.field final synthetic val$title:Ljava/lang/String;


# direct methods
.method constructor <init>(Lorg/apache/cordova/CordovaActivity;Lorg/apache/cordova/CordovaActivity;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Z)V
    .locals 0

    .line 402
    iput-object p1, p0, Lorg/apache/cordova/CordovaActivity$4;->this$0:Lorg/apache/cordova/CordovaActivity;

    iput-object p2, p0, Lorg/apache/cordova/CordovaActivity$4;->val$me:Lorg/apache/cordova/CordovaActivity;

    iput-object p3, p0, Lorg/apache/cordova/CordovaActivity$4;->val$message:Ljava/lang/String;

    iput-object p4, p0, Lorg/apache/cordova/CordovaActivity$4;->val$title:Ljava/lang/String;

    iput-object p5, p0, Lorg/apache/cordova/CordovaActivity$4;->val$button:Ljava/lang/String;

    iput-boolean p6, p0, Lorg/apache/cordova/CordovaActivity$4;->val$exit:Z

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 405
    :try_start_0
    new-instance v0, Landroid/app/AlertDialog$Builder;

    iget-object v1, p0, Lorg/apache/cordova/CordovaActivity$4;->val$me:Lorg/apache/cordova/CordovaActivity;

    invoke-direct {v0, v1}, Landroid/app/AlertDialog$Builder;-><init>(Landroid/content/Context;)V

    .line 406
    iget-object v1, p0, Lorg/apache/cordova/CordovaActivity$4;->val$message:Ljava/lang/String;

    invoke-virtual {v0, v1}, Landroid/app/AlertDialog$Builder;->setMessage(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    .line 407
    iget-object v1, p0, Lorg/apache/cordova/CordovaActivity$4;->val$title:Ljava/lang/String;

    invoke-virtual {v0, v1}, Landroid/app/AlertDialog$Builder;->setTitle(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    const/4 v1, 0x0

    .line 408
    invoke-virtual {v0, v1}, Landroid/app/AlertDialog$Builder;->setCancelable(Z)Landroid/app/AlertDialog$Builder;

    .line 409
    iget-object v1, p0, Lorg/apache/cordova/CordovaActivity$4;->val$button:Ljava/lang/String;

    new-instance v2, Lorg/apache/cordova/CordovaActivity$4$1;

    invoke-direct {v2, p0}, Lorg/apache/cordova/CordovaActivity$4$1;-><init>(Lorg/apache/cordova/CordovaActivity$4;)V

    invoke-virtual {v0, v1, v2}, Landroid/app/AlertDialog$Builder;->setPositiveButton(Ljava/lang/CharSequence;Landroid/content/DialogInterface$OnClickListener;)Landroid/app/AlertDialog$Builder;

    .line 418
    invoke-virtual {v0}, Landroid/app/AlertDialog$Builder;->create()Landroid/app/AlertDialog;

    .line 419
    invoke-virtual {v0}, Landroid/app/AlertDialog$Builder;->show()Landroid/app/AlertDialog;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 421
    :catch_0
    iget-object v0, p0, Lorg/apache/cordova/CordovaActivity$4;->this$0:Lorg/apache/cordova/CordovaActivity;

    invoke-virtual {v0}, Lorg/apache/cordova/CordovaActivity;->finish()V

    :goto_0
    return-void
.end method
