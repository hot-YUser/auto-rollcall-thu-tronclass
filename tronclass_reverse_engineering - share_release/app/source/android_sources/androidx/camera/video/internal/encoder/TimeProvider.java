package androidx.camera.video.internal.encoder;
public interface TimeProvider {
    long realtimeUs();

    long uptimeUs();
}

