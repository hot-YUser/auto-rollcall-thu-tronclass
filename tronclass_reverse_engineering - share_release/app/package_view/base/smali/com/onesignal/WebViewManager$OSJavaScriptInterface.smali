.class Lcom/onesignal/WebViewManager$OSJavaScriptInterface;
.super Ljava/lang/Object;
.source "WebViewManager.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/WebViewManager;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = "OSJavaScriptInterface"
.end annotation


# static fields
.field static final EVENT_TYPE_ACTION_TAKEN:Ljava/lang/String; = "action_taken"

.field static final EVENT_TYPE_KEY:Ljava/lang/String; = "type"

.field static final EVENT_TYPE_PAGE_CHANGE:Ljava/lang/String; = "page_change"

.field static final EVENT_TYPE_RENDERING_COMPLETE:Ljava/lang/String; = "rendering_complete"

.field static final EVENT_TYPE_RESIZE:Ljava/lang/String; = "resize"

.field static final GET_PAGE_META_DATA_JS_FUNCTION:Ljava/lang/String; = "getPageMetaData()"

.field static final IAM_DISPLAY_LOCATION_KEY:Ljava/lang/String; = "displayLocation"

.field static final IAM_DRAG_TO_DISMISS_DISABLED_KEY:Ljava/lang/String; = "dragToDismissDisabled"

.field static final IAM_PAGE_META_DATA_KEY:Ljava/lang/String; = "pageMetaData"

.field static final JS_OBJ_NAME:Ljava/lang/String; = "OSAndroid"

.field static final SAFE_AREA_JS_OBJECT:Ljava/lang/String; = "{\n   top: %d,\n   bottom: %d,\n   right: %d,\n   left: %d,\n}"

.field static final SET_SAFE_AREA_INSETS_JS_FUNCTION:Ljava/lang/String; = "setSafeAreaInsets(%s)"

.field static final SET_SAFE_AREA_INSETS_SCRIPT:Ljava/lang/String; = "\n\n<script>\n    setSafeAreaInsets(%s);\n</script>"


# instance fields
.field final synthetic this$0:Lcom/onesignal/WebViewManager;


# direct methods
.method constructor <init>(Lcom/onesignal/WebViewManager;)V
    .locals 0

    .line 183
    iput-object p1, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private getDisplayLocation(Lorg/json/JSONObject;)Lcom/onesignal/WebViewManager$Position;
    .locals 4

    .line 257
    const-string v0, "displayLocation"

    sget-object v1, Lcom/onesignal/WebViewManager$Position;->FULL_SCREEN:Lcom/onesignal/WebViewManager$Position;

    .line 259
    :try_start_0
    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v2

    if-eqz v2, :cond_0

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v2

    const-string v3, ""

    invoke-virtual {v2, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_0

    .line 260
    const-string v2, "FULL_SCREEN"

    invoke-virtual {p1, v0, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/String;->toUpperCase()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Lcom/onesignal/WebViewManager$Position;->valueOf(Ljava/lang/String;)Lcom/onesignal/WebViewManager$Position;

    move-result-object p1
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    move-object v1, p1

    goto :goto_0

    :catch_0
    move-exception p1

    .line 262
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :cond_0
    :goto_0
    return-object v1
.end method

.method private getDragToDismissDisabled(Lorg/json/JSONObject;)Z
    .locals 1

    .line 269
    :try_start_0
    const-string v0, "dragToDismissDisabled"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result p1
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return p1

    :catch_0
    const/4 p1, 0x0

    return p1
.end method

.method private getPageHeightData(Lorg/json/JSONObject;)I
    .locals 3

    .line 250
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v0}, Lcom/onesignal/WebViewManager;->access$500(Lcom/onesignal/WebViewManager;)Landroid/app/Activity;

    move-result-object v1

    const-string v2, "pageMetaData"

    invoke-virtual {p1, v2}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    invoke-static {v0, v1, p1}, Lcom/onesignal/WebViewManager;->access$600(Lcom/onesignal/WebViewManager;Landroid/app/Activity;Lorg/json/JSONObject;)I

    move-result p1
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return p1

    :catch_0
    const/4 p1, -0x1

    return p1
.end method

.method private handleActionTaken(Lorg/json/JSONObject;)V
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 276
    const-string v0, "body"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    .line 277
    const-string v0, "id"

    const/4 v1, 0x0

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 279
    iget-object v2, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    const-string v3, "close"

    invoke-virtual {p1, v3}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result v3

    invoke-static {v2, v3}, Lcom/onesignal/WebViewManager;->access$702(Lcom/onesignal/WebViewManager;Z)Z

    .line 281
    iget-object v2, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v2}, Lcom/onesignal/WebViewManager;->access$800(Lcom/onesignal/WebViewManager;)Lcom/onesignal/OSInAppMessageInternal;

    move-result-object v2

    iget-boolean v2, v2, Lcom/onesignal/OSInAppMessageInternal;->isPreview:Z

    if-eqz v2, :cond_0

    .line 282
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    iget-object v2, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v2}, Lcom/onesignal/WebViewManager;->access$800(Lcom/onesignal/WebViewManager;)Lcom/onesignal/OSInAppMessageInternal;

    move-result-object v2

    invoke-virtual {v0, v2, p1}, Lcom/onesignal/OSInAppMessageController;->onMessageActionOccurredOnPreview(Lcom/onesignal/OSInAppMessageInternal;Lorg/json/JSONObject;)V

    goto :goto_0

    :cond_0
    if-eqz v0, :cond_1

    .line 284
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    iget-object v2, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v2}, Lcom/onesignal/WebViewManager;->access$800(Lcom/onesignal/WebViewManager;)Lcom/onesignal/OSInAppMessageInternal;

    move-result-object v2

    invoke-virtual {v0, v2, p1}, Lcom/onesignal/OSInAppMessageController;->onMessageActionOccurredOnMessage(Lcom/onesignal/OSInAppMessageInternal;Lorg/json/JSONObject;)V

    .line 287
    :cond_1
    :goto_0
    iget-object p1, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {p1}, Lcom/onesignal/WebViewManager;->access$700(Lcom/onesignal/WebViewManager;)Z

    move-result p1

    if-eqz p1, :cond_2

    .line 288
    iget-object p1, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    invoke-virtual {p1, v1}, Lcom/onesignal/WebViewManager;->dismissAndAwaitNextMessage(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    :cond_2
    return-void
.end method

.method private handlePageChange(Lorg/json/JSONObject;)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 293
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v1}, Lcom/onesignal/WebViewManager;->access$800(Lcom/onesignal/WebViewManager;)Lcom/onesignal/OSInAppMessageInternal;

    move-result-object v1

    invoke-virtual {v0, v1, p1}, Lcom/onesignal/OSInAppMessageController;->onPageChanged(Lcom/onesignal/OSInAppMessageInternal;Lorg/json/JSONObject;)V

    return-void
.end method

.method private handleRenderComplete(Lorg/json/JSONObject;)V
    .locals 3

    .line 240
    invoke-direct {p0, p1}, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->getDisplayLocation(Lorg/json/JSONObject;)Lcom/onesignal/WebViewManager$Position;

    move-result-object v0

    .line 241
    sget-object v1, Lcom/onesignal/WebViewManager$Position;->FULL_SCREEN:Lcom/onesignal/WebViewManager$Position;

    if-ne v0, v1, :cond_0

    const/4 v1, -0x1

    goto :goto_0

    :cond_0
    invoke-direct {p0, p1}, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->getPageHeightData(Lorg/json/JSONObject;)I

    move-result v1

    .line 242
    :goto_0
    invoke-direct {p0, p1}, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->getDragToDismissDisabled(Lorg/json/JSONObject;)Z

    move-result p1

    .line 243
    iget-object v2, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v2}, Lcom/onesignal/WebViewManager;->access$300(Lcom/onesignal/WebViewManager;)Lcom/onesignal/OSInAppMessageContent;

    move-result-object v2

    invoke-virtual {v2, v0}, Lcom/onesignal/OSInAppMessageContent;->setDisplayLocation(Lcom/onesignal/WebViewManager$Position;)V

    .line 244
    iget-object v0, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v0}, Lcom/onesignal/WebViewManager;->access$300(Lcom/onesignal/WebViewManager;)Lcom/onesignal/OSInAppMessageContent;

    move-result-object v0

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessageContent;->setPageHeight(I)V

    .line 245
    iget-object v0, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {v0, p1}, Lcom/onesignal/WebViewManager;->access$400(Lcom/onesignal/WebViewManager;Z)V

    return-void
.end method


# virtual methods
.method public postMessage(Ljava/lang/String;)V
    .locals 4
    .annotation runtime Landroid/webkit/JavascriptInterface;
    .end annotation

    const-string v0, "OSJavaScriptInterface:postMessage: "

    .line 212
    :try_start_0
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 214
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 215
    const-string p1, "type"

    invoke-virtual {v0, p1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 217
    invoke-virtual {p1}, Ljava/lang/String;->hashCode()I

    move-result v1

    const/4 v2, 0x3

    const/4 v3, 0x1

    sparse-switch v1, :sswitch_data_0

    goto :goto_0

    :sswitch_0
    const-string v1, "action_taken"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    move p1, v3

    goto :goto_1

    :sswitch_1
    const-string v1, "rendering_complete"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    const/4 p1, 0x0

    goto :goto_1

    :sswitch_2
    const-string v1, "resize"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    const/4 p1, 0x2

    goto :goto_1

    :sswitch_3
    const-string v1, "page_change"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    move p1, v2

    goto :goto_1

    :cond_0
    :goto_0
    const/4 p1, -0x1

    :goto_1
    if-eqz p1, :cond_3

    if-eq p1, v3, :cond_2

    if-eq p1, v2, :cond_1

    goto :goto_2

    .line 229
    :cond_1
    invoke-direct {p0, v0}, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->handlePageChange(Lorg/json/JSONObject;)V

    goto :goto_2

    .line 223
    :cond_2
    iget-object p1, p0, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->this$0:Lcom/onesignal/WebViewManager;

    invoke-static {p1}, Lcom/onesignal/WebViewManager;->access$200(Lcom/onesignal/WebViewManager;)Lcom/onesignal/InAppMessageView;

    move-result-object p1

    invoke-virtual {p1}, Lcom/onesignal/InAppMessageView;->isDragging()Z

    move-result p1

    if-nez p1, :cond_4

    .line 224
    invoke-direct {p0, v0}, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->handleActionTaken(Lorg/json/JSONObject;)V

    goto :goto_2

    .line 219
    :cond_3
    invoke-direct {p0, v0}, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;->handleRenderComplete(Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_2

    :catch_0
    move-exception p1

    .line 235
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :cond_4
    :goto_2
    return-void

    :sswitch_data_0
    .sparse-switch
        -0x587780a0 -> :sswitch_3
        -0x37b2634c -> :sswitch_2
        0x290198c -> :sswitch_1
        0x6e563d7e -> :sswitch_0
    .end sparse-switch
.end method
