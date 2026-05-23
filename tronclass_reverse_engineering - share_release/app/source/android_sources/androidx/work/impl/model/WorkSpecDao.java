package androidx.work.impl.model;

import androidx.lifecycle.LiveData;
import androidx.work.Data;
import androidx.work.WorkInfo;
import androidx.work.impl.model.WorkSpec;
import java.util.List;
public interface WorkSpecDao {
    void delete(String id);

    List<WorkSpec> getAllEligibleWorkSpecsForScheduling(int maxLimit);

    List<String> getAllUnfinishedWork();

    List<String> getAllWorkSpecIds();

    LiveData<List<String>> getAllWorkSpecIdsLiveData();

    List<WorkSpec> getEligibleWorkForScheduling(int schedulerLimit);

    List<Data> getInputsFromPrerequisites(String id);

    List<WorkSpec> getRecentlyCompletedWork(long startingAt);

    List<WorkSpec> getRunningWork();

    LiveData<Long> getScheduleRequestedAtLiveData(String id);

    List<WorkSpec> getScheduledWork();

    WorkInfo.State getState(String id);

    List<String> getUnfinishedWorkWithName(String name);

    List<String> getUnfinishedWorkWithTag(String tag);

    WorkSpec getWorkSpec(String id);

    List<WorkSpec.IdAndState> getWorkSpecIdAndStatesForName(String name);

    WorkSpec[] getWorkSpecs(List<String> ids);

    WorkSpec.WorkInfoPojo getWorkStatusPojoForId(String id);

    List<WorkSpec.WorkInfoPojo> getWorkStatusPojoForIds(List<String> ids);

    List<WorkSpec.WorkInfoPojo> getWorkStatusPojoForName(String name);

    List<WorkSpec.WorkInfoPojo> getWorkStatusPojoForTag(String tag);

    LiveData<List<WorkSpec.WorkInfoPojo>> getWorkStatusPojoLiveDataForIds(List<String> ids);

    LiveData<List<WorkSpec.WorkInfoPojo>> getWorkStatusPojoLiveDataForName(String name);

    LiveData<List<WorkSpec.WorkInfoPojo>> getWorkStatusPojoLiveDataForTag(String tag);

    boolean hasUnfinishedWork();

    int incrementWorkSpecRunAttemptCount(String id);

    void insertWorkSpec(WorkSpec workSpec);

    int markWorkSpecScheduled(String id, long startTime);

    void pruneFinishedWorkWithZeroDependentsIgnoringKeepForAtLeast();

    int resetScheduledState();

    int resetWorkSpecRunAttemptCount(String id);

    void setOutput(String id, Data output);

    void setPeriodStartTime(String id, long periodStartTime);

    int setState(WorkInfo.State state, String... ids);
}

