.class public Lcom/getcapacitor/util/HostMask$Parser;
.super Ljava/lang/Object;
.source "HostMask.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/getcapacitor/util/HostMask;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "Parser"
.end annotation


# static fields
.field private static NOTHING:Lcom/getcapacitor/util/HostMask;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 13
    new-instance v0, Lcom/getcapacitor/util/HostMask$Nothing;

    invoke-direct {v0}, Lcom/getcapacitor/util/HostMask$Nothing;-><init>()V

    sput-object v0, Lcom/getcapacitor/util/HostMask$Parser;->NOTHING:Lcom/getcapacitor/util/HostMask;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 12
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static parse(Ljava/lang/String;)Lcom/getcapacitor/util/HostMask;
    .locals 0

    if-nez p0, :cond_0

    .line 22
    sget-object p0, Lcom/getcapacitor/util/HostMask$Parser;->NOTHING:Lcom/getcapacitor/util/HostMask;

    goto :goto_0

    .line 23
    :cond_0
    invoke-static {p0}, Lcom/getcapacitor/util/HostMask$Simple;->parse(Ljava/lang/String;)Lcom/getcapacitor/util/HostMask$Simple;

    move-result-object p0

    :goto_0
    return-object p0
.end method

.method public static parse([Ljava/lang/String;)Lcom/getcapacitor/util/HostMask;
    .locals 0

    if-nez p0, :cond_0

    .line 17
    sget-object p0, Lcom/getcapacitor/util/HostMask$Parser;->NOTHING:Lcom/getcapacitor/util/HostMask;

    goto :goto_0

    .line 18
    :cond_0
    invoke-static {p0}, Lcom/getcapacitor/util/HostMask$Any;->parse([Ljava/lang/String;)Lcom/getcapacitor/util/HostMask$Any;

    move-result-object p0

    :goto_0
    return-object p0
.end method
