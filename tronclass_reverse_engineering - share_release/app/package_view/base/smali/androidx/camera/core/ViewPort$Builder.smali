.class public final Landroidx/camera/core/ViewPort$Builder;
.super Ljava/lang/Object;
.source "ViewPort.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/ViewPort;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Builder"
.end annotation


# static fields
.field private static final DEFAULT_LAYOUT_DIRECTION:I = 0x0

.field private static final DEFAULT_SCALE_TYPE:I = 0x1


# instance fields
.field private final mAspectRatio:Landroid/util/Rational;

.field private mLayoutDirection:I

.field private final mRotation:I

.field private mScaleType:I


# direct methods
.method public constructor <init>(Landroid/util/Rational;I)V
    .locals 1

    .line 245
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x1

    .line 208
    iput v0, p0, Landroidx/camera/core/ViewPort$Builder;->mScaleType:I

    const/4 v0, 0x0

    .line 216
    iput v0, p0, Landroidx/camera/core/ViewPort$Builder;->mLayoutDirection:I

    .line 246
    iput-object p1, p0, Landroidx/camera/core/ViewPort$Builder;->mAspectRatio:Landroid/util/Rational;

    .line 247
    iput p2, p0, Landroidx/camera/core/ViewPort$Builder;->mRotation:I

    return-void
.end method


# virtual methods
.method public build()Landroidx/camera/core/ViewPort;
    .locals 5

    .line 282
    iget-object v0, p0, Landroidx/camera/core/ViewPort$Builder;->mAspectRatio:Landroid/util/Rational;

    const-string v1, "The crop aspect ratio must be set."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 283
    new-instance v0, Landroidx/camera/core/ViewPort;

    iget v1, p0, Landroidx/camera/core/ViewPort$Builder;->mScaleType:I

    iget-object v2, p0, Landroidx/camera/core/ViewPort$Builder;->mAspectRatio:Landroid/util/Rational;

    iget v3, p0, Landroidx/camera/core/ViewPort$Builder;->mRotation:I

    iget v4, p0, Landroidx/camera/core/ViewPort$Builder;->mLayoutDirection:I

    invoke-direct {v0, v1, v2, v3, v4}, Landroidx/camera/core/ViewPort;-><init>(ILandroid/util/Rational;II)V

    return-object v0
.end method

.method public setLayoutDirection(I)Landroidx/camera/core/ViewPort$Builder;
    .locals 0

    .line 273
    iput p1, p0, Landroidx/camera/core/ViewPort$Builder;->mLayoutDirection:I

    return-object p0
.end method

.method public setScaleType(I)Landroidx/camera/core/ViewPort$Builder;
    .locals 0

    .line 259
    iput p1, p0, Landroidx/camera/core/ViewPort$Builder;->mScaleType:I

    return-object p0
.end method
