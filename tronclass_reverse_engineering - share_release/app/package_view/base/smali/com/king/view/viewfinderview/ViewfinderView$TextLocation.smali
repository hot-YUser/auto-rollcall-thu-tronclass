.class public final enum Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;
.super Ljava/lang/Enum;
.source "ViewfinderView.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/king/view/viewfinderview/ViewfinderView;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "TextLocation"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

.field public static final enum BOTTOM:Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

.field public static final enum TOP:Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;


# instance fields
.field private final mValue:I


# direct methods
.method private static synthetic $values()[Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;
    .locals 2

    .line 334
    sget-object v0, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->TOP:Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    sget-object v1, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->BOTTOM:Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    filled-new-array {v0, v1}, [Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 335
    new-instance v0, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    const-string v1, "TOP"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2, v2}, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->TOP:Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    new-instance v0, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    const-string v1, "BOTTOM"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2, v2}, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->BOTTOM:Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    .line 334
    invoke-static {}, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->$values()[Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    move-result-object v0

    sput-object v0, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->$VALUES:[Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;II)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)V"
        }
    .end annotation

    .line 339
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    .line 340
    iput p3, p0, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->mValue:I

    return-void
.end method

.method static synthetic access$400(I)Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;
    .locals 0

    .line 334
    invoke-static {p0}, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->getFromInt(I)Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    move-result-object p0

    return-object p0
.end method

.method private static getFromInt(I)Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;
    .locals 5

    .line 344
    invoke-static {}, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->values()[Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    move-result-object v0

    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_1

    aget-object v3, v0, v2

    .line 345
    iget v4, v3, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->mValue:I

    if-ne v4, p0, :cond_0

    return-object v3

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 349
    :cond_1
    sget-object p0, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->TOP:Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    return-object p0
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;
    .locals 1

    .line 334
    const-class v0, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    return-object p0
.end method

.method public static values()[Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;
    .locals 1

    .line 334
    sget-object v0, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->$VALUES:[Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    invoke-virtual {v0}, [Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    return-object v0
.end method
