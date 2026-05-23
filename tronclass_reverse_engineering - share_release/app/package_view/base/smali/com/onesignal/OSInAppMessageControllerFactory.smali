.class Lcom/onesignal/OSInAppMessageControllerFactory;
.super Ljava/lang/Object;
.source "OSInAppMessageControllerFactory.java"


# static fields
.field private static final LOCK:Ljava/lang/Object;


# instance fields
.field private controller:Lcom/onesignal/OSInAppMessageController;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 36
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    sput-object v0, Lcom/onesignal/OSInAppMessageControllerFactory;->LOCK:Ljava/lang/Object;

    return-void
.end method

.method constructor <init>()V
    .locals 0

    .line 34
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public getController(Lcom/onesignal/OneSignalDbHelper;Lcom/onesignal/OSTaskController;Lcom/onesignal/OSLogger;Lcom/onesignal/OSSharedPreferences;Lcom/onesignal/language/LanguageContext;)Lcom/onesignal/OSInAppMessageController;
    .locals 8

    .line 42
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageControllerFactory;->controller:Lcom/onesignal/OSInAppMessageController;

    if-nez v0, :cond_1

    .line 43
    sget-object v0, Lcom/onesignal/OSInAppMessageControllerFactory;->LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 44
    :try_start_0
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageControllerFactory;->controller:Lcom/onesignal/OSInAppMessageController;

    if-nez v1, :cond_0

    .line 49
    new-instance v1, Lcom/onesignal/OSInAppMessageController;

    move-object v2, v1

    move-object v3, p1

    move-object v4, p2

    move-object v5, p3

    move-object v6, p4

    move-object v7, p5

    invoke-direct/range {v2 .. v7}, Lcom/onesignal/OSInAppMessageController;-><init>(Lcom/onesignal/OneSignalDbHelper;Lcom/onesignal/OSTaskController;Lcom/onesignal/OSLogger;Lcom/onesignal/OSSharedPreferences;Lcom/onesignal/language/LanguageContext;)V

    iput-object v1, p0, Lcom/onesignal/OSInAppMessageControllerFactory;->controller:Lcom/onesignal/OSInAppMessageController;

    .line 51
    :cond_0
    monitor-exit v0

    goto :goto_0

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1

    .line 53
    :cond_1
    :goto_0
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageControllerFactory;->controller:Lcom/onesignal/OSInAppMessageController;

    return-object p1
.end method
