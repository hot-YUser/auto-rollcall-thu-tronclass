.class public interface abstract Landroidx/camera/core/impl/EncoderProfilesProvider;
.super Ljava/lang/Object;
.source "EncoderProfilesProvider.java"


# static fields
.field public static final EMPTY:Landroidx/camera/core/impl/EncoderProfilesProvider;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 48
    new-instance v0, Landroidx/camera/core/impl/EncoderProfilesProvider$1;

    invoke-direct {v0}, Landroidx/camera/core/impl/EncoderProfilesProvider$1;-><init>()V

    sput-object v0, Landroidx/camera/core/impl/EncoderProfilesProvider;->EMPTY:Landroidx/camera/core/impl/EncoderProfilesProvider;

    return-void
.end method


# virtual methods
.method public abstract getAll(I)Landroidx/camera/core/impl/EncoderProfilesProxy;
.end method

.method public abstract hasProfile(I)Z
.end method
