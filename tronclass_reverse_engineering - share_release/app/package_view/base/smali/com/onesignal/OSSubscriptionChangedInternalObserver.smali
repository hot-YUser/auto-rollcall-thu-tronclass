.class Lcom/onesignal/OSSubscriptionChangedInternalObserver;
.super Ljava/lang/Object;
.source "OSSubscriptionChangedInternalObserver.java"


# direct methods
.method constructor <init>()V
    .locals 0

    .line 30
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static fireChangesToPublicObserver(Lcom/onesignal/OSSubscriptionState;)V
    .locals 3

    .line 42
    new-instance v0, Lcom/onesignal/OSSubscriptionStateChanges;

    sget-object v1, Lcom/onesignal/OneSignal;->lastSubscriptionState:Lcom/onesignal/OSSubscriptionState;

    invoke-virtual {p0}, Lcom/onesignal/OSSubscriptionState;->clone()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Lcom/onesignal/OSSubscriptionState;

    invoke-direct {v0, v1, v2}, Lcom/onesignal/OSSubscriptionStateChanges;-><init>(Lcom/onesignal/OSSubscriptionState;Lcom/onesignal/OSSubscriptionState;)V

    .line 44
    invoke-static {}, Lcom/onesignal/OneSignal;->getSubscriptionStateChangesObserver()Lcom/onesignal/OSObservable;

    move-result-object v1

    invoke-virtual {v1, v0}, Lcom/onesignal/OSObservable;->notifyChange(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 46
    invoke-virtual {p0}, Lcom/onesignal/OSSubscriptionState;->clone()Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Lcom/onesignal/OSSubscriptionState;

    sput-object p0, Lcom/onesignal/OneSignal;->lastSubscriptionState:Lcom/onesignal/OSSubscriptionState;

    .line 47
    sget-object p0, Lcom/onesignal/OneSignal;->lastSubscriptionState:Lcom/onesignal/OSSubscriptionState;

    invoke-virtual {p0}, Lcom/onesignal/OSSubscriptionState;->persistAsFrom()V

    :cond_0
    return-void
.end method


# virtual methods
.method public changed(Lcom/onesignal/OSSubscriptionState;)V
    .locals 0

    .line 33
    invoke-static {p1}, Lcom/onesignal/OSSubscriptionChangedInternalObserver;->fireChangesToPublicObserver(Lcom/onesignal/OSSubscriptionState;)V

    return-void
.end method
