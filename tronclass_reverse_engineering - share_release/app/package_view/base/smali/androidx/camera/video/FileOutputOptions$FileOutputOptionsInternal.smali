.class abstract Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;
.super Landroidx/camera/video/OutputOptions$OutputOptionsInternal;
.source "FileOutputOptions.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/FileOutputOptions;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "FileOutputOptionsInternal"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal$Builder;
    }
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 109
    invoke-direct {p0}, Landroidx/camera/video/OutputOptions$OutputOptionsInternal;-><init>()V

    return-void
.end method


# virtual methods
.method abstract getFile()Ljava/io/File;
.end method
