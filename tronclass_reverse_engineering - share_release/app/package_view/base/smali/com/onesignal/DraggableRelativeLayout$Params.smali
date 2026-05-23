.class Lcom/onesignal/DraggableRelativeLayout$Params;
.super Ljava/lang/Object;
.source "DraggableRelativeLayout.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/DraggableRelativeLayout;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "Params"
.end annotation


# static fields
.field static final DRAGGABLE_DIRECTION_DOWN:I = 0x1

.field static final DRAGGABLE_DIRECTION_UP:I


# instance fields
.field private dismissingYPos:I

.field private dismissingYVelocity:I

.field dragDirection:I

.field dragThresholdY:I

.field draggingDisabled:Z

.field height:I

.field maxXPos:I

.field maxYPos:I

.field messageHeight:I

.field private offScreenYPos:I

.field posY:I


# direct methods
.method constructor <init>()V
    .locals 0

    .line 33
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic access$000(Lcom/onesignal/DraggableRelativeLayout$Params;)I
    .locals 0

    .line 33
    iget p0, p0, Lcom/onesignal/DraggableRelativeLayout$Params;->offScreenYPos:I

    return p0
.end method

.method static synthetic access$002(Lcom/onesignal/DraggableRelativeLayout$Params;I)I
    .locals 0

    .line 33
    iput p1, p0, Lcom/onesignal/DraggableRelativeLayout$Params;->offScreenYPos:I

    return p1
.end method

.method static synthetic access$100(Lcom/onesignal/DraggableRelativeLayout$Params;)I
    .locals 0

    .line 33
    iget p0, p0, Lcom/onesignal/DraggableRelativeLayout$Params;->dismissingYVelocity:I

    return p0
.end method

.method static synthetic access$102(Lcom/onesignal/DraggableRelativeLayout$Params;I)I
    .locals 0

    .line 33
    iput p1, p0, Lcom/onesignal/DraggableRelativeLayout$Params;->dismissingYVelocity:I

    return p1
.end method

.method static synthetic access$200(Lcom/onesignal/DraggableRelativeLayout$Params;)I
    .locals 0

    .line 33
    iget p0, p0, Lcom/onesignal/DraggableRelativeLayout$Params;->dismissingYPos:I

    return p0
.end method

.method static synthetic access$202(Lcom/onesignal/DraggableRelativeLayout$Params;I)I
    .locals 0

    .line 33
    iput p1, p0, Lcom/onesignal/DraggableRelativeLayout$Params;->dismissingYPos:I

    return p1
.end method
