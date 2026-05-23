.class Lcom/onesignal/PermissionsActivity$2;
.super Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;
.source "PermissionsActivity.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/PermissionsActivity;->startPrompt(ZLjava/lang/String;Ljava/lang/String;Ljava/lang/Class;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$androidPermissionString:Ljava/lang/String;

.field final synthetic val$callbackClass:Ljava/lang/Class;

.field final synthetic val$permissionRequestType:Ljava/lang/String;


# direct methods
.method constructor <init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Class;)V
    .locals 0

    .line 180
    iput-object p1, p0, Lcom/onesignal/PermissionsActivity$2;->val$permissionRequestType:Ljava/lang/String;

    iput-object p2, p0, Lcom/onesignal/PermissionsActivity$2;->val$androidPermissionString:Ljava/lang/String;

    iput-object p3, p0, Lcom/onesignal/PermissionsActivity$2;->val$callbackClass:Ljava/lang/Class;

    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;-><init>()V

    return-void
.end method


# virtual methods
.method public available(Landroid/app/Activity;)V
    .locals 4

    .line 183
    invoke-virtual {p1}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v0

    const-class v1, Lcom/onesignal/PermissionsActivity;

    invoke-virtual {v0, v1}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 184
    new-instance v0, Landroid/content/Intent;

    const-class v1, Lcom/onesignal/PermissionsActivity;

    invoke-direct {v0, p1, v1}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    const/high16 v1, 0x20000

    .line 185
    invoke-virtual {v0, v1}, Landroid/content/Intent;->setFlags(I)Landroid/content/Intent;

    .line 186
    const-string v1, "INTENT_EXTRA_PERMISSION_TYPE"

    iget-object v2, p0, Lcom/onesignal/PermissionsActivity$2;->val$permissionRequestType:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/lang/String;)Landroid/content/Intent;

    move-result-object v1

    const-string v2, "INTENT_EXTRA_ANDROID_PERMISSION_STRING"

    iget-object v3, p0, Lcom/onesignal/PermissionsActivity$2;->val$androidPermissionString:Ljava/lang/String;

    .line 187
    invoke-virtual {v1, v2, v3}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/lang/String;)Landroid/content/Intent;

    move-result-object v1

    iget-object v2, p0, Lcom/onesignal/PermissionsActivity$2;->val$callbackClass:Ljava/lang/Class;

    .line 188
    invoke-virtual {v2}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v2

    const-string v3, "INTENT_EXTRA_CALLBACK_CLASS"

    invoke-virtual {v1, v3, v2}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/lang/String;)Landroid/content/Intent;

    .line 189
    invoke-virtual {p1, v0}, Landroid/app/Activity;->startActivity(Landroid/content/Intent;)V

    .line 190
    sget v0, Lcom/onesignal/R$anim;->onesignal_fade_in:I

    sget v1, Lcom/onesignal/R$anim;->onesignal_fade_out:I

    invoke-virtual {p1, v0, v1}, Landroid/app/Activity;->overridePendingTransition(II)V

    :cond_0
    return-void
.end method
