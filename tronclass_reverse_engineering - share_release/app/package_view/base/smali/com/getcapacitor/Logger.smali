.class public Lcom/getcapacitor/Logger;
.super Ljava/lang/Object;
.source "Logger.java"


# static fields
.field public static final LOG_TAG_CORE:Ljava/lang/String; = "Capacitor"

.field public static config:Lcom/getcapacitor/CapConfig;

.field private static instance:Lcom/getcapacitor/Logger;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 6
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static debug(Ljava/lang/String;)V
    .locals 1

    .line 48
    const-string v0, "Capacitor"

    invoke-static {v0, p0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public static debug(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    .line 52
    invoke-static {}, Lcom/getcapacitor/Logger;->shouldLog()Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 56
    :cond_0
    invoke-static {p0, p1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    return-void
.end method

.method public static error(Ljava/lang/String;)V
    .locals 2

    .line 84
    const-string v0, "Capacitor"

    const/4 v1, 0x0

    invoke-static {v0, p0, v1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    return-void
.end method

.method public static error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V
    .locals 1

    .line 92
    invoke-static {}, Lcom/getcapacitor/Logger;->shouldLog()Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 96
    :cond_0
    invoke-static {p0, p1, p2}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    return-void
.end method

.method public static error(Ljava/lang/String;Ljava/lang/Throwable;)V
    .locals 1

    .line 88
    const-string v0, "Capacitor"

    invoke-static {v0, p0, p1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    return-void
.end method

.method private static getInstance()Lcom/getcapacitor/Logger;
    .locals 1

    .line 13
    sget-object v0, Lcom/getcapacitor/Logger;->instance:Lcom/getcapacitor/Logger;

    if-nez v0, :cond_0

    .line 14
    new-instance v0, Lcom/getcapacitor/Logger;

    invoke-direct {v0}, Lcom/getcapacitor/Logger;-><init>()V

    sput-object v0, Lcom/getcapacitor/Logger;->instance:Lcom/getcapacitor/Logger;

    .line 16
    :cond_0
    sget-object v0, Lcom/getcapacitor/Logger;->instance:Lcom/getcapacitor/Logger;

    return-object v0
.end method

.method public static info(Ljava/lang/String;)V
    .locals 1

    .line 60
    const-string v0, "Capacitor"

    invoke-static {v0, p0}, Lcom/getcapacitor/Logger;->info(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public static info(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    .line 64
    invoke-static {}, Lcom/getcapacitor/Logger;->shouldLog()Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 68
    :cond_0
    invoke-static {p0, p1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    return-void
.end method

.method public static init(Lcom/getcapacitor/CapConfig;)V
    .locals 1

    .line 20
    invoke-static {}, Lcom/getcapacitor/Logger;->getInstance()Lcom/getcapacitor/Logger;

    move-result-object v0

    invoke-direct {v0, p0}, Lcom/getcapacitor/Logger;->loadConfig(Lcom/getcapacitor/CapConfig;)V

    return-void
.end method

.method private loadConfig(Lcom/getcapacitor/CapConfig;)V
    .locals 0

    .line 24
    sput-object p1, Lcom/getcapacitor/Logger;->config:Lcom/getcapacitor/CapConfig;

    return-void
.end method

.method protected static shouldLog()Z
    .locals 4

    .line 100
    sget-object v0, Lcom/getcapacitor/Logger;->config:Lcom/getcapacitor/CapConfig;

    if-eqz v0, :cond_0

    const-string v1, "hideLogs"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/CapConfig;->getBoolean(Ljava/lang/String;Z)Z

    move-result v1

    const-string v3, "android.hideLogs"

    invoke-virtual {v0, v3, v1}, Lcom/getcapacitor/CapConfig;->getBoolean(Ljava/lang/String;Z)Z

    move-result v0

    if-nez v0, :cond_1

    :cond_0
    const/4 v2, 0x1

    :cond_1
    return v2
.end method

.method public static varargs tags([Ljava/lang/String;)Ljava/lang/String;
    .locals 2

    if-eqz p0, :cond_0

    .line 28
    array-length v0, p0

    if-lez v0, :cond_0

    .line 29
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Capacitor/"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    const-string v1, "/"

    invoke-static {v1, p0}, Landroid/text/TextUtils;->join(Ljava/lang/CharSequence;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p0

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    return-object p0

    .line 32
    :cond_0
    const-string p0, "Capacitor"

    return-object p0
.end method

.method public static verbose(Ljava/lang/String;)V
    .locals 1

    .line 36
    const-string v0, "Capacitor"

    invoke-static {v0, p0}, Lcom/getcapacitor/Logger;->verbose(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public static verbose(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    .line 40
    invoke-static {}, Lcom/getcapacitor/Logger;->shouldLog()Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 44
    :cond_0
    invoke-static {p0, p1}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    return-void
.end method

.method public static warn(Ljava/lang/String;)V
    .locals 1

    .line 72
    const-string v0, "Capacitor"

    invoke-static {v0, p0}, Lcom/getcapacitor/Logger;->warn(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public static warn(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    .line 76
    invoke-static {}, Lcom/getcapacitor/Logger;->shouldLog()Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 80
    :cond_0
    invoke-static {p0, p1}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    return-void
.end method
