package org.apache.commons.io.filefilter;

import java.io.File;
import java.io.Serializable;
public class TrueFileFilter implements IOFileFilter, Serializable {
    public static final IOFileFilter INSTANCE;
    public static final IOFileFilter TRUE;

    @Override // org.apache.commons.io.filefilter.IOFileFilter, java.io.FileFilter
    public boolean accept(File file) {
        return true;
    }

    @Override // org.apache.commons.io.filefilter.IOFileFilter, java.io.FilenameFilter
    public boolean accept(File file, String str) {
        return true;
    }

    static {
        TrueFileFilter trueFileFilter = new TrueFileFilter();
        TRUE = trueFileFilter;
        INSTANCE = trueFileFilter;
    }

    protected TrueFileFilter() {
    }
}

