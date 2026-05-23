.class public final synthetic Lcom/onesignal/CallbackThreadManager$Companion$WhenMappings;
.super Ljava/lang/Object;
.source "CallbackThreadManager.kt"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/CallbackThreadManager$Companion;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x1001
    name = "WhenMappings"
.end annotation

.annotation runtime Lkotlin/Metadata;
    k = 0x3
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# static fields
.field public static final synthetic $EnumSwitchMapping$0:[I


# direct methods
.method static constructor <clinit>()V
    .locals 3

    invoke-static {}, Lcom/onesignal/CallbackThreadManager$UseThread;->values()[Lcom/onesignal/CallbackThreadManager$UseThread;

    move-result-object v0

    array-length v0, v0

    new-array v0, v0, [I

    sget-object v1, Lcom/onesignal/CallbackThreadManager$UseThread;->MainUI:Lcom/onesignal/CallbackThreadManager$UseThread;

    invoke-virtual {v1}, Lcom/onesignal/CallbackThreadManager$UseThread;->ordinal()I

    move-result v1

    const/4 v2, 0x1

    aput v2, v0, v1

    sget-object v1, Lcom/onesignal/CallbackThreadManager$UseThread;->Background:Lcom/onesignal/CallbackThreadManager$UseThread;

    invoke-virtual {v1}, Lcom/onesignal/CallbackThreadManager$UseThread;->ordinal()I

    move-result v1

    const/4 v2, 0x2

    aput v2, v0, v1

    sput-object v0, Lcom/onesignal/CallbackThreadManager$Companion$WhenMappings;->$EnumSwitchMapping$0:[I

    return-void
.end method
