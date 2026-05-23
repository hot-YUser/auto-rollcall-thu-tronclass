.class Lcom/onesignal/OneSignalStateSynchronizer;
.super Ljava/lang/Object;
.source "OneSignalStateSynchronizer.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoCompletionHandler;,
        Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoError;,
        Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;
    }
.end annotation


# static fields
.field private static final LOCK:Ljava/lang/Object;

.field private static userStateSynchronizers:Ljava/util/HashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/HashMap<",
            "Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;",
            "Lcom/onesignal/UserStateSynchronizer;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 43
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->LOCK:Ljava/lang/Object;

    .line 89
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    return-void
.end method

.method constructor <init>()V
    .locals 0

    .line 41
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic access$000()Ljava/util/HashMap;
    .locals 1

    .line 41
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    return-object v0
.end method

.method static clearLocation()V
    .locals 1

    .line 158
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStatePushSynchronizer;->clearLocation()V

    .line 159
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateEmailSynchronizer;->clearLocation()V

    .line 160
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateSMSSynchronizer;->clearLocation()V

    return-void
.end method

.method static getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;
    .locals 4

    .line 105
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->EMAIL:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v0, v1}, Ljava/util/HashMap;->containsKey(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->EMAIL:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v0, v1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    if-nez v0, :cond_2

    .line 106
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 107
    :try_start_0
    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v2, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->EMAIL:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v1, v2}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    if-nez v1, :cond_1

    .line 108
    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v2, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->EMAIL:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    new-instance v3, Lcom/onesignal/UserStateEmailSynchronizer;

    invoke-direct {v3}, Lcom/onesignal/UserStateEmailSynchronizer;-><init>()V

    invoke-virtual {v1, v2, v3}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 109
    :cond_1
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 112
    :cond_2
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->EMAIL:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v0, v1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/UserStateEmailSynchronizer;

    return-object v0

    :catchall_0
    move-exception v1

    .line 109
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v1
.end method

.method static getLanguage()Ljava/lang/String;
    .locals 1

    .line 207
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStatePushSynchronizer;->getLanguage()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method static getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;
    .locals 4

    .line 93
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->PUSH:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v0, v1}, Ljava/util/HashMap;->containsKey(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->PUSH:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v0, v1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    if-nez v0, :cond_2

    .line 94
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 95
    :try_start_0
    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v2, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->PUSH:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v1, v2}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    if-nez v1, :cond_1

    .line 96
    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v2, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->PUSH:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    new-instance v3, Lcom/onesignal/UserStatePushSynchronizer;

    invoke-direct {v3}, Lcom/onesignal/UserStatePushSynchronizer;-><init>()V

    invoke-virtual {v1, v2, v3}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 97
    :cond_1
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 100
    :cond_2
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->PUSH:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v0, v1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/UserStatePushSynchronizer;

    return-object v0

    :catchall_0
    move-exception v1

    .line 97
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v1
.end method

.method static getRegistrationId()Ljava/lang/String;
    .locals 1

    .line 225
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStatePushSynchronizer;->getRegistrationId()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method static getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;
    .locals 4

    .line 117
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->SMS:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v0, v1}, Ljava/util/HashMap;->containsKey(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->SMS:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v0, v1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    if-nez v0, :cond_2

    .line 118
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 119
    :try_start_0
    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v2, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->SMS:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v1, v2}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    if-nez v1, :cond_1

    .line 120
    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v2, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->SMS:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    new-instance v3, Lcom/onesignal/UserStateSMSSynchronizer;

    invoke-direct {v3}, Lcom/onesignal/UserStateSMSSynchronizer;-><init>()V

    invoke-virtual {v1, v2, v3}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 121
    :cond_1
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 124
    :cond_2
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer;->userStateSynchronizers:Ljava/util/HashMap;

    sget-object v1, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->SMS:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v0, v1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/UserStateSMSSynchronizer;

    return-object v0

    :catchall_0
    move-exception v1

    .line 121
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v1
.end method

.method static getSubscribed()Z
    .locals 1

    .line 221
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStatePushSynchronizer;->getSubscribed()Z

    move-result v0

    return v0
.end method

.method static getSyncAsNewSession()Z
    .locals 1

    .line 266
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStatePushSynchronizer;->getSyncAsNewSession()Z

    move-result v0

    if-nez v0, :cond_1

    .line 267
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateEmailSynchronizer;->getSyncAsNewSession()Z

    move-result v0

    if-nez v0, :cond_1

    .line 268
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateSMSSynchronizer;->getSyncAsNewSession()Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    :goto_1
    return v0
.end method

.method static getTags(Z)Lcom/onesignal/UserStateSynchronizer$GetTagsResult;
    .locals 1

    .line 229
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStatePushSynchronizer;->getTags(Z)Lcom/onesignal/UserStateSynchronizer$GetTagsResult;

    move-result-object p0

    return-object p0
.end method

.method static getUserStateSynchronizers()Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/UserStateSynchronizer;",
            ">;"
        }
    .end annotation

    .line 128
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 130
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 133
    invoke-static {}, Lcom/onesignal/OneSignal;->hasEmailId()Z

    move-result v1

    if-eqz v1, :cond_0

    .line 134
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 137
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->hasSMSlId()Z

    move-result v1

    if-eqz v1, :cond_1

    .line 138
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    :cond_1
    return-object v0
.end method

.method static getUserSubscribePreference()Z
    .locals 1

    .line 203
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStatePushSynchronizer;->getUserSubscribePreference()Z

    move-result v0

    return v0
.end method

.method static initUserState()V
    .locals 1

    .line 164
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStatePushSynchronizer;->initUserState()V

    .line 165
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateEmailSynchronizer;->initUserState()V

    .line 166
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateSMSSynchronizer;->initUserState()V

    return-void
.end method

.method static logoutEmail()V
    .locals 1

    .line 276
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStatePushSynchronizer;->logoutEmail()V

    .line 277
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateEmailSynchronizer;->logoutChannel()V

    return-void
.end method

.method static logoutSMS()V
    .locals 1

    .line 281
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateSMSSynchronizer;->logoutChannel()V

    .line 282
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStatePushSynchronizer;->logoutSMS()V

    return-void
.end method

.method static persist()Z
    .locals 5

    .line 144
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStatePushSynchronizer;->persist()Z

    move-result v0

    .line 145
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/UserStateEmailSynchronizer;->persist()Z

    move-result v1

    .line 146
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/UserStateSMSSynchronizer;->persist()Z

    move-result v2

    const/4 v3, 0x1

    const/4 v4, 0x0

    if-eqz v1, :cond_1

    .line 149
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/UserStateEmailSynchronizer;->getRegistrationId()Ljava/lang/String;

    move-result-object v1

    if-eqz v1, :cond_0

    move v1, v3

    goto :goto_0

    :cond_0
    move v1, v4

    :cond_1
    :goto_0
    if-eqz v2, :cond_3

    .line 152
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/UserStateSMSSynchronizer;->getRegistrationId()Ljava/lang/String;

    move-result-object v2

    if-eqz v2, :cond_2

    move v2, v3

    goto :goto_1

    :cond_2
    move v2, v4

    :cond_3
    :goto_1
    if-nez v0, :cond_5

    if-nez v1, :cond_5

    if-eqz v2, :cond_4

    goto :goto_2

    :cond_4
    move v3, v4

    :cond_5
    :goto_2
    return v3
.end method

.method static readyToUpdate(Z)V
    .locals 1

    .line 336
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStatePushSynchronizer;->readyToUpdate(Z)V

    .line 337
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStateEmailSynchronizer;->readyToUpdate(Z)V

    .line 338
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStateSMSSynchronizer;->readyToUpdate(Z)V

    return-void
.end method

.method static refreshSecondaryChannelState()V
    .locals 1

    .line 255
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateEmailSynchronizer;->refresh()V

    .line 256
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateSMSSynchronizer;->refresh()V

    return-void
.end method

.method static resetCurrentState()V
    .locals 2

    .line 233
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStatePushSynchronizer;->resetCurrentState()V

    .line 234
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateEmailSynchronizer;->resetCurrentState()V

    .line 235
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateSMSSynchronizer;->resetCurrentState()V

    .line 237
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Lcom/onesignal/UserStatePushSynchronizer;->saveChannelId(Ljava/lang/String;)V

    .line 238
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0, v1}, Lcom/onesignal/UserStateEmailSynchronizer;->saveChannelId(Ljava/lang/String;)V

    .line 239
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0, v1}, Lcom/onesignal/UserStateSMSSynchronizer;->saveChannelId(Ljava/lang/String;)V

    const-wide/16 v0, -0xe4c

    .line 241
    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->setLastSessionTime(J)V

    return-void
.end method

.method static sendPurchases(Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;)V
    .locals 2

    .line 326
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getUserStateSynchronizers()Ljava/util/List;

    move-result-object v0

    .line 327
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/UserStateSynchronizer;

    .line 328
    invoke-virtual {v1, p0, p1}, Lcom/onesignal/UserStateSynchronizer;->sendPurchases(Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;)V

    goto :goto_0

    :cond_0
    return-void
.end method

.method static sendTags(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V
    .locals 3

    .line 177
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    const-string v1, "tags"

    invoke-virtual {v0, v1, p0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    move-result-object p0

    .line 178
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/UserStatePushSynchronizer;->sendTags(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V

    .line 179
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/UserStateEmailSynchronizer;->sendTags(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V

    .line 180
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/UserStateSMSSynchronizer;->sendTags(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    if-eqz p1, :cond_0

    .line 183
    new-instance v0, Lcom/onesignal/OneSignal$SendTagsError;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Encountered an error attempting to serialize your tags into JSON: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, "\n"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {p0}, Lorg/json/JSONException;->getStackTrace()[Ljava/lang/StackTraceElement;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    const/4 v2, -0x1

    invoke-direct {v0, v2, v1}, Lcom/onesignal/OneSignal$SendTagsError;-><init>(ILjava/lang/String;)V

    invoke-interface {p1, v0}, Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;->onFailure(Lcom/onesignal/OneSignal$SendTagsError;)V

    .line 184
    :cond_0
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method

.method static setEmail(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    .line 194
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/UserStatePushSynchronizer;->setEmail(Ljava/lang/String;Ljava/lang/String;)V

    .line 195
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/UserStateEmailSynchronizer;->setChannelId(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method static setExternalUserId(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 286
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 289
    new-instance v1, Lcom/onesignal/OneSignalStateSynchronizer$1;

    invoke-direct {v1, v0, p2}, Lcom/onesignal/OneSignalStateSynchronizer$1;-><init>(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V

    .line 319
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getUserStateSynchronizers()Ljava/util/List;

    move-result-object p2

    .line 320
    invoke-interface {p2}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p2

    :goto_0
    invoke-interface {p2}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-interface {p2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/UserStateSynchronizer;

    .line 321
    invoke-virtual {v0, p0, p1, v1}, Lcom/onesignal/UserStateSynchronizer;->setExternalUserId(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSInternalExternalUserIdUpdateCompletionHandler;)V

    goto :goto_0

    :cond_0
    return-void
.end method

.method static setNewSession()V
    .locals 1

    .line 260
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStatePushSynchronizer;->setNewSession()V

    .line 261
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateEmailSynchronizer;->setNewSession()V

    .line 262
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateSMSSynchronizer;->setNewSession()V

    return-void
.end method

.method static setNewSessionForEmail()V
    .locals 1

    .line 272
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/UserStateEmailSynchronizer;->setNewSession()V

    return-void
.end method

.method static setPermission(Z)V
    .locals 1

    .line 211
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStatePushSynchronizer;->setPermission(Z)V

    return-void
.end method

.method static setSMSNumber(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    .line 189
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/UserStatePushSynchronizer;->setSMSNumber(Ljava/lang/String;Ljava/lang/String;)V

    .line 190
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/UserStateSMSSynchronizer;->setChannelId(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method static setSubscription(Z)V
    .locals 1

    .line 199
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStatePushSynchronizer;->setSubscription(Z)V

    return-void
.end method

.method static syncUserState(Z)V
    .locals 1

    .line 170
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStatePushSynchronizer;->syncUserState(Z)V

    .line 171
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStateEmailSynchronizer;->syncUserState(Z)V

    .line 172
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStateSMSSynchronizer;->syncUserState(Z)V

    return-void
.end method

.method static updateDeviceInfo(Lorg/json/JSONObject;Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoCompletionHandler;)V
    .locals 1

    .line 245
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/UserStatePushSynchronizer;->updateDeviceInfo(Lorg/json/JSONObject;Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoCompletionHandler;)V

    .line 246
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/UserStateEmailSynchronizer;->updateDeviceInfo(Lorg/json/JSONObject;Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoCompletionHandler;)V

    .line 247
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/UserStateSMSSynchronizer;->updateDeviceInfo(Lorg/json/JSONObject;Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoCompletionHandler;)V

    return-void
.end method

.method static updateLocation(Lcom/onesignal/LocationController$LocationPoint;)V
    .locals 1

    .line 215
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStatePushSynchronizer;->updateLocation(Lcom/onesignal/LocationController$LocationPoint;)V

    .line 216
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getEmailStateSynchronizer()Lcom/onesignal/UserStateEmailSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStateEmailSynchronizer;->updateLocation(Lcom/onesignal/LocationController$LocationPoint;)V

    .line 217
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStateSMSSynchronizer;->updateLocation(Lcom/onesignal/LocationController$LocationPoint;)V

    return-void
.end method

.method static updatePushState(Lorg/json/JSONObject;)V
    .locals 1

    .line 251
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getPushStateSynchronizer()Lcom/onesignal/UserStatePushSynchronizer;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/UserStatePushSynchronizer;->updateState(Lorg/json/JSONObject;)V

    return-void
.end method
