.class public Lcom/onesignal/OSNotification$ActionButton;
.super Ljava/lang/Object;
.source "OSNotification.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OSNotification;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "ActionButton"
.end annotation


# instance fields
.field private icon:Ljava/lang/String;

.field private id:Ljava/lang/String;

.field private text:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 577
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 585
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 586
    iput-object p1, p0, Lcom/onesignal/OSNotification$ActionButton;->id:Ljava/lang/String;

    .line 587
    iput-object p2, p0, Lcom/onesignal/OSNotification$ActionButton;->text:Ljava/lang/String;

    .line 588
    iput-object p3, p0, Lcom/onesignal/OSNotification$ActionButton;->icon:Ljava/lang/String;

    return-void
.end method

.method public constructor <init>(Lorg/json/JSONObject;)V
    .locals 1

    .line 579
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 580
    const-string v0, "id"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSNotification$ActionButton;->id:Ljava/lang/String;

    .line 581
    const-string v0, "text"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSNotification$ActionButton;->text:Ljava/lang/String;

    .line 582
    const-string v0, "icon"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/OSNotification$ActionButton;->icon:Ljava/lang/String;

    return-void
.end method

.method static synthetic access$002(Lcom/onesignal/OSNotification$ActionButton;Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    .line 572
    iput-object p1, p0, Lcom/onesignal/OSNotification$ActionButton;->id:Ljava/lang/String;

    return-object p1
.end method

.method static synthetic access$102(Lcom/onesignal/OSNotification$ActionButton;Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    .line 572
    iput-object p1, p0, Lcom/onesignal/OSNotification$ActionButton;->text:Ljava/lang/String;

    return-object p1
.end method

.method static synthetic access$202(Lcom/onesignal/OSNotification$ActionButton;Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    .line 572
    iput-object p1, p0, Lcom/onesignal/OSNotification$ActionButton;->icon:Ljava/lang/String;

    return-object p1
.end method


# virtual methods
.method public getIcon()Ljava/lang/String;
    .locals 1

    .line 614
    iget-object v0, p0, Lcom/onesignal/OSNotification$ActionButton;->icon:Ljava/lang/String;

    return-object v0
.end method

.method public getId()Ljava/lang/String;
    .locals 1

    .line 606
    iget-object v0, p0, Lcom/onesignal/OSNotification$ActionButton;->id:Ljava/lang/String;

    return-object v0
.end method

.method public getText()Ljava/lang/String;
    .locals 1

    .line 610
    iget-object v0, p0, Lcom/onesignal/OSNotification$ActionButton;->text:Ljava/lang/String;

    return-object v0
.end method

.method public toJSONObject()Lorg/json/JSONObject;
    .locals 3

    .line 592
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 594
    :try_start_0
    const-string v1, "id"

    iget-object v2, p0, Lcom/onesignal/OSNotification$ActionButton;->id:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 595
    const-string v1, "text"

    iget-object v2, p0, Lcom/onesignal/OSNotification$ActionButton;->text:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 596
    const-string v1, "icon"

    iget-object v2, p0, Lcom/onesignal/OSNotification$ActionButton;->icon:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception v1

    .line 599
    invoke-virtual {v1}, Ljava/lang/Throwable;->printStackTrace()V

    :goto_0
    return-object v0
.end method
