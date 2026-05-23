.class Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;
.super Ljava/lang/Object;
.source "NotificationBundleProcessor.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/NotificationBundleProcessor;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "ProcessedBundleResult"
.end annotation


# instance fields
.field private inAppPreviewShown:Z

.field private isDup:Z

.field private isOneSignalPayload:Z

.field private isWorkManagerProcessing:Z


# direct methods
.method constructor <init>()V
    .locals 0

    .line 460
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method isDup()Z
    .locals 1

    .line 475
    iget-boolean v0, p0, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->isDup:Z

    return v0
.end method

.method public isWorkManagerProcessing()Z
    .locals 1

    .line 487
    iget-boolean v0, p0, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->isWorkManagerProcessing:Z

    return v0
.end method

.method processed()Z
    .locals 1

    .line 467
    iget-boolean v0, p0, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->isOneSignalPayload:Z

    if-eqz v0, :cond_1

    iget-boolean v0, p0, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->isDup:Z

    if-nez v0, :cond_1

    iget-boolean v0, p0, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->inAppPreviewShown:Z

    if-nez v0, :cond_1

    iget-boolean v0, p0, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->isWorkManagerProcessing:Z

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

.method setDup(Z)V
    .locals 0

    .line 479
    iput-boolean p1, p0, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->isDup:Z

    return-void
.end method

.method public setInAppPreviewShown(Z)V
    .locals 0

    .line 483
    iput-boolean p1, p0, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->inAppPreviewShown:Z

    return-void
.end method

.method setOneSignalPayload(Z)V
    .locals 0

    .line 471
    iput-boolean p1, p0, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->isOneSignalPayload:Z

    return-void
.end method

.method public setWorkManagerProcessing(Z)V
    .locals 0

    .line 491
    iput-boolean p1, p0, Lcom/onesignal/NotificationBundleProcessor$ProcessedBundleResult;->isWorkManagerProcessing:Z

    return-void
.end method
