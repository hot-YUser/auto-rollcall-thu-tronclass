.class public final enum Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;
.super Ljava/lang/Enum;
.source "ViewfinderView.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/king/view/viewfinderview/ViewfinderView;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "FrameGravity"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

.field public static final enum BOTTOM:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

.field public static final enum CENTER:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

.field public static final enum LEFT:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

.field public static final enum RIGHT:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

.field public static final enum TOP:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;


# instance fields
.field private final mValue:I


# direct methods
.method private static synthetic $values()[Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;
    .locals 5

    .line 356
    sget-object v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->CENTER:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    sget-object v1, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->LEFT:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    sget-object v2, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->TOP:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    sget-object v3, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->RIGHT:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    sget-object v4, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->BOTTOM:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    filled-new-array {v0, v1, v2, v3, v4}, [Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 357
    new-instance v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    const-string v1, "CENTER"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2, v2}, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->CENTER:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    new-instance v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    const-string v1, "LEFT"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2, v2}, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->LEFT:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    new-instance v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    const-string v1, "TOP"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2, v2}, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->TOP:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    new-instance v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    const-string v1, "RIGHT"

    const/4 v2, 0x3

    invoke-direct {v0, v1, v2, v2}, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->RIGHT:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    new-instance v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    const-string v1, "BOTTOM"

    const/4 v2, 0x4

    invoke-direct {v0, v1, v2, v2}, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->BOTTOM:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    .line 356
    invoke-static {}, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->$values()[Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    move-result-object v0

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->$VALUES:[Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;II)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)V"
        }
    .end annotation

    .line 361
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    .line 362
    iput p3, p0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->mValue:I

    return-void
.end method

.method static synthetic access$000(Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;)I
    .locals 0

    .line 356
    iget p0, p0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->mValue:I

    return p0
.end method

.method static synthetic access$100(I)Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;
    .locals 0

    .line 356
    invoke-static {p0}, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->getFromInt(I)Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    move-result-object p0

    return-object p0
.end method

.method private static getFromInt(I)Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;
    .locals 5

    .line 366
    invoke-static {}, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->values()[Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    move-result-object v0

    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_1

    aget-object v3, v0, v2

    .line 367
    iget v4, v3, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->mValue:I

    if-ne v4, p0, :cond_0

    return-object v3

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 371
    :cond_1
    sget-object p0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->CENTER:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    return-object p0
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;
    .locals 1

    .line 356
    const-class v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    return-object p0
.end method

.method public static values()[Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;
    .locals 1

    .line 356
    sget-object v0, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->$VALUES:[Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    invoke-virtual {v0}, [Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    return-object v0
.end method
