.class public final Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;
.super Lorg/apache/cordova/CordovaPlugin;
.source "DocumentViewerPlugin.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Result;,
        Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Args;,
        Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Actions;,
        Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Options;,
        Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$AutoCloseOptions;,
        Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;
    }
.end annotation


# static fields
.field private static final ANDROID_OPTIONS:Ljava/lang/String; = "android"

.field private static final ASSETS:Ljava/lang/String; = "file:///android_asset/"

.field private static final BOOKMARKS_OPTIONS:Ljava/lang/String; = "bookmarks"

.field private static final DOCUMENTVIEW_OPTIONS:Ljava/lang/String; = "documentView"

.field private static final EMAIL_OPTIONS:Ljava/lang/String; = "email"

.field private static final NAVIGATIONVIEW_OPTIONS:Ljava/lang/String; = "navigationView"

.field private static final OPENWITH_OPTIONS:Ljava/lang/String; = "openWith"

.field public static final PDF:Ljava/lang/String; = "application/pdf"

.field private static final PRINT_OPTIONS:Ljava/lang/String; = "print"

.field private static final REQUEST_CODE_INSTALL:I = 0x3e9

.field private static final REQUEST_CODE_OPEN:I = 0x3e8

.field private static final SEARCH_OPTIONS:Ljava/lang/String; = "search"

.field private static final TAG:Ljava/lang/String; = "DocumentViewerPlugin"

.field private static final TITLE_OPTIONS:Ljava/lang/String; = "title"


# instance fields
.field private callbackContext:Lorg/apache/cordova/CallbackContext;

.field private current:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;

.field private tempCounter:I


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 49
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    const/4 v0, 0x0

    .line 619
    iput v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->tempCounter:I

    return-void
.end method

.method private _appIsInstalled(Ljava/lang/String;)Z
    .locals 2

    .line 910
    iget-object v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v0

    const/4 v1, 0x1

    .line 913
    :try_start_0
    invoke-virtual {v0, p1, v1}, Landroid/content/pm/PackageManager;->getPackageInfo(Ljava/lang/String;I)Landroid/content/pm/PackageInfo;
    :try_end_0
    .catch Landroid/content/pm/PackageManager$NameNotFoundException; {:try_start_0 .. :try_end_0} :catch_0

    return v1

    :catch_0
    const/4 p1, 0x0

    return p1
.end method

.method private _close(Lorg/apache/cordova/CallbackContext;)V
    .locals 2

    .line 460
    iget-object v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->current:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;

    if-nez v0, :cond_0

    .line 462
    invoke-virtual {p1}, Lorg/apache/cordova/CallbackContext;->success()V

    return-void

    .line 468
    :cond_0
    :try_start_0
    iget-object v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    const/16 v1, 0x3e8

    invoke-virtual {v0, v1}, Landroid/app/Activity;->finishActivity(I)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    const/4 v0, 0x0

    .line 475
    iput-object v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->current:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;

    .line 476
    invoke-virtual {p1}, Lorg/apache/cordova/CallbackContext;->success()V

    return-void
.end method

.method private _ignore(Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 455
    invoke-virtual {p1}, Lorg/apache/cordova/CallbackContext;->success()V

    return-void
.end method

.method private _install(Ljava/lang/String;Lorg/apache/cordova/CallbackContext;)V
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 872
    const-string v0, "android.intent.action.VIEW"

    .line 0
    const-string v1, "market://details?id="

    .line 872
    invoke-direct {p0, p1}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->_appIsInstalled(Ljava/lang/String;)Z

    move-result v2

    if-nez v2, :cond_0

    .line 874
    iput-object p2, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->callbackContext:Lorg/apache/cordova/CallbackContext;

    const/16 p2, 0x3e9

    .line 878
    :try_start_0
    new-instance v2, Landroid/content/Intent;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 879
    invoke-static {v1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v1

    invoke-direct {v2, v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;Landroid/net/Uri;)V

    .line 881
    iget-object v1, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1, p0, v2, p2}, Lorg/apache/cordova/CordovaInterface;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V
    :try_end_0
    .catch Landroid/content/ActivityNotFoundException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 887
    :catch_0
    new-instance v1, Landroid/content/Intent;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "https://play.google.com/store/apps/details?id="

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 888
    invoke-static {p1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p1

    invoke-direct {v1, v0, p1}, Landroid/content/Intent;-><init>(Ljava/lang/String;Landroid/net/Uri;)V

    .line 892
    iget-object p1, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1, p0, v1, p2}, Lorg/apache/cordova/CordovaInterface;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V

    goto :goto_0

    .line 899
    :cond_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 900
    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v1}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v1

    const-string v2, "status"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 901
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Package "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v1, " already installed"

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v1, "message"

    invoke-virtual {v0, v1, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 904
    invoke-virtual {p2, v0}, Lorg/apache/cordova/CallbackContext;->error(Lorg/json/JSONObject;)V

    :goto_0
    return-void
.end method

.method private _open(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lorg/apache/cordova/CallbackContext;Landroid/os/Bundle;)V
    .locals 16
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    move-object/from16 v1, p0

    move-object/from16 v0, p1

    move-object/from16 v2, p2

    move-object/from16 v3, p3

    move-object/from16 v4, p4

    move-object/from16 v5, p5

    const-string v6, ".DocumentViewerPlugin.fileprovider"

    .line 483
    invoke-direct/range {p0 .. p0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->clearTempFiles()V

    .line 485
    invoke-direct/range {p0 .. p1}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getAccessibleFile(Ljava/lang/String;)Ljava/io/File;

    move-result-object v7

    .line 487
    const-string v8, "message"

    const/4 v9, 0x0

    const-string v10, "status"

    if-eqz v7, :cond_1

    invoke-virtual {v7}, Ljava/io/File;->exists()Z

    move-result v11

    if-eqz v11, :cond_1

    invoke-virtual {v7}, Ljava/io/File;->isFile()Z

    move-result v11

    if-eqz v11, :cond_1

    .line 491
    :try_start_0
    new-instance v11, Landroid/content/Intent;

    const-string v12, "android.intent.action.VIEW"

    invoke-direct {v11, v12}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 494
    const-string v12, "android.intent.category.EMBED"

    invoke-virtual {v11, v12}, Landroid/content/Intent;->addCategory(Ljava/lang/String;)Landroid/content/Intent;

    .line 497
    invoke-direct/range {p0 .. p0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->newApi()Z

    move-result v12

    const/4 v13, 0x1

    if-eqz v12, :cond_0

    .line 499
    invoke-virtual {v11, v13}, Landroid/content/Intent;->addFlags(I)Landroid/content/Intent;

    .line 500
    iget-object v12, v1, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->webView:Lorg/apache/cordova/CordovaWebView;

    .line 501
    invoke-interface {v12}, Lorg/apache/cordova/CordovaWebView;->getContext()Landroid/content/Context;

    move-result-object v12

    new-instance v14, Ljava/lang/StringBuilder;

    invoke-direct {v14}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v15, v1, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    .line 502
    invoke-interface {v15}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v15

    invoke-virtual {v15}, Landroid/app/Activity;->getPackageName()Ljava/lang/String;

    move-result-object v15

    invoke-virtual {v14, v15}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v14

    invoke-virtual {v14, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v6

    .line 500
    invoke-static {v12, v6, v7}, Landroidx/core/content/FileProvider;->getUriForFile(Landroid/content/Context;Ljava/lang/String;Ljava/io/File;)Landroid/net/Uri;

    move-result-object v6

    .line 506
    invoke-virtual {v11, v6, v2}, Landroid/content/Intent;->setDataAndType(Landroid/net/Uri;Ljava/lang/String;)Landroid/content/Intent;

    goto :goto_0

    .line 510
    :cond_0
    invoke-static {v7}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object v6

    invoke-virtual {v11, v6, v2}, Landroid/content/Intent;->setDataAndType(Landroid/net/Uri;Ljava/lang/String;)Landroid/content/Intent;

    :goto_0
    const/high16 v2, 0x4000000

    .line 513
    invoke-virtual {v11, v2}, Landroid/content/Intent;->addFlags(I)Landroid/content/Intent;

    .line 514
    invoke-virtual/range {p0 .. p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v2

    move-object/from16 v6, p6

    invoke-virtual {v11, v2, v6}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Landroid/os/Bundle;)Landroid/content/Intent;

    .line 516
    new-instance v2, Landroid/content/ComponentName;

    new-instance v6, Ljava/lang/StringBuilder;

    invoke-direct {v6}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v6, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    const-string v7, "."

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v6

    invoke-direct {v2, v3, v6}, Landroid/content/ComponentName;-><init>(Ljava/lang/String;Ljava/lang/String;)V

    invoke-virtual {v11, v2}, Landroid/content/Intent;->setComponent(Landroid/content/ComponentName;)Landroid/content/Intent;

    .line 520
    iput-object v5, v1, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->callbackContext:Lorg/apache/cordova/CallbackContext;

    .line 521
    iget-object v2, v1, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    const/16 v6, 0x3e8

    invoke-interface {v2, v1, v11, v6}, Lorg/apache/cordova/CordovaInterface;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V

    .line 525
    new-instance v2, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;

    invoke-direct {v2, v1, v3, v4, v0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;-><init>(Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    iput-object v2, v1, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->current:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;

    .line 528
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 529
    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v2}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v2

    invoke-virtual {v0, v10, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 530
    new-instance v2, Lorg/apache/cordova/PluginResult;

    sget-object v3, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v2, v3, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    .line 534
    invoke-virtual {v2, v13}, Lorg/apache/cordova/PluginResult;->setKeepCallback(Z)V

    .line 535
    invoke-virtual {v5, v2}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V
    :try_end_0
    .catch Landroid/content/ActivityNotFoundException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception v0

    .line 539
    iput-object v9, v1, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->current:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;

    .line 540
    new-instance v2, Lorg/json/JSONObject;

    invoke-direct {v2}, Lorg/json/JSONObject;-><init>()V

    .line 541
    sget-object v3, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v3}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v3

    invoke-virtual {v2, v10, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 543
    new-instance v3, Ljava/lang/StringBuilder;

    const-string v4, "Activity not found: "

    invoke-direct {v3, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 544
    invoke-virtual {v0}, Landroid/content/ActivityNotFoundException;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 543
    invoke-virtual {v2, v8, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 546
    invoke-virtual {v5, v2}, Lorg/apache/cordova/CallbackContext;->error(Lorg/json/JSONObject;)V

    goto :goto_1

    .line 551
    :cond_1
    iput-object v9, v1, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->current:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;

    .line 552
    new-instance v2, Lorg/json/JSONObject;

    invoke-direct {v2}, Lorg/json/JSONObject;-><init>()V

    .line 553
    sget-object v3, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v3}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v3

    invoke-virtual {v2, v10, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 554
    new-instance v3, Ljava/lang/StringBuilder;

    const-string v4, "File \'"

    invoke-direct {v3, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v3, "\' is not available (Cannot create accessible file)."

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v8, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 555
    invoke-virtual {v5, v2}, Lorg/apache/cordova/CallbackContext;->error(Lorg/json/JSONObject;)V

    :goto_1
    return-void
.end method

.method static synthetic access$000(Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 49
    invoke-direct {p0, p1, p2, p3}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->doExecute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method static synthetic access$100(Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;Ljava/lang/Exception;Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 49
    invoke-direct {p0, p1, p2, p3, p4}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->handleException(Ljava/lang/Exception;Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method private canGetFile(Ljava/lang/String;)Z
    .locals 2

    .line 676
    const-string v0, "file:///android_asset/"

    invoke-virtual {p1, v0}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v0

    const/4 v1, 0x1

    if-eqz v0, :cond_0

    return v1

    .line 678
    :cond_0
    invoke-direct {p0, p1}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getFile(Ljava/lang/String;)Ljava/io/File;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 679
    invoke-virtual {p1}, Ljava/io/File;->exists()Z

    move-result p1

    if-eqz p1, :cond_1

    goto :goto_0

    :cond_1
    const/4 v1, 0x0

    :goto_0
    return v1
.end method

.method private clearTempFiles()V
    .locals 2

    .line 646
    invoke-direct {p0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getSharedTempDir()Ljava/io/File;

    move-result-object v0

    .line 647
    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v1

    if-nez v1, :cond_0

    return-void

    :cond_0
    const/4 v1, 0x0

    .line 651
    invoke-direct {p0, v0, v1}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->deleteRecursive(Ljava/io/File;Z)V

    return-void
.end method

.method private close(Ljava/io/Closeable;)V
    .locals 0

    if-eqz p1, :cond_0

    .line 716
    :try_start_0
    invoke-interface {p1}, Ljava/io/Closeable;->close()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 720
    invoke-virtual {p1}, Ljava/lang/Exception;->printStackTrace()V

    :cond_0
    :goto_0
    return-void
.end method

.method private copyFile(Ljava/io/File;Ljava/io/File;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 564
    new-instance v0, Ljava/io/FileInputStream;

    invoke-direct {v0, p1}, Ljava/io/FileInputStream;-><init>(Ljava/io/File;)V

    invoke-direct {p0, v0, p2}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->copyFile(Ljava/io/InputStream;Ljava/io/File;)V

    return-void
.end method

.method private copyFile(Ljava/io/InputStream;Ljava/io/File;)V
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 572
    invoke-virtual {p2}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v0

    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v0

    if-nez v0, :cond_1

    .line 573
    invoke-virtual {p2}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v0

    invoke-virtual {v0}, Ljava/io/File;->mkdirs()Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    .line 574
    :cond_0
    new-instance p1, Ljava/io/IOException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Cannot create path "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object p2

    .line 575
    invoke-virtual {p2}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/io/IOException;-><init>(Ljava/lang/String;)V

    throw p1

    :cond_1
    :goto_0
    const/4 v0, 0x0

    .line 579
    :try_start_0
    new-instance v1, Ljava/io/FileOutputStream;

    invoke-direct {v1, p2}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_2
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/16 v0, 0x400

    .line 580
    :try_start_1
    new-array v0, v0, [B

    .line 582
    :goto_1
    invoke-virtual {p1, v0}, Ljava/io/InputStream;->read([B)I

    move-result v2

    const/4 v3, -0x1

    if-eq v2, v3, :cond_2

    const/4 v3, 0x0

    .line 583
    invoke-virtual {v1, v0, v3, v2}, Ljava/io/OutputStream;->write([BII)V
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_1

    goto :goto_1

    :cond_2
    if-eqz p1, :cond_3

    .line 597
    :try_start_2
    invoke-virtual {p1}, Ljava/io/InputStream;->close()V
    :try_end_2
    .catch Ljava/io/IOException; {:try_start_2 .. :try_end_2} :catch_0

    .line 608
    :catch_0
    :cond_3
    :goto_2
    :try_start_3
    invoke-virtual {v1}, Ljava/io/OutputStream;->close()V
    :try_end_3
    .catch Ljava/io/IOException; {:try_start_3 .. :try_end_3} :catch_4

    goto :goto_4

    :catch_1
    move-exception v0

    goto :goto_3

    :catchall_0
    move-exception p2

    goto :goto_5

    :catch_2
    move-exception v1

    move-object v5, v1

    move-object v1, v0

    move-object v0, v5

    .line 587
    :goto_3
    :try_start_4
    const-string v2, "DocumentViewerPlugin"

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3}, Ljava/lang/StringBuilder;-><init>()V

    const-string v4, "Failed to copy stream to "

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    .line 588
    invoke-virtual {p2}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {v3, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    .line 587
    invoke-static {v2, p2, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I
    :try_end_4
    .catchall {:try_start_4 .. :try_end_4} :catchall_1

    if-eqz p1, :cond_4

    .line 597
    :try_start_5
    invoke-virtual {p1}, Ljava/io/InputStream;->close()V
    :try_end_5
    .catch Ljava/io/IOException; {:try_start_5 .. :try_end_5} :catch_3

    :catch_3
    :cond_4
    if-eqz v1, :cond_5

    goto :goto_2

    :catch_4
    :cond_5
    :goto_4
    return-void

    :catchall_1
    move-exception p2

    move-object v0, v1

    :goto_5
    if-eqz p1, :cond_6

    :try_start_6
    invoke-virtual {p1}, Ljava/io/InputStream;->close()V
    :try_end_6
    .catch Ljava/io/IOException; {:try_start_6 .. :try_end_6} :catch_5

    :catch_5
    :cond_6
    if-eqz v0, :cond_7

    .line 608
    :try_start_7
    invoke-virtual {v0}, Ljava/io/OutputStream;->close()V
    :try_end_7
    .catch Ljava/io/IOException; {:try_start_7 .. :try_end_7} :catch_6

    .line 615
    :catch_6
    :cond_7
    throw p2
.end method

.method private deleteRecursive(Ljava/io/File;Z)V
    .locals 5

    .line 656
    invoke-virtual {p1}, Ljava/io/File;->exists()Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 659
    :cond_0
    invoke-virtual {p1}, Ljava/io/File;->isDirectory()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 661
    invoke-virtual {p1}, Ljava/io/File;->listFiles()[Ljava/io/File;

    move-result-object v0

    .line 662
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_1

    aget-object v3, v0, v2

    const/4 v4, 0x1

    .line 663
    invoke-direct {p0, v3, v4}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->deleteRecursive(Ljava/io/File;Z)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_1
    if-eqz p2, :cond_2

    .line 666
    invoke-virtual {p1}, Ljava/io/File;->delete()Z

    move-result p2

    if-nez p2, :cond_2

    .line 667
    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "Failed to delete file "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Ljava/io/File;->getAbsoluteFile()Ljava/io/File;

    move-result-object p1

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string p2, "DocumentViewerPlugin"

    invoke-static {p2, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    :cond_2
    return-void
.end method

.method private doExecute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
    .locals 13
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    move-object v7, p0

    move-object v0, p1

    move-object/from16 v5, p3

    .line 245
    invoke-virtual {p2}, Lorg/json/JSONArray;->length()I

    move-result v1

    const/4 v2, 0x0

    if-lez v1, :cond_0

    move-object v1, p2

    .line 247
    invoke-virtual {p2, v2}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v1

    .line 248
    const-string v3, "options"

    invoke-virtual {v1, v3}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v3

    goto :goto_0

    .line 253
    :cond_0
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1}, Lorg/json/JSONObject;-><init>()V

    .line 254
    new-instance v3, Lorg/json/JSONObject;

    invoke-direct {v3}, Lorg/json/JSONObject;-><init>()V

    .line 257
    :goto_0
    const-string v4, "viewDocument"

    invoke-virtual {p1, v4}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v4

    const-string v6, "contentType"

    const-string v8, "url"

    const-string v9, "viewerAppPackage"

    const-string v10, "android"

    if-eqz v4, :cond_1

    .line 259
    invoke-virtual {v1, v8}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    .line 260
    invoke-virtual {v1, v6}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v6

    .line 262
    invoke-virtual {v3, v10}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    .line 264
    invoke-virtual {v0, v9}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    .line 267
    const-string v1, "viewerAppActivity"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    .line 271
    new-instance v10, Landroid/os/Bundle;

    invoke-direct {v10}, Landroid/os/Bundle;-><init>()V

    .line 273
    const-string v0, "documentView"

    .line 275
    invoke-virtual {v3, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    .line 276
    const-string v1, "closeLabel"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 274
    const-string v11, "documentView.closeLabel"

    invoke-virtual {v10, v11, v0}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 278
    const-string v0, "navigationView"

    .line 280
    invoke-virtual {v3, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    .line 281
    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 278
    const-string v1, "navigationView.closeLabel"

    invoke-virtual {v10, v1, v0}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 283
    const-string v0, "email"

    .line 284
    invoke-virtual {v3, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    .line 285
    const-string v1, "enabled"

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    .line 283
    const-string v11, "email.enabled"

    invoke-virtual {v10, v11, v0}, Landroid/os/Bundle;->putBoolean(Ljava/lang/String;Z)V

    .line 287
    const-string v0, "print"

    .line 288
    invoke-virtual {v3, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    .line 289
    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    .line 287
    const-string v11, "print.enabled"

    invoke-virtual {v10, v11, v0}, Landroid/os/Bundle;->putBoolean(Ljava/lang/String;Z)V

    .line 291
    const-string v0, "openWith"

    .line 292
    invoke-virtual {v3, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    .line 293
    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    .line 291
    const-string v11, "openWith.enabled"

    invoke-virtual {v10, v11, v0}, Landroid/os/Bundle;->putBoolean(Ljava/lang/String;Z)V

    .line 295
    const-string v0, "bookmarks"

    .line 296
    invoke-virtual {v3, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    .line 297
    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    .line 295
    const-string v11, "bookmarks.enabled"

    invoke-virtual {v10, v11, v0}, Landroid/os/Bundle;->putBoolean(Ljava/lang/String;Z)V

    .line 299
    const-string v0, "search"

    .line 300
    invoke-virtual {v3, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    .line 301
    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    .line 299
    const-string v1, "search.enabled"

    invoke-virtual {v10, v1, v0}, Landroid/os/Bundle;->putBoolean(Ljava/lang/String;Z)V

    .line 303
    const-string v0, "autoClose"

    .line 305
    invoke-virtual {v3, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    const-string v1, "onPause"

    .line 306
    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    .line 303
    const-string v1, "autoClose.onPause"

    invoke-virtual {v10, v1, v0}, Landroid/os/Bundle;->putBoolean(Ljava/lang/String;Z)V

    .line 309
    const-string v0, "title"

    invoke-virtual {v3, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v10, v0, v1}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    move-object v0, p0

    move-object v1, v4

    move-object v2, v6

    move-object v3, v8

    move-object v4, v9

    move-object/from16 v5, p3

    move-object v6, v10

    .line 311
    invoke-direct/range {v0 .. v6}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->_open(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lorg/apache/cordova/CallbackContext;Landroid/os/Bundle;)V

    goto/16 :goto_2

    .line 316
    :cond_1
    const-string v2, "close"

    invoke-virtual {p1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_2

    .line 318
    invoke-direct {p0, v5}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->_close(Lorg/apache/cordova/CallbackContext;)V

    goto/16 :goto_2

    .line 320
    :cond_2
    const-string v2, "appPaused"

    invoke-virtual {p1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_3

    .line 322
    invoke-direct {p0, v5}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->_ignore(Lorg/apache/cordova/CallbackContext;)V

    goto/16 :goto_2

    .line 324
    :cond_3
    const-string v2, "appResumed"

    invoke-virtual {p1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_4

    .line 326
    invoke-direct {p0, v5}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->_ignore(Lorg/apache/cordova/CallbackContext;)V

    goto/16 :goto_2

    .line 328
    :cond_4
    const-string v2, "install"

    invoke-virtual {p1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_5

    .line 330
    invoke-virtual {v3, v10}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    invoke-virtual {v0, v9}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 334
    invoke-direct {p0, v0, v5}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->_install(Ljava/lang/String;Lorg/apache/cordova/CallbackContext;)V

    goto/16 :goto_2

    .line 336
    :cond_5
    const-string v2, "canViewDocument"

    invoke-virtual {p1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    const-string v4, "application/pdf"

    const-string v11, "message"

    const-string v12, "status"

    if-eqz v2, :cond_9

    .line 338
    invoke-virtual {v1, v8}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 340
    invoke-virtual {v1, v6}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 342
    invoke-virtual {v3, v10}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v2

    .line 344
    invoke-virtual {v2, v9}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    .line 348
    new-instance v3, Lorg/json/JSONObject;

    invoke-direct {v3}, Lorg/json/JSONObject;-><init>()V

    .line 349
    invoke-virtual {v4, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v4

    const-string v6, "DocumentViewerPlugin"

    if-eqz v4, :cond_8

    .line 351
    invoke-direct {p0, v0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->canGetFile(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_7

    .line 353
    invoke-direct {p0, v2}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->_appIsInstalled(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_6

    .line 355
    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->NO_RESULT:Lorg/apache/cordova/PluginResult$Status;

    .line 356
    invoke-virtual {v0}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v0

    .line 355
    invoke-virtual {v3, v12, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 358
    const-string v0, "missingAppId"

    invoke-virtual {v3, v0, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_1

    .line 362
    :cond_6
    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    .line 363
    invoke-virtual {v0}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v0

    .line 362
    invoke-virtual {v3, v12, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    goto :goto_1

    .line 369
    :cond_7
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "File \'"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\' is not available (cannot access file)"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 370
    invoke-static {v6, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 371
    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->NO_RESULT:Lorg/apache/cordova/PluginResult$Status;

    .line 372
    invoke-virtual {v1}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v1

    .line 371
    invoke-virtual {v3, v12, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 374
    invoke-virtual {v3, v11, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_1

    .line 379
    :cond_8
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v2, "Content type \'"

    invoke-direct {v0, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\' is not supported"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 381
    invoke-static {v6, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 382
    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->NO_RESULT:Lorg/apache/cordova/PluginResult$Status;

    .line 383
    invoke-virtual {v1}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v1

    .line 382
    invoke-virtual {v3, v12, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 385
    invoke-virtual {v3, v11, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 388
    :goto_1
    invoke-virtual {v5, v3}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V

    goto :goto_2

    .line 390
    :cond_9
    const-string v1, "getSupportInfo"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_a

    .line 392
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 393
    new-instance v1, Lorg/json/JSONArray;

    invoke-direct {v1}, Lorg/json/JSONArray;-><init>()V

    .line 394
    invoke-virtual {v1, v4}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    .line 395
    const-string v2, "supported"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 396
    invoke-virtual {v5, v0}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V

    goto :goto_2

    .line 400
    :cond_a
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1}, Lorg/json/JSONObject;-><init>()V

    .line 401
    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->INVALID_ACTION:Lorg/apache/cordova/PluginResult$Status;

    .line 402
    invoke-virtual {v2}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v2

    .line 401
    invoke-virtual {v1, v12, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 404
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Invalid action \'"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v2, "\'"

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v11, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 405
    invoke-virtual {v5, v1}, Lorg/apache/cordova/CallbackContext;->error(Lorg/json/JSONObject;)V

    :goto_2
    return-void
.end method

.method private getAccessibleFile(Ljava/lang/String;)Ljava/io/File;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 705
    invoke-direct {p0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->newApi()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 706
    invoke-direct {p0, p1}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getAccessibleFileNew(Ljava/lang/String;)Ljava/io/File;

    move-result-object p1

    return-object p1

    .line 708
    :cond_0
    invoke-direct {p0, p1}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getAccessibleFileOld(Ljava/lang/String;)Ljava/io/File;

    move-result-object p1

    return-object p1
.end method

.method private getAccessibleFileNew(Ljava/lang/String;)Ljava/io/File;
    .locals 7
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const-string v0, "mkdirs "

    const-string v1, "Failed to copy file: "

    .line 727
    iget-object v2, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->webView:Lorg/apache/cordova/CordovaWebView;

    invoke-interface {v2}, Lorg/apache/cordova/CordovaWebView;->getResourceApi()Lorg/apache/cordova/CordovaResourceApi;

    move-result-object v2

    .line 728
    invoke-static {p1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v3

    const/4 v4, 0x0

    .line 732
    :try_start_0
    new-instance v5, Ljava/io/File;

    invoke-virtual {v3}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v6

    invoke-direct {v5, v6}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    invoke-virtual {v5}, Ljava/io/File;->getName()Ljava/lang/String;

    move-result-object v5

    .line 733
    invoke-direct {p0, v5}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getSharedTempFile(Ljava/lang/String;)Ljava/io/File;

    move-result-object v5

    .line 734
    invoke-virtual {v5}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v6

    invoke-virtual {v6}, Ljava/io/File;->exists()Z

    move-result v6

    if-nez v6, :cond_1

    .line 735
    invoke-virtual {v5}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v6

    invoke-virtual {v6}, Ljava/io/File;->mkdirs()Z

    move-result v6

    if-eqz v6, :cond_0

    goto :goto_0

    .line 736
    :cond_0
    new-instance v2, Ljava/io/IOException;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 737
    invoke-virtual {v5}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v0

    invoke-virtual {v0}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v3, " failed."

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-direct {v2, v0}, Ljava/io/IOException;-><init>(Ljava/lang/String;)V

    throw v2

    .line 739
    :cond_1
    :goto_0
    new-instance v0, Ljava/io/FileOutputStream;

    invoke-direct {v0, v5}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;)V
    :try_end_0
    .catch Ljava/io/FileNotFoundException; {:try_start_0 .. :try_end_0} :catch_2
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_1
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    .line 740
    :try_start_1
    invoke-virtual {v2, v3, v0}, Lorg/apache/cordova/CordovaResourceApi;->copyResource(Landroid/net/Uri;Ljava/io/OutputStream;)V

    .line 741
    invoke-virtual {v5}, Ljava/io/File;->deleteOnExit()V
    :try_end_1
    .catch Ljava/io/FileNotFoundException; {:try_start_1 .. :try_end_1} :catch_3
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 757
    invoke-direct {p0, v0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->close(Ljava/io/Closeable;)V

    return-object v5

    :catchall_0
    move-exception p1

    move-object v4, v0

    goto :goto_2

    :catch_0
    move-exception v2

    move-object v4, v0

    move-object v0, v2

    goto :goto_1

    :catchall_1
    move-exception p1

    goto :goto_2

    :catch_1
    move-exception v0

    .line 750
    :goto_1
    :try_start_2
    const-string v2, "DocumentViewerPlugin"

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v2, p1, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 751
    new-instance p1, Lorg/json/JSONException;

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v1

    invoke-direct {p1, v1}, Lorg/json/JSONException;-><init>(Ljava/lang/String;)V

    .line 752
    invoke-virtual {p1, v0}, Lorg/json/JSONException;->initCause(Ljava/lang/Throwable;)Ljava/lang/Throwable;

    .line 753
    throw p1
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_1

    .line 757
    :goto_2
    invoke-direct {p0, v4}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->close(Ljava/io/Closeable;)V

    .line 758
    throw p1

    :catch_2
    move-object v0, v4

    .line 757
    :catch_3
    invoke-direct {p0, v0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->close(Ljava/io/Closeable;)V

    return-object v4
.end method

.method private getAccessibleFileOld(Ljava/lang/String;)Ljava/io/File;
    .locals 5
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 765
    const-string v0, "file:///android_asset/"

    invoke-virtual {p1, v0}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v1

    const-string v2, "Failed to copy file: "

    const-string v3, "DocumentViewerPlugin"

    const/4 v4, 0x0

    if-eqz v1, :cond_1

    .line 767
    invoke-virtual {v0}, Ljava/lang/String;->length()I

    move-result v0

    invoke-virtual {p1, v0}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p1

    .line 768
    sget-object v0, Ljava/io/File;->pathSeparator:Ljava/lang/String;

    .line 769
    invoke-virtual {p1, v0}, Ljava/lang/String;->lastIndexOf(Ljava/lang/String;)I

    move-result v0

    add-int/lit8 v0, v0, 0x1

    .line 768
    invoke-virtual {p1, v0}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object v0

    .line 775
    :try_start_0
    invoke-direct {p0, v0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getSharedTempFile(Ljava/lang/String;)Ljava/io/File;

    move-result-object v0
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_1

    .line 779
    :try_start_1
    iget-object v1, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Activity;->getAssets()Landroid/content/res/AssetManager;

    move-result-object v1

    invoke-virtual {v1, p1}, Landroid/content/res/AssetManager;->open(Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object v1
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_0

    if-nez v1, :cond_0

    return-object v4

    .line 788
    :cond_0
    :try_start_2
    invoke-direct {p0, v1, v0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->copyFile(Ljava/io/InputStream;Ljava/io/File;)V

    .line 789
    invoke-virtual {v0}, Ljava/io/File;->deleteOnExit()V
    :try_end_2
    .catch Ljava/io/IOException; {:try_start_2 .. :try_end_2} :catch_1

    return-object v0

    :catch_0
    return-object v4

    :catch_1
    move-exception v0

    .line 794
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v3, p1, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 795
    new-instance p1, Lorg/json/JSONException;

    invoke-virtual {v0}, Ljava/io/IOException;->getMessage()Ljava/lang/String;

    move-result-object v1

    invoke-direct {p1, v1}, Lorg/json/JSONException;-><init>(Ljava/lang/String;)V

    .line 796
    invoke-virtual {p1, v0}, Lorg/json/JSONException;->initCause(Ljava/lang/Throwable;)Ljava/lang/Throwable;

    .line 797
    throw p1

    .line 802
    :cond_1
    invoke-direct {p0, p1}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getFile(Ljava/lang/String;)Ljava/io/File;

    move-result-object p1

    if-eqz p1, :cond_4

    .line 803
    invoke-virtual {p1}, Ljava/io/File;->exists()Z

    move-result v0

    if-eqz v0, :cond_4

    invoke-virtual {p1}, Ljava/io/File;->isFile()Z

    move-result v0

    if-nez v0, :cond_2

    goto :goto_0

    .line 808
    :cond_2
    invoke-virtual {p1}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v0

    iget-object v1, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    .line 809
    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Activity;->getFilesDir()Ljava/io/File;

    move-result-object v1

    invoke-virtual {v1}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v1

    .line 808
    invoke-virtual {v0, v1}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v0

    if-eqz v0, :cond_3

    .line 819
    :try_start_3
    invoke-virtual {p1}, Ljava/io/File;->getName()Ljava/lang/String;

    move-result-object v0

    invoke-direct {p0, v0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getSharedTempFile(Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 820
    invoke-direct {p0, p1, v0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->copyFile(Ljava/io/File;Ljava/io/File;)V

    .line 821
    invoke-virtual {v0}, Ljava/io/File;->deleteOnExit()V
    :try_end_3
    .catch Ljava/io/IOException; {:try_start_3 .. :try_end_3} :catch_2

    return-object v0

    :catch_2
    move-exception v0

    .line 826
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Ljava/io/File;->getName()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v3, p1, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 827
    new-instance p1, Lorg/json/JSONException;

    invoke-virtual {v0}, Ljava/io/IOException;->getMessage()Ljava/lang/String;

    move-result-object v1

    invoke-direct {p1, v1}, Lorg/json/JSONException;-><init>(Ljava/lang/String;)V

    .line 828
    invoke-virtual {p1, v0}, Lorg/json/JSONException;->initCause(Ljava/lang/Throwable;)Ljava/lang/Throwable;

    .line 829
    throw p1

    :cond_3
    return-object p1

    :cond_4
    :goto_0
    return-object v4
.end method

.method private getFile(Ljava/lang/String;)Ljava/io/File;
    .locals 1

    .line 840
    invoke-direct {p0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->newApi()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 841
    invoke-direct {p0, p1}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getFileNew(Ljava/lang/String;)Ljava/io/File;

    move-result-object p1

    return-object p1

    .line 843
    :cond_0
    invoke-direct {p0, p1}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getFileOld(Ljava/lang/String;)Ljava/io/File;

    move-result-object p1

    return-object p1
.end method

.method private getFileNew(Ljava/lang/String;)Ljava/io/File;
    .locals 1

    .line 848
    iget-object v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->webView:Lorg/apache/cordova/CordovaWebView;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaWebView;->getResourceApi()Lorg/apache/cordova/CordovaResourceApi;

    move-result-object v0

    .line 849
    invoke-static {p1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p1

    .line 850
    invoke-virtual {v0, p1}, Lorg/apache/cordova/CordovaResourceApi;->mapUriToFile(Landroid/net/Uri;)Ljava/io/File;

    move-result-object p1

    return-object p1
.end method

.method private getFileOld(Ljava/lang/String;)Ljava/io/File;
    .locals 2

    .line 858
    :try_start_0
    iget-object v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->webView:Lorg/apache/cordova/CordovaWebView;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaWebView;->getResourceApi()Lorg/apache/cordova/CordovaResourceApi;

    move-result-object v0

    .line 859
    invoke-static {p1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v1

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CordovaResourceApi;->remapUri(Landroid/net/Uri;)Landroid/net/Uri;

    move-result-object v0

    .line 860
    invoke-virtual {v0}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-direct {p0, v0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->stripFileProtocol(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    .line 866
    :catch_0
    new-instance v0, Ljava/io/File;

    invoke-direct {v0, p1}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    return-object v0
.end method

.method private getSharedTempDir()Ljava/io/File;
    .locals 6

    .line 628
    invoke-direct {p0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->newApi()Z

    move-result v0

    const-string v1, "DocumentViewerPlugin"

    const-string v2, "tmp"

    if-eqz v0, :cond_0

    .line 630
    new-instance v0, Ljava/io/File;

    new-instance v3, Ljava/io/File;

    iget-object v4, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    .line 631
    invoke-interface {v4}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v4

    invoke-virtual {v4}, Landroid/app/Activity;->getCacheDir()Ljava/io/File;

    move-result-object v4

    invoke-direct {v3, v4, v2}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    invoke-direct {v0, v3, v1}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    return-object v0

    .line 636
    :cond_0
    new-instance v0, Ljava/io/File;

    new-instance v3, Ljava/io/File;

    iget-object v4, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    .line 637
    invoke-interface {v4}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v4

    const/4 v5, 0x0

    invoke-virtual {v4, v5}, Landroid/app/Activity;->getExternalFilesDir(Ljava/lang/String;)Ljava/io/File;

    move-result-object v4

    invoke-direct {v3, v4, v2}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    invoke-direct {v0, v3, v1}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    return-object v0
.end method

.method private getSharedTempFile(Ljava/lang/String;)Ljava/io/File;
    .locals 5

    .line 623
    new-instance v0, Ljava/io/File;

    invoke-direct {p0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getSharedTempDir()Ljava/io/File;

    move-result-object v1

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    iget v3, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->tempCounter:I

    add-int/lit8 v4, v3, 0x1

    iput v4, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->tempCounter:I

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v2

    const-string v3, "."

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v0, v1, p1}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    return-object v0
.end method

.method private getStackTrace(Ljava/lang/Throwable;)Ljava/lang/String;
    .locals 2

    if-nez p1, :cond_0

    .line 221
    const-string p1, ""

    return-object p1

    .line 222
    :cond_0
    new-instance v0, Ljava/io/StringWriter;

    invoke-direct {v0}, Ljava/io/StringWriter;-><init>()V

    .line 223
    new-instance v1, Ljava/io/PrintWriter;

    invoke-direct {v1, v0}, Ljava/io/PrintWriter;-><init>(Ljava/io/Writer;)V

    .line 224
    invoke-virtual {p1, v1}, Ljava/lang/Throwable;->printStackTrace(Ljava/io/PrintWriter;)V

    .line 228
    :try_start_0
    invoke-virtual {v1}, Ljava/io/PrintWriter;->close()V

    .line 229
    invoke-virtual {v0}, Ljava/io/StringWriter;->flush()V

    .line 230
    invoke-virtual {v0}, Ljava/io/StringWriter;->close()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    .line 237
    :catch_0
    invoke-virtual {v0}, Ljava/io/StringWriter;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method private handleException(Ljava/lang/Exception;Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
    .locals 1

    .line 198
    invoke-virtual {p1}, Ljava/lang/Exception;->printStackTrace()V

    .line 202
    :try_start_0
    new-instance p2, Lorg/json/JSONObject;

    invoke-direct {p2}, Lorg/json/JSONObject;-><init>()V

    .line 203
    const-string p3, "status"

    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    .line 204
    invoke-virtual {v0}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result v0

    .line 203
    invoke-virtual {p2, p3, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 206
    const-string p3, "message"

    invoke-virtual {p1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p2, p3, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 207
    const-string p3, "details"

    invoke-direct {p0, p1}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->getStackTrace(Ljava/lang/Throwable;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p2, p3, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 208
    invoke-virtual {p4, p2}, Lorg/apache/cordova/CallbackContext;->error(Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p2

    .line 213
    invoke-virtual {p2}, Lorg/json/JSONException;->printStackTrace()V

    .line 214
    invoke-virtual {p1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p4, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method private newApi()Z
    .locals 1

    const/4 v0, 0x1

    return v0
.end method

.method private stripFileProtocol(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 924
    const-string v0, "file://"

    invoke-virtual {p1, v0}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x7

    .line 925
    invoke-virtual {p1, v0}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p1

    :cond_0
    return-object p1
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 2

    .line 178
    iget-object v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object v0

    new-instance v1, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;

    invoke-direct {v1, p0, p1, p2, p3}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$1;-><init>(Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    invoke-interface {v0, v1}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    const/4 p1, 0x1

    return p1
.end method

.method public initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V
    .locals 0

    .line 136
    invoke-super {p0, p1, p2}, Lorg/apache/cordova/CordovaPlugin;->initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V

    .line 137
    invoke-direct {p0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->clearTempFiles()V

    return-void
.end method

.method public onActivityResult(IILandroid/content/Intent;)V
    .locals 1

    .line 420
    iget-object p2, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->callbackContext:Lorg/apache/cordova/CallbackContext;

    if-nez p2, :cond_0

    return-void

    :cond_0
    const/16 p3, 0x3e8

    const/4 v0, 0x0

    if-ne p1, p3, :cond_1

    .line 425
    iput-object v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->current:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;

    .line 427
    invoke-direct {p0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->clearTempFiles()V

    .line 431
    :try_start_0
    new-instance p1, Lorg/json/JSONObject;

    invoke-direct {p1}, Lorg/json/JSONObject;-><init>()V

    .line 432
    const-string p2, "status"

    sget-object p3, Lorg/apache/cordova/PluginResult$Status;->NO_RESULT:Lorg/apache/cordova/PluginResult$Status;

    .line 433
    invoke-virtual {p3}, Lorg/apache/cordova/PluginResult$Status;->ordinal()I

    move-result p3

    .line 432
    invoke-virtual {p1, p2, p3}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 435
    iget-object p2, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 439
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    .line 441
    :goto_0
    iput-object v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->callbackContext:Lorg/apache/cordova/CallbackContext;

    goto :goto_1

    :cond_1
    const/16 p3, 0x3e9

    if-ne p1, p3, :cond_2

    .line 445
    iput-object v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->current:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;

    .line 447
    invoke-virtual {p2}, Lorg/apache/cordova/CallbackContext;->success()V

    .line 448
    iput-object v0, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->callbackContext:Lorg/apache/cordova/CallbackContext;

    :cond_2
    :goto_1
    return-void
.end method

.method public onDestroy()V
    .locals 0

    .line 142
    invoke-direct {p0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->clearTempFiles()V

    .line 143
    invoke-super {p0}, Lorg/apache/cordova/CordovaPlugin;->onDestroy()V

    return-void
.end method

.method public onReset()V
    .locals 0

    .line 148
    invoke-direct {p0}, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;->clearTempFiles()V

    .line 149
    invoke-super {p0}, Lorg/apache/cordova/CordovaPlugin;->onReset()V

    return-void
.end method
