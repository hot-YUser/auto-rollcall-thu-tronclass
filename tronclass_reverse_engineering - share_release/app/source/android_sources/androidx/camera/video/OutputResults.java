package androidx.camera.video;

import android.net.Uri;
import androidx.core.util.Preconditions;
public abstract class OutputResults {
    public abstract Uri getOutputUri();

    static OutputResults of(Uri uri) {
        Preconditions.checkNotNull(uri, "OutputUri cannot be null.");
        return new AutoValue_OutputResults(uri);
    }
}

