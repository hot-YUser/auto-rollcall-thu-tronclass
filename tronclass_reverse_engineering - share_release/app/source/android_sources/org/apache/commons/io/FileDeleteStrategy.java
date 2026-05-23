package org.apache.commons.io;

import java.io.File;
import java.io.IOException;
public class FileDeleteStrategy {
    private final String name;
    public static final FileDeleteStrategy NORMAL = new FileDeleteStrategy("Normal");
    public static final FileDeleteStrategy FORCE = new ForceFileDeleteStrategy();

    protected FileDeleteStrategy(String str) {
        this.name = str;
    }

    public boolean deleteQuietly(File file) {
        if (file == null || !file.exists()) {
            return true;
        }
        try {
            return doDelete(file);
        } catch (IOException unused) {
            return false;
        }
    }

    public void delete(File file) throws IOException {
        if (file.exists() && !doDelete(file)) {
            throw new IOException("Deletion failed: " + file);
        }
    }

    protected boolean doDelete(File file) throws IOException {
        return file.delete();
    }

    public String toString() {
        return "FileDeleteStrategy[" + this.name + "]";
    }

    static class ForceFileDeleteStrategy extends FileDeleteStrategy {
        ForceFileDeleteStrategy() {
            super("Force");
        }

        @Override // org.apache.commons.io.FileDeleteStrategy
        protected boolean doDelete(File file) throws IOException {
            FileUtils.forceDelete(file);
            return true;
        }
    }
}

