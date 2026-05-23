package androidx.camera.core.impl;
public interface EncoderProfilesProvider {
    public static final EncoderProfilesProvider EMPTY = new EncoderProfilesProvider() { // from class: androidx.camera.core.impl.EncoderProfilesProvider.1
        @Override // androidx.camera.core.impl.EncoderProfilesProvider
        public EncoderProfilesProxy getAll(int i) {
            return null;
        }

        @Override // androidx.camera.core.impl.EncoderProfilesProvider
        public boolean hasProfile(int i) {
            return false;
        }
    };

    EncoderProfilesProxy getAll(int i);

    boolean hasProfile(int i);
}

