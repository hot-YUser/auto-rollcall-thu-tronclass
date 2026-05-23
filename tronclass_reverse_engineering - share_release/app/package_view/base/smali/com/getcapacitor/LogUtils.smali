.class public abstract Lcom/getcapacitor/LogUtils;
.super Ljava/lang/Object;
.source "LogUtils.java"


# static fields
.field public static final LOG_TAG_CORE:Ljava/lang/String; = "Capacitor"

.field public static final LOG_TAG_PLUGIN:Ljava/lang/String; = "Capacitor/Plugin"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 8
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static varargs getCoreTag([Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 27
    const-string v0, "Capacitor"

    invoke-static {v0, p0}, Lcom/getcapacitor/LogUtils;->getLogTag(Ljava/lang/String;[Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method private static getLogTag(Ljava/lang/String;[Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    if-eqz p1, :cond_0

    .line 41
    array-length v0, p1

    if-lez v0, :cond_0

    .line 42
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    const-string v0, "/"

    invoke-virtual {p0, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-static {v0, p1}, Landroid/text/TextUtils;->join(Ljava/lang/CharSequence;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    :cond_0
    return-object p0
.end method

.method public static varargs getPluginTag([Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 37
    const-string v0, "Capacitor/Plugin"

    invoke-static {v0, p0}, Lcom/getcapacitor/LogUtils;->getLogTag(Ljava/lang/String;[Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method
