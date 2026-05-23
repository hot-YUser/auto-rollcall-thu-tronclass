package androidx.camera.core.impl;

import androidx.camera.core.impl.quirk.ProfileResolutionQuirk;
public class ResolutionValidatedEncoderProfilesProvider implements EncoderProfilesProvider {
    private final EncoderProfilesResolutionValidator mEncoderProfilesResolutionValidator;
    private final EncoderProfilesProvider mProvider;

    public ResolutionValidatedEncoderProfilesProvider(EncoderProfilesProvider encoderProfilesProvider, Quirks quirks) {
        this.mProvider = encoderProfilesProvider;
        this.mEncoderProfilesResolutionValidator = new EncoderProfilesResolutionValidator(quirks.getAll(ProfileResolutionQuirk.class));
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProvider
    public boolean hasProfile(int i) {
        if (!this.mProvider.hasProfile(i)) {
            return false;
        }
        if (!this.mEncoderProfilesResolutionValidator.hasQuirk()) {
            return true;
        }
        return this.mEncoderProfilesResolutionValidator.hasValidVideoResolution(this.mProvider.getAll(i));
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProvider
    public EncoderProfilesProxy getAll(int i) {
        if (!this.mProvider.hasProfile(i)) {
            return null;
        }
        EncoderProfilesProxy all = this.mProvider.getAll(i);
        return this.mEncoderProfilesResolutionValidator.hasQuirk() ? this.mEncoderProfilesResolutionValidator.filterInvalidVideoResolution(all) : all;
    }
}

