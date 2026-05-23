.class public final enum Lcom/getcapacitor/FileUtils$Type;
.super Ljava/lang/Enum;
.source "FileUtils.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/getcapacitor/FileUtils;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "Type"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/getcapacitor/FileUtils$Type;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lcom/getcapacitor/FileUtils$Type;

.field public static final enum IMAGE:Lcom/getcapacitor/FileUtils$Type;


# instance fields
.field private type:Ljava/lang/String;


# direct methods
.method private static synthetic $values()[Lcom/getcapacitor/FileUtils$Type;
    .locals 1

    .line 49
    sget-object v0, Lcom/getcapacitor/FileUtils$Type;->IMAGE:Lcom/getcapacitor/FileUtils$Type;

    filled-new-array {v0}, [Lcom/getcapacitor/FileUtils$Type;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 4

    .line 50
    new-instance v0, Lcom/getcapacitor/FileUtils$Type;

    const/4 v1, 0x0

    const-string v2, "image"

    const-string v3, "IMAGE"

    invoke-direct {v0, v3, v1, v2}, Lcom/getcapacitor/FileUtils$Type;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v0, Lcom/getcapacitor/FileUtils$Type;->IMAGE:Lcom/getcapacitor/FileUtils$Type;

    .line 49
    invoke-static {}, Lcom/getcapacitor/FileUtils$Type;->$values()[Lcom/getcapacitor/FileUtils$Type;

    move-result-object v0

    sput-object v0, Lcom/getcapacitor/FileUtils$Type;->$VALUES:[Lcom/getcapacitor/FileUtils$Type;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;ILjava/lang/String;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            ")V"
        }
    .end annotation

    .line 52
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    .line 53
    iput-object p3, p0, Lcom/getcapacitor/FileUtils$Type;->type:Ljava/lang/String;

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/getcapacitor/FileUtils$Type;
    .locals 1

    .line 49
    const-class v0, Lcom/getcapacitor/FileUtils$Type;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/getcapacitor/FileUtils$Type;

    return-object p0
.end method

.method public static values()[Lcom/getcapacitor/FileUtils$Type;
    .locals 1

    .line 49
    sget-object v0, Lcom/getcapacitor/FileUtils$Type;->$VALUES:[Lcom/getcapacitor/FileUtils$Type;

    invoke-virtual {v0}, [Lcom/getcapacitor/FileUtils$Type;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/getcapacitor/FileUtils$Type;

    return-object v0
.end method
