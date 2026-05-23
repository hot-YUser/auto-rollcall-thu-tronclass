package com.onesignal.outcomes.data;

import androidx.core.app.NotificationCompat;
import com.onesignal.OSLogger;
import com.onesignal.OneSignalApiResponseHandler;
import com.onesignal.outcomes.OSOutcomeConstants;
import com.onesignal.outcomes.domain.OSOutcomeEventParams;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONException;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0000\u0018\u00002\u00020\u0001B\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0002\u0010\bJ(\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0016¨\u0006\u0013"}, d2 = {"Lcom/onesignal/outcomes/data/OSOutcomeEventsV2Repository;", "Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;", "logger", "Lcom/onesignal/OSLogger;", "outcomeEventsCache", "Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;", "outcomeEventsService", "Lcom/onesignal/outcomes/data/OutcomeEventsService;", "(Lcom/onesignal/OSLogger;Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;Lcom/onesignal/outcomes/data/OutcomeEventsService;)V", "requestMeasureOutcomeEvent", "", "appId", "", "deviceType", "", NotificationCompat.CATEGORY_EVENT, "Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;", "responseHandler", "Lcom/onesignal/OneSignalApiResponseHandler;", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class OSOutcomeEventsV2Repository extends OSOutcomeEventsRepository {
    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    public OSOutcomeEventsV2Repository(OSLogger logger, OSOutcomeEventsCache outcomeEventsCache, OutcomeEventsService outcomeEventsService) {
        super(logger, outcomeEventsCache, outcomeEventsService);
        Intrinsics.checkNotNullParameter(logger, "logger");
        Intrinsics.checkNotNullParameter(outcomeEventsCache, "outcomeEventsCache");
        Intrinsics.checkNotNullParameter(outcomeEventsService, "outcomeEventsService");
    }

    @Override // com.onesignal.outcomes.data.OSOutcomeEventsRepository, com.onesignal.outcomes.domain.OSOutcomeEventsRepository
    public void requestMeasureOutcomeEvent(String appId, int deviceType, OSOutcomeEventParams event, OneSignalApiResponseHandler responseHandler) {
        Intrinsics.checkNotNullParameter(appId, "appId");
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(responseHandler, "responseHandler");
        try {
            JSONObject jsonObject = event.toJSONObject().put(OSOutcomeConstants.APP_ID, appId).put(OSOutcomeConstants.DEVICE_TYPE, deviceType);
            OutcomeEventsService outcomeEventsService = getOutcomeEventsService();
            Intrinsics.checkNotNullExpressionValue(jsonObject, "jsonObject");
            outcomeEventsService.sendOutcomeEvent(jsonObject, responseHandler);
        } catch (JSONException e) {
            getLogger().error("Generating indirect outcome:JSON Failed.", e);
        }
    }
}

