package androidx.camera.core;

import androidx.core.util.Preconditions;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;
public final class FocusMeteringAction {
    static final long DEFAULT_AUTOCANCEL_DURATION = 5000;
    static final int DEFAULT_METERING_MODE = 7;
    public static final int FLAG_AE = 2;
    public static final int FLAG_AF = 1;
    public static final int FLAG_AWB = 4;
    private final long mAutoCancelDurationInMillis;
    private final List<MeteringPoint> mMeteringPointsAe;
    private final List<MeteringPoint> mMeteringPointsAf;
    private final List<MeteringPoint> mMeteringPointsAwb;

    @Retention(RetentionPolicy.SOURCE)
    public @interface MeteringMode {
    }

    FocusMeteringAction(Builder builder) {
        this.mMeteringPointsAf = Collections.unmodifiableList(builder.mMeteringPointsAf);
        this.mMeteringPointsAe = Collections.unmodifiableList(builder.mMeteringPointsAe);
        this.mMeteringPointsAwb = Collections.unmodifiableList(builder.mMeteringPointsAwb);
        this.mAutoCancelDurationInMillis = builder.mAutoCancelDurationInMillis;
    }

    public long getAutoCancelDurationInMillis() {
        return this.mAutoCancelDurationInMillis;
    }

    public List<MeteringPoint> getMeteringPointsAf() {
        return this.mMeteringPointsAf;
    }

    public List<MeteringPoint> getMeteringPointsAe() {
        return this.mMeteringPointsAe;
    }

    public List<MeteringPoint> getMeteringPointsAwb() {
        return this.mMeteringPointsAwb;
    }

    public boolean isAutoCancelEnabled() {
        return this.mAutoCancelDurationInMillis > 0;
    }

    public static class Builder {
        long mAutoCancelDurationInMillis;
        final List<MeteringPoint> mMeteringPointsAe;
        final List<MeteringPoint> mMeteringPointsAf;
        final List<MeteringPoint> mMeteringPointsAwb;

        public Builder(MeteringPoint meteringPoint) {
            this(meteringPoint, 7);
        }

        public Builder(MeteringPoint meteringPoint, int i) {
            this.mMeteringPointsAf = new ArrayList();
            this.mMeteringPointsAe = new ArrayList();
            this.mMeteringPointsAwb = new ArrayList();
            this.mAutoCancelDurationInMillis = FocusMeteringAction.DEFAULT_AUTOCANCEL_DURATION;
            addPoint(meteringPoint, i);
        }

        public Builder(FocusMeteringAction focusMeteringAction) {
            ArrayList arrayList = new ArrayList();
            this.mMeteringPointsAf = arrayList;
            ArrayList arrayList2 = new ArrayList();
            this.mMeteringPointsAe = arrayList2;
            ArrayList arrayList3 = new ArrayList();
            this.mMeteringPointsAwb = arrayList3;
            this.mAutoCancelDurationInMillis = FocusMeteringAction.DEFAULT_AUTOCANCEL_DURATION;
            arrayList.addAll(focusMeteringAction.getMeteringPointsAf());
            arrayList2.addAll(focusMeteringAction.getMeteringPointsAe());
            arrayList3.addAll(focusMeteringAction.getMeteringPointsAwb());
            this.mAutoCancelDurationInMillis = focusMeteringAction.getAutoCancelDurationInMillis();
        }

        public Builder addPoint(MeteringPoint meteringPoint) {
            return addPoint(meteringPoint, 7);
        }

        public Builder addPoint(MeteringPoint meteringPoint, int i) {
            boolean z = false;
            Preconditions.checkArgument(meteringPoint != null, "Point cannot be null.");
            if (i >= 1 && i <= 7) {
                z = true;
            }
            Preconditions.checkArgument(z, "Invalid metering mode " + i);
            if ((i & 1) != 0) {
                this.mMeteringPointsAf.add(meteringPoint);
            }
            if ((i & 2) != 0) {
                this.mMeteringPointsAe.add(meteringPoint);
            }
            if ((i & 4) != 0) {
                this.mMeteringPointsAwb.add(meteringPoint);
            }
            return this;
        }

        public Builder setAutoCancelDuration(long j, TimeUnit timeUnit) {
            Preconditions.checkArgument(j >= 1, "autoCancelDuration must be at least 1");
            this.mAutoCancelDurationInMillis = timeUnit.toMillis(j);
            return this;
        }

        public Builder disableAutoCancel() {
            this.mAutoCancelDurationInMillis = 0L;
            return this;
        }

        public Builder removePoints(int i) {
            if ((i & 1) != 0) {
                this.mMeteringPointsAf.clear();
            }
            if ((i & 2) != 0) {
                this.mMeteringPointsAe.clear();
            }
            if ((i & 4) != 0) {
                this.mMeteringPointsAwb.clear();
            }
            return this;
        }

        public FocusMeteringAction build() {
            return new FocusMeteringAction(this);
        }
    }
}

