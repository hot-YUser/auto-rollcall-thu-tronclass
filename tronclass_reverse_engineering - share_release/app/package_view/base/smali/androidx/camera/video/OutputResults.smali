.class public abstract Landroidx/camera/video/OutputResults;
.super Ljava/lang/Object;
.source "OutputResults.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 32
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static of(Landroid/net/Uri;)Landroidx/camera/video/OutputResults;
    .locals 1

    .line 36
    const-string v0, "OutputUri cannot be null."

    invoke-static {p0, v0}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 37
    new-instance v0, Landroidx/camera/video/AutoValue_OutputResults;

    invoke-direct {v0, p0}, Landroidx/camera/video/AutoValue_OutputResults;-><init>(Landroid/net/Uri;)V

    return-object v0
.end method


# virtual methods
.method public abstract getOutputUri()Landroid/net/Uri;
.end method
