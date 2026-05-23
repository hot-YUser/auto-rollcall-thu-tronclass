package androidx.work;

import androidx.work.WorkInfo;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
public final class WorkQuery {
    private final List<UUID> mIds;
    private final List<WorkInfo.State> mStates;
    private final List<String> mTags;
    private final List<String> mUniqueWorkNames;

    WorkQuery(Builder builder) {
        this.mIds = builder.mIds;
        this.mUniqueWorkNames = builder.mUniqueWorkNames;
        this.mTags = builder.mTags;
        this.mStates = builder.mStates;
    }

    public List<UUID> getIds() {
        return this.mIds;
    }

    public List<String> getUniqueWorkNames() {
        return this.mUniqueWorkNames;
    }

    public List<String> getTags() {
        return this.mTags;
    }

    public List<WorkInfo.State> getStates() {
        return this.mStates;
    }

    public static final class Builder {
        List<UUID> mIds = new ArrayList();
        List<String> mUniqueWorkNames = new ArrayList();
        List<String> mTags = new ArrayList();
        List<WorkInfo.State> mStates = new ArrayList();

        private Builder() {
        }

        public static Builder fromIds(List<UUID> ids) {
            Builder builder = new Builder();
            builder.addIds(ids);
            return builder;
        }

        public static Builder fromUniqueWorkNames(List<String> uniqueWorkNames) {
            Builder builder = new Builder();
            builder.addUniqueWorkNames(uniqueWorkNames);
            return builder;
        }

        public static Builder fromTags(List<String> tags) {
            Builder builder = new Builder();
            builder.addTags(tags);
            return builder;
        }

        public static Builder fromStates(List<WorkInfo.State> states) {
            Builder builder = new Builder();
            builder.addStates(states);
            return builder;
        }

        public Builder addIds(List<UUID> ids) {
            this.mIds.addAll(ids);
            return this;
        }

        public Builder addUniqueWorkNames(List<String> uniqueWorkNames) {
            this.mUniqueWorkNames.addAll(uniqueWorkNames);
            return this;
        }

        public Builder addTags(List<String> tags) {
            this.mTags.addAll(tags);
            return this;
        }

        public Builder addStates(List<WorkInfo.State> states) {
            this.mStates.addAll(states);
            return this;
        }

        public WorkQuery build() {
            if (this.mIds.isEmpty() && this.mUniqueWorkNames.isEmpty() && this.mTags.isEmpty() && this.mStates.isEmpty()) {
                throw new IllegalArgumentException("Must specify ids, uniqueNames, tags or states when building a WorkQuery");
            }
            return new WorkQuery(this);
        }
    }
}

