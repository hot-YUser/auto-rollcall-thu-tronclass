.class Lcom/onesignal/RootToolsInternalMethods;
.super Ljava/lang/Object;
.source "RootToolsInternalMethods.java"


# direct methods
.method constructor <init>()V
    .locals 0

    .line 26
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static isRooted()Z
    .locals 8

    const/16 v0, 0x8

    .line 28
    new-array v1, v0, [Ljava/lang/String;

    const-string v2, "/sbin/"

    const/4 v3, 0x0

    aput-object v2, v1, v3

    const-string v2, "/system/bin/"

    const/4 v4, 0x1

    aput-object v2, v1, v4

    const/4 v2, 0x2

    const-string v5, "/system/xbin/"

    aput-object v5, v1, v2

    const/4 v2, 0x3

    const-string v5, "/data/local/xbin/"

    aput-object v5, v1, v2

    const/4 v2, 0x4

    const-string v5, "/data/local/bin/"

    aput-object v5, v1, v2

    const/4 v2, 0x5

    const-string v5, "/system/sd/xbin/"

    aput-object v5, v1, v2

    const/4 v2, 0x6

    const-string v5, "/system/bin/failsafe/"

    aput-object v5, v1, v2

    const/4 v2, 0x7

    const-string v5, "/data/local/"

    aput-object v5, v1, v2

    move v2, v3

    :goto_0
    if-ge v2, v0, :cond_1

    .line 34
    :try_start_0
    aget-object v5, v1, v2

    .line 35
    new-instance v6, Ljava/io/File;

    new-instance v7, Ljava/lang/StringBuilder;

    invoke-direct {v7}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v7, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    const-string v7, "su"

    invoke-virtual {v5, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-direct {v6, v5}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    invoke-virtual {v6}, Ljava/io/File;->exists()Z

    move-result v5
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-eqz v5, :cond_0

    return v4

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :catchall_0
    :cond_1
    return v3
.end method
