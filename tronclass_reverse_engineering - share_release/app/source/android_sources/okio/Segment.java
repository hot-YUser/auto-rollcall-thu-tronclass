package okio;

import javax.annotation.Nullable;
final class Segment {
    static final int SHARE_MINIMUM = 1024;
    static final int SIZE = 8192;
    final byte[] data;
    int limit;
    Segment next;
    boolean owner;
    int pos;
    Segment prev;
    boolean shared;

    Segment() {
        this.data = new byte[8192];
        this.owner = true;
        this.shared = false;
    }

    Segment(byte[] bArr, int i, int i2, boolean z, boolean z2) {
        this.data = bArr;
        this.pos = i;
        this.limit = i2;
        this.shared = z;
        this.owner = z2;
    }

    Segment sharedCopy() {
        this.shared = true;
        return new Segment(this.data, this.pos, this.limit, true, false);
    }

    Segment unsharedCopy() {
        return new Segment((byte[]) this.data.clone(), this.pos, this.limit, false, true);
    }

    @Nullable
    public Segment pop() {
        Segment segment = this.next;
        Segment segment2 = segment != this ? segment : null;
        Segment segment3 = this.prev;
        segment3.next = segment;
        this.next.prev = segment3;
        this.next = null;
        this.prev = null;
        return segment2;
    }

    public Segment push(Segment segment) {
        segment.prev = this;
        segment.next = this.next;
        this.next.prev = segment;
        this.next = segment;
        return segment;
    }

    public Segment split(int i) {
        Segment segmentTake;
        if (i <= 0 || i > this.limit - this.pos) {
            throw new IllegalArgumentException();
        }
        if (i >= 1024) {
            segmentTake = sharedCopy();
        } else {
            segmentTake = SegmentPool.take();
            System.arraycopy(this.data, this.pos, segmentTake.data, 0, i);
        }
        segmentTake.limit = segmentTake.pos + i;
        this.pos += i;
        this.prev.push(segmentTake);
        return segmentTake;
    }

    public void compact() {
        Segment segment = this.prev;
        if (segment == this) {
            throw new IllegalStateException();
        }
        if (segment.owner) {
            int i = this.limit - this.pos;
            if (i > (8192 - segment.limit) + (segment.shared ? 0 : segment.pos)) {
                return;
            }
            writeTo(segment, i);
            pop();
            SegmentPool.recycle(this);
        }
    }

    public void writeTo(Segment segment, int i) {
        if (!segment.owner) {
            throw new IllegalArgumentException();
        }
        int i2 = segment.limit;
        if (i2 + i > 8192) {
            if (segment.shared) {
                throw new IllegalArgumentException();
            }
            int i3 = segment.pos;
            if ((i2 + i) - i3 > 8192) {
                throw new IllegalArgumentException();
            }
            byte[] bArr = segment.data;
            System.arraycopy(bArr, i3, bArr, 0, i2 - i3);
            segment.limit -= segment.pos;
            segment.pos = 0;
        }
        System.arraycopy(this.data, this.pos, segment.data, segment.limit, i);
        segment.limit += i;
        this.pos += i;
    }
}

