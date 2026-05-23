.class public final enum Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;
.super Ljava/lang/Enum;
.source "ViewfinderView.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/king/view/viewfinderview/ViewfinderView;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "LaserStyle"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

.field public static final enum GRID:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

.field public static final enum IMAGE:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

.field public static final enum LINE:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

.field public static final enum NONE:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;


# instance fields
.field private final mValue:I


# direct methods
.method private static synthetic $values()[Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;
    .locals 4

    .line 298
    sget-object v0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->NONE:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    sget-object v1, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->LINE:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    sget-object v2, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->GRID:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    sget-object v3, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->IMAGE:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    filled-new-array {v0, v1, v2, v3}, [Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 302
    new-instance v0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    const-string v1, "NONE"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2, v2}, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->NONE:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    .line 306
    new-instance v0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    const-string v1, "LINE"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2, v2}, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->LINE:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    .line 310
    new-instance v0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    const-string v1, "GRID"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2, v2}, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->GRID:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    .line 314
    new-instance v0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    const-string v1, "IMAGE"

    const/4 v2, 0x3

    invoke-direct {v0, v1, v2, v2}, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->IMAGE:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    .line 298
    invoke-static {}, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->$values()[Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    move-result-object v0

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->$VALUES:[Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;II)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)V"
        }
    .end annotation

    .line 317
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    .line 318
    iput p3, p0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->mValue:I

    return-void
.end method

.method static synthetic access$200(Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;)I
    .locals 0

    .line 298
    iget p0, p0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->mValue:I

    return p0
.end method

.method static synthetic access$300(I)Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;
    .locals 0

    .line 298
    invoke-static {p0}, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->getFromInt(I)Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    move-result-object p0

    return-object p0
.end method

.method private static getFromInt(I)Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;
    .locals 5

    .line 322
    invoke-static {}, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->values()[Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    move-result-object v0

    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_1

    aget-object v3, v0, v2

    .line 323
    iget v4, v3, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->mValue:I

    if-ne v4, p0, :cond_0

    return-object v3

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 327
    :cond_1
    sget-object p0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->LINE:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    return-object p0
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;
    .locals 1

    .line 298
    const-class v0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    return-object p0
.end method

.method public static values()[Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;
    .locals 1

    .line 298
    sget-object v0, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->$VALUES:[Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    invoke-virtual {v0}, [Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    return-object v0
.end method
