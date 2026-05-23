.class Lcom/wisdomgarden/trpc/openwith/PathData;
.super Ljava/lang/Object;
.source "PathUtil.java"


# instance fields
.field public fileName:Ljava/lang/String;

.field public filePath:Ljava/lang/String;

.field public isTemp:Ljava/lang/Boolean;


# direct methods
.method public constructor <init>(Ljava/lang/String;)V
    .locals 1

    .line 29
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 30
    iput-object p1, p0, Lcom/wisdomgarden/trpc/openwith/PathData;->filePath:Ljava/lang/String;

    const/4 v0, 0x0

    .line 31
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    iput-object v0, p0, Lcom/wisdomgarden/trpc/openwith/PathData;->isTemp:Ljava/lang/Boolean;

    .line 32
    const-string v0, "/"

    invoke-virtual {p1, v0}, Ljava/lang/String;->lastIndexOf(Ljava/lang/String;)I

    move-result v0

    add-int/lit8 v0, v0, 0x1

    .line 33
    invoke-virtual {p1, v0}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/wisdomgarden/trpc/openwith/PathData;->fileName:Ljava/lang/String;

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)V
    .locals 0

    .line 23
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 24
    iput-object p1, p0, Lcom/wisdomgarden/trpc/openwith/PathData;->filePath:Ljava/lang/String;

    .line 25
    iput-object p3, p0, Lcom/wisdomgarden/trpc/openwith/PathData;->isTemp:Ljava/lang/Boolean;

    .line 26
    iput-object p2, p0, Lcom/wisdomgarden/trpc/openwith/PathData;->fileName:Ljava/lang/String;

    return-void
.end method
