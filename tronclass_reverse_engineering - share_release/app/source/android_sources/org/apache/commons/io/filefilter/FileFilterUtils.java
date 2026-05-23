package org.apache.commons.io.filefilter;

import java.io.File;
import java.io.FileFilter;
import java.io.FilenameFilter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.apache.commons.io.IOCase;
public class FileFilterUtils {
    private static final IOFileFilter cvsFilter = notFileFilter(and(directoryFileFilter(), nameFileFilter("CVS")));
    private static final IOFileFilter svnFilter = notFileFilter(and(directoryFileFilter(), nameFileFilter(".svn")));

    public static File[] filter(IOFileFilter iOFileFilter, File... fileArr) {
        if (iOFileFilter == null) {
            throw new IllegalArgumentException("file filter is null");
        }
        if (fileArr == null) {
            return new File[0];
        }
        ArrayList arrayList = new ArrayList();
        for (File file : fileArr) {
            if (file == null) {
                throw new IllegalArgumentException("file array contains null");
            }
            if (iOFileFilter.accept(file)) {
                arrayList.add(file);
            }
        }
        return (File[]) arrayList.toArray(new File[arrayList.size()]);
    }

    public static File[] filter(IOFileFilter iOFileFilter, Iterable<File> iterable) {
        List<File> listFilterList = filterList(iOFileFilter, iterable);
        return (File[]) listFilterList.toArray(new File[listFilterList.size()]);
    }

    public static List<File> filterList(IOFileFilter iOFileFilter, Iterable<File> iterable) {
        return (List) filter(iOFileFilter, iterable, new ArrayList());
    }

    public static List<File> filterList(IOFileFilter iOFileFilter, File... fileArr) {
        return Arrays.asList(filter(iOFileFilter, fileArr));
    }

    public static Set<File> filterSet(IOFileFilter iOFileFilter, File... fileArr) {
        return new HashSet(Arrays.asList(filter(iOFileFilter, fileArr)));
    }

    public static Set<File> filterSet(IOFileFilter iOFileFilter, Iterable<File> iterable) {
        return (Set) filter(iOFileFilter, iterable, new HashSet());
    }

    private static <T extends Collection<File>> T filter(IOFileFilter iOFileFilter, Iterable<File> iterable, T t) {
        if (iOFileFilter == null) {
            throw new IllegalArgumentException("file filter is null");
        }
        if (iterable != null) {
            for (File file : iterable) {
                if (file == null) {
                    throw new IllegalArgumentException("file collection contains null");
                }
                if (iOFileFilter.accept(file)) {
                    t.add(file);
                }
            }
        }
        return t;
    }

    public static IOFileFilter prefixFileFilter(String str) {
        return new PrefixFileFilter(str);
    }

    public static IOFileFilter prefixFileFilter(String str, IOCase iOCase) {
        return new PrefixFileFilter(str, iOCase);
    }

    public static IOFileFilter suffixFileFilter(String str) {
        return new SuffixFileFilter(str);
    }

    public static IOFileFilter suffixFileFilter(String str, IOCase iOCase) {
        return new SuffixFileFilter(str, iOCase);
    }

    public static IOFileFilter nameFileFilter(String str) {
        return new NameFileFilter(str);
    }

    public static IOFileFilter nameFileFilter(String str, IOCase iOCase) {
        return new NameFileFilter(str, iOCase);
    }

    public static IOFileFilter directoryFileFilter() {
        return DirectoryFileFilter.DIRECTORY;
    }

    public static IOFileFilter fileFileFilter() {
        return FileFileFilter.FILE;
    }

    @Deprecated
    public static IOFileFilter andFileFilter(IOFileFilter iOFileFilter, IOFileFilter iOFileFilter2) {
        return new AndFileFilter(iOFileFilter, iOFileFilter2);
    }

    @Deprecated
    public static IOFileFilter orFileFilter(IOFileFilter iOFileFilter, IOFileFilter iOFileFilter2) {
        return new OrFileFilter(iOFileFilter, iOFileFilter2);
    }

    public static IOFileFilter and(IOFileFilter... iOFileFilterArr) {
        return new AndFileFilter(toList(iOFileFilterArr));
    }

    public static IOFileFilter or(IOFileFilter... iOFileFilterArr) {
        return new OrFileFilter(toList(iOFileFilterArr));
    }

    public static List<IOFileFilter> toList(IOFileFilter... iOFileFilterArr) {
        if (iOFileFilterArr == null) {
            throw new IllegalArgumentException("The filters must not be null");
        }
        ArrayList arrayList = new ArrayList(iOFileFilterArr.length);
        for (int i = 0; i < iOFileFilterArr.length; i++) {
            IOFileFilter iOFileFilter = iOFileFilterArr[i];
            if (iOFileFilter == null) {
                throw new IllegalArgumentException("The filter[" + i + "] is null");
            }
            arrayList.add(iOFileFilter);
        }
        return arrayList;
    }

    public static IOFileFilter notFileFilter(IOFileFilter iOFileFilter) {
        return new NotFileFilter(iOFileFilter);
    }

    public static IOFileFilter trueFileFilter() {
        return TrueFileFilter.TRUE;
    }

    public static IOFileFilter falseFileFilter() {
        return FalseFileFilter.FALSE;
    }

    public static IOFileFilter asFileFilter(FileFilter fileFilter) {
        return new DelegateFileFilter(fileFilter);
    }

    public static IOFileFilter asFileFilter(FilenameFilter filenameFilter) {
        return new DelegateFileFilter(filenameFilter);
    }

    public static IOFileFilter ageFileFilter(long j) {
        return new AgeFileFilter(j);
    }

    public static IOFileFilter ageFileFilter(long j, boolean z) {
        return new AgeFileFilter(j, z);
    }

    public static IOFileFilter ageFileFilter(Date date) {
        return new AgeFileFilter(date);
    }

    public static IOFileFilter ageFileFilter(Date date, boolean z) {
        return new AgeFileFilter(date, z);
    }

    public static IOFileFilter ageFileFilter(File file) {
        return new AgeFileFilter(file);
    }

    public static IOFileFilter ageFileFilter(File file, boolean z) {
        return new AgeFileFilter(file, z);
    }

    public static IOFileFilter sizeFileFilter(long j) {
        return new SizeFileFilter(j);
    }

    public static IOFileFilter sizeFileFilter(long j, boolean z) {
        return new SizeFileFilter(j, z);
    }

    public static IOFileFilter sizeRangeFileFilter(long j, long j2) {
        return new AndFileFilter(new SizeFileFilter(j, true), new SizeFileFilter(j2 + 1, false));
    }

    public static IOFileFilter magicNumberFileFilter(String str) {
        return new MagicNumberFileFilter(str);
    }

    public static IOFileFilter magicNumberFileFilter(String str, long j) {
        return new MagicNumberFileFilter(str, j);
    }

    public static IOFileFilter magicNumberFileFilter(byte[] bArr) {
        return new MagicNumberFileFilter(bArr);
    }

    public static IOFileFilter magicNumberFileFilter(byte[] bArr, long j) {
        return new MagicNumberFileFilter(bArr, j);
    }

    public static IOFileFilter makeCVSAware(IOFileFilter iOFileFilter) {
        return iOFileFilter == null ? cvsFilter : and(iOFileFilter, cvsFilter);
    }

    public static IOFileFilter makeSVNAware(IOFileFilter iOFileFilter) {
        return iOFileFilter == null ? svnFilter : and(iOFileFilter, svnFilter);
    }

    public static IOFileFilter makeDirectoryOnly(IOFileFilter iOFileFilter) {
        if (iOFileFilter == null) {
            return DirectoryFileFilter.DIRECTORY;
        }
        return new AndFileFilter(DirectoryFileFilter.DIRECTORY, iOFileFilter);
    }

    public static IOFileFilter makeFileOnly(IOFileFilter iOFileFilter) {
        if (iOFileFilter == null) {
            return FileFileFilter.FILE;
        }
        return new AndFileFilter(FileFileFilter.FILE, iOFileFilter);
    }
}

