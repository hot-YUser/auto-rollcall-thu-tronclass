.class public Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;
.super Lorg/apache/cordova/CordovaPlugin;
.source "VolumeControl.java"


# static fields
.field public static final GET:Ljava/lang/String; = "getVolume"

.field public static final HDV:Ljava/lang/String; = "hideVolume"

.field public static final ISM:Ljava/lang/String; = "isMuted"

.field public static final MUT:Ljava/lang/String; = "toggleMute"

.field public static final SET:Ljava/lang/String; = "setVolume"

.field public static final SOV:Ljava/lang/String; = "showVolume"

.field private static final TAG:Ljava/lang/String; = "VolumeControl"


# instance fields
.field private context:Landroid/content/Context;

.field private manager:Landroid/media/AudioManager;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 22
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method private getCurrentVolume()I
    .locals 3

    .line 128
    :try_start_0
    iget-object v0, p0, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->manager:Landroid/media/AudioManager;

    const/4 v1, 0x3

    invoke-virtual {v0, v1}, Landroid/media/AudioManager;->getStreamMaxVolume(I)I

    move-result v0

    .line 129
    iget-object v2, p0, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->manager:Landroid/media/AudioManager;

    invoke-virtual {v2, v1}, Landroid/media/AudioManager;->getStreamVolume(I)I

    move-result v1

    mul-int/lit8 v1, v1, 0x64

    .line 130
    div-int/2addr v1, v0

    int-to-float v0, v1

    invoke-static {v0}, Ljava/lang/Math;->round(F)I

    move-result v0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return v0

    :catch_0
    move-exception v0

    .line 134
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Error getting CurrentVolume: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v1, "VolumeControl"

    invoke-static {v1, v0}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    const/4 v0, 0x1

    return v0
.end method

.method private getVolumeToSet(I)I
    .locals 2

    .line 115
    :try_start_0
    iget-object v0, p0, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->manager:Landroid/media/AudioManager;

    const/4 v1, 0x3

    invoke-virtual {v0, v1}, Landroid/media/AudioManager;->getStreamMaxVolume(I)I

    move-result v0

    mul-int/2addr p1, v0

    .line 116
    div-int/lit8 p1, p1, 0x64

    int-to-float p1, p1

    invoke-static {p1}, Ljava/lang/Math;->round(F)I

    move-result p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return p1

    :catch_0
    move-exception p1

    .line 120
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Error getting VolumeToSet: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v0, "VolumeControl"

    invoke-static {v0, p1}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    const/4 p1, 0x1

    return p1
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 11
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 39
    iget-object v0, p0, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    iput-object v0, p0, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->context:Landroid/content/Context;

    .line 40
    const-string v1, "audio"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/media/AudioManager;

    iput-object v0, p0, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->manager:Landroid/media/AudioManager;

    .line 41
    const-string v0, "setVolume"

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    const/4 v1, 0x4

    const/4 v2, 0x3

    const-string v3, "Error setting volume "

    const-string v4, "VolumeControl"

    const/4 v5, 0x0

    const/4 v6, 0x1

    if-eqz v0, :cond_2

    .line 44
    :try_start_0
    invoke-virtual {p2, v5}, Lorg/json/JSONArray;->getDouble(I)D

    move-result-wide v7

    const-wide/high16 v9, 0x4059000000000000L    # 100.0

    mul-double/2addr v7, v9

    invoke-static {v7, v8}, Ljava/lang/Math;->round(D)J

    move-result-wide v7

    long-to-int p1, v7

    .line 45
    invoke-direct {p0, p1}, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->getVolumeToSet(I)I

    move-result p1

    .line 48
    invoke-virtual {p2}, Lorg/json/JSONArray;->length()I

    move-result v0

    if-le v0, v6, :cond_0

    invoke-virtual {p2, v6}, Lorg/json/JSONArray;->isNull(I)Z

    move-result v0

    if-nez v0, :cond_0

    .line 49
    invoke-virtual {p2, v6}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p2

    goto :goto_0

    :cond_0
    move p2, v6

    .line 55
    :goto_0
    iget-object v0, p0, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->manager:Landroid/media/AudioManager;

    if-eqz p2, :cond_1

    goto :goto_1

    :cond_1
    move v1, v5

    :goto_1
    invoke-virtual {v0, v2, p1, v1}, Landroid/media/AudioManager;->setStreamVolume(III)V

    .line 56
    invoke-virtual {p3}, Lorg/apache/cordova/CallbackContext;->success()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto/16 :goto_4

    :catch_0
    move-exception p1

    .line 58
    new-instance p2, Ljava/lang/StringBuilder;

    invoke-direct {p2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v4, p1}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    goto/16 :goto_5

    .line 61
    :cond_2
    const-string v0, "getVolume"

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    const/high16 v7, 0x42c80000    # 100.0f

    if-eqz v0, :cond_3

    .line 64
    :try_start_1
    invoke-direct {p0}, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->getCurrentVolume()I

    move-result p1

    int-to-float p1, p1

    div-float/2addr p1, v7

    .line 66
    invoke-static {p1}, Ljava/lang/String;->valueOf(F)Ljava/lang/String;

    move-result-object p1

    .line 67
    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_1

    goto/16 :goto_4

    :catch_1
    move-exception p1

    .line 69
    new-instance p2, Ljava/lang/StringBuilder;

    invoke-direct {p2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v4, p1}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    goto/16 :goto_5

    .line 72
    :cond_3
    const-string v0, "toggleMute"

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_5

    .line 75
    :try_start_2
    invoke-direct {p0}, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->getCurrentVolume()I

    move-result p1

    .line 76
    invoke-virtual {p2, v5}, Lorg/json/JSONArray;->getDouble(I)D

    move-result-wide v8

    double-to-float p2, v8

    mul-float/2addr p2, v7

    .line 77
    invoke-static {p2}, Ljava/lang/Math;->round(F)I

    move-result p2

    if-le p1, v6, :cond_4

    move p1, v5

    goto :goto_2

    .line 84
    :cond_4
    invoke-direct {p0, p2}, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->getVolumeToSet(I)I

    move-result p1

    .line 86
    :goto_2
    iget-object p2, p0, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->manager:Landroid/media/AudioManager;

    invoke-virtual {p2, v2, p1, v1}, Landroid/media/AudioManager;->setStreamVolume(III)V

    .line 87
    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V
    :try_end_2
    .catch Ljava/lang/Exception; {:try_start_2 .. :try_end_2} :catch_2

    goto :goto_4

    :catch_2
    move-exception p1

    .line 90
    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Error setting mute/unmute "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v4, p1}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_5

    .line 93
    :cond_5
    const-string p2, "isMuted"

    invoke-virtual {p2, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_7

    .line 96
    :try_start_3
    invoke-direct {p0}, Lcom/lorentech/cordova/plugins/volumeControl/VolumeControl;->getCurrentVolume()I

    move-result p1

    if-nez p1, :cond_6

    move p1, v5

    goto :goto_3

    :cond_6
    move p1, v6

    .line 97
    :goto_3
    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V
    :try_end_3
    .catch Ljava/lang/Exception; {:try_start_3 .. :try_end_3} :catch_3

    goto :goto_4

    :catch_3
    move-exception p1

    .line 99
    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Error checking mute volume "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v4, p1}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_5

    .line 102
    :cond_7
    const-string p2, "hideVolume"

    invoke-virtual {p2, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_8

    .line 103
    invoke-virtual {p3}, Lorg/apache/cordova/CallbackContext;->success()V

    goto :goto_4

    .line 104
    :cond_8
    const-string p2, "showVolume"

    invoke-virtual {p2, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_9

    .line 105
    invoke-virtual {p3}, Lorg/apache/cordova/CallbackContext;->success()V

    :goto_4
    move v5, v6

    :cond_9
    :goto_5
    return v5
.end method
