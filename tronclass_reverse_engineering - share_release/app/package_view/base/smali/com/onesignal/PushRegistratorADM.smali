.class public Lcom/onesignal/PushRegistratorADM;
.super Ljava/lang/Object;
.source "PushRegistratorADM.java"

# interfaces
.implements Lcom/onesignal/PushRegistrator;


# static fields
.field private static callbackSuccessful:Z = false

.field private static registeredCallback:Lcom/onesignal/PushRegistrator$RegisteredHandler;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 34
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic access$000()Z
    .locals 1

    .line 34
    sget-boolean v0, Lcom/onesignal/PushRegistratorADM;->callbackSuccessful:Z

    return v0
.end method

.method public static fireCallback(Ljava/lang/String;)V
    .locals 2

    .line 66
    sget-object v0, Lcom/onesignal/PushRegistratorADM;->registeredCallback:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    if-nez v0, :cond_0

    return-void

    :cond_0
    const/4 v1, 0x1

    .line 68
    sput-boolean v1, Lcom/onesignal/PushRegistratorADM;->callbackSuccessful:Z

    .line 69
    invoke-interface {v0, p0, v1}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V

    return-void
.end method


# virtual methods
.method public registerForPush(Landroid/content/Context;Ljava/lang/String;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V
    .locals 1

    .line 41
    sput-object p3, Lcom/onesignal/PushRegistratorADM;->registeredCallback:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    .line 42
    new-instance p2, Ljava/lang/Thread;

    new-instance v0, Lcom/onesignal/PushRegistratorADM$1;

    invoke-direct {v0, p0, p1, p3}, Lcom/onesignal/PushRegistratorADM$1;-><init>(Lcom/onesignal/PushRegistratorADM;Landroid/content/Context;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V

    invoke-direct {p2, v0}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;)V

    .line 62
    invoke-virtual {p2}, Ljava/lang/Thread;->start()V

    return-void
.end method
