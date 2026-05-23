.class Lcom/onesignal/TrackAmazonPurchase;
.super Ljava/lang/Object;
.source "TrackAmazonPurchase.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/TrackAmazonPurchase$OSPurchasingListener;
    }
.end annotation


# instance fields
.field private canTrack:Z

.field private context:Landroid/content/Context;

.field private listenerHandlerField:Ljava/lang/reflect/Field;

.field private listenerHandlerObject:Ljava/lang/Object;

.field private osPurchasingListener:Lcom/onesignal/TrackAmazonPurchase$OSPurchasingListener;

.field private registerListenerOnMainThread:Z


# direct methods
.method constructor <init>(Landroid/content/Context;)V
    .locals 5

    .line 65
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 55
    iput-boolean v0, p0, Lcom/onesignal/TrackAmazonPurchase;->canTrack:Z

    .line 60
    iput-boolean v0, p0, Lcom/onesignal/TrackAmazonPurchase;->registerListenerOnMainThread:Z

    .line 66
    iput-object p1, p0, Lcom/onesignal/TrackAmazonPurchase;->context:Landroid/content/Context;

    .line 70
    :try_start_0
    const-string p1, "com.amazon.device.iap.internal.d"

    invoke-static {p1}, Ljava/lang/Class;->forName(Ljava/lang/String;)Ljava/lang/Class;

    move-result-object p1
    :try_end_0
    .catch Ljava/lang/ClassNotFoundException; {:try_start_0 .. :try_end_0} :catch_6
    .catch Ljava/lang/IllegalAccessException; {:try_start_0 .. :try_end_0} :catch_5
    .catch Ljava/lang/reflect/InvocationTargetException; {:try_start_0 .. :try_end_0} :catch_4
    .catch Ljava/lang/NoSuchMethodException; {:try_start_0 .. :try_end_0} :catch_3
    .catch Ljava/lang/NoSuchFieldException; {:try_start_0 .. :try_end_0} :catch_2
    .catch Ljava/lang/ClassCastException; {:try_start_0 .. :try_end_0} :catch_1

    const/4 v1, 0x1

    const/4 v2, 0x0

    .line 74
    :try_start_1
    const-string v3, "d"

    new-array v4, v0, [Ljava/lang/Class;

    invoke-virtual {p1, v3, v4}, Ljava/lang/Class;->getMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v3

    new-array v4, v0, [Ljava/lang/Object;

    invoke-virtual {v3, v2, v4}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    iput-object v3, p0, Lcom/onesignal/TrackAmazonPurchase;->listenerHandlerObject:Ljava/lang/Object;
    :try_end_1
    .catch Ljava/lang/NullPointerException; {:try_start_1 .. :try_end_1} :catch_0
    .catch Ljava/lang/ClassNotFoundException; {:try_start_1 .. :try_end_1} :catch_6
    .catch Ljava/lang/IllegalAccessException; {:try_start_1 .. :try_end_1} :catch_5
    .catch Ljava/lang/reflect/InvocationTargetException; {:try_start_1 .. :try_end_1} :catch_4
    .catch Ljava/lang/NoSuchMethodException; {:try_start_1 .. :try_end_1} :catch_3
    .catch Ljava/lang/NoSuchFieldException; {:try_start_1 .. :try_end_1} :catch_2
    .catch Ljava/lang/ClassCastException; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_0

    .line 77
    :catch_0
    :try_start_2
    const-string v3, "e"

    new-array v4, v0, [Ljava/lang/Class;

    invoke-virtual {p1, v3, v4}, Ljava/lang/Class;->getMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v3

    new-array v0, v0, [Ljava/lang/Object;

    invoke-virtual {v3, v2, v0}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/TrackAmazonPurchase;->listenerHandlerObject:Ljava/lang/Object;

    .line 78
    iput-boolean v1, p0, Lcom/onesignal/TrackAmazonPurchase;->registerListenerOnMainThread:Z

    .line 81
    :goto_0
    const-string v0, "f"

    invoke-virtual {p1, v0}, Ljava/lang/Class;->getDeclaredField(Ljava/lang/String;)Ljava/lang/reflect/Field;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/TrackAmazonPurchase;->listenerHandlerField:Ljava/lang/reflect/Field;

    .line 82
    invoke-virtual {p1, v1}, Ljava/lang/reflect/Field;->setAccessible(Z)V

    .line 84
    new-instance p1, Lcom/onesignal/TrackAmazonPurchase$OSPurchasingListener;

    invoke-direct {p1, p0, v2}, Lcom/onesignal/TrackAmazonPurchase$OSPurchasingListener;-><init>(Lcom/onesignal/TrackAmazonPurchase;Lcom/onesignal/TrackAmazonPurchase$1;)V

    iput-object p1, p0, Lcom/onesignal/TrackAmazonPurchase;->osPurchasingListener:Lcom/onesignal/TrackAmazonPurchase$OSPurchasingListener;

    .line 85
    iget-object v0, p0, Lcom/onesignal/TrackAmazonPurchase;->listenerHandlerField:Ljava/lang/reflect/Field;

    iget-object v2, p0, Lcom/onesignal/TrackAmazonPurchase;->listenerHandlerObject:Ljava/lang/Object;

    invoke-virtual {v0, v2}, Ljava/lang/reflect/Field;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/amazon/device/iap/PurchasingListener;

    iput-object v0, p1, Lcom/onesignal/TrackAmazonPurchase$OSPurchasingListener;->orgPurchasingListener:Lcom/amazon/device/iap/PurchasingListener;

    .line 87
    iput-boolean v1, p0, Lcom/onesignal/TrackAmazonPurchase;->canTrack:Z

    .line 88
    invoke-direct {p0}, Lcom/onesignal/TrackAmazonPurchase;->setListener()V
    :try_end_2
    .catch Ljava/lang/ClassNotFoundException; {:try_start_2 .. :try_end_2} :catch_6
    .catch Ljava/lang/IllegalAccessException; {:try_start_2 .. :try_end_2} :catch_5
    .catch Ljava/lang/reflect/InvocationTargetException; {:try_start_2 .. :try_end_2} :catch_4
    .catch Ljava/lang/NoSuchMethodException; {:try_start_2 .. :try_end_2} :catch_3
    .catch Ljava/lang/NoSuchFieldException; {:try_start_2 .. :try_end_2} :catch_2
    .catch Ljava/lang/ClassCastException; {:try_start_2 .. :try_end_2} :catch_1

    goto :goto_1

    :catch_1
    move-exception p1

    .line 101
    invoke-static {p1}, Lcom/onesignal/TrackAmazonPurchase;->logAmazonIAPListenerError(Ljava/lang/Exception;)V

    goto :goto_1

    :catch_2
    move-exception p1

    .line 99
    invoke-static {p1}, Lcom/onesignal/TrackAmazonPurchase;->logAmazonIAPListenerError(Ljava/lang/Exception;)V

    goto :goto_1

    :catch_3
    move-exception p1

    .line 97
    invoke-static {p1}, Lcom/onesignal/TrackAmazonPurchase;->logAmazonIAPListenerError(Ljava/lang/Exception;)V

    goto :goto_1

    :catch_4
    move-exception p1

    .line 95
    invoke-static {p1}, Lcom/onesignal/TrackAmazonPurchase;->logAmazonIAPListenerError(Ljava/lang/Exception;)V

    goto :goto_1

    :catch_5
    move-exception p1

    .line 93
    invoke-static {p1}, Lcom/onesignal/TrackAmazonPurchase;->logAmazonIAPListenerError(Ljava/lang/Exception;)V

    goto :goto_1

    :catch_6
    move-exception p1

    .line 91
    invoke-static {p1}, Lcom/onesignal/TrackAmazonPurchase;->logAmazonIAPListenerError(Ljava/lang/Exception;)V

    :goto_1
    return-void
.end method

.method static synthetic access$100(Lcom/onesignal/TrackAmazonPurchase;)Landroid/content/Context;
    .locals 0

    .line 51
    iget-object p0, p0, Lcom/onesignal/TrackAmazonPurchase;->context:Landroid/content/Context;

    return-object p0
.end method

.method static synthetic access$200(Lcom/onesignal/TrackAmazonPurchase;)Lcom/onesignal/TrackAmazonPurchase$OSPurchasingListener;
    .locals 0

    .line 51
    iget-object p0, p0, Lcom/onesignal/TrackAmazonPurchase;->osPurchasingListener:Lcom/onesignal/TrackAmazonPurchase$OSPurchasingListener;

    return-object p0
.end method

.method private static logAmazonIAPListenerError(Ljava/lang/Exception;)V
    .locals 2

    .line 106
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "Error adding Amazon IAP listener."

    invoke-static {v0, v1, p0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 107
    invoke-virtual {p0}, Ljava/lang/Exception;->printStackTrace()V

    return-void
.end method

.method private setListener()V
    .locals 2

    .line 111
    iget-boolean v0, p0, Lcom/onesignal/TrackAmazonPurchase;->registerListenerOnMainThread:Z

    if-eqz v0, :cond_0

    .line 112
    new-instance v0, Lcom/onesignal/TrackAmazonPurchase$1;

    invoke-direct {v0, p0}, Lcom/onesignal/TrackAmazonPurchase$1;-><init>(Lcom/onesignal/TrackAmazonPurchase;)V

    invoke-static {v0}, Lcom/onesignal/OSUtils;->runOnMainUIThread(Ljava/lang/Runnable;)V

    goto :goto_0

    .line 119
    :cond_0
    iget-object v0, p0, Lcom/onesignal/TrackAmazonPurchase;->context:Landroid/content/Context;

    iget-object v1, p0, Lcom/onesignal/TrackAmazonPurchase;->osPurchasingListener:Lcom/onesignal/TrackAmazonPurchase$OSPurchasingListener;

    invoke-static {v0, v1}, Lcom/amazon/device/iap/PurchasingService;->registerListener(Landroid/content/Context;Lcom/amazon/device/iap/PurchasingListener;)V

    :goto_0
    return-void
.end method


# virtual methods
.method checkListener()V
    .locals 2

    .line 124
    iget-boolean v0, p0, Lcom/onesignal/TrackAmazonPurchase;->canTrack:Z

    if-nez v0, :cond_0

    return-void

    .line 127
    :cond_0
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/TrackAmazonPurchase;->listenerHandlerField:Ljava/lang/reflect/Field;

    iget-object v1, p0, Lcom/onesignal/TrackAmazonPurchase;->listenerHandlerObject:Ljava/lang/Object;

    invoke-virtual {v0, v1}, Ljava/lang/reflect/Field;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/amazon/device/iap/PurchasingListener;

    .line 128
    iget-object v1, p0, Lcom/onesignal/TrackAmazonPurchase;->osPurchasingListener:Lcom/onesignal/TrackAmazonPurchase$OSPurchasingListener;

    if-eq v0, v1, :cond_1

    .line 129
    iput-object v0, v1, Lcom/onesignal/TrackAmazonPurchase$OSPurchasingListener;->orgPurchasingListener:Lcom/amazon/device/iap/PurchasingListener;

    .line 130
    invoke-direct {p0}, Lcom/onesignal/TrackAmazonPurchase;->setListener()V
    :try_end_0
    .catch Ljava/lang/IllegalAccessException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 133
    invoke-virtual {v0}, Ljava/lang/IllegalAccessException;->printStackTrace()V

    :cond_1
    :goto_0
    return-void
.end method
