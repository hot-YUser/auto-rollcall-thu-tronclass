.class final enum Lcom/synconset/MultiImageChooserActivity$OutputType;
.super Ljava/lang/Enum;
.source "MultiImageChooserActivity.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/synconset/MultiImageChooserActivity;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4018
    name = "OutputType"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/synconset/MultiImageChooserActivity$OutputType;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lcom/synconset/MultiImageChooserActivity$OutputType;

.field public static final enum BASE64_STRING:Lcom/synconset/MultiImageChooserActivity$OutputType;

.field public static final enum FILE_URI:Lcom/synconset/MultiImageChooserActivity$OutputType;


# instance fields
.field value:I


# direct methods
.method private static synthetic $values()[Lcom/synconset/MultiImageChooserActivity$OutputType;
    .locals 2

    .line 771
    sget-object v0, Lcom/synconset/MultiImageChooserActivity$OutputType;->FILE_URI:Lcom/synconset/MultiImageChooserActivity$OutputType;

    sget-object v1, Lcom/synconset/MultiImageChooserActivity$OutputType;->BASE64_STRING:Lcom/synconset/MultiImageChooserActivity$OutputType;

    filled-new-array {v0, v1}, [Lcom/synconset/MultiImageChooserActivity$OutputType;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 773
    new-instance v0, Lcom/synconset/MultiImageChooserActivity$OutputType;

    const-string v1, "FILE_URI"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2, v2}, Lcom/synconset/MultiImageChooserActivity$OutputType;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/synconset/MultiImageChooserActivity$OutputType;->FILE_URI:Lcom/synconset/MultiImageChooserActivity$OutputType;

    new-instance v0, Lcom/synconset/MultiImageChooserActivity$OutputType;

    const-string v1, "BASE64_STRING"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2, v2}, Lcom/synconset/MultiImageChooserActivity$OutputType;-><init>(Ljava/lang/String;II)V

    sput-object v0, Lcom/synconset/MultiImageChooserActivity$OutputType;->BASE64_STRING:Lcom/synconset/MultiImageChooserActivity$OutputType;

    .line 771
    invoke-static {}, Lcom/synconset/MultiImageChooserActivity$OutputType;->$values()[Lcom/synconset/MultiImageChooserActivity$OutputType;

    move-result-object v0

    sput-object v0, Lcom/synconset/MultiImageChooserActivity$OutputType;->$VALUES:[Lcom/synconset/MultiImageChooserActivity$OutputType;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;II)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)V"
        }
    .end annotation

    .line 777
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    .line 778
    iput p3, p0, Lcom/synconset/MultiImageChooserActivity$OutputType;->value:I

    return-void
.end method

.method public static fromValue(I)Lcom/synconset/MultiImageChooserActivity$OutputType;
    .locals 5

    .line 782
    invoke-static {}, Lcom/synconset/MultiImageChooserActivity$OutputType;->values()[Lcom/synconset/MultiImageChooserActivity$OutputType;

    move-result-object v0

    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_1

    aget-object v3, v0, v2

    .line 783
    iget v4, v3, Lcom/synconset/MultiImageChooserActivity$OutputType;->value:I

    if-ne v4, p0, :cond_0

    return-object v3

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 787
    :cond_1
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string v0, "Invalid enum value specified"

    invoke-direct {p0, v0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/synconset/MultiImageChooserActivity$OutputType;
    .locals 1

    .line 771
    const-class v0, Lcom/synconset/MultiImageChooserActivity$OutputType;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/synconset/MultiImageChooserActivity$OutputType;

    return-object p0
.end method

.method public static values()[Lcom/synconset/MultiImageChooserActivity$OutputType;
    .locals 1

    .line 771
    sget-object v0, Lcom/synconset/MultiImageChooserActivity$OutputType;->$VALUES:[Lcom/synconset/MultiImageChooserActivity$OutputType;

    invoke-virtual {v0}, [Lcom/synconset/MultiImageChooserActivity$OutputType;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/synconset/MultiImageChooserActivity$OutputType;

    return-object v0
.end method
