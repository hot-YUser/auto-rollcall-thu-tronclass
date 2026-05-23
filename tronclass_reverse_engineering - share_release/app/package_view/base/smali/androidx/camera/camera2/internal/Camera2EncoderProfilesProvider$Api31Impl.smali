.class Landroidx/camera/camera2/internal/Camera2EncoderProfilesProvider$Api31Impl;
.super Ljava/lang/Object;
.source "Camera2EncoderProfilesProvider.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/camera2/internal/Camera2EncoderProfilesProvider;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "Api31Impl"
.end annotation


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 144
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static getAll(Ljava/lang/String;I)Landroid/media/EncoderProfiles;
    .locals 0

    .line 140
    invoke-static {p0, p1}, Landroid/media/CamcorderProfile;->getAll(Ljava/lang/String;I)Landroid/media/EncoderProfiles;

    move-result-object p0

    return-object p0
.end method
