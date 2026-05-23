package androidx.browser.trusted;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import androidx.browser.customtabs.CustomTabColorSchemeParams;
import androidx.browser.customtabs.CustomTabsIntent;
import androidx.browser.customtabs.CustomTabsSession;
import androidx.browser.customtabs.TrustedWebUtils;
import androidx.browser.trusted.TrustedWebActivityDisplayMode;
import androidx.browser.trusted.sharing.ShareData;
import androidx.browser.trusted.sharing.ShareTarget;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public class TrustedWebActivityIntentBuilder {
    public static final String EXTRA_ADDITIONAL_TRUSTED_ORIGINS = "android.support.customtabs.extra.ADDITIONAL_TRUSTED_ORIGINS";
    public static final String EXTRA_DISPLAY_MODE = "androidx.browser.trusted.extra.DISPLAY_MODE";
    public static final String EXTRA_SHARE_DATA = "androidx.browser.trusted.extra.SHARE_DATA";
    public static final String EXTRA_SHARE_TARGET = "androidx.browser.trusted.extra.SHARE_TARGET";
    public static final String EXTRA_SPLASH_SCREEN_PARAMS = "androidx.browser.trusted.EXTRA_SPLASH_SCREEN_PARAMS";
    private List<String> mAdditionalTrustedOrigins;
    private ShareData mShareData;
    private ShareTarget mShareTarget;
    private Bundle mSplashScreenParams;
    private final Uri mUri;
    private final CustomTabsIntent.Builder mIntentBuilder = new CustomTabsIntent.Builder();
    private TrustedWebActivityDisplayMode mDisplayMode = new TrustedWebActivityDisplayMode.DefaultMode();

    public TrustedWebActivityIntentBuilder(Uri uri) {
        this.mUri = uri;
    }

    public TrustedWebActivityIntentBuilder setToolbarColor(int i) {
        this.mIntentBuilder.setToolbarColor(i);
        return this;
    }

    public TrustedWebActivityIntentBuilder setNavigationBarColor(int i) {
        this.mIntentBuilder.setNavigationBarColor(i);
        return this;
    }

    public TrustedWebActivityIntentBuilder setColorScheme(int i) {
        this.mIntentBuilder.setColorScheme(i);
        return this;
    }

    public TrustedWebActivityIntentBuilder setColorSchemeParams(int i, CustomTabColorSchemeParams customTabColorSchemeParams) {
        this.mIntentBuilder.setColorSchemeParams(i, customTabColorSchemeParams);
        return this;
    }

    public TrustedWebActivityIntentBuilder setAdditionalTrustedOrigins(List<String> list) {
        this.mAdditionalTrustedOrigins = list;
        return this;
    }

    public TrustedWebActivityIntentBuilder setSplashScreenParams(Bundle bundle) {
        this.mSplashScreenParams = bundle;
        return this;
    }

    public TrustedWebActivityIntentBuilder setShareParams(ShareTarget shareTarget, ShareData shareData) {
        this.mShareTarget = shareTarget;
        this.mShareData = shareData;
        return this;
    }

    public TrustedWebActivityIntentBuilder setDisplayMode(TrustedWebActivityDisplayMode trustedWebActivityDisplayMode) {
        this.mDisplayMode = trustedWebActivityDisplayMode;
        return this;
    }

    public TrustedWebActivityIntent build(CustomTabsSession customTabsSession) {
        if (customTabsSession == null) {
            throw new NullPointerException("CustomTabsSession is required for launching a TWA");
        }
        this.mIntentBuilder.setSession(customTabsSession);
        Intent intent = this.mIntentBuilder.build().intent;
        intent.setData(this.mUri);
        intent.putExtra(TrustedWebUtils.EXTRA_LAUNCH_AS_TRUSTED_WEB_ACTIVITY, true);
        if (this.mAdditionalTrustedOrigins != null) {
            intent.putExtra(EXTRA_ADDITIONAL_TRUSTED_ORIGINS, new ArrayList(this.mAdditionalTrustedOrigins));
        }
        Bundle bundle = this.mSplashScreenParams;
        if (bundle != null) {
            intent.putExtra(EXTRA_SPLASH_SCREEN_PARAMS, bundle);
        }
        List<Uri> listEmptyList = Collections.emptyList();
        ShareTarget shareTarget = this.mShareTarget;
        if (shareTarget != null && this.mShareData != null) {
            intent.putExtra(EXTRA_SHARE_TARGET, shareTarget.toBundle());
            intent.putExtra(EXTRA_SHARE_DATA, this.mShareData.toBundle());
            if (this.mShareData.uris != null) {
                listEmptyList = this.mShareData.uris;
            }
        }
        intent.putExtra(EXTRA_DISPLAY_MODE, this.mDisplayMode.toBundle());
        return new TrustedWebActivityIntent(intent, listEmptyList);
    }

    public CustomTabsIntent buildCustomTabsIntent() {
        return this.mIntentBuilder.build();
    }

    public Uri getUri() {
        return this.mUri;
    }

    public TrustedWebActivityDisplayMode getDisplayMode() {
        return this.mDisplayMode;
    }
}

