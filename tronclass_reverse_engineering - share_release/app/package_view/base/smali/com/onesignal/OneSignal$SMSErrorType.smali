.class public final enum Lcom/onesignal/OneSignal$SMSErrorType;
.super Ljava/lang/Enum;
.source "OneSignal.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OneSignal;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "SMSErrorType"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/onesignal/OneSignal$SMSErrorType;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lcom/onesignal/OneSignal$SMSErrorType;

.field public static final enum INVALID_OPERATION:Lcom/onesignal/OneSignal$SMSErrorType;

.field public static final enum NETWORK:Lcom/onesignal/OneSignal$SMSErrorType;

.field public static final enum REQUIRES_SMS_AUTH:Lcom/onesignal/OneSignal$SMSErrorType;

.field public static final enum VALIDATION:Lcom/onesignal/OneSignal$SMSErrorType;


# direct methods
.method static constructor <clinit>()V
    .locals 6

    .line 286
    new-instance v0, Lcom/onesignal/OneSignal$SMSErrorType;

    const-string v1, "VALIDATION"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Lcom/onesignal/OneSignal$SMSErrorType;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lcom/onesignal/OneSignal$SMSErrorType;->VALIDATION:Lcom/onesignal/OneSignal$SMSErrorType;

    new-instance v1, Lcom/onesignal/OneSignal$SMSErrorType;

    const-string v2, "REQUIRES_SMS_AUTH"

    const/4 v3, 0x1

    invoke-direct {v1, v2, v3}, Lcom/onesignal/OneSignal$SMSErrorType;-><init>(Ljava/lang/String;I)V

    sput-object v1, Lcom/onesignal/OneSignal$SMSErrorType;->REQUIRES_SMS_AUTH:Lcom/onesignal/OneSignal$SMSErrorType;

    new-instance v2, Lcom/onesignal/OneSignal$SMSErrorType;

    const-string v3, "INVALID_OPERATION"

    const/4 v4, 0x2

    invoke-direct {v2, v3, v4}, Lcom/onesignal/OneSignal$SMSErrorType;-><init>(Ljava/lang/String;I)V

    sput-object v2, Lcom/onesignal/OneSignal$SMSErrorType;->INVALID_OPERATION:Lcom/onesignal/OneSignal$SMSErrorType;

    new-instance v3, Lcom/onesignal/OneSignal$SMSErrorType;

    const-string v4, "NETWORK"

    const/4 v5, 0x3

    invoke-direct {v3, v4, v5}, Lcom/onesignal/OneSignal$SMSErrorType;-><init>(Ljava/lang/String;I)V

    sput-object v3, Lcom/onesignal/OneSignal$SMSErrorType;->NETWORK:Lcom/onesignal/OneSignal$SMSErrorType;

    .line 285
    filled-new-array {v0, v1, v2, v3}, [Lcom/onesignal/OneSignal$SMSErrorType;

    move-result-object v0

    sput-object v0, Lcom/onesignal/OneSignal$SMSErrorType;->$VALUES:[Lcom/onesignal/OneSignal$SMSErrorType;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 285
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/onesignal/OneSignal$SMSErrorType;
    .locals 1

    .line 285
    const-class v0, Lcom/onesignal/OneSignal$SMSErrorType;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/onesignal/OneSignal$SMSErrorType;

    return-object p0
.end method

.method public static values()[Lcom/onesignal/OneSignal$SMSErrorType;
    .locals 1

    .line 285
    sget-object v0, Lcom/onesignal/OneSignal$SMSErrorType;->$VALUES:[Lcom/onesignal/OneSignal$SMSErrorType;

    invoke-virtual {v0}, [Lcom/onesignal/OneSignal$SMSErrorType;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/onesignal/OneSignal$SMSErrorType;

    return-object v0
.end method
