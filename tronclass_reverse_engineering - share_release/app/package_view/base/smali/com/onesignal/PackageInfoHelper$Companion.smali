.class public final Lcom/onesignal/PackageInfoHelper$Companion;
.super Ljava/lang/Object;
.source "PackageInfoHelper.kt"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/PackageInfoHelper;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Companion"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0008\n\u0000\u0008\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002J \u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u00082\u0006\u0010\t\u001a\u00020\nH\u0007\u00a8\u0006\u000b"
    }
    d2 = {
        "Lcom/onesignal/PackageInfoHelper$Companion;",
        "",
        "()V",
        "getInfo",
        "Lcom/onesignal/GetPackageInfoResult;",
        "appContext",
        "Landroid/content/Context;",
        "packageName",
        "",
        "flags",
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


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 22
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public synthetic constructor <init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V
    .locals 0

    invoke-direct {p0}, Lcom/onesignal/PackageInfoHelper$Companion;-><init>()V

    return-void
.end method


# virtual methods
.method public final getInfo(Landroid/content/Context;Ljava/lang/String;I)Lcom/onesignal/GetPackageInfoResult;
    .locals 3

    const-string v0, "appContext"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "packageName"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 25
    invoke-virtual {p1}, Landroid/content/Context;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object p1

    const/4 v0, 0x0

    const/4 v1, 0x1

    .line 27
    :try_start_0
    new-instance v2, Lcom/onesignal/GetPackageInfoResult;

    .line 29
    invoke-virtual {p1, p2, p3}, Landroid/content/pm/PackageManager;->getPackageInfo(Ljava/lang/String;I)Landroid/content/pm/PackageInfo;

    move-result-object p1

    .line 27
    invoke-direct {v2, v1, p1}, Lcom/onesignal/GetPackageInfoResult;-><init>(ZLandroid/content/pm/PackageInfo;)V
    :try_end_0
    .catch Landroid/content/pm/PackageManager$NameNotFoundException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/RuntimeException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 45
    invoke-virtual {p1}, Ljava/lang/RuntimeException;->getCause()Ljava/lang/Throwable;

    move-result-object p2

    instance-of p2, p2, Landroid/os/DeadSystemException;

    if-eqz p2, :cond_0

    .line 46
    new-instance v2, Lcom/onesignal/GetPackageInfoResult;

    const/4 p1, 0x0

    invoke-direct {v2, p1, v0}, Lcom/onesignal/GetPackageInfoResult;-><init>(ZLandroid/content/pm/PackageInfo;)V

    goto :goto_0

    .line 49
    :cond_0
    throw p1

    .line 36
    :catch_1
    new-instance v2, Lcom/onesignal/GetPackageInfoResult;

    invoke-direct {v2, v1, v0}, Lcom/onesignal/GetPackageInfoResult;-><init>(ZLandroid/content/pm/PackageInfo;)V

    :goto_0
    return-object v2
.end method
