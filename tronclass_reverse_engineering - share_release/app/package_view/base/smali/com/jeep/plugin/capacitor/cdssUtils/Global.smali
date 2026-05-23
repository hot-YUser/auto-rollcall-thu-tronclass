.class public Lcom/jeep/plugin/capacitor/cdssUtils/Global;
.super Ljava/lang/Object;
.source "Global.java"


# instance fields
.field public newsecret:Ljava/lang/String;

.field public secret:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 3
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 4
    const-string v0, "test secret"

    iput-object v0, p0, Lcom/jeep/plugin/capacitor/cdssUtils/Global;->secret:Ljava/lang/String;

    .line 5
    const-string v0, "test new secret"

    iput-object v0, p0, Lcom/jeep/plugin/capacitor/cdssUtils/Global;->newsecret:Ljava/lang/String;

    return-void
.end method
