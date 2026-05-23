package androidx.browser.customtabs;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.IBinder;
import android.os.RemoteException;
import android.support.customtabs.ICustomTabsCallback;
import android.support.customtabs.IPostMessageService;
import android.util.Log;
public abstract class PostMessageServiceConnection implements PostMessageBackend, ServiceConnection {
    private static final String TAG = "PostMessageServConn";
    private final Object mLock = new Object();
    private boolean mMessageChannelCreated;
    private String mPackageName;
    private IPostMessageService mService;
    private final ICustomTabsCallback mSessionBinder;

    public void onPostMessageServiceDisconnected() {
    }

    public PostMessageServiceConnection(CustomTabsSessionToken customTabsSessionToken) {
        IBinder callbackBinder = customTabsSessionToken.getCallbackBinder();
        if (callbackBinder == null) {
            throw new IllegalArgumentException("Provided session must have binder.");
        }
        this.mSessionBinder = ICustomTabsCallback.Stub.asInterface(callbackBinder);
    }

    public void setPackageName(String str) {
        this.mPackageName = str;
    }

    public boolean bindSessionToPostMessageService(Context context, String str) {
        Intent intent = new Intent();
        intent.setClassName(str, PostMessageService.class.getName());
        boolean zBindService = context.bindService(intent, this, 1);
        if (!zBindService) {
            Log.w(TAG, "Could not bind to PostMessageService in client.");
        }
        return zBindService;
    }

    public boolean bindSessionToPostMessageService(Context context) {
        String str = this.mPackageName;
        if (str == null) {
            throw new IllegalStateException("setPackageName must be called before bindSessionToPostMessageService.");
        }
        return bindSessionToPostMessageService(context, str);
    }

    private boolean isBoundToService() {
        return this.mService != null;
    }

    public void unbindFromContext(Context context) {
        if (isBoundToService()) {
            context.unbindService(this);
            this.mService = null;
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        this.mService = IPostMessageService.Stub.asInterface(iBinder);
        onPostMessageServiceConnected();
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        this.mService = null;
        onPostMessageServiceDisconnected();
    }

    @Override // androidx.browser.customtabs.PostMessageBackend
    public final boolean onNotifyMessageChannelReady(Bundle bundle) {
        return notifyMessageChannelReady(bundle);
    }

    public final boolean notifyMessageChannelReady(Bundle bundle) {
        this.mMessageChannelCreated = true;
        return notifyMessageChannelReadyInternal(bundle);
    }

    private boolean notifyMessageChannelReadyInternal(Bundle bundle) {
        if (this.mService == null) {
            return false;
        }
        synchronized (this.mLock) {
            try {
                try {
                    this.mService.onMessageChannelReady(this.mSessionBinder, bundle);
                } catch (RemoteException unused) {
                    return false;
                }
            } catch (Throwable th) {
                throw th;
            }
        }
        return true;
    }

    @Override // androidx.browser.customtabs.PostMessageBackend
    public final boolean onPostMessage(String str, Bundle bundle) {
        return postMessage(str, bundle);
    }

    public final boolean postMessage(String str, Bundle bundle) {
        if (this.mService == null) {
            return false;
        }
        synchronized (this.mLock) {
            try {
                try {
                    this.mService.onPostMessage(this.mSessionBinder, str, bundle);
                } catch (RemoteException unused) {
                    return false;
                }
            } catch (Throwable th) {
                throw th;
            }
        }
        return true;
    }

    @Override // androidx.browser.customtabs.PostMessageBackend
    public void onDisconnectChannel(Context context) {
        unbindFromContext(context);
    }

    public void onPostMessageServiceConnected() {
        if (this.mMessageChannelCreated) {
            notifyMessageChannelReadyInternal(null);
        }
    }

    public void cleanup(Context context) {
        if (isBoundToService()) {
            unbindFromContext(context);
        }
    }
}

