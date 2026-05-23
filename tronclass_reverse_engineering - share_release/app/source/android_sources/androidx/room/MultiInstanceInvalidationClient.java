package androidx.room;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.os.RemoteException;
import android.util.Log;
import androidx.room.IMultiInstanceInvalidationCallback;
import androidx.room.IMultiInstanceInvalidationService;
import androidx.room.InvalidationTracker;
import java.util.Set;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicBoolean;
class MultiInstanceInvalidationClient {
    final Context mAppContext;
    int mClientId;
    final Executor mExecutor;
    final InvalidationTracker mInvalidationTracker;
    final String mName;
    final InvalidationTracker.Observer mObserver;
    final Runnable mRemoveObserverRunnable;
    IMultiInstanceInvalidationService mService;
    final ServiceConnection mServiceConnection;
    final Runnable mSetUpRunnable;
    private final Runnable mTearDownRunnable;
    final IMultiInstanceInvalidationCallback mCallback = new IMultiInstanceInvalidationCallback.Stub() { // from class: androidx.room.MultiInstanceInvalidationClient.1
        @Override // androidx.room.IMultiInstanceInvalidationCallback
        public void onInvalidation(final String[] strArr) {
            MultiInstanceInvalidationClient.this.mExecutor.execute(new Runnable() { // from class: androidx.room.MultiInstanceInvalidationClient.1.1
                @Override // java.lang.Runnable
                public void run() {
                    MultiInstanceInvalidationClient.this.mInvalidationTracker.notifyObserversByTableNames(strArr);
                }
            });
        }
    };
    final AtomicBoolean mStopped = new AtomicBoolean(false);

    MultiInstanceInvalidationClient(Context context, String str, InvalidationTracker invalidationTracker, Executor executor) {
        ServiceConnection serviceConnection = new ServiceConnection() { // from class: androidx.room.MultiInstanceInvalidationClient.2
            @Override // android.content.ServiceConnection
            public void onServiceConnected(ComponentName componentName, IBinder iBinder) {
                MultiInstanceInvalidationClient.this.mService = IMultiInstanceInvalidationService.Stub.asInterface(iBinder);
                MultiInstanceInvalidationClient.this.mExecutor.execute(MultiInstanceInvalidationClient.this.mSetUpRunnable);
            }

            @Override // android.content.ServiceConnection
            public void onServiceDisconnected(ComponentName componentName) {
                MultiInstanceInvalidationClient.this.mExecutor.execute(MultiInstanceInvalidationClient.this.mRemoveObserverRunnable);
                MultiInstanceInvalidationClient.this.mService = null;
            }
        };
        this.mServiceConnection = serviceConnection;
        this.mSetUpRunnable = new Runnable() { // from class: androidx.room.MultiInstanceInvalidationClient.3
            @Override // java.lang.Runnable
            public void run() {
                try {
                    IMultiInstanceInvalidationService iMultiInstanceInvalidationService = MultiInstanceInvalidationClient.this.mService;
                    if (iMultiInstanceInvalidationService != null) {
                        MultiInstanceInvalidationClient multiInstanceInvalidationClient = MultiInstanceInvalidationClient.this;
                        multiInstanceInvalidationClient.mClientId = iMultiInstanceInvalidationService.registerCallback(multiInstanceInvalidationClient.mCallback, MultiInstanceInvalidationClient.this.mName);
                        MultiInstanceInvalidationClient.this.mInvalidationTracker.addObserver(MultiInstanceInvalidationClient.this.mObserver);
                    }
                } catch (RemoteException e) {
                    Log.w("ROOM", "Cannot register multi-instance invalidation callback", e);
                }
            }
        };
        this.mRemoveObserverRunnable = new Runnable() { // from class: androidx.room.MultiInstanceInvalidationClient.4
            @Override // java.lang.Runnable
            public void run() {
                MultiInstanceInvalidationClient.this.mInvalidationTracker.removeObserver(MultiInstanceInvalidationClient.this.mObserver);
            }
        };
        this.mTearDownRunnable = new Runnable() { // from class: androidx.room.MultiInstanceInvalidationClient.5
            @Override // java.lang.Runnable
            public void run() {
                MultiInstanceInvalidationClient.this.mInvalidationTracker.removeObserver(MultiInstanceInvalidationClient.this.mObserver);
                try {
                    IMultiInstanceInvalidationService iMultiInstanceInvalidationService = MultiInstanceInvalidationClient.this.mService;
                    if (iMultiInstanceInvalidationService != null) {
                        iMultiInstanceInvalidationService.unregisterCallback(MultiInstanceInvalidationClient.this.mCallback, MultiInstanceInvalidationClient.this.mClientId);
                    }
                } catch (RemoteException e) {
                    Log.w("ROOM", "Cannot unregister multi-instance invalidation callback", e);
                }
                MultiInstanceInvalidationClient.this.mAppContext.unbindService(MultiInstanceInvalidationClient.this.mServiceConnection);
            }
        };
        Context applicationContext = context.getApplicationContext();
        this.mAppContext = applicationContext;
        this.mName = str;
        this.mInvalidationTracker = invalidationTracker;
        this.mExecutor = executor;
        this.mObserver = new InvalidationTracker.Observer((String[]) invalidationTracker.mTableIdLookup.keySet().toArray(new String[0])) { // from class: androidx.room.MultiInstanceInvalidationClient.6
            @Override // androidx.room.InvalidationTracker.Observer
            boolean isRemote() {
                return true;
            }

            @Override // androidx.room.InvalidationTracker.Observer
            public void onInvalidated(Set<String> set) {
                if (MultiInstanceInvalidationClient.this.mStopped.get()) {
                    return;
                }
                try {
                    IMultiInstanceInvalidationService iMultiInstanceInvalidationService = MultiInstanceInvalidationClient.this.mService;
                    if (iMultiInstanceInvalidationService != null) {
                        iMultiInstanceInvalidationService.broadcastInvalidation(MultiInstanceInvalidationClient.this.mClientId, (String[]) set.toArray(new String[0]));
                    }
                } catch (RemoteException e) {
                    Log.w("ROOM", "Cannot broadcast invalidation", e);
                }
            }
        };
        applicationContext.bindService(new Intent(applicationContext, (Class<?>) MultiInstanceInvalidationService.class), serviceConnection, 1);
    }

    void stop() {
        if (this.mStopped.compareAndSet(false, true)) {
            this.mExecutor.execute(this.mTearDownRunnable);
        }
    }
}

