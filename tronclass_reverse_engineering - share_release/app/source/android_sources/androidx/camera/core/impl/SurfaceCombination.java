package androidx.camera.core.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public final class SurfaceCombination {
    private final List<SurfaceConfig> mSurfaceConfigList = new ArrayList();

    private static void generateArrangements(List<int[]> list, int i, int[] iArr, int i2) {
        if (i2 >= iArr.length) {
            list.add((int[]) iArr.clone());
            return;
        }
        for (int i3 = 0; i3 < i; i3++) {
            int i4 = 0;
            while (true) {
                if (i4 < i2) {
                    if (i3 == iArr[i4]) {
                        break;
                    } else {
                        i4++;
                    }
                } else {
                    iArr[i2] = i3;
                    generateArrangements(list, i, iArr, i2 + 1);
                    break;
                }
            }
        }
    }

    public boolean addSurfaceConfig(SurfaceConfig surfaceConfig) {
        return this.mSurfaceConfigList.add(surfaceConfig);
    }

    public boolean removeSurfaceConfig(SurfaceConfig surfaceConfig) {
        return this.mSurfaceConfigList.remove(surfaceConfig);
    }

    public List<SurfaceConfig> getSurfaceConfigList() {
        return this.mSurfaceConfigList;
    }

    public List<SurfaceConfig> getOrderedSupportedSurfaceConfigList(List<SurfaceConfig> list) {
        if (list.isEmpty()) {
            return new ArrayList();
        }
        if (list.size() != this.mSurfaceConfigList.size()) {
            return null;
        }
        List<int[]> elementsArrangements = getElementsArrangements(this.mSurfaceConfigList.size());
        SurfaceConfig[] surfaceConfigArr = new SurfaceConfig[list.size()];
        for (int[] iArr : elementsArrangements) {
            boolean zIsSupported = true;
            for (int i = 0; i < this.mSurfaceConfigList.size(); i++) {
                if (iArr[i] < list.size()) {
                    zIsSupported &= this.mSurfaceConfigList.get(i).isSupported(list.get(iArr[i]));
                    if (!zIsSupported) {
                        break;
                    }
                    surfaceConfigArr[iArr[i]] = this.mSurfaceConfigList.get(i);
                }
            }
            if (zIsSupported) {
                return Arrays.asList(surfaceConfigArr);
            }
        }
        return null;
    }

    private List<int[]> getElementsArrangements(int i) {
        ArrayList arrayList = new ArrayList();
        generateArrangements(arrayList, i, new int[i], 0);
        return arrayList;
    }
}

