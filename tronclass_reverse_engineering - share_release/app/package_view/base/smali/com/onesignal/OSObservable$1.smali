.class Lcom/onesignal/OSObservable$1;
.super Ljava/lang/Object;
.source "OSObservable.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSObservable;->notifyChange(Ljava/lang/Object;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSObservable;

.field final synthetic val$method:Ljava/lang/reflect/Method;

.field final synthetic val$state:Ljava/lang/Object;

.field final synthetic val$strongRefObserver:Ljava/lang/Object;


# direct methods
.method constructor <init>(Lcom/onesignal/OSObservable;Ljava/lang/reflect/Method;Ljava/lang/Object;Ljava/lang/Object;)V
    .locals 0

    .line 83
    iput-object p1, p0, Lcom/onesignal/OSObservable$1;->this$0:Lcom/onesignal/OSObservable;

    iput-object p2, p0, Lcom/onesignal/OSObservable$1;->val$method:Ljava/lang/reflect/Method;

    iput-object p3, p0, Lcom/onesignal/OSObservable$1;->val$strongRefObserver:Ljava/lang/Object;

    iput-object p4, p0, Lcom/onesignal/OSObservable$1;->val$state:Ljava/lang/Object;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 87
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/OSObservable$1;->val$method:Ljava/lang/reflect/Method;

    iget-object v1, p0, Lcom/onesignal/OSObservable$1;->val$strongRefObserver:Ljava/lang/Object;

    iget-object v2, p0, Lcom/onesignal/OSObservable$1;->val$state:Ljava/lang/Object;

    filled-new-array {v2}, [Ljava/lang/Object;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;
    :try_end_0
    .catch Ljava/lang/IllegalAccessException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/reflect/InvocationTargetException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 91
    invoke-virtual {v0}, Ljava/lang/reflect/InvocationTargetException;->printStackTrace()V

    goto :goto_0

    :catch_1
    move-exception v0

    .line 89
    invoke-virtual {v0}, Ljava/lang/IllegalAccessException;->printStackTrace()V

    :goto_0
    return-void
.end method
