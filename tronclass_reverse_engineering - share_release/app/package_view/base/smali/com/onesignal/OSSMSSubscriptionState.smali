.class public Lcom/onesignal/OSSMSSubscriptionState;
.super Ljava/lang/Object;
.source "OSSMSSubscriptionState.java"

# interfaces
.implements Ljava/lang/Cloneable;


# static fields
.field private static final CHANGED_KEY:Ljava/lang/String; = "changed"

.field private static final SMS_NUMBER:Ljava/lang/String; = "smsNumber"

.field private static final SMS_USER_ID:Ljava/lang/String; = "smsUserId"

.field private static final SUBSCRIBED:Ljava/lang/String; = "isSubscribed"


# instance fields
.field private observable:Lcom/onesignal/OSObservable;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/onesignal/OSObservable<",
            "Ljava/lang/Object;",
            "Lcom/onesignal/OSSMSSubscriptionState;",
            ">;"
        }
    .end annotation
.end field

.field private smsNumber:Ljava/lang/String;

.field private smsUserId:Ljava/lang/String;


# direct methods
.method constructor <init>(Z)V
    .locals 3

    .line 45
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 46
    new-instance v0, Lcom/onesignal/OSObservable;

    const-string v1, "changed"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Lcom/onesignal/OSObservable;-><init>(Ljava/lang/String;Z)V

    iput-object v0, p0, Lcom/onesignal/OSSMSSubscriptionState;->observable:Lcom/onesignal/OSObservable;

    if-eqz p1, :cond_0

    .line 49
    sget-object p1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v0, "PREFS_OS_SMS_ID_LAST"

    const/4 v1, 0x0

    invoke-static {p1, v0, v1}, Lcom/onesignal/OneSignalPrefs;->getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;

    .line 51
    sget-object p1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v0, "PREFS_OS_SMS_NUMBER_LAST"

    invoke-static {p1, v0, v1}, Lcom/onesignal/OneSignalPrefs;->getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsNumber:Ljava/lang/String;

    goto :goto_0

    .line 54
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getSMSId()Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;

    .line 55
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSMSStateSynchronizer()Lcom/onesignal/UserStateSMSSynchronizer;

    move-result-object p1

    invoke-virtual {p1}, Lcom/onesignal/UserStateSMSSynchronizer;->getRegistrationId()Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsNumber:Ljava/lang/String;

    :goto_0
    return-void
.end method


# virtual methods
.method clearSMSAndId()V
    .locals 2

    .line 60
    iget-object v0, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;

    if-nez v0, :cond_1

    iget-object v0, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsNumber:Ljava/lang/String;

    if-eqz v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    :goto_1
    const/4 v1, 0x0

    .line 61
    iput-object v1, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;

    .line 62
    iput-object v1, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsNumber:Ljava/lang/String;

    if-eqz v0, :cond_2

    .line 64
    iget-object v0, p0, Lcom/onesignal/OSSMSSubscriptionState;->observable:Lcom/onesignal/OSObservable;

    invoke-virtual {v0, p0}, Lcom/onesignal/OSObservable;->notifyChange(Ljava/lang/Object;)Z

    :cond_2
    return-void
.end method

.method protected clone()Ljava/lang/Object;
    .locals 1

    .line 116
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

.method compare(Lcom/onesignal/OSSMSSubscriptionState;)Z
    .locals 3

    .line 106
    iget-object v0, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;

    const-string v1, ""

    if-eqz v0, :cond_0

    goto :goto_0

    :cond_0
    move-object v0, v1

    :goto_0
    iget-object v2, p1, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;

    if-eqz v2, :cond_1

    goto :goto_1

    :cond_1
    move-object v2, v1

    :goto_1
    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_5

    .line 107
    iget-object v0, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsNumber:Ljava/lang/String;

    if-eqz v0, :cond_2

    goto :goto_2

    :cond_2
    move-object v0, v1

    :goto_2
    iget-object p1, p1, Lcom/onesignal/OSSMSSubscriptionState;->smsNumber:Ljava/lang/String;

    if-eqz p1, :cond_3

    move-object v1, p1

    :cond_3
    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_4

    goto :goto_3

    :cond_4
    const/4 p1, 0x0

    goto :goto_4

    :cond_5
    :goto_3
    const/4 p1, 0x1

    :goto_4
    return p1
.end method

.method public getObservable()Lcom/onesignal/OSObservable;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/onesignal/OSObservable<",
            "Ljava/lang/Object;",
            "Lcom/onesignal/OSSMSSubscriptionState;",
            ">;"
        }
    .end annotation

    .line 111
    iget-object v0, p0, Lcom/onesignal/OSSMSSubscriptionState;->observable:Lcom/onesignal/OSObservable;

    return-object v0
.end method

.method public getSMSNumber()Ljava/lang/String;
    .locals 1

    .line 84
    iget-object v0, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsNumber:Ljava/lang/String;

    return-object v0
.end method

.method public getSmsUserId()Ljava/lang/String;
    .locals 1

    .line 68
    iget-object v0, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;

    return-object v0
.end method

.method public isSubscribed()Z
    .locals 1

    .line 95
    iget-object v0, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;

    if-eqz v0, :cond_0

    iget-object v0, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsNumber:Ljava/lang/String;

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method persistAsFrom()V
    .locals 3

    .line 99
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_SMS_ID_LAST"

    iget-object v2, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    .line 101
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_SMS_NUMBER_LAST"

    iget-object v2, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsNumber:Ljava/lang/String;

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method setSMSNumber(Ljava/lang/String;)V
    .locals 1

    .line 88
    iget-object v0, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsNumber:Ljava/lang/String;

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    .line 89
    iput-object p1, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsNumber:Ljava/lang/String;

    if-nez v0, :cond_0

    .line 91
    iget-object p1, p0, Lcom/onesignal/OSSMSSubscriptionState;->observable:Lcom/onesignal/OSObservable;

    invoke-virtual {p1, p0}, Lcom/onesignal/OSObservable;->notifyChange(Ljava/lang/Object;)Z

    :cond_0
    return-void
.end method

.method setSMSUserId(Ljava/lang/String;)V
    .locals 3

    const/4 v0, 0x1

    const/4 v1, 0x0

    if-nez p1, :cond_0

    .line 74
    iget-object v2, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;

    if-eqz v2, :cond_1

    goto :goto_0

    .line 75
    :cond_0
    iget-object v2, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;

    invoke-virtual {p1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_1

    goto :goto_0

    :cond_1
    move v0, v1

    .line 78
    :goto_0
    iput-object p1, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;

    if-eqz v0, :cond_2

    .line 80
    iget-object p1, p0, Lcom/onesignal/OSSMSSubscriptionState;->observable:Lcom/onesignal/OSObservable;

    invoke-virtual {p1, p0}, Lcom/onesignal/OSObservable;->notifyChange(Ljava/lang/Object;)Z

    :cond_2
    return-void
.end method

.method public toJSONObject()Lorg/json/JSONObject;
    .locals 3

    .line 123
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 126
    :try_start_0
    iget-object v1, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsUserId:Ljava/lang/String;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const-string v2, "smsUserId"

    if-eqz v1, :cond_0

    .line 127
    :try_start_1
    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_0

    .line 129
    :cond_0
    sget-object v1, Lorg/json/JSONObject;->NULL:Ljava/lang/Object;

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 131
    :goto_0
    iget-object v1, p0, Lcom/onesignal/OSSMSSubscriptionState;->smsNumber:Ljava/lang/String;
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    const-string v2, "smsNumber"

    if-eqz v1, :cond_1

    .line 132
    :try_start_2
    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_1

    .line 134
    :cond_1
    sget-object v1, Lorg/json/JSONObject;->NULL:Ljava/lang/Object;

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 136
    :goto_1
    const-string v1, "isSubscribed"

    invoke-virtual {p0}, Lcom/onesignal/OSSMSSubscriptionState;->isSubscribed()Z

    move-result v2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    goto :goto_2

    :catchall_0
    move-exception v1

    .line 138
    invoke-virtual {v1}, Ljava/lang/Throwable;->printStackTrace()V

    :goto_2
    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 1

    .line 146
    invoke-virtual {p0}, Lcom/onesignal/OSSMSSubscriptionState;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v0

    invoke-virtual {v0}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
