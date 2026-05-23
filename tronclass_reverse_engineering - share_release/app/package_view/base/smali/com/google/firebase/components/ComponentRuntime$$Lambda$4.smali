.class final synthetic Lcom/google/firebase/components/ComponentRuntime$$Lambda$4;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-components@@16.0.0"

# interfaces
.implements Lcom/google/firebase/inject/Provider;


# instance fields
.field private final arg$1:Ljava/util/Set;


# direct methods
.method private constructor <init>(Ljava/util/Set;)V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/google/firebase/components/ComponentRuntime$$Lambda$4;->arg$1:Ljava/util/Set;

    return-void
.end method

.method public static lambdaFactory$(Ljava/util/Set;)Lcom/google/firebase/inject/Provider;
    .locals 1

    new-instance v0, Lcom/google/firebase/components/ComponentRuntime$$Lambda$4;

    invoke-direct {v0, p0}, Lcom/google/firebase/components/ComponentRuntime$$Lambda$4;-><init>(Ljava/util/Set;)V

    return-object v0
.end method


# virtual methods
.method public get()Ljava/lang/Object;
    .locals 1

    iget-object v0, p0, Lcom/google/firebase/components/ComponentRuntime$$Lambda$4;->arg$1:Ljava/util/Set;

    invoke-static {v0}, Lcom/google/firebase/components/ComponentRuntime;->lambda$processSetComponents$1(Ljava/util/Set;)Ljava/util/Set;

    move-result-object v0

    return-object v0
.end method
