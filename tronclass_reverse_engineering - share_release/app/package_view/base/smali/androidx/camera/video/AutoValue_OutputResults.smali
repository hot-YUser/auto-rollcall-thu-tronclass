.class final Landroidx/camera/video/AutoValue_OutputResults;
.super Landroidx/camera/video/OutputResults;
.source "AutoValue_OutputResults.java"


# instance fields
.field private final outputUri:Landroid/net/Uri;


# direct methods
.method constructor <init>(Landroid/net/Uri;)V
    .locals 1

    .line 14
    invoke-direct {p0}, Landroidx/camera/video/OutputResults;-><init>()V

    if-eqz p1, :cond_0

    .line 18
    iput-object p1, p0, Landroidx/camera/video/AutoValue_OutputResults;->outputUri:Landroid/net/Uri;

    return-void

    .line 16
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string v0, "Null outputUri"

    invoke-direct {p1, v0}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 1

    if-ne p1, p0, :cond_0

    const/4 p1, 0x1

    return p1

    .line 39
    :cond_0
    instance-of v0, p1, Landroidx/camera/video/OutputResults;

    if-eqz v0, :cond_1

    .line 40
    check-cast p1, Landroidx/camera/video/OutputResults;

    .line 41
    iget-object v0, p0, Landroidx/camera/video/AutoValue_OutputResults;->outputUri:Landroid/net/Uri;

    invoke-virtual {p1}, Landroidx/camera/video/OutputResults;->getOutputUri()Landroid/net/Uri;

    move-result-object p1

    invoke-virtual {v0, p1}, Landroid/net/Uri;->equals(Ljava/lang/Object;)Z

    move-result p1

    return p1

    :cond_1
    const/4 p1, 0x0

    return p1
.end method

.method public getOutputUri()Landroid/net/Uri;
    .locals 1

    .line 24
    iget-object v0, p0, Landroidx/camera/video/AutoValue_OutputResults;->outputUri:Landroid/net/Uri;

    return-object v0
.end method

.method public hashCode()I
    .locals 2

    .line 50
    iget-object v0, p0, Landroidx/camera/video/AutoValue_OutputResults;->outputUri:Landroid/net/Uri;

    invoke-virtual {v0}, Landroid/net/Uri;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 29
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OutputResults{outputUri="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/video/AutoValue_OutputResults;->outputUri:Landroid/net/Uri;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
