.class Lcom/onesignal/GooglePlayServicesUpgradePrompt;
.super Ljava/lang/Object;
.source "GooglePlayServicesUpgradePrompt.java"


# static fields
.field private static final PLAY_SERVICES_RESOLUTION_REQUEST:I = 0x2328


# direct methods
.method constructor <init>()V
    .locals 0

    .line 13
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private static OpenPlayStoreToApp(Landroid/app/Activity;)V
    .locals 3

    .line 84
    :try_start_0
    invoke-static {}, Lcom/google/android/gms/common/GoogleApiAvailability;->getInstance()Lcom/google/android/gms/common/GoogleApiAvailability;

    move-result-object v0

    .line 85
    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-virtual {v0, v1}, Lcom/google/android/gms/common/GoogleApiAvailability;->isGooglePlayServicesAvailable(Landroid/content/Context;)I

    move-result v1

    const/16 v2, 0x2328

    .line 88
    invoke-virtual {v0, p0, v1, v2}, Lcom/google/android/gms/common/GoogleApiAvailability;->getErrorResolutionPendingIntent(Landroid/content/Context;II)Landroid/app/PendingIntent;

    move-result-object p0

    if-eqz p0, :cond_0

    .line 94
    invoke-virtual {p0}, Landroid/app/PendingIntent;->send()V
    :try_end_0
    .catch Landroid/app/PendingIntent$CanceledException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 96
    invoke-virtual {p0}, Landroid/app/PendingIntent$CanceledException;->printStackTrace()V

    :cond_0
    :goto_0
    return-void
.end method

.method static synthetic access$000(Landroid/app/Activity;)V
    .locals 0

    .line 13
    invoke-static {p0}, Lcom/onesignal/GooglePlayServicesUpgradePrompt;->OpenPlayStoreToApp(Landroid/app/Activity;)V

    return-void
.end method

.method private static isGooglePlayStoreInstalled()Z
    .locals 4

    .line 16
    sget-object v0, Lcom/onesignal/PackageInfoHelper;->Companion:Lcom/onesignal/PackageInfoHelper$Companion;

    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    const-string v2, "com.google.android.gms"

    const/16 v3, 0x80

    .line 17
    invoke-virtual {v0, v1, v2, v3}, Lcom/onesignal/PackageInfoHelper$Companion;->getInfo(Landroid/content/Context;Ljava/lang/String;I)Lcom/onesignal/GetPackageInfoResult;

    move-result-object v0

    .line 22
    invoke-virtual {v0}, Lcom/onesignal/GetPackageInfoResult;->getSuccessful()Z

    move-result v1

    const/4 v2, 0x0

    if-nez v1, :cond_0

    return v2

    .line 25
    :cond_0
    invoke-virtual {v0}, Lcom/onesignal/GetPackageInfoResult;->getPackageInfo()Landroid/content/pm/PackageInfo;

    move-result-object v1

    if-nez v1, :cond_1

    return v2

    .line 29
    :cond_1
    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-virtual {v1}, Landroid/content/Context;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v1

    .line 30
    invoke-virtual {v0}, Lcom/onesignal/GetPackageInfoResult;->getPackageInfo()Landroid/content/pm/PackageInfo;

    move-result-object v0

    iget-object v0, v0, Landroid/content/pm/PackageInfo;->applicationInfo:Landroid/content/pm/ApplicationInfo;

    invoke-virtual {v0, v1}, Landroid/content/pm/ApplicationInfo;->loadLabel(Landroid/content/pm/PackageManager;)Ljava/lang/CharSequence;

    move-result-object v0

    check-cast v0, Ljava/lang/String;

    .line 31
    const-string v1, "Market"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    xor-int/lit8 v0, v0, 0x1

    return v0
.end method

.method static showUpdateGPSDialog()V
    .locals 3

    .line 35
    invoke-static {}, Lcom/onesignal/OSUtils;->isAndroidDeviceType()Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 38
    :cond_0
    invoke-static {}, Lcom/onesignal/GooglePlayServicesUpgradePrompt;->isGooglePlayStoreInstalled()Z

    move-result v0

    if-eqz v0, :cond_3

    invoke-static {}, Lcom/onesignal/OneSignal;->getDisableGMSMissingPrompt()Z

    move-result v0

    if-eqz v0, :cond_1

    goto :goto_0

    .line 41
    :cond_1
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "GT_DO_NOT_SHOW_MISSING_GPS"

    const/4 v2, 0x0

    .line 42
    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result v0

    if-eqz v0, :cond_2

    return-void

    .line 50
    :cond_2
    new-instance v0, Lcom/onesignal/GooglePlayServicesUpgradePrompt$1;

    invoke-direct {v0}, Lcom/onesignal/GooglePlayServicesUpgradePrompt$1;-><init>()V

    invoke-static {v0}, Lcom/onesignal/OSUtils;->runOnMainUIThread(Ljava/lang/Runnable;)V

    :cond_3
    :goto_0
    return-void
.end method
