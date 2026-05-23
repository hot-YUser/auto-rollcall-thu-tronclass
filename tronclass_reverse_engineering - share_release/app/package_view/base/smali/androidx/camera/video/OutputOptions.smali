.class public abstract Landroidx/camera/video/OutputOptions;
.super Ljava/lang/Object;
.source "OutputOptions.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/OutputOptions$OutputOptionsInternal;,
        Landroidx/camera/video/OutputOptions$Builder;
    }
.end annotation


# static fields
.field public static final DURATION_UNLIMITED:I

.field public static final FILE_SIZE_UNLIMITED:I


# instance fields
.field private final mOutputOptionsInternal:Landroidx/camera/video/OutputOptions$OutputOptionsInternal;


# direct methods
.method constructor <init>(Landroidx/camera/video/OutputOptions$OutputOptionsInternal;)V
    .locals 0

    .line 49
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 50
    iput-object p1, p0, Landroidx/camera/video/OutputOptions;->mOutputOptionsInternal:Landroidx/camera/video/OutputOptions$OutputOptionsInternal;

    return-void
.end method


# virtual methods
.method public getDurationLimitMillis()J
    .locals 2

    .line 82
    iget-object v0, p0, Landroidx/camera/video/OutputOptions;->mOutputOptionsInternal:Landroidx/camera/video/OutputOptions$OutputOptionsInternal;

    invoke-virtual {v0}, Landroidx/camera/video/OutputOptions$OutputOptionsInternal;->getDurationLimitMillis()J

    move-result-wide v0

    return-wide v0
.end method

.method public getFileSizeLimit()J
    .locals 2

    .line 60
    iget-object v0, p0, Landroidx/camera/video/OutputOptions;->mOutputOptionsInternal:Landroidx/camera/video/OutputOptions$OutputOptionsInternal;

    invoke-virtual {v0}, Landroidx/camera/video/OutputOptions$OutputOptionsInternal;->getFileSizeLimit()J

    move-result-wide v0

    return-wide v0
.end method

.method public getLocation()Landroid/location/Location;
    .locals 1

    .line 71
    iget-object v0, p0, Landroidx/camera/video/OutputOptions;->mOutputOptionsInternal:Landroidx/camera/video/OutputOptions$OutputOptionsInternal;

    invoke-virtual {v0}, Landroidx/camera/video/OutputOptions$OutputOptionsInternal;->getLocation()Landroid/location/Location;

    move-result-object v0

    return-object v0
.end method
