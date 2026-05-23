package com.onesignal.influence.data;

import com.onesignal.OSLogger;
import com.onesignal.OSTime;
import com.onesignal.influence.domain.OSInfluence;
import com.onesignal.influence.domain.OSInfluenceChannel;
import com.onesignal.influence.domain.OSInfluenceType;
import com.onesignal.outcomes.OSOutcomeConstants;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000d\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\f\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\b&\u0018\u00002\u00020\u0001B\u001f\b\u0000\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0002\u0010\bJ\u0018\u0010<\u001a\u00020=2\u0006\u0010>\u001a\u00020?2\u0006\u0010@\u001a\u00020\u0012H&J\b\u0010A\u001a\u00020=H&J\u0013\u0010B\u001a\u0002002\b\u0010C\u001a\u0004\u0018\u00010\u0001H\u0096\u0002J\u0012\u0010D\u001a\u00020$2\b\u0010E\u001a\u0004\u0018\u00010\u001aH&J\b\u0010F\u001a\u00020\nH\u0016J\b\u0010G\u001a\u00020=H&J\u0006\u0010H\u001a\u00020=J\u0010\u0010I\u001a\u00020=2\u0006\u0010J\u001a\u00020$H&J\u0010\u0010K\u001a\u00020=2\b\u0010E\u001a\u0004\u0018\u00010\u001aJ\b\u0010L\u001a\u00020\u001aH\u0016R\u0012\u0010\t\u001a\u00020\nX¦\u0004¢\u0006\u0006\u001a\u0004\b\u000b\u0010\fR\u0012\u0010\r\u001a\u00020\u000eX¦\u0004¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0011\u001a\u00020\u00128F¢\u0006\u0006\u001a\u0004\b\u0013\u0010\u0014R\u001a\u0010\u0002\u001a\u00020\u0003X\u0084\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0015\u0010\u0016\"\u0004\b\u0017\u0010\u0018R\u001c\u0010\u0019\u001a\u0004\u0018\u00010\u001aX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001b\u0010\u001c\"\u0004\b\u001d\u0010\u001eR\u0012\u0010\u001f\u001a\u00020\u001aX¦\u0004¢\u0006\u0006\u001a\u0004\b \u0010\u001cR\u0012\u0010!\u001a\u00020\nX¦\u0004¢\u0006\u0006\u001a\u0004\b\"\u0010\fR\u001c\u0010#\u001a\u0004\u0018\u00010$X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b%\u0010&\"\u0004\b'\u0010(R\u001c\u0010)\u001a\u0004\u0018\u00010*X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b+\u0010,\"\u0004\b-\u0010.R\u0014\u0010/\u001a\u0002008BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b/\u00101R\u0014\u00102\u001a\u0002008BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b2\u00101R\u0014\u00103\u001a\u0002008BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b3\u00101R\u0014\u00104\u001a\u00020$8fX¦\u0004¢\u0006\u0006\u001a\u0004\b5\u0010&R\u0011\u00106\u001a\u00020$8F¢\u0006\u0006\u001a\u0004\b7\u0010&R\u001a\u0010\u0004\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b8\u00109\"\u0004\b:\u0010;R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006M"}, d2 = {"Lcom/onesignal/influence/data/OSChannelTracker;", "", "dataRepository", "Lcom/onesignal/influence/data/OSInfluenceDataRepository;", "logger", "Lcom/onesignal/OSLogger;", "timeProvider", "Lcom/onesignal/OSTime;", "(Lcom/onesignal/influence/data/OSInfluenceDataRepository;Lcom/onesignal/OSLogger;Lcom/onesignal/OSTime;)V", "channelLimit", "", "getChannelLimit", "()I", "channelType", "Lcom/onesignal/influence/domain/OSInfluenceChannel;", "getChannelType", "()Lcom/onesignal/influence/domain/OSInfluenceChannel;", "currentSessionInfluence", "Lcom/onesignal/influence/domain/OSInfluence;", "getCurrentSessionInfluence", "()Lcom/onesignal/influence/domain/OSInfluence;", "getDataRepository", "()Lcom/onesignal/influence/data/OSInfluenceDataRepository;", "setDataRepository", "(Lcom/onesignal/influence/data/OSInfluenceDataRepository;)V", "directId", "", "getDirectId", "()Ljava/lang/String;", "setDirectId", "(Ljava/lang/String;)V", "idTag", "getIdTag", "indirectAttributionWindow", "getIndirectAttributionWindow", "indirectIds", "Lorg/json/JSONArray;", "getIndirectIds", "()Lorg/json/JSONArray;", "setIndirectIds", "(Lorg/json/JSONArray;)V", "influenceType", "Lcom/onesignal/influence/domain/OSInfluenceType;", "getInfluenceType", "()Lcom/onesignal/influence/domain/OSInfluenceType;", "setInfluenceType", "(Lcom/onesignal/influence/domain/OSInfluenceType;)V", "isDirectSessionEnabled", "", "()Z", "isIndirectSessionEnabled", "isUnattributedSessionEnabled", "lastChannelObjects", "getLastChannelObjects", "lastReceivedIds", "getLastReceivedIds", "getLogger", "()Lcom/onesignal/OSLogger;", "setLogger", "(Lcom/onesignal/OSLogger;)V", "addSessionData", "", "jsonObject", "Lorg/json/JSONObject;", "influence", "cacheState", "equals", "other", "getLastChannelObjectsReceivedByNewId", OSOutcomeConstants.OUTCOME_ID, "hashCode", "initInfluencedTypeFromCache", "resetAndInitInfluence", "saveChannelObjects", "channelObjects", "saveLastId", "toString", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public abstract class OSChannelTracker {
    private OSInfluenceDataRepository dataRepository;
    private String directId;
    private JSONArray indirectIds;
    private OSInfluenceType influenceType;
    private OSLogger logger;
    private OSTime timeProvider;

    public abstract void addSessionData(JSONObject jsonObject, OSInfluence influence);

    public abstract void cacheState();

    public abstract int getChannelLimit();

    public abstract OSInfluenceChannel getChannelType();

    public abstract String getIdTag();

    public abstract int getIndirectAttributionWindow();

    public abstract JSONArray getLastChannelObjects() throws JSONException;

    public abstract JSONArray getLastChannelObjectsReceivedByNewId(String id);

    public abstract void initInfluencedTypeFromCache();

    public abstract void saveChannelObjects(JSONArray channelObjects);

    public OSChannelTracker(OSInfluenceDataRepository dataRepository, OSLogger logger, OSTime timeProvider) {
        Intrinsics.checkNotNullParameter(dataRepository, "dataRepository");
        Intrinsics.checkNotNullParameter(logger, "logger");
        Intrinsics.checkNotNullParameter(timeProvider, "timeProvider");
        this.dataRepository = dataRepository;
        this.logger = logger;
        this.timeProvider = timeProvider;
    }

    protected final OSInfluenceDataRepository getDataRepository() {
        return this.dataRepository;
    }

    public final OSLogger getLogger() {
        return this.logger;
    }

    protected final void setDataRepository(OSInfluenceDataRepository oSInfluenceDataRepository) {
        Intrinsics.checkNotNullParameter(oSInfluenceDataRepository, "<set-?>");
        this.dataRepository = oSInfluenceDataRepository;
    }

    public final void setLogger(OSLogger oSLogger) {
        Intrinsics.checkNotNullParameter(oSLogger, "<set-?>");
        this.logger = oSLogger;
    }

    public final OSInfluenceType getInfluenceType() {
        return this.influenceType;
    }

    public final void setInfluenceType(OSInfluenceType oSInfluenceType) {
        this.influenceType = oSInfluenceType;
    }

    public final JSONArray getIndirectIds() {
        return this.indirectIds;
    }

    public final void setIndirectIds(JSONArray jSONArray) {
        this.indirectIds = jSONArray;
    }

    public final String getDirectId() {
        return this.directId;
    }

    public final void setDirectId(String str) {
        this.directId = str;
    }

    private final boolean isDirectSessionEnabled() {
        return this.dataRepository.isDirectInfluenceEnabled();
    }

    private final boolean isIndirectSessionEnabled() {
        return this.dataRepository.isIndirectInfluenceEnabled();
    }

    private final boolean isUnattributedSessionEnabled() {
        return this.dataRepository.isUnattributedInfluenceEnabled();
    }

    public final OSInfluence getCurrentSessionInfluence() {
        OSInfluence oSInfluence = new OSInfluence(getChannelType(), OSInfluenceType.DISABLED, null);
        if (this.influenceType == null) {
            initInfluencedTypeFromCache();
        }
        OSInfluenceType oSInfluenceType = this.influenceType;
        if (oSInfluenceType == null) {
            oSInfluenceType = OSInfluenceType.DISABLED;
        }
        if (oSInfluenceType.isDirect()) {
            if (isDirectSessionEnabled()) {
                oSInfluence.setIds(new JSONArray().put(getDirectId()));
                oSInfluence.setInfluenceType(OSInfluenceType.DIRECT);
            }
        } else if (oSInfluenceType.isIndirect()) {
            if (isIndirectSessionEnabled()) {
                oSInfluence.setIds(getIndirectIds());
                oSInfluence.setInfluenceType(OSInfluenceType.INDIRECT);
            }
        } else if (isUnattributedSessionEnabled()) {
            oSInfluence.setInfluenceType(OSInfluenceType.UNATTRIBUTED);
        }
        return oSInfluence;
    }

    public final JSONArray getLastReceivedIds() {
        JSONArray jSONArray = new JSONArray();
        try {
            JSONArray lastChannelObjects = getLastChannelObjects();
            this.logger.debug(Intrinsics.stringPlus("OneSignal ChannelTracker getLastReceivedIds lastChannelObjectReceived: ", lastChannelObjects));
            long indirectAttributionWindow = ((long) (getIndirectAttributionWindow() * 60)) * 1000;
            long currentTimeMillis = this.timeProvider.getCurrentTimeMillis();
            int length = lastChannelObjects.length();
            if (length > 0) {
                int i = 0;
                while (true) {
                    int i2 = i + 1;
                    JSONObject jSONObject = lastChannelObjects.getJSONObject(i);
                    if (currentTimeMillis - jSONObject.getLong("time") <= indirectAttributionWindow) {
                        jSONArray.put(jSONObject.getString(getIdTag()));
                    }
                    if (i2 >= length) {
                        break;
                    }
                    i = i2;
                }
            }
        } catch (JSONException e) {
            this.logger.error("Generating tracker getLastReceivedIds JSONObject ", e);
        }
        return jSONArray;
    }

    public final void resetAndInitInfluence() {
        this.directId = null;
        JSONArray lastReceivedIds = getLastReceivedIds();
        this.indirectIds = lastReceivedIds;
        this.influenceType = (lastReceivedIds == null ? 0 : lastReceivedIds.length()) > 0 ? OSInfluenceType.INDIRECT : OSInfluenceType.UNATTRIBUTED;
        cacheState();
        this.logger.debug("OneSignal OSChannelTracker resetAndInitInfluence: " + getIdTag() + " finish with influenceType: " + this.influenceType);
    }

    public final void saveLastId(String id) {
        this.logger.debug("OneSignal OSChannelTracker for: " + getIdTag() + " saveLastId: " + ((Object) id));
        if (id == null || id.length() == 0) {
            return;
        }
        JSONArray lastChannelObjectsReceivedByNewId = getLastChannelObjectsReceivedByNewId(id);
        this.logger.debug("OneSignal OSChannelTracker for: " + getIdTag() + " saveLastId with lastChannelObjectsReceived: " + lastChannelObjectsReceivedByNewId);
        try {
            lastChannelObjectsReceivedByNewId.put(new JSONObject().put(getIdTag(), id).put("time", this.timeProvider.getCurrentTimeMillis()));
            if (lastChannelObjectsReceivedByNewId.length() > getChannelLimit()) {
                int length = lastChannelObjectsReceivedByNewId.length() - getChannelLimit();
                JSONArray jSONArray = new JSONArray();
                int length2 = lastChannelObjectsReceivedByNewId.length();
                if (length < length2) {
                    while (true) {
                        int i = length + 1;
                        try {
                            jSONArray.put(lastChannelObjectsReceivedByNewId.get(length));
                        } catch (JSONException e) {
                            this.logger.error("Generating tracker lastChannelObjectsReceived get JSONObject ", e);
                        }
                        if (i >= length2) {
                            break;
                        } else {
                            length = i;
                        }
                    }
                }
                lastChannelObjectsReceivedByNewId = jSONArray;
            }
            this.logger.debug("OneSignal OSChannelTracker for: " + getIdTag() + " with channelObjectToSave: " + lastChannelObjectsReceivedByNewId);
            saveChannelObjects(lastChannelObjectsReceivedByNewId);
        } catch (JSONException e2) {
            this.logger.error("Generating tracker newInfluenceId JSONObject ", e2);
        }
    }

    public String toString() {
        return "OSChannelTracker{tag=" + getIdTag() + ", influenceType=" + this.influenceType + ", indirectIds=" + this.indirectIds + ", directId=" + ((Object) this.directId) + '}';
    }

    public boolean equals(Object other) {
        if (this == other) {
            return true;
        }
        if (other == null || !Intrinsics.areEqual(getClass(), other.getClass())) {
            return false;
        }
        OSChannelTracker oSChannelTracker = (OSChannelTracker) other;
        return this.influenceType == oSChannelTracker.influenceType && Intrinsics.areEqual(oSChannelTracker.getIdTag(), getIdTag());
    }

    public int hashCode() {
        OSInfluenceType oSInfluenceType = this.influenceType;
        return ((oSInfluenceType != null ? oSInfluenceType.hashCode() : 0) * 31) + getIdTag().hashCode();
    }
}

