package androidx.camera.core.internal.utils;

import androidx.camera.core.internal.utils.RingBuffer;
import java.util.ArrayDeque;
public class ArrayRingBuffer<T> implements RingBuffer<T> {
    private static final String TAG = "ZslRingBuffer";
    private final ArrayDeque<T> mBuffer;
    private final Object mLock;
    final RingBuffer.OnRemoveCallback<T> mOnRemoveCallback;
    private final int mRingBufferCapacity;

    public ArrayRingBuffer(int i) {
        this(i, null);
    }

    public ArrayRingBuffer(int i, RingBuffer.OnRemoveCallback<T> onRemoveCallback) {
        this.mLock = new Object();
        this.mRingBufferCapacity = i;
        this.mBuffer = new ArrayDeque<>(i);
        this.mOnRemoveCallback = onRemoveCallback;
    }

    @Override // androidx.camera.core.internal.utils.RingBuffer
    public void enqueue(T t) {
        T tDequeue;
        synchronized (this.mLock) {
            tDequeue = this.mBuffer.size() >= this.mRingBufferCapacity ? dequeue() : null;
            this.mBuffer.addFirst(t);
        }
        RingBuffer.OnRemoveCallback<T> onRemoveCallback = this.mOnRemoveCallback;
        if (onRemoveCallback == null || tDequeue == null) {
            return;
        }
        onRemoveCallback.onRemove(tDequeue);
    }

    @Override // androidx.camera.core.internal.utils.RingBuffer
    public T dequeue() {
        T tRemoveLast;
        synchronized (this.mLock) {
            tRemoveLast = this.mBuffer.removeLast();
        }
        return tRemoveLast;
    }

    @Override // androidx.camera.core.internal.utils.RingBuffer
    public int getMaxCapacity() {
        return this.mRingBufferCapacity;
    }

    @Override // androidx.camera.core.internal.utils.RingBuffer
    public boolean isEmpty() {
        boolean zIsEmpty;
        synchronized (this.mLock) {
            zIsEmpty = this.mBuffer.isEmpty();
        }
        return zIsEmpty;
    }
}

