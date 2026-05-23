package com.onesignal;

import android.R;
import android.app.Notification;
import android.app.PendingIntent;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.res.Resources;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Build;
import android.service.notification.StatusBarNotification;
import android.text.SpannableString;
import android.text.style.StyleSpan;
import android.widget.RemoteViews;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import com.onesignal.AndroidSupportV4Compat;
import com.onesignal.OSThrowable;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalDbContract;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.lang.reflect.Field;
import java.math.BigInteger;
import java.net.URL;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.opencv.videoio.Videoio;
class GenerateNotification {
    public static final String BUNDLE_KEY_ACTION_ID = "actionId";
    public static final String BUNDLE_KEY_ANDROID_NOTIFICATION_ID = "androidNotificationId";
    public static final String BUNDLE_KEY_ONESIGNAL_DATA = "onesignalData";
    public static final String OS_SHOW_NOTIFICATION_THREAD = "OS_SHOW_NOTIFICATION_THREAD";
    private static Class<?> notificationOpenedClass = NotificationOpenedReceiver.class;
    private static Class<?> notificationDismissedClass = NotificationDismissReceiver.class;
    private static Resources contextResources = null;
    private static Context currentContext = null;
    private static String packageName = null;
    private static Integer groupAlertBehavior = null;

    private static int convertOSToAndroidPriority(int i) {
        if (i > 9) {
            return 2;
        }
        if (i > 7) {
            return 1;
        }
        if (i > 4) {
            return 0;
        }
        return i > 2 ? -1 : -2;
    }

    GenerateNotification() {
    }

    private static class OneSignalNotificationBuilder {
        NotificationCompat.Builder compatBuilder;
        boolean hasLargeIcon;

        private OneSignalNotificationBuilder() {
        }
    }

    private static void initGroupAlertBehavior() {
        groupAlertBehavior = 2;
    }

    private static void setStatics(Context context) {
        currentContext = context;
        packageName = context.getPackageName();
        contextResources = currentContext.getResources();
    }

    static boolean displayNotification(OSNotificationGenerationJob oSNotificationGenerationJob) {
        setStatics(oSNotificationGenerationJob.getContext());
        isRunningOnMainThreadCheck();
        initGroupAlertBehavior();
        return showNotification(oSNotificationGenerationJob);
    }

    static boolean displayIAMPreviewNotification(OSNotificationGenerationJob oSNotificationGenerationJob) {
        setStatics(oSNotificationGenerationJob.getContext());
        return showNotification(oSNotificationGenerationJob);
    }

    static void isRunningOnMainThreadCheck() {
        if (OSUtils.isRunningOnMainThread()) {
            throw new OSThrowable.OSMainThreadException("Process for showing a notification should never been done on Main Thread!");
        }
    }

    private static CharSequence getApplicationLabel() {
        ApplicationInfo info = ApplicationInfoHelper.INSTANCE.getInfo(currentContext);
        if (info == null) {
            return "";
        }
        return currentContext.getPackageManager().getApplicationLabel(info);
    }

    private static CharSequence getTitle(JSONObject jSONObject) {
        String strOptString = jSONObject.optString(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE, null);
        return strOptString != null ? strOptString : getApplicationLabel();
    }

    private static PendingIntent getNewDismissActionPendingIntent(int i, Intent intent) {
        return PendingIntent.getBroadcast(currentContext, i, intent, 201326592);
    }

    private static Intent getNewBaseDismissIntent(int i) {
        return new Intent(currentContext, notificationDismissedClass).putExtra(BUNDLE_KEY_ANDROID_NOTIFICATION_ID, i).putExtra(OneSignalDbContract.NotificationTable.COLUMN_NAME_DISMISSED, true);
    }

    private static OneSignalNotificationBuilder getBaseOneSignalNotificationBuilder(OSNotificationGenerationJob oSNotificationGenerationJob) {
        NotificationCompat.Builder builder;
        JSONObject jsonPayload = oSNotificationGenerationJob.getJsonPayload();
        OneSignalNotificationBuilder oneSignalNotificationBuilder = new OneSignalNotificationBuilder();
        try {
            builder = new NotificationCompat.Builder(currentContext, NotificationChannelManager.createNotificationChannel(oSNotificationGenerationJob));
        } catch (Throwable unused) {
            builder = new NotificationCompat.Builder(currentContext);
        }
        String strOptString = jsonPayload.optString("alert", null);
        builder.setAutoCancel(true).setSmallIcon(getSmallIconId(jsonPayload)).setStyle(new NotificationCompat.BigTextStyle().bigText(strOptString)).setContentText(strOptString).setTicker(strOptString);
        if (!jsonPayload.optString(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE).equals("")) {
            builder.setContentTitle(getTitle(jsonPayload));
        }
        try {
            BigInteger accentColor = getAccentColor(jsonPayload);
            if (accentColor != null) {
                builder.setColor(accentColor.intValue());
            }
        } catch (Throwable unused2) {
        }
        try {
            builder.setVisibility(jsonPayload.has("vis") ? Integer.parseInt(jsonPayload.optString("vis")) : 1);
        } catch (Throwable unused3) {
        }
        Bitmap largeIcon = getLargeIcon(jsonPayload);
        if (largeIcon != null) {
            oneSignalNotificationBuilder.hasLargeIcon = true;
            builder.setLargeIcon(largeIcon);
        }
        Bitmap bitmap = getBitmap(jsonPayload.optString("bicon", null));
        if (bitmap != null) {
            builder.setStyle(new NotificationCompat.BigPictureStyle().bigPicture(bitmap).setSummaryText(strOptString));
        }
        if (oSNotificationGenerationJob.getShownTimeStamp() != null) {
            try {
                builder.setWhen(oSNotificationGenerationJob.getShownTimeStamp().longValue() * 1000);
            } catch (Throwable unused4) {
            }
        }
        setAlertnessOptions(jsonPayload, builder);
        oneSignalNotificationBuilder.compatBuilder = builder;
        return oneSignalNotificationBuilder;
    }

    private static void setAlertnessOptions(JSONObject jSONObject, NotificationCompat.Builder builder) {
        int iConvertOSToAndroidPriority = convertOSToAndroidPriority(jSONObject.optInt("pri", 6));
        builder.setPriority(iConvertOSToAndroidPriority);
        if (iConvertOSToAndroidPriority < 0) {
            return;
        }
        int i = 4;
        if (jSONObject.has("ledc") && jSONObject.optInt("led", 1) == 1) {
            try {
                builder.setLights(new BigInteger(jSONObject.optString("ledc"), 16).intValue(), Videoio.CAP_IMAGES, 5000);
                i = 0;
            } catch (Throwable unused) {
            }
        }
        if (jSONObject.optInt("vib", 1) == 1) {
            if (jSONObject.has("vib_pt")) {
                long[] vibrationPattern = OSUtils.parseVibrationPattern(jSONObject);
                if (vibrationPattern != null) {
                    builder.setVibrate(vibrationPattern);
                }
            } else {
                i |= 2;
            }
        }
        if (isSoundEnabled(jSONObject)) {
            Uri soundUri = OSUtils.getSoundUri(currentContext, jSONObject.optString("sound", null));
            if (soundUri != null) {
                builder.setSound(soundUri);
            } else {
                i |= 1;
            }
        }
        builder.setDefaults(i);
    }

    private static void removeNotifyOptions(NotificationCompat.Builder builder) {
        builder.setOnlyAlertOnce(true).setDefaults(0).setSound(null).setVibrate(null).setTicker(null);
    }

    private static boolean showNotification(OSNotificationGenerationJob oSNotificationGenerationJob) throws Throwable {
        Notification notificationCreateGenericPendingIntentsForNotif;
        int iIntValue = oSNotificationGenerationJob.getAndroidId().intValue();
        JSONObject jsonPayload = oSNotificationGenerationJob.getJsonPayload();
        String strOptString = jsonPayload.optString("grp", null);
        IntentGeneratorForAttachingToNotifications intentGeneratorForAttachingToNotifications = new IntentGeneratorForAttachingToNotifications(currentContext);
        new ArrayList();
        ArrayList<StatusBarNotification> activeGrouplessNotifications = OneSignalNotificationManager.getActiveGrouplessNotifications(currentContext);
        if (strOptString == null && activeGrouplessNotifications.size() >= 3) {
            strOptString = OneSignalNotificationManager.getGrouplessSummaryKey();
            OneSignalNotificationManager.assignGrouplessNotifications(currentContext, activeGrouplessNotifications);
        }
        OneSignalNotificationBuilder baseOneSignalNotificationBuilder = getBaseOneSignalNotificationBuilder(oSNotificationGenerationJob);
        NotificationCompat.Builder builder = baseOneSignalNotificationBuilder.compatBuilder;
        addNotificationActionButtons(jsonPayload, intentGeneratorForAttachingToNotifications, builder, iIntValue, null);
        try {
            addBackgroundImage(jsonPayload, builder);
        } catch (Throwable th) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Could not set background notification image!", th);
        }
        applyNotificationExtender(oSNotificationGenerationJob, builder);
        if (oSNotificationGenerationJob.isRestoring()) {
            removeNotifyOptions(builder);
        }
        NotificationLimitManager.clearOldestOverLimit(currentContext, strOptString != null ? 2 : 1);
        if (strOptString != null) {
            createGenericPendingIntentsForGroup(builder, intentGeneratorForAttachingToNotifications, jsonPayload, strOptString, iIntValue);
            notificationCreateGenericPendingIntentsForNotif = createSingleNotificationBeforeSummaryBuilder(oSNotificationGenerationJob, builder);
            if (strOptString.equals(OneSignalNotificationManager.getGrouplessSummaryKey())) {
                createGrouplessSummaryNotification(oSNotificationGenerationJob, intentGeneratorForAttachingToNotifications, activeGrouplessNotifications.size() + 1);
            } else {
                createSummaryNotification(oSNotificationGenerationJob, baseOneSignalNotificationBuilder);
            }
        } else {
            notificationCreateGenericPendingIntentsForNotif = createGenericPendingIntentsForNotif(builder, intentGeneratorForAttachingToNotifications, jsonPayload, iIntValue);
        }
        addXiaomiSettings(baseOneSignalNotificationBuilder, notificationCreateGenericPendingIntentsForNotif);
        NotificationManagerCompat.from(currentContext).notify(iIntValue, notificationCreateGenericPendingIntentsForNotif);
        if (Build.VERSION.SDK_INT >= 26) {
            return OneSignalNotificationManager.areNotificationsEnabled(currentContext, notificationCreateGenericPendingIntentsForNotif.getChannelId());
        }
        return true;
    }

    private static Notification createGenericPendingIntentsForNotif(NotificationCompat.Builder builder, IntentGeneratorForAttachingToNotifications intentGeneratorForAttachingToNotifications, JSONObject jSONObject, int i) {
        SecureRandom secureRandom = new SecureRandom();
        builder.setContentIntent(intentGeneratorForAttachingToNotifications.getNewActionPendingIntent(secureRandom.nextInt(), intentGeneratorForAttachingToNotifications.getNewBaseIntent(i).putExtra(BUNDLE_KEY_ONESIGNAL_DATA, jSONObject.toString())));
        builder.setDeleteIntent(getNewDismissActionPendingIntent(secureRandom.nextInt(), getNewBaseDismissIntent(i)));
        return builder.build();
    }

    private static void createGenericPendingIntentsForGroup(NotificationCompat.Builder builder, IntentGeneratorForAttachingToNotifications intentGeneratorForAttachingToNotifications, JSONObject jSONObject, String str, int i) {
        SecureRandom secureRandom = new SecureRandom();
        builder.setContentIntent(intentGeneratorForAttachingToNotifications.getNewActionPendingIntent(secureRandom.nextInt(), intentGeneratorForAttachingToNotifications.getNewBaseIntent(i).putExtra(BUNDLE_KEY_ONESIGNAL_DATA, jSONObject.toString()).putExtra("grp", str)));
        builder.setDeleteIntent(getNewDismissActionPendingIntent(secureRandom.nextInt(), getNewBaseDismissIntent(i).putExtra("grp", str)));
        builder.setGroup(str);
        try {
            builder.setGroupAlertBehavior(groupAlertBehavior.intValue());
        } catch (Throwable unused) {
        }
    }

    private static void applyNotificationExtender(OSNotificationGenerationJob oSNotificationGenerationJob, NotificationCompat.Builder builder) {
        if (oSNotificationGenerationJob.hasExtender()) {
            try {
                Field declaredField = NotificationCompat.Builder.class.getDeclaredField("mNotification");
                declaredField.setAccessible(true);
                Notification notification = (Notification) declaredField.get(builder);
                oSNotificationGenerationJob.setOrgFlags(Integer.valueOf(notification.flags));
                oSNotificationGenerationJob.setOrgSound(notification.sound);
                builder.extend(oSNotificationGenerationJob.getNotification().getNotificationExtender());
                Notification notification2 = (Notification) declaredField.get(builder);
                Field declaredField2 = NotificationCompat.Builder.class.getDeclaredField("mContentText");
                declaredField2.setAccessible(true);
                CharSequence charSequence = (CharSequence) declaredField2.get(builder);
                Field declaredField3 = NotificationCompat.Builder.class.getDeclaredField("mContentTitle");
                declaredField3.setAccessible(true);
                CharSequence charSequence2 = (CharSequence) declaredField3.get(builder);
                oSNotificationGenerationJob.setOverriddenBodyFromExtender(charSequence);
                oSNotificationGenerationJob.setOverriddenTitleFromExtender(charSequence2);
                if (oSNotificationGenerationJob.isRestoring()) {
                    return;
                }
                oSNotificationGenerationJob.setOverriddenFlags(Integer.valueOf(notification2.flags));
                oSNotificationGenerationJob.setOverriddenSound(notification2.sound);
            } catch (Throwable th) {
                th.printStackTrace();
            }
        }
    }

    private static Notification createSingleNotificationBeforeSummaryBuilder(OSNotificationGenerationJob oSNotificationGenerationJob, NotificationCompat.Builder builder) {
        return builder.build();
    }

    private static void addXiaomiSettings(OneSignalNotificationBuilder oneSignalNotificationBuilder, Notification notification) {
        if (oneSignalNotificationBuilder.hasLargeIcon) {
            try {
                Object objNewInstance = Class.forName("android.app.MiuiNotification").newInstance();
                Field declaredField = objNewInstance.getClass().getDeclaredField("customizedIcon");
                declaredField.setAccessible(true);
                declaredField.set(objNewInstance, true);
                Field field = notification.getClass().getField("extraNotification");
                field.setAccessible(true);
                field.set(notification, objNewInstance);
            } catch (Throwable unused) {
            }
        }
    }

    static void updateSummaryNotification(OSNotificationGenerationJob oSNotificationGenerationJob) {
        setStatics(oSNotificationGenerationJob.getContext());
        createSummaryNotification(oSNotificationGenerationJob, null);
    }

    /* high-level source view WARN: Removed duplicated region for block: B:45:0x0158  */
    /* high-level source view WARN: Removed duplicated region for block: B:89:0x02b1  */
    /* high-level source view WARN: Type inference fix 'apply assigned field type' failed
    java.lang.UnsupportedOperationException: ArgType.getObject(), call class: class high-level source view.core.dex.instructions.args.ArgType$PrimitiveArg
    	at high-level source view.core.dex.instructions.args.ArgType.getObject(ArgType.java:593)
    	at high-level source view.core.dex.attributes.nodes.ClassTypeVarsAttr.getTypeVarsMapFor(ClassTypeVarsAttr.java:35)
    	at high-level source view.core.dex.nodes.utils.TypeUtils.replaceClassGenerics(TypeUtils.java:177)
    	at high-level source view.core.dex.visitors.typeinference.FixTypesVisitor.insertExplicitUseCast(FixTypesVisitor.java:397)
    	at high-level source view.core.dex.visitors.typeinference.FixTypesVisitor.tryFieldTypeWithNewCasts(FixTypesVisitor.java:359)
    	at high-level source view.core.dex.visitors.typeinference.FixTypesVisitor.applyFieldType(FixTypesVisitor.java:309)
    	at high-level source view.core.dex.visitors.typeinference.FixTypesVisitor.visit(FixTypesVisitor.java:94)
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private static void createSummaryNotification(OSNotificationGenerationJob oSNotificationGenerationJob, OneSignalNotificationBuilder oneSignalNotificationBuilder) throws Throwable {
        Cursor cursor;
        String str;
        JSONObject jSONObject;
        ArrayList arrayList;
        Integer numValueOf;
        PendingIntent newActionPendingIntent;
        Notification notificationBuild;
        String str2;
        String str3;
        String str4;
        String str5 = OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE;
        String str6 = OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE;
        String str7 = OneSignalDbContract.NotificationTable.COLUMN_NAME_IS_SUMMARY;
        boolean zIsRestoring = oSNotificationGenerationJob.isRestoring();
        JSONObject jsonPayload = oSNotificationGenerationJob.getJsonPayload();
        IntentGeneratorForAttachingToNotifications intentGeneratorForAttachingToNotifications = new IntentGeneratorForAttachingToNotifications(currentContext);
        String strOptString = jsonPayload.optString("grp", null);
        SecureRandom secureRandom = new SecureRandom();
        PendingIntent newDismissActionPendingIntent = getNewDismissActionPendingIntent(secureRandom.nextInt(), getNewBaseDismissIntent(0).putExtra("summary", strOptString));
        OneSignalDbHelper oneSignalDbHelper = OneSignalDbHelper.getInstance(currentContext);
        try {
            String[] strArr = {OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID, OneSignalDbContract.NotificationTable.COLUMN_NAME_FULL_DATA, OneSignalDbContract.NotificationTable.COLUMN_NAME_IS_SUMMARY, OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE, OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE};
            String[] strArr2 = {strOptString};
            if (zIsRestoring) {
                str = "group_id = ? AND dismissed = 0 AND opened = 0";
            } else {
                try {
                    str = "group_id = ? AND dismissed = 0 AND opened = 0 AND android_notification_id <> " + oSNotificationGenerationJob.getAndroidId();
                } catch (Throwable th) {
                    th = th;
                    cursor = null;
                    if (cursor != null && !cursor.isClosed()) {
                        cursor.close();
                    }
                    throw th;
                }
            }
            Cursor cursorQuery = oneSignalDbHelper.query(OneSignalDbContract.NotificationTable.TABLE_NAME, strArr, str, strArr2, null, null, "_id DESC");
            try {
                if (cursorQuery.moveToFirst()) {
                    ArrayList arrayList2 = new ArrayList();
                    String string = null;
                    numValueOf = null;
                    while (true) {
                        String str8 = str7;
                        if (cursorQuery.getInt(cursorQuery.getColumnIndex(str7)) == 1) {
                            numValueOf = Integer.valueOf(cursorQuery.getInt(cursorQuery.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID)));
                            str2 = str5;
                            str3 = str6;
                        } else {
                            String string2 = cursorQuery.getString(cursorQuery.getColumnIndex(str6));
                            String str9 = string2 == null ? "" : string2 + " ";
                            str2 = str5;
                            str3 = str6;
                            SpannableString spannableString = new SpannableString(str9 + cursorQuery.getString(cursorQuery.getColumnIndex(str5)));
                            if (str9.length() > 0) {
                                spannableString.setSpan(new StyleSpan(1), 0, str9.length(), 0);
                            }
                            arrayList2.add(spannableString);
                            if (string == null) {
                                string = cursorQuery.getString(cursorQuery.getColumnIndex(OneSignalDbContract.NotificationTable.COLUMN_NAME_FULL_DATA));
                            }
                        }
                        str4 = string;
                        if (!cursorQuery.moveToNext()) {
                            break;
                        }
                        string = str4;
                        str7 = str8;
                        str5 = str2;
                        str6 = str3;
                    }
                    if (!zIsRestoring || str4 == null) {
                        arrayList = arrayList2;
                        jSONObject = jsonPayload;
                    } else {
                        try {
                            JSONObject jSONObject2 = new JSONObject(str4);
                            arrayList = arrayList2;
                            jSONObject = jSONObject2;
                        } catch (JSONException e) {
                            e.printStackTrace();
                            arrayList = arrayList2;
                            jSONObject = jsonPayload;
                            if (cursorQuery != null) {
                                cursorQuery.close();
                            }
                            if (numValueOf == null) {
                            }
                            newActionPendingIntent = intentGeneratorForAttachingToNotifications.getNewActionPendingIntent(secureRandom.nextInt(), createBaseSummaryIntent(numValueOf.intValue(), intentGeneratorForAttachingToNotifications, jSONObject, strOptString));
                            if (arrayList != null) {
                                NotificationCompat.Builder builder = oneSignalNotificationBuilder.compatBuilder;
                                builder.mActions.clear();
                                addNotificationActionButtons(jSONObject, intentGeneratorForAttachingToNotifications, builder, numValueOf.intValue(), strOptString);
                                builder.setContentIntent(newActionPendingIntent).setDeleteIntent(newDismissActionPendingIntent).setOnlyAlertOnce(zIsRestoring).setAutoCancel(false).setGroup(strOptString).setGroupSummary(true);
                                try {
                                    builder.setGroupAlertBehavior(groupAlertBehavior.intValue());
                                } catch (Throwable unused) {
                                }
                                notificationBuild = builder.build();
                                addXiaomiSettings(oneSignalNotificationBuilder, notificationBuild);
                            }
                            NotificationManagerCompat.from(currentContext).notify(numValueOf.intValue(), notificationBuild);
                        }
                    }
                } else {
                    jSONObject = jsonPayload;
                    arrayList = null;
                    numValueOf = null;
                }
                if (cursorQuery != null && !cursorQuery.isClosed()) {
                    cursorQuery.close();
                }
                if (numValueOf == null) {
                    numValueOf = Integer.valueOf(secureRandom.nextInt());
                    createSummaryIdDatabaseEntry(oneSignalDbHelper, strOptString, numValueOf.intValue());
                }
                newActionPendingIntent = intentGeneratorForAttachingToNotifications.getNewActionPendingIntent(secureRandom.nextInt(), createBaseSummaryIntent(numValueOf.intValue(), intentGeneratorForAttachingToNotifications, jSONObject, strOptString));
                if (arrayList != null || ((!zIsRestoring || arrayList.size() <= 1) && (zIsRestoring || arrayList.size() <= 0))) {
                    NotificationCompat.Builder builder2 = oneSignalNotificationBuilder.compatBuilder;
                    builder2.mActions.clear();
                    addNotificationActionButtons(jSONObject, intentGeneratorForAttachingToNotifications, builder2, numValueOf.intValue(), strOptString);
                    builder2.setContentIntent(newActionPendingIntent).setDeleteIntent(newDismissActionPendingIntent).setOnlyAlertOnce(zIsRestoring).setAutoCancel(false).setGroup(strOptString).setGroupSummary(true);
                    builder2.setGroupAlertBehavior(groupAlertBehavior.intValue());
                    notificationBuild = builder2.build();
                    addXiaomiSettings(oneSignalNotificationBuilder, notificationBuild);
                } else {
                    int size = arrayList.size() + (!zIsRestoring ? 1 : 0);
                    String strOptString2 = jSONObject.optString("grp_msg", null);
                    CharSequence charSequenceReplace = strOptString2 == null ? size + " new messages" : strOptString2.replace("$[notif_count]", "" + size);
                    NotificationCompat.Builder builder3 = getBaseOneSignalNotificationBuilder(oSNotificationGenerationJob).compatBuilder;
                    if (zIsRestoring) {
                        removeNotifyOptions(builder3);
                    } else {
                        if (oSNotificationGenerationJob.getOverriddenSound() != null) {
                            builder3.setSound(oSNotificationGenerationJob.getOverriddenSound());
                        }
                        if (oSNotificationGenerationJob.getOverriddenFlags() != null) {
                            builder3.setDefaults(oSNotificationGenerationJob.getOverriddenFlags().intValue());
                        }
                    }
                    builder3.setContentIntent(newActionPendingIntent).setDeleteIntent(newDismissActionPendingIntent).setContentTitle(getApplicationLabel()).setContentText(charSequenceReplace).setNumber(size).setSmallIcon(getDefaultSmallIconId()).setLargeIcon(getDefaultLargeIcon()).setOnlyAlertOnce(zIsRestoring).setAutoCancel(false).setGroup(strOptString).setGroupSummary(true);
                    try {
                        builder3.setGroupAlertBehavior(groupAlertBehavior.intValue());
                    } catch (Throwable unused2) {
                    }
                    if (!zIsRestoring) {
                        builder3.setTicker(charSequenceReplace);
                    }
                    NotificationCompat.InboxStyle inboxStyle = new NotificationCompat.InboxStyle();
                    if (!zIsRestoring) {
                        String string3 = oSNotificationGenerationJob.getTitle() != null ? oSNotificationGenerationJob.getTitle().toString() : null;
                        String str10 = string3 != null ? string3 + " " : "";
                        SpannableString spannableString2 = new SpannableString(str10 + oSNotificationGenerationJob.getBody().toString());
                        if (str10.length() > 0) {
                            spannableString2.setSpan(new StyleSpan(1), 0, str10.length(), 0);
                        }
                        inboxStyle.addLine(spannableString2);
                    }
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        inboxStyle.addLine((SpannableString) it.next());
                    }
                    inboxStyle.setBigContentTitle(charSequenceReplace);
                    builder3.setStyle(inboxStyle);
                    notificationBuild = builder3.build();
                }
                NotificationManagerCompat.from(currentContext).notify(numValueOf.intValue(), notificationBuild);
            } catch (Throwable th2) {
                th = th2;
                cursor = cursorQuery;
                if (cursor != null) {
                    cursor.close();
                }
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
            cursor = null;
        }
    }

    /* high-level source view WARN: Type inference fix 'apply assigned field type' failed
    java.lang.UnsupportedOperationException: ArgType.getObject(), call class: class high-level source view.core.dex.instructions.args.ArgType$PrimitiveArg
    	at high-level source view.core.dex.instructions.args.ArgType.getObject(ArgType.java:593)
    	at high-level source view.core.dex.attributes.nodes.ClassTypeVarsAttr.getTypeVarsMapFor(ClassTypeVarsAttr.java:35)
    	at high-level source view.core.dex.nodes.utils.TypeUtils.replaceClassGenerics(TypeUtils.java:177)
    	at high-level source view.core.dex.visitors.typeinference.FixTypesVisitor.insertExplicitUseCast(FixTypesVisitor.java:397)
    	at high-level source view.core.dex.visitors.typeinference.FixTypesVisitor.tryFieldTypeWithNewCasts(FixTypesVisitor.java:359)
    	at high-level source view.core.dex.visitors.typeinference.FixTypesVisitor.applyFieldType(FixTypesVisitor.java:309)
    	at high-level source view.core.dex.visitors.typeinference.FixTypesVisitor.visit(FixTypesVisitor.java:94)
     */
    private static void createGrouplessSummaryNotification(OSNotificationGenerationJob oSNotificationGenerationJob, IntentGeneratorForAttachingToNotifications intentGeneratorForAttachingToNotifications, int i) {
        JSONObject jsonPayload = oSNotificationGenerationJob.getJsonPayload();
        SecureRandom secureRandom = new SecureRandom();
        String grouplessSummaryKey = OneSignalNotificationManager.getGrouplessSummaryKey();
        String str = i + " new messages";
        int grouplessSummaryId = OneSignalNotificationManager.getGrouplessSummaryId();
        createSummaryIdDatabaseEntry(OneSignalDbHelper.getInstance(currentContext), grouplessSummaryKey, grouplessSummaryId);
        PendingIntent newActionPendingIntent = intentGeneratorForAttachingToNotifications.getNewActionPendingIntent(secureRandom.nextInt(), createBaseSummaryIntent(grouplessSummaryId, intentGeneratorForAttachingToNotifications, jsonPayload, grouplessSummaryKey));
        PendingIntent newDismissActionPendingIntent = getNewDismissActionPendingIntent(secureRandom.nextInt(), getNewBaseDismissIntent(0).putExtra("summary", grouplessSummaryKey));
        NotificationCompat.Builder builder = getBaseOneSignalNotificationBuilder(oSNotificationGenerationJob).compatBuilder;
        if (oSNotificationGenerationJob.getOverriddenSound() != null) {
            builder.setSound(oSNotificationGenerationJob.getOverriddenSound());
        }
        if (oSNotificationGenerationJob.getOverriddenFlags() != null) {
            builder.setDefaults(oSNotificationGenerationJob.getOverriddenFlags().intValue());
        }
        builder.setContentIntent(newActionPendingIntent).setDeleteIntent(newDismissActionPendingIntent).setContentTitle(getApplicationLabel()).setContentText(str).setNumber(i).setSmallIcon(getDefaultSmallIconId()).setLargeIcon(getDefaultLargeIcon()).setOnlyAlertOnce(true).setAutoCancel(false).setGroup(grouplessSummaryKey).setGroupSummary(true);
        try {
            builder.setGroupAlertBehavior(groupAlertBehavior.intValue());
        } catch (Throwable unused) {
        }
        NotificationCompat.InboxStyle inboxStyle = new NotificationCompat.InboxStyle();
        inboxStyle.setBigContentTitle(str);
        builder.setStyle(inboxStyle);
        NotificationManagerCompat.from(currentContext).notify(grouplessSummaryId, builder.build());
    }

    private static Intent createBaseSummaryIntent(int i, IntentGeneratorForAttachingToNotifications intentGeneratorForAttachingToNotifications, JSONObject jSONObject, String str) {
        return intentGeneratorForAttachingToNotifications.getNewBaseIntent(i).putExtra(BUNDLE_KEY_ONESIGNAL_DATA, jSONObject.toString()).putExtra("summary", str);
    }

    private static void createSummaryIdDatabaseEntry(OneSignalDbHelper oneSignalDbHelper, String str, int i) {
        ContentValues contentValues = new ContentValues();
        contentValues.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_ANDROID_NOTIFICATION_ID, Integer.valueOf(i));
        contentValues.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_GROUP_ID, str);
        contentValues.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_IS_SUMMARY, (Integer) 1);
        oneSignalDbHelper.insertOrThrow(OneSignalDbContract.NotificationTable.TABLE_NAME, null, contentValues);
    }

    private static void addBackgroundImage(JSONObject jSONObject, NotificationCompat.Builder builder) throws Throwable {
        Bitmap bitmapFromAssetsOrResourceName;
        JSONObject jSONObject2;
        String string;
        if (Build.VERSION.SDK_INT >= 31) {
            OneSignal.Log(OneSignal.LOG_LEVEL.VERBOSE, "Cannot use background images in notifications for device on version: " + Build.VERSION.SDK_INT);
            return;
        }
        String strOptString = jSONObject.optString("bg_img", null);
        if (strOptString != null) {
            jSONObject2 = new JSONObject(strOptString);
            bitmapFromAssetsOrResourceName = getBitmap(jSONObject2.optString("img", null));
        } else {
            bitmapFromAssetsOrResourceName = null;
            jSONObject2 = null;
        }
        if (bitmapFromAssetsOrResourceName == null) {
            bitmapFromAssetsOrResourceName = getBitmapFromAssetsOrResourceName("onesignal_bgimage_default_image");
        }
        if (bitmapFromAssetsOrResourceName != null) {
            RemoteViews remoteViews = new RemoteViews(currentContext.getPackageName(), R.layout.onesignal_bgimage_notif_layout);
            remoteViews.setTextViewText(R.id.os_bgimage_notif_title, getTitle(jSONObject));
            remoteViews.setTextViewText(R.id.os_bgimage_notif_body, jSONObject.optString("alert"));
            setTextColor(remoteViews, jSONObject2, R.id.os_bgimage_notif_title, "tc", "onesignal_bgimage_notif_title_color");
            setTextColor(remoteViews, jSONObject2, R.id.os_bgimage_notif_body, "bc", "onesignal_bgimage_notif_body_color");
            if (jSONObject2 != null && jSONObject2.has("img_align")) {
                string = jSONObject2.getString("img_align");
            } else {
                int identifier = contextResources.getIdentifier("onesignal_bgimage_notif_image_align", "string", packageName);
                string = identifier != 0 ? contextResources.getString(identifier) : null;
            }
            if ("right".equals(string)) {
                remoteViews.setViewPadding(R.id.os_bgimage_notif_bgimage_align_layout, -5000, 0, 0, 0);
                remoteViews.setImageViewBitmap(R.id.os_bgimage_notif_bgimage_right_aligned, bitmapFromAssetsOrResourceName);
                remoteViews.setViewVisibility(R.id.os_bgimage_notif_bgimage_right_aligned, 0);
                remoteViews.setViewVisibility(R.id.os_bgimage_notif_bgimage, 2);
            } else {
                remoteViews.setImageViewBitmap(R.id.os_bgimage_notif_bgimage, bitmapFromAssetsOrResourceName);
            }
            builder.setContent(remoteViews);
            builder.setStyle(null);
        }
    }

    private static void setTextColor(RemoteViews remoteViews, JSONObject jSONObject, int i, String str, String str2) {
        Integer numSafeGetColorFromHex = safeGetColorFromHex(jSONObject, str);
        if (numSafeGetColorFromHex != null) {
            remoteViews.setTextColor(i, numSafeGetColorFromHex.intValue());
            return;
        }
        int identifier = contextResources.getIdentifier(str2, "color", packageName);
        if (identifier != 0) {
            remoteViews.setTextColor(i, AndroidSupportV4Compat.ContextCompat.getColor(currentContext, identifier));
        }
    }

    private static Integer safeGetColorFromHex(JSONObject jSONObject, String str) {
        if (jSONObject == null) {
            return null;
        }
        try {
            if (jSONObject.has(str)) {
                return Integer.valueOf(new BigInteger(jSONObject.optString(str), 16).intValue());
            }
            return null;
        } catch (Throwable unused) {
            return null;
        }
    }

    private static Bitmap getLargeIcon(JSONObject jSONObject) {
        Bitmap bitmap = getBitmap(jSONObject.optString("licon"));
        if (bitmap == null) {
            bitmap = getBitmapFromAssetsOrResourceName("ic_onesignal_large_icon_default");
        }
        if (bitmap == null) {
            return null;
        }
        return resizeBitmapForLargeIconArea(bitmap);
    }

    private static Bitmap getDefaultLargeIcon() {
        return resizeBitmapForLargeIconArea(getBitmapFromAssetsOrResourceName("ic_onesignal_large_icon_default"));
    }

    private static Bitmap resizeBitmapForLargeIconArea(Bitmap bitmap) {
        if (bitmap == null) {
            return null;
        }
        try {
            int dimension = (int) contextResources.getDimension(android.R.dimen.notification_large_icon_height);
            int dimension2 = (int) contextResources.getDimension(android.R.dimen.notification_large_icon_width);
            int height = bitmap.getHeight();
            int width = bitmap.getWidth();
            if (width <= dimension2 && height <= dimension) {
                return bitmap;
            }
            if (height > width) {
                dimension2 = (int) (dimension * (width / height));
            } else if (width > height) {
                dimension = (int) (dimension2 * (height / width));
            }
            return Bitmap.createScaledBitmap(bitmap, dimension2, dimension, true);
        } catch (Throwable unused) {
            return bitmap;
        }
    }

    private static Bitmap getBitmapFromAssetsOrResourceName(String str) {
        Bitmap bitmapDecodeStream;
        try {
            bitmapDecodeStream = BitmapFactory.decodeStream(currentContext.getAssets().open(str));
        } catch (Throwable unused) {
            bitmapDecodeStream = null;
        }
        if (bitmapDecodeStream != null) {
            return bitmapDecodeStream;
        }
        try {
            Iterator it = Arrays.asList(".png", ".webp", ".jpg", ".gif", ".bmp").iterator();
            while (it.hasNext()) {
                try {
                    bitmapDecodeStream = BitmapFactory.decodeStream(currentContext.getAssets().open(str + ((String) it.next())));
                } catch (Throwable unused2) {
                }
                if (bitmapDecodeStream != null) {
                    return bitmapDecodeStream;
                }
            }
            int resourceIcon = getResourceIcon(str);
            if (resourceIcon != 0) {
                return BitmapFactory.decodeResource(contextResources, resourceIcon);
            }
        } catch (Throwable unused3) {
        }
        return null;
    }

    private static Bitmap getBitmapFromURL(String str) {
        try {
            return BitmapFactory.decodeStream(new URL(str).openConnection().getInputStream());
        } catch (Throwable th) {
            OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "Could not download image!", th);
            return null;
        }
    }

    private static Bitmap getBitmap(String str) {
        if (str == null) {
            return null;
        }
        String strTrim = str.trim();
        if (strTrim.startsWith("http://") || strTrim.startsWith("https://")) {
            return getBitmapFromURL(strTrim);
        }
        return getBitmapFromAssetsOrResourceName(str);
    }

    private static int getResourceIcon(String str) {
        if (str == null) {
            return 0;
        }
        String strTrim = str.trim();
        if (!OSUtils.isValidResourceName(strTrim)) {
            return 0;
        }
        int drawableId = getDrawableId(strTrim);
        if (drawableId != 0) {
            return drawableId;
        }
        try {
            return R.drawable.class.getField(str).getInt(null);
        } catch (Throwable unused) {
            return 0;
        }
    }

    private static int getSmallIconId(JSONObject jSONObject) {
        int resourceIcon = getResourceIcon(jSONObject.optString("sicon", null));
        return resourceIcon != 0 ? resourceIcon : getDefaultSmallIconId();
    }

    private static int getDefaultSmallIconId() {
        int drawableId = getDrawableId("ic_stat_onesignal_default");
        if (drawableId != 0) {
            return drawableId;
        }
        int drawableId2 = getDrawableId("corona_statusbar_icon_default");
        if (drawableId2 != 0) {
            return drawableId2;
        }
        int drawableId3 = getDrawableId("ic_os_notification_fallback_white_24dp");
        return drawableId3 != 0 ? drawableId3 : android.R.drawable.ic_popup_reminder;
    }

    private static int getDrawableId(String str) {
        return contextResources.getIdentifier(str, "drawable", packageName);
    }

    private static boolean isSoundEnabled(JSONObject jSONObject) {
        String strOptString = jSONObject.optString("sound", null);
        return ("null".equals(strOptString) || "nil".equals(strOptString)) ? false : true;
    }

    static BigInteger getAccentColor(JSONObject jSONObject) {
        try {
            if (jSONObject.has("bgac")) {
                return new BigInteger(jSONObject.optString("bgac", null), 16);
            }
        } catch (Throwable unused) {
        }
        try {
            String resourceString = OSUtils.getResourceString(OneSignal.appContext, "onesignal_notification_accent_color", null);
            if (resourceString != null) {
                return new BigInteger(resourceString, 16);
            }
        } catch (Throwable unused2) {
        }
        try {
            String manifestMeta = OSUtils.getManifestMeta(OneSignal.appContext, "com.onesignal.NotificationAccentColor.DEFAULT");
            if (manifestMeta != null) {
                return new BigInteger(manifestMeta, 16);
            }
        } catch (Throwable unused3) {
        }
        return null;
    }

    private static void addNotificationActionButtons(JSONObject jSONObject, IntentGeneratorForAttachingToNotifications intentGeneratorForAttachingToNotifications, NotificationCompat.Builder builder, int i, String str) {
        try {
            JSONObject jSONObject2 = new JSONObject(jSONObject.optString(OSNotificationFormatHelper.PAYLOAD_OS_ROOT_CUSTOM));
            if (jSONObject2.has(NotificationBundleProcessor.PUSH_ADDITIONAL_DATA_KEY)) {
                JSONObject jSONObject3 = jSONObject2.getJSONObject(NotificationBundleProcessor.PUSH_ADDITIONAL_DATA_KEY);
                if (jSONObject3.has("actionButtons")) {
                    JSONArray jSONArray = jSONObject3.getJSONArray("actionButtons");
                    for (int i2 = 0; i2 < jSONArray.length(); i2++) {
                        JSONObject jSONObjectOptJSONObject = jSONArray.optJSONObject(i2);
                        JSONObject jSONObject4 = new JSONObject(jSONObject.toString());
                        Intent newBaseIntent = intentGeneratorForAttachingToNotifications.getNewBaseIntent(i);
                        newBaseIntent.setAction("" + i2);
                        newBaseIntent.putExtra("action_button", true);
                        jSONObject4.put(BUNDLE_KEY_ACTION_ID, jSONObjectOptJSONObject.optString(OSOutcomeConstants.OUTCOME_ID));
                        newBaseIntent.putExtra(BUNDLE_KEY_ONESIGNAL_DATA, jSONObject4.toString());
                        if (str != null) {
                            newBaseIntent.putExtra("summary", str);
                        } else if (jSONObject.has("grp")) {
                            newBaseIntent.putExtra("grp", jSONObject.optString("grp"));
                        }
                        builder.addAction(jSONObjectOptJSONObject.has("icon") ? getResourceIcon(jSONObjectOptJSONObject.optString("icon")) : 0, jSONObjectOptJSONObject.optString("text"), intentGeneratorForAttachingToNotifications.getNewActionPendingIntent(i, newBaseIntent));
                    }
                }
            }
        } catch (Throwable th) {
            th.printStackTrace();
        }
    }

    private static void addAlertButtons(Context context, JSONObject jSONObject, List<String> list, List<String> list2) {
        try {
            addCustomAlertButtons(jSONObject, list, list2);
        } catch (Throwable th) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Failed to parse JSON for custom buttons for alert dialog.", th);
        }
        if (list.size() == 0 || list.size() < 3) {
            list.add(OSUtils.getResourceString(context, "onesignal_in_app_alert_ok_button_text", "Ok"));
            list2.add("__DEFAULT__");
        }
    }

    private static void addCustomAlertButtons(JSONObject jSONObject, List<String> list, List<String> list2) throws JSONException {
        JSONObject jSONObject2 = new JSONObject(jSONObject.optString(OSNotificationFormatHelper.PAYLOAD_OS_ROOT_CUSTOM));
        if (jSONObject2.has(NotificationBundleProcessor.PUSH_ADDITIONAL_DATA_KEY)) {
            JSONObject jSONObject3 = jSONObject2.getJSONObject(NotificationBundleProcessor.PUSH_ADDITIONAL_DATA_KEY);
            if (jSONObject3.has("actionButtons")) {
                JSONArray jSONArrayOptJSONArray = jSONObject3.optJSONArray("actionButtons");
                for (int i = 0; i < jSONArrayOptJSONArray.length(); i++) {
                    JSONObject jSONObject4 = jSONArrayOptJSONArray.getJSONObject(i);
                    list.add(jSONObject4.optString("text"));
                    list2.add(jSONObject4.optString(OSOutcomeConstants.OUTCOME_ID));
                }
            }
        }
    }
}

