.class public abstract Lcom/google/android/datatransport/runtime/backends/BackendRegistryModule;
.super Ljava/lang/Object;
.source "com.google.android.datatransport:transport-runtime@@2.2.0"


# annotations
.annotation runtime Ldagger/Module;
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 21
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method abstract backendRegistry(Lcom/google/android/datatransport/runtime/backends/MetadataBackendRegistry;)Lcom/google/android/datatransport/runtime/backends/BackendRegistry;
    .annotation runtime Ldagger/Binds;
    .end annotation
.end method
