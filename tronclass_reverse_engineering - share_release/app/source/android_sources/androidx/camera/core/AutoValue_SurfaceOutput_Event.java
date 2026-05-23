package androidx.camera.core;

import androidx.camera.core.SurfaceOutput;
final class AutoValue_SurfaceOutput_Event extends SurfaceOutput.Event {
    private final int eventCode;
    private final SurfaceOutput surfaceOutput;

    AutoValue_SurfaceOutput_Event(int i, SurfaceOutput surfaceOutput) {
        this.eventCode = i;
        if (surfaceOutput == null) {
            throw new NullPointerException("Null surfaceOutput");
        }
        this.surfaceOutput = surfaceOutput;
    }

    @Override // androidx.camera.core.SurfaceOutput.Event
    public int getEventCode() {
        return this.eventCode;
    }

    @Override // androidx.camera.core.SurfaceOutput.Event
    public SurfaceOutput getSurfaceOutput() {
        return this.surfaceOutput;
    }

    public String toString() {
        return "Event{eventCode=" + this.eventCode + ", surfaceOutput=" + this.surfaceOutput + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof SurfaceOutput.Event)) {
            return false;
        }
        SurfaceOutput.Event event = (SurfaceOutput.Event) obj;
        return this.eventCode == event.getEventCode() && this.surfaceOutput.equals(event.getSurfaceOutput());
    }

    public int hashCode() {
        return ((this.eventCode ^ 1000003) * 1000003) ^ this.surfaceOutput.hashCode();
    }
}

