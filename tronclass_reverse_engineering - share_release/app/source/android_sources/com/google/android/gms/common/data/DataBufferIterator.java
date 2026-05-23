package com.google.android.gms.common.data;

import com.google.android.gms.common.internal.Preconditions;
import java.util.Iterator;
import java.util.NoSuchElementException;
public class DataBufferIterator<T> implements Iterator<T> {
    protected final DataBuffer<T> zalk;
    protected int zall = -1;

    public DataBufferIterator(DataBuffer<T> dataBuffer) {
        this.zalk = (DataBuffer) Preconditions.checkNotNull(dataBuffer);
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        return this.zall < this.zalk.getCount() - 1;
    }

    @Override // java.util.Iterator
    public T next() {
        if (!hasNext()) {
            throw new NoSuchElementException(new StringBuilder(46).append("Cannot advance the iterator beyond ").append(this.zall).toString());
        }
        DataBuffer<T> dataBuffer = this.zalk;
        int i = this.zall + 1;
        this.zall = i;
        return dataBuffer.get(i);
    }

    @Override // java.util.Iterator
    public void remove() {
        throw new UnsupportedOperationException("Cannot remove elements from a DataBufferIterator");
    }
}

