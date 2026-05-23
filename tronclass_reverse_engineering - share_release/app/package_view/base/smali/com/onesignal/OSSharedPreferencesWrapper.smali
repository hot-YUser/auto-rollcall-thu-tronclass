.class Lcom/onesignal/OSSharedPreferencesWrapper;
.super Ljava/lang/Object;
.source "OSSharedPreferencesWrapper.java"

# interfaces
.implements Lcom/onesignal/OSSharedPreferences;


# direct methods
.method constructor <init>()V
    .locals 0

    .line 8
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public getBool(Ljava/lang/String;Ljava/lang/String;Z)Z
    .locals 0

    .line 32
    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result p1

    return p1
.end method

.method public getInt(Ljava/lang/String;Ljava/lang/String;I)I
    .locals 0

    .line 42
    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignalPrefs;->getInt(Ljava/lang/String;Ljava/lang/String;I)I

    move-result p1

    return p1
.end method

.method public getLong(Ljava/lang/String;Ljava/lang/String;J)J
    .locals 0

    .line 52
    invoke-static {p1, p2, p3, p4}, Lcom/onesignal/OneSignalPrefs;->getLong(Ljava/lang/String;Ljava/lang/String;J)J

    move-result-wide p1

    return-wide p1
.end method

.method public getObject(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 73
    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignalPrefs;->getObject(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

.method public getOutcomesV2KeyName()Ljava/lang/String;
    .locals 1

    .line 12
    const-string v0, "PREFS_OS_OUTCOMES_V2"

    return-object v0
.end method

.method public getPreferencesName()Ljava/lang/String;
    .locals 1

    .line 17
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    return-object v0
.end method

.method public getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    .line 22
    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignalPrefs;->getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public getStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 63
    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignalPrefs;->getStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;

    move-result-object p1

    return-object p1
.end method

.method public saveBool(Ljava/lang/String;Ljava/lang/String;Z)V
    .locals 0

    .line 37
    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    return-void
.end method

.method public saveInt(Ljava/lang/String;Ljava/lang/String;I)V
    .locals 0

    .line 47
    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignalPrefs;->saveInt(Ljava/lang/String;Ljava/lang/String;I)V

    return-void
.end method

.method public saveLong(Ljava/lang/String;Ljava/lang/String;J)V
    .locals 0

    .line 57
    invoke-static {p1, p2, p3, p4}, Lcom/onesignal/OneSignalPrefs;->saveLong(Ljava/lang/String;Ljava/lang/String;J)V

    return-void
.end method

.method public saveObject(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V
    .locals 0

    .line 78
    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignalPrefs;->saveObject(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V

    return-void
.end method

.method public saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 27
    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignalPrefs;->saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public saveStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 68
    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignalPrefs;->saveStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)V

    return-void
.end method
