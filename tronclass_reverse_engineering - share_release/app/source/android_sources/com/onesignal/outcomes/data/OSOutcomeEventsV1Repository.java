package com.onesignal.outcomes.data;

import androidx.core.app.NotificationCompat;
import com.onesignal.OSLogger;
import com.onesignal.OSOutcomeEvent;
import com.onesignal.OneSignalApiResponseHandler;
import com.onesignal.influence.domain.OSInfluenceType;
import com.onesignal.outcomes.OSOutcomeConstants;
import com.onesignal.outcomes.domain.OSOutcomeEventParams;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONException;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0000\u0018\u00002\u00020\u0001B\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0002\u0010\bJ(\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0002J(\u0010\u0013\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0002J(\u0010\u0014\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0011\u001a\u00020\u0012H\u0016J(\u0010\u0017\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0002¨\u0006\u0018"}, d2 = {"Lcom/onesignal/outcomes/data/OSOutcomeEventsV1Repository;", "Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;", "logger", "Lcom/onesignal/OSLogger;", "outcomeEventsCache", "Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;", "outcomeEventsService", "Lcom/onesignal/outcomes/data/OutcomeEventsService;", "(Lcom/onesignal/OSLogger;Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;Lcom/onesignal/outcomes/data/OutcomeEventsService;)V", "requestMeasureDirectOutcomeEvent", "", "appId", "", "deviceType", "", NotificationCompat.CATEGORY_EVENT, "Lcom/onesignal/OSOutcomeEvent;", "responseHandler", "Lcom/onesignal/OneSignalApiResponseHandler;", "requestMeasureIndirectOutcomeEvent", "requestMeasureOutcomeEvent", "eventParams", "Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;", "requestMeasureUnattributedOutcomeEvent", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class OSOutcomeEventsV1Repository extends OSOutcomeEventsRepository {
    @Metadata(k = 3, mv = {1, 5, 1}, xi = 48)
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[OSInfluenceType.values().length];
            iArr[OSInfluenceType.DIRECT.ordinal()] = 1;
            iArr[OSInfluenceType.INDIRECT.ordinal()] = 2;
            iArr[OSInfluenceType.UNATTRIBUTED.ordinal()] = 3;
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    public OSOutcomeEventsV1Repository(OSLogger logger, OSOutcomeEventsCache outcomeEventsCache, OutcomeEventsService outcomeEventsService) {
        super(logger, outcomeEventsCache, outcomeEventsService);
        Intrinsics.checkNotNullParameter(logger, "logger");
        Intrinsics.checkNotNullParameter(outcomeEventsCache, "outcomeEventsCache");
        Intrinsics.checkNotNullParameter(outcomeEventsService, "outcomeEventsService");
    }

    @Override // com.onesignal.outcomes.data.OSOutcomeEventsRepository, com.onesignal.outcomes.domain.OSOutcomeEventsRepository
    public void requestMeasureOutcomeEvent(String appId, int deviceType, OSOutcomeEventParams eventParams, OneSignalApiResponseHandler responseHandler) {
        Intrinsics.checkNotNullParameter(appId, "appId");
        Intrinsics.checkNotNullParameter(eventParams, "eventParams");
        Intrinsics.checkNotNullParameter(responseHandler, "responseHandler");
        OSOutcomeEvent event = OSOutcomeEvent.fromOutcomeEventParamsV2toOutcomeEventV1(eventParams);
        OSInfluenceType session = event.getSession();
        int i = session == null ? -1 : WhenMappings.$EnumSwitchMapping$0[session.ordinal()];
        if (i == 1) {
            Intrinsics.checkNotNullExpressionValue(event, "event");
            requestMeasureDirectOutcomeEvent(appId, deviceType, event, responseHandler);
        } else if (i == 2) {
            Intrinsics.checkNotNullExpressionValue(event, "event");
            requestMeasureIndirectOutcomeEvent(appId, deviceType, event, responseHandler);
        } else {
            if (i != 3) {
                return;
            }
            Intrinsics.checkNotNullExpressionValue(event, "event");
            requestMeasureUnattributedOutcomeEvent(appId, deviceType, event, responseHandler);
        }
    }

    private final void requestMeasureDirectOutcomeEvent(String appId, int deviceType, OSOutcomeEvent event, OneSignalApiResponseHandler responseHandler) {
        try {
            JSONObject jsonObject = event.toJSONObjectForMeasure().put(OSOutcomeConstants.APP_ID, appId).put(OSOutcomeConstants.DEVICE_TYPE, deviceType).put("direct", true);
            OutcomeEventsService outcomeEventsService = getOutcomeEventsService();
            Intrinsics.checkNotNullExpressionValue(jsonObject, "jsonObject");
            outcomeEventsService.sendOutcomeEvent(jsonObject, responseHandler);
        } catch (JSONException e) {
            getLogger().error("Generating direct outcome:JSON Failed.", e);
        }
    }

    private final void requestMeasureIndirectOutcomeEvent(String appId, int deviceType, OSOutcomeEvent event, OneSignalApiResponseHandler responseHandler) {
        try {
            JSONObject jsonObject = event.toJSONObjectForMeasure().put(OSOutcomeConstants.APP_ID, appId).put(OSOutcomeConstants.DEVICE_TYPE, deviceType).put("direct", false);
            OutcomeEventsService outcomeEventsService = getOutcomeEventsService();
            Intrinsics.checkNotNullExpressionValue(jsonObject, "jsonObject");
            outcomeEventsService.sendOutcomeEvent(jsonObject, responseHandler);
        } catch (JSONException e) {
            getLogger().error("Generating indirect outcome:JSON Failed.", e);
        }
    }

    private final void requestMeasureUnattributedOutcomeEvent(String appId, int deviceType, OSOutcomeEvent event, OneSignalApiResponseHandler responseHandler) {
        try {
            JSONObject jsonObject = event.toJSONObjectForMeasure().put(OSOutcomeConstants.APP_ID, appId).put(OSOutcomeConstants.DEVICE_TYPE, deviceType);
            OutcomeEventsService outcomeEventsService = getOutcomeEventsService();
            Intrinsics.checkNotNullExpressionValue(jsonObject, "jsonObject");
            outcomeEventsService.sendOutcomeEvent(jsonObject, responseHandler);
        } catch (JSONException e) {
            getLogger().error("Generating unattributed outcome:JSON Failed.", e);
        }
    }
}

