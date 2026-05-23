package androidx.browser.trusted;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.Service;
import android.content.ComponentName;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ServiceInfo;
import android.graphics.BitmapFactory;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcelable;
import android.support.customtabs.trusted.ITrustedWebActivityService;
import androidx.browser.trusted.TrustedWebActivityServiceConnection;
import androidx.core.app.NotificationManagerCompat;
import com.onesignal.OneSignalDbContract;
import java.util.Locale;
public abstract class TrustedWebActivityService extends Service {
    public static final String ACTION_TRUSTED_WEB_ACTIVITY_SERVICE = "android.support.customtabs.trusted.TRUSTED_WEB_ACTIVITY_SERVICE";
    public static final String KEY_SMALL_ICON_BITMAP = "android.support.customtabs.trusted.SMALL_ICON_BITMAP";
    public static final String META_DATA_NAME_SMALL_ICON = "android.support.customtabs.trusted.SMALL_ICON";
    public static final int SMALL_ICON_NOT_SET = -1;
    private NotificationManager mNotificationManager;
    int mVerifiedUid = -1;
    private final ITrustedWebActivityService.Stub mBinder = new ITrustedWebActivityService.Stub() { // from class: androidx.browser.trusted.TrustedWebActivityService.1
        @Override // android.support.customtabs.trusted.ITrustedWebActivityService
        public Bundle areNotificationsEnabled(Bundle bundle) {
            checkCaller();
            return new TrustedWebActivityServiceConnection.ResultArgs(TrustedWebActivityService.this.onAreNotificationsEnabled(TrustedWebActivityServiceConnection.NotificationsEnabledArgs.fromBundle(bundle).channelName)).toBundle();
        }

        @Override // android.support.customtabs.trusted.ITrustedWebActivityService
        public Bundle notifyNotificationWithChannel(Bundle bundle) {
            checkCaller();
            TrustedWebActivityServiceConnection.NotifyNotificationArgs notifyNotificationArgsFromBundle = TrustedWebActivityServiceConnection.NotifyNotificationArgs.fromBundle(bundle);
            return new TrustedWebActivityServiceConnection.ResultArgs(TrustedWebActivityService.this.onNotifyNotificationWithChannel(notifyNotificationArgsFromBundle.platformTag, notifyNotificationArgsFromBundle.platformId, notifyNotificationArgsFromBundle.notification, notifyNotificationArgsFromBundle.channelName)).toBundle();
        }

        @Override // android.support.customtabs.trusted.ITrustedWebActivityService
        public void cancelNotification(Bundle bundle) {
            checkCaller();
            TrustedWebActivityServiceConnection.CancelNotificationArgs cancelNotificationArgsFromBundle = TrustedWebActivityServiceConnection.CancelNotificationArgs.fromBundle(bundle);
            TrustedWebActivityService.this.onCancelNotification(cancelNotificationArgsFromBundle.platformTag, cancelNotificationArgsFromBundle.platformId);
        }

        @Override // android.support.customtabs.trusted.ITrustedWebActivityService
        public Bundle getActiveNotifications() {
            checkCaller();
            return new TrustedWebActivityServiceConnection.ActiveNotificationsArgs(TrustedWebActivityService.this.onGetActiveNotifications()).toBundle();
        }

        @Override // android.support.customtabs.trusted.ITrustedWebActivityService
        public int getSmallIconId() {
            checkCaller();
            return TrustedWebActivityService.this.onGetSmallIconId();
        }

        @Override // android.support.customtabs.trusted.ITrustedWebActivityService
        public Bundle getSmallIconBitmap() {
            checkCaller();
            return TrustedWebActivityService.this.onGetSmallIconBitmap();
        }

        private void checkCaller() {
            if (TrustedWebActivityService.this.mVerifiedUid == -1) {
                String[] packagesForUid = TrustedWebActivityService.this.getPackageManager().getPackagesForUid(getCallingUid());
                int i = 0;
                if (packagesForUid == null) {
                    packagesForUid = new String[0];
                }
                Token tokenLoad = TrustedWebActivityService.this.getTokenStore().load();
                PackageManager packageManager = TrustedWebActivityService.this.getPackageManager();
                if (tokenLoad != null) {
                    int length = packagesForUid.length;
                    while (true) {
                        if (i >= length) {
                            break;
                        }
                        if (tokenLoad.matches(packagesForUid[i], packageManager)) {
                            TrustedWebActivityService.this.mVerifiedUid = getCallingUid();
                            break;
                        }
                        i++;
                    }
                }
            }
            if (TrustedWebActivityService.this.mVerifiedUid != getCallingUid()) {
                throw new SecurityException("Caller is not verified as Trusted Web Activity provider.");
            }
        }
    };

    public abstract TokenStore getTokenStore();

    @Override // android.app.Service
    public void onCreate() {
        super.onCreate();
        this.mNotificationManager = (NotificationManager) getSystemService(OneSignalDbContract.NotificationTable.TABLE_NAME);
    }

    public boolean onAreNotificationsEnabled(String str) {
        ensureOnCreateCalled();
        if (!NotificationManagerCompat.from(this).areNotificationsEnabled()) {
            return false;
        }
        if (Build.VERSION.SDK_INT < 26) {
            return true;
        }
        return NotificationApiHelperForO.isChannelEnabled(this.mNotificationManager, channelNameToId(str));
    }

    public boolean onNotifyNotificationWithChannel(String str, int i, Notification notification, String str2) {
        ensureOnCreateCalled();
        if (!NotificationManagerCompat.from(this).areNotificationsEnabled()) {
            return false;
        }
        if (Build.VERSION.SDK_INT >= 26) {
            String strChannelNameToId = channelNameToId(str2);
            notification = NotificationApiHelperForO.copyNotificationOntoChannel(this, this.mNotificationManager, notification, strChannelNameToId, str2);
            if (!NotificationApiHelperForO.isChannelEnabled(this.mNotificationManager, strChannelNameToId)) {
                return false;
            }
        }
        this.mNotificationManager.notify(str, i, notification);
        return true;
    }

    public void onCancelNotification(String str, int i) {
        ensureOnCreateCalled();
        this.mNotificationManager.cancel(str, i);
    }

    public Parcelable[] onGetActiveNotifications() {
        ensureOnCreateCalled();
        return NotificationApiHelperForM.getActiveNotifications(this.mNotificationManager);
    }

    public Bundle onGetSmallIconBitmap() {
        int iOnGetSmallIconId = onGetSmallIconId();
        Bundle bundle = new Bundle();
        if (iOnGetSmallIconId == -1) {
            return bundle;
        }
        bundle.putParcelable(KEY_SMALL_ICON_BITMAP, BitmapFactory.decodeResource(getResources(), iOnGetSmallIconId));
        return bundle;
    }

    public int onGetSmallIconId() {
        try {
            ServiceInfo serviceInfo = getPackageManager().getServiceInfo(new ComponentName(this, getClass()), 128);
            if (serviceInfo.metaData == null) {
                return -1;
            }
            return serviceInfo.metaData.getInt(META_DATA_NAME_SMALL_ICON, -1);
        } catch (PackageManager.NameNotFoundException unused) {
            return -1;
        }
    }

    @Override // android.app.Service
    public final IBinder onBind(Intent intent) {
        return this.mBinder;
    }

    @Override // android.app.Service
    public final boolean onUnbind(Intent intent) {
        this.mVerifiedUid = -1;
        return super.onUnbind(intent);
    }

    private static String channelNameToId(String str) {
        return str.toLowerCase(Locale.ROOT).replace(' ', '_') + "_channel_id";
    }

    private void ensureOnCreateCalled() {
        if (this.mNotificationManager == null) {
            throw new IllegalStateException("TrustedWebActivityService has not been properly initialized. Did onCreate() call super.onCreate()?");
        }
    }
}

