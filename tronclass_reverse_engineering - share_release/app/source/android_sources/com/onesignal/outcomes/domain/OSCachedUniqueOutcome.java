package com.onesignal.outcomes.domain;

import com.onesignal.influence.domain.OSInfluenceChannel;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0016\u0018\u00002\u00020\u0001B\u0015\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0002\u0010\u0006J\b\u0010\u0007\u001a\u00020\u0005H\u0016J\b\u0010\b\u001a\u00020\u0003H\u0016R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;", "", "influenceId", "", "channel", "Lcom/onesignal/influence/domain/OSInfluenceChannel;", "(Ljava/lang/String;Lcom/onesignal/influence/domain/OSInfluenceChannel;)V", "getChannel", "getInfluenceId", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public class OSCachedUniqueOutcome {
    private final OSInfluenceChannel channel;
    private final String influenceId;

    public OSCachedUniqueOutcome(String influenceId, OSInfluenceChannel channel) {
        Intrinsics.checkNotNullParameter(influenceId, "influenceId");
        Intrinsics.checkNotNullParameter(channel, "channel");
        this.influenceId = influenceId;
        this.channel = channel;
    }

    public String getInfluenceId() {
        return this.influenceId;
    }

    public OSInfluenceChannel getChannel() {
        return this.channel;
    }
}

