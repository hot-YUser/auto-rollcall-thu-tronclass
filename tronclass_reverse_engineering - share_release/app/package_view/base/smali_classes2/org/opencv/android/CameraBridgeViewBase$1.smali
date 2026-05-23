.class Lorg/opencv/android/CameraBridgeViewBase$1;
.super Ljava/lang/Object;
.source "CameraBridgeViewBase.java"

# interfaces
.implements Landroid/content/DialogInterface$OnClickListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/opencv/android/CameraBridgeViewBase;->onEnterStartedState()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/opencv/android/CameraBridgeViewBase;


# direct methods
.method constructor <init>(Lorg/opencv/android/CameraBridgeViewBase;)V
    .locals 0

    .line 380
    iput-object p1, p0, Lorg/opencv/android/CameraBridgeViewBase$1;->this$0:Lorg/opencv/android/CameraBridgeViewBase;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onClick(Landroid/content/DialogInterface;I)V
    .locals 0

    .line 382
    invoke-interface {p1}, Landroid/content/DialogInterface;->dismiss()V

    .line 383
    iget-object p1, p0, Lorg/opencv/android/CameraBridgeViewBase$1;->this$0:Lorg/opencv/android/CameraBridgeViewBase;

    invoke-virtual {p1}, Lorg/opencv/android/CameraBridgeViewBase;->getContext()Landroid/content/Context;

    move-result-object p1

    check-cast p1, Landroid/app/Activity;

    invoke-virtual {p1}, Landroid/app/Activity;->finish()V

    return-void
.end method
