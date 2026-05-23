package androidx.work.impl;

import android.content.Context;
import androidx.work.Logger;
import java.io.File;
import java.util.HashMap;
import java.util.Map;
public class WorkDatabasePathHelper {
    private static final String WORK_DATABASE_NAME = "androidx.work.workdb";
    private static final String TAG = Logger.tagWithPrefix("WrkDbPathHelper");
    private static final String[] DATABASE_EXTRA_FILES = {"-journal", "-shm", "-wal"};

    private WorkDatabasePathHelper() {
    }

    public static String getWorkDatabaseName() {
        return WORK_DATABASE_NAME;
    }

    public static void migrateDatabase(Context context) {
        String str;
        if (getDefaultDatabasePath(context).exists()) {
            Logger.get().debug(TAG, "Migrating WorkDatabase to the no-backup directory", new Throwable[0]);
            Map<File, File> mapMigrationPaths = migrationPaths(context);
            for (File file : mapMigrationPaths.keySet()) {
                File file2 = mapMigrationPaths.get(file);
                if (file.exists() && file2 != null) {
                    if (file2.exists()) {
                        Logger.get().warning(TAG, String.format("Over-writing contents of %s", file2), new Throwable[0]);
                    }
                    if (file.renameTo(file2)) {
                        str = String.format("Migrated %s to %s", file, file2);
                    } else {
                        str = String.format("Renaming %s to %s failed", file, file2);
                    }
                    Logger.get().debug(TAG, str, new Throwable[0]);
                }
            }
        }
    }

    public static Map<File, File> migrationPaths(Context context) {
        HashMap map = new HashMap();
        File defaultDatabasePath = getDefaultDatabasePath(context);
        File databasePath = getDatabasePath(context);
        map.put(defaultDatabasePath, databasePath);
        for (String str : DATABASE_EXTRA_FILES) {
            map.put(new File(defaultDatabasePath.getPath() + str), new File(databasePath.getPath() + str));
        }
        return map;
    }

    public static File getDefaultDatabasePath(Context context) {
        return context.getDatabasePath(WORK_DATABASE_NAME);
    }

    public static File getDatabasePath(Context context) {
        return getNoBackupPath(context, WORK_DATABASE_NAME);
    }

    private static File getNoBackupPath(Context context, String filePath) {
        return new File(context.getNoBackupFilesDir(), filePath);
    }
}

