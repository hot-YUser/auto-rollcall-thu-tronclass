.class Lorg/apache/cordova/camera/CameraLauncher$1;
.super Ljava/lang/Object;
.source "CameraLauncher.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/camera/CameraLauncher;->onActivityResult(IILandroid/content/Intent;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/camera/CameraLauncher;

.field final synthetic val$finalDestType:I

.field final synthetic val$i:Landroid/content/Intent;


# direct methods
.method constructor <init>(Lorg/apache/cordova/camera/CameraLauncher;ILandroid/content/Intent;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 951
    iput-object p1, p0, Lorg/apache/cordova/camera/CameraLauncher$1;->this$0:Lorg/apache/cordova/camera/CameraLauncher;

    iput p2, p0, Lorg/apache/cordova/camera/CameraLauncher$1;->val$finalDestType:I

    iput-object p3, p0, Lorg/apache/cordova/camera/CameraLauncher$1;->val$i:Landroid/content/Intent;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 953
    iget-object v0, p0, Lorg/apache/cordova/camera/CameraLauncher$1;->this$0:Lorg/apache/cordova/camera/CameraLauncher;

    iget v1, p0, Lorg/apache/cordova/camera/CameraLauncher$1;->val$finalDestType:I

    iget-object v2, p0, Lorg/apache/cordova/camera/CameraLauncher$1;->val$i:Landroid/content/Intent;

    invoke-static {v0, v1, v2}, Lorg/apache/cordova/camera/CameraLauncher;->access$000(Lorg/apache/cordova/camera/CameraLauncher;ILandroid/content/Intent;)V

    return-void
.end method
