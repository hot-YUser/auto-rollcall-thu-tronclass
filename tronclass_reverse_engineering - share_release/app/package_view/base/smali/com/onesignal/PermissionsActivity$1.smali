.class Lcom/onesignal/PermissionsActivity$1;
.super Ljava/lang/Object;
.source "PermissionsActivity.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/PermissionsActivity;->onRequestPermissionsResult(I[Ljava/lang/String;[I)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/PermissionsActivity;

.field final synthetic val$grantResults:[I


# direct methods
.method constructor <init>(Lcom/onesignal/PermissionsActivity;[I)V
    .locals 0

    .line 139
    iput-object p1, p0, Lcom/onesignal/PermissionsActivity$1;->this$0:Lcom/onesignal/PermissionsActivity;

    iput-object p2, p0, Lcom/onesignal/PermissionsActivity$1;->val$grantResults:[I

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 142
    iget-object v0, p0, Lcom/onesignal/PermissionsActivity$1;->val$grantResults:[I

    array-length v1, v0

    const/4 v2, 0x0

    if-lez v1, :cond_0

    aget v0, v0, v2

    if-nez v0, :cond_0

    const/4 v2, 0x1

    .line 144
    :cond_0
    invoke-static {}, Lcom/onesignal/PermissionsActivity;->access$100()Ljava/util/HashMap;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/PermissionsActivity$1;->this$0:Lcom/onesignal/PermissionsActivity;

    invoke-static {v1}, Lcom/onesignal/PermissionsActivity;->access$000(Lcom/onesignal/PermissionsActivity;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/PermissionsActivity$PermissionCallback;

    if-eqz v0, :cond_2

    if-eqz v2, :cond_1

    .line 149
    invoke-interface {v0}, Lcom/onesignal/PermissionsActivity$PermissionCallback;->onAccept()V

    goto :goto_0

    .line 151
    :cond_1
    iget-object v1, p0, Lcom/onesignal/PermissionsActivity$1;->this$0:Lcom/onesignal/PermissionsActivity;

    invoke-static {v1}, Lcom/onesignal/PermissionsActivity;->access$200(Lcom/onesignal/PermissionsActivity;)Z

    move-result v1

    invoke-interface {v0, v1}, Lcom/onesignal/PermissionsActivity$PermissionCallback;->onReject(Z)V

    :goto_0
    return-void

    .line 146
    :cond_2
    new-instance v0, Ljava/lang/RuntimeException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Missing handler for permissionRequestType: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/onesignal/PermissionsActivity$1;->this$0:Lcom/onesignal/PermissionsActivity;

    invoke-static {v2}, Lcom/onesignal/PermissionsActivity;->access$000(Lcom/onesignal/PermissionsActivity;)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/String;)V

    throw v0
.end method
