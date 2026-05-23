.class Lcom/onesignal/UserStateSMS;
.super Lcom/onesignal/UserState;
.source "UserStateSMS.java"


# static fields
.field private static final SMS:Ljava/lang/String; = "sms"


# direct methods
.method constructor <init>(Ljava/lang/String;Z)V
    .locals 2

    .line 8
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "sms"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {p0, p1, p2}, Lcom/onesignal/UserState;-><init>(Ljava/lang/String;Z)V

    return-void
.end method


# virtual methods
.method protected addDependFields()V
    .locals 0

    return-void
.end method

.method isSubscribed()Z
    .locals 1

    const/4 v0, 0x1

    return v0
.end method

.method newInstance(Ljava/lang/String;)Lcom/onesignal/UserState;
    .locals 2

    .line 13
    new-instance v0, Lcom/onesignal/UserStateSMS;

    const/4 v1, 0x0

    invoke-direct {v0, p1, v1}, Lcom/onesignal/UserStateSMS;-><init>(Ljava/lang/String;Z)V

    return-object v0
.end method
