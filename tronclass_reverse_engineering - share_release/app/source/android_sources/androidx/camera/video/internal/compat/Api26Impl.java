package androidx.camera.video.internal.compat;

import android.media.MediaMuxer;
import java.io.FileDescriptor;
import java.io.IOException;
public final class Api26Impl {
    private Api26Impl() {
    }

    public static MediaMuxer createMediaMuxer(FileDescriptor fileDescriptor, int i) throws IOException {
        return new MediaMuxer(fileDescriptor, i);
    }
}

