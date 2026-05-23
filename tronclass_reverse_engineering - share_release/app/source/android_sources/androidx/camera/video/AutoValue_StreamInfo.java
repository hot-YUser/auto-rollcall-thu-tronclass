package androidx.camera.video;

import androidx.camera.core.SurfaceRequest;
import androidx.camera.video.StreamInfo;
final class AutoValue_StreamInfo extends StreamInfo {
    private final int id;
    private final SurfaceRequest.TransformationInfo inProgressTransformationInfo;
    private final StreamInfo.StreamState streamState;

    AutoValue_StreamInfo(int i, StreamInfo.StreamState streamState, SurfaceRequest.TransformationInfo transformationInfo) {
        this.id = i;
        if (streamState == null) {
            throw new NullPointerException("Null streamState");
        }
        this.streamState = streamState;
        this.inProgressTransformationInfo = transformationInfo;
    }

    @Override // androidx.camera.video.StreamInfo
    public int getId() {
        return this.id;
    }

    @Override // androidx.camera.video.StreamInfo
    public StreamInfo.StreamState getStreamState() {
        return this.streamState;
    }

    @Override // androidx.camera.video.StreamInfo
    public SurfaceRequest.TransformationInfo getInProgressTransformationInfo() {
        return this.inProgressTransformationInfo;
    }

    public String toString() {
        return "StreamInfo{id=" + this.id + ", streamState=" + this.streamState + ", inProgressTransformationInfo=" + this.inProgressTransformationInfo + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof StreamInfo)) {
            return false;
        }
        StreamInfo streamInfo = (StreamInfo) obj;
        if (this.id == streamInfo.getId() && this.streamState.equals(streamInfo.getStreamState())) {
            SurfaceRequest.TransformationInfo transformationInfo = this.inProgressTransformationInfo;
            if (transformationInfo == null) {
                if (streamInfo.getInProgressTransformationInfo() == null) {
                    return true;
                }
            } else if (transformationInfo.equals(streamInfo.getInProgressTransformationInfo())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int iHashCode = (((this.id ^ 1000003) * 1000003) ^ this.streamState.hashCode()) * 1000003;
        SurfaceRequest.TransformationInfo transformationInfo = this.inProgressTransformationInfo;
        return iHashCode ^ (transformationInfo == null ? 0 : transformationInfo.hashCode());
    }
}

