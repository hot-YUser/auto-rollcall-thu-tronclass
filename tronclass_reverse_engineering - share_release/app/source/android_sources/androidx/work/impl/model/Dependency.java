package androidx.work.impl.model;
public class Dependency {
    public final String prerequisiteId;
    public final String workSpecId;

    public Dependency(String workSpecId, String prerequisiteId) {
        this.workSpecId = workSpecId;
        this.prerequisiteId = prerequisiteId;
    }
}

