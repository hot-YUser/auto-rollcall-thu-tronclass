package androidx.core.app;

import android.app.PendingIntent;
import androidx.core.graphics.drawable.IconCompat;
import androidx.versionedparcelable.VersionedParcel;
public class RemoteActionCompatParcelizer {
    public static RemoteActionCompat read(VersionedParcel versionedParcel) {
        RemoteActionCompat remoteActionCompat = new RemoteActionCompat();
        remoteActionCompat.mIcon = (IconCompat) versionedParcel.readVersionedParcelable(remoteActionCompat.mIcon, 1);
        remoteActionCompat.mTitle = versionedParcel.readCharSequence(remoteActionCompat.mTitle, 2);
        remoteActionCompat.mContentDescription = versionedParcel.readCharSequence(remoteActionCompat.mContentDescription, 3);
        remoteActionCompat.mActionIntent = (PendingIntent) versionedParcel.readParcelable(remoteActionCompat.mActionIntent, 4);
        remoteActionCompat.mEnabled = versionedParcel.readBoolean(remoteActionCompat.mEnabled, 5);
        remoteActionCompat.mShouldShowIcon = versionedParcel.readBoolean(remoteActionCompat.mShouldShowIcon, 6);
        return remoteActionCompat;
    }

    public static void write(RemoteActionCompat remoteActionCompat, VersionedParcel versionedParcel) {
        versionedParcel.setSerializationFlags(false, false);
        versionedParcel.writeVersionedParcelable(remoteActionCompat.mIcon, 1);
        versionedParcel.writeCharSequence(remoteActionCompat.mTitle, 2);
        versionedParcel.writeCharSequence(remoteActionCompat.mContentDescription, 3);
        versionedParcel.writeParcelable(remoteActionCompat.mActionIntent, 4);
        versionedParcel.writeBoolean(remoteActionCompat.mEnabled, 5);
        versionedParcel.writeBoolean(remoteActionCompat.mShouldShowIcon, 6);
    }
}

