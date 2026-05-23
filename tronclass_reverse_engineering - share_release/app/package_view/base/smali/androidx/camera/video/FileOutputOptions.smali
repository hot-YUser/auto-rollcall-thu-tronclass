.class public final Landroidx/camera/video/FileOutputOptions;
.super Landroidx/camera/video/OutputOptions;
.source "FileOutputOptions.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;,
        Landroidx/camera/video/FileOutputOptions$Builder;
    }
.end annotation


# instance fields
.field private final mFileOutputOptionsInternal:Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;


# direct methods
.method constructor <init>(Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;)V
    .locals 0

    .line 42
    invoke-direct {p0, p1}, Landroidx/camera/video/OutputOptions;-><init>(Landroidx/camera/video/OutputOptions$OutputOptionsInternal;)V

    .line 43
    iput-object p1, p0, Landroidx/camera/video/FileOutputOptions;->mFileOutputOptionsInternal:Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 1

    if-ne p0, p1, :cond_0

    const/4 p1, 0x1

    return p1

    .line 65
    :cond_0
    instance-of v0, p1, Landroidx/camera/video/FileOutputOptions;

    if-nez v0, :cond_1

    const/4 p1, 0x0

    return p1

    .line 68
    :cond_1
    iget-object v0, p0, Landroidx/camera/video/FileOutputOptions;->mFileOutputOptionsInternal:Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;

    check-cast p1, Landroidx/camera/video/FileOutputOptions;

    iget-object p1, p1, Landroidx/camera/video/FileOutputOptions;->mFileOutputOptionsInternal:Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;

    invoke-virtual {v0, p1}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public getFile()Ljava/io/File;
    .locals 1

    .line 49
    iget-object v0, p0, Landroidx/camera/video/FileOutputOptions;->mFileOutputOptionsInternal:Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;

    invoke-virtual {v0}, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;->getFile()Ljava/io/File;

    move-result-object v0

    return-object v0
.end method

.method public hashCode()I
    .locals 1

    .line 74
    iget-object v0, p0, Landroidx/camera/video/FileOutputOptions;->mFileOutputOptionsInternal:Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;

    invoke-virtual {v0}, Ljava/lang/Object;->hashCode()I

    move-result v0

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 56
    iget-object v0, p0, Landroidx/camera/video/FileOutputOptions;->mFileOutputOptionsInternal:Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;

    invoke-virtual {v0}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v1, "FileOutputOptionsInternal"

    const-string v2, "FileOutputOptions"

    invoke-virtual {v0, v1, v2}, Ljava/lang/String;->replaceFirst(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
