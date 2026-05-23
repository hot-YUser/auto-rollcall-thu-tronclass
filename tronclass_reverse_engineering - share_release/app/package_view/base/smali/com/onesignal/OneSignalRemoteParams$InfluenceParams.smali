.class public Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;
.super Ljava/lang/Object;
.source "OneSignalRemoteParams.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OneSignalRemoteParams;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "InfluenceParams"
.end annotation


# instance fields
.field directEnabled:Z

.field iamLimit:I

.field indirectEnabled:Z

.field indirectIAMAttributionWindow:I

.field indirectNotificationAttributionWindow:I

.field notificationLimit:I

.field outcomesV2ServiceEnabled:Z

.field unattributedEnabled:Z


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 20
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/16 v0, 0x5a0

    .line 22
    iput v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->indirectNotificationAttributionWindow:I

    const/16 v1, 0xa

    .line 23
    iput v1, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->notificationLimit:I

    .line 25
    iput v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->indirectIAMAttributionWindow:I

    .line 26
    iput v1, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->iamLimit:I

    const/4 v0, 0x0

    .line 28
    iput-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->directEnabled:Z

    .line 29
    iput-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->indirectEnabled:Z

    .line 30
    iput-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->unattributedEnabled:Z

    .line 31
    iput-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->outcomesV2ServiceEnabled:Z

    return-void
.end method


# virtual methods
.method public getIamLimit()I
    .locals 1

    .line 46
    iget v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->iamLimit:I

    return v0
.end method

.method public getIndirectIAMAttributionWindow()I
    .locals 1

    .line 42
    iget v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->indirectIAMAttributionWindow:I

    return v0
.end method

.method public getIndirectNotificationAttributionWindow()I
    .locals 1

    .line 34
    iget v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->indirectNotificationAttributionWindow:I

    return v0
.end method

.method public getNotificationLimit()I
    .locals 1

    .line 38
    iget v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->notificationLimit:I

    return v0
.end method

.method public isDirectEnabled()Z
    .locals 1

    .line 50
    iget-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->directEnabled:Z

    return v0
.end method

.method public isIndirectEnabled()Z
    .locals 1

    .line 54
    iget-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->indirectEnabled:Z

    return v0
.end method

.method public isUnattributedEnabled()Z
    .locals 1

    .line 58
    iget-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->unattributedEnabled:Z

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 63
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "InfluenceParams{indirectNotificationAttributionWindow="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v1, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->indirectNotificationAttributionWindow:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", notificationLimit="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->notificationLimit:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", indirectIAMAttributionWindow="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->indirectIAMAttributionWindow:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", iamLimit="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->iamLimit:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", directEnabled="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->directEnabled:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", indirectEnabled="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->indirectEnabled:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", unattributedEnabled="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->unattributedEnabled:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
