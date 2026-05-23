package org.apache.commons.io.comparator;

import java.io.File;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
abstract class AbstractFileComparator implements Comparator<File> {
    AbstractFileComparator() {
    }

    public File[] sort(File... fileArr) {
        if (fileArr != null) {
            Arrays.sort(fileArr, this);
        }
        return fileArr;
    }

    public List<File> sort(List<File> list) {
        if (list != null) {
            Collections.sort(list, this);
        }
        return list;
    }

    public String toString() {
        return getClass().getSimpleName();
    }
}

