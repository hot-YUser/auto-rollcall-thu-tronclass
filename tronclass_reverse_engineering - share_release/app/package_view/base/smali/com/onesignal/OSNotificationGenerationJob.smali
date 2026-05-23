.class public Lcom/onesignal/OSNotificationGenerationJob;
.super Ljava/lang/Object;
.source "OSNotificationGenerationJob.java"


# instance fields
.field private context:Landroid/content/Context;

.field private isNotificationToDisplay:Z

.field private jsonPayload:Lorg/json/JSONObject;

.field private notification:Lcom/onesignal/OSNotification;

.field private orgFlags:Ljava/lang/Integer;

.field private orgSound:Landroid/net/Uri;

.field private overriddenBodyFromExtender:Ljava/lang/CharSequence;

.field private overriddenFlags:Ljava/lang/Integer;

.field private overriddenSound:Landroid/net/Uri;

.field private overriddenTitleFromExtender:Ljava/lang/CharSequence;

.field private restoring:Z

.field private shownTimeStamp:Ljava/lang/Long;


# direct methods
.method constructor <init>(Landroid/content/Context;)V
    .locals 0

    .line 54
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 55
    iput-object p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->context:Landroid/content/Context;

    return-void
.end method

.method constructor <init>(Landroid/content/Context;Lcom/onesignal/OSNotification;Lorg/json/JSONObject;)V
    .locals 0

    .line 62
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 63
    iput-object p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->context:Landroid/content/Context;

    .line 64
    iput-object p3, p0, Lcom/onesignal/OSNotificationGenerationJob;->jsonPayload:Lorg/json/JSONObject;

    .line 65
    invoke-virtual {p0, p2}, Lcom/onesignal/OSNotificationGenerationJob;->setNotification(Lcom/onesignal/OSNotification;)V

    return-void
.end method

.method constructor <init>(Landroid/content/Context;Lorg/json/JSONObject;)V
    .locals 1

    .line 59
    new-instance v0, Lcom/onesignal/OSNotification;

    invoke-direct {v0, p2}, Lcom/onesignal/OSNotification;-><init>(Lorg/json/JSONObject;)V

    invoke-direct {p0, p1, v0, p2}, Lcom/onesignal/OSNotificationGenerationJob;-><init>(Landroid/content/Context;Lcom/onesignal/OSNotification;Lorg/json/JSONObject;)V

    return-void
.end method


# virtual methods
.method getAdditionalData()Lorg/json/JSONObject;
    .locals 1

    .line 90
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->notification:Lcom/onesignal/OSNotification;

    invoke-virtual {v0}, Lcom/onesignal/OSNotification;->getAdditionalData()Lorg/json/JSONObject;

    move-result-object v0

    if-eqz v0, :cond_0

    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->notification:Lcom/onesignal/OSNotification;

    invoke-virtual {v0}, Lcom/onesignal/OSNotification;->getAdditionalData()Lorg/json/JSONObject;

    move-result-object v0

    goto :goto_0

    :cond_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    :goto_0
    return-object v0
.end method

.method getAndroidId()Ljava/lang/Integer;
    .locals 1

    .line 116
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->notification:Lcom/onesignal/OSNotification;

    invoke-virtual {v0}, Lcom/onesignal/OSNotification;->getAndroidNotificationId()I

    move-result v0

    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    return-object v0
.end method

.method getApiNotificationId()Ljava/lang/String;
    .locals 1

    .line 112
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->jsonPayload:Lorg/json/JSONObject;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getNotificationIdFromFCMJson(Lorg/json/JSONObject;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method getBody()Ljava/lang/CharSequence;
    .locals 1

    .line 81
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenBodyFromExtender:Ljava/lang/CharSequence;

    if-eqz v0, :cond_0

    return-object v0

    .line 83
    :cond_0
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->notification:Lcom/onesignal/OSNotification;

    invoke-virtual {v0}, Lcom/onesignal/OSNotification;->getBody()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public getContext()Landroid/content/Context;
    .locals 1

    .line 137
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->context:Landroid/content/Context;

    return-object v0
.end method

.method public getJsonPayload()Lorg/json/JSONObject;
    .locals 1

    .line 145
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->jsonPayload:Lorg/json/JSONObject;

    return-object v0
.end method

.method public getNotification()Lcom/onesignal/OSNotification;
    .locals 1

    .line 120
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->notification:Lcom/onesignal/OSNotification;

    return-object v0
.end method

.method public getOrgFlags()Ljava/lang/Integer;
    .locals 1

    .line 201
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->orgFlags:Ljava/lang/Integer;

    return-object v0
.end method

.method public getOrgSound()Landroid/net/Uri;
    .locals 1

    .line 209
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->orgSound:Landroid/net/Uri;

    return-object v0
.end method

.method public getOverriddenBodyFromExtender()Ljava/lang/CharSequence;
    .locals 1

    .line 169
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenBodyFromExtender:Ljava/lang/CharSequence;

    return-object v0
.end method

.method public getOverriddenFlags()Ljava/lang/Integer;
    .locals 1

    .line 193
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenFlags:Ljava/lang/Integer;

    return-object v0
.end method

.method public getOverriddenSound()Landroid/net/Uri;
    .locals 1

    .line 185
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenSound:Landroid/net/Uri;

    return-object v0
.end method

.method public getOverriddenTitleFromExtender()Ljava/lang/CharSequence;
    .locals 1

    .line 177
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenTitleFromExtender:Ljava/lang/CharSequence;

    return-object v0
.end method

.method public getShownTimeStamp()Ljava/lang/Long;
    .locals 1

    .line 161
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->shownTimeStamp:Ljava/lang/Long;

    return-object v0
.end method

.method getTitle()Ljava/lang/CharSequence;
    .locals 1

    .line 72
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenTitleFromExtender:Ljava/lang/CharSequence;

    if-eqz v0, :cond_0

    return-object v0

    .line 74
    :cond_0
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->notification:Lcom/onesignal/OSNotification;

    invoke-virtual {v0}, Lcom/onesignal/OSNotification;->getTitle()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method hasExtender()Z
    .locals 1

    .line 108
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->notification:Lcom/onesignal/OSNotification;

    invoke-virtual {v0}, Lcom/onesignal/OSNotification;->getNotificationExtender()Landroidx/core/app/NotificationCompat$Extender;

    move-result-object v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method isNotificationToDisplay()Z
    .locals 1

    .line 97
    iget-boolean v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->isNotificationToDisplay:Z

    return v0
.end method

.method public isRestoring()Z
    .locals 1

    .line 153
    iget-boolean v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->restoring:Z

    return v0
.end method

.method public setContext(Landroid/content/Context;)V
    .locals 0

    .line 141
    iput-object p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->context:Landroid/content/Context;

    return-void
.end method

.method setIsNotificationToDisplay(Z)V
    .locals 0

    .line 104
    iput-boolean p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->isNotificationToDisplay:Z

    return-void
.end method

.method public setJsonPayload(Lorg/json/JSONObject;)V
    .locals 0

    .line 149
    iput-object p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->jsonPayload:Lorg/json/JSONObject;

    return-void
.end method

.method public setNotification(Lcom/onesignal/OSNotification;)V
    .locals 1

    if-eqz p1, :cond_1

    .line 126
    invoke-virtual {p1}, Lcom/onesignal/OSNotification;->hasNotificationId()Z

    move-result v0

    if-nez v0, :cond_1

    .line 127
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->notification:Lcom/onesignal/OSNotification;

    if-eqz v0, :cond_0

    invoke-virtual {v0}, Lcom/onesignal/OSNotification;->hasNotificationId()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 128
    iget-object v0, p0, Lcom/onesignal/OSNotificationGenerationJob;->notification:Lcom/onesignal/OSNotification;

    invoke-virtual {v0}, Lcom/onesignal/OSNotification;->getAndroidNotificationId()I

    move-result v0

    invoke-virtual {p1, v0}, Lcom/onesignal/OSNotification;->setAndroidNotificationId(I)V

    goto :goto_0

    .line 130
    :cond_0
    new-instance v0, Ljava/security/SecureRandom;

    invoke-direct {v0}, Ljava/security/SecureRandom;-><init>()V

    invoke-virtual {v0}, Ljava/security/SecureRandom;->nextInt()I

    move-result v0

    invoke-virtual {p1, v0}, Lcom/onesignal/OSNotification;->setAndroidNotificationId(I)V

    .line 133
    :cond_1
    :goto_0
    iput-object p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->notification:Lcom/onesignal/OSNotification;

    return-void
.end method

.method public setOrgFlags(Ljava/lang/Integer;)V
    .locals 0

    .line 205
    iput-object p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->orgFlags:Ljava/lang/Integer;

    return-void
.end method

.method public setOrgSound(Landroid/net/Uri;)V
    .locals 0

    .line 213
    iput-object p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->orgSound:Landroid/net/Uri;

    return-void
.end method

.method public setOverriddenBodyFromExtender(Ljava/lang/CharSequence;)V
    .locals 0

    .line 173
    iput-object p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenBodyFromExtender:Ljava/lang/CharSequence;

    return-void
.end method

.method public setOverriddenFlags(Ljava/lang/Integer;)V
    .locals 0

    .line 197
    iput-object p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenFlags:Ljava/lang/Integer;

    return-void
.end method

.method public setOverriddenSound(Landroid/net/Uri;)V
    .locals 0

    .line 189
    iput-object p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenSound:Landroid/net/Uri;

    return-void
.end method

.method public setOverriddenTitleFromExtender(Ljava/lang/CharSequence;)V
    .locals 0

    .line 181
    iput-object p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenTitleFromExtender:Ljava/lang/CharSequence;

    return-void
.end method

.method public setRestoring(Z)V
    .locals 0

    .line 157
    iput-boolean p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->restoring:Z

    return-void
.end method

.method public setShownTimeStamp(Ljava/lang/Long;)V
    .locals 0

    .line 165
    iput-object p1, p0, Lcom/onesignal/OSNotificationGenerationJob;->shownTimeStamp:Ljava/lang/Long;

    return-void
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 218
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OSNotificationGenerationJob{jsonPayload="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/OSNotificationGenerationJob;->jsonPayload:Lorg/json/JSONObject;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", isRestoring="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OSNotificationGenerationJob;->restoring:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", isNotificationToDisplay="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OSNotificationGenerationJob;->isNotificationToDisplay:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", shownTimeStamp="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSNotificationGenerationJob;->shownTimeStamp:Ljava/lang/Long;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", overriddenBodyFromExtender="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenBodyFromExtender:Ljava/lang/CharSequence;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", overriddenTitleFromExtender="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenTitleFromExtender:Ljava/lang/CharSequence;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", overriddenSound="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenSound:Landroid/net/Uri;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", overriddenFlags="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSNotificationGenerationJob;->overriddenFlags:Ljava/lang/Integer;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", orgFlags="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSNotificationGenerationJob;->orgFlags:Ljava/lang/Integer;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", orgSound="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSNotificationGenerationJob;->orgSound:Landroid/net/Uri;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", notification="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSNotificationGenerationJob;->notification:Lcom/onesignal/OSNotification;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
