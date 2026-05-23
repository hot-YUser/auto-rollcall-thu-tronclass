package com.king.camera.scan.manager;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
public class AmbientLightManager implements SensorEventListener {
    protected static final float BRIGHT_LUX = 100.0f;
    protected static final float DARK_LUX = 45.0f;
    private static final int INTERVAL_TIME = 200;
    private boolean isLightSensorEnabled;
    private long lastTime;
    private Sensor lightSensor;
    private OnLightSensorEventListener mOnLightSensorEventListener;
    private SensorManager sensorManager;
    private float darkLightLux = DARK_LUX;
    private float brightLightLux = BRIGHT_LUX;

    public interface OnLightSensorEventListener {
        default void onSensorChanged(float f) {
        }

        void onSensorChanged(boolean z, float f);
    }

    @Override // android.hardware.SensorEventListener
    public void onAccuracyChanged(Sensor sensor, int i) {
    }

    public AmbientLightManager(Context context) {
        SensorManager sensorManager = (SensorManager) context.getSystemService("sensor");
        this.sensorManager = sensorManager;
        this.lightSensor = sensorManager.getDefaultSensor(5);
        this.isLightSensorEnabled = true;
    }

    public void register() {
        Sensor sensor;
        SensorManager sensorManager = this.sensorManager;
        if (sensorManager == null || (sensor = this.lightSensor) == null) {
            return;
        }
        sensorManager.registerListener(this, sensor, 3);
    }

    public void unregister() {
        SensorManager sensorManager = this.sensorManager;
        if (sensorManager == null || this.lightSensor == null) {
            return;
        }
        sensorManager.unregisterListener(this);
    }

    @Override // android.hardware.SensorEventListener
    public void onSensorChanged(SensorEvent sensorEvent) {
        if (this.isLightSensorEnabled) {
            long jCurrentTimeMillis = System.currentTimeMillis();
            if (jCurrentTimeMillis - this.lastTime < 200) {
                return;
            }
            this.lastTime = jCurrentTimeMillis;
            if (this.mOnLightSensorEventListener != null) {
                float f = sensorEvent.values[0];
                this.mOnLightSensorEventListener.onSensorChanged(f);
                if (f <= this.darkLightLux) {
                    this.mOnLightSensorEventListener.onSensorChanged(true, f);
                } else if (f >= this.brightLightLux) {
                    this.mOnLightSensorEventListener.onSensorChanged(false, f);
                }
            }
        }
    }

    public void setDarkLightLux(float f) {
        this.darkLightLux = f;
    }

    public void setBrightLightLux(float f) {
        this.brightLightLux = f;
    }

    public boolean isLightSensorEnabled() {
        return this.isLightSensorEnabled;
    }

    public void setLightSensorEnabled(boolean z) {
        this.isLightSensorEnabled = z;
    }

    public void setOnLightSensorEventListener(OnLightSensorEventListener onLightSensorEventListener) {
        this.mOnLightSensorEventListener = onLightSensorEventListener;
    }
}

