.class public final Lcom/onesignal/ApplicationInfoHelper;
.super Ljava/lang/Object;
.source "ApplicationInfoHelper.kt"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/ApplicationInfoHelper$Companion;
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u000c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0003\u0018\u0000 \u00032\u00020\u0001:\u0001\u0003B\u0005\u00a2\u0006\u0002\u0010\u0002\u00a8\u0006\u0004"
    }
    d2 = {
        "Lcom/onesignal/ApplicationInfoHelper;",
        "",
        "()V",
        "Companion",
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


# static fields
.field public static final Companion:Lcom/onesignal/ApplicationInfoHelper$Companion;

.field private static cachedInfo:Landroid/content/pm/ApplicationInfo;


# direct methods
.method static constructor <clinit>()V
    .locals 2

    new-instance v0, Lcom/onesignal/ApplicationInfoHelper$Companion;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Lcom/onesignal/ApplicationInfoHelper$Companion;-><init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V

    sput-object v0, Lcom/onesignal/ApplicationInfoHelper;->Companion:Lcom/onesignal/ApplicationInfoHelper$Companion;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 9
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static final synthetic access$getCachedInfo$cp()Landroid/content/pm/ApplicationInfo;
    .locals 1

    .line 9
    sget-object v0, Lcom/onesignal/ApplicationInfoHelper;->cachedInfo:Landroid/content/pm/ApplicationInfo;

    return-object v0
.end method

.method public static final synthetic access$setCachedInfo$cp(Landroid/content/pm/ApplicationInfo;)V
    .locals 0

    .line 9
    sput-object p0, Lcom/onesignal/ApplicationInfoHelper;->cachedInfo:Landroid/content/pm/ApplicationInfo;

    return-void
.end method
