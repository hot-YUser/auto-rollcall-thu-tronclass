.class public final Lcom/google/android/gms/internal/common/zzg;
.super Ljava/lang/Object;


# static fields
.field private static volatile zziy:Z


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 5
    invoke-static {}, Lcom/google/android/gms/internal/common/zzg;->zzam()Z

    move-result v0

    xor-int/lit8 v0, v0, 0x1

    sput-boolean v0, Lcom/google/android/gms/internal/common/zzg;->zziy:Z

    return-void
.end method

.method public static getDeviceProtectedStorageContext(Landroid/content/Context;)Landroid/content/Context;
    .locals 1

    .line 2
    invoke-virtual {p0}, Landroid/content/Context;->isDeviceProtectedStorage()Z

    move-result v0

    if-eqz v0, :cond_0

    return-object p0

    .line 4
    :cond_0
    invoke-virtual {p0}, Landroid/content/Context;->createDeviceProtectedStorageContext()Landroid/content/Context;

    move-result-object p0

    return-object p0
.end method

.method public static zzam()Z
    .locals 1

    const/4 v0, 0x1

    return v0
.end method
