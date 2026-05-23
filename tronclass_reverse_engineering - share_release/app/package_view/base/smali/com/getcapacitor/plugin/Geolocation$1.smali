.class Lcom/getcapacitor/plugin/Geolocation$1;
.super Lcom/google/android/gms/location/LocationCallback;
.source "Geolocation.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Geolocation;->requestLocationUpdates(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/Geolocation;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/Geolocation;Lcom/getcapacitor/PluginCall;)V
    .locals 0

    .line 162
    iput-object p1, p0, Lcom/getcapacitor/plugin/Geolocation$1;->this$0:Lcom/getcapacitor/plugin/Geolocation;

    iput-object p2, p0, Lcom/getcapacitor/plugin/Geolocation$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Lcom/google/android/gms/location/LocationCallback;-><init>()V

    return-void
.end method


# virtual methods
.method public onLocationAvailability(Lcom/google/android/gms/location/LocationAvailability;)V
    .locals 1

    .line 177
    invoke-virtual {p1}, Lcom/google/android/gms/location/LocationAvailability;->isLocationAvailable()Z

    move-result p1

    if-nez p1, :cond_0

    .line 178
    iget-object p1, p0, Lcom/getcapacitor/plugin/Geolocation$1;->val$call:Lcom/getcapacitor/PluginCall;

    const-string v0, "location unavailable"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    .line 179
    iget-object p1, p0, Lcom/getcapacitor/plugin/Geolocation$1;->this$0:Lcom/getcapacitor/plugin/Geolocation;

    invoke-static {p1}, Lcom/getcapacitor/plugin/Geolocation;->access$000(Lcom/getcapacitor/plugin/Geolocation;)V

    :cond_0
    return-void
.end method

.method public onLocationResult(Lcom/google/android/gms/location/LocationResult;)V
    .locals 2

    .line 165
    iget-object v0, p0, Lcom/getcapacitor/plugin/Geolocation$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->getMethodName()Ljava/lang/String;

    move-result-object v0

    const-string v1, "getCurrentPosition"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 166
    iget-object v0, p0, Lcom/getcapacitor/plugin/Geolocation$1;->this$0:Lcom/getcapacitor/plugin/Geolocation;

    invoke-static {v0}, Lcom/getcapacitor/plugin/Geolocation;->access$000(Lcom/getcapacitor/plugin/Geolocation;)V

    .line 168
    :cond_0
    invoke-virtual {p1}, Lcom/google/android/gms/location/LocationResult;->getLastLocation()Landroid/location/Location;

    move-result-object p1

    if-nez p1, :cond_1

    .line 170
    iget-object p1, p0, Lcom/getcapacitor/plugin/Geolocation$1;->val$call:Lcom/getcapacitor/PluginCall;

    const-string v0, "location unavailable"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    goto :goto_0

    .line 172
    :cond_1
    iget-object v0, p0, Lcom/getcapacitor/plugin/Geolocation$1;->val$call:Lcom/getcapacitor/PluginCall;

    iget-object v1, p0, Lcom/getcapacitor/plugin/Geolocation$1;->this$0:Lcom/getcapacitor/plugin/Geolocation;

    invoke-static {v1, p1}, Lcom/getcapacitor/plugin/Geolocation;->access$100(Lcom/getcapacitor/plugin/Geolocation;Landroid/location/Location;)Lcom/getcapacitor/JSObject;

    move-result-object p1

    invoke-virtual {v0, p1}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    :goto_0
    return-void
.end method
