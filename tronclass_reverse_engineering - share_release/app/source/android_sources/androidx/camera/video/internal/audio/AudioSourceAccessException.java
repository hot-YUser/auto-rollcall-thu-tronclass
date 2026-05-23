package androidx.camera.video.internal.audio;
public class AudioSourceAccessException extends Exception {
    public AudioSourceAccessException(String str) {
        super(str);
    }

    public AudioSourceAccessException(String str, Throwable th) {
        super(str, th);
    }

    public AudioSourceAccessException(Throwable th) {
        super(th);
    }
}

