.class public Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;
.super Ljava/lang/Object;
.source "ExtraSupportedSurfaceCombinationsQuirk.java"

# interfaces
.implements Landroidx/camera/core/impl/Quirk;


# static fields
.field private static final FULL_LEVEL_YUV_PRIV_YUV_CONFIGURATION:Landroidx/camera/core/impl/SurfaceCombination;

.field private static final FULL_LEVEL_YUV_YUV_YUV_CONFIGURATION:Landroidx/camera/core/impl/SurfaceCombination;

.field private static final LEVEL_3_LEVEL_PRIV_PRIV_YUV_RAW_CONFIGURATION:Landroidx/camera/core/impl/SurfaceCombination;

.field private static final SUPPORT_EXTRA_FULL_CONFIGURATIONS_SAMSUNG_MODELS:Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private static final SUPPORT_EXTRA_LEVEL_3_CONFIGURATIONS_GOOGLE_MODELS:Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private static final TAG:Ljava/lang/String; = "ExtraSupportedSurfaceCombinationsQuirk"


# direct methods
.method static constructor <clinit>()V
    .locals 9

    .line 54
    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->createFullYuvPrivYuvConfiguration()Landroidx/camera/core/impl/SurfaceCombination;

    move-result-object v0

    sput-object v0, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->FULL_LEVEL_YUV_PRIV_YUV_CONFIGURATION:Landroidx/camera/core/impl/SurfaceCombination;

    .line 57
    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->createFullYuvYuvYuvConfiguration()Landroidx/camera/core/impl/SurfaceCombination;

    move-result-object v0

    sput-object v0, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->FULL_LEVEL_YUV_YUV_YUV_CONFIGURATION:Landroidx/camera/core/impl/SurfaceCombination;

    .line 60
    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->createLevel3PrivPrivYuvRawConfiguration()Landroidx/camera/core/impl/SurfaceCombination;

    move-result-object v0

    sput-object v0, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->LEVEL_3_LEVEL_PRIV_PRIV_YUV_RAW_CONFIGURATION:Landroidx/camera/core/impl/SurfaceCombination;

    .line 62
    new-instance v0, Ljava/util/HashSet;

    const/16 v1, 0x93

    new-array v1, v1, [Ljava/lang/String;

    const-string v2, "SM-A515F"

    const/4 v3, 0x0

    aput-object v2, v1, v3

    const-string v2, "SM-A515U"

    const/4 v4, 0x1

    aput-object v2, v1, v4

    const-string v2, "SM-A515U1"

    const/4 v5, 0x2

    aput-object v2, v1, v5

    const-string v2, "SM-A515W"

    const/4 v6, 0x3

    aput-object v2, v1, v6

    const-string v2, "SM-S515DL"

    const/4 v7, 0x4

    aput-object v2, v1, v7

    const/4 v2, 0x5

    const-string v8, "SC-54A"

    aput-object v8, v1, v2

    const/4 v2, 0x6

    const-string v8, "SCG07"

    aput-object v8, v1, v2

    const/4 v2, 0x7

    const-string v8, "SM-A5160"

    aput-object v8, v1, v2

    const/16 v2, 0x8

    const-string v8, "SM-A516B"

    aput-object v8, v1, v2

    const/16 v2, 0x9

    const-string v8, "SM-A516N"

    aput-object v8, v1, v2

    const/16 v2, 0xa

    const-string v8, "SM-A516U"

    aput-object v8, v1, v2

    const/16 v2, 0xb

    const-string v8, "SM-A516U1"

    aput-object v8, v1, v2

    const/16 v2, 0xc

    const-string v8, "SM-A516V"

    aput-object v8, v1, v2

    const/16 v2, 0xd

    const-string v8, "SM-A715F"

    aput-object v8, v1, v2

    const/16 v2, 0xe

    const-string v8, "SM-A715W"

    aput-object v8, v1, v2

    const/16 v2, 0xf

    const-string v8, "SM-A7160"

    aput-object v8, v1, v2

    const/16 v2, 0x10

    const-string v8, "SM-A716B"

    aput-object v8, v1, v2

    const/16 v2, 0x11

    const-string v8, "SM-A716U"

    aput-object v8, v1, v2

    const/16 v2, 0x12

    const-string v8, "SM-A716U1"

    aput-object v8, v1, v2

    const/16 v2, 0x13

    const-string v8, "SM-A716V"

    aput-object v8, v1, v2

    const/16 v2, 0x14

    const-string v8, "SM-A8050"

    aput-object v8, v1, v2

    const/16 v2, 0x15

    const-string v8, "SM-A805F"

    aput-object v8, v1, v2

    const/16 v2, 0x16

    const-string v8, "SM-A805N"

    aput-object v8, v1, v2

    const/16 v2, 0x17

    const-string v8, "SCV44"

    aput-object v8, v1, v2

    const/16 v2, 0x18

    const-string v8, "SM-F9000"

    aput-object v8, v1, v2

    const/16 v2, 0x19

    const-string v8, "SM-F900F"

    aput-object v8, v1, v2

    const/16 v2, 0x1a

    const-string v8, "SM-F900U"

    aput-object v8, v1, v2

    const/16 v2, 0x1b

    const-string v8, "SM-F900U1"

    aput-object v8, v1, v2

    const/16 v2, 0x1c

    const-string v8, "SM-F900W"

    aput-object v8, v1, v2

    const/16 v2, 0x1d

    const-string v8, "SM-F907B"

    aput-object v8, v1, v2

    const/16 v2, 0x1e

    const-string v8, "SM-F907N"

    aput-object v8, v1, v2

    const/16 v2, 0x1f

    const-string v8, "SM-N970F"

    aput-object v8, v1, v2

    const/16 v2, 0x20

    const-string v8, "SM-N9700"

    aput-object v8, v1, v2

    const/16 v2, 0x21

    const-string v8, "SM-N970U"

    aput-object v8, v1, v2

    const/16 v2, 0x22

    const-string v8, "SM-N970U1"

    aput-object v8, v1, v2

    const/16 v2, 0x23

    const-string v8, "SM-N970W"

    aput-object v8, v1, v2

    const/16 v2, 0x24

    const-string v8, "SM-N971N"

    aput-object v8, v1, v2

    const/16 v2, 0x25

    const-string v8, "SM-N770F"

    aput-object v8, v1, v2

    const/16 v2, 0x26

    const-string v8, "SC-01M"

    aput-object v8, v1, v2

    const/16 v2, 0x27

    const-string v8, "SCV45"

    aput-object v8, v1, v2

    const/16 v2, 0x28

    const-string v8, "SM-N9750"

    aput-object v8, v1, v2

    const/16 v2, 0x29

    const-string v8, "SM-N975C"

    aput-object v8, v1, v2

    const/16 v2, 0x2a

    const-string v8, "SM-N975U"

    aput-object v8, v1, v2

    const/16 v2, 0x2b

    const-string v8, "SM-N975U1"

    aput-object v8, v1, v2

    const/16 v2, 0x2c

    const-string v8, "SM-N975W"

    aput-object v8, v1, v2

    const/16 v2, 0x2d

    const-string v8, "SM-N975F"

    aput-object v8, v1, v2

    const/16 v2, 0x2e

    const-string v8, "SM-N976B"

    aput-object v8, v1, v2

    const/16 v2, 0x2f

    const-string v8, "SM-N976N"

    aput-object v8, v1, v2

    const/16 v2, 0x30

    const-string v8, "SM-N9760"

    aput-object v8, v1, v2

    const/16 v2, 0x31

    const-string v8, "SM-N976Q"

    aput-object v8, v1, v2

    const/16 v2, 0x32

    const-string v8, "SM-N976V"

    aput-object v8, v1, v2

    const/16 v2, 0x33

    const-string v8, "SM-N976U"

    aput-object v8, v1, v2

    const/16 v2, 0x34

    const-string v8, "SM-N9810"

    aput-object v8, v1, v2

    const/16 v2, 0x35

    const-string v8, "SM-N981N"

    aput-object v8, v1, v2

    const/16 v2, 0x36

    const-string v8, "SM-N981U"

    aput-object v8, v1, v2

    const/16 v2, 0x37

    const-string v8, "SM-N981U1"

    aput-object v8, v1, v2

    const/16 v2, 0x38

    const-string v8, "SM-N981W"

    aput-object v8, v1, v2

    const/16 v2, 0x39

    const-string v8, "SM-N981B"

    aput-object v8, v1, v2

    const/16 v2, 0x3a

    const-string v8, "SC-53A"

    aput-object v8, v1, v2

    const/16 v2, 0x3b

    const-string v8, "SCG06"

    aput-object v8, v1, v2

    const/16 v2, 0x3c

    const-string v8, "SM-N9860"

    aput-object v8, v1, v2

    const/16 v2, 0x3d

    const-string v8, "SM-N986N"

    aput-object v8, v1, v2

    const/16 v2, 0x3e

    const-string v8, "SM-N986U"

    aput-object v8, v1, v2

    const/16 v2, 0x3f

    const-string v8, "SM-N986U1"

    aput-object v8, v1, v2

    const/16 v2, 0x40

    const-string v8, "SM-N986W"

    aput-object v8, v1, v2

    const/16 v2, 0x41

    const-string v8, "SM-N986B"

    aput-object v8, v1, v2

    const/16 v2, 0x42

    const-string v8, "SC-03L"

    aput-object v8, v1, v2

    const/16 v2, 0x43

    const-string v8, "SCV41"

    aput-object v8, v1, v2

    const/16 v2, 0x44

    const-string v8, "SM-G973F"

    aput-object v8, v1, v2

    const/16 v2, 0x45

    const-string v8, "SM-G973N"

    aput-object v8, v1, v2

    const/16 v2, 0x46

    const-string v8, "SM-G9730"

    aput-object v8, v1, v2

    const/16 v2, 0x47

    const-string v8, "SM-G9738"

    aput-object v8, v1, v2

    const/16 v2, 0x48

    const-string v8, "SM-G973C"

    aput-object v8, v1, v2

    const/16 v2, 0x49

    const-string v8, "SM-G973U"

    aput-object v8, v1, v2

    const/16 v2, 0x4a

    const-string v8, "SM-G973U1"

    aput-object v8, v1, v2

    const/16 v2, 0x4b

    const-string v8, "SM-G973W"

    aput-object v8, v1, v2

    const/16 v2, 0x4c

    const-string v8, "SM-G977B"

    aput-object v8, v1, v2

    const/16 v2, 0x4d

    const-string v8, "SM-G977N"

    aput-object v8, v1, v2

    const/16 v2, 0x4e

    const-string v8, "SM-G977P"

    aput-object v8, v1, v2

    const/16 v2, 0x4f

    const-string v8, "SM-G977T"

    aput-object v8, v1, v2

    const/16 v2, 0x50

    const-string v8, "SM-G977U"

    aput-object v8, v1, v2

    const/16 v2, 0x51

    const-string v8, "SM-G770F"

    aput-object v8, v1, v2

    const/16 v2, 0x52

    const-string v8, "SM-G770U1"

    aput-object v8, v1, v2

    const/16 v2, 0x53

    const-string v8, "SC-04L"

    aput-object v8, v1, v2

    const/16 v2, 0x54

    const-string v8, "SCV42"

    aput-object v8, v1, v2

    const/16 v2, 0x55

    const-string v8, "SM-G975F"

    aput-object v8, v1, v2

    const/16 v2, 0x56

    const-string v8, "SM-G975N"

    aput-object v8, v1, v2

    const/16 v2, 0x57

    const-string v8, "SM-G9750"

    aput-object v8, v1, v2

    const/16 v2, 0x58

    const-string v8, "SM-G9758"

    aput-object v8, v1, v2

    const/16 v2, 0x59

    const-string v8, "SM-G975U"

    aput-object v8, v1, v2

    const/16 v2, 0x5a

    const-string v8, "SM-G975U1"

    aput-object v8, v1, v2

    const/16 v2, 0x5b

    const-string v8, "SM-G975W"

    aput-object v8, v1, v2

    const/16 v2, 0x5c

    const-string v8, "SC-05L"

    aput-object v8, v1, v2

    const/16 v2, 0x5d

    const-string v8, "SM-G970F"

    aput-object v8, v1, v2

    const/16 v2, 0x5e

    const-string v8, "SM-G970N"

    aput-object v8, v1, v2

    const/16 v2, 0x5f

    const-string v8, "SM-G9700"

    aput-object v8, v1, v2

    const/16 v2, 0x60

    const-string v8, "SM-G9708"

    aput-object v8, v1, v2

    const/16 v2, 0x61

    const-string v8, "SM-G970U"

    aput-object v8, v1, v2

    const/16 v2, 0x62

    const-string v8, "SM-G970U1"

    aput-object v8, v1, v2

    const/16 v2, 0x63

    const-string v8, "SM-G970W"

    aput-object v8, v1, v2

    const/16 v2, 0x64

    const-string v8, "SC-51A"

    aput-object v8, v1, v2

    const/16 v2, 0x65

    const-string v8, "SC51Aa"

    aput-object v8, v1, v2

    const/16 v2, 0x66

    const-string v8, "SCG01"

    aput-object v8, v1, v2

    const/16 v2, 0x67

    const-string v8, "SM-G9810"

    aput-object v8, v1, v2

    const/16 v2, 0x68

    const-string v8, "SM-G981N"

    aput-object v8, v1, v2

    const/16 v2, 0x69

    const-string v8, "SM-G981U"

    aput-object v8, v1, v2

    const/16 v2, 0x6a

    const-string v8, "SM-G981U1"

    aput-object v8, v1, v2

    const/16 v2, 0x6b

    const-string v8, "SM-G981V"

    aput-object v8, v1, v2

    const/16 v2, 0x6c

    const-string v8, "SM-G981W"

    aput-object v8, v1, v2

    const/16 v2, 0x6d

    const-string v8, "SM-G981B"

    aput-object v8, v1, v2

    const/16 v2, 0x6e

    const-string v8, "SCG03"

    aput-object v8, v1, v2

    const/16 v2, 0x6f

    const-string v8, "SM-G9880"

    aput-object v8, v1, v2

    const/16 v2, 0x70

    const-string v8, "SM-G988N"

    aput-object v8, v1, v2

    const/16 v2, 0x71

    const-string v8, "SM-G988Q"

    aput-object v8, v1, v2

    const/16 v2, 0x72

    const-string v8, "SM-G988U"

    aput-object v8, v1, v2

    const/16 v2, 0x73

    const-string v8, "SM-G988U1"

    aput-object v8, v1, v2

    const/16 v2, 0x74

    const-string v8, "SM-G988W"

    aput-object v8, v1, v2

    const/16 v2, 0x75

    const-string v8, "SM-G988B"

    aput-object v8, v1, v2

    const/16 v2, 0x76

    const-string v8, "SC-52A"

    aput-object v8, v1, v2

    const/16 v2, 0x77

    const-string v8, "SCG02"

    aput-object v8, v1, v2

    const/16 v2, 0x78

    const-string v8, "SM-G9860"

    aput-object v8, v1, v2

    const/16 v2, 0x79

    const-string v8, "SM-G986N"

    aput-object v8, v1, v2

    const/16 v2, 0x7a

    const-string v8, "SM-G986U"

    aput-object v8, v1, v2

    const/16 v2, 0x7b

    const-string v8, "SM-G986U1"

    aput-object v8, v1, v2

    const/16 v2, 0x7c

    const-string v8, "SM-G986W"

    aput-object v8, v1, v2

    const/16 v2, 0x7d

    const-string v8, "SM-G986B"

    aput-object v8, v1, v2

    const/16 v2, 0x7e

    const-string v8, "SCV47"

    aput-object v8, v1, v2

    const/16 v2, 0x7f

    const-string v8, "SM-F7000"

    aput-object v8, v1, v2

    const/16 v2, 0x80

    const-string v8, "SM-F700F"

    aput-object v8, v1, v2

    const/16 v2, 0x81

    const-string v8, "SM-F700N"

    aput-object v8, v1, v2

    const/16 v2, 0x82

    const-string v8, "SM-F700U"

    aput-object v8, v1, v2

    const/16 v2, 0x83

    const-string v8, "SM-F700U1"

    aput-object v8, v1, v2

    const/16 v2, 0x84

    const-string v8, "SM-F700W"

    aput-object v8, v1, v2

    const/16 v2, 0x85

    const-string v8, "SCG04"

    aput-object v8, v1, v2

    const/16 v2, 0x86

    const-string v8, "SM-F7070"

    aput-object v8, v1, v2

    const/16 v2, 0x87

    const-string v8, "SM-F707B"

    aput-object v8, v1, v2

    const/16 v2, 0x88

    const-string v8, "SM-F707N"

    aput-object v8, v1, v2

    const/16 v2, 0x89

    const-string v8, "SM-F707U"

    aput-object v8, v1, v2

    const/16 v2, 0x8a

    const-string v8, "SM-F707U1"

    aput-object v8, v1, v2

    const/16 v2, 0x8b

    const-string v8, "SM-F707W"

    aput-object v8, v1, v2

    const/16 v2, 0x8c

    const-string v8, "SM-F9160"

    aput-object v8, v1, v2

    const/16 v2, 0x8d

    const-string v8, "SM-F916B"

    aput-object v8, v1, v2

    const/16 v2, 0x8e

    const-string v8, "SM-F916N"

    aput-object v8, v1, v2

    const/16 v2, 0x8f

    const-string v8, "SM-F916Q"

    aput-object v8, v1, v2

    const/16 v2, 0x90

    const-string v8, "SM-F916U"

    aput-object v8, v1, v2

    const/16 v2, 0x91

    const-string v8, "SM-F916U1"

    aput-object v8, v1, v2

    const/16 v2, 0x92

    const-string v8, "SM-F916W"

    aput-object v8, v1, v2

    .line 63
    invoke-static {v1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/util/HashSet;-><init>(Ljava/util/Collection;)V

    sput-object v0, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->SUPPORT_EXTRA_FULL_CONFIGURATIONS_SAMSUNG_MODELS:Ljava/util/Set;

    .line 213
    new-instance v0, Ljava/util/HashSet;

    new-array v1, v7, [Ljava/lang/String;

    const-string v2, "PIXEL 6"

    aput-object v2, v1, v3

    const-string v2, "PIXEL 6 PRO"

    aput-object v2, v1, v4

    const-string v2, "PIXEL 7"

    aput-object v2, v1, v5

    const-string v2, "PIXEL 7 PRO"

    aput-object v2, v1, v6

    .line 214
    invoke-static {v1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/util/HashSet;-><init>(Ljava/util/Collection;)V

    sput-object v0, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->SUPPORT_EXTRA_LEVEL_3_CONFIGURATIONS_GOOGLE_MODELS:Ljava/util/Set;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 50
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private static createFullYuvPrivYuvConfiguration()Landroidx/camera/core/impl/SurfaceCombination;
    .locals 3

    .line 301
    new-instance v0, Landroidx/camera/core/impl/SurfaceCombination;

    invoke-direct {v0}, Landroidx/camera/core/impl/SurfaceCombination;-><init>()V

    .line 302
    sget-object v1, Landroidx/camera/core/impl/SurfaceConfig$ConfigType;->YUV:Landroidx/camera/core/impl/SurfaceConfig$ConfigType;

    sget-object v2, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->VGA:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    invoke-static {v1, v2}, Landroidx/camera/core/impl/SurfaceConfig;->create(Landroidx/camera/core/impl/SurfaceConfig$ConfigType;Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;)Landroidx/camera/core/impl/SurfaceConfig;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SurfaceCombination;->addSurfaceConfig(Landroidx/camera/core/impl/SurfaceConfig;)Z

    .line 304
    sget-object v1, Landroidx/camera/core/impl/SurfaceConfig$ConfigType;->PRIV:Landroidx/camera/core/impl/SurfaceConfig$ConfigType;

    sget-object v2, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->PREVIEW:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    invoke-static {v1, v2}, Landroidx/camera/core/impl/SurfaceConfig;->create(Landroidx/camera/core/impl/SurfaceConfig$ConfigType;Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;)Landroidx/camera/core/impl/SurfaceConfig;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SurfaceCombination;->addSurfaceConfig(Landroidx/camera/core/impl/SurfaceConfig;)Z

    .line 306
    sget-object v1, Landroidx/camera/core/impl/SurfaceConfig$ConfigType;->YUV:Landroidx/camera/core/impl/SurfaceConfig$ConfigType;

    sget-object v2, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->MAXIMUM:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    invoke-static {v1, v2}, Landroidx/camera/core/impl/SurfaceConfig;->create(Landroidx/camera/core/impl/SurfaceConfig$ConfigType;Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;)Landroidx/camera/core/impl/SurfaceConfig;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SurfaceCombination;->addSurfaceConfig(Landroidx/camera/core/impl/SurfaceConfig;)Z

    return-object v0
.end method

.method private static createFullYuvYuvYuvConfiguration()Landroidx/camera/core/impl/SurfaceCombination;
    .locals 3

    .line 315
    new-instance v0, Landroidx/camera/core/impl/SurfaceCombination;

    invoke-direct {v0}, Landroidx/camera/core/impl/SurfaceCombination;-><init>()V

    .line 316
    sget-object v1, Landroidx/camera/core/impl/SurfaceConfig$ConfigType;->YUV:Landroidx/camera/core/impl/SurfaceConfig$ConfigType;

    sget-object v2, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->VGA:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    invoke-static {v1, v2}, Landroidx/camera/core/impl/SurfaceConfig;->create(Landroidx/camera/core/impl/SurfaceConfig$ConfigType;Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;)Landroidx/camera/core/impl/SurfaceConfig;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SurfaceCombination;->addSurfaceConfig(Landroidx/camera/core/impl/SurfaceConfig;)Z

    .line 318
    sget-object v1, Landroidx/camera/core/impl/SurfaceConfig$ConfigType;->YUV:Landroidx/camera/core/impl/SurfaceConfig$ConfigType;

    sget-object v2, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->PREVIEW:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    invoke-static {v1, v2}, Landroidx/camera/core/impl/SurfaceConfig;->create(Landroidx/camera/core/impl/SurfaceConfig$ConfigType;Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;)Landroidx/camera/core/impl/SurfaceConfig;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SurfaceCombination;->addSurfaceConfig(Landroidx/camera/core/impl/SurfaceConfig;)Z

    .line 320
    sget-object v1, Landroidx/camera/core/impl/SurfaceConfig$ConfigType;->YUV:Landroidx/camera/core/impl/SurfaceConfig$ConfigType;

    sget-object v2, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->MAXIMUM:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    invoke-static {v1, v2}, Landroidx/camera/core/impl/SurfaceConfig;->create(Landroidx/camera/core/impl/SurfaceConfig$ConfigType;Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;)Landroidx/camera/core/impl/SurfaceConfig;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SurfaceCombination;->addSurfaceConfig(Landroidx/camera/core/impl/SurfaceConfig;)Z

    return-object v0
.end method

.method private static createLevel3PrivPrivYuvRawConfiguration()Landroidx/camera/core/impl/SurfaceCombination;
    .locals 3

    .line 328
    new-instance v0, Landroidx/camera/core/impl/SurfaceCombination;

    invoke-direct {v0}, Landroidx/camera/core/impl/SurfaceCombination;-><init>()V

    .line 329
    sget-object v1, Landroidx/camera/core/impl/SurfaceConfig$ConfigType;->PRIV:Landroidx/camera/core/impl/SurfaceConfig$ConfigType;

    sget-object v2, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->PREVIEW:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    invoke-static {v1, v2}, Landroidx/camera/core/impl/SurfaceConfig;->create(Landroidx/camera/core/impl/SurfaceConfig$ConfigType;Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;)Landroidx/camera/core/impl/SurfaceConfig;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SurfaceCombination;->addSurfaceConfig(Landroidx/camera/core/impl/SurfaceConfig;)Z

    .line 331
    sget-object v1, Landroidx/camera/core/impl/SurfaceConfig$ConfigType;->PRIV:Landroidx/camera/core/impl/SurfaceConfig$ConfigType;

    sget-object v2, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->VGA:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    invoke-static {v1, v2}, Landroidx/camera/core/impl/SurfaceConfig;->create(Landroidx/camera/core/impl/SurfaceConfig$ConfigType;Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;)Landroidx/camera/core/impl/SurfaceConfig;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SurfaceCombination;->addSurfaceConfig(Landroidx/camera/core/impl/SurfaceConfig;)Z

    .line 333
    sget-object v1, Landroidx/camera/core/impl/SurfaceConfig$ConfigType;->YUV:Landroidx/camera/core/impl/SurfaceConfig$ConfigType;

    sget-object v2, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->MAXIMUM:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    invoke-static {v1, v2}, Landroidx/camera/core/impl/SurfaceConfig;->create(Landroidx/camera/core/impl/SurfaceConfig$ConfigType;Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;)Landroidx/camera/core/impl/SurfaceConfig;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SurfaceCombination;->addSurfaceConfig(Landroidx/camera/core/impl/SurfaceConfig;)Z

    .line 335
    sget-object v1, Landroidx/camera/core/impl/SurfaceConfig$ConfigType;->RAW:Landroidx/camera/core/impl/SurfaceConfig$ConfigType;

    sget-object v2, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->MAXIMUM:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    invoke-static {v1, v2}, Landroidx/camera/core/impl/SurfaceConfig;->create(Landroidx/camera/core/impl/SurfaceConfig$ConfigType;Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;)Landroidx/camera/core/impl/SurfaceConfig;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SurfaceCombination;->addSurfaceConfig(Landroidx/camera/core/impl/SurfaceConfig;)Z

    return-object v0
.end method

.method private getLimitedDeviceExtraSupportedFullConfigurations(I)Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/SurfaceCombination;",
            ">;"
        }
    .end annotation

    .line 286
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    if-nez p1, :cond_0

    .line 290
    sget-object p1, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->FULL_LEVEL_YUV_PRIV_YUV_CONFIGURATION:Landroidx/camera/core/impl/SurfaceCombination;

    invoke-interface {v0, p1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 292
    sget-object p1, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->FULL_LEVEL_YUV_YUV_YUV_CONFIGURATION:Landroidx/camera/core/impl/SurfaceCombination;

    invoke-interface {v0, p1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    :cond_0
    return-object v0
.end method

.method private getSamsungS7ExtraCombinations(Ljava/lang/String;)Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            ")",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/SurfaceCombination;",
            ">;"
        }
    .end annotation

    .line 273
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 275
    const-string v1, "1"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 277
    sget-object p1, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->FULL_LEVEL_YUV_PRIV_YUV_CONFIGURATION:Landroidx/camera/core/impl/SurfaceCombination;

    invoke-interface {v0, p1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    :cond_0
    return-object v0
.end method

.method private static isSamsungS7()Z
    .locals 2

    .line 226
    const-string v0, "heroqltevzw"

    sget-object v1, Landroid/os/Build;->DEVICE:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    const-string v0, "heroqltetmo"

    sget-object v1, Landroid/os/Build;->DEVICE:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    :goto_1
    return v0
.end method

.method static load()Z
    .locals 1

    .line 221
    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->isSamsungS7()Z

    move-result v0

    if-nez v0, :cond_1

    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->supportExtraFullConfigurationsSamsungDevice()Z

    move-result v0

    if-nez v0, :cond_1

    .line 222
    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->supportExtraLevel3ConfigurationsGoogleDevice()Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    :goto_1
    return v0
.end method

.method private static supportExtraFullConfigurationsSamsungDevice()Z
    .locals 2

    .line 231
    const-string v0, "samsung"

    sget-object v1, Landroid/os/Build;->BRAND:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_0

    const/4 v0, 0x0

    return v0

    .line 235
    :cond_0
    sget-object v0, Landroid/os/Build;->MODEL:Ljava/lang/String;

    sget-object v1, Ljava/util/Locale;->US:Ljava/util/Locale;

    invoke-virtual {v0, v1}, Ljava/lang/String;->toUpperCase(Ljava/util/Locale;)Ljava/lang/String;

    move-result-object v0

    .line 237
    sget-object v1, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->SUPPORT_EXTRA_FULL_CONFIGURATIONS_SAMSUNG_MODELS:Ljava/util/Set;

    invoke-interface {v1, v0}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result v0

    return v0
.end method

.method private static supportExtraLevel3ConfigurationsGoogleDevice()Z
    .locals 2

    .line 241
    const-string v0, "google"

    sget-object v1, Landroid/os/Build;->BRAND:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_0

    const/4 v0, 0x0

    return v0

    .line 245
    :cond_0
    sget-object v0, Landroid/os/Build;->MODEL:Ljava/lang/String;

    sget-object v1, Ljava/util/Locale;->US:Ljava/util/Locale;

    invoke-virtual {v0, v1}, Ljava/lang/String;->toUpperCase(Ljava/util/Locale;)Ljava/lang/String;

    move-result-object v0

    .line 247
    sget-object v1, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->SUPPORT_EXTRA_LEVEL_3_CONFIGURATIONS_GOOGLE_MODELS:Ljava/util/Set;

    invoke-interface {v1, v0}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result v0

    return v0
.end method


# virtual methods
.method public getExtraSupportedSurfaceCombinations(Ljava/lang/String;I)Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "I)",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/SurfaceCombination;",
            ">;"
        }
    .end annotation

    .line 256
    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->isSamsungS7()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 257
    invoke-direct {p0, p1}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->getSamsungS7ExtraCombinations(Ljava/lang/String;)Ljava/util/List;

    move-result-object p1

    return-object p1

    .line 260
    :cond_0
    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->supportExtraFullConfigurationsSamsungDevice()Z

    move-result p1

    if-eqz p1, :cond_1

    .line 261
    invoke-direct {p0, p2}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->getLimitedDeviceExtraSupportedFullConfigurations(I)Ljava/util/List;

    move-result-object p1

    return-object p1

    .line 264
    :cond_1
    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->supportExtraLevel3ConfigurationsGoogleDevice()Z

    move-result p1

    if-eqz p1, :cond_2

    .line 265
    sget-object p1, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedSurfaceCombinationsQuirk;->LEVEL_3_LEVEL_PRIV_PRIV_YUV_RAW_CONFIGURATION:Landroidx/camera/core/impl/SurfaceCombination;

    invoke-static {p1}, Ljava/util/Collections;->singletonList(Ljava/lang/Object;)Ljava/util/List;

    move-result-object p1

    return-object p1

    .line 268
    :cond_2
    invoke-static {}, Ljava/util/Collections;->emptyList()Ljava/util/List;

    move-result-object p1

    return-object p1
.end method
