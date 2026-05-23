.class Landroidx/transition/Styleable;
.super Ljava/lang/Object;
.source "Styleable.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/transition/Styleable$PatternPathMotion;,
        Landroidx/transition/Styleable$ArcMotion;,
        Landroidx/transition/Styleable$TransitionSet;,
        Landroidx/transition/Styleable$Slide;,
        Landroidx/transition/Styleable$ChangeTransform;,
        Landroidx/transition/Styleable$Fade;,
        Landroidx/transition/Styleable$VisibilityTransition;,
        Landroidx/transition/Styleable$ChangeBounds;,
        Landroidx/transition/Styleable$Transition;,
        Landroidx/transition/Styleable$TransitionManager;,
        Landroidx/transition/Styleable$TransitionTarget;
    }
.end annotation


# static fields
.field static final ARC_MOTION:[I

.field static final CHANGE_BOUNDS:[I

.field static final CHANGE_TRANSFORM:[I

.field static final FADE:[I

.field static final PATTERN_PATH_MOTION:[I

.field static final SLIDE:[I

.field static final TRANSITION:[I

.field static final TRANSITION_MANAGER:[I

.field static final TRANSITION_SET:[I

.field static final TRANSITION_TARGET:[I

.field static final VISIBILITY_TRANSITION:[I


# direct methods
.method static constructor <clinit>()V
    .locals 4

    const/4 v0, 0x6

    .line 30
    new-array v0, v0, [I

    fill-array-data v0, :array_0

    sput-object v0, Landroidx/transition/Styleable;->TRANSITION_TARGET:[I

    const v0, 0x10103de

    const v1, 0x10103df

    const v2, 0x10103dd

    .line 55
    filled-new-array {v2, v0, v1}, [I

    move-result-object v0

    sput-object v0, Landroidx/transition/Styleable;->TRANSITION_MANAGER:[I

    const v0, 0x10103e2

    const v1, 0x101044f

    const v2, 0x1010141

    const v3, 0x1010198

    .line 71
    filled-new-array {v2, v3, v0, v1}, [I

    move-result-object v0

    sput-object v0, Landroidx/transition/Styleable;->TRANSITION:[I

    const v0, 0x10104cf

    .line 90
    filled-new-array {v0}, [I

    move-result-object v0

    sput-object v0, Landroidx/transition/Styleable;->CHANGE_BOUNDS:[I

    const v0, 0x101047c

    .line 100
    filled-new-array {v0}, [I

    move-result-object v0

    sput-object v0, Landroidx/transition/Styleable;->VISIBILITY_TRANSITION:[I

    const v0, 0x10103e1

    .line 110
    filled-new-array {v0}, [I

    move-result-object v0

    sput-object v0, Landroidx/transition/Styleable;->FADE:[I

    const v0, 0x10104bc

    const v1, 0x10104bd

    .line 120
    filled-new-array {v0, v1}, [I

    move-result-object v0

    sput-object v0, Landroidx/transition/Styleable;->CHANGE_TRANSFORM:[I

    const v0, 0x1010430

    .line 133
    filled-new-array {v0}, [I

    move-result-object v0

    sput-object v0, Landroidx/transition/Styleable;->SLIDE:[I

    const v0, 0x10103e0

    .line 143
    filled-new-array {v0}, [I

    move-result-object v0

    sput-object v0, Landroidx/transition/Styleable;->TRANSITION_SET:[I

    const v0, 0x101047e

    const v1, 0x101047f

    const v2, 0x101047d

    .line 153
    filled-new-array {v2, v0, v1}, [I

    move-result-object v0

    sput-object v0, Landroidx/transition/Styleable;->ARC_MOTION:[I

    const v0, 0x10104ca

    .line 169
    filled-new-array {v0}, [I

    move-result-object v0

    sput-object v0, Landroidx/transition/Styleable;->PATTERN_PATH_MOTION:[I

    return-void

    nop

    :array_0
    .array-data 4
        0x101002f
        0x10103dc
        0x1010441
        0x1010442
        0x101044d
        0x101044e
    .end array-data
.end method

.method private constructor <init>()V
    .locals 0

    .line 178
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method
