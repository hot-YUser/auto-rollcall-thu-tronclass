.class interface abstract Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat$SessionConfigurationCompatImpl;
.super Ljava/lang/Object;
.source "SessionConfigurationCompat.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/camera2/internal/compat/params/SessionConfigurationCompat;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x60a
    name = "SessionConfigurationCompatImpl"
.end annotation


# virtual methods
.method public abstract getExecutor()Ljava/util/concurrent/Executor;
.end method

.method public abstract getInputConfiguration()Landroidx/camera/camera2/internal/compat/params/InputConfigurationCompat;
.end method

.method public abstract getOutputConfigurations()Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroidx/camera/camera2/internal/compat/params/OutputConfigurationCompat;",
            ">;"
        }
    .end annotation
.end method

.method public abstract getSessionConfiguration()Ljava/lang/Object;
.end method

.method public abstract getSessionParameters()Landroid/hardware/camera2/CaptureRequest;
.end method

.method public abstract getSessionType()I
.end method

.method public abstract getStateCallback()Landroid/hardware/camera2/CameraCaptureSession$StateCallback;
.end method

.method public abstract setInputConfiguration(Landroidx/camera/camera2/internal/compat/params/InputConfigurationCompat;)V
.end method

.method public abstract setSessionParameters(Landroid/hardware/camera2/CaptureRequest;)V
.end method
