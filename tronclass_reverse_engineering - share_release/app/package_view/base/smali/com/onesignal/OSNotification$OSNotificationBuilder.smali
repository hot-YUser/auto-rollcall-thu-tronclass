.class public Lcom/onesignal/OSNotification$OSNotificationBuilder;
.super Ljava/lang/Object;
.source "OSNotification.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OSNotification;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "OSNotificationBuilder"
.end annotation


# instance fields
.field private actionButtons:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Lcom/onesignal/OSNotification$ActionButton;",
            ">;"
        }
    .end annotation
.end field

.field private additionalData:Lorg/json/JSONObject;

.field private androidNotificationId:I

.field private backgroundImageLayout:Lcom/onesignal/OSNotification$BackgroundImageLayout;

.field private bigPicture:Ljava/lang/String;

.field private body:Ljava/lang/String;

.field private collapseId:Ljava/lang/String;

.field private fromProjectNumber:Ljava/lang/String;

.field private groupKey:Ljava/lang/String;

.field private groupMessage:Ljava/lang/String;

.field private groupedNotifications:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Lcom/onesignal/OSNotification;",
            ">;"
        }
    .end annotation
.end field

.field private largeIcon:Ljava/lang/String;

.field private launchURL:Ljava/lang/String;

.field private ledColor:Ljava/lang/String;

.field private lockScreenVisibility:I

.field private notificationExtender:Landroidx/core/app/NotificationCompat$Extender;

.field private notificationId:Ljava/lang/String;

.field private priority:I

.field private rawPayload:Ljava/lang/String;

.field private sentTime:J

.field private smallIcon:Ljava/lang/String;

.field private smallIconAccentColor:Ljava/lang/String;

.field private sound:Ljava/lang/String;

.field private templateId:Ljava/lang/String;

.field private templateName:Ljava/lang/String;

.field private title:Ljava/lang/String;

.field private ttl:I


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 669
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x1

    .line 656
    iput v0, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->lockScreenVisibility:I

    return-void
.end method


# virtual methods
.method public build()Lcom/onesignal/OSNotification;
    .locals 3

    .line 808
    new-instance v0, Lcom/onesignal/OSNotification;

    invoke-direct {v0}, Lcom/onesignal/OSNotification;-><init>()V

    .line 809
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->notificationExtender:Landroidx/core/app/NotificationCompat$Extender;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setNotificationExtender(Landroidx/core/app/NotificationCompat$Extender;)V

    .line 810
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->groupedNotifications:Ljava/util/List;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setGroupedNotifications(Ljava/util/List;)V

    .line 811
    iget v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->androidNotificationId:I

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setAndroidNotificationId(I)V

    .line 812
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->notificationId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setNotificationId(Ljava/lang/String;)V

    .line 813
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->templateName:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setTemplateName(Ljava/lang/String;)V

    .line 814
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->templateId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setTemplateId(Ljava/lang/String;)V

    .line 815
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->title:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setTitle(Ljava/lang/String;)V

    .line 816
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->body:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setBody(Ljava/lang/String;)V

    .line 817
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->additionalData:Lorg/json/JSONObject;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setAdditionalData(Lorg/json/JSONObject;)V

    .line 818
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->smallIcon:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setSmallIcon(Ljava/lang/String;)V

    .line 819
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->largeIcon:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setLargeIcon(Ljava/lang/String;)V

    .line 820
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->bigPicture:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setBigPicture(Ljava/lang/String;)V

    .line 821
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->smallIconAccentColor:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setSmallIconAccentColor(Ljava/lang/String;)V

    .line 822
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->launchURL:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setLaunchURL(Ljava/lang/String;)V

    .line 823
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->sound:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setSound(Ljava/lang/String;)V

    .line 824
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->ledColor:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setLedColor(Ljava/lang/String;)V

    .line 825
    iget v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->lockScreenVisibility:I

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setLockScreenVisibility(I)V

    .line 826
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->groupKey:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setGroupKey(Ljava/lang/String;)V

    .line 827
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->groupMessage:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setGroupMessage(Ljava/lang/String;)V

    .line 828
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->actionButtons:Ljava/util/List;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setActionButtons(Ljava/util/List;)V

    .line 829
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->fromProjectNumber:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setFromProjectNumber(Ljava/lang/String;)V

    .line 830
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->backgroundImageLayout:Lcom/onesignal/OSNotification$BackgroundImageLayout;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setBackgroundImageLayout(Lcom/onesignal/OSNotification$BackgroundImageLayout;)V

    .line 831
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->collapseId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setCollapseId(Ljava/lang/String;)V

    .line 832
    iget v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->priority:I

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setPriority(I)V

    .line 833
    iget-object v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->rawPayload:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotification;->setRawPayload(Ljava/lang/String;)V

    .line 834
    iget-wide v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->sentTime:J

    invoke-static {v0, v1, v2}, Lcom/onesignal/OSNotification;->access$600(Lcom/onesignal/OSNotification;J)V

    .line 835
    iget v1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->ttl:I

    invoke-static {v0, v1}, Lcom/onesignal/OSNotification;->access$700(Lcom/onesignal/OSNotification;I)V

    return-object v0
.end method

.method public setActionButtons(Ljava/util/List;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/onesignal/OSNotification$ActionButton;",
            ">;)",
            "Lcom/onesignal/OSNotification$OSNotificationBuilder;"
        }
    .end annotation

    .line 768
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->actionButtons:Ljava/util/List;

    return-object p0
.end method

.method public setAdditionalData(Lorg/json/JSONObject;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 713
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->additionalData:Lorg/json/JSONObject;

    return-object p0
.end method

.method public setAndroidNotificationId(I)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 683
    iput p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->androidNotificationId:I

    return-object p0
.end method

.method public setBackgroundImageLayout(Lcom/onesignal/OSNotification$BackgroundImageLayout;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 778
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->backgroundImageLayout:Lcom/onesignal/OSNotification$BackgroundImageLayout;

    return-object p0
.end method

.method public setBigPicture(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 728
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->bigPicture:Ljava/lang/String;

    return-object p0
.end method

.method public setBody(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 708
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->body:Ljava/lang/String;

    return-object p0
.end method

.method public setCollapseId(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 783
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->collapseId:Ljava/lang/String;

    return-object p0
.end method

.method public setFromProjectNumber(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 773
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->fromProjectNumber:Ljava/lang/String;

    return-object p0
.end method

.method public setGroupKey(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 758
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->groupKey:Ljava/lang/String;

    return-object p0
.end method

.method public setGroupMessage(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 763
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->groupMessage:Ljava/lang/String;

    return-object p0
.end method

.method public setGroupedNotifications(Ljava/util/List;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/onesignal/OSNotification;",
            ">;)",
            "Lcom/onesignal/OSNotification$OSNotificationBuilder;"
        }
    .end annotation

    .line 678
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->groupedNotifications:Ljava/util/List;

    return-object p0
.end method

.method public setLargeIcon(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 723
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->largeIcon:Ljava/lang/String;

    return-object p0
.end method

.method public setLaunchURL(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 738
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->launchURL:Ljava/lang/String;

    return-object p0
.end method

.method public setLedColor(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 748
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->ledColor:Ljava/lang/String;

    return-object p0
.end method

.method public setLockScreenVisibility(I)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 753
    iput p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->lockScreenVisibility:I

    return-object p0
.end method

.method public setNotificationExtender(Landroidx/core/app/NotificationCompat$Extender;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 673
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->notificationExtender:Landroidx/core/app/NotificationCompat$Extender;

    return-object p0
.end method

.method public setNotificationId(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 688
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->notificationId:Ljava/lang/String;

    return-object p0
.end method

.method public setPriority(I)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 788
    iput p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->priority:I

    return-object p0
.end method

.method public setRawPayload(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 793
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->rawPayload:Ljava/lang/String;

    return-object p0
.end method

.method public setSenttime(J)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 798
    iput-wide p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->sentTime:J

    return-object p0
.end method

.method public setSmallIcon(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 718
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->smallIcon:Ljava/lang/String;

    return-object p0
.end method

.method public setSmallIconAccentColor(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 733
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->smallIconAccentColor:Ljava/lang/String;

    return-object p0
.end method

.method public setSound(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 743
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->sound:Ljava/lang/String;

    return-object p0
.end method

.method public setTTL(I)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 803
    iput p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->ttl:I

    return-object p0
.end method

.method public setTemplateId(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 698
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->templateId:Ljava/lang/String;

    return-object p0
.end method

.method public setTemplateName(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 693
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->templateName:Ljava/lang/String;

    return-object p0
.end method

.method public setTitle(Ljava/lang/String;)Lcom/onesignal/OSNotification$OSNotificationBuilder;
    .locals 0

    .line 703
    iput-object p1, p0, Lcom/onesignal/OSNotification$OSNotificationBuilder;->title:Ljava/lang/String;

    return-object p0
.end method
