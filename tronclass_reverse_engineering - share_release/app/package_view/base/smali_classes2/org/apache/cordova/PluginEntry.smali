.class public final Lorg/apache/cordova/PluginEntry;
.super Ljava/lang/Object;
.source "PluginEntry.java"


# instance fields
.field public final onload:Z

.field public final plugin:Lorg/apache/cordova/CordovaPlugin;

.field public final pluginClass:Ljava/lang/String;

.field public final service:Ljava/lang/String;


# direct methods
.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;Z)V
    .locals 1

    const/4 v0, 0x0

    .line 61
    invoke-direct {p0, p1, p2, p3, v0}, Lorg/apache/cordova/PluginEntry;-><init>(Ljava/lang/String;Ljava/lang/String;ZLorg/apache/cordova/CordovaPlugin;)V

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;Ljava/lang/String;ZLorg/apache/cordova/CordovaPlugin;)V
    .locals 0

    .line 64
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 65
    iput-object p1, p0, Lorg/apache/cordova/PluginEntry;->service:Ljava/lang/String;

    .line 66
    iput-object p2, p0, Lorg/apache/cordova/PluginEntry;->pluginClass:Ljava/lang/String;

    .line 67
    iput-boolean p3, p0, Lorg/apache/cordova/PluginEntry;->onload:Z

    .line 68
    iput-object p4, p0, Lorg/apache/cordova/PluginEntry;->plugin:Lorg/apache/cordova/CordovaPlugin;

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Lorg/apache/cordova/CordovaPlugin;)V
    .locals 2

    .line 52
    invoke-virtual {p2}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x1

    invoke-direct {p0, p1, v0, v1, p2}, Lorg/apache/cordova/PluginEntry;-><init>(Ljava/lang/String;Ljava/lang/String;ZLorg/apache/cordova/CordovaPlugin;)V

    return-void
.end method
