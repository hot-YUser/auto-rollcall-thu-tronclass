.class abstract Landroidx/camera/core/ResolutionInfo$ResolutionInfoInternal;
.super Ljava/lang/Object;
.source "ResolutionInfo.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/ResolutionInfo;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "ResolutionInfoInternal"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/ResolutionInfo$ResolutionInfoInternal$Builder;
    }
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 129
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method abstract getCropRect()Landroid/graphics/Rect;
.end method

.method abstract getResolution()Landroid/util/Size;
.end method

.method abstract getRotationDegrees()I
.end method
