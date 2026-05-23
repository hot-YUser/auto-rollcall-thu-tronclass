package androidx.camera.video;

import android.net.Uri;
final class AutoValue_OutputResults extends OutputResults {
    private final Uri outputUri;

    AutoValue_OutputResults(Uri uri) {
        if (uri == null) {
            throw new NullPointerException("Null outputUri");
        }
        this.outputUri = uri;
    }

    @Override // androidx.camera.video.OutputResults
    public Uri getOutputUri() {
        return this.outputUri;
    }

    public String toString() {
        return "OutputResults{outputUri=" + this.outputUri + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof OutputResults) {
            return this.outputUri.equals(((OutputResults) obj).getOutputUri());
        }
        return false;
    }

    public int hashCode() {
        return this.outputUri.hashCode() ^ 1000003;
    }
}

