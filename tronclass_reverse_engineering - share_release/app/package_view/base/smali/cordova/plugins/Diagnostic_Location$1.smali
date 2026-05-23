.class Lcordova/plugins/Diagnostic_Location$1;
.super Landroid/content/BroadcastReceiver;
.source "Diagnostic_Location.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcordova/plugins/Diagnostic_Location;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcordova/plugins/Diagnostic_Location;


# direct methods
.method constructor <init>(Lcordova/plugins/Diagnostic_Location;)V
    .locals 0

    .line 308
    iput-object p1, p0, Lcordova/plugins/Diagnostic_Location$1;->this$0:Lcordova/plugins/Diagnostic_Location;

    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 2

    .line 312
    :try_start_0
    invoke-virtual {p2}, Landroid/content/Intent;->getAction()Ljava/lang/String;

    move-result-object p1

    .line 313
    sget-object p2, Lcordova/plugins/Diagnostic_Location;->instance:Lcordova/plugins/Diagnostic_Location;

    if-eqz p2, :cond_0

    const-string p2, "android.location.PROVIDERS_CHANGED"

    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 314
    const-string p1, "Diagnostic_Location"

    const-string p2, "onReceiveLocationProviderChange"

    invoke-static {p1, p2}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    .line 315
    sget-object p1, Lcordova/plugins/Diagnostic_Location;->instance:Lcordova/plugins/Diagnostic_Location;

    invoke-virtual {p1}, Lcordova/plugins/Diagnostic_Location;->notifyLocationStateChange()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 318
    iget-object p2, p0, Lcordova/plugins/Diagnostic_Location$1;->this$0:Lcordova/plugins/Diagnostic_Location;

    invoke-static {p2}, Lcordova/plugins/Diagnostic_Location;->access$000(Lcordova/plugins/Diagnostic_Location;)Lcordova/plugins/Diagnostic;

    move-result-object p2

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Error receiving location provider state change: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Ljava/lang/Exception;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lcordova/plugins/Diagnostic;->logError(Ljava/lang/String;)V

    :cond_0
    :goto_0
    return-void
.end method
