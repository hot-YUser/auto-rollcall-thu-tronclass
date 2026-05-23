package androidx.camera.video.internal.audio;

import androidx.camera.video.internal.audio.AudioStream;
final class AutoValue_AudioStream_PacketInfo extends AudioStream.PacketInfo {
    private final int sizeInBytes;
    private final long timestampNs;

    AutoValue_AudioStream_PacketInfo(int i, long j) {
        this.sizeInBytes = i;
        this.timestampNs = j;
    }

    @Override // androidx.camera.video.internal.audio.AudioStream.PacketInfo
    public int getSizeInBytes() {
        return this.sizeInBytes;
    }

    @Override // androidx.camera.video.internal.audio.AudioStream.PacketInfo
    public long getTimestampNs() {
        return this.timestampNs;
    }

    public String toString() {
        return "PacketInfo{sizeInBytes=" + this.sizeInBytes + ", timestampNs=" + this.timestampNs + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof AudioStream.PacketInfo)) {
            return false;
        }
        AudioStream.PacketInfo packetInfo = (AudioStream.PacketInfo) obj;
        return this.sizeInBytes == packetInfo.getSizeInBytes() && this.timestampNs == packetInfo.getTimestampNs();
    }

    public int hashCode() {
        int i = (this.sizeInBytes ^ 1000003) * 1000003;
        long j = this.timestampNs;
        return i ^ ((int) (j ^ (j >>> 32)));
    }
}

