.class Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;
.super Ljava/lang/Object;
.source "DocumentViewerPlugin.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;

.field final synthetic val$action:Ljava/lang/String;

.field final synthetic val$argsArray:Lorg/json/JSONArray;

.field final synthetic val$callbackContext:Lorg/apache/cordova/CallbackContext;


# direct methods
.method constructor <init>(Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 179
    iput-object p1, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;->this$0:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;

    iput-object p2, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;->val$action:Ljava/lang/String;

    iput-object p3, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;->val$argsArray:Lorg/json/JSONArray;

    iput-object p4, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 5

    .line 184
    :try_start_0
    iget-object v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;->this$0:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;

    iget-object v1, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;->val$action:Ljava/lang/String;

    iget-object v2, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;->val$argsArray:Lorg/json/JSONArray;

    iget-object v3, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1, v2, v3}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->access$000(Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 188
    iget-object v1, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;->this$0:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;

    iget-object v2, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;->val$action:Ljava/lang/String;

    iget-object v3, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;->val$argsArray:Lorg/json/JSONArray;

    iget-object v4, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-static {v1, v0, v2, v3, v4}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->access$100(Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;Ljava/lang/Exception;Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    :goto_0
    return-void
.end method
