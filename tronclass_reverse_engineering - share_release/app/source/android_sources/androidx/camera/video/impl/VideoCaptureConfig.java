package androidx.camera.video.impl;

import androidx.arch.core.util.Function;
import androidx.camera.core.impl.Config;
import androidx.camera.core.impl.ImageOutputConfig;
import androidx.camera.core.impl.OptionsBundle;
import androidx.camera.core.impl.UseCaseConfig;
import androidx.camera.core.internal.ThreadConfig;
import androidx.camera.video.VideoCapture;
import androidx.camera.video.VideoOutput;
import androidx.camera.video.internal.encoder.VideoEncoderConfig;
import androidx.camera.video.internal.encoder.VideoEncoderInfo;
import java.util.Objects;
public final class VideoCaptureConfig<T extends VideoOutput> implements UseCaseConfig<VideoCapture<T>>, ImageOutputConfig, ThreadConfig {
    private final OptionsBundle mConfig;
    public static final Config.Option<VideoOutput> OPTION_VIDEO_OUTPUT = Config.Option.create("camerax.video.VideoCapture.videoOutput", VideoOutput.class);
    public static final Config.Option<Function<VideoEncoderConfig, VideoEncoderInfo>> OPTION_VIDEO_ENCODER_INFO_FINDER = Config.Option.create("camerax.video.VideoCapture.videoEncoderInfoFinder", Function.class);

    @Override // androidx.camera.core.impl.ImageInputConfig
    public int getInputFormat() {
        return 34;
    }

    public VideoCaptureConfig(OptionsBundle optionsBundle) {
        this.mConfig = optionsBundle;
    }

    public T getVideoOutput() {
        return (T) retrieveOption(OPTION_VIDEO_OUTPUT);
    }

    public Function<VideoEncoderConfig, VideoEncoderInfo> getVideoEncoderInfoFinder() {
        return (Function) Objects.requireNonNull((Function) retrieveOption(OPTION_VIDEO_ENCODER_INFO_FINDER));
    }

    @Override // androidx.camera.core.impl.ReadableConfig
    public Config getConfig() {
        return this.mConfig;
    }
}

