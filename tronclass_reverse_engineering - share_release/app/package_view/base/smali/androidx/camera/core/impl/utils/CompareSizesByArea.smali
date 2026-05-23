.class public final Landroidx/camera/core/impl/utils/CompareSizesByArea;
.super Ljava/lang/Object;
.source "CompareSizesByArea.java"

# interfaces
.implements Ljava/util/Comparator;


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Ljava/util/Comparator<",
        "Landroid/util/Size;",
        ">;"
    }
.end annotation


# instance fields
.field private mReverse:Z


# direct methods
.method public constructor <init>()V
    .locals 1

    const/4 v0, 0x0

    .line 33
    invoke-direct {p0, v0}, Landroidx/camera/core/impl/utils/CompareSizesByArea;-><init>(Z)V

    return-void
.end method

.method public constructor <init>(Z)V
    .locals 0

    .line 37
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 38
    iput-boolean p1, p0, Landroidx/camera/core/impl/utils/CompareSizesByArea;->mReverse:Z

    return-void
.end method


# virtual methods
.method public compare(Landroid/util/Size;Landroid/util/Size;)I
    .locals 4

    .line 46
    invoke-virtual {p1}, Landroid/util/Size;->getWidth()I

    move-result v0

    int-to-long v0, v0

    invoke-virtual {p1}, Landroid/util/Size;->getHeight()I

    move-result p1

    int-to-long v2, p1

    mul-long/2addr v0, v2

    .line 47
    invoke-virtual {p2}, Landroid/util/Size;->getWidth()I

    move-result p1

    int-to-long v2, p1

    invoke-virtual {p2}, Landroid/util/Size;->getHeight()I

    move-result p1

    int-to-long p1, p1

    mul-long/2addr v2, p1

    sub-long/2addr v0, v2

    .line 45
    invoke-static {v0, v1}, Ljava/lang/Long;->signum(J)I

    move-result p1

    .line 49
    iget-boolean p2, p0, Landroidx/camera/core/impl/utils/CompareSizesByArea;->mReverse:Z

    if-eqz p2, :cond_0

    mul-int/lit8 p1, p1, -0x1

    :cond_0
    return p1
.end method

.method public bridge synthetic compare(Ljava/lang/Object;Ljava/lang/Object;)I
    .locals 0

    .line 27
    check-cast p1, Landroid/util/Size;

    check-cast p2, Landroid/util/Size;

    invoke-virtual {p0, p1, p2}, Landroidx/camera/core/impl/utils/CompareSizesByArea;->compare(Landroid/util/Size;Landroid/util/Size;)I

    move-result p1

    return p1
.end method
