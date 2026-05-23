package androidx.work.impl.model;

import java.util.List;
public interface WorkNameDao {
    List<String> getNamesForWorkSpecId(String workSpecId);

    List<String> getWorkSpecIdsWithName(String name);

    void insert(WorkName workName);
}

