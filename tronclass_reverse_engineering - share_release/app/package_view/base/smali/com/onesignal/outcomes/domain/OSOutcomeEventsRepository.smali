.class public interface abstract Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;
.super Ljava/lang/Object;
.source "OSOutcomeEventsRepository.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000B\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\u0008\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\"\n\u0002\u0008\u0005\n\u0002\u0010\u0008\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0006\u0008f\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005H&J$\u0010\u0007\u001a\u0008\u0012\u0004\u0012\u00020\t0\u00082\u0006\u0010\n\u001a\u00020\u00052\u000c\u0010\u000b\u001a\u0008\u0012\u0004\u0012\u00020\t0\u0008H&J\u000e\u0010\u000c\u001a\u0008\u0012\u0004\u0012\u00020\r0\u0008H&J\u0010\u0010\u000e\u001a\n\u0012\u0004\u0012\u00020\u0005\u0018\u00010\u000fH&J\u0010\u0010\u0010\u001a\u00020\u00032\u0006\u0010\u0011\u001a\u00020\rH&J(\u0010\u0012\u001a\u00020\u00032\u0006\u0010\u0013\u001a\u00020\u00052\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\r2\u0006\u0010\u0017\u001a\u00020\u0018H&J\u0010\u0010\u0019\u001a\u00020\u00032\u0006\u0010\u0016\u001a\u00020\rH&J\u0016\u0010\u001a\u001a\u00020\u00032\u000c\u0010\u001b\u001a\u0008\u0012\u0004\u0012\u00020\u00050\u000fH&J\u0010\u0010\u001c\u001a\u00020\u00032\u0006\u0010\u001d\u001a\u00020\rH&\u00a8\u0006\u001e"
    }
    d2 = {
        "Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;",
        "",
        "cleanCachedUniqueOutcomeEventNotifications",
        "",
        "notificationTableName",
        "",
        "notificationIdColumnName",
        "getNotCachedUniqueOutcome",
        "",
        "Lcom/onesignal/influence/domain/OSInfluence;",
        "name",
        "influences",
        "getSavedOutcomeEvents",
        "Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;",
        "getUnattributedUniqueOutcomeEventsSent",
        "",
        "removeEvent",
        "outcomeEvent",
        "requestMeasureOutcomeEvent",
        "appId",
        "deviceType",
        "",
        "event",
        "responseHandler",
        "Lcom/onesignal/OneSignalApiResponseHandler;",
        "saveOutcomeEvent",
        "saveUnattributedUniqueOutcomeEventsSent",
        "unattributedUniqueOutcomeEvents",
        "saveUniqueOutcomeNotifications",
        "eventParams",
        "onesignal_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# virtual methods
.method public abstract cleanCachedUniqueOutcomeEventNotifications(Ljava/lang/String;Ljava/lang/String;)V
.end method

.method public abstract getNotCachedUniqueOutcome(Ljava/lang/String;Ljava/util/List;)Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;)",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;"
        }
    .end annotation
.end method

.method public abstract getSavedOutcomeEvents()Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;",
            ">;"
        }
    .end annotation
.end method

.method public abstract getUnattributedUniqueOutcomeEventsSent()Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end method

.method public abstract removeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
.end method

.method public abstract requestMeasureOutcomeEvent(Ljava/lang/String;ILcom/onesignal/outcomes/domain/OSOutcomeEventParams;Lcom/onesignal/OneSignalApiResponseHandler;)V
.end method

.method public abstract saveOutcomeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
.end method

.method public abstract saveUnattributedUniqueOutcomeEventsSent(Ljava/util/Set;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation
.end method

.method public abstract saveUniqueOutcomeNotifications(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
.end method
