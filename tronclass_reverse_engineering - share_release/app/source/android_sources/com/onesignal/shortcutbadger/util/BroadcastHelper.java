package com.onesignal.shortcutbadger.util;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ResolveInfo;
import com.onesignal.shortcutbadger.ShortcutBadgeException;
import java.util.Collections;
import java.util.List;
public class BroadcastHelper {
    public static boolean canResolveBroadcast(Context context, Intent intent) {
        List<ResolveInfo> listQueryBroadcastReceivers = context.getPackageManager().queryBroadcastReceivers(intent, 0);
        return listQueryBroadcastReceivers != null && listQueryBroadcastReceivers.size() > 0;
    }

    public static List<ResolveInfo> resolveBroadcast(Context context, Intent intent) {
        List<ResolveInfo> listQueryBroadcastReceivers = context.getPackageManager().queryBroadcastReceivers(intent, 0);
        return listQueryBroadcastReceivers != null ? listQueryBroadcastReceivers : Collections.emptyList();
    }

    public static void sendIntentExplicitly(Context context, Intent intent) throws ShortcutBadgeException {
        List<ResolveInfo> listResolveBroadcast = resolveBroadcast(context, intent);
        if (listResolveBroadcast.size() == 0) {
            throw new ShortcutBadgeException("unable to resolve intent: " + intent.toString());
        }
        for (ResolveInfo resolveInfo : listResolveBroadcast) {
            Intent intent2 = new Intent(intent);
            if (resolveInfo != null) {
                intent2.setPackage(resolveInfo.resolvePackageName);
                context.sendBroadcast(intent2);
            }
        }
    }
}

