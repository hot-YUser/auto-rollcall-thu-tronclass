package com.google.android.gms.dynamic;

import android.R;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.internal.ConnectionErrorMessages;
import com.google.android.gms.dynamic.LifecycleDelegate;
import java.util.LinkedList;
public abstract class DeferredLifecycleHelper<T extends LifecycleDelegate> {
    private T zarf;
    private Bundle zarg;
    private LinkedList<zaa> zarh;
    private final OnDelegateCreatedListener<T> zari = new com.google.android.gms.dynamic.zaa(this);
    interface zaa {
        int getState();

        void zaa(LifecycleDelegate lifecycleDelegate);
    }

    protected abstract void createDelegate(OnDelegateCreatedListener<T> onDelegateCreatedListener);

    public T getDelegate() {
        return this.zarf;
    }

    private final void zal(int i) {
        while (!this.zarh.isEmpty() && this.zarh.getLast().getState() >= i) {
            this.zarh.removeLast();
        }
    }

    private final void zaa(Bundle bundle, zaa zaaVar) {
        T t = this.zarf;
        if (t != null) {
            zaaVar.zaa(t);
            return;
        }
        if (this.zarh == null) {
            this.zarh = new LinkedList<>();
        }
        this.zarh.add(zaaVar);
        if (bundle != null) {
            Bundle bundle2 = this.zarg;
            if (bundle2 == null) {
                this.zarg = (Bundle) bundle.clone();
            } else {
                bundle2.putAll(bundle);
            }
        }
        createDelegate(this.zari);
    }

    public void onInflate(Activity activity, Bundle bundle, Bundle bundle2) {
        zaa(bundle2, new zab(this, activity, bundle, bundle2));
    }

    public void onCreate(Bundle bundle) {
        zaa(bundle, new zac(this, bundle));
    }

    public View onCreateView(LayoutInflater layoutInflater, ViewGroup viewGroup, Bundle bundle) {
        FrameLayout frameLayout = new FrameLayout(layoutInflater.getContext());
        zaa(bundle, new zad(this, frameLayout, layoutInflater, viewGroup, bundle));
        if (this.zarf == null) {
            handleGooglePlayUnavailable(frameLayout);
        }
        return frameLayout;
    }

    protected void handleGooglePlayUnavailable(FrameLayout frameLayout) {
        showGooglePlayUnavailableMessage(frameLayout);
    }

    public static void showGooglePlayUnavailableMessage(FrameLayout frameLayout) {
        GoogleApiAvailability googleApiAvailability = GoogleApiAvailability.getInstance();
        Context context = frameLayout.getContext();
        int iIsGooglePlayServicesAvailable = googleApiAvailability.isGooglePlayServicesAvailable(context);
        String errorMessage = ConnectionErrorMessages.getErrorMessage(context, iIsGooglePlayServicesAvailable);
        String errorDialogButtonMessage = ConnectionErrorMessages.getErrorDialogButtonMessage(context, iIsGooglePlayServicesAvailable);
        LinearLayout linearLayout = new LinearLayout(frameLayout.getContext());
        linearLayout.setOrientation(1);
        linearLayout.setLayoutParams(new FrameLayout.LayoutParams(-2, -2));
        frameLayout.addView(linearLayout);
        TextView textView = new TextView(frameLayout.getContext());
        textView.setLayoutParams(new FrameLayout.LayoutParams(-2, -2));
        textView.setText(errorMessage);
        linearLayout.addView(textView);
        Intent errorResolutionIntent = googleApiAvailability.getErrorResolutionIntent(context, iIsGooglePlayServicesAvailable, null);
        if (errorResolutionIntent != null) {
            Button button = new Button(context);
            button.setId(R.id.button1);
            button.setLayoutParams(new FrameLayout.LayoutParams(-2, -2));
            button.setText(errorDialogButtonMessage);
            linearLayout.addView(button);
            button.setOnClickListener(new zae(context, errorResolutionIntent));
        }
    }

    public void onStart() {
        zaa((Bundle) null, new zaf(this));
    }

    public void onResume() {
        zaa((Bundle) null, new zag(this));
    }

    public void onPause() {
        T t = this.zarf;
        if (t != null) {
            t.onPause();
        } else {
            zal(5);
        }
    }

    public void onStop() {
        T t = this.zarf;
        if (t != null) {
            t.onStop();
        } else {
            zal(4);
        }
    }

    public void onDestroyView() {
        T t = this.zarf;
        if (t != null) {
            t.onDestroyView();
        } else {
            zal(2);
        }
    }

    public void onDestroy() {
        T t = this.zarf;
        if (t != null) {
            t.onDestroy();
        } else {
            zal(1);
        }
    }

    public void onSaveInstanceState(Bundle bundle) {
        T t = this.zarf;
        if (t != null) {
            t.onSaveInstanceState(bundle);
            return;
        }
        Bundle bundle2 = this.zarg;
        if (bundle2 != null) {
            bundle.putAll(bundle2);
        }
    }

    public void onLowMemory() {
        T t = this.zarf;
        if (t != null) {
            t.onLowMemory();
        }
    }

    static /* synthetic */ LifecycleDelegate zab(DeferredLifecycleHelper deferredLifecycleHelper) {
        return deferredLifecycleHelper.zarf;
    }

    static /* synthetic */ Bundle zaa(DeferredLifecycleHelper deferredLifecycleHelper, Bundle bundle) {
        deferredLifecycleHelper.zarg = null;
        return null;
    }
}

