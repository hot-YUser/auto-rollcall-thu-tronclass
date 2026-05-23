package androidx.camera.video;

import androidx.core.util.Preconditions;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public abstract class VideoRecordEvent {
    private final OutputOptions mOutputOptions;
    private final RecordingStats mRecordingStats;

    VideoRecordEvent(OutputOptions outputOptions, RecordingStats recordingStats) {
        this.mOutputOptions = (OutputOptions) Preconditions.checkNotNull(outputOptions);
        this.mRecordingStats = (RecordingStats) Preconditions.checkNotNull(recordingStats);
    }

    public RecordingStats getRecordingStats() {
        return this.mRecordingStats;
    }

    public OutputOptions getOutputOptions() {
        return this.mOutputOptions;
    }

    static Start start(OutputOptions outputOptions, RecordingStats recordingStats) {
        return new Start(outputOptions, recordingStats);
    }

    public static final class Start extends VideoRecordEvent {
        Start(OutputOptions outputOptions, RecordingStats recordingStats) {
            super(outputOptions, recordingStats);
        }
    }

    static Finalize finalize(OutputOptions outputOptions, RecordingStats recordingStats, OutputResults outputResults) {
        return new Finalize(outputOptions, recordingStats, outputResults, 0, null);
    }

    static Finalize finalizeWithError(OutputOptions outputOptions, RecordingStats recordingStats, OutputResults outputResults, int i, Throwable th) {
        Preconditions.checkArgument(i != 0, "An error type is required.");
        return new Finalize(outputOptions, recordingStats, outputResults, i, th);
    }

    public static final class Finalize extends VideoRecordEvent {
        public static final int ERROR_DURATION_LIMIT_REACHED = 9;
        public static final int ERROR_ENCODING_FAILED = 6;
        public static final int ERROR_FILE_SIZE_LIMIT_REACHED = 2;
        public static final int ERROR_INSUFFICIENT_STORAGE = 3;
        public static final int ERROR_INVALID_OUTPUT_OPTIONS = 5;
        public static final int ERROR_NONE = 0;
        public static final int ERROR_NO_VALID_DATA = 8;
        public static final int ERROR_RECORDER_ERROR = 7;
        public static final int ERROR_RECORDING_GARBAGE_COLLECTED = 10;
        public static final int ERROR_SOURCE_INACTIVE = 4;
        public static final int ERROR_UNKNOWN = 1;
        private final Throwable mCause;
        private final int mError;
        private final OutputResults mOutputResults;

        @Retention(RetentionPolicy.SOURCE)
        public @interface VideoRecordError {
        }

        Finalize(OutputOptions outputOptions, RecordingStats recordingStats, OutputResults outputResults, int i, Throwable th) {
            super(outputOptions, recordingStats);
            this.mOutputResults = outputResults;
            this.mError = i;
            this.mCause = th;
        }

        public OutputResults getOutputResults() {
            return this.mOutputResults;
        }

        public boolean hasError() {
            return this.mError != 0;
        }

        public int getError() {
            return this.mError;
        }

        public Throwable getCause() {
            return this.mCause;
        }

        static String errorToString(int i) {
            switch (i) {
                case 0:
                    return "ERROR_NONE";
                case 1:
                    return "ERROR_UNKNOWN";
                case 2:
                    return "ERROR_FILE_SIZE_LIMIT_REACHED";
                case 3:
                    return "ERROR_INSUFFICIENT_STORAGE";
                case 4:
                    return "ERROR_SOURCE_INACTIVE";
                case 5:
                    return "ERROR_INVALID_OUTPUT_OPTIONS";
                case 6:
                    return "ERROR_ENCODING_FAILED";
                case 7:
                    return "ERROR_RECORDER_ERROR";
                case 8:
                    return "ERROR_NO_VALID_DATA";
                case 9:
                    return "ERROR_DURATION_LIMIT_REACHED";
                case 10:
                    return "ERROR_RECORDING_GARBAGE_COLLECTED";
                default:
                    return "Unknown(" + i + ")";
            }
        }
    }

    static Status status(OutputOptions outputOptions, RecordingStats recordingStats) {
        return new Status(outputOptions, recordingStats);
    }

    public static final class Status extends VideoRecordEvent {
        Status(OutputOptions outputOptions, RecordingStats recordingStats) {
            super(outputOptions, recordingStats);
        }
    }

    static Pause pause(OutputOptions outputOptions, RecordingStats recordingStats) {
        return new Pause(outputOptions, recordingStats);
    }

    public static final class Pause extends VideoRecordEvent {
        Pause(OutputOptions outputOptions, RecordingStats recordingStats) {
            super(outputOptions, recordingStats);
        }
    }

    static Resume resume(OutputOptions outputOptions, RecordingStats recordingStats) {
        return new Resume(outputOptions, recordingStats);
    }

    public static final class Resume extends VideoRecordEvent {
        Resume(OutputOptions outputOptions, RecordingStats recordingStats) {
            super(outputOptions, recordingStats);
        }
    }
}

