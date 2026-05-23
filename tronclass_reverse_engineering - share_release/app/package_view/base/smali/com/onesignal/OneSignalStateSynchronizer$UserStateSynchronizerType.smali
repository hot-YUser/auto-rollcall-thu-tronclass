.class final enum Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;
.super Ljava/lang/Enum;
.source "OneSignalStateSynchronizer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OneSignalStateSynchronizer;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4018
    name = "UserStateSynchronizerType"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

.field public static final enum EMAIL:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

.field public static final enum PUSH:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

.field public static final enum SMS:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;


# direct methods
.method static constructor <clinit>()V
    .locals 5

    .line 46
    new-instance v0, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    const-string v1, "PUSH"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->PUSH:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    .line 47
    new-instance v1, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    const-string v2, "EMAIL"

    const/4 v3, 0x1

    invoke-direct {v1, v2, v3}, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;-><init>(Ljava/lang/String;I)V

    sput-object v1, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->EMAIL:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    .line 48
    new-instance v2, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    const-string v3, "SMS"

    const/4 v4, 0x2

    invoke-direct {v2, v3, v4}, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;-><init>(Ljava/lang/String;I)V

    sput-object v2, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->SMS:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    .line 45
    filled-new-array {v0, v1, v2}, [Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    move-result-object v0

    sput-object v0, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->$VALUES:[Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 45
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;
    .locals 1

    .line 45
    const-class v0, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    return-object p0
.end method

.method public static values()[Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;
    .locals 1

    .line 45
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->$VALUES:[Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {v0}, [Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    return-object v0
.end method


# virtual methods
.method public isEmail()Z
    .locals 1

    .line 55
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->EMAIL:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {p0, v0}, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->equals(Ljava/lang/Object;)Z

    move-result v0

    return v0
.end method

.method public isPush()Z
    .locals 1

    .line 51
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->PUSH:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {p0, v0}, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->equals(Ljava/lang/Object;)Z

    move-result v0

    return v0
.end method

.method public isSMS()Z
    .locals 1

    .line 59
    sget-object v0, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->SMS:Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;

    invoke-virtual {p0, v0}, Lcom/onesignal/OneSignalStateSynchronizer$UserStateSynchronizerType;->equals(Ljava/lang/Object;)Z

    move-result v0

    return v0
.end method
