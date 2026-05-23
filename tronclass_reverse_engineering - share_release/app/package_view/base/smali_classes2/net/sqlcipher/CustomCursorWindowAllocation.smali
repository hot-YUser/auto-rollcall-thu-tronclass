.class public Lnet/sqlcipher/CustomCursorWindowAllocation;
.super Ljava/lang/Object;
.source "CustomCursorWindowAllocation.java"

# interfaces
.implements Lnet/sqlcipher/CursorWindowAllocation;


# instance fields
.field private growthPaddingSize:J

.field private initialAllocationSize:J

.field private maxAllocationSize:J


# direct methods
.method public constructor <init>(JJJ)V
    .locals 0

    .line 13
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 14
    iput-wide p1, p0, Lnet/sqlcipher/CustomCursorWindowAllocation;->initialAllocationSize:J

    .line 15
    iput-wide p3, p0, Lnet/sqlcipher/CustomCursorWindowAllocation;->growthPaddingSize:J

    .line 16
    iput-wide p5, p0, Lnet/sqlcipher/CustomCursorWindowAllocation;->maxAllocationSize:J

    return-void
.end method


# virtual methods
.method public getGrowthPaddingSize()J
    .locals 2

    .line 24
    iget-wide v0, p0, Lnet/sqlcipher/CustomCursorWindowAllocation;->growthPaddingSize:J

    return-wide v0
.end method

.method public getInitialAllocationSize()J
    .locals 2

    .line 20
    iget-wide v0, p0, Lnet/sqlcipher/CustomCursorWindowAllocation;->initialAllocationSize:J

    return-wide v0
.end method

.method public getMaxAllocationSize()J
    .locals 2

    .line 28
    iget-wide v0, p0, Lnet/sqlcipher/CustomCursorWindowAllocation;->maxAllocationSize:J

    return-wide v0
.end method
