.class public Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;
.super Ljava/lang/Object;
.source "OSCachedUniqueOutcome.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0004\u0008\u0016\u0018\u00002\u00020\u0001B\u0015\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u00a2\u0006\u0002\u0010\u0006J\u0008\u0010\u0007\u001a\u00020\u0005H\u0016J\u0008\u0010\u0008\u001a\u00020\u0003H\u0016R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\t"
    }
    d2 = {
        "Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;",
        "",
        "influenceId",
        "",
        "channel",
        "Lcom/onesignal/influence/domain/OSInfluenceChannel;",
        "(Ljava/lang/String;Lcom/onesignal/influence/domain/OSInfluenceChannel;)V",
        "getChannel",
        "getInfluenceId",
        "onesignal_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# instance fields
.field private final channel:Lcom/onesignal/influence/domain/OSInfluenceChannel;

.field private final influenceId:Ljava/lang/String;


# direct methods
.method public constructor <init>(Ljava/lang/String;Lcom/onesignal/influence/domain/OSInfluenceChannel;)V
    .locals 1

    const-string v0, "influenceId"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "channel"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 5
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 6
    iput-object p1, p0, Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;->influenceId:Ljava/lang/String;

    .line 7
    iput-object p2, p0, Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;->channel:Lcom/onesignal/influence/domain/OSInfluenceChannel;

    return-void
.end method


# virtual methods
.method public getChannel()Lcom/onesignal/influence/domain/OSInfluenceChannel;
    .locals 1

    .line 10
    iget-object v0, p0, Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;->channel:Lcom/onesignal/influence/domain/OSInfluenceChannel;

    return-object v0
.end method

.method public getInfluenceId()Ljava/lang/String;
    .locals 1

    .line 9
    iget-object v0, p0, Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;->influenceId:Ljava/lang/String;

    return-object v0
.end method
