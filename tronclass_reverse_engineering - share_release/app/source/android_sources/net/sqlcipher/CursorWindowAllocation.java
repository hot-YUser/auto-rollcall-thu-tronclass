package net.sqlcipher;
public interface CursorWindowAllocation {
    long getGrowthPaddingSize();

    long getInitialAllocationSize();

    long getMaxAllocationSize();
}

