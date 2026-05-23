.class abstract Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal$Builder;
.super Landroidx/camera/video/OutputOptions$OutputOptionsInternal$Builder;
.source "FileOutputOptions.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "Builder"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Landroidx/camera/video/OutputOptions$OutputOptionsInternal$Builder<",
        "Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal$Builder;",
        ">;"
    }
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 115
    invoke-direct {p0}, Landroidx/camera/video/OutputOptions$OutputOptionsInternal$Builder;-><init>()V

    return-void
.end method


# virtual methods
.method abstract build()Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;
.end method

.method bridge synthetic build()Landroidx/camera/video/OutputOptions$OutputOptionsInternal;
    .locals 1

    .line 113
    invoke-virtual {p0}, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal$Builder;->build()Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;

    move-result-object v0

    return-object v0
.end method

.method abstract setFile(Ljava/io/File;)Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal$Builder;
.end method
