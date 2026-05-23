package androidx.browser.trusted;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import androidx.core.content.ContextCompat;
import java.util.Iterator;
import java.util.List;
public final class TrustedWebActivityIntent {
    private final Intent mIntent;
    private final List<Uri> mSharedFileUris;

    TrustedWebActivityIntent(Intent intent, List<Uri> list) {
        this.mIntent = intent;
        this.mSharedFileUris = list;
    }

    public void launchTrustedWebActivity(Context context) {
        grantUriPermissionToProvider(context);
        ContextCompat.startActivity(context, this.mIntent, null);
    }

    private void grantUriPermissionToProvider(Context context) {
        Iterator<Uri> it = this.mSharedFileUris.iterator();
        while (it.hasNext()) {
            context.grantUriPermission(this.mIntent.getPackage(), it.next(), 1);
        }
    }

    public Intent getIntent() {
        return this.mIntent;
    }
}

