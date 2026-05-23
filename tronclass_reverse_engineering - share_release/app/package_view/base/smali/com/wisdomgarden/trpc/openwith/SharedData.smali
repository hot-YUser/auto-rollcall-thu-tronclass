.class Lcom/wisdomgarden/trpc/openwith/SharedData;
.super Ljava/lang/Object;
.source "Serializer.java"


# instance fields
.field items:Lorg/json/JSONArray;

.field receivedCounts:I


# direct methods
.method public constructor <init>(ILorg/json/JSONArray;)V
    .locals 0

    .line 23
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 24
    iput p1, p0, Lcom/wisdomgarden/trpc/openwith/SharedData;->receivedCounts:I

    .line 25
    iput-object p2, p0, Lcom/wisdomgarden/trpc/openwith/SharedData;->items:Lorg/json/JSONArray;

    return-void
.end method
