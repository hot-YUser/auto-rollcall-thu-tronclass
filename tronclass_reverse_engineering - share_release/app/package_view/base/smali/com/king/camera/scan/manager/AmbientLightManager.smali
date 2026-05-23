.class public Lcom/king/camera/scan/manager/AmbientLightManager;
.super Ljava/lang/Object;
.source "AmbientLightManager.java"

# interfaces
.implements Landroid/hardware/SensorEventListener;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/king/camera/scan/manager/AmbientLightManager$OnLightSensorEventListener;
    }
.end annotation


# static fields
.field protected static final BRIGHT_LUX:F = 100.0f

.field protected static final DARK_LUX:F = 45.0f

.field private static final INTERVAL_TIME:I = 0xc8


# instance fields
.field private brightLightLux:F

.field private darkLightLux:F

.field private isLightSensorEnabled:Z

.field private lastTime:J

.field private lightSensor:Landroid/hardware/Sensor;

.field private mOnLightSensorEventListener:Lcom/king/camera/scan/manager/AmbientLightManager$OnLightSensorEventListener;

.field private sensorManager:Landroid/hardware/SensorManager;


# direct methods
.method public constructor <init>(Landroid/content/Context;)V
    .locals 1

    .line 57
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/high16 v0, 0x42340000    # 45.0f

    .line 42
    iput v0, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->darkLightLux:F

    const/high16 v0, 0x42c80000    # 100.0f

    .line 46
    iput v0, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->brightLightLux:F

    .line 58
    const-string v0, "sensor"

    invoke-virtual {p1, v0}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/hardware/SensorManager;

    iput-object p1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->sensorManager:Landroid/hardware/SensorManager;

    const/4 v0, 0x5

    .line 59
    invoke-virtual {p1, v0}, Landroid/hardware/SensorManager;->getDefaultSensor(I)Landroid/hardware/Sensor;

    move-result-object p1

    iput-object p1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->lightSensor:Landroid/hardware/Sensor;

    const/4 p1, 0x1

    .line 60
    iput-boolean p1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->isLightSensorEnabled:Z

    return-void
.end method


# virtual methods
.method public isLightSensorEnabled()Z
    .locals 1

    .line 127
    iget-boolean v0, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->isLightSensorEnabled:Z

    return v0
.end method

.method public onAccuracyChanged(Landroid/hardware/Sensor;I)V
    .locals 0

    return-void
.end method

.method public onSensorChanged(Landroid/hardware/SensorEvent;)V
    .locals 6

    .line 83
    iget-boolean v0, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->isLightSensorEnabled:Z

    if-eqz v0, :cond_2

    .line 84
    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v0

    .line 85
    iget-wide v2, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->lastTime:J

    sub-long v2, v0, v2

    const-wide/16 v4, 0xc8

    cmp-long v2, v2, v4

    if-gez v2, :cond_0

    return-void

    .line 89
    :cond_0
    iput-wide v0, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->lastTime:J

    .line 91
    iget-object v0, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->mOnLightSensorEventListener:Lcom/king/camera/scan/manager/AmbientLightManager$OnLightSensorEventListener;

    if-eqz v0, :cond_2

    .line 92
    iget-object p1, p1, Landroid/hardware/SensorEvent;->values:[F

    const/4 v0, 0x0

    aget p1, p1, v0

    .line 93
    iget-object v1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->mOnLightSensorEventListener:Lcom/king/camera/scan/manager/AmbientLightManager$OnLightSensorEventListener;

    invoke-interface {v1, p1}, Lcom/king/camera/scan/manager/AmbientLightManager$OnLightSensorEventListener;->onSensorChanged(F)V

    .line 94
    iget v1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->darkLightLux:F

    cmpg-float v1, p1, v1

    if-gtz v1, :cond_1

    .line 95
    iget-object v0, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->mOnLightSensorEventListener:Lcom/king/camera/scan/manager/AmbientLightManager$OnLightSensorEventListener;

    const/4 v1, 0x1

    invoke-interface {v0, v1, p1}, Lcom/king/camera/scan/manager/AmbientLightManager$OnLightSensorEventListener;->onSensorChanged(ZF)V

    goto :goto_0

    .line 96
    :cond_1
    iget v1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->brightLightLux:F

    cmpl-float v1, p1, v1

    if-ltz v1, :cond_2

    .line 97
    iget-object v1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->mOnLightSensorEventListener:Lcom/king/camera/scan/manager/AmbientLightManager$OnLightSensorEventListener;

    invoke-interface {v1, v0, p1}, Lcom/king/camera/scan/manager/AmbientLightManager$OnLightSensorEventListener;->onSensorChanged(ZF)V

    :cond_2
    :goto_0
    return-void
.end method

.method public register()V
    .locals 3

    .line 67
    iget-object v0, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->sensorManager:Landroid/hardware/SensorManager;

    if-eqz v0, :cond_0

    iget-object v1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->lightSensor:Landroid/hardware/Sensor;

    if-eqz v1, :cond_0

    const/4 v2, 0x3

    .line 68
    invoke-virtual {v0, p0, v1, v2}, Landroid/hardware/SensorManager;->registerListener(Landroid/hardware/SensorEventListener;Landroid/hardware/Sensor;I)Z

    :cond_0
    return-void
.end method

.method public setBrightLightLux(F)V
    .locals 0

    .line 118
    iput p1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->brightLightLux:F

    return-void
.end method

.method public setDarkLightLux(F)V
    .locals 0

    .line 109
    iput p1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->darkLightLux:F

    return-void
.end method

.method public setLightSensorEnabled(Z)V
    .locals 0

    .line 136
    iput-boolean p1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->isLightSensorEnabled:Z

    return-void
.end method

.method public setOnLightSensorEventListener(Lcom/king/camera/scan/manager/AmbientLightManager$OnLightSensorEventListener;)V
    .locals 0

    .line 145
    iput-object p1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->mOnLightSensorEventListener:Lcom/king/camera/scan/manager/AmbientLightManager$OnLightSensorEventListener;

    return-void
.end method

.method public unregister()V
    .locals 2

    .line 76
    iget-object v0, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->sensorManager:Landroid/hardware/SensorManager;

    if-eqz v0, :cond_0

    iget-object v1, p0, Lcom/king/camera/scan/manager/AmbientLightManager;->lightSensor:Landroid/hardware/Sensor;

    if-eqz v1, :cond_0

    .line 77
    invoke-virtual {v0, p0}, Landroid/hardware/SensorManager;->unregisterListener(Landroid/hardware/SensorEventListener;)V

    :cond_0
    return-void
.end method
