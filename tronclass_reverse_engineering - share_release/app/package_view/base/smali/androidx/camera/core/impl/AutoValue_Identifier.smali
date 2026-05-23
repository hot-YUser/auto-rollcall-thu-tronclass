.class final Landroidx/camera/core/impl/AutoValue_Identifier;
.super Landroidx/camera/core/impl/Identifier;
.source "AutoValue_Identifier.java"


# instance fields
.field private final value:Ljava/lang/Object;


# direct methods
.method constructor <init>(Ljava/lang/Object;)V
    .locals 1

    .line 13
    invoke-direct {p0}, Landroidx/camera/core/impl/Identifier;-><init>()V

    if-eqz p1, :cond_0

    .line 17
    iput-object p1, p0, Landroidx/camera/core/impl/AutoValue_Identifier;->value:Ljava/lang/Object;

    return-void

    .line 15
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string v0, "Null value"

    invoke-direct {p1, v0}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 1

    if-ne p1, p0, :cond_0

    const/4 p1, 0x1

    return p1

    .line 38
    :cond_0
    instance-of v0, p1, Landroidx/camera/core/impl/Identifier;

    if-eqz v0, :cond_1

    .line 39
    check-cast p1, Landroidx/camera/core/impl/Identifier;

    .line 40
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_Identifier;->value:Ljava/lang/Object;

    invoke-virtual {p1}, Landroidx/camera/core/impl/Identifier;->getValue()Ljava/lang/Object;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result p1

    return p1

    :cond_1
    const/4 p1, 0x0

    return p1
.end method

.method public getValue()Ljava/lang/Object;
    .locals 1

    .line 23
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_Identifier;->value:Ljava/lang/Object;

    return-object v0
.end method

.method public hashCode()I
    .locals 2

    .line 49
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_Identifier;->value:Ljava/lang/Object;

    invoke-virtual {v0}, Ljava/lang/Object;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 28
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Identifier{value="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_Identifier;->value:Ljava/lang/Object;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
