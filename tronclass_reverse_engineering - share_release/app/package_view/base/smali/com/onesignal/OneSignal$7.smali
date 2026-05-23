.class Lcom/onesignal/OneSignal$7;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Lcom/onesignal/OneSignalRemoteParams$Callback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->makeAndroidParamsRequest(Ljava/lang/String;Ljava/lang/String;Z)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$queuePushRegistration:Z


# direct methods
.method constructor <init>(Z)V
    .locals 0

    .line 1114
    iput-boolean p1, p0, Lcom/onesignal/OneSignal$7;->val$queuePushRegistration:Z

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public complete(Lcom/onesignal/OneSignalRemoteParams$Params;)V
    .locals 4

    const/4 v0, 0x0

    .line 1117
    invoke-static {v0}, Lcom/onesignal/OneSignal;->access$1002(Z)Z

    .line 1118
    iget-object v0, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->googleProjectNumber:Ljava/lang/String;

    if-eqz v0, :cond_0

    .line 1119
    iget-object v0, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->googleProjectNumber:Ljava/lang/String;

    sput-object v0, Lcom/onesignal/OneSignal;->googleProjectNumber:Ljava/lang/String;

    .line 1121
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->access$1300()Lcom/onesignal/OSRemoteParamController;

    move-result-object v0

    invoke-static {}, Lcom/onesignal/OneSignal;->access$1100()Lcom/onesignal/influence/data/OSTrackerFactory;

    move-result-object v1

    invoke-static {}, Lcom/onesignal/OneSignal;->access$1200()Lcom/onesignal/OSSharedPreferences;

    move-result-object v2

    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v3

    invoke-virtual {v0, p1, v1, v2, v3}, Lcom/onesignal/OSRemoteParamController;->saveRemoteParams(Lcom/onesignal/OneSignalRemoteParams$Params;Lcom/onesignal/influence/data/OSTrackerFactory;Lcom/onesignal/OSSharedPreferences;Lcom/onesignal/OSLogger;)V

    .line 1122
    invoke-static {}, Lcom/onesignal/OneSignal;->onRemoteParamSet()V

    .line 1124
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    iget-object p1, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->notificationChannels:Lorg/json/JSONArray;

    invoke-static {v0, p1}, Lcom/onesignal/NotificationChannelManager;->processChannelList(Landroid/content/Context;Lorg/json/JSONArray;)V

    .line 1129
    iget-boolean p1, p0, Lcom/onesignal/OneSignal$7;->val$queuePushRegistration:Z

    if-eqz p1, :cond_1

    .line 1130
    invoke-static {}, Lcom/onesignal/OneSignal;->access$1400()V

    :cond_1
    return-void
.end method
