.class public final Lkotlin/time/TimeMark$DefaultImpls;
.super Ljava/lang/Object;
.source "TimeSource.kt"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lkotlin/time/TimeMark;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "DefaultImpls"
.end annotation

.annotation runtime Lkotlin/Metadata;
    k = 0x3
    mv = {
        0x1,
        0x8,
        0x0
    }
    xi = 0x30
.end annotation


# direct methods
.method public static hasNotPassedNow(Lkotlin/time/TimeMark;)Z
    .locals 2

    .line 172
    invoke-interface {p0}, Lkotlin/time/TimeMark;->elapsedNow-UwyO8pc()J

    move-result-wide v0

    invoke-static {v0, v1}, Lkotlin/time/Duration;->isNegative-impl(J)Z

    move-result p0

    return p0
.end method

.method public static hasPassedNow(Lkotlin/time/TimeMark;)Z
    .locals 2

    .line 164
    invoke-interface {p0}, Lkotlin/time/TimeMark;->elapsedNow-UwyO8pc()J

    move-result-wide v0

    invoke-static {v0, v1}, Lkotlin/time/Duration;->isNegative-impl(J)Z

    move-result p0

    xor-int/lit8 p0, p0, 0x1

    return p0
.end method

.method public static minus-LRDsOJo(Lkotlin/time/TimeMark;J)Lkotlin/time/TimeMark;
    .locals 0

    .line 155
    invoke-static {p1, p2}, Lkotlin/time/Duration;->unaryMinus-UwyO8pc(J)J

    move-result-wide p1

    invoke-interface {p0, p1, p2}, Lkotlin/time/TimeMark;->plus-LRDsOJo(J)Lkotlin/time/TimeMark;

    move-result-object p0

    return-object p0
.end method

.method public static plus-LRDsOJo(Lkotlin/time/TimeMark;J)Lkotlin/time/TimeMark;
    .locals 2

    .line 142
    new-instance v0, Lkotlin/time/AdjustedTimeMark;

    const/4 v1, 0x0

    invoke-direct {v0, p0, p1, p2, v1}, Lkotlin/time/AdjustedTimeMark;-><init>(Lkotlin/time/TimeMark;JLkotlin/jvm/internal/DefaultConstructorMarker;)V

    check-cast v0, Lkotlin/time/TimeMark;

    return-object v0
.end method
