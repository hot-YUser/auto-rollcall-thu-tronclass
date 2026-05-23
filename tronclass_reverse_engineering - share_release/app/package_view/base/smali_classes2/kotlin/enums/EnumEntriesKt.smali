.class public final Lkotlin/enums/EnumEntriesKt;
.super Ljava/lang/Object;
.source "EnumEntries.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u001a\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0010\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0011\n\u0002\u0008\u0003\u001a2\u0010\u0000\u001a\u0008\u0012\u0004\u0012\u0002H\u00020\u0001\"\u000e\u0008\u0000\u0010\u0002*\u0008\u0012\u0004\u0012\u0002H\u00020\u00032\u0012\u0010\u0004\u001a\u000e\u0012\n\u0012\u0008\u0012\u0004\u0012\u0002H\u00020\u00060\u0005H\u0001\u001a1\u0010\u0000\u001a\u0008\u0012\u0004\u0012\u0002H\u00020\u0001\"\u000e\u0008\u0000\u0010\u0002*\u0008\u0012\u0004\u0012\u0002H\u00020\u00032\u000c\u0010\u0007\u001a\u0008\u0012\u0004\u0012\u0002H\u00020\u0006H\u0001\u00a2\u0006\u0002\u0010\u0008\u00a8\u0006\t"
    }
    d2 = {
        "enumEntries",
        "Lkotlin/enums/EnumEntries;",
        "E",
        "",
        "entriesProvider",
        "Lkotlin/Function0;",
        "",
        "entries",
        "([Ljava/lang/Enum;)Lkotlin/enums/EnumEntries;",
        "kotlin-stdlib"
    }
    k = 0x2
    mv = {
        0x1,
        0x8,
        0x0
    }
    xi = 0x30
.end annotation


# direct methods
.method public static final enumEntries(Lkotlin/jvm/functions/Function0;)Lkotlin/enums/EnumEntries;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<E:",
            "Ljava/lang/Enum<",
            "TE;>;>(",
            "Lkotlin/jvm/functions/Function0<",
            "[TE;>;)",
            "Lkotlin/enums/EnumEntries<",
            "TE;>;"
        }
    .end annotation

    const-string v0, "entriesProvider"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 25
    new-instance v0, Lkotlin/enums/EnumEntriesList;

    invoke-direct {v0, p0}, Lkotlin/enums/EnumEntriesList;-><init>(Lkotlin/jvm/functions/Function0;)V

    check-cast v0, Lkotlin/enums/EnumEntries;

    return-object v0
.end method

.method public static final enumEntries([Ljava/lang/Enum;)Lkotlin/enums/EnumEntries;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<E:",
            "Ljava/lang/Enum<",
            "TE;>;>([TE;)",
            "Lkotlin/enums/EnumEntries<",
            "TE;>;"
        }
    .end annotation

    const-string v0, "entries"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 30
    new-instance v0, Lkotlin/enums/EnumEntriesList;

    new-instance v1, Lkotlin/enums/EnumEntriesKt$enumEntries$1;

    invoke-direct {v1, p0}, Lkotlin/enums/EnumEntriesKt$enumEntries$1;-><init>([Ljava/lang/Enum;)V

    check-cast v1, Lkotlin/jvm/functions/Function0;

    invoke-direct {v0, v1}, Lkotlin/enums/EnumEntriesList;-><init>(Lkotlin/jvm/functions/Function0;)V

    .line 40
    invoke-virtual {v0}, Lkotlin/enums/EnumEntriesList;->size()I

    .line 30
    check-cast v0, Lkotlin/enums/EnumEntries;

    return-object v0
.end method
