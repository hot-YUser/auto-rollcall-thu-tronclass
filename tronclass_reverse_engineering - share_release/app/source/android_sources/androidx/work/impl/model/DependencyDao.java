package androidx.work.impl.model;

import java.util.List;
public interface DependencyDao {
    List<String> getDependentWorkIds(String id);

    List<String> getPrerequisites(String id);

    boolean hasCompletedAllPrerequisites(String id);

    boolean hasDependents(String id);

    void insertDependency(Dependency dependency);
}

