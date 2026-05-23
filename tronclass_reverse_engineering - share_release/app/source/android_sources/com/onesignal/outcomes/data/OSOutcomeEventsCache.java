package com.onesignal.outcomes.data;

import android.content.ContentValues;
import android.database.Cursor;
import androidx.core.app.NotificationCompat;
import com.onesignal.OSLogger;
import com.onesignal.OSSharedPreferences;
import com.onesignal.OneSignalDb;
import com.onesignal.influence.domain.OSInfluence;
import com.onesignal.influence.domain.OSInfluenceChannel;
import com.onesignal.influence.domain.OSInfluenceType;
import com.onesignal.outcomes.OSOutcomeConstants;
import com.onesignal.outcomes.domain.OSCachedUniqueOutcome;
import com.onesignal.outcomes.domain.OSOutcomeEventParams;
import com.onesignal.outcomes.domain.OSOutcomeSource;
import com.onesignal.outcomes.domain.OSOutcomeSourceBody;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONArray;
import org.json.JSONException;
@Metadata(d1 = {"\u0000z\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\"\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u000b\b\u0000\u0018\u00002\u00020\u0001B\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0002\u0010\bJ(\u0010\u0011\u001a\u00020\u00122\f\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00150\u00142\b\u0010\u0016\u001a\u0004\u0018\u00010\u00172\u0006\u0010\u0018\u001a\u00020\u0019H\u0002J \u0010\u001a\u001a\u00020\u00122\f\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00150\u00142\b\u0010\u001b\u001a\u0004\u0018\u00010\u001cH\u0002J\u0018\u0010\u001d\u001a\u00020\u00122\u0006\u0010\u001e\u001a\u00020\u000e2\u0006\u0010\u001f\u001a\u00020\u000eH\u0007J\u0010\u0010 \u001a\u00020\u00122\u0006\u0010!\u001a\u00020\"H\u0007J\u000e\u0010#\u001a\b\u0012\u0004\u0012\u00020\"0$H\u0007J4\u0010%\u001a\u0004\u0018\u00010&2\u0006\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020\u001c2\u0006\u0010*\u001a\u00020\u001c2\u0006\u0010+\u001a\u00020\u000e2\b\u0010,\u001a\u0004\u0018\u00010&H\u0002J$\u0010-\u001a\b\u0012\u0004\u0012\u00020.0$2\u0006\u0010/\u001a\u00020\u000e2\f\u00100\u001a\b\u0012\u0004\u0012\u00020.0$H\u0007J*\u00101\u001a\u0004\u0018\u00010&2\u0006\u00102\u001a\u00020(2\u0006\u0010)\u001a\u00020\u001c2\u0006\u0010*\u001a\u00020\u001c2\u0006\u00103\u001a\u00020\u000eH\u0002J\u0010\u00104\u001a\u00020\u00122\u0006\u00105\u001a\u00020\"H\u0007J\u0018\u00106\u001a\u00020\u00122\u0010\u00107\u001a\f\u0012\u0006\u0012\u0004\u0018\u00010\u000e\u0018\u00010\rJ\u0010\u00108\u001a\u00020\u00122\u0006\u00105\u001a\u00020\"H\u0007R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0011\u0010\t\u001a\u00020\n8F¢\u0006\u0006\u001a\u0004\b\t\u0010\u000bR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0019\u0010\f\u001a\n\u0012\u0004\u0012\u00020\u000e\u0018\u00010\r8F¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0010¨\u00069"}, d2 = {"Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;", "", "logger", "Lcom/onesignal/OSLogger;", "dbHelper", "Lcom/onesignal/OneSignalDb;", "preferences", "Lcom/onesignal/OSSharedPreferences;", "(Lcom/onesignal/OSLogger;Lcom/onesignal/OneSignalDb;Lcom/onesignal/OSSharedPreferences;)V", "isOutcomesV2ServiceEnabled", "", "()Z", "unattributedUniqueOutcomeEventsSentByChannel", "", "", "getUnattributedUniqueOutcomeEventsSentByChannel", "()Ljava/util/Set;", "addIdToListFromChannel", "", "cachedUniqueOutcomes", "", "Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;", "channelIds", "Lorg/json/JSONArray;", "channel", "Lcom/onesignal/influence/domain/OSInfluenceChannel;", "addIdsToListFromSource", "sourceBody", "Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;", "cleanCachedUniqueOutcomeEventNotifications", "notificationTableName", "notificationIdColumnName", "deleteOldOutcomeEvent", NotificationCompat.CATEGORY_EVENT, "Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;", "getAllEventsToSend", "", "getIAMInfluenceSource", "Lcom/onesignal/outcomes/domain/OSOutcomeSource;", "iamInfluenceType", "Lcom/onesignal/influence/domain/OSInfluenceType;", "directSourceBody", "indirectSourceBody", "iamIds", "source", "getNotCachedUniqueInfluencesForOutcome", "Lcom/onesignal/influence/domain/OSInfluence;", "name", "influences", "getNotificationInfluenceSource", "notificationInfluenceType", "notificationIds", "saveOutcomeEvent", "eventParams", "saveUnattributedUniqueOutcomeEventsSentByChannel", "unattributedUniqueOutcomeEvents", "saveUniqueOutcomeEventParams", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class OSOutcomeEventsCache {
    private final OneSignalDb dbHelper;
    private final OSLogger logger;
    private final OSSharedPreferences preferences;
    @Metadata(k = 3, mv = {1, 5, 1}, xi = 48)
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[OSInfluenceType.values().length];
            iArr[OSInfluenceType.DIRECT.ordinal()] = 1;
            iArr[OSInfluenceType.INDIRECT.ordinal()] = 2;
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public OSOutcomeEventsCache(OSLogger logger, OneSignalDb dbHelper, OSSharedPreferences preferences) {
        Intrinsics.checkNotNullParameter(logger, "logger");
        Intrinsics.checkNotNullParameter(dbHelper, "dbHelper");
        Intrinsics.checkNotNullParameter(preferences, "preferences");
        this.logger = logger;
        this.dbHelper = dbHelper;
        this.preferences = preferences;
    }

    public final boolean isOutcomesV2ServiceEnabled() {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return oSSharedPreferences.getBool(oSSharedPreferences.getPreferencesName(), this.preferences.getOutcomesV2KeyName(), false);
    }

    public final Set<String> getUnattributedUniqueOutcomeEventsSentByChannel() {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return oSSharedPreferences.getStringSet(oSSharedPreferences.getPreferencesName(), OSOutcomeConstants.PREFS_OS_UNATTRIBUTED_UNIQUE_OUTCOME_EVENTS_SENT, null);
    }

    public final void saveUnattributedUniqueOutcomeEventsSentByChannel(Set<String> unattributedUniqueOutcomeEvents) {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        String preferencesName = oSSharedPreferences.getPreferencesName();
        Intrinsics.checkNotNull(unattributedUniqueOutcomeEvents);
        oSSharedPreferences.saveStringSet(preferencesName, OSOutcomeConstants.PREFS_OS_UNATTRIBUTED_UNIQUE_OUTCOME_EVENTS_SENT, unattributedUniqueOutcomeEvents);
    }

    public final synchronized void deleteOldOutcomeEvent(OSOutcomeEventParams event) {
        Intrinsics.checkNotNullParameter(event, "event");
        this.dbHelper.delete("outcome", "timestamp = ?", new String[]{String.valueOf(event.getTimestamp())});
    }

    public final synchronized void saveOutcomeEvent(OSOutcomeEventParams eventParams) {
        OSOutcomeSourceBody directBody;
        OSOutcomeSourceBody indirectBody;
        Intrinsics.checkNotNullParameter(eventParams, "eventParams");
        JSONArray jSONArray = new JSONArray();
        JSONArray jSONArray2 = new JSONArray();
        OSInfluenceType oSInfluenceType = OSInfluenceType.UNATTRIBUTED;
        OSInfluenceType oSInfluenceType2 = OSInfluenceType.UNATTRIBUTED;
        OSOutcomeSource outcomeSource = eventParams.getOutcomeSource();
        if (outcomeSource != null && (directBody = outcomeSource.getDirectBody()) != null) {
            JSONArray notificationIds = directBody.getNotificationIds();
            if (notificationIds != null && notificationIds.length() > 0) {
                oSInfluenceType = OSInfluenceType.DIRECT;
                jSONArray = notificationIds;
            }
            JSONArray inAppMessagesIds = directBody.getInAppMessagesIds();
            if (inAppMessagesIds != null && inAppMessagesIds.length() > 0) {
                oSInfluenceType2 = OSInfluenceType.DIRECT;
                jSONArray2 = inAppMessagesIds;
            }
        }
        OSOutcomeSource outcomeSource2 = eventParams.getOutcomeSource();
        if (outcomeSource2 != null && (indirectBody = outcomeSource2.getIndirectBody()) != null) {
            JSONArray notificationIds2 = indirectBody.getNotificationIds();
            if (notificationIds2 != null && notificationIds2.length() > 0) {
                oSInfluenceType = OSInfluenceType.INDIRECT;
                jSONArray = notificationIds2;
            }
            JSONArray inAppMessagesIds2 = indirectBody.getInAppMessagesIds();
            if (inAppMessagesIds2 != null && inAppMessagesIds2.length() > 0) {
                oSInfluenceType2 = OSInfluenceType.INDIRECT;
                jSONArray2 = inAppMessagesIds2;
            }
        }
        ContentValues contentValues = new ContentValues();
        contentValues.put("notification_ids", jSONArray.toString());
        contentValues.put(OutcomeEventsTable.COLUMN_NAME_IAM_IDS, jSONArray2.toString());
        String string = oSInfluenceType.toString();
        if (string != null) {
            String lowerCase = string.toLowerCase();
            Intrinsics.checkNotNullExpressionValue(lowerCase, "(this as java.lang.String).toLowerCase()");
            contentValues.put(OutcomeEventsTable.COLUMN_NAME_NOTIFICATION_INFLUENCE_TYPE, lowerCase);
            String string2 = oSInfluenceType2.toString();
            if (string2 != null) {
                String lowerCase2 = string2.toLowerCase();
                Intrinsics.checkNotNullExpressionValue(lowerCase2, "(this as java.lang.String).toLowerCase()");
                contentValues.put(OutcomeEventsTable.COLUMN_NAME_IAM_INFLUENCE_TYPE, lowerCase2);
                contentValues.put("name", eventParams.getOutcomeId());
                contentValues.put("weight", Float.valueOf(eventParams.getWeight()));
                contentValues.put("timestamp", Long.valueOf(eventParams.getTimestamp()));
                this.dbHelper.insert("outcome", null, contentValues);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type java.lang.String");
            }
        } else {
            throw new NullPointerException("null cannot be cast to non-null type java.lang.String");
        }
    }

    public final synchronized List<OSOutcomeEventParams> getAllEventsToSend() {
        ArrayList arrayList;
        arrayList = new ArrayList();
        Cursor cursor = null;
        try {
            Cursor cursorQuery = this.dbHelper.query("outcome", null, null, null, null, null, null);
            try {
                if (cursorQuery.moveToFirst()) {
                    do {
                        OSInfluenceType oSInfluenceTypeFromString = OSInfluenceType.INSTANCE.fromString(cursorQuery.getString(cursorQuery.getColumnIndex(OutcomeEventsTable.COLUMN_NAME_NOTIFICATION_INFLUENCE_TYPE)));
                        OSInfluenceType oSInfluenceTypeFromString2 = OSInfluenceType.INSTANCE.fromString(cursorQuery.getString(cursorQuery.getColumnIndex(OutcomeEventsTable.COLUMN_NAME_IAM_INFLUENCE_TYPE)));
                        String string = cursorQuery.getString(cursorQuery.getColumnIndex("notification_ids"));
                        if (string == null) {
                            string = "[]";
                        }
                        String string2 = cursorQuery.getString(cursorQuery.getColumnIndex(OutcomeEventsTable.COLUMN_NAME_IAM_IDS));
                        if (string2 == null) {
                            string2 = "[]";
                        }
                        String str = string2;
                        String name = cursorQuery.getString(cursorQuery.getColumnIndex("name"));
                        float f = cursorQuery.getFloat(cursorQuery.getColumnIndex("weight"));
                        long j = cursorQuery.getLong(cursorQuery.getColumnIndex("timestamp"));
                        try {
                            OSOutcomeSourceBody oSOutcomeSourceBody = new OSOutcomeSourceBody(null, null, 3, null);
                            OSOutcomeSourceBody oSOutcomeSourceBody2 = new OSOutcomeSourceBody(null, null, 3, null);
                            OSOutcomeSource notificationInfluenceSource = getNotificationInfluenceSource(oSInfluenceTypeFromString, oSOutcomeSourceBody, oSOutcomeSourceBody2, string);
                            getIAMInfluenceSource(oSInfluenceTypeFromString2, oSOutcomeSourceBody, oSOutcomeSourceBody2, str, notificationInfluenceSource);
                            if (notificationInfluenceSource == null) {
                                notificationInfluenceSource = new OSOutcomeSource(null, null);
                            }
                            Intrinsics.checkNotNullExpressionValue(name, "name");
                            arrayList.add(new OSOutcomeEventParams(name, notificationInfluenceSource, f, j));
                        } catch (JSONException e) {
                            this.logger.error("Generating JSONArray from notifications ids outcome:JSON Failed.", e);
                        }
                    } while (cursorQuery.moveToNext());
                }
                if (cursorQuery != null && !cursorQuery.isClosed()) {
                    cursorQuery.close();
                }
            } catch (Throwable th) {
                th = th;
                cursor = cursorQuery;
                if (cursor != null && !cursor.isClosed()) {
                    cursor.close();
                }
                throw th;
            }
        } catch (Throwable th2) {
            th = th2;
        }
        return arrayList;
    }

    private final OSOutcomeSource getNotificationInfluenceSource(OSInfluenceType notificationInfluenceType, OSOutcomeSourceBody directSourceBody, OSOutcomeSourceBody indirectSourceBody, String notificationIds) {
        OSOutcomeSource oSOutcomeSource;
        int i = WhenMappings.$EnumSwitchMapping$0[notificationInfluenceType.ordinal()];
        if (i == 1) {
            directSourceBody.setNotificationIds(new JSONArray(notificationIds));
            oSOutcomeSource = new OSOutcomeSource(directSourceBody, null);
        } else if (i == 2) {
            indirectSourceBody.setNotificationIds(new JSONArray(notificationIds));
            oSOutcomeSource = new OSOutcomeSource(null, indirectSourceBody);
        } else {
            return null;
        }
        return oSOutcomeSource;
    }

    private final OSOutcomeSource getIAMInfluenceSource(OSInfluenceType iamInfluenceType, OSOutcomeSourceBody directSourceBody, OSOutcomeSourceBody indirectSourceBody, String iamIds, OSOutcomeSource source) {
        int i = WhenMappings.$EnumSwitchMapping$0[iamInfluenceType.ordinal()];
        if (i == 1) {
            directSourceBody.setInAppMessagesIds(new JSONArray(iamIds));
            OSOutcomeSource directBody = source == null ? null : source.setDirectBody(directSourceBody);
            return directBody == null ? new OSOutcomeSource(directSourceBody, null) : directBody;
        }
        if (i != 2) {
            return source;
        }
        indirectSourceBody.setInAppMessagesIds(new JSONArray(iamIds));
        OSOutcomeSource indirectBody = source == null ? null : source.setIndirectBody(indirectSourceBody);
        return indirectBody == null ? new OSOutcomeSource(null, indirectSourceBody) : indirectBody;
    }

    private final void addIdToListFromChannel(List<OSCachedUniqueOutcome> cachedUniqueOutcomes, JSONArray channelIds, OSInfluenceChannel channel) {
        int length;
        if (channelIds == null || (length = channelIds.length()) <= 0) {
            return;
        }
        int i = 0;
        while (true) {
            int i2 = i + 1;
            try {
                String influenceId = channelIds.getString(i);
                Intrinsics.checkNotNullExpressionValue(influenceId, "influenceId");
                cachedUniqueOutcomes.add(new OSCachedUniqueOutcome(influenceId, channel));
            } catch (JSONException e) {
                e.printStackTrace();
            }
            if (i2 >= length) {
                return;
            } else {
                i = i2;
            }
        }
    }

    private final void addIdsToListFromSource(List<OSCachedUniqueOutcome> cachedUniqueOutcomes, OSOutcomeSourceBody sourceBody) {
        if (sourceBody == null) {
            return;
        }
        JSONArray inAppMessagesIds = sourceBody.getInAppMessagesIds();
        JSONArray notificationIds = sourceBody.getNotificationIds();
        addIdToListFromChannel(cachedUniqueOutcomes, inAppMessagesIds, OSInfluenceChannel.IAM);
        addIdToListFromChannel(cachedUniqueOutcomes, notificationIds, OSInfluenceChannel.NOTIFICATION);
    }

    public final synchronized void saveUniqueOutcomeEventParams(OSOutcomeEventParams eventParams) {
        Intrinsics.checkNotNullParameter(eventParams, "eventParams");
        this.logger.debug(Intrinsics.stringPlus("OneSignal saveUniqueOutcomeEventParams: ", eventParams));
        String outcomeId = eventParams.getOutcomeId();
        ArrayList arrayList = new ArrayList();
        OSOutcomeSource outcomeSource = eventParams.getOutcomeSource();
        OSOutcomeSourceBody directBody = outcomeSource == null ? null : outcomeSource.getDirectBody();
        OSOutcomeSource outcomeSource2 = eventParams.getOutcomeSource();
        OSOutcomeSourceBody indirectBody = outcomeSource2 == null ? null : outcomeSource2.getIndirectBody();
        addIdsToListFromSource(arrayList, directBody);
        addIdsToListFromSource(arrayList, indirectBody);
        for (OSCachedUniqueOutcome oSCachedUniqueOutcome : arrayList) {
            ContentValues contentValues = new ContentValues();
            contentValues.put("channel_influence_id", oSCachedUniqueOutcome.getInfluenceId());
            contentValues.put("channel_type", oSCachedUniqueOutcome.getChannel().getNameValue());
            contentValues.put("name", outcomeId);
            this.dbHelper.insert("cached_unique_outcome", null, contentValues);
        }
    }

    public final synchronized List<OSInfluence> getNotCachedUniqueInfluencesForOutcome(String name, List<OSInfluence> influences) {
        ArrayList arrayList;
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(influences, "influences");
        arrayList = new ArrayList();
        Cursor cursorQuery = null;
        try {
            try {
                for (OSInfluence oSInfluence : influences) {
                    JSONArray jSONArray = new JSONArray();
                    JSONArray ids = oSInfluence.getIds();
                    if (ids != null) {
                        int length = ids.length();
                        if (length > 0) {
                            int i = 0;
                            while (true) {
                                int i2 = i + 1;
                                String string = ids.getString(i);
                                cursorQuery = this.dbHelper.query("cached_unique_outcome", new String[0], "channel_influence_id = ? AND channel_type = ? AND name = ?", new String[]{string, oSInfluence.getInfluenceChannel().getNameValue(), name}, null, null, null, "1");
                                if (cursorQuery.getCount() == 0) {
                                    jSONArray.put(string);
                                }
                                if (i2 >= length) {
                                    break;
                                }
                                i = i2;
                            }
                        }
                        if (jSONArray.length() > 0) {
                            OSInfluence oSInfluenceCopy = oSInfluence.copy();
                            oSInfluenceCopy.setIds(jSONArray);
                            arrayList.add(oSInfluenceCopy);
                        }
                    }
                }
            } catch (Throwable th) {
                if (0 != 0 && !cursorQuery.isClosed()) {
                    cursorQuery.close();
                }
                throw th;
            }
        } catch (JSONException e) {
            e.printStackTrace();
            if (cursorQuery != null && !cursorQuery.isClosed()) {
            }
        }
        if (cursorQuery != null && !cursorQuery.isClosed()) {
            cursorQuery.close();
        }
        return arrayList;
    }

    public final synchronized void cleanCachedUniqueOutcomeEventNotifications(String notificationTableName, String notificationIdColumnName) {
        Intrinsics.checkNotNullParameter(notificationTableName, "notificationTableName");
        Intrinsics.checkNotNullParameter(notificationIdColumnName, "notificationIdColumnName");
        StringBuilder sbAppend = new StringBuilder("NOT EXISTS(SELECT NULL FROM ").append(notificationTableName).append(" n WHERE n.").append(notificationIdColumnName).append(" = channel_influence_id AND channel_type = \"");
        String nameValue = OSInfluenceChannel.NOTIFICATION.getNameValue();
        Locale ROOT = Locale.ROOT;
        Intrinsics.checkNotNullExpressionValue(ROOT, "ROOT");
        if (nameValue == null) {
            throw new NullPointerException("null cannot be cast to non-null type java.lang.String");
        }
        String lowerCase = nameValue.toLowerCase(ROOT);
        Intrinsics.checkNotNullExpressionValue(lowerCase, "(this as java.lang.String).toLowerCase(locale)");
        this.dbHelper.delete("cached_unique_outcome", sbAppend.append(lowerCase).append("\")").toString(), null);
    }
}

