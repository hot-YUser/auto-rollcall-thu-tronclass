.class public final enum Lcom/onesignal/OSTrigger$OSTriggerOperator;
.super Ljava/lang/Enum;
.source "OSTrigger.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OSTrigger;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "OSTriggerOperator"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/onesignal/OSTrigger$OSTriggerOperator;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lcom/onesignal/OSTrigger$OSTriggerOperator;

.field public static final enum CONTAINS:Lcom/onesignal/OSTrigger$OSTriggerOperator;

.field public static final enum EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

.field public static final enum EXISTS:Lcom/onesignal/OSTrigger$OSTriggerOperator;

.field public static final enum GREATER_THAN:Lcom/onesignal/OSTrigger$OSTriggerOperator;

.field public static final enum GREATER_THAN_OR_EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

.field public static final enum LESS_THAN:Lcom/onesignal/OSTrigger$OSTriggerOperator;

.field public static final enum LESS_THAN_OR_EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

.field public static final enum NOT_EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

.field public static final enum NOT_EXISTS:Lcom/onesignal/OSTrigger$OSTriggerOperator;


# instance fields
.field private text:Ljava/lang/String;


# direct methods
.method static constructor <clinit>()V
    .locals 12

    .line 15
    new-instance v0, Lcom/onesignal/OSTrigger$OSTriggerOperator;

    const/4 v1, 0x0

    const-string v2, "greater"

    const-string v3, "GREATER_THAN"

    invoke-direct {v0, v3, v1, v2}, Lcom/onesignal/OSTrigger$OSTriggerOperator;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v0, Lcom/onesignal/OSTrigger$OSTriggerOperator;->GREATER_THAN:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    .line 16
    new-instance v1, Lcom/onesignal/OSTrigger$OSTriggerOperator;

    const/4 v2, 0x1

    const-string v3, "less"

    const-string v4, "LESS_THAN"

    invoke-direct {v1, v4, v2, v3}, Lcom/onesignal/OSTrigger$OSTriggerOperator;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v1, Lcom/onesignal/OSTrigger$OSTriggerOperator;->LESS_THAN:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    .line 17
    new-instance v2, Lcom/onesignal/OSTrigger$OSTriggerOperator;

    const/4 v3, 0x2

    const-string v4, "equal"

    const-string v5, "EQUAL_TO"

    invoke-direct {v2, v5, v3, v4}, Lcom/onesignal/OSTrigger$OSTriggerOperator;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v2, Lcom/onesignal/OSTrigger$OSTriggerOperator;->EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    .line 18
    new-instance v3, Lcom/onesignal/OSTrigger$OSTriggerOperator;

    const/4 v4, 0x3

    const-string v5, "not_equal"

    const-string v6, "NOT_EQUAL_TO"

    invoke-direct {v3, v6, v4, v5}, Lcom/onesignal/OSTrigger$OSTriggerOperator;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v3, Lcom/onesignal/OSTrigger$OSTriggerOperator;->NOT_EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    .line 19
    new-instance v4, Lcom/onesignal/OSTrigger$OSTriggerOperator;

    const/4 v5, 0x4

    const-string v6, "less_or_equal"

    const-string v7, "LESS_THAN_OR_EQUAL_TO"

    invoke-direct {v4, v7, v5, v6}, Lcom/onesignal/OSTrigger$OSTriggerOperator;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v4, Lcom/onesignal/OSTrigger$OSTriggerOperator;->LESS_THAN_OR_EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    .line 20
    new-instance v5, Lcom/onesignal/OSTrigger$OSTriggerOperator;

    const/4 v6, 0x5

    const-string v7, "greater_or_equal"

    const-string v8, "GREATER_THAN_OR_EQUAL_TO"

    invoke-direct {v5, v8, v6, v7}, Lcom/onesignal/OSTrigger$OSTriggerOperator;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v5, Lcom/onesignal/OSTrigger$OSTriggerOperator;->GREATER_THAN_OR_EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    .line 21
    new-instance v6, Lcom/onesignal/OSTrigger$OSTriggerOperator;

    const/4 v7, 0x6

    const-string v8, "exists"

    const-string v9, "EXISTS"

    invoke-direct {v6, v9, v7, v8}, Lcom/onesignal/OSTrigger$OSTriggerOperator;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v6, Lcom/onesignal/OSTrigger$OSTriggerOperator;->EXISTS:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    .line 22
    new-instance v7, Lcom/onesignal/OSTrigger$OSTriggerOperator;

    const/4 v8, 0x7

    const-string v9, "not_exists"

    const-string v10, "NOT_EXISTS"

    invoke-direct {v7, v10, v8, v9}, Lcom/onesignal/OSTrigger$OSTriggerOperator;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v7, Lcom/onesignal/OSTrigger$OSTriggerOperator;->NOT_EXISTS:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    .line 23
    new-instance v8, Lcom/onesignal/OSTrigger$OSTriggerOperator;

    const/16 v9, 0x8

    const-string v10, "in"

    const-string v11, "CONTAINS"

    invoke-direct {v8, v11, v9, v10}, Lcom/onesignal/OSTrigger$OSTriggerOperator;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v8, Lcom/onesignal/OSTrigger$OSTriggerOperator;->CONTAINS:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    .line 14
    filled-new-array/range {v0 .. v8}, [Lcom/onesignal/OSTrigger$OSTriggerOperator;

    move-result-object v0

    sput-object v0, Lcom/onesignal/OSTrigger$OSTriggerOperator;->$VALUES:[Lcom/onesignal/OSTrigger$OSTriggerOperator;

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

    .line 27
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    .line 28
    iput-object p3, p0, Lcom/onesignal/OSTrigger$OSTriggerOperator;->text:Ljava/lang/String;

    return-void
.end method

.method public static fromString(Ljava/lang/String;)Lcom/onesignal/OSTrigger$OSTriggerOperator;
    .locals 5

    .line 37
    invoke-static {}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->values()[Lcom/onesignal/OSTrigger$OSTriggerOperator;

    move-result-object v0

    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_1

    aget-object v3, v0, v2

    .line 38
    iget-object v4, v3, Lcom/onesignal/OSTrigger$OSTriggerOperator;->text:Ljava/lang/String;

    invoke-virtual {v4, p0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v4

    if-eqz v4, :cond_0

    return-object v3

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 42
    :cond_1
    sget-object p0, Lcom/onesignal/OSTrigger$OSTriggerOperator;->EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    return-object p0
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/onesignal/OSTrigger$OSTriggerOperator;
    .locals 1

    .line 14
    const-class v0, Lcom/onesignal/OSTrigger$OSTriggerOperator;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/onesignal/OSTrigger$OSTriggerOperator;

    return-object p0
.end method

.method public static values()[Lcom/onesignal/OSTrigger$OSTriggerOperator;
    .locals 1

    .line 14
    sget-object v0, Lcom/onesignal/OSTrigger$OSTriggerOperator;->$VALUES:[Lcom/onesignal/OSTrigger$OSTriggerOperator;

    invoke-virtual {v0}, [Lcom/onesignal/OSTrigger$OSTriggerOperator;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/onesignal/OSTrigger$OSTriggerOperator;

    return-object v0
.end method


# virtual methods
.method public checksEquality()Z
    .locals 1

    .line 46
    sget-object v0, Lcom/onesignal/OSTrigger$OSTriggerOperator;->EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    if-eq p0, v0, :cond_1

    sget-object v0, Lcom/onesignal/OSTrigger$OSTriggerOperator;->NOT_EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    if-ne p0, v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    :goto_1
    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 1

    .line 33
    iget-object v0, p0, Lcom/onesignal/OSTrigger$OSTriggerOperator;->text:Ljava/lang/String;

    return-object v0
.end method
