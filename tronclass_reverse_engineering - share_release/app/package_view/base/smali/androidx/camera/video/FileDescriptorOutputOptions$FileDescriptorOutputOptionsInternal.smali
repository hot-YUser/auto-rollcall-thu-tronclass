.class abstract Landroidx/camera/video/FileDescriptorOutputOptions$FileDescriptorOutputOptionsInternal;
.super Landroidx/camera/video/OutputOptions$OutputOptionsInternal;
.source "FileDescriptorOutputOptions.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/FileDescriptorOutputOptions;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "FileDescriptorOutputOptionsInternal"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/FileDescriptorOutputOptions$FileDescriptorOutputOptionsInternal$Builder;
    }
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 114
    invoke-direct {p0}, Landroidx/camera/video/OutputOptions$OutputOptionsInternal;-><init>()V

    return-void
.end method


# virtual methods
.method abstract getParcelFileDescriptor()Landroid/os/ParcelFileDescriptor;
.end method
