.class Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$1;
.super Landroid/hardware/camera2/CameraCaptureSession$CaptureCallback;
.source "WaitForRepeatingRequestStart.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;


# direct methods
.method constructor <init>(Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;)V
    .locals 0

    .line 138
    iput-object p1, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$1;->this$0:Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;

    invoke-direct {p0}, Landroid/hardware/camera2/CameraCaptureSession$CaptureCallback;-><init>()V

    return-void
.end method


# virtual methods
.method public onCaptureSequenceAborted(Landroid/hardware/camera2/CameraCaptureSession;I)V
    .locals 0

    .line 151
    iget-object p1, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$1;->this$0:Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;

    iget-object p1, p1, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;->mStartStreamingCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    if-eqz p1, :cond_0

    .line 152
    iget-object p1, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$1;->this$0:Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;

    iget-object p1, p1, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;->mStartStreamingCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    invoke-virtual {p1}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->setCancelled()Z

    .line 153
    iget-object p1, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$1;->this$0:Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;

    const/4 p2, 0x0

    iput-object p2, p1, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;->mStartStreamingCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    :cond_0
    return-void
.end method

.method public onCaptureStarted(Landroid/hardware/camera2/CameraCaptureSession;Landroid/hardware/camera2/CaptureRequest;JJ)V
    .locals 0

    .line 142
    iget-object p1, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$1;->this$0:Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;

    iget-object p1, p1, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;->mStartStreamingCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    if-eqz p1, :cond_0

    .line 143
    iget-object p1, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$1;->this$0:Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;

    iget-object p1, p1, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;->mStartStreamingCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    const/4 p2, 0x0

    invoke-virtual {p1, p2}, Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;->set(Ljava/lang/Object;)Z

    .line 144
    iget-object p1, p0, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart$1;->this$0:Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;

    iput-object p2, p1, Landroidx/camera/camera2/internal/compat/workaround/WaitForRepeatingRequestStart;->mStartStreamingCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    :cond_0
    return-void
.end method
