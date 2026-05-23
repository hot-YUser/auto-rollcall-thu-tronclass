.class Lcom/onesignal/OneSignal$25;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->fireNotificationOpenedHandler(Lcom/onesignal/OSNotificationOpenedResult;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$openedResult:Lcom/onesignal/OSNotificationOpenedResult;


# direct methods
.method constructor <init>(Lcom/onesignal/OSNotificationOpenedResult;)V
    .locals 0

    .line 2349
    iput-object p1, p0, Lcom/onesignal/OneSignal$25;->val$openedResult:Lcom/onesignal/OSNotificationOpenedResult;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 2352
    sget-object v0, Lcom/onesignal/OneSignal;->notificationOpenedHandler:Lcom/onesignal/OneSignal$OSNotificationOpenedHandler;

    iget-object v1, p0, Lcom/onesignal/OneSignal$25;->val$openedResult:Lcom/onesignal/OSNotificationOpenedResult;

    invoke-interface {v0, v1}, Lcom/onesignal/OneSignal$OSNotificationOpenedHandler;->notificationOpened(Lcom/onesignal/OSNotificationOpenedResult;)V

    return-void
.end method
