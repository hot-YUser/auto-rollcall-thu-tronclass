.class public interface abstract Landroidx/camera/core/processing/ShaderProvider;
.super Ljava/lang/Object;
.source "ShaderProvider.java"


# static fields
.field public static final DEFAULT:Landroidx/camera/core/processing/ShaderProvider;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 62
    new-instance v0, Landroidx/camera/core/processing/ShaderProvider$1;

    invoke-direct {v0}, Landroidx/camera/core/processing/ShaderProvider$1;-><init>()V

    sput-object v0, Landroidx/camera/core/processing/ShaderProvider;->DEFAULT:Landroidx/camera/core/processing/ShaderProvider;

    return-void
.end method


# virtual methods
.method public createFragmentShader(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    const/4 p1, 0x0

    return-object p1
.end method
