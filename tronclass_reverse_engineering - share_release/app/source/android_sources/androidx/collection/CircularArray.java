package androidx.collection;
public final class CircularArray<E> {
    private int mCapacityBitmask;
    private E[] mElements;
    private int mHead;
    private int mTail;

    private void doubleCapacity() {
        E[] eArr = this.mElements;
        int length = eArr.length;
        int i = this.mHead;
        int i2 = length - i;
        int i3 = length << 1;
        if (i3 < 0) {
            throw new RuntimeException("Max array capacity exceeded");
        }
        Object[] objArr = new Object[i3];
        System.arraycopy(eArr, i, objArr, 0, i2);
        System.arraycopy(this.mElements, 0, objArr, i2, this.mHead);
        this.mElements = (E[]) objArr;
        this.mHead = 0;
        this.mTail = length;
        this.mCapacityBitmask = i3 - 1;
    }

    public CircularArray() {
        this(8);
    }

    public CircularArray(int i) {
        if (i < 1) {
            throw new IllegalArgumentException("capacity must be >= 1");
        }
        if (i > 1073741824) {
            throw new IllegalArgumentException("capacity must be <= 2^30");
        }
        i = Integer.bitCount(i) != 1 ? Integer.highestOneBit(i - 1) << 1 : i;
        this.mCapacityBitmask = i - 1;
        this.mElements = (E[]) new Object[i];
    }

    public void addFirst(E e) {
        int i = (this.mHead - 1) & this.mCapacityBitmask;
        this.mHead = i;
        this.mElements[i] = e;
        if (i == this.mTail) {
            doubleCapacity();
        }
    }

    public void addLast(E e) {
        E[] eArr = this.mElements;
        int i = this.mTail;
        eArr[i] = e;
        int i2 = this.mCapacityBitmask & (i + 1);
        this.mTail = i2;
        if (i2 == this.mHead) {
            doubleCapacity();
        }
    }

    public E popFirst() {
        int i = this.mHead;
        if (i == this.mTail) {
            throw new ArrayIndexOutOfBoundsException();
        }
        E[] eArr = this.mElements;
        E e = eArr[i];
        eArr[i] = null;
        this.mHead = (i + 1) & this.mCapacityBitmask;
        return e;
    }

    public E popLast() {
        int i = this.mHead;
        int i2 = this.mTail;
        if (i == i2) {
            throw new ArrayIndexOutOfBoundsException();
        }
        int i3 = this.mCapacityBitmask & (i2 - 1);
        E[] eArr = this.mElements;
        E e = eArr[i3];
        eArr[i3] = null;
        this.mTail = i3;
        return e;
    }

    public void clear() {
        removeFromStart(size());
    }

    public void removeFromStart(int i) {
        if (i <= 0) {
            return;
        }
        if (i > size()) {
            throw new ArrayIndexOutOfBoundsException();
        }
        int length = this.mElements.length;
        int i2 = this.mHead;
        if (i < length - i2) {
            length = i2 + i;
        }
        while (i2 < length) {
            this.mElements[i2] = null;
            i2++;
        }
        int i3 = this.mHead;
        int i4 = length - i3;
        int i5 = i - i4;
        this.mHead = this.mCapacityBitmask & (i3 + i4);
        if (i5 > 0) {
            for (int i6 = 0; i6 < i5; i6++) {
                this.mElements[i6] = null;
            }
            this.mHead = i5;
        }
    }

    public void removeFromEnd(int i) {
        int i2;
        if (i <= 0) {
            return;
        }
        if (i > size()) {
            throw new ArrayIndexOutOfBoundsException();
        }
        int i3 = this.mTail;
        int i4 = i < i3 ? i3 - i : 0;
        int i5 = i4;
        while (true) {
            i2 = this.mTail;
            if (i5 >= i2) {
                break;
            }
            this.mElements[i5] = null;
            i5++;
        }
        int i6 = i2 - i4;
        int i7 = i - i6;
        this.mTail = i2 - i6;
        if (i7 > 0) {
            int length = this.mElements.length;
            this.mTail = length;
            int i8 = length - i7;
            for (int i9 = i8; i9 < this.mTail; i9++) {
                this.mElements[i9] = null;
            }
            this.mTail = i8;
        }
    }

    public E getFirst() {
        int i = this.mHead;
        if (i == this.mTail) {
            throw new ArrayIndexOutOfBoundsException();
        }
        return this.mElements[i];
    }

    public E getLast() {
        int i = this.mHead;
        int i2 = this.mTail;
        if (i == i2) {
            throw new ArrayIndexOutOfBoundsException();
        }
        return this.mElements[(i2 - 1) & this.mCapacityBitmask];
    }

    public E get(int i) {
        if (i < 0 || i >= size()) {
            throw new ArrayIndexOutOfBoundsException();
        }
        return this.mElements[this.mCapacityBitmask & (this.mHead + i)];
    }

    public int size() {
        return (this.mTail - this.mHead) & this.mCapacityBitmask;
    }

    public boolean isEmpty() {
        return this.mHead == this.mTail;
    }
}

