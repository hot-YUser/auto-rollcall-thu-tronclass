package androidx.core.app;

import androidx.core.util.Consumer;
public interface OnPictureInPictureModeChangedProvider {
    void addOnPictureInPictureModeChangedListener(Consumer<PictureInPictureModeChangedInfo> consumer);

    void removeOnPictureInPictureModeChangedListener(Consumer<PictureInPictureModeChangedInfo> consumer);
}

