.class public interface abstract Landroidx/camera/core/CameraFilter;
.super Ljava/lang/Object;
.source "CameraFilter.java"


# static fields
.field public static final DEFAULT_ID:Landroidx/camera/core/impl/Identifier;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 38
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    invoke-static {v0}, Landroidx/camera/core/impl/Identifier;->create(Ljava/lang/Object;)Landroidx/camera/core/impl/Identifier;

    move-result-object v0

    sput-object v0, Landroidx/camera/core/CameraFilter;->DEFAULT_ID:Landroidx/camera/core/impl/Identifier;

    return-void
.end method


# virtual methods
.method public abstract filter(Ljava/util/List;)Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroidx/camera/core/CameraInfo;",
            ">;)",
            "Ljava/util/List<",
            "Landroidx/camera/core/CameraInfo;",
            ">;"
        }
    .end annotation
.end method

.method public getIdentifier()Landroidx/camera/core/impl/Identifier;
    .locals 1

    .line 77
    sget-object v0, Landroidx/camera/core/CameraFilter;->DEFAULT_ID:Landroidx/camera/core/impl/Identifier;

    return-object v0
.end method
