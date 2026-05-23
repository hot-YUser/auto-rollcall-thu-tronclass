.class public final enum Lcom/onesignal/OneSignal$AppEntryAction;
.super Ljava/lang/Enum;
.source "OneSignal.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OneSignal;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "AppEntryAction"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/onesignal/OneSignal$AppEntryAction;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lcom/onesignal/OneSignal$AppEntryAction;

.field public static final enum APP_CLOSE:Lcom/onesignal/OneSignal$AppEntryAction;

.field public static final enum APP_OPEN:Lcom/onesignal/OneSignal$AppEntryAction;

.field public static final enum NOTIFICATION_CLICK:Lcom/onesignal/OneSignal$AppEntryAction;


# direct methods
.method static constructor <clinit>()V
    .locals 5

    .line 115
    new-instance v0, Lcom/onesignal/OneSignal$AppEntryAction;

    const-string v1, "NOTIFICATION_CLICK"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Lcom/onesignal/OneSignal$AppEntryAction;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lcom/onesignal/OneSignal$AppEntryAction;->NOTIFICATION_CLICK:Lcom/onesignal/OneSignal$AppEntryAction;

    .line 120
    new-instance v1, Lcom/onesignal/OneSignal$AppEntryAction;

    const-string v2, "APP_OPEN"

    const/4 v3, 0x1

    invoke-direct {v1, v2, v3}, Lcom/onesignal/OneSignal$AppEntryAction;-><init>(Ljava/lang/String;I)V

    sput-object v1, Lcom/onesignal/OneSignal$AppEntryAction;->APP_OPEN:Lcom/onesignal/OneSignal$AppEntryAction;

    .line 125
    new-instance v2, Lcom/onesignal/OneSignal$AppEntryAction;

    const-string v3, "APP_CLOSE"

    const/4 v4, 0x2

    invoke-direct {v2, v3, v4}, Lcom/onesignal/OneSignal$AppEntryAction;-><init>(Ljava/lang/String;I)V

    sput-object v2, Lcom/onesignal/OneSignal$AppEntryAction;->APP_CLOSE:Lcom/onesignal/OneSignal$AppEntryAction;

    .line 110
    filled-new-array {v0, v1, v2}, [Lcom/onesignal/OneSignal$AppEntryAction;

    move-result-object v0

    sput-object v0, Lcom/onesignal/OneSignal$AppEntryAction;->$VALUES:[Lcom/onesignal/OneSignal$AppEntryAction;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 110
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/onesignal/OneSignal$AppEntryAction;
    .locals 1

    .line 110
    const-class v0, Lcom/onesignal/OneSignal$AppEntryAction;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/onesignal/OneSignal$AppEntryAction;

    return-object p0
.end method

.method public static values()[Lcom/onesignal/OneSignal$AppEntryAction;
    .locals 1

    .line 110
    sget-object v0, Lcom/onesignal/OneSignal$AppEntryAction;->$VALUES:[Lcom/onesignal/OneSignal$AppEntryAction;

    invoke-virtual {v0}, [Lcom/onesignal/OneSignal$AppEntryAction;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/onesignal/OneSignal$AppEntryAction;

    return-object v0
.end method


# virtual methods
.method public isAppClose()Z
    .locals 1

    .line 136
    sget-object v0, Lcom/onesignal/OneSignal$AppEntryAction;->APP_CLOSE:Lcom/onesignal/OneSignal$AppEntryAction;

    invoke-virtual {p0, v0}, Lcom/onesignal/OneSignal$AppEntryAction;->equals(Ljava/lang/Object;)Z

    move-result v0

    return v0
.end method

.method public isAppOpen()Z
    .locals 1

    .line 132
    sget-object v0, Lcom/onesignal/OneSignal$AppEntryAction;->APP_OPEN:Lcom/onesignal/OneSignal$AppEntryAction;

    invoke-virtual {p0, v0}, Lcom/onesignal/OneSignal$AppEntryAction;->equals(Ljava/lang/Object;)Z

    move-result v0

    return v0
.end method

.method public isNotificationClick()Z
    .locals 1

    .line 128
    sget-object v0, Lcom/onesignal/OneSignal$AppEntryAction;->NOTIFICATION_CLICK:Lcom/onesignal/OneSignal$AppEntryAction;

    invoke-virtual {p0, v0}, Lcom/onesignal/OneSignal$AppEntryAction;->equals(Ljava/lang/Object;)Z

    move-result v0

    return v0
.end method
