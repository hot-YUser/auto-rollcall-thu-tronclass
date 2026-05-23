.class public final Lcom/google/android/datatransport/runtime/time/TimeModule_UptimeClockFactory;
.super Ljava/lang/Object;
.source "com.google.android.datatransport:transport-runtime@@2.2.0"

# interfaces
.implements Ldagger/internal/Factory;


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Ldagger/internal/Factory<",
        "Lcom/google/android/datatransport/runtime/time/Clock;",
        ">;"
    }
.end annotation


# static fields
.field private static final INSTANCE:Lcom/google/android/datatransport/runtime/time/TimeModule_UptimeClockFactory;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 16
    new-instance v0, Lcom/google/android/datatransport/runtime/time/TimeModule_UptimeClockFactory;

    invoke-direct {v0}, Lcom/google/android/datatransport/runtime/time/TimeModule_UptimeClockFactory;-><init>()V

    sput-object v0, Lcom/google/android/datatransport/runtime/time/TimeModule_UptimeClockFactory;->INSTANCE:Lcom/google/android/datatransport/runtime/time/TimeModule_UptimeClockFactory;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 15
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static create()Lcom/google/android/datatransport/runtime/time/TimeModule_UptimeClockFactory;
    .locals 1

    .line 24
    sget-object v0, Lcom/google/android/datatransport/runtime/time/TimeModule_UptimeClockFactory;->INSTANCE:Lcom/google/android/datatransport/runtime/time/TimeModule_UptimeClockFactory;

    return-object v0
.end method

.method public static uptimeClock()Lcom/google/android/datatransport/runtime/time/Clock;
    .locals 2

    .line 28
    invoke-static {}, Lcom/google/android/datatransport/runtime/time/TimeModule;->uptimeClock()Lcom/google/android/datatransport/runtime/time/Clock;

    move-result-object v0

    const-string v1, "Cannot return null from a non-@Nullable @Provides method"

    invoke-static {v0, v1}, Ldagger/internal/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/google/android/datatransport/runtime/time/Clock;

    return-object v0
.end method


# virtual methods
.method public get()Lcom/google/android/datatransport/runtime/time/Clock;
    .locals 1

    .line 20
    invoke-static {}, Lcom/google/android/datatransport/runtime/time/TimeModule_UptimeClockFactory;->uptimeClock()Lcom/google/android/datatransport/runtime/time/Clock;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic get()Ljava/lang/Object;
    .locals 1

    .line 7
    invoke-virtual {p0}, Lcom/google/android/datatransport/runtime/time/TimeModule_UptimeClockFactory;->get()Lcom/google/android/datatransport/runtime/time/Clock;

    move-result-object v0

    return-object v0
.end method
