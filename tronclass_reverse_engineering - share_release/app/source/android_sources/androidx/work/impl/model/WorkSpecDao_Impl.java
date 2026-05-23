package androidx.work.impl.model;

import android.database.Cursor;
import androidx.collection.ArrayMap;
import androidx.lifecycle.LiveData;
import androidx.room.EntityInsertionAdapter;
import androidx.room.RoomDatabase;
import androidx.room.RoomSQLiteQuery;
import androidx.room.SharedSQLiteStatement;
import androidx.room.util.CursorUtil;
import androidx.room.util.DBUtil;
import androidx.room.util.StringUtil;
import androidx.sqlite.db.SupportSQLiteStatement;
import androidx.work.Constraints;
import androidx.work.Data;
import androidx.work.WorkInfo;
import androidx.work.impl.model.WorkSpec;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Callable;
public final class WorkSpecDao_Impl implements WorkSpecDao {
    private final RoomDatabase __db;
    private final EntityInsertionAdapter<WorkSpec> __insertionAdapterOfWorkSpec;
    private final SharedSQLiteStatement __preparedStmtOfDelete;
    private final SharedSQLiteStatement __preparedStmtOfIncrementWorkSpecRunAttemptCount;
    private final SharedSQLiteStatement __preparedStmtOfMarkWorkSpecScheduled;
    private final SharedSQLiteStatement __preparedStmtOfPruneFinishedWorkWithZeroDependentsIgnoringKeepForAtLeast;
    private final SharedSQLiteStatement __preparedStmtOfResetScheduledState;
    private final SharedSQLiteStatement __preparedStmtOfResetWorkSpecRunAttemptCount;
    private final SharedSQLiteStatement __preparedStmtOfSetOutput;
    private final SharedSQLiteStatement __preparedStmtOfSetPeriodStartTime;

    public WorkSpecDao_Impl(RoomDatabase __db) {
        this.__db = __db;
        this.__insertionAdapterOfWorkSpec = new EntityInsertionAdapter<WorkSpec>(__db) { // from class: androidx.work.impl.model.WorkSpecDao_Impl.1
            @Override // androidx.room.SharedSQLiteStatement
            public String createQuery() {
                return "INSERT OR IGNORE INTO `WorkSpec` (`id`,`state`,`worker_class_name`,`input_merger_class_name`,`input`,`output`,`initial_delay`,`interval_duration`,`flex_duration`,`run_attempt_count`,`backoff_policy`,`backoff_delay_duration`,`period_start_time`,`minimum_retention_duration`,`schedule_requested_at`,`run_in_foreground`,`out_of_quota_policy`,`required_network_type`,`requires_charging`,`requires_device_idle`,`requires_battery_not_low`,`requires_storage_not_low`,`trigger_content_update_delay`,`trigger_max_content_delay`,`content_uri_triggers`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            }

            @Override // androidx.room.EntityInsertionAdapter
            public void bind(SupportSQLiteStatement supportSQLiteStatement, WorkSpec workSpec) throws Throwable {
                if (workSpec.id == null) {
                    supportSQLiteStatement.bindNull(1);
                } else {
                    supportSQLiteStatement.bindString(1, workSpec.id);
                }
                supportSQLiteStatement.bindLong(2, WorkTypeConverters.stateToInt(workSpec.state));
                if (workSpec.workerClassName == null) {
                    supportSQLiteStatement.bindNull(3);
                } else {
                    supportSQLiteStatement.bindString(3, workSpec.workerClassName);
                }
                if (workSpec.inputMergerClassName == null) {
                    supportSQLiteStatement.bindNull(4);
                } else {
                    supportSQLiteStatement.bindString(4, workSpec.inputMergerClassName);
                }
                byte[] byteArrayInternal = Data.toByteArrayInternal(workSpec.input);
                if (byteArrayInternal == null) {
                    supportSQLiteStatement.bindNull(5);
                } else {
                    supportSQLiteStatement.bindBlob(5, byteArrayInternal);
                }
                byte[] byteArrayInternal2 = Data.toByteArrayInternal(workSpec.output);
                if (byteArrayInternal2 == null) {
                    supportSQLiteStatement.bindNull(6);
                } else {
                    supportSQLiteStatement.bindBlob(6, byteArrayInternal2);
                }
                supportSQLiteStatement.bindLong(7, workSpec.initialDelay);
                supportSQLiteStatement.bindLong(8, workSpec.intervalDuration);
                supportSQLiteStatement.bindLong(9, workSpec.flexDuration);
                supportSQLiteStatement.bindLong(10, workSpec.runAttemptCount);
                supportSQLiteStatement.bindLong(11, WorkTypeConverters.backoffPolicyToInt(workSpec.backoffPolicy));
                supportSQLiteStatement.bindLong(12, workSpec.backoffDelayDuration);
                supportSQLiteStatement.bindLong(13, workSpec.periodStartTime);
                supportSQLiteStatement.bindLong(14, workSpec.minimumRetentionDuration);
                supportSQLiteStatement.bindLong(15, workSpec.scheduleRequestedAt);
                supportSQLiteStatement.bindLong(16, workSpec.expedited ? 1L : 0L);
                supportSQLiteStatement.bindLong(17, WorkTypeConverters.outOfQuotaPolicyToInt(workSpec.outOfQuotaPolicy));
                Constraints constraints = workSpec.constraints;
                if (constraints != null) {
                    supportSQLiteStatement.bindLong(18, WorkTypeConverters.networkTypeToInt(constraints.getRequiredNetworkType()));
                    supportSQLiteStatement.bindLong(19, constraints.requiresCharging() ? 1L : 0L);
                    supportSQLiteStatement.bindLong(20, constraints.requiresDeviceIdle() ? 1L : 0L);
                    supportSQLiteStatement.bindLong(21, constraints.requiresBatteryNotLow() ? 1L : 0L);
                    supportSQLiteStatement.bindLong(22, constraints.requiresStorageNotLow() ? 1L : 0L);
                    supportSQLiteStatement.bindLong(23, constraints.getTriggerContentUpdateDelay());
                    supportSQLiteStatement.bindLong(24, constraints.getTriggerMaxContentDelay());
                    byte[] bArrContentUriTriggersToByteArray = WorkTypeConverters.contentUriTriggersToByteArray(constraints.getContentUriTriggers());
                    if (bArrContentUriTriggersToByteArray == null) {
                        supportSQLiteStatement.bindNull(25);
                        return;
                    } else {
                        supportSQLiteStatement.bindBlob(25, bArrContentUriTriggersToByteArray);
                        return;
                    }
                }
                supportSQLiteStatement.bindNull(18);
                supportSQLiteStatement.bindNull(19);
                supportSQLiteStatement.bindNull(20);
                supportSQLiteStatement.bindNull(21);
                supportSQLiteStatement.bindNull(22);
                supportSQLiteStatement.bindNull(23);
                supportSQLiteStatement.bindNull(24);
                supportSQLiteStatement.bindNull(25);
            }
        };
        this.__preparedStmtOfDelete = new SharedSQLiteStatement(__db) { // from class: androidx.work.impl.model.WorkSpecDao_Impl.2
            @Override // androidx.room.SharedSQLiteStatement
            public String createQuery() {
                return "DELETE FROM workspec WHERE id=?";
            }
        };
        this.__preparedStmtOfSetOutput = new SharedSQLiteStatement(__db) { // from class: androidx.work.impl.model.WorkSpecDao_Impl.3
            @Override // androidx.room.SharedSQLiteStatement
            public String createQuery() {
                return "UPDATE workspec SET output=? WHERE id=?";
            }
        };
        this.__preparedStmtOfSetPeriodStartTime = new SharedSQLiteStatement(__db) { // from class: androidx.work.impl.model.WorkSpecDao_Impl.4
            @Override // androidx.room.SharedSQLiteStatement
            public String createQuery() {
                return "UPDATE workspec SET period_start_time=? WHERE id=?";
            }
        };
        this.__preparedStmtOfIncrementWorkSpecRunAttemptCount = new SharedSQLiteStatement(__db) { // from class: androidx.work.impl.model.WorkSpecDao_Impl.5
            @Override // androidx.room.SharedSQLiteStatement
            public String createQuery() {
                return "UPDATE workspec SET run_attempt_count=run_attempt_count+1 WHERE id=?";
            }
        };
        this.__preparedStmtOfResetWorkSpecRunAttemptCount = new SharedSQLiteStatement(__db) { // from class: androidx.work.impl.model.WorkSpecDao_Impl.6
            @Override // androidx.room.SharedSQLiteStatement
            public String createQuery() {
                return "UPDATE workspec SET run_attempt_count=0 WHERE id=?";
            }
        };
        this.__preparedStmtOfMarkWorkSpecScheduled = new SharedSQLiteStatement(__db) { // from class: androidx.work.impl.model.WorkSpecDao_Impl.7
            @Override // androidx.room.SharedSQLiteStatement
            public String createQuery() {
                return "UPDATE workspec SET schedule_requested_at=? WHERE id=?";
            }
        };
        this.__preparedStmtOfResetScheduledState = new SharedSQLiteStatement(__db) { // from class: androidx.work.impl.model.WorkSpecDao_Impl.8
            @Override // androidx.room.SharedSQLiteStatement
            public String createQuery() {
                return "UPDATE workspec SET schedule_requested_at=-1 WHERE state NOT IN (2, 3, 5)";
            }
        };
        this.__preparedStmtOfPruneFinishedWorkWithZeroDependentsIgnoringKeepForAtLeast = new SharedSQLiteStatement(__db) { // from class: androidx.work.impl.model.WorkSpecDao_Impl.9
            @Override // androidx.room.SharedSQLiteStatement
            public String createQuery() {
                return "DELETE FROM workspec WHERE state IN (2, 3, 5) AND (SELECT COUNT(*)=0 FROM dependency WHERE     prerequisite_id=id AND     work_spec_id NOT IN         (SELECT id FROM workspec WHERE state IN (2, 3, 5)))";
            }
        };
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public void insertWorkSpec(final WorkSpec workSpec) {
        this.__db.assertNotSuspendingTransaction();
        this.__db.beginTransaction();
        try {
            this.__insertionAdapterOfWorkSpec.insert(workSpec);
            this.__db.setTransactionSuccessful();
        } finally {
            this.__db.endTransaction();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public void delete(final String id) {
        this.__db.assertNotSuspendingTransaction();
        SupportSQLiteStatement supportSQLiteStatementAcquire = this.__preparedStmtOfDelete.acquire();
        if (id == null) {
            supportSQLiteStatementAcquire.bindNull(1);
        } else {
            supportSQLiteStatementAcquire.bindString(1, id);
        }
        this.__db.beginTransaction();
        try {
            supportSQLiteStatementAcquire.executeUpdateDelete();
            this.__db.setTransactionSuccessful();
        } finally {
            this.__db.endTransaction();
            this.__preparedStmtOfDelete.release(supportSQLiteStatementAcquire);
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public void setOutput(final String id, final Data output) throws Throwable {
        this.__db.assertNotSuspendingTransaction();
        SupportSQLiteStatement supportSQLiteStatementAcquire = this.__preparedStmtOfSetOutput.acquire();
        byte[] byteArrayInternal = Data.toByteArrayInternal(output);
        if (byteArrayInternal == null) {
            supportSQLiteStatementAcquire.bindNull(1);
        } else {
            supportSQLiteStatementAcquire.bindBlob(1, byteArrayInternal);
        }
        if (id == null) {
            supportSQLiteStatementAcquire.bindNull(2);
        } else {
            supportSQLiteStatementAcquire.bindString(2, id);
        }
        this.__db.beginTransaction();
        try {
            supportSQLiteStatementAcquire.executeUpdateDelete();
            this.__db.setTransactionSuccessful();
        } finally {
            this.__db.endTransaction();
            this.__preparedStmtOfSetOutput.release(supportSQLiteStatementAcquire);
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public void setPeriodStartTime(final String id, final long periodStartTime) {
        this.__db.assertNotSuspendingTransaction();
        SupportSQLiteStatement supportSQLiteStatementAcquire = this.__preparedStmtOfSetPeriodStartTime.acquire();
        supportSQLiteStatementAcquire.bindLong(1, periodStartTime);
        if (id == null) {
            supportSQLiteStatementAcquire.bindNull(2);
        } else {
            supportSQLiteStatementAcquire.bindString(2, id);
        }
        this.__db.beginTransaction();
        try {
            supportSQLiteStatementAcquire.executeUpdateDelete();
            this.__db.setTransactionSuccessful();
        } finally {
            this.__db.endTransaction();
            this.__preparedStmtOfSetPeriodStartTime.release(supportSQLiteStatementAcquire);
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public int incrementWorkSpecRunAttemptCount(final String id) {
        this.__db.assertNotSuspendingTransaction();
        SupportSQLiteStatement supportSQLiteStatementAcquire = this.__preparedStmtOfIncrementWorkSpecRunAttemptCount.acquire();
        if (id == null) {
            supportSQLiteStatementAcquire.bindNull(1);
        } else {
            supportSQLiteStatementAcquire.bindString(1, id);
        }
        this.__db.beginTransaction();
        try {
            int iExecuteUpdateDelete = supportSQLiteStatementAcquire.executeUpdateDelete();
            this.__db.setTransactionSuccessful();
            return iExecuteUpdateDelete;
        } finally {
            this.__db.endTransaction();
            this.__preparedStmtOfIncrementWorkSpecRunAttemptCount.release(supportSQLiteStatementAcquire);
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public int resetWorkSpecRunAttemptCount(final String id) {
        this.__db.assertNotSuspendingTransaction();
        SupportSQLiteStatement supportSQLiteStatementAcquire = this.__preparedStmtOfResetWorkSpecRunAttemptCount.acquire();
        if (id == null) {
            supportSQLiteStatementAcquire.bindNull(1);
        } else {
            supportSQLiteStatementAcquire.bindString(1, id);
        }
        this.__db.beginTransaction();
        try {
            int iExecuteUpdateDelete = supportSQLiteStatementAcquire.executeUpdateDelete();
            this.__db.setTransactionSuccessful();
            return iExecuteUpdateDelete;
        } finally {
            this.__db.endTransaction();
            this.__preparedStmtOfResetWorkSpecRunAttemptCount.release(supportSQLiteStatementAcquire);
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public int markWorkSpecScheduled(final String id, final long startTime) {
        this.__db.assertNotSuspendingTransaction();
        SupportSQLiteStatement supportSQLiteStatementAcquire = this.__preparedStmtOfMarkWorkSpecScheduled.acquire();
        supportSQLiteStatementAcquire.bindLong(1, startTime);
        if (id == null) {
            supportSQLiteStatementAcquire.bindNull(2);
        } else {
            supportSQLiteStatementAcquire.bindString(2, id);
        }
        this.__db.beginTransaction();
        try {
            int iExecuteUpdateDelete = supportSQLiteStatementAcquire.executeUpdateDelete();
            this.__db.setTransactionSuccessful();
            return iExecuteUpdateDelete;
        } finally {
            this.__db.endTransaction();
            this.__preparedStmtOfMarkWorkSpecScheduled.release(supportSQLiteStatementAcquire);
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public int resetScheduledState() {
        this.__db.assertNotSuspendingTransaction();
        SupportSQLiteStatement supportSQLiteStatementAcquire = this.__preparedStmtOfResetScheduledState.acquire();
        this.__db.beginTransaction();
        try {
            int iExecuteUpdateDelete = supportSQLiteStatementAcquire.executeUpdateDelete();
            this.__db.setTransactionSuccessful();
            return iExecuteUpdateDelete;
        } finally {
            this.__db.endTransaction();
            this.__preparedStmtOfResetScheduledState.release(supportSQLiteStatementAcquire);
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public void pruneFinishedWorkWithZeroDependentsIgnoringKeepForAtLeast() {
        this.__db.assertNotSuspendingTransaction();
        SupportSQLiteStatement supportSQLiteStatementAcquire = this.__preparedStmtOfPruneFinishedWorkWithZeroDependentsIgnoringKeepForAtLeast.acquire();
        this.__db.beginTransaction();
        try {
            supportSQLiteStatementAcquire.executeUpdateDelete();
            this.__db.setTransactionSuccessful();
        } finally {
            this.__db.endTransaction();
            this.__preparedStmtOfPruneFinishedWorkWithZeroDependentsIgnoringKeepForAtLeast.release(supportSQLiteStatementAcquire);
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public WorkSpec getWorkSpec(final String id) throws Throwable {
        RoomSQLiteQuery roomSQLiteQuery;
        WorkSpec workSpec;
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT `required_network_type`, `requires_charging`, `requires_device_idle`, `requires_battery_not_low`, `requires_storage_not_low`, `trigger_content_update_delay`, `trigger_max_content_delay`, `content_uri_triggers`, `WorkSpec`.`id` AS `id`, `WorkSpec`.`state` AS `state`, `WorkSpec`.`worker_class_name` AS `worker_class_name`, `WorkSpec`.`input_merger_class_name` AS `input_merger_class_name`, `WorkSpec`.`input` AS `input`, `WorkSpec`.`output` AS `output`, `WorkSpec`.`initial_delay` AS `initial_delay`, `WorkSpec`.`interval_duration` AS `interval_duration`, `WorkSpec`.`flex_duration` AS `flex_duration`, `WorkSpec`.`run_attempt_count` AS `run_attempt_count`, `WorkSpec`.`backoff_policy` AS `backoff_policy`, `WorkSpec`.`backoff_delay_duration` AS `backoff_delay_duration`, `WorkSpec`.`period_start_time` AS `period_start_time`, `WorkSpec`.`minimum_retention_duration` AS `minimum_retention_duration`, `WorkSpec`.`schedule_requested_at` AS `schedule_requested_at`, `WorkSpec`.`run_in_foreground` AS `run_in_foreground`, `WorkSpec`.`out_of_quota_policy` AS `out_of_quota_policy` FROM workspec WHERE id=?", 1);
        if (id == null) {
            roomSQLiteQueryAcquire.bindNull(1);
        } else {
            roomSQLiteQueryAcquire.bindString(1, id);
        }
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, "required_network_type");
            int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_charging");
            int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_device_idle");
            int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_battery_not_low");
            int columnIndexOrThrow5 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_storage_not_low");
            int columnIndexOrThrow6 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_content_update_delay");
            int columnIndexOrThrow7 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_max_content_delay");
            int columnIndexOrThrow8 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "content_uri_triggers");
            int columnIndexOrThrow9 = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
            int columnIndexOrThrow10 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
            int columnIndexOrThrow11 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "worker_class_name");
            int columnIndexOrThrow12 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input_merger_class_name");
            int columnIndexOrThrow13 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input");
            int columnIndexOrThrow14 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
            roomSQLiteQuery = roomSQLiteQueryAcquire;
            try {
                int columnIndexOrThrow15 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "initial_delay");
                int columnIndexOrThrow16 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "interval_duration");
                int columnIndexOrThrow17 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "flex_duration");
                int columnIndexOrThrow18 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                int columnIndexOrThrow19 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_policy");
                int columnIndexOrThrow20 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_delay_duration");
                int columnIndexOrThrow21 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "period_start_time");
                int columnIndexOrThrow22 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "minimum_retention_duration");
                int columnIndexOrThrow23 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "schedule_requested_at");
                int columnIndexOrThrow24 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_in_foreground");
                int columnIndexOrThrow25 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "out_of_quota_policy");
                if (cursorQuery.moveToFirst()) {
                    String string = cursorQuery.getString(columnIndexOrThrow9);
                    String string2 = cursorQuery.getString(columnIndexOrThrow11);
                    Constraints constraints = new Constraints();
                    constraints.setRequiredNetworkType(WorkTypeConverters.intToNetworkType(cursorQuery.getInt(columnIndexOrThrow)));
                    constraints.setRequiresCharging(cursorQuery.getInt(columnIndexOrThrow2) != 0);
                    constraints.setRequiresDeviceIdle(cursorQuery.getInt(columnIndexOrThrow3) != 0);
                    constraints.setRequiresBatteryNotLow(cursorQuery.getInt(columnIndexOrThrow4) != 0);
                    constraints.setRequiresStorageNotLow(cursorQuery.getInt(columnIndexOrThrow5) != 0);
                    constraints.setTriggerContentUpdateDelay(cursorQuery.getLong(columnIndexOrThrow6));
                    constraints.setTriggerMaxContentDelay(cursorQuery.getLong(columnIndexOrThrow7));
                    constraints.setContentUriTriggers(WorkTypeConverters.byteArrayToContentUriTriggers(cursorQuery.getBlob(columnIndexOrThrow8)));
                    WorkSpec workSpec2 = new WorkSpec(string, string2);
                    workSpec2.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow10));
                    workSpec2.inputMergerClassName = cursorQuery.getString(columnIndexOrThrow12);
                    workSpec2.input = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow13));
                    workSpec2.output = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow14));
                    workSpec2.initialDelay = cursorQuery.getLong(columnIndexOrThrow15);
                    workSpec2.intervalDuration = cursorQuery.getLong(columnIndexOrThrow16);
                    workSpec2.flexDuration = cursorQuery.getLong(columnIndexOrThrow17);
                    workSpec2.runAttemptCount = cursorQuery.getInt(columnIndexOrThrow18);
                    workSpec2.backoffPolicy = WorkTypeConverters.intToBackoffPolicy(cursorQuery.getInt(columnIndexOrThrow19));
                    workSpec2.backoffDelayDuration = cursorQuery.getLong(columnIndexOrThrow20);
                    workSpec2.periodStartTime = cursorQuery.getLong(columnIndexOrThrow21);
                    workSpec2.minimumRetentionDuration = cursorQuery.getLong(columnIndexOrThrow22);
                    workSpec2.scheduleRequestedAt = cursorQuery.getLong(columnIndexOrThrow23);
                    workSpec2.expedited = cursorQuery.getInt(columnIndexOrThrow24) != 0;
                    workSpec2.outOfQuotaPolicy = WorkTypeConverters.intToOutOfQuotaPolicy(cursorQuery.getInt(columnIndexOrThrow25));
                    workSpec2.constraints = constraints;
                    workSpec = workSpec2;
                } else {
                    workSpec = null;
                }
                cursorQuery.close();
                roomSQLiteQuery.release();
                return workSpec;
            } catch (Throwable th) {
                th = th;
                cursorQuery.close();
                roomSQLiteQuery.release();
                throw th;
            }
        } catch (Throwable th2) {
            th = th2;
            roomSQLiteQuery = roomSQLiteQueryAcquire;
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public WorkSpec[] getWorkSpecs(final List<String> ids) throws Throwable {
        RoomSQLiteQuery roomSQLiteQuery;
        StringBuilder sbNewStringBuilder = StringUtil.newStringBuilder();
        sbNewStringBuilder.append("SELECT ");
        sbNewStringBuilder.append("*");
        sbNewStringBuilder.append(" FROM workspec WHERE id IN (");
        int size = ids.size();
        StringUtil.appendPlaceholders(sbNewStringBuilder, size);
        sbNewStringBuilder.append(")");
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire(sbNewStringBuilder.toString(), size);
        int i = 1;
        for (String str : ids) {
            if (str == null) {
                roomSQLiteQueryAcquire.bindNull(i);
            } else {
                roomSQLiteQueryAcquire.bindString(i, str);
            }
            i++;
        }
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, "required_network_type");
            int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_charging");
            int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_device_idle");
            int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_battery_not_low");
            int columnIndexOrThrow5 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_storage_not_low");
            int columnIndexOrThrow6 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_content_update_delay");
            int columnIndexOrThrow7 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_max_content_delay");
            int columnIndexOrThrow8 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "content_uri_triggers");
            int columnIndexOrThrow9 = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
            int columnIndexOrThrow10 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
            int columnIndexOrThrow11 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "worker_class_name");
            int columnIndexOrThrow12 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input_merger_class_name");
            int columnIndexOrThrow13 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input");
            int columnIndexOrThrow14 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
            roomSQLiteQuery = roomSQLiteQueryAcquire;
            try {
                int columnIndexOrThrow15 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "initial_delay");
                int columnIndexOrThrow16 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "interval_duration");
                int columnIndexOrThrow17 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "flex_duration");
                int columnIndexOrThrow18 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                int columnIndexOrThrow19 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_policy");
                int columnIndexOrThrow20 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_delay_duration");
                int columnIndexOrThrow21 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "period_start_time");
                int columnIndexOrThrow22 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "minimum_retention_duration");
                int columnIndexOrThrow23 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "schedule_requested_at");
                int columnIndexOrThrow24 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_in_foreground");
                int columnIndexOrThrow25 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "out_of_quota_policy");
                WorkSpec[] workSpecArr = new WorkSpec[cursorQuery.getCount()];
                int i2 = 0;
                while (cursorQuery.moveToNext()) {
                    WorkSpec[] workSpecArr2 = workSpecArr;
                    String string = cursorQuery.getString(columnIndexOrThrow9);
                    int i3 = columnIndexOrThrow9;
                    String string2 = cursorQuery.getString(columnIndexOrThrow11);
                    int i4 = columnIndexOrThrow11;
                    Constraints constraints = new Constraints();
                    int i5 = columnIndexOrThrow;
                    constraints.setRequiredNetworkType(WorkTypeConverters.intToNetworkType(cursorQuery.getInt(columnIndexOrThrow)));
                    constraints.setRequiresCharging(cursorQuery.getInt(columnIndexOrThrow2) != 0);
                    constraints.setRequiresDeviceIdle(cursorQuery.getInt(columnIndexOrThrow3) != 0);
                    constraints.setRequiresBatteryNotLow(cursorQuery.getInt(columnIndexOrThrow4) != 0);
                    constraints.setRequiresStorageNotLow(cursorQuery.getInt(columnIndexOrThrow5) != 0);
                    int i6 = columnIndexOrThrow2;
                    int i7 = columnIndexOrThrow3;
                    constraints.setTriggerContentUpdateDelay(cursorQuery.getLong(columnIndexOrThrow6));
                    constraints.setTriggerMaxContentDelay(cursorQuery.getLong(columnIndexOrThrow7));
                    constraints.setContentUriTriggers(WorkTypeConverters.byteArrayToContentUriTriggers(cursorQuery.getBlob(columnIndexOrThrow8)));
                    WorkSpec workSpec = new WorkSpec(string, string2);
                    workSpec.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow10));
                    workSpec.inputMergerClassName = cursorQuery.getString(columnIndexOrThrow12);
                    workSpec.input = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow13));
                    workSpec.output = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow14));
                    int i8 = columnIndexOrThrow14;
                    int i9 = columnIndexOrThrow15;
                    workSpec.initialDelay = cursorQuery.getLong(i9);
                    columnIndexOrThrow15 = i9;
                    int i10 = columnIndexOrThrow16;
                    workSpec.intervalDuration = cursorQuery.getLong(i10);
                    int i11 = columnIndexOrThrow12;
                    int i12 = columnIndexOrThrow17;
                    workSpec.flexDuration = cursorQuery.getLong(i12);
                    int i13 = columnIndexOrThrow18;
                    workSpec.runAttemptCount = cursorQuery.getInt(i13);
                    int i14 = columnIndexOrThrow19;
                    workSpec.backoffPolicy = WorkTypeConverters.intToBackoffPolicy(cursorQuery.getInt(i14));
                    columnIndexOrThrow17 = i12;
                    int i15 = columnIndexOrThrow20;
                    workSpec.backoffDelayDuration = cursorQuery.getLong(i15);
                    int i16 = columnIndexOrThrow21;
                    workSpec.periodStartTime = cursorQuery.getLong(i16);
                    columnIndexOrThrow21 = i16;
                    int i17 = columnIndexOrThrow22;
                    workSpec.minimumRetentionDuration = cursorQuery.getLong(i17);
                    columnIndexOrThrow22 = i17;
                    int i18 = columnIndexOrThrow23;
                    workSpec.scheduleRequestedAt = cursorQuery.getLong(i18);
                    int i19 = columnIndexOrThrow24;
                    workSpec.expedited = cursorQuery.getInt(i19) != 0;
                    int i20 = columnIndexOrThrow25;
                    workSpec.outOfQuotaPolicy = WorkTypeConverters.intToOutOfQuotaPolicy(cursorQuery.getInt(i20));
                    workSpec.constraints = constraints;
                    workSpecArr2[i2] = workSpec;
                    i2++;
                    columnIndexOrThrow25 = i20;
                    columnIndexOrThrow2 = i6;
                    columnIndexOrThrow23 = i18;
                    workSpecArr = workSpecArr2;
                    columnIndexOrThrow9 = i3;
                    columnIndexOrThrow11 = i4;
                    columnIndexOrThrow = i5;
                    columnIndexOrThrow24 = i19;
                    columnIndexOrThrow14 = i8;
                    columnIndexOrThrow3 = i7;
                    columnIndexOrThrow20 = i15;
                    columnIndexOrThrow12 = i11;
                    columnIndexOrThrow16 = i10;
                    columnIndexOrThrow18 = i13;
                    columnIndexOrThrow19 = i14;
                }
                WorkSpec[] workSpecArr3 = workSpecArr;
                cursorQuery.close();
                roomSQLiteQuery.release();
                return workSpecArr3;
            } catch (Throwable th) {
                th = th;
                cursorQuery.close();
                roomSQLiteQuery.release();
                throw th;
            }
        } catch (Throwable th2) {
            th = th2;
            roomSQLiteQuery = roomSQLiteQueryAcquire;
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<WorkSpec.IdAndState> getWorkSpecIdAndStatesForName(final String name) {
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT id, state FROM workspec WHERE id IN (SELECT work_spec_id FROM workname WHERE name=?)", 1);
        if (name == null) {
            roomSQLiteQueryAcquire.bindNull(1);
        } else {
            roomSQLiteQueryAcquire.bindString(1, name);
        }
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
            int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
            ArrayList arrayList = new ArrayList(cursorQuery.getCount());
            while (cursorQuery.moveToNext()) {
                WorkSpec.IdAndState idAndState = new WorkSpec.IdAndState();
                idAndState.id = cursorQuery.getString(columnIndexOrThrow);
                idAndState.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow2));
                arrayList.add(idAndState);
            }
            return arrayList;
        } finally {
            cursorQuery.close();
            roomSQLiteQueryAcquire.release();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<String> getAllWorkSpecIds() {
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT id FROM workspec", 0);
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            ArrayList arrayList = new ArrayList(cursorQuery.getCount());
            while (cursorQuery.moveToNext()) {
                arrayList.add(cursorQuery.getString(0));
            }
            return arrayList;
        } finally {
            cursorQuery.close();
            roomSQLiteQueryAcquire.release();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public LiveData<List<String>> getAllWorkSpecIdsLiveData() {
        final RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT id FROM workspec", 0);
        return this.__db.getInvalidationTracker().createLiveData(new String[]{"workspec"}, true, new Callable<List<String>>() { // from class: androidx.work.impl.model.WorkSpecDao_Impl.10
            @Override // java.util.concurrent.Callable
            public List<String> call() throws Exception {
                WorkSpecDao_Impl.this.__db.beginTransaction();
                try {
                    Cursor cursorQuery = DBUtil.query(WorkSpecDao_Impl.this.__db, roomSQLiteQueryAcquire, false, null);
                    try {
                        ArrayList arrayList = new ArrayList(cursorQuery.getCount());
                        while (cursorQuery.moveToNext()) {
                            arrayList.add(cursorQuery.getString(0));
                        }
                        WorkSpecDao_Impl.this.__db.setTransactionSuccessful();
                        return arrayList;
                    } finally {
                        cursorQuery.close();
                    }
                } finally {
                    WorkSpecDao_Impl.this.__db.endTransaction();
                }
            }

            protected void finalize() {
                roomSQLiteQueryAcquire.release();
            }
        });
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public WorkInfo.State getState(final String id) {
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT state FROM workspec WHERE id=?", 1);
        if (id == null) {
            roomSQLiteQueryAcquire.bindNull(1);
        } else {
            roomSQLiteQueryAcquire.bindString(1, id);
        }
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            return cursorQuery.moveToFirst() ? WorkTypeConverters.intToState(cursorQuery.getInt(0)) : null;
        } finally {
            cursorQuery.close();
            roomSQLiteQueryAcquire.release();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public WorkSpec.WorkInfoPojo getWorkStatusPojoForId(String str) {
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT id, state, output, run_attempt_count FROM workspec WHERE id=?", 1);
        if (str == null) {
            roomSQLiteQueryAcquire.bindNull(1);
        } else {
            roomSQLiteQueryAcquire.bindString(1, str);
        }
        this.__db.assertNotSuspendingTransaction();
        this.__db.beginTransaction();
        try {
            WorkSpec.WorkInfoPojo workInfoPojo = null;
            Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, true, null);
            try {
                int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
                int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
                int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
                int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                ArrayMap<String, ArrayList<String>> arrayMap = new ArrayMap<>();
                ArrayMap<String, ArrayList<Data>> arrayMap2 = new ArrayMap<>();
                while (cursorQuery.moveToNext()) {
                    if (!cursorQuery.isNull(columnIndexOrThrow)) {
                        String string = cursorQuery.getString(columnIndexOrThrow);
                        if (arrayMap.get(string) == null) {
                            arrayMap.put(string, new ArrayList<>());
                        }
                    }
                    if (!cursorQuery.isNull(columnIndexOrThrow)) {
                        String string2 = cursorQuery.getString(columnIndexOrThrow);
                        if (arrayMap2.get(string2) == null) {
                            arrayMap2.put(string2, new ArrayList<>());
                        }
                    }
                }
                cursorQuery.moveToPosition(-1);
                __fetchRelationshipWorkTagAsjavaLangString(arrayMap);
                __fetchRelationshipWorkProgressAsandroidxWorkData(arrayMap2);
                if (cursorQuery.moveToFirst()) {
                    ArrayList<String> arrayList = !cursorQuery.isNull(columnIndexOrThrow) ? arrayMap.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                    if (arrayList == null) {
                        arrayList = new ArrayList<>();
                    }
                    ArrayList<Data> arrayList2 = cursorQuery.isNull(columnIndexOrThrow) ? null : arrayMap2.get(cursorQuery.getString(columnIndexOrThrow));
                    if (arrayList2 == null) {
                        arrayList2 = new ArrayList<>();
                    }
                    WorkSpec.WorkInfoPojo workInfoPojo2 = new WorkSpec.WorkInfoPojo();
                    workInfoPojo2.id = cursorQuery.getString(columnIndexOrThrow);
                    workInfoPojo2.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow2));
                    workInfoPojo2.output = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow3));
                    workInfoPojo2.runAttemptCount = cursorQuery.getInt(columnIndexOrThrow4);
                    workInfoPojo2.tags = arrayList;
                    workInfoPojo2.progress = arrayList2;
                    workInfoPojo = workInfoPojo2;
                }
                this.__db.setTransactionSuccessful();
                return workInfoPojo;
            } finally {
                cursorQuery.close();
                roomSQLiteQueryAcquire.release();
            }
        } finally {
            this.__db.endTransaction();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<WorkSpec.WorkInfoPojo> getWorkStatusPojoForIds(final List<String> ids) {
        StringBuilder sbNewStringBuilder = StringUtil.newStringBuilder();
        sbNewStringBuilder.append("SELECT id, state, output, run_attempt_count FROM workspec WHERE id IN (");
        int size = ids.size();
        StringUtil.appendPlaceholders(sbNewStringBuilder, size);
        sbNewStringBuilder.append(")");
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire(sbNewStringBuilder.toString(), size);
        int i = 1;
        for (String str : ids) {
            if (str == null) {
                roomSQLiteQueryAcquire.bindNull(i);
            } else {
                roomSQLiteQueryAcquire.bindString(i, str);
            }
            i++;
        }
        this.__db.assertNotSuspendingTransaction();
        this.__db.beginTransaction();
        try {
            Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, true, null);
            try {
                int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
                int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
                int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
                int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                ArrayMap<String, ArrayList<String>> arrayMap = new ArrayMap<>();
                ArrayMap<String, ArrayList<Data>> arrayMap2 = new ArrayMap<>();
                while (cursorQuery.moveToNext()) {
                    if (!cursorQuery.isNull(columnIndexOrThrow)) {
                        String string = cursorQuery.getString(columnIndexOrThrow);
                        if (arrayMap.get(string) == null) {
                            arrayMap.put(string, new ArrayList<>());
                        }
                    }
                    if (!cursorQuery.isNull(columnIndexOrThrow)) {
                        String string2 = cursorQuery.getString(columnIndexOrThrow);
                        if (arrayMap2.get(string2) == null) {
                            arrayMap2.put(string2, new ArrayList<>());
                        }
                    }
                }
                cursorQuery.moveToPosition(-1);
                __fetchRelationshipWorkTagAsjavaLangString(arrayMap);
                __fetchRelationshipWorkProgressAsandroidxWorkData(arrayMap2);
                ArrayList arrayList = new ArrayList(cursorQuery.getCount());
                while (cursorQuery.moveToNext()) {
                    ArrayList<String> arrayList2 = !cursorQuery.isNull(columnIndexOrThrow) ? arrayMap.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                    if (arrayList2 == null) {
                        arrayList2 = new ArrayList<>();
                    }
                    ArrayList<Data> arrayList3 = !cursorQuery.isNull(columnIndexOrThrow) ? arrayMap2.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                    if (arrayList3 == null) {
                        arrayList3 = new ArrayList<>();
                    }
                    WorkSpec.WorkInfoPojo workInfoPojo = new WorkSpec.WorkInfoPojo();
                    workInfoPojo.id = cursorQuery.getString(columnIndexOrThrow);
                    workInfoPojo.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow2));
                    workInfoPojo.output = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow3));
                    workInfoPojo.runAttemptCount = cursorQuery.getInt(columnIndexOrThrow4);
                    workInfoPojo.tags = arrayList2;
                    workInfoPojo.progress = arrayList3;
                    arrayList.add(workInfoPojo);
                }
                this.__db.setTransactionSuccessful();
                return arrayList;
            } finally {
                cursorQuery.close();
                roomSQLiteQueryAcquire.release();
            }
        } finally {
            this.__db.endTransaction();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public LiveData<List<WorkSpec.WorkInfoPojo>> getWorkStatusPojoLiveDataForIds(final List<String> ids) {
        StringBuilder sbNewStringBuilder = StringUtil.newStringBuilder();
        sbNewStringBuilder.append("SELECT id, state, output, run_attempt_count FROM workspec WHERE id IN (");
        int size = ids.size();
        StringUtil.appendPlaceholders(sbNewStringBuilder, size);
        sbNewStringBuilder.append(")");
        final RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire(sbNewStringBuilder.toString(), size);
        int i = 1;
        for (String str : ids) {
            if (str == null) {
                roomSQLiteQueryAcquire.bindNull(i);
            } else {
                roomSQLiteQueryAcquire.bindString(i, str);
            }
            i++;
        }
        return this.__db.getInvalidationTracker().createLiveData(new String[]{"WorkTag", "WorkProgress", "workspec"}, true, new Callable<List<WorkSpec.WorkInfoPojo>>() { // from class: androidx.work.impl.model.WorkSpecDao_Impl.11
            /* high-level source view WARN: Multi-variable type inference failed */
            @Override // java.util.concurrent.Callable
            public List<WorkSpec.WorkInfoPojo> call() throws Exception {
                WorkSpecDao_Impl.this.__db.beginTransaction();
                try {
                    Cursor cursorQuery = DBUtil.query(WorkSpecDao_Impl.this.__db, roomSQLiteQueryAcquire, true, null);
                    try {
                        int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
                        int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
                        int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
                        int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                        ArrayMap arrayMap = new ArrayMap();
                        ArrayMap arrayMap2 = new ArrayMap();
                        while (cursorQuery.moveToNext()) {
                            if (!cursorQuery.isNull(columnIndexOrThrow)) {
                                String string = cursorQuery.getString(columnIndexOrThrow);
                                if (((ArrayList) arrayMap.get(string)) == null) {
                                    arrayMap.put(string, new ArrayList());
                                }
                            }
                            if (!cursorQuery.isNull(columnIndexOrThrow)) {
                                String string2 = cursorQuery.getString(columnIndexOrThrow);
                                if (((ArrayList) arrayMap2.get(string2)) == null) {
                                    arrayMap2.put(string2, new ArrayList());
                                }
                            }
                        }
                        cursorQuery.moveToPosition(-1);
                        WorkSpecDao_Impl.this.__fetchRelationshipWorkTagAsjavaLangString(arrayMap);
                        WorkSpecDao_Impl.this.__fetchRelationshipWorkProgressAsandroidxWorkData(arrayMap2);
                        ArrayList arrayList = new ArrayList(cursorQuery.getCount());
                        while (cursorQuery.moveToNext()) {
                            ArrayList arrayList2 = !cursorQuery.isNull(columnIndexOrThrow) ? (ArrayList) arrayMap.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                            if (arrayList2 == null) {
                                arrayList2 = new ArrayList();
                            }
                            ArrayList arrayList3 = !cursorQuery.isNull(columnIndexOrThrow) ? (ArrayList) arrayMap2.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                            if (arrayList3 == null) {
                                arrayList3 = new ArrayList();
                            }
                            WorkSpec.WorkInfoPojo workInfoPojo = new WorkSpec.WorkInfoPojo();
                            workInfoPojo.id = cursorQuery.getString(columnIndexOrThrow);
                            workInfoPojo.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow2));
                            workInfoPojo.output = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow3));
                            workInfoPojo.runAttemptCount = cursorQuery.getInt(columnIndexOrThrow4);
                            workInfoPojo.tags = arrayList2;
                            workInfoPojo.progress = arrayList3;
                            arrayList.add(workInfoPojo);
                        }
                        WorkSpecDao_Impl.this.__db.setTransactionSuccessful();
                        return arrayList;
                    } finally {
                        cursorQuery.close();
                    }
                } finally {
                    WorkSpecDao_Impl.this.__db.endTransaction();
                }
            }

            protected void finalize() {
                roomSQLiteQueryAcquire.release();
            }
        });
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<WorkSpec.WorkInfoPojo> getWorkStatusPojoForTag(final String tag) {
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT id, state, output, run_attempt_count FROM workspec WHERE id IN (SELECT work_spec_id FROM worktag WHERE tag=?)", 1);
        if (tag == null) {
            roomSQLiteQueryAcquire.bindNull(1);
        } else {
            roomSQLiteQueryAcquire.bindString(1, tag);
        }
        this.__db.assertNotSuspendingTransaction();
        this.__db.beginTransaction();
        try {
            Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, true, null);
            try {
                int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
                int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
                int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
                int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                ArrayMap<String, ArrayList<String>> arrayMap = new ArrayMap<>();
                ArrayMap<String, ArrayList<Data>> arrayMap2 = new ArrayMap<>();
                while (cursorQuery.moveToNext()) {
                    if (!cursorQuery.isNull(columnIndexOrThrow)) {
                        String string = cursorQuery.getString(columnIndexOrThrow);
                        if (arrayMap.get(string) == null) {
                            arrayMap.put(string, new ArrayList<>());
                        }
                    }
                    if (!cursorQuery.isNull(columnIndexOrThrow)) {
                        String string2 = cursorQuery.getString(columnIndexOrThrow);
                        if (arrayMap2.get(string2) == null) {
                            arrayMap2.put(string2, new ArrayList<>());
                        }
                    }
                }
                cursorQuery.moveToPosition(-1);
                __fetchRelationshipWorkTagAsjavaLangString(arrayMap);
                __fetchRelationshipWorkProgressAsandroidxWorkData(arrayMap2);
                ArrayList arrayList = new ArrayList(cursorQuery.getCount());
                while (cursorQuery.moveToNext()) {
                    ArrayList<String> arrayList2 = !cursorQuery.isNull(columnIndexOrThrow) ? arrayMap.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                    if (arrayList2 == null) {
                        arrayList2 = new ArrayList<>();
                    }
                    ArrayList<Data> arrayList3 = !cursorQuery.isNull(columnIndexOrThrow) ? arrayMap2.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                    if (arrayList3 == null) {
                        arrayList3 = new ArrayList<>();
                    }
                    WorkSpec.WorkInfoPojo workInfoPojo = new WorkSpec.WorkInfoPojo();
                    workInfoPojo.id = cursorQuery.getString(columnIndexOrThrow);
                    workInfoPojo.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow2));
                    workInfoPojo.output = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow3));
                    workInfoPojo.runAttemptCount = cursorQuery.getInt(columnIndexOrThrow4);
                    workInfoPojo.tags = arrayList2;
                    workInfoPojo.progress = arrayList3;
                    arrayList.add(workInfoPojo);
                }
                this.__db.setTransactionSuccessful();
                return arrayList;
            } finally {
                cursorQuery.close();
                roomSQLiteQueryAcquire.release();
            }
        } finally {
            this.__db.endTransaction();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public LiveData<List<WorkSpec.WorkInfoPojo>> getWorkStatusPojoLiveDataForTag(final String tag) {
        final RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT id, state, output, run_attempt_count FROM workspec WHERE id IN (SELECT work_spec_id FROM worktag WHERE tag=?)", 1);
        if (tag == null) {
            roomSQLiteQueryAcquire.bindNull(1);
        } else {
            roomSQLiteQueryAcquire.bindString(1, tag);
        }
        return this.__db.getInvalidationTracker().createLiveData(new String[]{"WorkTag", "WorkProgress", "workspec", "worktag"}, true, new Callable<List<WorkSpec.WorkInfoPojo>>() { // from class: androidx.work.impl.model.WorkSpecDao_Impl.12
            /* high-level source view WARN: Multi-variable type inference failed */
            @Override // java.util.concurrent.Callable
            public List<WorkSpec.WorkInfoPojo> call() throws Exception {
                WorkSpecDao_Impl.this.__db.beginTransaction();
                try {
                    Cursor cursorQuery = DBUtil.query(WorkSpecDao_Impl.this.__db, roomSQLiteQueryAcquire, true, null);
                    try {
                        int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
                        int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
                        int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
                        int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                        ArrayMap arrayMap = new ArrayMap();
                        ArrayMap arrayMap2 = new ArrayMap();
                        while (cursorQuery.moveToNext()) {
                            if (!cursorQuery.isNull(columnIndexOrThrow)) {
                                String string = cursorQuery.getString(columnIndexOrThrow);
                                if (((ArrayList) arrayMap.get(string)) == null) {
                                    arrayMap.put(string, new ArrayList());
                                }
                            }
                            if (!cursorQuery.isNull(columnIndexOrThrow)) {
                                String string2 = cursorQuery.getString(columnIndexOrThrow);
                                if (((ArrayList) arrayMap2.get(string2)) == null) {
                                    arrayMap2.put(string2, new ArrayList());
                                }
                            }
                        }
                        cursorQuery.moveToPosition(-1);
                        WorkSpecDao_Impl.this.__fetchRelationshipWorkTagAsjavaLangString(arrayMap);
                        WorkSpecDao_Impl.this.__fetchRelationshipWorkProgressAsandroidxWorkData(arrayMap2);
                        ArrayList arrayList = new ArrayList(cursorQuery.getCount());
                        while (cursorQuery.moveToNext()) {
                            ArrayList arrayList2 = !cursorQuery.isNull(columnIndexOrThrow) ? (ArrayList) arrayMap.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                            if (arrayList2 == null) {
                                arrayList2 = new ArrayList();
                            }
                            ArrayList arrayList3 = !cursorQuery.isNull(columnIndexOrThrow) ? (ArrayList) arrayMap2.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                            if (arrayList3 == null) {
                                arrayList3 = new ArrayList();
                            }
                            WorkSpec.WorkInfoPojo workInfoPojo = new WorkSpec.WorkInfoPojo();
                            workInfoPojo.id = cursorQuery.getString(columnIndexOrThrow);
                            workInfoPojo.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow2));
                            workInfoPojo.output = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow3));
                            workInfoPojo.runAttemptCount = cursorQuery.getInt(columnIndexOrThrow4);
                            workInfoPojo.tags = arrayList2;
                            workInfoPojo.progress = arrayList3;
                            arrayList.add(workInfoPojo);
                        }
                        WorkSpecDao_Impl.this.__db.setTransactionSuccessful();
                        return arrayList;
                    } finally {
                        cursorQuery.close();
                    }
                } finally {
                    WorkSpecDao_Impl.this.__db.endTransaction();
                }
            }

            protected void finalize() {
                roomSQLiteQueryAcquire.release();
            }
        });
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<WorkSpec.WorkInfoPojo> getWorkStatusPojoForName(final String name) {
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT id, state, output, run_attempt_count FROM workspec WHERE id IN (SELECT work_spec_id FROM workname WHERE name=?)", 1);
        if (name == null) {
            roomSQLiteQueryAcquire.bindNull(1);
        } else {
            roomSQLiteQueryAcquire.bindString(1, name);
        }
        this.__db.assertNotSuspendingTransaction();
        this.__db.beginTransaction();
        try {
            Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, true, null);
            try {
                int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
                int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
                int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
                int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                ArrayMap<String, ArrayList<String>> arrayMap = new ArrayMap<>();
                ArrayMap<String, ArrayList<Data>> arrayMap2 = new ArrayMap<>();
                while (cursorQuery.moveToNext()) {
                    if (!cursorQuery.isNull(columnIndexOrThrow)) {
                        String string = cursorQuery.getString(columnIndexOrThrow);
                        if (arrayMap.get(string) == null) {
                            arrayMap.put(string, new ArrayList<>());
                        }
                    }
                    if (!cursorQuery.isNull(columnIndexOrThrow)) {
                        String string2 = cursorQuery.getString(columnIndexOrThrow);
                        if (arrayMap2.get(string2) == null) {
                            arrayMap2.put(string2, new ArrayList<>());
                        }
                    }
                }
                cursorQuery.moveToPosition(-1);
                __fetchRelationshipWorkTagAsjavaLangString(arrayMap);
                __fetchRelationshipWorkProgressAsandroidxWorkData(arrayMap2);
                ArrayList arrayList = new ArrayList(cursorQuery.getCount());
                while (cursorQuery.moveToNext()) {
                    ArrayList<String> arrayList2 = !cursorQuery.isNull(columnIndexOrThrow) ? arrayMap.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                    if (arrayList2 == null) {
                        arrayList2 = new ArrayList<>();
                    }
                    ArrayList<Data> arrayList3 = !cursorQuery.isNull(columnIndexOrThrow) ? arrayMap2.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                    if (arrayList3 == null) {
                        arrayList3 = new ArrayList<>();
                    }
                    WorkSpec.WorkInfoPojo workInfoPojo = new WorkSpec.WorkInfoPojo();
                    workInfoPojo.id = cursorQuery.getString(columnIndexOrThrow);
                    workInfoPojo.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow2));
                    workInfoPojo.output = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow3));
                    workInfoPojo.runAttemptCount = cursorQuery.getInt(columnIndexOrThrow4);
                    workInfoPojo.tags = arrayList2;
                    workInfoPojo.progress = arrayList3;
                    arrayList.add(workInfoPojo);
                }
                this.__db.setTransactionSuccessful();
                return arrayList;
            } finally {
                cursorQuery.close();
                roomSQLiteQueryAcquire.release();
            }
        } finally {
            this.__db.endTransaction();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public LiveData<List<WorkSpec.WorkInfoPojo>> getWorkStatusPojoLiveDataForName(final String name) {
        final RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT id, state, output, run_attempt_count FROM workspec WHERE id IN (SELECT work_spec_id FROM workname WHERE name=?)", 1);
        if (name == null) {
            roomSQLiteQueryAcquire.bindNull(1);
        } else {
            roomSQLiteQueryAcquire.bindString(1, name);
        }
        return this.__db.getInvalidationTracker().createLiveData(new String[]{"WorkTag", "WorkProgress", "workspec", "workname"}, true, new Callable<List<WorkSpec.WorkInfoPojo>>() { // from class: androidx.work.impl.model.WorkSpecDao_Impl.13
            /* high-level source view WARN: Multi-variable type inference failed */
            @Override // java.util.concurrent.Callable
            public List<WorkSpec.WorkInfoPojo> call() throws Exception {
                WorkSpecDao_Impl.this.__db.beginTransaction();
                try {
                    Cursor cursorQuery = DBUtil.query(WorkSpecDao_Impl.this.__db, roomSQLiteQueryAcquire, true, null);
                    try {
                        int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
                        int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
                        int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
                        int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                        ArrayMap arrayMap = new ArrayMap();
                        ArrayMap arrayMap2 = new ArrayMap();
                        while (cursorQuery.moveToNext()) {
                            if (!cursorQuery.isNull(columnIndexOrThrow)) {
                                String string = cursorQuery.getString(columnIndexOrThrow);
                                if (((ArrayList) arrayMap.get(string)) == null) {
                                    arrayMap.put(string, new ArrayList());
                                }
                            }
                            if (!cursorQuery.isNull(columnIndexOrThrow)) {
                                String string2 = cursorQuery.getString(columnIndexOrThrow);
                                if (((ArrayList) arrayMap2.get(string2)) == null) {
                                    arrayMap2.put(string2, new ArrayList());
                                }
                            }
                        }
                        cursorQuery.moveToPosition(-1);
                        WorkSpecDao_Impl.this.__fetchRelationshipWorkTagAsjavaLangString(arrayMap);
                        WorkSpecDao_Impl.this.__fetchRelationshipWorkProgressAsandroidxWorkData(arrayMap2);
                        ArrayList arrayList = new ArrayList(cursorQuery.getCount());
                        while (cursorQuery.moveToNext()) {
                            ArrayList arrayList2 = !cursorQuery.isNull(columnIndexOrThrow) ? (ArrayList) arrayMap.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                            if (arrayList2 == null) {
                                arrayList2 = new ArrayList();
                            }
                            ArrayList arrayList3 = !cursorQuery.isNull(columnIndexOrThrow) ? (ArrayList) arrayMap2.get(cursorQuery.getString(columnIndexOrThrow)) : null;
                            if (arrayList3 == null) {
                                arrayList3 = new ArrayList();
                            }
                            WorkSpec.WorkInfoPojo workInfoPojo = new WorkSpec.WorkInfoPojo();
                            workInfoPojo.id = cursorQuery.getString(columnIndexOrThrow);
                            workInfoPojo.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow2));
                            workInfoPojo.output = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow3));
                            workInfoPojo.runAttemptCount = cursorQuery.getInt(columnIndexOrThrow4);
                            workInfoPojo.tags = arrayList2;
                            workInfoPojo.progress = arrayList3;
                            arrayList.add(workInfoPojo);
                        }
                        WorkSpecDao_Impl.this.__db.setTransactionSuccessful();
                        return arrayList;
                    } finally {
                        cursorQuery.close();
                    }
                } finally {
                    WorkSpecDao_Impl.this.__db.endTransaction();
                }
            }

            protected void finalize() {
                roomSQLiteQueryAcquire.release();
            }
        });
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<Data> getInputsFromPrerequisites(final String id) {
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT output FROM workspec WHERE id IN (SELECT prerequisite_id FROM dependency WHERE work_spec_id=?)", 1);
        if (id == null) {
            roomSQLiteQueryAcquire.bindNull(1);
        } else {
            roomSQLiteQueryAcquire.bindString(1, id);
        }
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            ArrayList arrayList = new ArrayList(cursorQuery.getCount());
            while (cursorQuery.moveToNext()) {
                arrayList.add(Data.fromByteArray(cursorQuery.getBlob(0)));
            }
            return arrayList;
        } finally {
            cursorQuery.close();
            roomSQLiteQueryAcquire.release();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<String> getUnfinishedWorkWithTag(final String tag) {
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT id FROM workspec WHERE state NOT IN (2, 3, 5) AND id IN (SELECT work_spec_id FROM worktag WHERE tag=?)", 1);
        if (tag == null) {
            roomSQLiteQueryAcquire.bindNull(1);
        } else {
            roomSQLiteQueryAcquire.bindString(1, tag);
        }
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            ArrayList arrayList = new ArrayList(cursorQuery.getCount());
            while (cursorQuery.moveToNext()) {
                arrayList.add(cursorQuery.getString(0));
            }
            return arrayList;
        } finally {
            cursorQuery.close();
            roomSQLiteQueryAcquire.release();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<String> getUnfinishedWorkWithName(final String name) {
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT id FROM workspec WHERE state NOT IN (2, 3, 5) AND id IN (SELECT work_spec_id FROM workname WHERE name=?)", 1);
        if (name == null) {
            roomSQLiteQueryAcquire.bindNull(1);
        } else {
            roomSQLiteQueryAcquire.bindString(1, name);
        }
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            ArrayList arrayList = new ArrayList(cursorQuery.getCount());
            while (cursorQuery.moveToNext()) {
                arrayList.add(cursorQuery.getString(0));
            }
            return arrayList;
        } finally {
            cursorQuery.close();
            roomSQLiteQueryAcquire.release();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<String> getAllUnfinishedWork() {
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT id FROM workspec WHERE state NOT IN (2, 3, 5)", 0);
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            ArrayList arrayList = new ArrayList(cursorQuery.getCount());
            while (cursorQuery.moveToNext()) {
                arrayList.add(cursorQuery.getString(0));
            }
            return arrayList;
        } finally {
            cursorQuery.close();
            roomSQLiteQueryAcquire.release();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public boolean hasUnfinishedWork() {
        boolean z = false;
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT COUNT(*) > 0 FROM workspec WHERE state NOT IN (2, 3, 5) LIMIT 1", 0);
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            if (cursorQuery.moveToFirst()) {
                if (cursorQuery.getInt(0) != 0) {
                    z = true;
                }
            }
            return z;
        } finally {
            cursorQuery.close();
            roomSQLiteQueryAcquire.release();
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public LiveData<Long> getScheduleRequestedAtLiveData(final String id) {
        final RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT schedule_requested_at FROM workspec WHERE id=?", 1);
        if (id == null) {
            roomSQLiteQueryAcquire.bindNull(1);
        } else {
            roomSQLiteQueryAcquire.bindString(1, id);
        }
        return this.__db.getInvalidationTracker().createLiveData(new String[]{"workspec"}, false, new Callable<Long>() { // from class: androidx.work.impl.model.WorkSpecDao_Impl.14
            /* high-level source view WARN: Can't rename method to resolve collision */
            @Override // java.util.concurrent.Callable
            public Long call() throws Exception {
                Long lValueOf = null;
                Cursor cursorQuery = DBUtil.query(WorkSpecDao_Impl.this.__db, roomSQLiteQueryAcquire, false, null);
                try {
                    if (cursorQuery.moveToFirst() && !cursorQuery.isNull(0)) {
                        lValueOf = Long.valueOf(cursorQuery.getLong(0));
                    }
                    return lValueOf;
                } finally {
                    cursorQuery.close();
                }
            }

            protected void finalize() {
                roomSQLiteQueryAcquire.release();
            }
        });
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<WorkSpec> getEligibleWorkForScheduling(final int schedulerLimit) throws Throwable {
        RoomSQLiteQuery roomSQLiteQuery;
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT `required_network_type`, `requires_charging`, `requires_device_idle`, `requires_battery_not_low`, `requires_storage_not_low`, `trigger_content_update_delay`, `trigger_max_content_delay`, `content_uri_triggers`, `WorkSpec`.`id` AS `id`, `WorkSpec`.`state` AS `state`, `WorkSpec`.`worker_class_name` AS `worker_class_name`, `WorkSpec`.`input_merger_class_name` AS `input_merger_class_name`, `WorkSpec`.`input` AS `input`, `WorkSpec`.`output` AS `output`, `WorkSpec`.`initial_delay` AS `initial_delay`, `WorkSpec`.`interval_duration` AS `interval_duration`, `WorkSpec`.`flex_duration` AS `flex_duration`, `WorkSpec`.`run_attempt_count` AS `run_attempt_count`, `WorkSpec`.`backoff_policy` AS `backoff_policy`, `WorkSpec`.`backoff_delay_duration` AS `backoff_delay_duration`, `WorkSpec`.`period_start_time` AS `period_start_time`, `WorkSpec`.`minimum_retention_duration` AS `minimum_retention_duration`, `WorkSpec`.`schedule_requested_at` AS `schedule_requested_at`, `WorkSpec`.`run_in_foreground` AS `run_in_foreground`, `WorkSpec`.`out_of_quota_policy` AS `out_of_quota_policy` FROM workspec WHERE state=0 AND schedule_requested_at=-1 ORDER BY period_start_time LIMIT (SELECT MAX(?-COUNT(*), 0) FROM workspec WHERE schedule_requested_at<>-1 AND state NOT IN (2, 3, 5))", 1);
        roomSQLiteQueryAcquire.bindLong(1, schedulerLimit);
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, "required_network_type");
            int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_charging");
            int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_device_idle");
            int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_battery_not_low");
            int columnIndexOrThrow5 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_storage_not_low");
            int columnIndexOrThrow6 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_content_update_delay");
            int columnIndexOrThrow7 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_max_content_delay");
            int columnIndexOrThrow8 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "content_uri_triggers");
            int columnIndexOrThrow9 = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
            int columnIndexOrThrow10 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
            int columnIndexOrThrow11 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "worker_class_name");
            int columnIndexOrThrow12 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input_merger_class_name");
            int columnIndexOrThrow13 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input");
            int columnIndexOrThrow14 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
            roomSQLiteQuery = roomSQLiteQueryAcquire;
            try {
                int columnIndexOrThrow15 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "initial_delay");
                int columnIndexOrThrow16 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "interval_duration");
                int columnIndexOrThrow17 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "flex_duration");
                int columnIndexOrThrow18 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                int columnIndexOrThrow19 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_policy");
                int columnIndexOrThrow20 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_delay_duration");
                int columnIndexOrThrow21 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "period_start_time");
                int columnIndexOrThrow22 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "minimum_retention_duration");
                int columnIndexOrThrow23 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "schedule_requested_at");
                int columnIndexOrThrow24 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_in_foreground");
                int columnIndexOrThrow25 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "out_of_quota_policy");
                int i = columnIndexOrThrow14;
                ArrayList arrayList = new ArrayList(cursorQuery.getCount());
                while (cursorQuery.moveToNext()) {
                    String string = cursorQuery.getString(columnIndexOrThrow9);
                    int i2 = columnIndexOrThrow9;
                    String string2 = cursorQuery.getString(columnIndexOrThrow11);
                    int i3 = columnIndexOrThrow11;
                    Constraints constraints = new Constraints();
                    int i4 = columnIndexOrThrow;
                    constraints.setRequiredNetworkType(WorkTypeConverters.intToNetworkType(cursorQuery.getInt(columnIndexOrThrow)));
                    constraints.setRequiresCharging(cursorQuery.getInt(columnIndexOrThrow2) != 0);
                    constraints.setRequiresDeviceIdle(cursorQuery.getInt(columnIndexOrThrow3) != 0);
                    constraints.setRequiresBatteryNotLow(cursorQuery.getInt(columnIndexOrThrow4) != 0);
                    constraints.setRequiresStorageNotLow(cursorQuery.getInt(columnIndexOrThrow5) != 0);
                    int i5 = columnIndexOrThrow2;
                    int i6 = columnIndexOrThrow3;
                    constraints.setTriggerContentUpdateDelay(cursorQuery.getLong(columnIndexOrThrow6));
                    constraints.setTriggerMaxContentDelay(cursorQuery.getLong(columnIndexOrThrow7));
                    constraints.setContentUriTriggers(WorkTypeConverters.byteArrayToContentUriTriggers(cursorQuery.getBlob(columnIndexOrThrow8)));
                    WorkSpec workSpec = new WorkSpec(string, string2);
                    workSpec.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow10));
                    workSpec.inputMergerClassName = cursorQuery.getString(columnIndexOrThrow12);
                    workSpec.input = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow13));
                    int i7 = i;
                    workSpec.output = Data.fromByteArray(cursorQuery.getBlob(i7));
                    i = i7;
                    int i8 = columnIndexOrThrow15;
                    workSpec.initialDelay = cursorQuery.getLong(i8);
                    int i9 = columnIndexOrThrow12;
                    int i10 = columnIndexOrThrow16;
                    workSpec.intervalDuration = cursorQuery.getLong(i10);
                    int i11 = columnIndexOrThrow4;
                    int i12 = columnIndexOrThrow17;
                    workSpec.flexDuration = cursorQuery.getLong(i12);
                    int i13 = columnIndexOrThrow18;
                    workSpec.runAttemptCount = cursorQuery.getInt(i13);
                    int i14 = columnIndexOrThrow19;
                    workSpec.backoffPolicy = WorkTypeConverters.intToBackoffPolicy(cursorQuery.getInt(i14));
                    columnIndexOrThrow17 = i12;
                    int i15 = columnIndexOrThrow20;
                    workSpec.backoffDelayDuration = cursorQuery.getLong(i15);
                    int i16 = columnIndexOrThrow21;
                    workSpec.periodStartTime = cursorQuery.getLong(i16);
                    columnIndexOrThrow21 = i16;
                    int i17 = columnIndexOrThrow22;
                    workSpec.minimumRetentionDuration = cursorQuery.getLong(i17);
                    int i18 = columnIndexOrThrow23;
                    workSpec.scheduleRequestedAt = cursorQuery.getLong(i18);
                    int i19 = columnIndexOrThrow24;
                    workSpec.expedited = cursorQuery.getInt(i19) != 0;
                    int i20 = columnIndexOrThrow25;
                    workSpec.outOfQuotaPolicy = WorkTypeConverters.intToOutOfQuotaPolicy(cursorQuery.getInt(i20));
                    workSpec.constraints = constraints;
                    arrayList.add(workSpec);
                    columnIndexOrThrow25 = i20;
                    columnIndexOrThrow2 = i5;
                    columnIndexOrThrow12 = i9;
                    columnIndexOrThrow15 = i8;
                    columnIndexOrThrow16 = i10;
                    columnIndexOrThrow18 = i13;
                    columnIndexOrThrow23 = i18;
                    columnIndexOrThrow9 = i2;
                    columnIndexOrThrow11 = i3;
                    columnIndexOrThrow = i4;
                    columnIndexOrThrow24 = i19;
                    columnIndexOrThrow22 = i17;
                    columnIndexOrThrow3 = i6;
                    columnIndexOrThrow20 = i15;
                    columnIndexOrThrow4 = i11;
                    columnIndexOrThrow19 = i14;
                }
                cursorQuery.close();
                roomSQLiteQuery.release();
                return arrayList;
            } catch (Throwable th) {
                th = th;
                cursorQuery.close();
                roomSQLiteQuery.release();
                throw th;
            }
        } catch (Throwable th2) {
            th = th2;
            roomSQLiteQuery = roomSQLiteQueryAcquire;
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<WorkSpec> getAllEligibleWorkSpecsForScheduling(final int maxLimit) throws Throwable {
        RoomSQLiteQuery roomSQLiteQuery;
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT `required_network_type`, `requires_charging`, `requires_device_idle`, `requires_battery_not_low`, `requires_storage_not_low`, `trigger_content_update_delay`, `trigger_max_content_delay`, `content_uri_triggers`, `WorkSpec`.`id` AS `id`, `WorkSpec`.`state` AS `state`, `WorkSpec`.`worker_class_name` AS `worker_class_name`, `WorkSpec`.`input_merger_class_name` AS `input_merger_class_name`, `WorkSpec`.`input` AS `input`, `WorkSpec`.`output` AS `output`, `WorkSpec`.`initial_delay` AS `initial_delay`, `WorkSpec`.`interval_duration` AS `interval_duration`, `WorkSpec`.`flex_duration` AS `flex_duration`, `WorkSpec`.`run_attempt_count` AS `run_attempt_count`, `WorkSpec`.`backoff_policy` AS `backoff_policy`, `WorkSpec`.`backoff_delay_duration` AS `backoff_delay_duration`, `WorkSpec`.`period_start_time` AS `period_start_time`, `WorkSpec`.`minimum_retention_duration` AS `minimum_retention_duration`, `WorkSpec`.`schedule_requested_at` AS `schedule_requested_at`, `WorkSpec`.`run_in_foreground` AS `run_in_foreground`, `WorkSpec`.`out_of_quota_policy` AS `out_of_quota_policy` FROM workspec WHERE state=0 ORDER BY period_start_time LIMIT ?", 1);
        roomSQLiteQueryAcquire.bindLong(1, maxLimit);
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, "required_network_type");
            int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_charging");
            int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_device_idle");
            int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_battery_not_low");
            int columnIndexOrThrow5 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_storage_not_low");
            int columnIndexOrThrow6 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_content_update_delay");
            int columnIndexOrThrow7 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_max_content_delay");
            int columnIndexOrThrow8 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "content_uri_triggers");
            int columnIndexOrThrow9 = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
            int columnIndexOrThrow10 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
            int columnIndexOrThrow11 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "worker_class_name");
            int columnIndexOrThrow12 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input_merger_class_name");
            int columnIndexOrThrow13 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input");
            int columnIndexOrThrow14 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
            roomSQLiteQuery = roomSQLiteQueryAcquire;
            try {
                int columnIndexOrThrow15 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "initial_delay");
                int columnIndexOrThrow16 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "interval_duration");
                int columnIndexOrThrow17 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "flex_duration");
                int columnIndexOrThrow18 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                int columnIndexOrThrow19 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_policy");
                int columnIndexOrThrow20 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_delay_duration");
                int columnIndexOrThrow21 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "period_start_time");
                int columnIndexOrThrow22 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "minimum_retention_duration");
                int columnIndexOrThrow23 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "schedule_requested_at");
                int columnIndexOrThrow24 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_in_foreground");
                int columnIndexOrThrow25 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "out_of_quota_policy");
                int i = columnIndexOrThrow14;
                ArrayList arrayList = new ArrayList(cursorQuery.getCount());
                while (cursorQuery.moveToNext()) {
                    String string = cursorQuery.getString(columnIndexOrThrow9);
                    int i2 = columnIndexOrThrow9;
                    String string2 = cursorQuery.getString(columnIndexOrThrow11);
                    int i3 = columnIndexOrThrow11;
                    Constraints constraints = new Constraints();
                    int i4 = columnIndexOrThrow;
                    constraints.setRequiredNetworkType(WorkTypeConverters.intToNetworkType(cursorQuery.getInt(columnIndexOrThrow)));
                    constraints.setRequiresCharging(cursorQuery.getInt(columnIndexOrThrow2) != 0);
                    constraints.setRequiresDeviceIdle(cursorQuery.getInt(columnIndexOrThrow3) != 0);
                    constraints.setRequiresBatteryNotLow(cursorQuery.getInt(columnIndexOrThrow4) != 0);
                    constraints.setRequiresStorageNotLow(cursorQuery.getInt(columnIndexOrThrow5) != 0);
                    int i5 = columnIndexOrThrow2;
                    int i6 = columnIndexOrThrow3;
                    constraints.setTriggerContentUpdateDelay(cursorQuery.getLong(columnIndexOrThrow6));
                    constraints.setTriggerMaxContentDelay(cursorQuery.getLong(columnIndexOrThrow7));
                    constraints.setContentUriTriggers(WorkTypeConverters.byteArrayToContentUriTriggers(cursorQuery.getBlob(columnIndexOrThrow8)));
                    WorkSpec workSpec = new WorkSpec(string, string2);
                    workSpec.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow10));
                    workSpec.inputMergerClassName = cursorQuery.getString(columnIndexOrThrow12);
                    workSpec.input = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow13));
                    int i7 = i;
                    workSpec.output = Data.fromByteArray(cursorQuery.getBlob(i7));
                    i = i7;
                    int i8 = columnIndexOrThrow15;
                    workSpec.initialDelay = cursorQuery.getLong(i8);
                    int i9 = columnIndexOrThrow12;
                    int i10 = columnIndexOrThrow16;
                    workSpec.intervalDuration = cursorQuery.getLong(i10);
                    int i11 = columnIndexOrThrow4;
                    int i12 = columnIndexOrThrow17;
                    workSpec.flexDuration = cursorQuery.getLong(i12);
                    int i13 = columnIndexOrThrow18;
                    workSpec.runAttemptCount = cursorQuery.getInt(i13);
                    int i14 = columnIndexOrThrow19;
                    workSpec.backoffPolicy = WorkTypeConverters.intToBackoffPolicy(cursorQuery.getInt(i14));
                    columnIndexOrThrow17 = i12;
                    int i15 = columnIndexOrThrow20;
                    workSpec.backoffDelayDuration = cursorQuery.getLong(i15);
                    int i16 = columnIndexOrThrow21;
                    workSpec.periodStartTime = cursorQuery.getLong(i16);
                    columnIndexOrThrow21 = i16;
                    int i17 = columnIndexOrThrow22;
                    workSpec.minimumRetentionDuration = cursorQuery.getLong(i17);
                    int i18 = columnIndexOrThrow23;
                    workSpec.scheduleRequestedAt = cursorQuery.getLong(i18);
                    int i19 = columnIndexOrThrow24;
                    workSpec.expedited = cursorQuery.getInt(i19) != 0;
                    int i20 = columnIndexOrThrow25;
                    workSpec.outOfQuotaPolicy = WorkTypeConverters.intToOutOfQuotaPolicy(cursorQuery.getInt(i20));
                    workSpec.constraints = constraints;
                    arrayList.add(workSpec);
                    columnIndexOrThrow25 = i20;
                    columnIndexOrThrow2 = i5;
                    columnIndexOrThrow12 = i9;
                    columnIndexOrThrow15 = i8;
                    columnIndexOrThrow16 = i10;
                    columnIndexOrThrow18 = i13;
                    columnIndexOrThrow23 = i18;
                    columnIndexOrThrow9 = i2;
                    columnIndexOrThrow11 = i3;
                    columnIndexOrThrow = i4;
                    columnIndexOrThrow24 = i19;
                    columnIndexOrThrow22 = i17;
                    columnIndexOrThrow3 = i6;
                    columnIndexOrThrow20 = i15;
                    columnIndexOrThrow4 = i11;
                    columnIndexOrThrow19 = i14;
                }
                cursorQuery.close();
                roomSQLiteQuery.release();
                return arrayList;
            } catch (Throwable th) {
                th = th;
                cursorQuery.close();
                roomSQLiteQuery.release();
                throw th;
            }
        } catch (Throwable th2) {
            th = th2;
            roomSQLiteQuery = roomSQLiteQueryAcquire;
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<WorkSpec> getScheduledWork() throws Throwable {
        RoomSQLiteQuery roomSQLiteQuery;
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT `required_network_type`, `requires_charging`, `requires_device_idle`, `requires_battery_not_low`, `requires_storage_not_low`, `trigger_content_update_delay`, `trigger_max_content_delay`, `content_uri_triggers`, `WorkSpec`.`id` AS `id`, `WorkSpec`.`state` AS `state`, `WorkSpec`.`worker_class_name` AS `worker_class_name`, `WorkSpec`.`input_merger_class_name` AS `input_merger_class_name`, `WorkSpec`.`input` AS `input`, `WorkSpec`.`output` AS `output`, `WorkSpec`.`initial_delay` AS `initial_delay`, `WorkSpec`.`interval_duration` AS `interval_duration`, `WorkSpec`.`flex_duration` AS `flex_duration`, `WorkSpec`.`run_attempt_count` AS `run_attempt_count`, `WorkSpec`.`backoff_policy` AS `backoff_policy`, `WorkSpec`.`backoff_delay_duration` AS `backoff_delay_duration`, `WorkSpec`.`period_start_time` AS `period_start_time`, `WorkSpec`.`minimum_retention_duration` AS `minimum_retention_duration`, `WorkSpec`.`schedule_requested_at` AS `schedule_requested_at`, `WorkSpec`.`run_in_foreground` AS `run_in_foreground`, `WorkSpec`.`out_of_quota_policy` AS `out_of_quota_policy` FROM workspec WHERE state=0 AND schedule_requested_at<>-1", 0);
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, "required_network_type");
            int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_charging");
            int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_device_idle");
            int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_battery_not_low");
            int columnIndexOrThrow5 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_storage_not_low");
            int columnIndexOrThrow6 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_content_update_delay");
            int columnIndexOrThrow7 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_max_content_delay");
            int columnIndexOrThrow8 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "content_uri_triggers");
            int columnIndexOrThrow9 = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
            int columnIndexOrThrow10 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
            int columnIndexOrThrow11 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "worker_class_name");
            int columnIndexOrThrow12 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input_merger_class_name");
            int columnIndexOrThrow13 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input");
            int columnIndexOrThrow14 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
            roomSQLiteQuery = roomSQLiteQueryAcquire;
            try {
                int columnIndexOrThrow15 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "initial_delay");
                int columnIndexOrThrow16 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "interval_duration");
                int columnIndexOrThrow17 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "flex_duration");
                int columnIndexOrThrow18 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                int columnIndexOrThrow19 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_policy");
                int columnIndexOrThrow20 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_delay_duration");
                int columnIndexOrThrow21 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "period_start_time");
                int columnIndexOrThrow22 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "minimum_retention_duration");
                int columnIndexOrThrow23 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "schedule_requested_at");
                int columnIndexOrThrow24 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_in_foreground");
                int columnIndexOrThrow25 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "out_of_quota_policy");
                int i = columnIndexOrThrow14;
                ArrayList arrayList = new ArrayList(cursorQuery.getCount());
                while (cursorQuery.moveToNext()) {
                    String string = cursorQuery.getString(columnIndexOrThrow9);
                    int i2 = columnIndexOrThrow9;
                    String string2 = cursorQuery.getString(columnIndexOrThrow11);
                    int i3 = columnIndexOrThrow11;
                    Constraints constraints = new Constraints();
                    int i4 = columnIndexOrThrow;
                    constraints.setRequiredNetworkType(WorkTypeConverters.intToNetworkType(cursorQuery.getInt(columnIndexOrThrow)));
                    constraints.setRequiresCharging(cursorQuery.getInt(columnIndexOrThrow2) != 0);
                    constraints.setRequiresDeviceIdle(cursorQuery.getInt(columnIndexOrThrow3) != 0);
                    constraints.setRequiresBatteryNotLow(cursorQuery.getInt(columnIndexOrThrow4) != 0);
                    constraints.setRequiresStorageNotLow(cursorQuery.getInt(columnIndexOrThrow5) != 0);
                    int i5 = columnIndexOrThrow2;
                    int i6 = columnIndexOrThrow3;
                    constraints.setTriggerContentUpdateDelay(cursorQuery.getLong(columnIndexOrThrow6));
                    constraints.setTriggerMaxContentDelay(cursorQuery.getLong(columnIndexOrThrow7));
                    constraints.setContentUriTriggers(WorkTypeConverters.byteArrayToContentUriTriggers(cursorQuery.getBlob(columnIndexOrThrow8)));
                    WorkSpec workSpec = new WorkSpec(string, string2);
                    workSpec.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow10));
                    workSpec.inputMergerClassName = cursorQuery.getString(columnIndexOrThrow12);
                    workSpec.input = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow13));
                    int i7 = i;
                    workSpec.output = Data.fromByteArray(cursorQuery.getBlob(i7));
                    i = i7;
                    int i8 = columnIndexOrThrow15;
                    workSpec.initialDelay = cursorQuery.getLong(i8);
                    int i9 = columnIndexOrThrow13;
                    int i10 = columnIndexOrThrow16;
                    workSpec.intervalDuration = cursorQuery.getLong(i10);
                    int i11 = columnIndexOrThrow4;
                    int i12 = columnIndexOrThrow17;
                    workSpec.flexDuration = cursorQuery.getLong(i12);
                    int i13 = columnIndexOrThrow18;
                    workSpec.runAttemptCount = cursorQuery.getInt(i13);
                    int i14 = columnIndexOrThrow19;
                    workSpec.backoffPolicy = WorkTypeConverters.intToBackoffPolicy(cursorQuery.getInt(i14));
                    columnIndexOrThrow17 = i12;
                    int i15 = columnIndexOrThrow20;
                    workSpec.backoffDelayDuration = cursorQuery.getLong(i15);
                    int i16 = columnIndexOrThrow21;
                    workSpec.periodStartTime = cursorQuery.getLong(i16);
                    columnIndexOrThrow21 = i16;
                    int i17 = columnIndexOrThrow22;
                    workSpec.minimumRetentionDuration = cursorQuery.getLong(i17);
                    int i18 = columnIndexOrThrow23;
                    workSpec.scheduleRequestedAt = cursorQuery.getLong(i18);
                    int i19 = columnIndexOrThrow24;
                    workSpec.expedited = cursorQuery.getInt(i19) != 0;
                    int i20 = columnIndexOrThrow25;
                    workSpec.outOfQuotaPolicy = WorkTypeConverters.intToOutOfQuotaPolicy(cursorQuery.getInt(i20));
                    workSpec.constraints = constraints;
                    arrayList.add(workSpec);
                    columnIndexOrThrow25 = i20;
                    columnIndexOrThrow2 = i5;
                    columnIndexOrThrow13 = i9;
                    columnIndexOrThrow15 = i8;
                    columnIndexOrThrow16 = i10;
                    columnIndexOrThrow18 = i13;
                    columnIndexOrThrow23 = i18;
                    columnIndexOrThrow9 = i2;
                    columnIndexOrThrow11 = i3;
                    columnIndexOrThrow = i4;
                    columnIndexOrThrow24 = i19;
                    columnIndexOrThrow22 = i17;
                    columnIndexOrThrow3 = i6;
                    columnIndexOrThrow20 = i15;
                    columnIndexOrThrow4 = i11;
                    columnIndexOrThrow19 = i14;
                }
                cursorQuery.close();
                roomSQLiteQuery.release();
                return arrayList;
            } catch (Throwable th) {
                th = th;
                cursorQuery.close();
                roomSQLiteQuery.release();
                throw th;
            }
        } catch (Throwable th2) {
            th = th2;
            roomSQLiteQuery = roomSQLiteQueryAcquire;
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<WorkSpec> getRunningWork() throws Throwable {
        RoomSQLiteQuery roomSQLiteQuery;
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT `required_network_type`, `requires_charging`, `requires_device_idle`, `requires_battery_not_low`, `requires_storage_not_low`, `trigger_content_update_delay`, `trigger_max_content_delay`, `content_uri_triggers`, `WorkSpec`.`id` AS `id`, `WorkSpec`.`state` AS `state`, `WorkSpec`.`worker_class_name` AS `worker_class_name`, `WorkSpec`.`input_merger_class_name` AS `input_merger_class_name`, `WorkSpec`.`input` AS `input`, `WorkSpec`.`output` AS `output`, `WorkSpec`.`initial_delay` AS `initial_delay`, `WorkSpec`.`interval_duration` AS `interval_duration`, `WorkSpec`.`flex_duration` AS `flex_duration`, `WorkSpec`.`run_attempt_count` AS `run_attempt_count`, `WorkSpec`.`backoff_policy` AS `backoff_policy`, `WorkSpec`.`backoff_delay_duration` AS `backoff_delay_duration`, `WorkSpec`.`period_start_time` AS `period_start_time`, `WorkSpec`.`minimum_retention_duration` AS `minimum_retention_duration`, `WorkSpec`.`schedule_requested_at` AS `schedule_requested_at`, `WorkSpec`.`run_in_foreground` AS `run_in_foreground`, `WorkSpec`.`out_of_quota_policy` AS `out_of_quota_policy` FROM workspec WHERE state=1", 0);
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, "required_network_type");
            int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_charging");
            int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_device_idle");
            int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_battery_not_low");
            int columnIndexOrThrow5 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_storage_not_low");
            int columnIndexOrThrow6 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_content_update_delay");
            int columnIndexOrThrow7 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_max_content_delay");
            int columnIndexOrThrow8 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "content_uri_triggers");
            int columnIndexOrThrow9 = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
            int columnIndexOrThrow10 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
            int columnIndexOrThrow11 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "worker_class_name");
            int columnIndexOrThrow12 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input_merger_class_name");
            int columnIndexOrThrow13 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input");
            int columnIndexOrThrow14 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
            roomSQLiteQuery = roomSQLiteQueryAcquire;
            try {
                int columnIndexOrThrow15 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "initial_delay");
                int columnIndexOrThrow16 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "interval_duration");
                int columnIndexOrThrow17 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "flex_duration");
                int columnIndexOrThrow18 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                int columnIndexOrThrow19 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_policy");
                int columnIndexOrThrow20 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_delay_duration");
                int columnIndexOrThrow21 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "period_start_time");
                int columnIndexOrThrow22 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "minimum_retention_duration");
                int columnIndexOrThrow23 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "schedule_requested_at");
                int columnIndexOrThrow24 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_in_foreground");
                int columnIndexOrThrow25 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "out_of_quota_policy");
                int i = columnIndexOrThrow14;
                ArrayList arrayList = new ArrayList(cursorQuery.getCount());
                while (cursorQuery.moveToNext()) {
                    String string = cursorQuery.getString(columnIndexOrThrow9);
                    int i2 = columnIndexOrThrow9;
                    String string2 = cursorQuery.getString(columnIndexOrThrow11);
                    int i3 = columnIndexOrThrow11;
                    Constraints constraints = new Constraints();
                    int i4 = columnIndexOrThrow;
                    constraints.setRequiredNetworkType(WorkTypeConverters.intToNetworkType(cursorQuery.getInt(columnIndexOrThrow)));
                    constraints.setRequiresCharging(cursorQuery.getInt(columnIndexOrThrow2) != 0);
                    constraints.setRequiresDeviceIdle(cursorQuery.getInt(columnIndexOrThrow3) != 0);
                    constraints.setRequiresBatteryNotLow(cursorQuery.getInt(columnIndexOrThrow4) != 0);
                    constraints.setRequiresStorageNotLow(cursorQuery.getInt(columnIndexOrThrow5) != 0);
                    int i5 = columnIndexOrThrow2;
                    int i6 = columnIndexOrThrow3;
                    constraints.setTriggerContentUpdateDelay(cursorQuery.getLong(columnIndexOrThrow6));
                    constraints.setTriggerMaxContentDelay(cursorQuery.getLong(columnIndexOrThrow7));
                    constraints.setContentUriTriggers(WorkTypeConverters.byteArrayToContentUriTriggers(cursorQuery.getBlob(columnIndexOrThrow8)));
                    WorkSpec workSpec = new WorkSpec(string, string2);
                    workSpec.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow10));
                    workSpec.inputMergerClassName = cursorQuery.getString(columnIndexOrThrow12);
                    workSpec.input = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow13));
                    int i7 = i;
                    workSpec.output = Data.fromByteArray(cursorQuery.getBlob(i7));
                    i = i7;
                    int i8 = columnIndexOrThrow15;
                    workSpec.initialDelay = cursorQuery.getLong(i8);
                    int i9 = columnIndexOrThrow13;
                    int i10 = columnIndexOrThrow16;
                    workSpec.intervalDuration = cursorQuery.getLong(i10);
                    int i11 = columnIndexOrThrow4;
                    int i12 = columnIndexOrThrow17;
                    workSpec.flexDuration = cursorQuery.getLong(i12);
                    int i13 = columnIndexOrThrow18;
                    workSpec.runAttemptCount = cursorQuery.getInt(i13);
                    int i14 = columnIndexOrThrow19;
                    workSpec.backoffPolicy = WorkTypeConverters.intToBackoffPolicy(cursorQuery.getInt(i14));
                    columnIndexOrThrow17 = i12;
                    int i15 = columnIndexOrThrow20;
                    workSpec.backoffDelayDuration = cursorQuery.getLong(i15);
                    int i16 = columnIndexOrThrow21;
                    workSpec.periodStartTime = cursorQuery.getLong(i16);
                    columnIndexOrThrow21 = i16;
                    int i17 = columnIndexOrThrow22;
                    workSpec.minimumRetentionDuration = cursorQuery.getLong(i17);
                    int i18 = columnIndexOrThrow23;
                    workSpec.scheduleRequestedAt = cursorQuery.getLong(i18);
                    int i19 = columnIndexOrThrow24;
                    workSpec.expedited = cursorQuery.getInt(i19) != 0;
                    int i20 = columnIndexOrThrow25;
                    workSpec.outOfQuotaPolicy = WorkTypeConverters.intToOutOfQuotaPolicy(cursorQuery.getInt(i20));
                    workSpec.constraints = constraints;
                    arrayList.add(workSpec);
                    columnIndexOrThrow25 = i20;
                    columnIndexOrThrow2 = i5;
                    columnIndexOrThrow13 = i9;
                    columnIndexOrThrow15 = i8;
                    columnIndexOrThrow16 = i10;
                    columnIndexOrThrow18 = i13;
                    columnIndexOrThrow23 = i18;
                    columnIndexOrThrow9 = i2;
                    columnIndexOrThrow11 = i3;
                    columnIndexOrThrow = i4;
                    columnIndexOrThrow24 = i19;
                    columnIndexOrThrow22 = i17;
                    columnIndexOrThrow3 = i6;
                    columnIndexOrThrow20 = i15;
                    columnIndexOrThrow4 = i11;
                    columnIndexOrThrow19 = i14;
                }
                cursorQuery.close();
                roomSQLiteQuery.release();
                return arrayList;
            } catch (Throwable th) {
                th = th;
                cursorQuery.close();
                roomSQLiteQuery.release();
                throw th;
            }
        } catch (Throwable th2) {
            th = th2;
            roomSQLiteQuery = roomSQLiteQueryAcquire;
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public List<WorkSpec> getRecentlyCompletedWork(final long startingAt) throws Throwable {
        RoomSQLiteQuery roomSQLiteQuery;
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire("SELECT `required_network_type`, `requires_charging`, `requires_device_idle`, `requires_battery_not_low`, `requires_storage_not_low`, `trigger_content_update_delay`, `trigger_max_content_delay`, `content_uri_triggers`, `WorkSpec`.`id` AS `id`, `WorkSpec`.`state` AS `state`, `WorkSpec`.`worker_class_name` AS `worker_class_name`, `WorkSpec`.`input_merger_class_name` AS `input_merger_class_name`, `WorkSpec`.`input` AS `input`, `WorkSpec`.`output` AS `output`, `WorkSpec`.`initial_delay` AS `initial_delay`, `WorkSpec`.`interval_duration` AS `interval_duration`, `WorkSpec`.`flex_duration` AS `flex_duration`, `WorkSpec`.`run_attempt_count` AS `run_attempt_count`, `WorkSpec`.`backoff_policy` AS `backoff_policy`, `WorkSpec`.`backoff_delay_duration` AS `backoff_delay_duration`, `WorkSpec`.`period_start_time` AS `period_start_time`, `WorkSpec`.`minimum_retention_duration` AS `minimum_retention_duration`, `WorkSpec`.`schedule_requested_at` AS `schedule_requested_at`, `WorkSpec`.`run_in_foreground` AS `run_in_foreground`, `WorkSpec`.`out_of_quota_policy` AS `out_of_quota_policy` FROM workspec WHERE period_start_time >= ? AND state IN (2, 3, 5) ORDER BY period_start_time DESC", 1);
        roomSQLiteQueryAcquire.bindLong(1, startingAt);
        this.__db.assertNotSuspendingTransaction();
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            int columnIndexOrThrow = CursorUtil.getColumnIndexOrThrow(cursorQuery, "required_network_type");
            int columnIndexOrThrow2 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_charging");
            int columnIndexOrThrow3 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_device_idle");
            int columnIndexOrThrow4 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_battery_not_low");
            int columnIndexOrThrow5 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "requires_storage_not_low");
            int columnIndexOrThrow6 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_content_update_delay");
            int columnIndexOrThrow7 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "trigger_max_content_delay");
            int columnIndexOrThrow8 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "content_uri_triggers");
            int columnIndexOrThrow9 = CursorUtil.getColumnIndexOrThrow(cursorQuery, OSOutcomeConstants.OUTCOME_ID);
            int columnIndexOrThrow10 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "state");
            int columnIndexOrThrow11 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "worker_class_name");
            int columnIndexOrThrow12 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input_merger_class_name");
            int columnIndexOrThrow13 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "input");
            int columnIndexOrThrow14 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "output");
            roomSQLiteQuery = roomSQLiteQueryAcquire;
            try {
                int columnIndexOrThrow15 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "initial_delay");
                int columnIndexOrThrow16 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "interval_duration");
                int columnIndexOrThrow17 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "flex_duration");
                int columnIndexOrThrow18 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_attempt_count");
                int columnIndexOrThrow19 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_policy");
                int columnIndexOrThrow20 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "backoff_delay_duration");
                int columnIndexOrThrow21 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "period_start_time");
                int columnIndexOrThrow22 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "minimum_retention_duration");
                int columnIndexOrThrow23 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "schedule_requested_at");
                int columnIndexOrThrow24 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "run_in_foreground");
                int columnIndexOrThrow25 = CursorUtil.getColumnIndexOrThrow(cursorQuery, "out_of_quota_policy");
                int i = columnIndexOrThrow14;
                ArrayList arrayList = new ArrayList(cursorQuery.getCount());
                while (cursorQuery.moveToNext()) {
                    String string = cursorQuery.getString(columnIndexOrThrow9);
                    int i2 = columnIndexOrThrow9;
                    String string2 = cursorQuery.getString(columnIndexOrThrow11);
                    int i3 = columnIndexOrThrow11;
                    Constraints constraints = new Constraints();
                    int i4 = columnIndexOrThrow;
                    constraints.setRequiredNetworkType(WorkTypeConverters.intToNetworkType(cursorQuery.getInt(columnIndexOrThrow)));
                    constraints.setRequiresCharging(cursorQuery.getInt(columnIndexOrThrow2) != 0);
                    constraints.setRequiresDeviceIdle(cursorQuery.getInt(columnIndexOrThrow3) != 0);
                    constraints.setRequiresBatteryNotLow(cursorQuery.getInt(columnIndexOrThrow4) != 0);
                    constraints.setRequiresStorageNotLow(cursorQuery.getInt(columnIndexOrThrow5) != 0);
                    int i5 = columnIndexOrThrow2;
                    int i6 = columnIndexOrThrow3;
                    constraints.setTriggerContentUpdateDelay(cursorQuery.getLong(columnIndexOrThrow6));
                    constraints.setTriggerMaxContentDelay(cursorQuery.getLong(columnIndexOrThrow7));
                    constraints.setContentUriTriggers(WorkTypeConverters.byteArrayToContentUriTriggers(cursorQuery.getBlob(columnIndexOrThrow8)));
                    WorkSpec workSpec = new WorkSpec(string, string2);
                    workSpec.state = WorkTypeConverters.intToState(cursorQuery.getInt(columnIndexOrThrow10));
                    workSpec.inputMergerClassName = cursorQuery.getString(columnIndexOrThrow12);
                    workSpec.input = Data.fromByteArray(cursorQuery.getBlob(columnIndexOrThrow13));
                    int i7 = i;
                    workSpec.output = Data.fromByteArray(cursorQuery.getBlob(i7));
                    int i8 = columnIndexOrThrow15;
                    i = i7;
                    workSpec.initialDelay = cursorQuery.getLong(i8);
                    int i9 = columnIndexOrThrow12;
                    int i10 = columnIndexOrThrow16;
                    workSpec.intervalDuration = cursorQuery.getLong(i10);
                    int i11 = columnIndexOrThrow4;
                    int i12 = columnIndexOrThrow17;
                    workSpec.flexDuration = cursorQuery.getLong(i12);
                    int i13 = columnIndexOrThrow18;
                    workSpec.runAttemptCount = cursorQuery.getInt(i13);
                    int i14 = columnIndexOrThrow19;
                    workSpec.backoffPolicy = WorkTypeConverters.intToBackoffPolicy(cursorQuery.getInt(i14));
                    columnIndexOrThrow17 = i12;
                    int i15 = columnIndexOrThrow20;
                    workSpec.backoffDelayDuration = cursorQuery.getLong(i15);
                    int i16 = columnIndexOrThrow21;
                    workSpec.periodStartTime = cursorQuery.getLong(i16);
                    columnIndexOrThrow21 = i16;
                    int i17 = columnIndexOrThrow22;
                    workSpec.minimumRetentionDuration = cursorQuery.getLong(i17);
                    int i18 = columnIndexOrThrow23;
                    workSpec.scheduleRequestedAt = cursorQuery.getLong(i18);
                    int i19 = columnIndexOrThrow24;
                    workSpec.expedited = cursorQuery.getInt(i19) != 0;
                    int i20 = columnIndexOrThrow25;
                    workSpec.outOfQuotaPolicy = WorkTypeConverters.intToOutOfQuotaPolicy(cursorQuery.getInt(i20));
                    workSpec.constraints = constraints;
                    arrayList.add(workSpec);
                    columnIndexOrThrow2 = i5;
                    columnIndexOrThrow25 = i20;
                    columnIndexOrThrow12 = i9;
                    columnIndexOrThrow15 = i8;
                    columnIndexOrThrow16 = i10;
                    columnIndexOrThrow18 = i13;
                    columnIndexOrThrow23 = i18;
                    columnIndexOrThrow9 = i2;
                    columnIndexOrThrow11 = i3;
                    columnIndexOrThrow = i4;
                    columnIndexOrThrow24 = i19;
                    columnIndexOrThrow22 = i17;
                    columnIndexOrThrow3 = i6;
                    columnIndexOrThrow20 = i15;
                    columnIndexOrThrow4 = i11;
                    columnIndexOrThrow19 = i14;
                }
                cursorQuery.close();
                roomSQLiteQuery.release();
                return arrayList;
            } catch (Throwable th) {
                th = th;
                cursorQuery.close();
                roomSQLiteQuery.release();
                throw th;
            }
        } catch (Throwable th2) {
            th = th2;
            roomSQLiteQuery = roomSQLiteQueryAcquire;
        }
    }

    @Override // androidx.work.impl.model.WorkSpecDao
    public int setState(final WorkInfo.State state, final String... ids) {
        this.__db.assertNotSuspendingTransaction();
        StringBuilder sbNewStringBuilder = StringUtil.newStringBuilder();
        sbNewStringBuilder.append("UPDATE workspec SET state=");
        sbNewStringBuilder.append("?");
        sbNewStringBuilder.append(" WHERE id IN (");
        StringUtil.appendPlaceholders(sbNewStringBuilder, ids.length);
        sbNewStringBuilder.append(")");
        SupportSQLiteStatement supportSQLiteStatementCompileStatement = this.__db.compileStatement(sbNewStringBuilder.toString());
        supportSQLiteStatementCompileStatement.bindLong(1, WorkTypeConverters.stateToInt(state));
        int i = 2;
        for (String str : ids) {
            if (str == null) {
                supportSQLiteStatementCompileStatement.bindNull(i);
            } else {
                supportSQLiteStatementCompileStatement.bindString(i, str);
            }
            i++;
        }
        this.__db.beginTransaction();
        try {
            int iExecuteUpdateDelete = supportSQLiteStatementCompileStatement.executeUpdateDelete();
            this.__db.setTransactionSuccessful();
            return iExecuteUpdateDelete;
        } finally {
            this.__db.endTransaction();
        }
    }
    public void __fetchRelationshipWorkTagAsjavaLangString(final ArrayMap<String, ArrayList<String>> _map) {
        ArrayList<String> arrayList;
        Set<String> setKeySet = _map.keySet();
        if (setKeySet.isEmpty()) {
            return;
        }
        if (_map.size() > 999) {
            ArrayMap<String, ArrayList<String>> arrayMap = new ArrayMap<>(RoomDatabase.MAX_BIND_PARAMETER_CNT);
            int size = _map.size();
            int i = 0;
            int i2 = 0;
            while (i < size) {
                arrayMap.put(_map.keyAt(i), _map.valueAt(i));
                i++;
                i2++;
                if (i2 == 999) {
                    __fetchRelationshipWorkTagAsjavaLangString(arrayMap);
                    arrayMap = new ArrayMap<>(RoomDatabase.MAX_BIND_PARAMETER_CNT);
                    i2 = 0;
                }
            }
            if (i2 > 0) {
                __fetchRelationshipWorkTagAsjavaLangString(arrayMap);
                return;
            }
            return;
        }
        StringBuilder sbNewStringBuilder = StringUtil.newStringBuilder();
        sbNewStringBuilder.append("SELECT `tag`,`work_spec_id` FROM `WorkTag` WHERE `work_spec_id` IN (");
        int size2 = setKeySet.size();
        StringUtil.appendPlaceholders(sbNewStringBuilder, size2);
        sbNewStringBuilder.append(")");
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire(sbNewStringBuilder.toString(), size2);
        int i3 = 1;
        for (String str : setKeySet) {
            if (str == null) {
                roomSQLiteQueryAcquire.bindNull(i3);
            } else {
                roomSQLiteQueryAcquire.bindString(i3, str);
            }
            i3++;
        }
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            int columnIndex = CursorUtil.getColumnIndex(cursorQuery, "work_spec_id");
            if (columnIndex == -1) {
                return;
            }
            while (cursorQuery.moveToNext()) {
                if (!cursorQuery.isNull(columnIndex) && (arrayList = _map.get(cursorQuery.getString(columnIndex))) != null) {
                    arrayList.add(cursorQuery.getString(0));
                }
            }
        } finally {
            cursorQuery.close();
        }
    }
    public void __fetchRelationshipWorkProgressAsandroidxWorkData(final ArrayMap<String, ArrayList<Data>> _map) {
        ArrayList<Data> arrayList;
        Set<String> setKeySet = _map.keySet();
        if (setKeySet.isEmpty()) {
            return;
        }
        if (_map.size() > 999) {
            ArrayMap<String, ArrayList<Data>> arrayMap = new ArrayMap<>(RoomDatabase.MAX_BIND_PARAMETER_CNT);
            int size = _map.size();
            int i = 0;
            int i2 = 0;
            while (i < size) {
                arrayMap.put(_map.keyAt(i), _map.valueAt(i));
                i++;
                i2++;
                if (i2 == 999) {
                    __fetchRelationshipWorkProgressAsandroidxWorkData(arrayMap);
                    arrayMap = new ArrayMap<>(RoomDatabase.MAX_BIND_PARAMETER_CNT);
                    i2 = 0;
                }
            }
            if (i2 > 0) {
                __fetchRelationshipWorkProgressAsandroidxWorkData(arrayMap);
                return;
            }
            return;
        }
        StringBuilder sbNewStringBuilder = StringUtil.newStringBuilder();
        sbNewStringBuilder.append("SELECT `progress`,`work_spec_id` FROM `WorkProgress` WHERE `work_spec_id` IN (");
        int size2 = setKeySet.size();
        StringUtil.appendPlaceholders(sbNewStringBuilder, size2);
        sbNewStringBuilder.append(")");
        RoomSQLiteQuery roomSQLiteQueryAcquire = RoomSQLiteQuery.acquire(sbNewStringBuilder.toString(), size2);
        int i3 = 1;
        for (String str : setKeySet) {
            if (str == null) {
                roomSQLiteQueryAcquire.bindNull(i3);
            } else {
                roomSQLiteQueryAcquire.bindString(i3, str);
            }
            i3++;
        }
        Cursor cursorQuery = DBUtil.query(this.__db, roomSQLiteQueryAcquire, false, null);
        try {
            int columnIndex = CursorUtil.getColumnIndex(cursorQuery, "work_spec_id");
            if (columnIndex == -1) {
                return;
            }
            while (cursorQuery.moveToNext()) {
                if (!cursorQuery.isNull(columnIndex) && (arrayList = _map.get(cursorQuery.getString(columnIndex))) != null) {
                    arrayList.add(Data.fromByteArray(cursorQuery.getBlob(0)));
                }
            }
        } finally {
            cursorQuery.close();
        }
    }
}

