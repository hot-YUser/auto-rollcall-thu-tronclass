.class Lcom/mesmotronic/plugins/FullScreenPlugin$2;
.super Ljava/lang/Object;
.source "FullScreenPlugin.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/mesmotronic/plugins/FullScreenPlugin;->initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

.field final synthetic val$cordova:Lorg/apache/cordova/CordovaInterface;


# direct methods
.method constructor <init>(Lcom/mesmotronic/plugins/FullScreenPlugin;Lorg/apache/cordova/CordovaInterface;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 57
    iput-object p1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$2;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    iput-object p2, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$2;->val$cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 62
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$2;->val$cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v0

    const/16 v1, 0x800

    .line 63
    invoke-virtual {v0, v1}, Landroid/view/Window;->clearFlags(I)V

    .line 66
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$2;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$000(Lcom/mesmotronic/plugins/FullScreenPlugin;)Lorg/apache/cordova/CordovaPreferences;

    move-result-object v1

    const-string v2, "StatusBarBackgroundColor"

    const-string v3, "#000000"

    invoke-virtual {v1, v2, v3}, Lorg/apache/cordova/CordovaPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$100(Lcom/mesmotronic/plugins/FullScreenPlugin;Ljava/lang/String;)V

    return-void
.end method
