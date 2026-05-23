package com.onesignal.outcomes.data;

import com.onesignal.OneSignalAPIClient;
import com.onesignal.OneSignalApiResponseHandler;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0000\u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004J\u0018\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\nH\u0016¨\u0006\u000b"}, d2 = {"Lcom/onesignal/outcomes/data/OSOutcomeEventsV1Service;", "Lcom/onesignal/outcomes/data/OSOutcomeEventsClient;", "client", "Lcom/onesignal/OneSignalAPIClient;", "(Lcom/onesignal/OneSignalAPIClient;)V", "sendOutcomeEvent", "", "jsonObject", "Lorg/json/JSONObject;", "responseHandler", "Lcom/onesignal/OneSignalApiResponseHandler;", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class OSOutcomeEventsV1Service extends OSOutcomeEventsClient {
    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    public OSOutcomeEventsV1Service(OneSignalAPIClient client) {
        super(client);
        Intrinsics.checkNotNullParameter(client, "client");
    }

    @Override // com.onesignal.outcomes.data.OSOutcomeEventsClient, com.onesignal.outcomes.data.OutcomeEventsService
    public void sendOutcomeEvent(JSONObject jsonObject, OneSignalApiResponseHandler responseHandler) {
        Intrinsics.checkNotNullParameter(jsonObject, "jsonObject");
        Intrinsics.checkNotNullParameter(responseHandler, "responseHandler");
        getClient().post("outcomes/measure", jsonObject, responseHandler);
    }
}

