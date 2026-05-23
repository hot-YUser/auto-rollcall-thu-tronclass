package androidx.browser.trusted;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ResolveInfo;
import android.net.Uri;
import android.os.AsyncTask;
import android.util.Log;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Executor;
public final class TrustedWebActivityServiceConnectionPool {
    private static final String TAG = "TWAConnectionPool";
    private final Map<Uri, ConnectionHolder> mConnections = new HashMap();
    private final Context mContext;

    private TrustedWebActivityServiceConnectionPool(Context context) {
        this.mContext = context.getApplicationContext();
    }

    public static TrustedWebActivityServiceConnectionPool create(Context context) {
        return new TrustedWebActivityServiceConnectionPool(context);
    }

    public ListenableFuture<TrustedWebActivityServiceConnection> connect(final Uri uri, Set<Token> set, Executor executor) {
        ConnectionHolder connectionHolder = this.mConnections.get(uri);
        if (connectionHolder != null) {
            return connectionHolder.getServiceWrapper();
        }
        Intent intentCreateServiceIntent = createServiceIntent(this.mContext, uri, set, true);
        if (intentCreateServiceIntent == null) {
            return FutureUtils.immediateFailedFuture(new IllegalArgumentException("No service exists for scope"));
        }
        ConnectionHolder connectionHolder2 = new ConnectionHolder(new Runnable() { // from class: androidx.browser.trusted.TrustedWebActivityServiceConnectionPool$$ExternalSyntheticLambda0
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m7x9cdfbfef(uri);
            }
        });
        this.mConnections.put(uri, connectionHolder2);
        new BindToServiceAsyncTask(this.mContext, intentCreateServiceIntent, connectionHolder2).executeOnExecutor(executor, new Void[0]);
        return connectionHolder2.getServiceWrapper();
    }
    /* synthetic */ void m7x9cdfbfef(Uri uri) {
        this.mConnections.remove(uri);
    }

    static class BindToServiceAsyncTask extends AsyncTask<Void, Void, Exception> {
        private final Context mAppContext;
        private final ConnectionHolder mConnection;
        private final Intent mIntent;

        BindToServiceAsyncTask(Context context, Intent intent, ConnectionHolder connectionHolder) {
            this.mAppContext = context.getApplicationContext();
            this.mIntent = intent;
            this.mConnection = connectionHolder;
        }
        @Override // android.os.AsyncTask
        public Exception doInBackground(Void... voidArr) {
            try {
                if (this.mAppContext.bindService(this.mIntent, this.mConnection, 1)) {
                    return null;
                }
                this.mAppContext.unbindService(this.mConnection);
                return new IllegalStateException("Could not bind to the service");
            } catch (SecurityException e) {
                Log.w(TrustedWebActivityServiceConnectionPool.TAG, "SecurityException while binding.", e);
                return e;
            }
        }
        @Override // android.os.AsyncTask
        public void onPostExecute(Exception exc) {
            if (exc != null) {
                this.mConnection.cancel(exc);
            }
        }
    }

    public boolean serviceExistsForScope(Uri uri, Set<Token> set) {
        return (this.mConnections.get(uri) == null && createServiceIntent(this.mContext, uri, set, false) == null) ? false : true;
    }

    void unbindAllConnections() {
        Iterator<ConnectionHolder> it = this.mConnections.values().iterator();
        while (it.hasNext()) {
            this.mContext.unbindService(it.next());
        }
        this.mConnections.clear();
    }

    private Intent createServiceIntent(Context context, Uri uri, Set<Token> set, boolean z) {
        if (set == null || set.size() == 0) {
            return null;
        }
        Intent intent = new Intent();
        intent.setData(uri);
        intent.setAction("android.intent.action.VIEW");
        Iterator<ResolveInfo> it = context.getPackageManager().queryIntentActivities(intent, 65536).iterator();
        String str = null;
        while (it.hasNext()) {
            String str2 = it.next().activityInfo.packageName;
            Iterator<Token> it2 = set.iterator();
            while (true) {
                if (!it2.hasNext()) {
                    break;
                }
                if (it2.next().matches(str2, context.getPackageManager())) {
                    str = str2;
                    break;
                }
            }
        }
        if (str == null) {
            if (z) {
                Log.w(TAG, "No TWA candidates for " + uri + " have been registered.");
            }
            return null;
        }
        Intent intent2 = new Intent();
        intent2.setPackage(str);
        intent2.setAction(TrustedWebActivityService.ACTION_TRUSTED_WEB_ACTIVITY_SERVICE);
        ResolveInfo resolveInfoResolveService = context.getPackageManager().resolveService(intent2, 131072);
        if (resolveInfoResolveService == null) {
            if (z) {
                Log.w(TAG, "Could not find TWAService for " + str);
            }
            return null;
        }
        if (z) {
            Log.i(TAG, "Found " + resolveInfoResolveService.serviceInfo.name + " to handle request for " + uri);
        }
        Intent intent3 = new Intent();
        intent3.setComponent(new ComponentName(str, resolveInfoResolveService.serviceInfo.name));
        return intent3;
    }
}

