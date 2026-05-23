.class abstract Landroidx/camera/video/Quality$ConstantQuality;
.super Landroidx/camera/video/Quality;
.source "Quality.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/Quality;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "ConstantQuality"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 1

    const/4 v0, 0x0

    .line 107
    invoke-direct {p0, v0}, Landroidx/camera/video/Quality;-><init>(Landroidx/camera/video/Quality$1;)V

    return-void
.end method

.method static of(ILjava/lang/String;)Landroidx/camera/video/Quality$ConstantQuality;
    .locals 1

    .line 110
    new-instance v0, Landroidx/camera/video/AutoValue_Quality_ConstantQuality;

    invoke-direct {v0, p0, p1}, Landroidx/camera/video/AutoValue_Quality_ConstantQuality;-><init>(ILjava/lang/String;)V

    return-object v0
.end method


# virtual methods
.method abstract getName()Ljava/lang/String;
.end method

.method abstract getValue()I
.end method
