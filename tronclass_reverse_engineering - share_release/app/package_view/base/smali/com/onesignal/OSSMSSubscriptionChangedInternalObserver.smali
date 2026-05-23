.class Lcom/onesignal/OSSMSSubscriptionChangedInternalObserver;
.super Ljava/lang/Object;
.source "OSSMSSubscriptionChangedInternalObserver.java"


# direct methods
.method constructor <init>()V
    .locals 0

    .line 30
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static fireChangesToPublicObserver(Lcom/onesignal/OSSMSSubscriptionState;)V
    .locals 3

    .line 41
    new-instance v0, Lcom/onesignal/OSSMSSubscriptionStateChanges;

    sget-object v1, Lcom/onesignal/OneSignal;->lastSMSSubscriptionState:Lcom/onesignal/OSSMSSubscriptionState;

    .line 42
    invoke-virtual {p0}, Lcom/onesignal/OSSMSSubscriptionState;->clone()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Lcom/onesignal/OSSMSSubscriptionState;

    invoke-direct {v0, v1, v2}, Lcom/onesignal/OSSMSSubscriptionStateChanges;-><init>(Lcom/onesignal/OSSMSSubscriptionState;Lcom/onesignal/OSSMSSubscriptionState;)V

    .line 44
    invoke-static {}, Lcom/onesignal/OneSignal;->getSMSSubscriptionStateChangesObserver()Lcom/onesignal/OSObservable;

    move-result-object v1

    invoke-virtual {v1, v0}, Lcom/onesignal/OSObservable;->notifyChange(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 46
    invoke-virtual {p0}, Lcom/onesignal/OSSMSSubscriptionState;->clone()Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Lcom/onesignal/OSSMSSubscriptionState;

    sput-object p0, Lcom/onesignal/OneSignal;->lastSMSSubscriptionState:Lcom/onesignal/OSSMSSubscriptionState;

    .line 47
    sget-object p0, Lcom/onesignal/OneSignal;->lastSMSSubscriptionState:Lcom/onesignal/OSSMSSubscriptionState;

    invoke-virtual {p0}, Lcom/onesignal/OSSMSSubscriptionState;->persistAsFrom()V

    :cond_0
    return-void
.end method


# virtual methods
.method changed(Lcom/onesignal/OSSMSSubscriptionState;)V
    .locals 0

    .line 32
    invoke-static {p1}, Lcom/onesignal/OSSMSSubscriptionChangedInternalObserver;->fireChangesToPublicObserver(Lcom/onesignal/OSSMSSubscriptionState;)V

    return-void
.end method
