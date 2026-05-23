.class public interface abstract Lkotlin/time/TimeMark;
.super Ljava/lang/Object;
.source "TimeSource.kt"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lkotlin/time/TimeMark$DefaultImpls;
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0010\u000b\n\u0002\u0008\u0008\u0008g\u0018\u00002\u00020\u0001J\u0015\u0010\u0002\u001a\u00020\u0003H&\u00f8\u0001\u0000\u00f8\u0001\u0001\u00a2\u0006\u0004\u0008\u0004\u0010\u0005J\u0008\u0010\u0006\u001a\u00020\u0007H\u0016J\u0008\u0010\u0008\u001a\u00020\u0007H\u0016J\u001b\u0010\t\u001a\u00020\u00002\u0006\u0010\n\u001a\u00020\u0003H\u0096\u0002\u00f8\u0001\u0001\u00a2\u0006\u0004\u0008\u000b\u0010\u000cJ\u001b\u0010\r\u001a\u00020\u00002\u0006\u0010\n\u001a\u00020\u0003H\u0096\u0002\u00f8\u0001\u0001\u00a2\u0006\u0004\u0008\u000e\u0010\u000c\u0082\u0002\u0008\n\u0002\u0008!\n\u0002\u0008\u0019\u00a8\u0006\u000f"
    }
    d2 = {
        "Lkotlin/time/TimeMark;",
        "",
        "elapsedNow",
        "Lkotlin/time/Duration;",
        "elapsedNow-UwyO8pc",
        "()J",
        "hasNotPassedNow",
        "",
        "hasPassedNow",
        "minus",
        "duration",
        "minus-LRDsOJo",
        "(J)Lkotlin/time/TimeMark;",
        "plus",
        "plus-LRDsOJo",
        "kotlin-stdlib"
    }
    k = 0x1
    mv = {
        0x1,
        0x8,
        0x0
    }
    xi = 0x30
.end annotation


# virtual methods
.method public abstract elapsedNow-UwyO8pc()J
.end method

.method public abstract hasNotPassedNow()Z
.end method

.method public abstract hasPassedNow()Z
.end method

.method public abstract minus-LRDsOJo(J)Lkotlin/time/TimeMark;
.end method

.method public abstract plus-LRDsOJo(J)Lkotlin/time/TimeMark;
.end method
