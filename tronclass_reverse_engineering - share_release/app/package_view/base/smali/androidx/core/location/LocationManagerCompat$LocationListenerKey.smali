.class Landroidx/core/location/LocationManagerCompat$LocationListenerKey;
.super Ljava/lang/Object;
.source "LocationManagerCompat.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/core/location/LocationManagerCompat;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "LocationListenerKey"
.end annotation


# instance fields
.field final mListener:Landroidx/core/location/LocationListenerCompat;

.field final mProvider:Ljava/lang/String;


# direct methods
.method constructor <init>(Ljava/lang/String;Landroidx/core/location/LocationListenerCompat;)V
    .locals 1

    .line 530
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 531
    const-string v0, "invalid null provider"

    invoke-static {p1, v0}, Landroidx/core/util/ObjectsCompat;->requireNonNull(Ljava/lang/Object;Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/String;

    iput-object p1, p0, Landroidx/core/location/LocationManagerCompat$LocationListenerKey;->mProvider:Ljava/lang/String;

    .line 532
    const-string p1, "invalid null listener"

    invoke-static {p2, p1}, Landroidx/core/util/ObjectsCompat;->requireNonNull(Ljava/lang/Object;Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/core/location/LocationListenerCompat;

    iput-object p1, p0, Landroidx/core/location/LocationManagerCompat$LocationListenerKey;->mListener:Landroidx/core/location/LocationListenerCompat;

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 3

    .line 537
    instance-of v0, p1, Landroidx/core/location/LocationManagerCompat$LocationListenerKey;

    const/4 v1, 0x0

    if-nez v0, :cond_0

    return v1

    .line 541
    :cond_0
    check-cast p1, Landroidx/core/location/LocationManagerCompat$LocationListenerKey;

    .line 542
    iget-object v0, p0, Landroidx/core/location/LocationManagerCompat$LocationListenerKey;->mProvider:Ljava/lang/String;

    iget-object v2, p1, Landroidx/core/location/LocationManagerCompat$LocationListenerKey;->mProvider:Ljava/lang/String;

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    iget-object v0, p0, Landroidx/core/location/LocationManagerCompat$LocationListenerKey;->mListener:Landroidx/core/location/LocationListenerCompat;

    iget-object p1, p1, Landroidx/core/location/LocationManagerCompat$LocationListenerKey;->mListener:Landroidx/core/location/LocationListenerCompat;

    invoke-virtual {v0, p1}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_1

    const/4 v1, 0x1

    :cond_1
    return v1
.end method

.method public hashCode()I
    .locals 2

    .line 547
    iget-object v0, p0, Landroidx/core/location/LocationManagerCompat$LocationListenerKey;->mProvider:Ljava/lang/String;

    iget-object v1, p0, Landroidx/core/location/LocationManagerCompat$LocationListenerKey;->mListener:Landroidx/core/location/LocationListenerCompat;

    filled-new-array {v0, v1}, [Ljava/lang/Object;

    move-result-object v0

    invoke-static {v0}, Landroidx/core/util/ObjectsCompat;->hash([Ljava/lang/Object;)I

    move-result v0

    return v0
.end method
