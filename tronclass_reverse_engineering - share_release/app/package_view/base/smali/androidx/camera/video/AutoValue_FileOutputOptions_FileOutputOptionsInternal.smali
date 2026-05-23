.class final Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;
.super Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;
.source "AutoValue_FileOutputOptions_FileOutputOptionsInternal.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal$Builder;
    }
.end annotation


# instance fields
.field private final durationLimitMillis:J

.field private final file:Ljava/io/File;

.field private final fileSizeLimit:J

.field private final location:Landroid/location/Location;


# direct methods
.method private constructor <init>(JJLandroid/location/Location;Ljava/io/File;)V
    .locals 0

    .line 26
    invoke-direct {p0}, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;-><init>()V

    .line 27
    iput-wide p1, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->fileSizeLimit:J

    .line 28
    iput-wide p3, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->durationLimitMillis:J

    .line 29
    iput-object p5, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->location:Landroid/location/Location;

    .line 30
    iput-object p6, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->file:Ljava/io/File;

    return-void
.end method

.method synthetic constructor <init>(JJLandroid/location/Location;Ljava/io/File;Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal$1;)V
    .locals 0

    .line 12
    invoke-direct/range {p0 .. p6}, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;-><init>(JJLandroid/location/Location;Ljava/io/File;)V

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 7

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 72
    :cond_0
    instance-of v1, p1, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;

    const/4 v2, 0x0

    if-eqz v1, :cond_3

    .line 73
    check-cast p1, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;

    .line 74
    iget-wide v3, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->fileSizeLimit:J

    invoke-virtual {p1}, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;->getFileSizeLimit()J

    move-result-wide v5

    cmp-long v1, v3, v5

    if-nez v1, :cond_2

    iget-wide v3, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->durationLimitMillis:J

    .line 75
    invoke-virtual {p1}, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;->getDurationLimitMillis()J

    move-result-wide v5

    cmp-long v1, v3, v5

    if-nez v1, :cond_2

    iget-object v1, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->location:Landroid/location/Location;

    if-nez v1, :cond_1

    .line 76
    invoke-virtual {p1}, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;->getLocation()Landroid/location/Location;

    move-result-object v1

    if-nez v1, :cond_2

    goto :goto_0

    :cond_1
    invoke-virtual {p1}, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;->getLocation()Landroid/location/Location;

    move-result-object v3

    invoke-virtual {v1, v3}, Landroid/location/Location;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    :goto_0
    iget-object v1, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->file:Ljava/io/File;

    .line 77
    invoke-virtual {p1}, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;->getFile()Ljava/io/File;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/io/File;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_2

    goto :goto_1

    :cond_2
    move v0, v2

    :goto_1
    return v0

    :cond_3
    return v2
.end method

.method getDurationLimitMillis()J
    .locals 2

    .line 42
    iget-wide v0, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->durationLimitMillis:J

    return-wide v0
.end method

.method getFile()Ljava/io/File;
    .locals 1

    .line 54
    iget-object v0, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->file:Ljava/io/File;

    return-object v0
.end method

.method getFileSizeLimit()J
    .locals 2

    .line 36
    iget-wide v0, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->fileSizeLimit:J

    return-wide v0
.end method

.method getLocation()Landroid/location/Location;
    .locals 1

    .line 48
    iget-object v0, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->location:Landroid/location/Location;

    return-object v0
.end method

.method public hashCode()I
    .locals 7

    .line 86
    iget-wide v0, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->fileSizeLimit:J

    const/16 v2, 0x20

    ushr-long v3, v0, v2

    xor-long/2addr v0, v3

    long-to-int v0, v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 88
    iget-wide v3, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->durationLimitMillis:J

    ushr-long v5, v3, v2

    xor-long v2, v5, v3

    long-to-int v2, v2

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 90
    iget-object v2, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->location:Landroid/location/Location;

    if-nez v2, :cond_0

    const/4 v2, 0x0

    goto :goto_0

    :cond_0
    invoke-virtual {v2}, Landroid/location/Location;->hashCode()I

    move-result v2

    :goto_0
    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 92
    iget-object v1, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->file:Ljava/io/File;

    invoke-virtual {v1}, Ljava/io/File;->hashCode()I

    move-result v1

    xor-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 59
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "FileOutputOptionsInternal{fileSizeLimit="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-wide v1, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->fileSizeLimit:J

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", durationLimitMillis="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-wide v1, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->durationLimitMillis:J

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", location="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->location:Landroid/location/Location;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", file="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal;->file:Ljava/io/File;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
