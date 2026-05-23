.class Lcom/getcapacitor/plugin/PushNotifications$2;
.super Ljava/lang/Object;
.source "PushNotifications.java"

# interfaces
.implements Lcom/google/android/gms/tasks/OnFailureListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/PushNotifications;->register(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/PushNotifications;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/PushNotifications;)V
    .locals 0

    .line 89
    iput-object p1, p0, Lcom/getcapacitor/plugin/PushNotifications$2;->this$0:Lcom/getcapacitor/plugin/PushNotifications;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Ljava/lang/Exception;)V
    .locals 1

    .line 91
    iget-object v0, p0, Lcom/getcapacitor/plugin/PushNotifications$2;->this$0:Lcom/getcapacitor/plugin/PushNotifications;

    invoke-virtual {p1}, Ljava/lang/Exception;->getLocalizedMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Lcom/getcapacitor/plugin/PushNotifications;->sendError(Ljava/lang/String;)V

    return-void
.end method
