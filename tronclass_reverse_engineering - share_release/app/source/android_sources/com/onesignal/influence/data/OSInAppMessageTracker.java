package com.onesignal.influence.data;

import com.onesignal.OSLogger;
import com.onesignal.OSTime;
import com.onesignal.influence.OSInfluenceConstants;
import com.onesignal.influence.domain.OSInfluence;
import com.onesignal.influence.domain.OSInfluenceChannel;
import com.onesignal.influence.domain.OSInfluenceType;
import com.onesignal.outcomes.OSOutcomeConstants;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0000\u0018\u00002\u00020\u0001B\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0002\u0010\bJ\u0018\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020 H\u0016J\b\u0010!\u001a\u00020\u001cH\u0016J\u0012\u0010\"\u001a\u00020\u00182\b\u0010#\u001a\u0004\u0018\u00010\u0012H\u0016J\b\u0010$\u001a\u00020\u001cH\u0016J\u0010\u0010%\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u0018H\u0016R\u0014\u0010\t\u001a\u00020\n8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u000b\u0010\fR\u0014\u0010\r\u001a\u00020\u000e8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0010R\u0014\u0010\u0011\u001a\u00020\u00128VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0013\u0010\u0014R\u0014\u0010\u0015\u001a\u00020\n8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0016\u0010\fR\u0014\u0010\u0017\u001a\u00020\u00188VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0019\u0010\u001a¨\u0006'"}, d2 = {"Lcom/onesignal/influence/data/OSInAppMessageTracker;", "Lcom/onesignal/influence/data/OSChannelTracker;", "dataRepository", "Lcom/onesignal/influence/data/OSInfluenceDataRepository;", "logger", "Lcom/onesignal/OSLogger;", "timeProvider", "Lcom/onesignal/OSTime;", "(Lcom/onesignal/influence/data/OSInfluenceDataRepository;Lcom/onesignal/OSLogger;Lcom/onesignal/OSTime;)V", "channelLimit", "", "getChannelLimit", "()I", "channelType", "Lcom/onesignal/influence/domain/OSInfluenceChannel;", "getChannelType", "()Lcom/onesignal/influence/domain/OSInfluenceChannel;", "idTag", "", "getIdTag", "()Ljava/lang/String;", "indirectAttributionWindow", "getIndirectAttributionWindow", "lastChannelObjects", "Lorg/json/JSONArray;", "getLastChannelObjects", "()Lorg/json/JSONArray;", "addSessionData", "", "jsonObject", "Lorg/json/JSONObject;", "influence", "Lcom/onesignal/influence/domain/OSInfluence;", "cacheState", "getLastChannelObjectsReceivedByNewId", OSOutcomeConstants.OUTCOME_ID, "initInfluencedTypeFromCache", "saveChannelObjects", "channelObjects", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class OSInAppMessageTracker extends OSChannelTracker {
    @Override // com.onesignal.influence.data.OSChannelTracker
    public void addSessionData(JSONObject jsonObject, OSInfluence influence) {
        Intrinsics.checkNotNullParameter(jsonObject, "jsonObject");
        Intrinsics.checkNotNullParameter(influence, "influence");
    }

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    public OSInAppMessageTracker(OSInfluenceDataRepository dataRepository, OSLogger logger, OSTime timeProvider) {
        super(dataRepository, logger, timeProvider);
        Intrinsics.checkNotNullParameter(dataRepository, "dataRepository");
        Intrinsics.checkNotNullParameter(logger, "logger");
        Intrinsics.checkNotNullParameter(timeProvider, "timeProvider");
    }

    @Override // com.onesignal.influence.data.OSChannelTracker
    public String getIdTag() {
        return OSInfluenceConstants.IAM_ID_TAG;
    }

    @Override // com.onesignal.influence.data.OSChannelTracker
    public OSInfluenceChannel getChannelType() {
        return OSInfluenceChannel.IAM;
    }

    @Override // com.onesignal.influence.data.OSChannelTracker
    public JSONArray getLastChannelObjectsReceivedByNewId(String id) {
        try {
            JSONArray lastChannelObjects = getLastChannelObjects();
            try {
                JSONArray jSONArray = new JSONArray();
                int length = lastChannelObjects.length();
                if (length > 0) {
                    int i = 0;
                    while (true) {
                        int i2 = i + 1;
                        if (!Intrinsics.areEqual(id, lastChannelObjects.getJSONObject(i).getString(getIdTag()))) {
                            jSONArray.put(lastChannelObjects.getJSONObject(i));
                        }
                        if (i2 >= length) {
                            break;
                        }
                        i = i2;
                    }
                }
                return jSONArray;
            } catch (JSONException e) {
                getLogger().error("Generating tracker lastChannelObjectReceived get JSONObject ", e);
                return lastChannelObjects;
            }
        } catch (JSONException e2) {
            getLogger().error("Generating IAM tracker getLastChannelObjects JSONObject ", e2);
            return new JSONArray();
        }
    }

    @Override // com.onesignal.influence.data.OSChannelTracker
    public JSONArray getLastChannelObjects() throws JSONException {
        return getDataRepository().getLastIAMsReceivedData();
    }

    @Override // com.onesignal.influence.data.OSChannelTracker
    public int getChannelLimit() {
        return getDataRepository().getIamLimit();
    }

    @Override // com.onesignal.influence.data.OSChannelTracker
    public int getIndirectAttributionWindow() {
        return getDataRepository().getIamIndirectAttributionWindow();
    }

    @Override // com.onesignal.influence.data.OSChannelTracker
    public void saveChannelObjects(JSONArray channelObjects) {
        Intrinsics.checkNotNullParameter(channelObjects, "channelObjects");
        getDataRepository().saveIAMs(channelObjects);
    }

    @Override // com.onesignal.influence.data.OSChannelTracker
    public void initInfluencedTypeFromCache() {
        OSInfluenceType iamCachedInfluenceType = getDataRepository().getIamCachedInfluenceType();
        if (iamCachedInfluenceType.isIndirect()) {
            setIndirectIds(getLastReceivedIds());
        }
        Unit unit = Unit.INSTANCE;
        setInfluenceType(iamCachedInfluenceType);
        getLogger().debug(Intrinsics.stringPlus("OneSignal InAppMessageTracker initInfluencedTypeFromCache: ", this));
    }

    @Override // com.onesignal.influence.data.OSChannelTracker
    public void cacheState() {
        OSInfluenceType influenceType = getInfluenceType();
        if (influenceType == null) {
            influenceType = OSInfluenceType.UNATTRIBUTED;
        }
        OSInfluenceDataRepository dataRepository = getDataRepository();
        if (influenceType == OSInfluenceType.DIRECT) {
            influenceType = OSInfluenceType.INDIRECT;
        }
        dataRepository.cacheIAMInfluenceType(influenceType);
    }
}

