package com.onesignal.influence.domain;

import com.onesignal.OneSignalDbContract;
import kotlin.Metadata;
import kotlin.jvm.JvmStatic;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0006\b\u0086\u0001\u0018\u0000 \u000b2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u000bB\u000f\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004J\u000e\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u0003J\b\u0010\b\u001a\u00020\u0003H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000j\u0002\b\tj\u0002\b\n¨\u0006\f"}, d2 = {"Lcom/onesignal/influence/domain/OSInfluenceChannel;", "", "nameValue", "", "(Ljava/lang/String;ILjava/lang/String;)V", "equalsName", "", "otherName", "toString", "IAM", "NOTIFICATION", "Companion", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public enum OSInfluenceChannel {
    IAM("iam"),
    NOTIFICATION(OneSignalDbContract.NotificationTable.TABLE_NAME);
    public static final Companion INSTANCE = new Companion(null);
    private final String nameValue;

    @JvmStatic
    public static final OSInfluenceChannel fromString(String str) {
        return INSTANCE.fromString(str);
    }

    OSInfluenceChannel(String str) {
        this.nameValue = str;
    }

    public final boolean equalsName(String otherName) {
        Intrinsics.checkNotNullParameter(otherName, "otherName");
        return Intrinsics.areEqual(this.nameValue, otherName);
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.nameValue;
    }
    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J\u0012\u0010\u0003\u001a\u00020\u00042\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006H\u0007¨\u0006\u0007"}, d2 = {"Lcom/onesignal/influence/domain/OSInfluenceChannel$Companion;", "", "()V", "fromString", "Lcom/onesignal/influence/domain/OSInfluenceChannel;", "value", "", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }

        @JvmStatic
        public final OSInfluenceChannel fromString(String value) {
            OSInfluenceChannel oSInfluenceChannel = null;
            if (value != null) {
                OSInfluenceChannel[] oSInfluenceChannelArrValues = OSInfluenceChannel.values();
                int length = oSInfluenceChannelArrValues.length;
                while (true) {
                    length--;
                    if (length < 0) {
                        break;
                    }
                    OSInfluenceChannel oSInfluenceChannel2 = oSInfluenceChannelArrValues[length];
                    if (oSInfluenceChannel2.equalsName(value)) {
                        oSInfluenceChannel = oSInfluenceChannel2;
                        break;
                    }
                }
            }
            return oSInfluenceChannel == null ? OSInfluenceChannel.NOTIFICATION : oSInfluenceChannel;
        }
    }
}

