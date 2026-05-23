package androidx.work.impl.model;

import androidx.lifecycle.LiveData;
public interface PreferenceDao {
    Long getLongValue(String key);

    LiveData<Long> getObservableLongValue(String key);

    void insertPreference(Preference preference);
}

