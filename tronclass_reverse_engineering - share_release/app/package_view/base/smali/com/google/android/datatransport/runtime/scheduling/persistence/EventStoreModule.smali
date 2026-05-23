.class public abstract Lcom/google/android/datatransport/runtime/scheduling/persistence/EventStoreModule;
.super Ljava/lang/Object;
.source "com.google.android.datatransport:transport-runtime@@2.2.0"


# annotations
.annotation runtime Ldagger/Module;
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 26
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static schemaVersion()I
    .locals 1
    .annotation runtime Ldagger/Provides;
    .end annotation

    .annotation runtime Ljavax/inject/Named;
        value = "SCHEMA_VERSION"
    .end annotation

    .line 42
    sget v0, Lcom/google/android/datatransport/runtime/scheduling/persistence/SchemaManager;->SCHEMA_VERSION:I

    return v0
.end method

.method static storeConfig()Lcom/google/android/datatransport/runtime/scheduling/persistence/EventStoreConfig;
    .locals 1
    .annotation runtime Ldagger/Provides;
    .end annotation

    .line 30
    sget-object v0, Lcom/google/android/datatransport/runtime/scheduling/persistence/EventStoreConfig;->DEFAULT:Lcom/google/android/datatransport/runtime/scheduling/persistence/EventStoreConfig;

    return-object v0
.end method


# virtual methods
.method abstract eventStore(Lcom/google/android/datatransport/runtime/scheduling/persistence/SQLiteEventStore;)Lcom/google/android/datatransport/runtime/scheduling/persistence/EventStore;
    .annotation runtime Ldagger/Binds;
    .end annotation
.end method

.method abstract synchronizationGuard(Lcom/google/android/datatransport/runtime/scheduling/persistence/SQLiteEventStore;)Lcom/google/android/datatransport/runtime/synchronization/SynchronizationGuard;
    .annotation runtime Ldagger/Binds;
    .end annotation
.end method
