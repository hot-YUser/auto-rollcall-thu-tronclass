.class public abstract Landroidx/camera/core/SurfaceRequest$Result;
.super Ljava/lang/Object;
.source "SurfaceRequest.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/SurfaceRequest;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "Result"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/SurfaceRequest$Result$ResultCode;
    }
.end annotation


# static fields
.field public static final RESULT_INVALID_SURFACE:I = 0x2

.field public static final RESULT_REQUEST_CANCELLED:I = 0x1

.field public static final RESULT_SURFACE_ALREADY_PROVIDED:I = 0x3

.field public static final RESULT_SURFACE_USED_SUCCESSFULLY:I = 0x0

.field public static final RESULT_WILL_NOT_PROVIDE_SURFACE:I = 0x4


# direct methods
.method constructor <init>()V
    .locals 0

    .line 780
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static of(ILandroid/view/Surface;)Landroidx/camera/core/SurfaceRequest$Result;
    .locals 1

    .line 756
    new-instance v0, Landroidx/camera/core/AutoValue_SurfaceRequest_Result;

    invoke-direct {v0, p0, p1}, Landroidx/camera/core/AutoValue_SurfaceRequest_Result;-><init>(ILandroid/view/Surface;)V

    return-object v0
.end method


# virtual methods
.method public abstract getResultCode()I
.end method

.method public abstract getSurface()Landroid/view/Surface;
.end method
