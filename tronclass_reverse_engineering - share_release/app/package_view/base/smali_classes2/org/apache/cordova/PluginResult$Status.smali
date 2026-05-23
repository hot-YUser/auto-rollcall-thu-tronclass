.class public final enum Lorg/apache/cordova/PluginResult$Status;
.super Ljava/lang/Enum;
.source "PluginResult.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/apache/cordova/PluginResult;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "Status"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lorg/apache/cordova/PluginResult$Status;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lorg/apache/cordova/PluginResult$Status;

.field public static final enum CLASS_NOT_FOUND_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

.field public static final enum ERROR:Lorg/apache/cordova/PluginResult$Status;

.field public static final enum ILLEGAL_ACCESS_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

.field public static final enum INSTANTIATION_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

.field public static final enum INVALID_ACTION:Lorg/apache/cordova/PluginResult$Status;

.field public static final enum IO_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

.field public static final enum JSON_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

.field public static final enum MALFORMED_URL_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

.field public static final enum NO_RESULT:Lorg/apache/cordova/PluginResult$Status;

.field public static final enum OK:Lorg/apache/cordova/PluginResult$Status;


# direct methods
.method static constructor <clinit>()V
    .locals 12

    .line 187
    new-instance v0, Lorg/apache/cordova/PluginResult$Status;

    const-string v1, "NO_RESULT"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Lorg/apache/cordova/PluginResult$Status;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lorg/apache/cordova/PluginResult$Status;->NO_RESULT:Lorg/apache/cordova/PluginResult$Status;

    .line 188
    new-instance v1, Lorg/apache/cordova/PluginResult$Status;

    const-string v2, "OK"

    const/4 v3, 0x1

    invoke-direct {v1, v2, v3}, Lorg/apache/cordova/PluginResult$Status;-><init>(Ljava/lang/String;I)V

    sput-object v1, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    .line 189
    new-instance v2, Lorg/apache/cordova/PluginResult$Status;

    const-string v3, "CLASS_NOT_FOUND_EXCEPTION"

    const/4 v4, 0x2

    invoke-direct {v2, v3, v4}, Lorg/apache/cordova/PluginResult$Status;-><init>(Ljava/lang/String;I)V

    sput-object v2, Lorg/apache/cordova/PluginResult$Status;->CLASS_NOT_FOUND_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    .line 190
    new-instance v3, Lorg/apache/cordova/PluginResult$Status;

    const-string v4, "ILLEGAL_ACCESS_EXCEPTION"

    const/4 v5, 0x3

    invoke-direct {v3, v4, v5}, Lorg/apache/cordova/PluginResult$Status;-><init>(Ljava/lang/String;I)V

    sput-object v3, Lorg/apache/cordova/PluginResult$Status;->ILLEGAL_ACCESS_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    .line 191
    new-instance v4, Lorg/apache/cordova/PluginResult$Status;

    const-string v5, "INSTANTIATION_EXCEPTION"

    const/4 v6, 0x4

    invoke-direct {v4, v5, v6}, Lorg/apache/cordova/PluginResult$Status;-><init>(Ljava/lang/String;I)V

    sput-object v4, Lorg/apache/cordova/PluginResult$Status;->INSTANTIATION_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    .line 192
    new-instance v5, Lorg/apache/cordova/PluginResult$Status;

    const-string v6, "MALFORMED_URL_EXCEPTION"

    const/4 v7, 0x5

    invoke-direct {v5, v6, v7}, Lorg/apache/cordova/PluginResult$Status;-><init>(Ljava/lang/String;I)V

    sput-object v5, Lorg/apache/cordova/PluginResult$Status;->MALFORMED_URL_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    .line 193
    new-instance v6, Lorg/apache/cordova/PluginResult$Status;

    const-string v7, "IO_EXCEPTION"

    const/4 v8, 0x6

    invoke-direct {v6, v7, v8}, Lorg/apache/cordova/PluginResult$Status;-><init>(Ljava/lang/String;I)V

    sput-object v6, Lorg/apache/cordova/PluginResult$Status;->IO_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    .line 194
    new-instance v7, Lorg/apache/cordova/PluginResult$Status;

    const-string v8, "INVALID_ACTION"

    const/4 v9, 0x7

    invoke-direct {v7, v8, v9}, Lorg/apache/cordova/PluginResult$Status;-><init>(Ljava/lang/String;I)V

    sput-object v7, Lorg/apache/cordova/PluginResult$Status;->INVALID_ACTION:Lorg/apache/cordova/PluginResult$Status;

    .line 195
    new-instance v8, Lorg/apache/cordova/PluginResult$Status;

    const-string v9, "JSON_EXCEPTION"

    const/16 v10, 0x8

    invoke-direct {v8, v9, v10}, Lorg/apache/cordova/PluginResult$Status;-><init>(Ljava/lang/String;I)V

    sput-object v8, Lorg/apache/cordova/PluginResult$Status;->JSON_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    .line 196
    new-instance v9, Lorg/apache/cordova/PluginResult$Status;

    const-string v10, "ERROR"

    const/16 v11, 0x9

    invoke-direct {v9, v10, v11}, Lorg/apache/cordova/PluginResult$Status;-><init>(Ljava/lang/String;I)V

    sput-object v9, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    .line 186
    filled-new-array/range {v0 .. v9}, [Lorg/apache/cordova/PluginResult$Status;

    move-result-object v0

    sput-object v0, Lorg/apache/cordova/PluginResult$Status;->$VALUES:[Lorg/apache/cordova/PluginResult$Status;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 186
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Lorg/apache/cordova/PluginResult$Status;
    .locals 1

    .line 186
    const-class v0, Lorg/apache/cordova/PluginResult$Status;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lorg/apache/cordova/PluginResult$Status;

    return-object p0
.end method

.method public static values()[Lorg/apache/cordova/PluginResult$Status;
    .locals 1

    .line 186
    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->$VALUES:[Lorg/apache/cordova/PluginResult$Status;

    invoke-virtual {v0}, [Lorg/apache/cordova/PluginResult$Status;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lorg/apache/cordova/PluginResult$Status;

    return-object v0
.end method
