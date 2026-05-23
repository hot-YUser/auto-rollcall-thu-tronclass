.class public abstract Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;
.super Ljava/lang/Object;
.source "EncoderProfilesProxy.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/EncoderProfilesProxy;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "AudioProfileProxy"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy$AudioEncoder;
    }
.end annotation


# static fields
.field public static final MEDIA_TYPE_NONE:Ljava/lang/String; = "audio/none"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 164
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static create(ILjava/lang/String;IIII)Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;
    .locals 8

    .line 184
    new-instance v7, Landroidx/camera/core/impl/AutoValue_EncoderProfilesProxy_AudioProfileProxy;

    move-object v0, v7

    move v1, p0

    move-object v2, p1

    move v3, p2

    move v4, p3

    move v5, p4

    move v6, p5

    invoke-direct/range {v0 .. v6}, Landroidx/camera/core/impl/AutoValue_EncoderProfilesProxy_AudioProfileProxy;-><init>(ILjava/lang/String;IIII)V

    return-object v7
.end method


# virtual methods
.method public abstract getBitrate()I
.end method

.method public abstract getChannels()I
.end method

.method public abstract getCodec()I
.end method

.method public abstract getMediaType()Ljava/lang/String;
.end method

.method public abstract getProfile()I
.end method

.method public abstract getSampleRate()I
.end method
