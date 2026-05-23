.class public final Landroidx/camera/video/FileOutputOptions$Builder;
.super Landroidx/camera/video/OutputOptions$Builder;
.source "FileOutputOptions.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/FileOutputOptions;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Builder"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Landroidx/camera/video/OutputOptions$Builder<",
        "Landroidx/camera/video/FileOutputOptions;",
        "Landroidx/camera/video/FileOutputOptions$Builder;",
        ">;"
    }
.end annotation


# instance fields
.field private final mInternalBuilder:Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal$Builder;


# direct methods
.method public constructor <init>(Ljava/io/File;)V
    .locals 1

    .line 94
    new-instance v0, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal$Builder;

    invoke-direct {v0}, Landroidx/camera/video/AutoValue_FileOutputOptions_FileOutputOptionsInternal$Builder;-><init>()V

    invoke-direct {p0, v0}, Landroidx/camera/video/OutputOptions$Builder;-><init>(Landroidx/camera/video/OutputOptions$OutputOptionsInternal$Builder;)V

    .line 95
    const-string v0, "File can\'t be null."

    invoke-static {p1, v0}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 96
    iget-object v0, p0, Landroidx/camera/video/FileOutputOptions$Builder;->mRootInternalBuilder:Landroidx/camera/video/OutputOptions$OutputOptionsInternal$Builder;

    check-cast v0, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal$Builder;

    iput-object v0, p0, Landroidx/camera/video/FileOutputOptions$Builder;->mInternalBuilder:Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal$Builder;

    .line 97
    invoke-virtual {v0, p1}, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal$Builder;->setFile(Ljava/io/File;)Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal$Builder;

    return-void
.end method


# virtual methods
.method public build()Landroidx/camera/video/FileOutputOptions;
    .locals 2

    .line 104
    new-instance v0, Landroidx/camera/video/FileOutputOptions;

    iget-object v1, p0, Landroidx/camera/video/FileOutputOptions$Builder;->mInternalBuilder:Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal$Builder;

    invoke-virtual {v1}, Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal$Builder;->build()Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;

    move-result-object v1

    invoke-direct {v0, v1}, Landroidx/camera/video/FileOutputOptions;-><init>(Landroidx/camera/video/FileOutputOptions$FileOutputOptionsInternal;)V

    return-object v0
.end method

.method public bridge synthetic build()Landroidx/camera/video/OutputOptions;
    .locals 1

    .line 78
    invoke-virtual {p0}, Landroidx/camera/video/FileOutputOptions$Builder;->build()Landroidx/camera/video/FileOutputOptions;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic setDurationLimitMillis(J)Ljava/lang/Object;
    .locals 0

    .line 78
    invoke-super {p0, p1, p2}, Landroidx/camera/video/OutputOptions$Builder;->setDurationLimitMillis(J)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

.method public bridge synthetic setFileSizeLimit(J)Ljava/lang/Object;
    .locals 0

    .line 78
    invoke-super {p0, p1, p2}, Landroidx/camera/video/OutputOptions$Builder;->setFileSizeLimit(J)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

.method public bridge synthetic setLocation(Landroid/location/Location;)Ljava/lang/Object;
    .locals 0

    .line 78
    invoke-super {p0, p1}, Landroidx/camera/video/OutputOptions$Builder;->setLocation(Landroid/location/Location;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method
