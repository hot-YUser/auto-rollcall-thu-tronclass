.class Lcom/wisdomgarden/trpc/MainActivity$1;
.super Ljava/util/ArrayList;
.source "MainActivity.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/wisdomgarden/trpc/MainActivity;->onCreate(Landroid/os/Bundle;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/util/ArrayList<",
        "Ljava/lang/Class<",
        "+",
        "Lcom/getcapacitor/Plugin;",
        ">;>;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Lcom/wisdomgarden/trpc/MainActivity;


# direct methods
.method constructor <init>(Lcom/wisdomgarden/trpc/MainActivity;)V
    .locals 0

    .line 86
    iput-object p1, p0, Lcom/wisdomgarden/trpc/MainActivity$1;->this$0:Lcom/wisdomgarden/trpc/MainActivity;

    invoke-direct {p0}, Ljava/util/ArrayList;-><init>()V

    .line 89
    const-class p1, Lcom/tchvu3/capvoicerecorder/VoiceRecorder;

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/MainActivity$1;->add(Ljava/lang/Object;)Z

    .line 92
    const-class p1, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/MainActivity$1;->add(Ljava/lang/Object;)Z

    .line 95
    const-class p1, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/MainActivity$1;->add(Ljava/lang/Object;)Z

    .line 98
    const-class p1, Lcom/wisdomgarden/mobile/WriteFilePermission;

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/MainActivity$1;->add(Ljava/lang/Object;)Z

    .line 101
    const-class p1, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/MainActivity$1;->add(Ljava/lang/Object;)Z

    .line 104
    const-class p1, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/MainActivity$1;->add(Ljava/lang/Object;)Z

    .line 107
    const-class p1, Lcom/bkon/capacitor/DarkMode/DarkMode;

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/MainActivity$1;->add(Ljava/lang/Object;)Z

    .line 110
    const-class p1, Lcom/wisdomgarden/mobile/CapacitorUpdater;

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/MainActivity$1;->add(Ljava/lang/Object;)Z

    .line 112
    const-class p1, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/MainActivity$1;->add(Ljava/lang/Object;)Z

    .line 114
    const-class p1, Lcom/wisdomgarden/trpc/mediapicker/MediaPicker;

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/MainActivity$1;->add(Ljava/lang/Object;)Z

    .line 116
    const-class p1, Lcom/wisdomgarden/mobile/beacon/Beacon;

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/MainActivity$1;->add(Ljava/lang/Object;)Z

    .line 118
    const-class p1, Lcom/wisdomgarden/plugins/edgeui/EdgeUiPlugin;

    invoke-virtual {p0, p1}, Lcom/wisdomgarden/trpc/MainActivity$1;->add(Ljava/lang/Object;)Z

    return-void
.end method
