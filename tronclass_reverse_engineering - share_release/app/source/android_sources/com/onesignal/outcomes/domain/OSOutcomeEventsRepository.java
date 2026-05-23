package com.onesignal.outcomes.domain;

import androidx.core.app.NotificationCompat;
import com.onesignal.OneSignalApiResponseHandler;
import com.onesignal.influence.domain.OSInfluence;
import java.util.List;
import java.util.Set;
import kotlin.Metadata;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\"\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\bf\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005H&J$\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\b2\u0006\u0010\n\u001a\u00020\u00052\f\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\t0\bH&J\u000e\u0010\f\u001a\b\u0012\u0004\u0012\u00020\r0\bH&J\u0010\u0010\u000e\u001a\n\u0012\u0004\u0012\u00020\u0005\u0018\u00010\u000fH&J\u0010\u0010\u0010\u001a\u00020\u00032\u0006\u0010\u0011\u001a\u00020\rH&J(\u0010\u0012\u001a\u00020\u00032\u0006\u0010\u0013\u001a\u00020\u00052\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\r2\u0006\u0010\u0017\u001a\u00020\u0018H&J\u0010\u0010\u0019\u001a\u00020\u00032\u0006\u0010\u0016\u001a\u00020\rH&J\u0016\u0010\u001a\u001a\u00020\u00032\f\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u00050\u000fH&J\u0010\u0010\u001c\u001a\u00020\u00032\u0006\u0010\u001d\u001a\u00020\rH&¨\u0006\u001e"}, d2 = {"Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;", "", "cleanCachedUniqueOutcomeEventNotifications", "", "notificationTableName", "", "notificationIdColumnName", "getNotCachedUniqueOutcome", "", "Lcom/onesignal/influence/domain/OSInfluence;", "name", "influences", "getSavedOutcomeEvents", "Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;", "getUnattributedUniqueOutcomeEventsSent", "", "removeEvent", "outcomeEvent", "requestMeasureOutcomeEvent", "appId", "deviceType", "", NotificationCompat.CATEGORY_EVENT, "responseHandler", "Lcom/onesignal/OneSignalApiResponseHandler;", "saveOutcomeEvent", "saveUnattributedUniqueOutcomeEventsSent", "unattributedUniqueOutcomeEvents", "saveUniqueOutcomeNotifications", "eventParams", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public interface OSOutcomeEventsRepository {
    void cleanCachedUniqueOutcomeEventNotifications(String notificationTableName, String notificationIdColumnName);

    List<OSInfluence> getNotCachedUniqueOutcome(String name, List<OSInfluence> influences);

    List<OSOutcomeEventParams> getSavedOutcomeEvents();

    Set<String> getUnattributedUniqueOutcomeEventsSent();

    void removeEvent(OSOutcomeEventParams outcomeEvent);

    void requestMeasureOutcomeEvent(String appId, int deviceType, OSOutcomeEventParams event, OneSignalApiResponseHandler responseHandler);

    void saveOutcomeEvent(OSOutcomeEventParams event);

    void saveUnattributedUniqueOutcomeEventsSent(Set<String> unattributedUniqueOutcomeEvents);

    void saveUniqueOutcomeNotifications(OSOutcomeEventParams eventParams);
}

