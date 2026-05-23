.class final enum Lcom/onesignal/FocusTimeController$FocusEventType;
.super Ljava/lang/Enum;
.source "FocusTimeController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/FocusTimeController;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x401a
    name = "FocusEventType"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/onesignal/FocusTimeController$FocusEventType;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lcom/onesignal/FocusTimeController$FocusEventType;

.field public static final enum BACKGROUND:Lcom/onesignal/FocusTimeController$FocusEventType;

.field public static final enum END_SESSION:Lcom/onesignal/FocusTimeController$FocusEventType;


# direct methods
.method static constructor <clinit>()V
    .locals 4

    .line 37
    new-instance v0, Lcom/onesignal/FocusTimeController$FocusEventType;

    const-string v1, "BACKGROUND"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Lcom/onesignal/FocusTimeController$FocusEventType;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lcom/onesignal/FocusTimeController$FocusEventType;->BACKGROUND:Lcom/onesignal/FocusTimeController$FocusEventType;

    .line 38
    new-instance v1, Lcom/onesignal/FocusTimeController$FocusEventType;

    const-string v2, "END_SESSION"

    const/4 v3, 0x1

    invoke-direct {v1, v2, v3}, Lcom/onesignal/FocusTimeController$FocusEventType;-><init>(Ljava/lang/String;I)V

    sput-object v1, Lcom/onesignal/FocusTimeController$FocusEventType;->END_SESSION:Lcom/onesignal/FocusTimeController$FocusEventType;

    .line 36
    filled-new-array {v0, v1}, [Lcom/onesignal/FocusTimeController$FocusEventType;

    move-result-object v0

    sput-object v0, Lcom/onesignal/FocusTimeController$FocusEventType;->$VALUES:[Lcom/onesignal/FocusTimeController$FocusEventType;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 36
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/onesignal/FocusTimeController$FocusEventType;
    .locals 1

    .line 36
    const-class v0, Lcom/onesignal/FocusTimeController$FocusEventType;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/onesignal/FocusTimeController$FocusEventType;

    return-object p0
.end method

.method public static values()[Lcom/onesignal/FocusTimeController$FocusEventType;
    .locals 1

    .line 36
    sget-object v0, Lcom/onesignal/FocusTimeController$FocusEventType;->$VALUES:[Lcom/onesignal/FocusTimeController$FocusEventType;

    invoke-virtual {v0}, [Lcom/onesignal/FocusTimeController$FocusEventType;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/onesignal/FocusTimeController$FocusEventType;

    return-object v0
.end method
