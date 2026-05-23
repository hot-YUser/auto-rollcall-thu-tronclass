.class public Landroidx/profileinstaller/ProfileVersion;
.super Ljava/lang/Object;
.source "ProfileVersion.java"


# static fields
.field public static final MAX_SUPPORTED_SDK:I = 0x21

.field static final METADATA_V001_N:[B

.field static final METADATA_V002:[B

.field public static final MIN_SUPPORTED_SDK:I = 0x18

.field static final V001_N:[B

.field static final V005_O:[B

.field static final V009_O_MR1:[B

.field static final V010_P:[B

.field static final V015_S:[B


# direct methods
.method static constructor <clinit>()V
    .locals 2

    const/4 v0, 0x4

    .line 29
    new-array v1, v0, [B

    fill-array-data v1, :array_0

    sput-object v1, Landroidx/profileinstaller/ProfileVersion;->V015_S:[B

    .line 30
    new-array v1, v0, [B

    fill-array-data v1, :array_1

    sput-object v1, Landroidx/profileinstaller/ProfileVersion;->V010_P:[B

    .line 31
    new-array v1, v0, [B

    fill-array-data v1, :array_2

    sput-object v1, Landroidx/profileinstaller/ProfileVersion;->V009_O_MR1:[B

    .line 32
    new-array v1, v0, [B

    fill-array-data v1, :array_3

    sput-object v1, Landroidx/profileinstaller/ProfileVersion;->V005_O:[B

    .line 33
    new-array v1, v0, [B

    fill-array-data v1, :array_4

    sput-object v1, Landroidx/profileinstaller/ProfileVersion;->V001_N:[B

    .line 34
    new-array v1, v0, [B

    fill-array-data v1, :array_5

    sput-object v1, Landroidx/profileinstaller/ProfileVersion;->METADATA_V001_N:[B

    .line 35
    new-array v0, v0, [B

    fill-array-data v0, :array_6

    sput-object v0, Landroidx/profileinstaller/ProfileVersion;->METADATA_V002:[B

    return-void

    nop

    :array_0
    .array-data 1
        0x30t
        0x31t
        0x35t
        0x0t
    .end array-data

    :array_1
    .array-data 1
        0x30t
        0x31t
        0x30t
        0x0t
    .end array-data

    :array_2
    .array-data 1
        0x30t
        0x30t
        0x39t
        0x0t
    .end array-data

    :array_3
    .array-data 1
        0x30t
        0x30t
        0x35t
        0x0t
    .end array-data

    :array_4
    .array-data 1
        0x30t
        0x30t
        0x31t
        0x0t
    .end array-data

    :array_5
    .array-data 1
        0x30t
        0x30t
        0x31t
        0x0t
    .end array-data

    :array_6
    .array-data 1
        0x30t
        0x30t
        0x32t
        0x0t
    .end array-data
.end method

.method private constructor <init>()V
    .locals 0

    .line 28
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static dexKeySeparator([B)Ljava/lang/String;
    .locals 2

    .line 40
    sget-object v0, Landroidx/profileinstaller/ProfileVersion;->V001_N:[B

    invoke-static {p0, v0}, Ljava/util/Arrays;->equals([B[B)Z

    move-result v0

    const-string v1, ":"

    if-eqz v0, :cond_0

    return-object v1

    .line 42
    :cond_0
    sget-object v0, Landroidx/profileinstaller/ProfileVersion;->V005_O:[B

    invoke-static {p0, v0}, Ljava/util/Arrays;->equals([B[B)Z

    move-result p0

    if-eqz p0, :cond_1

    return-object v1

    .line 45
    :cond_1
    const-string p0, "!"

    return-object p0
.end method
