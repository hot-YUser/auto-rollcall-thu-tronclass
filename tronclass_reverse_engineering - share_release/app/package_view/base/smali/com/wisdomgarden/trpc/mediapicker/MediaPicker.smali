.class public Lcom/wisdomgarden/trpc/mediapicker/MediaPicker;
.super Lcom/getcapacitor/Plugin;
.source "MediaPicker.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
    requestCodes = {
        0x1e6c
    }
.end annotation


# static fields
.field private static final ANDROID_VERSION_TIRAMISU:I = 0x21

.field private static final LOG_TAG:Ljava/lang/String; = "MediaPicker"

.field protected static final REQUEST_MEDIA_PICKER:I = 0x1e6c


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 16
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method


# virtual methods
.method public checkAvailability(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 26
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 27
    sget v1, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v2, 0x21

    if-lt v1, v2, :cond_0

    const/4 v1, 0x1

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    :goto_0
    const-string v2, "isAvailable"

    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 28
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method protected handleOnActivityResult(IILandroid/content/Intent;)V
    .locals 3

    .line 46
    invoke-super {p0, p1, p2, p3}, Lcom/getcapacitor/Plugin;->handleOnActivityResult(IILandroid/content/Intent;)V

    .line 47
    invoke-virtual {p0}, Lcom/wisdomgarden/trpc/mediapicker/MediaPicker;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object v0

    if-nez v0, :cond_0

    return-void

    :cond_0
    const/16 v1, 0x1e6c

    if-eq p1, v1, :cond_1

    return-void

    .line 54
    :cond_1
    new-instance p1, Lcom/getcapacitor/JSObject;

    invoke-direct {p1}, Lcom/getcapacitor/JSObject;-><init>()V

    const/16 v1, 0xa

    .line 56
    const-string v2, "uris"

    if-ne p2, v1, :cond_3

    .line 57
    const-string p2, "uri"

    invoke-virtual {p3, p2}, Landroid/content/Intent;->getStringExtra(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p2

    if-eqz p2, :cond_2

    .line 59
    new-instance p3, Lcom/getcapacitor/JSArray;

    invoke-direct {p3}, Lcom/getcapacitor/JSArray;-><init>()V

    .line 60
    invoke-virtual {p3, p2}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    .line 61
    invoke-virtual {p1, v2, p3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 64
    :cond_2
    invoke-virtual {v0, p1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void

    :cond_3
    const/16 v1, 0x14

    if-ne p2, v1, :cond_5

    .line 68
    invoke-virtual {p3, v2}, Landroid/content/Intent;->getStringArrayListExtra(Ljava/lang/String;)Ljava/util/ArrayList;

    move-result-object p2

    if-eqz p2, :cond_4

    .line 71
    new-instance p3, Lorg/json/JSONArray;

    invoke-direct {p3, p2}, Lorg/json/JSONArray;-><init>(Ljava/util/Collection;)V

    invoke-virtual {p1, v2, p3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 73
    :cond_4
    invoke-virtual {v0, p1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    :cond_5
    return-void
.end method

.method public pickMedias(Lcom/getcapacitor/PluginCall;)V
    .locals 7
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 33
    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/mediapicker/MediaPicker;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 34
    const-string v0, "type"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x1

    .line 35
    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    const-string v3, "maximum"

    invoke-virtual {p1, v3, v2}, Lcom/getcapacitor/PluginCall;->getInt(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Integer;->intValue()I

    move-result v2

    .line 36
    new-instance v4, Landroid/content/Intent;

    invoke-virtual {p0}, Lcom/wisdomgarden/trpc/mediapicker/MediaPicker;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v5

    const-class v6, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;

    invoke-direct {v4, v5, v6}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    .line 38
    invoke-virtual {v4, v3, v2}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 39
    invoke-virtual {v4, v0, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/lang/String;)Landroid/content/Intent;

    const/16 v0, 0x1e6c

    .line 41
    invoke-virtual {p0, p1, v4, v0}, Lcom/wisdomgarden/trpc/mediapicker/MediaPicker;->startActivityForResult(Lcom/getcapacitor/PluginCall;Landroid/content/Intent;I)V

    return-void
.end method
