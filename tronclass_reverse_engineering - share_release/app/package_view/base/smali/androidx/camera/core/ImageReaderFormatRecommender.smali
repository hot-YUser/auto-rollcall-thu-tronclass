.class final Landroidx/camera/core/ImageReaderFormatRecommender;
.super Ljava/lang/Object;
.source "ImageReaderFormatRecommender.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/ImageReaderFormatRecommender$FormatCombo;
    }
.end annotation


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 30
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static chooseCombo()Landroidx/camera/core/ImageReaderFormatRecommender$FormatCombo;
    .locals 2

    const/16 v0, 0x100

    const/16 v1, 0x23

    .line 37
    invoke-static {v0, v1}, Landroidx/camera/core/ImageReaderFormatRecommender$FormatCombo;->create(II)Landroidx/camera/core/ImageReaderFormatRecommender$FormatCombo;

    move-result-object v0

    return-object v0
.end method
