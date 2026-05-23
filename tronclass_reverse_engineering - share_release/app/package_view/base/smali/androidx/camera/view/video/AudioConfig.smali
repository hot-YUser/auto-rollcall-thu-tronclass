.class public Landroidx/camera/view/video/AudioConfig;
.super Ljava/lang/Object;
.source "AudioConfig.java"


# static fields
.field public static final AUDIO_DISABLED:Landroidx/camera/view/video/AudioConfig;


# instance fields
.field private final mIsAudioEnabled:Z


# direct methods
.method static constructor <clinit>()V
    .locals 2

    .line 35
    new-instance v0, Landroidx/camera/view/video/AudioConfig;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Landroidx/camera/view/video/AudioConfig;-><init>(Z)V

    sput-object v0, Landroidx/camera/view/video/AudioConfig;->AUDIO_DISABLED:Landroidx/camera/view/video/AudioConfig;

    return-void
.end method

.method constructor <init>(Z)V
    .locals 0

    .line 39
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 40
    iput-boolean p1, p0, Landroidx/camera/view/video/AudioConfig;->mIsAudioEnabled:Z

    return-void
.end method

.method public static create(Z)Landroidx/camera/view/video/AudioConfig;
    .locals 1

    .line 53
    new-instance v0, Landroidx/camera/view/video/AudioConfig;

    invoke-direct {v0, p0}, Landroidx/camera/view/video/AudioConfig;-><init>(Z)V

    return-object v0
.end method


# virtual methods
.method public getAudioEnabled()Z
    .locals 1

    .line 60
    iget-boolean v0, p0, Landroidx/camera/view/video/AudioConfig;->mIsAudioEnabled:Z

    return v0
.end method
