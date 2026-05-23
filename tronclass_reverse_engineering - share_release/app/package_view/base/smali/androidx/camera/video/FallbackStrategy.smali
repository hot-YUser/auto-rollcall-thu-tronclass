.class public Landroidx/camera/video/FallbackStrategy;
.super Ljava/lang/Object;
.source "FallbackStrategy.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/FallbackStrategy$RuleStrategy;
    }
.end annotation


# static fields
.field static final FALLBACK_RULE_HIGHER:I = 0x2

.field static final FALLBACK_RULE_HIGHER_OR_LOWER:I = 0x1

.field static final FALLBACK_RULE_LOWER:I = 0x4

.field static final FALLBACK_RULE_LOWER_OR_HIGHER:I = 0x3

.field static final FALLBACK_RULE_NONE:I

.field static final NONE:Landroidx/camera/video/FallbackStrategy;


# direct methods
.method static constructor <clinit>()V
    .locals 3

    .line 127
    new-instance v0, Landroidx/camera/video/AutoValue_FallbackStrategy_RuleStrategy;

    sget-object v1, Landroidx/camera/video/Quality;->NONE:Landroidx/camera/video/Quality;

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/AutoValue_FallbackStrategy_RuleStrategy;-><init>(Landroidx/camera/video/Quality;I)V

    sput-object v0, Landroidx/camera/video/FallbackStrategy;->NONE:Landroidx/camera/video/FallbackStrategy;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 36
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method synthetic constructor <init>(Landroidx/camera/video/FallbackStrategy$1;)V
    .locals 0

    .line 33
    invoke-direct {p0}, Landroidx/camera/video/FallbackStrategy;-><init>()V

    return-void
.end method

.method public static higherQualityOrLowerThan(Landroidx/camera/video/Quality;)Landroidx/camera/video/FallbackStrategy;
    .locals 2

    .line 48
    new-instance v0, Landroidx/camera/video/AutoValue_FallbackStrategy_RuleStrategy;

    const/4 v1, 0x1

    invoke-direct {v0, p0, v1}, Landroidx/camera/video/AutoValue_FallbackStrategy_RuleStrategy;-><init>(Landroidx/camera/video/Quality;I)V

    return-object v0
.end method

.method public static higherQualityThan(Landroidx/camera/video/Quality;)Landroidx/camera/video/FallbackStrategy;
    .locals 2

    .line 58
    new-instance v0, Landroidx/camera/video/AutoValue_FallbackStrategy_RuleStrategy;

    const/4 v1, 0x2

    invoke-direct {v0, p0, v1}, Landroidx/camera/video/AutoValue_FallbackStrategy_RuleStrategy;-><init>(Landroidx/camera/video/Quality;I)V

    return-object v0
.end method

.method public static lowerQualityOrHigherThan(Landroidx/camera/video/Quality;)Landroidx/camera/video/FallbackStrategy;
    .locals 2

    .line 71
    new-instance v0, Landroidx/camera/video/AutoValue_FallbackStrategy_RuleStrategy;

    const/4 v1, 0x3

    invoke-direct {v0, p0, v1}, Landroidx/camera/video/AutoValue_FallbackStrategy_RuleStrategy;-><init>(Landroidx/camera/video/Quality;I)V

    return-object v0
.end method

.method public static lowerQualityThan(Landroidx/camera/video/Quality;)Landroidx/camera/video/FallbackStrategy;
    .locals 2

    .line 81
    new-instance v0, Landroidx/camera/video/AutoValue_FallbackStrategy_RuleStrategy;

    const/4 v1, 0x4

    invoke-direct {v0, p0, v1}, Landroidx/camera/video/AutoValue_FallbackStrategy_RuleStrategy;-><init>(Landroidx/camera/video/Quality;I)V

    return-object v0
.end method
