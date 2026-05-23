.class public final Landroidx/camera/core/FocusMeteringAction;
.super Ljava/lang/Object;
.source "FocusMeteringAction.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/FocusMeteringAction$Builder;,
        Landroidx/camera/core/FocusMeteringAction$MeteringMode;
    }
.end annotation


# static fields
.field static final DEFAULT_AUTOCANCEL_DURATION:J = 0x1388L

.field static final DEFAULT_METERING_MODE:I = 0x7

.field public static final FLAG_AE:I = 0x2

.field public static final FLAG_AF:I = 0x1

.field public static final FLAG_AWB:I = 0x4


# instance fields
.field private final mAutoCancelDurationInMillis:J

.field private final mMeteringPointsAe:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Landroidx/camera/core/MeteringPoint;",
            ">;"
        }
    .end annotation
.end field

.field private final mMeteringPointsAf:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Landroidx/camera/core/MeteringPoint;",
            ">;"
        }
    .end annotation
.end field

.field private final mMeteringPointsAwb:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Landroidx/camera/core/MeteringPoint;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Landroidx/camera/core/FocusMeteringAction$Builder;)V
    .locals 2

    .line 99
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 100
    iget-object v0, p1, Landroidx/camera/core/FocusMeteringAction$Builder;->mMeteringPointsAf:Ljava/util/List;

    invoke-static {v0}, Ljava/util/Collections;->unmodifiableList(Ljava/util/List;)Ljava/util/List;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/core/FocusMeteringAction;->mMeteringPointsAf:Ljava/util/List;

    .line 101
    iget-object v0, p1, Landroidx/camera/core/FocusMeteringAction$Builder;->mMeteringPointsAe:Ljava/util/List;

    invoke-static {v0}, Ljava/util/Collections;->unmodifiableList(Ljava/util/List;)Ljava/util/List;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/core/FocusMeteringAction;->mMeteringPointsAe:Ljava/util/List;

    .line 102
    iget-object v0, p1, Landroidx/camera/core/FocusMeteringAction$Builder;->mMeteringPointsAwb:Ljava/util/List;

    invoke-static {v0}, Ljava/util/Collections;->unmodifiableList(Ljava/util/List;)Ljava/util/List;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/core/FocusMeteringAction;->mMeteringPointsAwb:Ljava/util/List;

    .line 103
    iget-wide v0, p1, Landroidx/camera/core/FocusMeteringAction$Builder;->mAutoCancelDurationInMillis:J

    iput-wide v0, p0, Landroidx/camera/core/FocusMeteringAction;->mAutoCancelDurationInMillis:J

    return-void
.end method


# virtual methods
.method public getAutoCancelDurationInMillis()J
    .locals 2

    .line 110
    iget-wide v0, p0, Landroidx/camera/core/FocusMeteringAction;->mAutoCancelDurationInMillis:J

    return-wide v0
.end method

.method public getMeteringPointsAe()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroidx/camera/core/MeteringPoint;",
            ">;"
        }
    .end annotation

    .line 126
    iget-object v0, p0, Landroidx/camera/core/FocusMeteringAction;->mMeteringPointsAe:Ljava/util/List;

    return-object v0
.end method

.method public getMeteringPointsAf()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroidx/camera/core/MeteringPoint;",
            ">;"
        }
    .end annotation

    .line 118
    iget-object v0, p0, Landroidx/camera/core/FocusMeteringAction;->mMeteringPointsAf:Ljava/util/List;

    return-object v0
.end method

.method public getMeteringPointsAwb()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroidx/camera/core/MeteringPoint;",
            ">;"
        }
    .end annotation

    .line 134
    iget-object v0, p0, Landroidx/camera/core/FocusMeteringAction;->mMeteringPointsAwb:Ljava/util/List;

    return-object v0
.end method

.method public isAutoCancelEnabled()Z
    .locals 4

    .line 141
    iget-wide v0, p0, Landroidx/camera/core/FocusMeteringAction;->mAutoCancelDurationInMillis:J

    const-wide/16 v2, 0x0

    cmp-long v0, v0, v2

    if-lez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method
