package com.onesignal;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import com.getcapacitor.PluginMethod;
import java.util.Arrays;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\bÆ\u0002\u0018\u00002\u00020\u0001:\u0001\fB\u0007\b\u0002¢\u0006\u0002\u0010\u0002J&\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\n\u001a\u00020\u000b¨\u0006\r"}, d2 = {"Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;", "", "()V", "show", "", "activity", "Landroid/app/Activity;", "titlePrefix", "", "previouslyDeniedPostfix", PluginMethod.RETURN_CALLBACK, "Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;", "Callback", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class AlertDialogPrepromptForAndroidSettings {
    public static final AlertDialogPrepromptForAndroidSettings INSTANCE = new AlertDialogPrepromptForAndroidSettings();
    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\bf\u0018\u00002\u00020\u0001J\b\u0010\u0002\u001a\u00020\u0003H&J\b\u0010\u0004\u001a\u00020\u0003H&¨\u0006\u0005"}, d2 = {"Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;", "", "onAccept", "", "onDecline", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
    public interface Callback {
        void onAccept();

        void onDecline();
    }

    private AlertDialogPrepromptForAndroidSettings() {
    }

    public final void show(Activity activity, String titlePrefix, String previouslyDeniedPostfix, final Callback callback) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        Intrinsics.checkNotNullParameter(titlePrefix, "titlePrefix");
        Intrinsics.checkNotNullParameter(previouslyDeniedPostfix, "previouslyDeniedPostfix");
        Intrinsics.checkNotNullParameter(callback, "callback");
        String string = activity.getString(R.string.permission_not_available_title);
        Intrinsics.checkNotNullExpressionValue(string, "activity.getString(R.str…sion_not_available_title)");
        String str = String.format(string, Arrays.copyOf(new Object[]{titlePrefix}, 1));
        Intrinsics.checkNotNullExpressionValue(str, "java.lang.String.format(this, *args)");
        String string2 = activity.getString(R.string.permission_not_available_message);
        Intrinsics.checkNotNullExpressionValue(string2, "activity.getString(R.str…on_not_available_message)");
        String str2 = String.format(string2, Arrays.copyOf(new Object[]{previouslyDeniedPostfix}, 1));
        Intrinsics.checkNotNullExpressionValue(str2, "java.lang.String.format(this, *args)");
        new AlertDialog.Builder(activity).setTitle(str).setMessage(str2).setPositiveButton(R.string.permission_not_available_open_settings_option, new DialogInterface.OnClickListener() { // from class: com.onesignal.AlertDialogPrepromptForAndroidSettings$$ExternalSyntheticLambda0
            @Override // android.content.DialogInterface.OnClickListener
            public final void onClick(DialogInterface dialogInterface, int i) {
                AlertDialogPrepromptForAndroidSettings.m318show$lambda0(callback, dialogInterface, i);
            }
        }).setNegativeButton(android.R.string.no, new DialogInterface.OnClickListener() { // from class: com.onesignal.AlertDialogPrepromptForAndroidSettings$$ExternalSyntheticLambda1
            @Override // android.content.DialogInterface.OnClickListener
            public final void onClick(DialogInterface dialogInterface, int i) {
                AlertDialogPrepromptForAndroidSettings.m319show$lambda1(callback, dialogInterface, i);
            }
        }).show();
    }
    public static final void m318show$lambda0(Callback callback, DialogInterface dialogInterface, int i) {
        Intrinsics.checkNotNullParameter(callback, "$callback");
        callback.onAccept();
    }
    public static final void m319show$lambda1(Callback callback, DialogInterface dialogInterface, int i) {
        Intrinsics.checkNotNullParameter(callback, "$callback");
        callback.onDecline();
    }
}

