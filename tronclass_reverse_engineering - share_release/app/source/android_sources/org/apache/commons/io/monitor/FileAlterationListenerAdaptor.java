package org.apache.commons.io.monitor;

import java.io.File;
public class FileAlterationListenerAdaptor implements FileAlterationListener {
    @Override // org.apache.commons.io.monitor.FileAlterationListener
    public void onDirectoryChange(File file) {
    }

    @Override // org.apache.commons.io.monitor.FileAlterationListener
    public void onDirectoryCreate(File file) {
    }

    @Override // org.apache.commons.io.monitor.FileAlterationListener
    public void onDirectoryDelete(File file) {
    }

    @Override // org.apache.commons.io.monitor.FileAlterationListener
    public void onFileChange(File file) {
    }

    @Override // org.apache.commons.io.monitor.FileAlterationListener
    public void onFileCreate(File file) {
    }

    @Override // org.apache.commons.io.monitor.FileAlterationListener
    public void onFileDelete(File file) {
    }

    @Override // org.apache.commons.io.monitor.FileAlterationListener
    public void onStart(FileAlterationObserver fileAlterationObserver) {
    }

    @Override // org.apache.commons.io.monitor.FileAlterationListener
    public void onStop(FileAlterationObserver fileAlterationObserver) {
    }
}

