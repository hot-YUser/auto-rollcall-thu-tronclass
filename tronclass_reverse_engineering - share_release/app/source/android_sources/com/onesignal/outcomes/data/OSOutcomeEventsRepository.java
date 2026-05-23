package com.onesignal.outcomes.data;

import androidx.core.app.NotificationCompat;
import com.onesignal.OSLogger;
import com.onesignal.OneSignalApiResponseHandler;
import com.onesignal.influence.domain.OSInfluence;
import com.onesignal.outcomes.domain.OSOutcomeEventParams;
import java.util.List;
import java.util.Set;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\"\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\b \u0018\u00002\u00020\u0001B\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0002\u0010\bJ\u0018\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0010H\u0016J$\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00140\u00132\u0006\u0010\u0015\u001a\u00020\u00102\f\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00140\u0013H\u0016J\u000e\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00180\u0013H\u0016J\u0010\u0010\u0019\u001a\n\u0012\u0004\u0012\u00020\u0010\u0018\u00010\u001aH\u0016J\u0010\u0010\u001b\u001a\u00020\u000e2\u0006\u0010\u001c\u001a\u00020\u0018H\u0016J(\u0010\u001d\u001a\u00020\u000e2\u0006\u0010\u001e\u001a\u00020\u00102\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\u00182\u0006\u0010\"\u001a\u00020#H&J\u0010\u0010$\u001a\u00020\u000e2\u0006\u0010!\u001a\u00020\u0018H\u0016J\u0016\u0010%\u001a\u00020\u000e2\f\u0010&\u001a\b\u0012\u0004\u0012\u00020\u00100\u001aH\u0016J\u0010\u0010'\u001a\u00020\u000e2\u0006\u0010(\u001a\u00020\u0018H\u0016R\u0014\u0010\u0002\u001a\u00020\u0003X\u0084\u0004¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006)"}, d2 = {"Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;", "Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;", "logger", "Lcom/onesignal/OSLogger;", "outcomeEventsCache", "Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;", "outcomeEventsService", "Lcom/onesignal/outcomes/data/OutcomeEventsService;", "(Lcom/onesignal/OSLogger;Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;Lcom/onesignal/outcomes/data/OutcomeEventsService;)V", "getLogger", "()Lcom/onesignal/OSLogger;", "getOutcomeEventsService", "()Lcom/onesignal/outcomes/data/OutcomeEventsService;", "cleanCachedUniqueOutcomeEventNotifications", "", "notificationTableName", "", "notificationIdColumnName", "getNotCachedUniqueOutcome", "", "Lcom/onesignal/influence/domain/OSInfluence;", "name", "influences", "getSavedOutcomeEvents", "Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;", "getUnattributedUniqueOutcomeEventsSent", "", "removeEvent", "outcomeEvent", "requestMeasureOutcomeEvent", "appId", "deviceType", "", NotificationCompat.CATEGORY_EVENT, "responseHandler", "Lcom/onesignal/OneSignalApiResponseHandler;", "saveOutcomeEvent", "saveUnattributedUniqueOutcomeEventsSent", "unattributedUniqueOutcomeEvents", "saveUniqueOutcomeNotifications", "eventParams", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public abstract class OSOutcomeEventsRepository implements com.onesignal.outcomes.domain.OSOutcomeEventsRepository {
    private final OSLogger logger;
    private final OSOutcomeEventsCache outcomeEventsCache;
    private final OutcomeEventsService outcomeEventsService;

    @Override // com.onesignal.outcomes.domain.OSOutcomeEventsRepository
    public abstract void requestMeasureOutcomeEvent(String appId, int deviceType, OSOutcomeEventParams event, OneSignalApiResponseHandler responseHandler);

    public OSOutcomeEventsRepository(OSLogger logger, OSOutcomeEventsCache outcomeEventsCache, OutcomeEventsService outcomeEventsService) {
        Intrinsics.checkNotNullParameter(logger, "logger");
        Intrinsics.checkNotNullParameter(outcomeEventsCache, "outcomeEventsCache");
        Intrinsics.checkNotNullParameter(outcomeEventsService, "outcomeEventsService");
        this.logger = logger;
        this.outcomeEventsCache = outcomeEventsCache;
        this.outcomeEventsService = outcomeEventsService;
    }

    protected final OSLogger getLogger() {
        return this.logger;
    }

    public final OutcomeEventsService getOutcomeEventsService() {
        return this.outcomeEventsService;
    }

    @Override // com.onesignal.outcomes.domain.OSOutcomeEventsRepository
    public List<OSOutcomeEventParams> getSavedOutcomeEvents() {
        return this.outcomeEventsCache.getAllEventsToSend();
    }

    @Override // com.onesignal.outcomes.domain.OSOutcomeEventsRepository
    public void saveOutcomeEvent(OSOutcomeEventParams event) {
        Intrinsics.checkNotNullParameter(event, "event");
        this.outcomeEventsCache.saveOutcomeEvent(event);
    }

    @Override // com.onesignal.outcomes.domain.OSOutcomeEventsRepository
    public void removeEvent(OSOutcomeEventParams outcomeEvent) {
        Intrinsics.checkNotNullParameter(outcomeEvent, "outcomeEvent");
        this.outcomeEventsCache.deleteOldOutcomeEvent(outcomeEvent);
    }

    @Override // com.onesignal.outcomes.domain.OSOutcomeEventsRepository
    public void saveUniqueOutcomeNotifications(OSOutcomeEventParams eventParams) {
        Intrinsics.checkNotNullParameter(eventParams, "eventParams");
        this.outcomeEventsCache.saveUniqueOutcomeEventParams(eventParams);
    }

    @Override // com.onesignal.outcomes.domain.OSOutcomeEventsRepository
    public List<OSInfluence> getNotCachedUniqueOutcome(String name, List<OSInfluence> influences) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(influences, "influences");
        List<OSInfluence> notCachedUniqueInfluencesForOutcome = this.outcomeEventsCache.getNotCachedUniqueInfluencesForOutcome(name, influences);
        this.logger.debug(Intrinsics.stringPlus("OneSignal getNotCachedUniqueOutcome influences: ", notCachedUniqueInfluencesForOutcome));
        return notCachedUniqueInfluencesForOutcome;
    }

    @Override // com.onesignal.outcomes.domain.OSOutcomeEventsRepository
    public Set<String> getUnattributedUniqueOutcomeEventsSent() {
        Set<String> unattributedUniqueOutcomeEventsSentByChannel = this.outcomeEventsCache.getUnattributedUniqueOutcomeEventsSentByChannel();
        this.logger.debug(Intrinsics.stringPlus("OneSignal getUnattributedUniqueOutcomeEventsSentByChannel: ", unattributedUniqueOutcomeEventsSentByChannel));
        return unattributedUniqueOutcomeEventsSentByChannel;
    }

    @Override // com.onesignal.outcomes.domain.OSOutcomeEventsRepository
    public void saveUnattributedUniqueOutcomeEventsSent(Set<String> unattributedUniqueOutcomeEvents) {
        Intrinsics.checkNotNullParameter(unattributedUniqueOutcomeEvents, "unattributedUniqueOutcomeEvents");
        this.logger.debug(Intrinsics.stringPlus("OneSignal save unattributedUniqueOutcomeEvents: ", unattributedUniqueOutcomeEvents));
        this.outcomeEventsCache.saveUnattributedUniqueOutcomeEventsSentByChannel(unattributedUniqueOutcomeEvents);
    }

    @Override // com.onesignal.outcomes.domain.OSOutcomeEventsRepository
    public void cleanCachedUniqueOutcomeEventNotifications(String notificationTableName, String notificationIdColumnName) {
        Intrinsics.checkNotNullParameter(notificationTableName, "notificationTableName");
        Intrinsics.checkNotNullParameter(notificationIdColumnName, "notificationIdColumnName");
        this.outcomeEventsCache.cleanCachedUniqueOutcomeEventNotifications(notificationTableName, notificationIdColumnName);
    }
}

