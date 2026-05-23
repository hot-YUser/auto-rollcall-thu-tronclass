package com.google.android.gms.common.data;

import java.util.ArrayList;
public abstract class EntityBuffer<T> extends AbstractDataBuffer<T> {
    private boolean zame;
    private ArrayList<Integer> zamf;

    protected EntityBuffer(DataHolder dataHolder) {
        super(dataHolder);
        this.zame = false;
    }

    protected String getChildDataMarkerColumn() {
        return null;
    }

    protected abstract T getEntry(int i, int i2);

    protected abstract String getPrimaryDataMarkerColumn();

    /* high-level source view WARN: Removed duplicated region for block: B:18:0x0066  */
    @Override // com.google.android.gms.common.data.AbstractDataBuffer, com.google.android.gms.common.data.DataBuffer
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public final T get(int i) {
        int iIntValue;
        int iIntValue2;
        zacb();
        int iZah = zah(i);
        int i2 = 0;
        if (i >= 0 && i != this.zamf.size()) {
            if (i == this.zamf.size() - 1) {
                iIntValue = this.mDataHolder.getCount();
                iIntValue2 = this.zamf.get(i).intValue();
            } else {
                iIntValue = this.zamf.get(i + 1).intValue();
                iIntValue2 = this.zamf.get(i).intValue();
            }
            int i3 = iIntValue - iIntValue2;
            if (i3 == 1) {
                int iZah2 = zah(i);
                int windowIndex = this.mDataHolder.getWindowIndex(iZah2);
                String childDataMarkerColumn = getChildDataMarkerColumn();
                if (childDataMarkerColumn == null || this.mDataHolder.getString(childDataMarkerColumn, iZah2, windowIndex) != null) {
                    i2 = i3;
                }
            }
        }
        return getEntry(iZah, i2);
    }

    @Override // com.google.android.gms.common.data.AbstractDataBuffer, com.google.android.gms.common.data.DataBuffer
    public int getCount() {
        zacb();
        return this.zamf.size();
    }

    private final void zacb() {
        synchronized (this) {
            if (!this.zame) {
                int count = this.mDataHolder.getCount();
                ArrayList<Integer> arrayList = new ArrayList<>();
                this.zamf = arrayList;
                if (count > 0) {
                    arrayList.add(0);
                    String primaryDataMarkerColumn = getPrimaryDataMarkerColumn();
                    String string = this.mDataHolder.getString(primaryDataMarkerColumn, 0, this.mDataHolder.getWindowIndex(0));
                    for (int i = 1; i < count; i++) {
                        int windowIndex = this.mDataHolder.getWindowIndex(i);
                        String string2 = this.mDataHolder.getString(primaryDataMarkerColumn, i, windowIndex);
                        if (string2 == null) {
                            throw new NullPointerException(new StringBuilder(String.valueOf(primaryDataMarkerColumn).length() + 78).append("Missing value for markerColumn: ").append(primaryDataMarkerColumn).append(", at row: ").append(i).append(", for window: ").append(windowIndex).toString());
                        }
                        if (!string2.equals(string)) {
                            this.zamf.add(Integer.valueOf(i));
                            string = string2;
                        }
                    }
                }
                this.zame = true;
            }
        }
    }

    private final int zah(int i) {
        if (i < 0 || i >= this.zamf.size()) {
            throw new IllegalArgumentException(new StringBuilder(53).append("Position ").append(i).append(" is out of bounds for this buffer").toString());
        }
        return this.zamf.get(i).intValue();
    }
}

