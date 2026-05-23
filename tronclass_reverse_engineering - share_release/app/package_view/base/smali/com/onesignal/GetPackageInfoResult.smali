.class public final Lcom/onesignal/GetPackageInfoResult;
.super Ljava/lang/Object;
.source "PackageInfoHelper.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u000b\n\u0002\u0010\u0008\n\u0000\n\u0002\u0010\u000e\n\u0000\u0008\u0086\u0008\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u00a2\u0006\u0002\u0010\u0006J\t\u0010\u000b\u001a\u00020\u0003H\u00c6\u0003J\u000b\u0010\u000c\u001a\u0004\u0018\u00010\u0005H\u00c6\u0003J\u001f\u0010\r\u001a\u00020\u00002\u0008\u0008\u0002\u0010\u0002\u001a\u00020\u00032\n\u0008\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005H\u00c6\u0001J\u0013\u0010\u000e\u001a\u00020\u00032\u0008\u0010\u000f\u001a\u0004\u0018\u00010\u0001H\u00d6\u0003J\t\u0010\u0010\u001a\u00020\u0011H\u00d6\u0001J\t\u0010\u0012\u001a\u00020\u0013H\u00d6\u0001R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\u0007\u0010\u0008R\u0011\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\t\u0010\n\u00a8\u0006\u0014"
    }
    d2 = {
        "Lcom/onesignal/GetPackageInfoResult;",
        "",
        "successful",
        "",
        "packageInfo",
        "Landroid/content/pm/PackageInfo;",
        "(ZLandroid/content/pm/PackageInfo;)V",
        "getPackageInfo",
        "()Landroid/content/pm/PackageInfo;",
        "getSuccessful",
        "()Z",
        "component1",
        "component2",
        "copy",
        "equals",
        "other",
        "hashCode",
        "",
        "toString",
        "",
        "onesignal_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# instance fields
.field private final packageInfo:Landroid/content/pm/PackageInfo;

.field private final successful:Z


# direct methods
.method public constructor <init>(ZLandroid/content/pm/PackageInfo;)V
    .locals 0

    .line 9
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 13
    iput-boolean p1, p0, Lcom/onesignal/GetPackageInfoResult;->successful:Z

    .line 18
    iput-object p2, p0, Lcom/onesignal/GetPackageInfoResult;->packageInfo:Landroid/content/pm/PackageInfo;

    return-void
.end method

.method public static synthetic copy$default(Lcom/onesignal/GetPackageInfoResult;ZLandroid/content/pm/PackageInfo;ILjava/lang/Object;)Lcom/onesignal/GetPackageInfoResult;
    .locals 0

    and-int/lit8 p4, p3, 0x1

    if-eqz p4, :cond_0

    iget-boolean p1, p0, Lcom/onesignal/GetPackageInfoResult;->successful:Z

    :cond_0
    and-int/lit8 p3, p3, 0x2

    if-eqz p3, :cond_1

    iget-object p2, p0, Lcom/onesignal/GetPackageInfoResult;->packageInfo:Landroid/content/pm/PackageInfo;

    :cond_1
    invoke-virtual {p0, p1, p2}, Lcom/onesignal/GetPackageInfoResult;->copy(ZLandroid/content/pm/PackageInfo;)Lcom/onesignal/GetPackageInfoResult;

    move-result-object p0

    return-object p0
.end method


# virtual methods
.method public final component1()Z
    .locals 1

    iget-boolean v0, p0, Lcom/onesignal/GetPackageInfoResult;->successful:Z

    return v0
.end method

.method public final component2()Landroid/content/pm/PackageInfo;
    .locals 1

    iget-object v0, p0, Lcom/onesignal/GetPackageInfoResult;->packageInfo:Landroid/content/pm/PackageInfo;

    return-object v0
.end method

.method public final copy(ZLandroid/content/pm/PackageInfo;)Lcom/onesignal/GetPackageInfoResult;
    .locals 1

    new-instance v0, Lcom/onesignal/GetPackageInfoResult;

    invoke-direct {v0, p1, p2}, Lcom/onesignal/GetPackageInfoResult;-><init>(ZLandroid/content/pm/PackageInfo;)V

    return-object v0
.end method

.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p0, p1, :cond_0

    return v0

    :cond_0
    instance-of v1, p1, Lcom/onesignal/GetPackageInfoResult;

    const/4 v2, 0x0

    if-nez v1, :cond_1

    return v2

    :cond_1
    check-cast p1, Lcom/onesignal/GetPackageInfoResult;

    iget-boolean v1, p0, Lcom/onesignal/GetPackageInfoResult;->successful:Z

    iget-boolean v3, p1, Lcom/onesignal/GetPackageInfoResult;->successful:Z

    if-eq v1, v3, :cond_2

    return v2

    :cond_2
    iget-object v1, p0, Lcom/onesignal/GetPackageInfoResult;->packageInfo:Landroid/content/pm/PackageInfo;

    iget-object p1, p1, Lcom/onesignal/GetPackageInfoResult;->packageInfo:Landroid/content/pm/PackageInfo;

    invoke-static {v1, p1}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_3

    return v2

    :cond_3
    return v0
.end method

.method public final getPackageInfo()Landroid/content/pm/PackageInfo;
    .locals 1

    .line 18
    iget-object v0, p0, Lcom/onesignal/GetPackageInfoResult;->packageInfo:Landroid/content/pm/PackageInfo;

    return-object v0
.end method

.method public final getSuccessful()Z
    .locals 1

    .line 13
    iget-boolean v0, p0, Lcom/onesignal/GetPackageInfoResult;->successful:Z

    return v0
.end method

.method public hashCode()I
    .locals 2

    iget-boolean v0, p0, Lcom/onesignal/GetPackageInfoResult;->successful:Z

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    :cond_0
    mul-int/lit8 v0, v0, 0x1f

    iget-object v1, p0, Lcom/onesignal/GetPackageInfoResult;->packageInfo:Landroid/content/pm/PackageInfo;

    if-nez v1, :cond_1

    const/4 v1, 0x0

    goto :goto_0

    :cond_1
    invoke-virtual {v1}, Landroid/content/pm/PackageInfo;->hashCode()I

    move-result v1

    :goto_0
    add-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "GetPackageInfoResult(successful="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-boolean v1, p0, Lcom/onesignal/GetPackageInfoResult;->successful:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", packageInfo="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/GetPackageInfoResult;->packageInfo:Landroid/content/pm/PackageInfo;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x29

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
