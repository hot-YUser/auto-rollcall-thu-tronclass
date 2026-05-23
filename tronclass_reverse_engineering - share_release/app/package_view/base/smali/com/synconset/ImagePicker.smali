.class public Lcom/synconset/ImagePicker;
.super Lorg/apache/cordova/CordovaPlugin;
.source "ImagePicker.java"


# static fields
.field private static final ACTION_GET_PICTURES:Ljava/lang/String; = "getPictures"

.field private static final ACTION_HAS_READ_PERMISSION:Ljava/lang/String; = "hasReadPermission"

.field private static final ACTION_REQUEST_READ_PERMISSION:Ljava/lang/String; = "requestReadPermission"

.field private static final PERMISSION_REQUEST_CODE:I = 0x64


# instance fields
.field private callbackContext:Lorg/apache/cordova/CallbackContext;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 26
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method private hasReadPermission()Z
    .locals 2

    .line 153
    iget-object v0, p0, Lcom/synconset/ImagePicker;->cordova:Lorg/apache/cordova/CordovaInterface;

    .line 154
    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    const-string v1, "android.permission.READ_EXTERNAL_STORAGE"

    invoke-static {v0, v1}, Landroidx/core/content/ContextCompat;->checkSelfPermission(Landroid/content/Context;Ljava/lang/String;)I

    move-result v0

    if-nez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method private requestReadPermission()V
    .locals 4

    .line 160
    invoke-direct {p0}, Lcom/synconset/ImagePicker;->hasReadPermission()Z

    move-result v0

    if-nez v0, :cond_0

    .line 161
    iget-object v0, p0, Lcom/synconset/ImagePicker;->cordova:Lorg/apache/cordova/CordovaInterface;

    .line 162
    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    const/4 v1, 0x1

    new-array v1, v1, [Ljava/lang/String;

    const/4 v2, 0x0

    const-string v3, "android.permission.READ_EXTERNAL_STORAGE"

    aput-object v3, v1, v2

    const/16 v2, 0x64

    .line 161
    invoke-static {v0, v1, v2}, Landroidx/core/app/ActivityCompat;->requestPermissions(Landroid/app/Activity;[Ljava/lang/String;I)V

    .line 170
    :cond_0
    iget-object v0, p0, Lcom/synconset/ImagePicker;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V

    return-void
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 23
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    move-object/from16 v0, p0

    move-object/from16 v1, p1

    move-object/from16 v2, p3

    .line 38
    iput-object v2, v0, Lcom/synconset/ImagePicker;->callbackContext:Lorg/apache/cordova/CallbackContext;

    .line 40
    const-string v3, "hasReadPermission"

    invoke-virtual {v3, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    const/4 v4, 0x1

    if-eqz v3, :cond_0

    .line 41
    new-instance v1, Lorg/apache/cordova/PluginResult;

    sget-object v3, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct/range {p0 .. p0}, Lcom/synconset/ImagePicker;->hasReadPermission()Z

    move-result v5

    invoke-direct {v1, v3, v5}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Z)V

    invoke-virtual {v2, v1}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return v4

    .line 44
    :cond_0
    const-string v2, "requestReadPermission"

    invoke-virtual {v2, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_1

    .line 45
    invoke-direct/range {p0 .. p0}, Lcom/synconset/ImagePicker;->requestReadPermission()V

    return v4

    .line 48
    :cond_1
    const-string v2, "getPictures"

    invoke-virtual {v2, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    const/4 v2, 0x0

    if-eqz v1, :cond_f

    move-object/from16 v1, p2

    .line 49
    invoke-virtual {v1, v2}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v1

    .line 50
    new-instance v3, Landroid/content/Intent;

    iget-object v5, v0, Lcom/synconset/ImagePicker;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v5}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v5

    const-class v6, Lcom/synconset/MultiImageChooserActivity;

    invoke-direct {v3, v5, v6}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    .line 63
    const-string v5, "maximumImagesCount"

    invoke-virtual {v1, v5}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v6

    if-eqz v6, :cond_2

    .line 64
    invoke-virtual {v1, v5}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result v5

    goto :goto_0

    :cond_2
    const/16 v5, 0x14

    .line 66
    :goto_0
    const-string v6, "width"

    invoke-virtual {v1, v6}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v7

    if-eqz v7, :cond_3

    .line 67
    invoke-virtual {v1, v6}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result v6

    goto :goto_1

    :cond_3
    move v6, v2

    .line 69
    :goto_1
    const-string v7, "height"

    invoke-virtual {v1, v7}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v8

    if-eqz v8, :cond_4

    .line 70
    invoke-virtual {v1, v7}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result v7

    goto :goto_2

    :cond_4
    move v7, v2

    .line 72
    :goto_2
    const-string v8, "quality"

    invoke-virtual {v1, v8}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v9

    if-eqz v9, :cond_5

    .line 73
    invoke-virtual {v1, v8}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result v8

    goto :goto_3

    :cond_5
    const/16 v8, 0x64

    .line 75
    :goto_3
    const-string v9, "outputType"

    invoke-virtual {v1, v9}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v10

    if-eqz v10, :cond_6

    .line 76
    invoke-virtual {v1, v9}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result v9

    goto :goto_4

    :cond_6
    move v9, v2

    .line 78
    :goto_4
    const-string v10, "options"

    invoke-virtual {v1, v10}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v11

    const-string v12, "processingImagesMessage"

    const-string v13, "processingImagesTitle"

    const-string v14, "limitAlertButton"

    const-string v15, "limitAlertContent"

    const-string v4, "limitAlertTitle"

    const-string v2, "imageChooserDiscardText"

    const-string v0, "imageChooserDoneText"

    if-eqz v11, :cond_e

    .line 79
    invoke-virtual {v1, v10}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v1

    .line 81
    invoke-virtual {v1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v10

    if-eqz v10, :cond_7

    .line 82
    invoke-virtual {v1, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v10

    goto :goto_5

    :cond_7
    move-object v10, v0

    .line 84
    :goto_5
    invoke-virtual {v1, v2}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v11

    if-eqz v11, :cond_8

    .line 85
    invoke-virtual {v1, v2}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v11

    goto :goto_6

    :cond_8
    move-object v11, v2

    .line 87
    :goto_6
    invoke-virtual {v1, v4}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v16

    if-eqz v16, :cond_9

    .line 88
    invoke-virtual {v1, v4}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v16

    goto :goto_7

    :cond_9
    move-object/from16 v16, v4

    .line 90
    :goto_7
    invoke-virtual {v1, v15}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v17

    if-eqz v17, :cond_a

    .line 91
    invoke-virtual {v1, v15}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v17

    goto :goto_8

    :cond_a
    move-object/from16 v17, v15

    .line 93
    :goto_8
    invoke-virtual {v1, v14}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v18

    if-eqz v18, :cond_b

    .line 94
    invoke-virtual {v1, v14}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v18

    goto :goto_9

    :cond_b
    move-object/from16 v18, v14

    .line 96
    :goto_9
    invoke-virtual {v1, v13}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v19

    if-eqz v19, :cond_c

    .line 97
    invoke-virtual {v1, v13}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v19

    goto :goto_a

    :cond_c
    move-object/from16 v19, v13

    .line 99
    :goto_a
    invoke-virtual {v1, v12}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v20

    if-eqz v20, :cond_d

    .line 100
    invoke-virtual {v1, v12}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    move-object/from16 p2, v12

    move-object/from16 p3, v13

    move-object/from16 v12, v17

    move-object/from16 v17, v18

    move-object/from16 v21, v19

    move-object/from16 v22, v16

    move-object/from16 v16, v1

    move-object/from16 v1, v22

    goto :goto_b

    :cond_d
    move-object/from16 p2, v12

    move-object/from16 p3, v13

    move-object/from16 v1, v16

    move-object/from16 v21, v19

    move-object/from16 v16, p2

    move-object/from16 v12, v17

    move-object/from16 v17, v18

    goto :goto_b

    :cond_e
    move-object v10, v0

    move-object v11, v2

    move-object v1, v4

    move-object/from16 p2, v12

    move-object/from16 v16, p2

    move-object/from16 p3, v13

    move-object/from16 v21, p3

    move-object/from16 v17, v14

    move-object v12, v15

    .line 105
    :goto_b
    const-string v13, "MAX_IMAGES"

    invoke-virtual {v3, v13, v5}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 106
    const-string v5, "WIDTH"

    invoke-virtual {v3, v5, v6}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 107
    const-string v5, "HEIGHT"

    invoke-virtual {v3, v5, v7}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 108
    const-string v5, "QUALITY"

    invoke-virtual {v3, v5, v8}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 109
    const-string v5, "OUTPUT_TYPE"

    invoke-virtual {v3, v5, v9}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 111
    new-instance v5, Landroid/os/Bundle;

    invoke-direct {v5}, Landroid/os/Bundle;-><init>()V

    .line 112
    invoke-virtual {v5, v0, v10}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 113
    invoke-virtual {v5, v2, v11}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 114
    invoke-virtual {v5, v4, v1}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 115
    invoke-virtual {v5, v15, v12}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    move-object/from16 v0, v17

    .line 116
    invoke-virtual {v5, v14, v0}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    move-object/from16 v0, p3

    move-object/from16 v13, v21

    .line 117
    invoke-virtual {v5, v0, v13}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    move-object/from16 v0, p2

    move-object/from16 v12, v16

    .line 118
    invoke-virtual {v5, v0, v12}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 119
    invoke-virtual {v3, v5}, Landroid/content/Intent;->putExtras(Landroid/os/Bundle;)Landroid/content/Intent;

    move-object/from16 v0, p0

    .line 137
    iget-object v1, v0, Lcom/synconset/ImagePicker;->cordova:Lorg/apache/cordova/CordovaInterface;

    const/4 v2, 0x0

    invoke-interface {v1, v0, v3, v2}, Lorg/apache/cordova/CordovaInterface;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V

    const/4 v1, 0x1

    return v1

    :cond_f
    return v2
.end method

.method public onActivityResult(IILandroid/content/Intent;)V
    .locals 0

    const/4 p1, -0x1

    if-ne p2, p1, :cond_0

    if-eqz p3, :cond_0

    .line 175
    const-string p2, "bigdata:synccode"

    invoke-virtual {p3, p2, p1}, Landroid/content/Intent;->getIntExtra(Ljava/lang/String;I)I

    move-result p1

    .line 176
    invoke-static {}, Lcom/synconset/ResultIPC;->get()Lcom/synconset/ResultIPC;

    move-result-object p2

    invoke-virtual {p2, p1}, Lcom/synconset/ResultIPC;->getLargeData(I)Landroid/os/Bundle;

    move-result-object p1

    .line 178
    const-string p2, "MULTIPLEFILENAMES"

    invoke-virtual {p1, p2}, Landroid/os/Bundle;->getStringArrayList(Ljava/lang/String;)Ljava/util/ArrayList;

    move-result-object p1

    .line 180
    new-instance p2, Lorg/json/JSONArray;

    invoke-direct {p2, p1}, Lorg/json/JSONArray;-><init>(Ljava/util/Collection;)V

    .line 181
    iget-object p1, p0, Lcom/synconset/ImagePicker;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONArray;)V

    goto :goto_0

    :cond_0
    if-nez p2, :cond_1

    if-eqz p3, :cond_1

    .line 184
    const-string p1, "ERRORMESSAGE"

    invoke-virtual {p3, p1}, Landroid/content/Intent;->getStringExtra(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 185
    iget-object p2, p0, Lcom/synconset/ImagePicker;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    goto :goto_0

    :cond_1
    if-nez p2, :cond_2

    .line 188
    new-instance p1, Lorg/json/JSONArray;

    invoke-direct {p1}, Lorg/json/JSONArray;-><init>()V

    .line 189
    iget-object p2, p0, Lcom/synconset/ImagePicker;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONArray;)V

    goto :goto_0

    .line 192
    :cond_2
    iget-object p1, p0, Lcom/synconset/ImagePicker;->callbackContext:Lorg/apache/cordova/CallbackContext;

    const-string p2, "No images selected"

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method public onRestoreStateForActivityResult(Landroid/os/Bundle;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 205
    iput-object p2, p0, Lcom/synconset/ImagePicker;->callbackContext:Lorg/apache/cordova/CallbackContext;

    return-void
.end method
