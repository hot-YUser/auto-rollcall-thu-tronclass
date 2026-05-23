.class Lcom/getcapacitor/plugin/PushNotifications$1;
.super Ljava/lang/Object;
.source "PushNotifications.java"

# interfaces
.implements Lcom/google/android/gms/tasks/OnSuccessListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/PushNotifications;->register(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lcom/google/android/gms/tasks/OnSuccessListener<",
        "Lcom/google/firebase/iid/InstanceIdResult;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/PushNotifications;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/PushNotifications;)V
    .locals 0

    .line 83
    iput-object p1, p0, Lcom/getcapacitor/plugin/PushNotifications$1;->this$0:Lcom/getcapacitor/plugin/PushNotifications;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onSuccess(Lcom/google/firebase/iid/InstanceIdResult;)V
    .locals 1

    .line 86
    iget-object v0, p0, Lcom/getcapacitor/plugin/PushNotifications$1;->this$0:Lcom/getcapacitor/plugin/PushNotifications;

    invoke-interface {p1}, Lcom/google/firebase/iid/InstanceIdResult;->getToken()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Lcom/getcapacitor/plugin/PushNotifications;->sendToken(Ljava/lang/String;)V

    return-void
.end method

.method public bridge synthetic onSuccess(Ljava/lang/Object;)V
    .locals 0

    .line 83
    check-cast p1, Lcom/google/firebase/iid/InstanceIdResult;

    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/PushNotifications$1;->onSuccess(Lcom/google/firebase/iid/InstanceIdResult;)V

    return-void
.end method
