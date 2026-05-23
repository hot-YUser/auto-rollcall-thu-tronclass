.class public Lcom/onesignal/OSPermissionState;
.super Ljava/lang/Object;
.source "OSPermissionState.java"

# interfaces
.implements Ljava/lang/Cloneable;


# static fields
.field private static final ARE_NOTIFICATION_ENABLED_KEY:Ljava/lang/String; = "areNotificationsEnabled"

.field private static final CHANGED_KEY:Ljava/lang/String; = "changed"


# instance fields
.field private notificationsEnabled:Z

.field private observable:Lcom/onesignal/OSObservable;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/onesignal/OSObservable<",
            "Ljava/lang/Object;",
            "Lcom/onesignal/OSPermissionState;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Z)V
    .locals 3

    .line 40
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 43
    new-instance v0, Lcom/onesignal/OSObservable;

    const-string v1, "changed"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Lcom/onesignal/OSObservable;-><init>(Ljava/lang/String;Z)V

    iput-object v0, p0, Lcom/onesignal/OSPermissionState;->observable:Lcom/onesignal/OSObservable;

    if-eqz p1, :cond_0

    .line 46
    sget-object p1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v0, "ONESIGNAL_ACCEPTED_NOTIFICATION_LAST"

    invoke-static {p1, v0, v2}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result p1

    iput-boolean p1, p0, Lcom/onesignal/OSPermissionState;->notificationsEnabled:Z

    goto :goto_0

    .line 49
    :cond_0
    invoke-virtual {p0}, Lcom/onesignal/OSPermissionState;->refreshAsTo()V

    :goto_0
    return-void
.end method

.method private setNotificationsEnabled(Z)V
    .locals 1

    .line 62
    iget-boolean v0, p0, Lcom/onesignal/OSPermissionState;->notificationsEnabled:Z

    if-eq v0, p1, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    .line 63
    :goto_0
    iput-boolean p1, p0, Lcom/onesignal/OSPermissionState;->notificationsEnabled:Z

    if-eqz v0, :cond_1

    .line 65
    iget-object p1, p0, Lcom/onesignal/OSPermissionState;->observable:Lcom/onesignal/OSObservable;

    invoke-virtual {p1, p0}, Lcom/onesignal/OSObservable;->notifyChange(Ljava/lang/Object;)Z

    :cond_1
    return-void
.end method


# virtual methods
.method public areNotificationsEnabled()Z
    .locals 1

    .line 58
    iget-boolean v0, p0, Lcom/onesignal/OSPermissionState;->notificationsEnabled:Z

    return v0
.end method

.method protected clone()Ljava/lang/Object;
    .locals 1

    .line 83
    :try_start_0
    invoke-super {p0}, Ljava/lang/Object;->clone()Ljava/lang/Object;

    move-result-object v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    return-object v0

    :catchall_0
    const/4 v0, 0x0

    return-object v0
.end method

.method compare(Lcom/onesignal/OSPermissionState;)Z
    .locals 1

    .line 74
    iget-boolean v0, p0, Lcom/onesignal/OSPermissionState;->notificationsEnabled:Z

    iget-boolean p1, p1, Lcom/onesignal/OSPermissionState;->notificationsEnabled:Z

    if-eq v0, p1, :cond_0

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return p1
.end method

.method public getObservable()Lcom/onesignal/OSObservable;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/onesignal/OSObservable<",
            "Ljava/lang/Object;",
            "Lcom/onesignal/OSPermissionState;",
            ">;"
        }
    .end annotation

    .line 78
    iget-object v0, p0, Lcom/onesignal/OSPermissionState;->observable:Lcom/onesignal/OSObservable;

    return-object v0
.end method

.method persistAsFrom()V
    .locals 3

    .line 69
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "ONESIGNAL_ACCEPTED_NOTIFICATION_LAST"

    iget-boolean v2, p0, Lcom/onesignal/OSPermissionState;->notificationsEnabled:Z

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    return-void
.end method

.method refreshAsTo()V
    .locals 1

    .line 54
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OSUtils;->areNotificationsEnabled(Landroid/content/Context;)Z

    move-result v0

    invoke-direct {p0, v0}, Lcom/onesignal/OSPermissionState;->setNotificationsEnabled(Z)V

    return-void
.end method

.method public toJSONObject()Lorg/json/JSONObject;
    .locals 3

    .line 89
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 92
    :try_start_0
    const-string v1, "areNotificationsEnabled"

    iget-boolean v2, p0, Lcom/onesignal/OSPermissionState;->notificationsEnabled:Z

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception v1

    .line 95
    invoke-virtual {v1}, Ljava/lang/Throwable;->printStackTrace()V

    :goto_0
    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 1

    .line 103
    invoke-virtual {p0}, Lcom/onesignal/OSPermissionState;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v0

    invoke-virtual {v0}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
