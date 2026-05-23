package androidx.camera.video;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.location.Location;
import android.net.Uri;
import androidx.camera.video.MediaStoreOutputOptions;
final class AutoValue_MediaStoreOutputOptions_MediaStoreOutputOptionsInternal extends MediaStoreOutputOptions.MediaStoreOutputOptionsInternal {
    private final Uri collectionUri;
    private final ContentResolver contentResolver;
    private final ContentValues contentValues;
    private final long durationLimitMillis;
    private final long fileSizeLimit;
    private final Location location;

    private AutoValue_MediaStoreOutputOptions_MediaStoreOutputOptionsInternal(long j, long j2, Location location, ContentResolver contentResolver, Uri uri, ContentValues contentValues) {
        this.fileSizeLimit = j;
        this.durationLimitMillis = j2;
        this.location = location;
        this.contentResolver = contentResolver;
        this.collectionUri = uri;
        this.contentValues = contentValues;
    }

    @Override // androidx.camera.video.OutputOptions.OutputOptionsInternal
    long getFileSizeLimit() {
        return this.fileSizeLimit;
    }

    @Override // androidx.camera.video.OutputOptions.OutputOptionsInternal
    long getDurationLimitMillis() {
        return this.durationLimitMillis;
    }

    @Override // androidx.camera.video.OutputOptions.OutputOptionsInternal
    Location getLocation() {
        return this.location;
    }

    @Override // androidx.camera.video.MediaStoreOutputOptions.MediaStoreOutputOptionsInternal
    ContentResolver getContentResolver() {
        return this.contentResolver;
    }

    @Override // androidx.camera.video.MediaStoreOutputOptions.MediaStoreOutputOptionsInternal
    Uri getCollectionUri() {
        return this.collectionUri;
    }

    @Override // androidx.camera.video.MediaStoreOutputOptions.MediaStoreOutputOptionsInternal
    ContentValues getContentValues() {
        return this.contentValues;
    }

    public String toString() {
        return "MediaStoreOutputOptionsInternal{fileSizeLimit=" + this.fileSizeLimit + ", durationLimitMillis=" + this.durationLimitMillis + ", location=" + this.location + ", contentResolver=" + this.contentResolver + ", collectionUri=" + this.collectionUri + ", contentValues=" + this.contentValues + "}";
    }

    public boolean equals(Object obj) {
        Location location;
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof MediaStoreOutputOptions.MediaStoreOutputOptionsInternal)) {
            return false;
        }
        MediaStoreOutputOptions.MediaStoreOutputOptionsInternal mediaStoreOutputOptionsInternal = (MediaStoreOutputOptions.MediaStoreOutputOptionsInternal) obj;
        return this.fileSizeLimit == mediaStoreOutputOptionsInternal.getFileSizeLimit() && this.durationLimitMillis == mediaStoreOutputOptionsInternal.getDurationLimitMillis() && ((location = this.location) != null ? location.equals(mediaStoreOutputOptionsInternal.getLocation()) : mediaStoreOutputOptionsInternal.getLocation() == null) && this.contentResolver.equals(mediaStoreOutputOptionsInternal.getContentResolver()) && this.collectionUri.equals(mediaStoreOutputOptionsInternal.getCollectionUri()) && this.contentValues.equals(mediaStoreOutputOptionsInternal.getContentValues());
    }

    public int hashCode() {
        long j = this.fileSizeLimit;
        long j2 = this.durationLimitMillis;
        int i = (((((int) (j ^ (j >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j2 >>> 32) ^ j2))) * 1000003;
        Location location = this.location;
        return ((((((i ^ (location == null ? 0 : location.hashCode())) * 1000003) ^ this.contentResolver.hashCode()) * 1000003) ^ this.collectionUri.hashCode()) * 1000003) ^ this.contentValues.hashCode();
    }

    static final class Builder extends MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder {
        private Uri collectionUri;
        private ContentResolver contentResolver;
        private ContentValues contentValues;
        private Long durationLimitMillis;
        private Long fileSizeLimit;
        private Location location;

        Builder() {
        }
        /* high-level source view WARN: Can't rename method to resolve collision */
        @Override // androidx.camera.video.OutputOptions.OutputOptionsInternal.Builder
        public MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder setFileSizeLimit(long j) {
            this.fileSizeLimit = Long.valueOf(j);
            return this;
        }
        /* high-level source view WARN: Can't rename method to resolve collision */
        @Override // androidx.camera.video.OutputOptions.OutputOptionsInternal.Builder
        public MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder setDurationLimitMillis(long j) {
            this.durationLimitMillis = Long.valueOf(j);
            return this;
        }
        /* high-level source view WARN: Can't rename method to resolve collision */
        @Override // androidx.camera.video.OutputOptions.OutputOptionsInternal.Builder
        public MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder setLocation(Location location) {
            this.location = location;
            return this;
        }

        @Override // androidx.camera.video.MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder
        MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder setContentResolver(ContentResolver contentResolver) {
            if (contentResolver == null) {
                throw new NullPointerException("Null contentResolver");
            }
            this.contentResolver = contentResolver;
            return this;
        }

        @Override // androidx.camera.video.MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder
        MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder setCollectionUri(Uri uri) {
            if (uri == null) {
                throw new NullPointerException("Null collectionUri");
            }
            this.collectionUri = uri;
            return this;
        }

        @Override // androidx.camera.video.MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder
        MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder setContentValues(ContentValues contentValues) {
            if (contentValues == null) {
                throw new NullPointerException("Null contentValues");
            }
            this.contentValues = contentValues;
            return this;
        }
        @Override // androidx.camera.video.MediaStoreOutputOptions.MediaStoreOutputOptionsInternal.Builder, androidx.camera.video.OutputOptions.OutputOptionsInternal.Builder
        public MediaStoreOutputOptions.MediaStoreOutputOptionsInternal build() {
            String str;
            if (this.fileSizeLimit != null) {
                str = "";
            } else {
                str = " fileSizeLimit";
            }
            if (this.durationLimitMillis == null) {
                str = str + " durationLimitMillis";
            }
            if (this.contentResolver == null) {
                str = str + " contentResolver";
            }
            if (this.collectionUri == null) {
                str = str + " collectionUri";
            }
            if (this.contentValues == null) {
                str = str + " contentValues";
            }
            if (!str.isEmpty()) {
                throw new IllegalStateException("Missing required properties:" + str);
            }
            return new AutoValue_MediaStoreOutputOptions_MediaStoreOutputOptionsInternal(this.fileSizeLimit.longValue(), this.durationLimitMillis.longValue(), this.location, this.contentResolver, this.collectionUri, this.contentValues);
        }
    }
}

