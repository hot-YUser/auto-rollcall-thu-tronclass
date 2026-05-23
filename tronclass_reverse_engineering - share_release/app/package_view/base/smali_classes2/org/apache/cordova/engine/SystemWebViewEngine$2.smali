.class Lorg/apache/cordova/engine/SystemWebViewEngine$2;
.super Landroid/content/BroadcastReceiver;
.source "SystemWebViewEngine.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/engine/SystemWebViewEngine;->initWebViewSettings()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/engine/SystemWebViewEngine;

.field final synthetic val$settings:Landroid/webkit/WebSettings;


# direct methods
.method constructor <init>(Lorg/apache/cordova/engine/SystemWebViewEngine;Landroid/webkit/WebSettings;)V
    .locals 0

    .line 236
    iput-object p1, p0, Lorg/apache/cordova/engine/SystemWebViewEngine$2;->this$0:Lorg/apache/cordova/engine/SystemWebViewEngine;

    iput-object p2, p0, Lorg/apache/cordova/engine/SystemWebViewEngine$2;->val$settings:Landroid/webkit/WebSettings;

    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 0

    .line 239
    iget-object p1, p0, Lorg/apache/cordova/engine/SystemWebViewEngine$2;->val$settings:Landroid/webkit/WebSettings;

    invoke-virtual {p1}, Landroid/webkit/WebSettings;->getUserAgentString()Ljava/lang/String;

    return-void
.end method
