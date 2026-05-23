.class final Landroidx/camera/core/impl/utils/Exif$Speed;
.super Ljava/lang/Object;
.source "Exif.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/utils/Exif;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x1a
    name = "Speed"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/utils/Exif$Speed$Converter;
    }
.end annotation


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 696
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static fromKilometersPerHour(D)Landroidx/camera/core/impl/utils/Exif$Speed$Converter;
    .locals 3

    .line 698
    new-instance v0, Landroidx/camera/core/impl/utils/Exif$Speed$Converter;

    const-wide v1, 0x3fe3e2456f75d9a1L    # 0.621371

    mul-double/2addr p0, v1

    invoke-direct {v0, p0, p1}, Landroidx/camera/core/impl/utils/Exif$Speed$Converter;-><init>(D)V

    return-object v0
.end method

.method static fromKnots(D)Landroidx/camera/core/impl/utils/Exif$Speed$Converter;
    .locals 3

    .line 705
    new-instance v0, Landroidx/camera/core/impl/utils/Exif$Speed$Converter;

    const-wide v1, 0x3ff269984a0e410bL    # 1.15078

    mul-double/2addr p0, v1

    invoke-direct {v0, p0, p1}, Landroidx/camera/core/impl/utils/Exif$Speed$Converter;-><init>(D)V

    return-object v0
.end method

.method static fromMilesPerHour(D)Landroidx/camera/core/impl/utils/Exif$Speed$Converter;
    .locals 1

    .line 701
    new-instance v0, Landroidx/camera/core/impl/utils/Exif$Speed$Converter;

    invoke-direct {v0, p0, p1}, Landroidx/camera/core/impl/utils/Exif$Speed$Converter;-><init>(D)V

    return-object v0
.end method
