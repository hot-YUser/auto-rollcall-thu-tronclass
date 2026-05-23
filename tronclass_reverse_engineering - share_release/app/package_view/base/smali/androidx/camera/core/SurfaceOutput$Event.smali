.class public abstract Landroidx/camera/core/SurfaceOutput$Event;
.super Ljava/lang/Object;
.source "SurfaceOutput.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/SurfaceOutput;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "Event"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/SurfaceOutput$Event$EventCode;
    }
.end annotation


# static fields
.field public static final EVENT_REQUEST_CLOSE:I


# direct methods
.method constructor <init>()V
    .locals 0

    .line 190
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static of(ILandroidx/camera/core/SurfaceOutput;)Landroidx/camera/core/SurfaceOutput$Event;
    .locals 1

    .line 234
    new-instance v0, Landroidx/camera/core/AutoValue_SurfaceOutput_Event;

    invoke-direct {v0, p0, p1}, Landroidx/camera/core/AutoValue_SurfaceOutput_Event;-><init>(ILandroidx/camera/core/SurfaceOutput;)V

    return-object v0
.end method


# virtual methods
.method public abstract getEventCode()I
.end method

.method public abstract getSurfaceOutput()Landroidx/camera/core/SurfaceOutput;
.end method
