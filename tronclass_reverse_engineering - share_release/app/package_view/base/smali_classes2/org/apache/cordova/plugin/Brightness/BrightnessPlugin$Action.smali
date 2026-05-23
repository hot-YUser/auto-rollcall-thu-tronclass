.class public final enum Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;
.super Ljava/lang/Enum;
.source "BrightnessPlugin.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "Action"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

.field public static final enum getBrightness:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

.field public static final enum setBrightness:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

.field public static final enum setKeepScreenOn:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;


# direct methods
.method private static synthetic $values()[Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;
    .locals 3

    .line 18
    sget-object v0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;->setBrightness:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    sget-object v1, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;->getBrightness:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    sget-object v2, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;->setKeepScreenOn:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    filled-new-array {v0, v1, v2}, [Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 19
    new-instance v0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    const-string v1, "setBrightness"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;->setBrightness:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    .line 20
    new-instance v0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    const-string v1, "getBrightness"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;->getBrightness:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    .line 21
    new-instance v0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    const-string v1, "setKeepScreenOn"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;->setKeepScreenOn:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    .line 18
    invoke-static {}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;->$values()[Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    move-result-object v0

    sput-object v0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;->$VALUES:[Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 18
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;
    .locals 1

    .line 18
    const-class v0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    return-object p0
.end method

.method public static values()[Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;
    .locals 1

    .line 18
    sget-object v0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;->$VALUES:[Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    invoke-virtual {v0}, [Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    return-object v0
.end method
