package com.google.firebase.iid;

import com.google.android.gms.tasks.Task;
import javax.annotation.Nullable;
public interface MessagingChannel {
    Task<Void> ackMessage(String str);

    Task<Void> buildChannel(String str, @Nullable String str2);

    Task<Void> deleteInstanceId(String str);

    Task<Void> deleteToken(String str, @Nullable String str2, String str3, String str4);

    Task<String> getToken(String str, @Nullable String str2, String str3, String str4);

    boolean isAvailable();

    boolean isChannelBuilt();

    boolean needsRefresh();

    Task<Void> subscribeToTopic(String str, String str2, String str3);

    Task<Void> unsubscribeFromTopic(String str, String str2, String str3);
}

