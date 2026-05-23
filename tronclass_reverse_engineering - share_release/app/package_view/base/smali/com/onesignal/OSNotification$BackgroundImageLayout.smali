.class public Lcom/onesignal/OSNotification$BackgroundImageLayout;
.super Ljava/lang/Object;
.source "OSNotification.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OSNotification;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "BackgroundImageLayout"
.end annotation


# instance fields
.field private bodyTextColor:Ljava/lang/String;

.field private image:Ljava/lang/String;

.field private titleTextColor:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 621
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic access$302(Lcom/onesignal/OSNotification$BackgroundImageLayout;Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    .line 621
    iput-object p1, p0, Lcom/onesignal/OSNotification$BackgroundImageLayout;->image:Ljava/lang/String;

    return-object p1
.end method

.method static synthetic access$402(Lcom/onesignal/OSNotification$BackgroundImageLayout;Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    .line 621
    iput-object p1, p0, Lcom/onesignal/OSNotification$BackgroundImageLayout;->titleTextColor:Ljava/lang/String;

    return-object p1
.end method

.method static synthetic access$502(Lcom/onesignal/OSNotification$BackgroundImageLayout;Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    .line 621
    iput-object p1, p0, Lcom/onesignal/OSNotification$BackgroundImageLayout;->bodyTextColor:Ljava/lang/String;

    return-object p1
.end method


# virtual methods
.method public getBodyTextColor()Ljava/lang/String;
    .locals 1

    .line 635
    iget-object v0, p0, Lcom/onesignal/OSNotification$BackgroundImageLayout;->bodyTextColor:Ljava/lang/String;

    return-object v0
.end method

.method public getImage()Ljava/lang/String;
    .locals 1

    .line 627
    iget-object v0, p0, Lcom/onesignal/OSNotification$BackgroundImageLayout;->image:Ljava/lang/String;

    return-object v0
.end method

.method public getTitleTextColor()Ljava/lang/String;
    .locals 1

    .line 631
    iget-object v0, p0, Lcom/onesignal/OSNotification$BackgroundImageLayout;->titleTextColor:Ljava/lang/String;

    return-object v0
.end method
