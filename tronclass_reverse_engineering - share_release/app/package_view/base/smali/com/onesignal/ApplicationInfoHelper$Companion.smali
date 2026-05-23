.class public final Lcom/onesignal/ApplicationInfoHelper$Companion;
.super Ljava/lang/Object;
.source "ApplicationInfoHelper.kt"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/ApplicationInfoHelper;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Companion"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0000\u0008\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002J\u0012\u0010\u0005\u001a\u0004\u0018\u00010\u00042\u0006\u0010\u0006\u001a\u00020\u0007H\u0007R\u0010\u0010\u0003\u001a\u0004\u0018\u00010\u0004X\u0082\u000e\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0008"
    }
    d2 = {
        "Lcom/onesignal/ApplicationInfoHelper$Companion;",
        "",
        "()V",
        "cachedInfo",
        "Landroid/content/pm/ApplicationInfo;",
        "getInfo",
        "context",
        "Landroid/content/Context;",
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

    .line 10
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public synthetic constructor <init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V
    .locals 0

    invoke-direct {p0}, Lcom/onesignal/ApplicationInfoHelper$Companion;-><init>()V

    return-void
.end method


# virtual methods
.method public final getInfo(Landroid/content/Context;)Landroid/content/pm/ApplicationInfo;
    .locals 2

    const-string v0, "context"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 16
    invoke-static {}, Lcom/onesignal/ApplicationInfoHelper;->access$getCachedInfo$cp()Landroid/content/pm/ApplicationInfo;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 17
    invoke-static {}, Lcom/onesignal/ApplicationInfoHelper;->access$getCachedInfo$cp()Landroid/content/pm/ApplicationInfo;

    move-result-object p1

    return-object p1

    .line 20
    :cond_0
    invoke-virtual {p1}, Landroid/content/Context;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v0

    .line 24
    :try_start_0
    invoke-virtual {p1}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object p1

    const/16 v1, 0x80

    .line 23
    invoke-virtual {v0, p1, v1}, Landroid/content/pm/PackageManager;->getApplicationInfo(Ljava/lang/String;I)Landroid/content/pm/ApplicationInfo;

    move-result-object p1

    invoke-static {p1}, Lcom/onesignal/ApplicationInfoHelper;->access$setCachedInfo$cp(Landroid/content/pm/ApplicationInfo;)V

    .line 27
    invoke-static {}, Lcom/onesignal/ApplicationInfoHelper;->access$getCachedInfo$cp()Landroid/content/pm/ApplicationInfo;

    move-result-object p1
    :try_end_0
    .catch Ljava/lang/RuntimeException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 36
    invoke-virtual {p1}, Ljava/lang/RuntimeException;->getCause()Ljava/lang/Throwable;

    move-result-object v0

    instance-of v0, v0, Landroid/os/DeadSystemException;

    if-eqz v0, :cond_1

    const/4 p1, 0x0

    .line 37
    move-object v0, p1

    check-cast v0, Ljava/lang/Void;

    .line 40
    move-object v0, p1

    check-cast v0, Landroid/content/pm/ApplicationInfo;

    :goto_0
    return-object p1

    :cond_1
    throw p1
.end method
