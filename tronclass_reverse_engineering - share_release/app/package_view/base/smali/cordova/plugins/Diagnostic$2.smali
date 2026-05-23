.class Lcordova/plugins/Diagnostic$2;
.super Ljava/lang/Object;
.source "Diagnostic.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcordova/plugins/Diagnostic;->doWarmRestart()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcordova/plugins/Diagnostic;


# direct methods
.method constructor <init>(Lcordova/plugins/Diagnostic;)V
    .locals 0

    .line 868
    iput-object p1, p0, Lcordova/plugins/Diagnostic$2;->this$0:Lcordova/plugins/Diagnostic;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 872
    :try_start_0
    iget-object v0, p0, Lcordova/plugins/Diagnostic$2;->this$0:Lcordova/plugins/Diagnostic;

    const-string v1, "Warm restarting main activity"

    invoke-virtual {v0, v1}, Lcordova/plugins/Diagnostic;->logInfo(Ljava/lang/String;)V

    .line 873
    sget-object v0, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    iget-object v0, v0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->recreate()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 875
    iget-object v1, p0, Lcordova/plugins/Diagnostic$2;->this$0:Lcordova/plugins/Diagnostic;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Unable to warm restart main activity: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
