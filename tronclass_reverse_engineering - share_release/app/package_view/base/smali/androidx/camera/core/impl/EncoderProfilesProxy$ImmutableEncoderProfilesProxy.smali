.class public abstract Landroidx/camera/core/impl/EncoderProfilesProxy$ImmutableEncoderProfilesProxy;
.super Ljava/lang/Object;
.source "EncoderProfilesProxy.java"

# interfaces
.implements Landroidx/camera/core/impl/EncoderProfilesProxy;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/EncoderProfilesProxy;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "ImmutableEncoderProfilesProxy"
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 219
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static create(IILjava/util/List;Ljava/util/List;)Landroidx/camera/core/impl/EncoderProfilesProxy$ImmutableEncoderProfilesProxy;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(II",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;",
            ">;",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;",
            ">;)",
            "Landroidx/camera/core/impl/EncoderProfilesProxy$ImmutableEncoderProfilesProxy;"
        }
    .end annotation

    .line 228
    new-instance v0, Landroidx/camera/core/impl/AutoValue_EncoderProfilesProxy_ImmutableEncoderProfilesProxy;

    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1, p2}, Ljava/util/ArrayList;-><init>(Ljava/util/Collection;)V

    .line 231
    invoke-static {v1}, Ljava/util/Collections;->unmodifiableList(Ljava/util/List;)Ljava/util/List;

    move-result-object p2

    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1, p3}, Ljava/util/ArrayList;-><init>(Ljava/util/Collection;)V

    .line 232
    invoke-static {v1}, Ljava/util/Collections;->unmodifiableList(Ljava/util/List;)Ljava/util/List;

    move-result-object p3

    invoke-direct {v0, p0, p1, p2, p3}, Landroidx/camera/core/impl/AutoValue_EncoderProfilesProxy_ImmutableEncoderProfilesProxy;-><init>(IILjava/util/List;Ljava/util/List;)V

    return-object v0
.end method
