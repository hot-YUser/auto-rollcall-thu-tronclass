package androidx.camera.core;

import androidx.camera.core.processing.TargetUtils;
import androidx.core.util.Preconditions;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
public final class UseCaseGroup {
    private final List<CameraEffect> mEffects;
    private final List<UseCase> mUseCases;
    private final ViewPort mViewPort;

    UseCaseGroup(ViewPort viewPort, List<UseCase> list, List<CameraEffect> list2) {
        this.mViewPort = viewPort;
        this.mUseCases = list;
        this.mEffects = list2;
    }

    public ViewPort getViewPort() {
        return this.mViewPort;
    }

    public List<UseCase> getUseCases() {
        return this.mUseCases;
    }

    public List<CameraEffect> getEffects() {
        return this.mEffects;
    }

    public static final class Builder {
        private static final List<Integer> SUPPORTED_TARGETS = Arrays.asList(1, 2, 4, 3, 7);
        private ViewPort mViewPort;
        private final List<UseCase> mUseCases = new ArrayList();
        private final List<CameraEffect> mEffects = new ArrayList();

        public Builder setViewPort(ViewPort viewPort) {
            this.mViewPort = viewPort;
            return this;
        }

        public Builder addEffect(CameraEffect cameraEffect) {
            this.mEffects.add(cameraEffect);
            return this;
        }

        private void checkEffectTargets() {
            Iterator<CameraEffect> it = this.mEffects.iterator();
            int i = 0;
            while (it.hasNext()) {
                int targets = it.next().getTargets();
                TargetUtils.checkSupportedTargets(SUPPORTED_TARGETS, targets);
                int i2 = i & targets;
                if (i2 > 0) {
                    throw new IllegalArgumentException(String.format(Locale.US, "More than one effects has targets %s.", TargetUtils.getHumanReadableName(i2)));
                }
                i |= targets;
            }
        }

        public Builder addUseCase(UseCase useCase) {
            this.mUseCases.add(useCase);
            return this;
        }

        public UseCaseGroup build() {
            Preconditions.checkArgument(!this.mUseCases.isEmpty(), "UseCase must not be empty.");
            checkEffectTargets();
            return new UseCaseGroup(this.mViewPort, this.mUseCases, this.mEffects);
        }
    }
}

