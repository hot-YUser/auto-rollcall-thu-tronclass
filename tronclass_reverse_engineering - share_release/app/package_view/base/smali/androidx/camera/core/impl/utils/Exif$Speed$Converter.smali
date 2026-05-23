.class final Landroidx/camera/core/impl/utils/Exif$Speed$Converter;
.super Ljava/lang/Object;
.source "Exif.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/utils/Exif$Speed;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = "Converter"
.end annotation


# instance fields
.field final mMph:D


# direct methods
.method constructor <init>(D)V
    .locals 0

    .line 711
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 712
    iput-wide p1, p0, Landroidx/camera/core/impl/utils/Exif$Speed$Converter;->mMph:D

    return-void
.end method


# virtual methods
.method toMetersPerSecond()D
    .locals 4

    .line 716
    iget-wide v0, p0, Landroidx/camera/core/impl/utils/Exif$Speed$Converter;->mMph:D

    const-wide v2, 0x4001e540cc78e9f7L    # 2.23694

    div-double/2addr v0, v2

    return-wide v0
.end method
