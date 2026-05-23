.class Lorg/apache/cordova/mediacapture/Capture$1;
.super Ljava/lang/Object;
.source "Capture.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/mediacapture/Capture;->onActivityResult(IILandroid/content/Intent;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/mediacapture/Capture;

.field final synthetic val$intent:Landroid/content/Intent;

.field final synthetic val$req:Lorg/apache/cordova/mediacapture/PendingRequests$Request;


# direct methods
.method constructor <init>(Lorg/apache/cordova/mediacapture/Capture;Lorg/apache/cordova/mediacapture/PendingRequests$Request;Landroid/content/Intent;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 327
    iput-object p1, p0, Lorg/apache/cordova/mediacapture/Capture$1;->this$0:Lorg/apache/cordova/mediacapture/Capture;

    iput-object p2, p0, Lorg/apache/cordova/mediacapture/Capture$1;->val$req:Lorg/apache/cordova/mediacapture/PendingRequests$Request;

    iput-object p3, p0, Lorg/apache/cordova/mediacapture/Capture$1;->val$intent:Landroid/content/Intent;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 330
    iget-object v0, p0, Lorg/apache/cordova/mediacapture/Capture$1;->val$req:Lorg/apache/cordova/mediacapture/PendingRequests$Request;

    iget v0, v0, Lorg/apache/cordova/mediacapture/PendingRequests$Request;->action:I

    if-eqz v0, :cond_2

    const/4 v1, 0x1

    if-eq v0, v1, :cond_1

    const/4 v1, 0x2

    if-eq v0, v1, :cond_0

    goto :goto_0

    .line 338
    :cond_0
    iget-object v0, p0, Lorg/apache/cordova/mediacapture/Capture$1;->this$0:Lorg/apache/cordova/mediacapture/Capture;

    iget-object v1, p0, Lorg/apache/cordova/mediacapture/Capture$1;->val$req:Lorg/apache/cordova/mediacapture/PendingRequests$Request;

    iget-object v2, p0, Lorg/apache/cordova/mediacapture/Capture$1;->val$intent:Landroid/content/Intent;

    invoke-virtual {v0, v1, v2}, Lorg/apache/cordova/mediacapture/Capture;->onVideoActivityResult(Lorg/apache/cordova/mediacapture/PendingRequests$Request;Landroid/content/Intent;)V

    goto :goto_0

    .line 335
    :cond_1
    iget-object v0, p0, Lorg/apache/cordova/mediacapture/Capture$1;->this$0:Lorg/apache/cordova/mediacapture/Capture;

    iget-object v1, p0, Lorg/apache/cordova/mediacapture/Capture$1;->val$req:Lorg/apache/cordova/mediacapture/PendingRequests$Request;

    invoke-virtual {v0, v1}, Lorg/apache/cordova/mediacapture/Capture;->onImageActivityResult(Lorg/apache/cordova/mediacapture/PendingRequests$Request;)V

    goto :goto_0

    .line 332
    :cond_2
    iget-object v0, p0, Lorg/apache/cordova/mediacapture/Capture$1;->this$0:Lorg/apache/cordova/mediacapture/Capture;

    iget-object v1, p0, Lorg/apache/cordova/mediacapture/Capture$1;->val$req:Lorg/apache/cordova/mediacapture/PendingRequests$Request;

    iget-object v2, p0, Lorg/apache/cordova/mediacapture/Capture$1;->val$intent:Landroid/content/Intent;

    invoke-virtual {v0, v1, v2}, Lorg/apache/cordova/mediacapture/Capture;->onAudioActivityResult(Lorg/apache/cordova/mediacapture/PendingRequests$Request;Landroid/content/Intent;)V

    :goto_0
    return-void
.end method
