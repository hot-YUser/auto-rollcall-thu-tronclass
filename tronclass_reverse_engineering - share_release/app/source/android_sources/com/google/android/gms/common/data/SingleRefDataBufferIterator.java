package com.google.android.gms.common.data;

import java.util.NoSuchElementException;
public class SingleRefDataBufferIterator<T> extends DataBufferIterator<T> {
    private T zamg;

    public SingleRefDataBufferIterator(DataBuffer<T> dataBuffer) {
        super(dataBuffer);
    }

    @Override // com.google.android.gms.common.data.DataBufferIterator, java.util.Iterator
    public T next() {
        if (!hasNext()) {
            throw new NoSuchElementException(new StringBuilder(46).append("Cannot advance the iterator beyond ").append(this.zall).toString());
        }
        this.zall++;
        if (this.zall == 0) {
            T t = this.zalk.get(0);
            this.zamg = t;
            if (!(t instanceof DataBufferRef)) {
                String strValueOf = String.valueOf(this.zamg.getClass());
                throw new IllegalStateException(new StringBuilder(String.valueOf(strValueOf).length() + 44).append("DataBuffer reference of type ").append(strValueOf).append(" is not movable").toString());
            }
        } else {
            ((DataBufferRef) this.zamg).zag(this.zall);
        }
        return this.zamg;
    }
}

