.class public Lcom/getcapacitor/PluginMethodHandle;
.super Ljava/lang/Object;
.source "PluginMethodHandle.java"


# instance fields
.field private final method:Ljava/lang/reflect/Method;

.field private final name:Ljava/lang/String;

.field private final returnType:Ljava/lang/String;


# direct methods
.method public constructor <init>(Ljava/lang/reflect/Method;Lcom/getcapacitor/PluginMethod;)V
    .locals 0

    .line 13
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 14
    iput-object p1, p0, Lcom/getcapacitor/PluginMethodHandle;->method:Ljava/lang/reflect/Method;

    .line 16
    invoke-virtual {p1}, Ljava/lang/reflect/Method;->getName()Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/getcapacitor/PluginMethodHandle;->name:Ljava/lang/String;

    .line 18
    invoke-interface {p2}, Lcom/getcapacitor/PluginMethod;->returnType()Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/getcapacitor/PluginMethodHandle;->returnType:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public getMethod()Ljava/lang/reflect/Method;
    .locals 1

    .line 30
    iget-object v0, p0, Lcom/getcapacitor/PluginMethodHandle;->method:Ljava/lang/reflect/Method;

    return-object v0
.end method

.method public getName()Ljava/lang/String;
    .locals 1

    .line 26
    iget-object v0, p0, Lcom/getcapacitor/PluginMethodHandle;->name:Ljava/lang/String;

    return-object v0
.end method

.method public getReturnType()Ljava/lang/String;
    .locals 1

    .line 22
    iget-object v0, p0, Lcom/getcapacitor/PluginMethodHandle;->returnType:Ljava/lang/String;

    return-object v0
.end method
