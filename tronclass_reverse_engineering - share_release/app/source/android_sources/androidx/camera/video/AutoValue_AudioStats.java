package androidx.camera.video;
final class AutoValue_AudioStats extends AudioStats {
    private final double audioAmplitudeInternal;
    private final int audioState;
    private final Throwable errorCause;

    AutoValue_AudioStats(int i, double d, Throwable th) {
        this.audioState = i;
        this.audioAmplitudeInternal = d;
        this.errorCause = th;
    }

    @Override // androidx.camera.video.AudioStats
    public int getAudioState() {
        return this.audioState;
    }

    @Override // androidx.camera.video.AudioStats
    double getAudioAmplitudeInternal() {
        return this.audioAmplitudeInternal;
    }

    @Override // androidx.camera.video.AudioStats
    public Throwable getErrorCause() {
        return this.errorCause;
    }

    public String toString() {
        return "AudioStats{audioState=" + this.audioState + ", audioAmplitudeInternal=" + this.audioAmplitudeInternal + ", errorCause=" + this.errorCause + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof AudioStats)) {
            return false;
        }
        AudioStats audioStats = (AudioStats) obj;
        if (this.audioState == audioStats.getAudioState() && Double.doubleToLongBits(this.audioAmplitudeInternal) == Double.doubleToLongBits(audioStats.getAudioAmplitudeInternal())) {
            Throwable th = this.errorCause;
            if (th == null) {
                if (audioStats.getErrorCause() == null) {
                    return true;
                }
            } else if (th.equals(audioStats.getErrorCause())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int iDoubleToLongBits = (((this.audioState ^ 1000003) * 1000003) ^ ((int) ((Double.doubleToLongBits(this.audioAmplitudeInternal) >>> 32) ^ Double.doubleToLongBits(this.audioAmplitudeInternal)))) * 1000003;
        Throwable th = this.errorCause;
        return iDoubleToLongBits ^ (th == null ? 0 : th.hashCode());
    }
}

