.class Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation$1;
.super Ljava/lang/Object;
.source "NativeGeolocation.java"

# interfaces
.implements Landroid/location/LocationListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->requestLocationUpdates(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;


# direct methods
.method constructor <init>(Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 230
    iput-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation$1;->this$0:Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;

    iput-object p2, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onLocationChanged(Landroid/location/Location;)V
    .locals 3

    if-nez p1, :cond_0

    .line 234
    iget-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation$1;->val$call:Lcom/getcapacitor/PluginCall;

    new-instance v0, Ljava/lang/Exception;

    const-string v1, "location unavailable"

    invoke-direct {v0, v1}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    const-string v2, "2"

    invoke-virtual {p1, v1, v2, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Exception;)V

    goto :goto_0

    .line 236
    :cond_0
    iget-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation$1;->val$call:Lcom/getcapacitor/PluginCall;

    iget-object v1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation$1;->this$0:Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;

    invoke-static {v1, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->access$000(Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;Landroid/location/Location;)Lcom/getcapacitor/JSObject;

    move-result-object p1

    invoke-virtual {v0, p1}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    :goto_0
    return-void
.end method

.method public onProviderDisabled(Ljava/lang/String;)V
    .locals 0

    .line 251
    iget-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation$1;->this$0:Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;

    invoke-static {p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->access$200(Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;)V

    return-void
.end method

.method public onProviderEnabled(Ljava/lang/String;)V
    .locals 2

    .line 246
    iget-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation$1;->this$0:Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;

    invoke-virtual {p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->getContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "location"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/location/LocationManager;

    invoke-static {p1, v0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->access$102(Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;Landroid/location/LocationManager;)Landroid/location/LocationManager;

    return-void
.end method

.method public onStatusChanged(Ljava/lang/String;ILandroid/os/Bundle;)V
    .locals 0

    return-void
.end method
