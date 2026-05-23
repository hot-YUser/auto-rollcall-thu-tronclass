.class Lcom/getcapacitor/plugin/SplashScreen$1;
.super Ljava/lang/Object;
.source "SplashScreen.java"

# interfaces
.implements Lcom/getcapacitor/Splash$SplashListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/SplashScreen;->show(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/SplashScreen;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/SplashScreen;Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 18
    iput-object p1, p0, Lcom/getcapacitor/plugin/SplashScreen$1;->this$0:Lcom/getcapacitor/plugin/SplashScreen;

    iput-object p2, p0, Lcom/getcapacitor/plugin/SplashScreen$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public completed()V
    .locals 1

    .line 21
    iget-object v0, p0, Lcom/getcapacitor/plugin/SplashScreen$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method

.method public error()V
    .locals 2

    .line 26
    iget-object v0, p0, Lcom/getcapacitor/plugin/SplashScreen$1;->val$call:Lcom/getcapacitor/PluginCall;

    const-string v1, "An error occurred while showing splash"

    invoke-virtual {v0, v1}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void
.end method
