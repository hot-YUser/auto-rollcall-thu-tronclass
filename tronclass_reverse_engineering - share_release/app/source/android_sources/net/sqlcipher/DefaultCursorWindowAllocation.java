package net.sqlcipher;
public class DefaultCursorWindowAllocation implements CursorWindowAllocation {
    private long initialAllocationSize = 1048576;
    private long WindowAllocationUnbounded = 0;

    @Override // net.sqlcipher.CursorWindowAllocation
    public long getInitialAllocationSize() {
        return this.initialAllocationSize;
    }

    @Override // net.sqlcipher.CursorWindowAllocation
    public long getGrowthPaddingSize() {
        return this.initialAllocationSize;
    }

    @Override // net.sqlcipher.CursorWindowAllocation
    public long getMaxAllocationSize() {
        return this.WindowAllocationUnbounded;
    }
}

