.class abstract Landroidx/camera/video/FallbackStrategy$RuleStrategy;
.super Landroidx/camera/video/FallbackStrategy;
.source "FallbackStrategy.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/FallbackStrategy;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "RuleStrategy"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 1

    const/4 v0, 0x0

    .line 131
    invoke-direct {p0, v0}, Landroidx/camera/video/FallbackStrategy;-><init>(Landroidx/camera/video/FallbackStrategy$1;)V

    return-void
.end method


# virtual methods
.method abstract getFallbackQuality()Landroidx/camera/video/Quality;
.end method

.method abstract getFallbackRule()I
.end method
