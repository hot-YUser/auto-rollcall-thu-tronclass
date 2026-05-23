package androidx.camera.video.internal.encoder;

import java.util.concurrent.Executor;
public interface EncoderFactory {
    Encoder createEncoder(Executor executor, EncoderConfig encoderConfig) throws InvalidConfigException;
}

