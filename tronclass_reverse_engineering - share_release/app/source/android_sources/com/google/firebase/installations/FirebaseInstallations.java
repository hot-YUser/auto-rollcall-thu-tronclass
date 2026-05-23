package com.google.firebase.installations;

import android.text.TextUtils;
import com.google.android.gms.common.internal.Preconditions;
import com.google.android.gms.tasks.Task;
import com.google.android.gms.tasks.TaskCompletionSource;
import com.google.android.gms.tasks.Tasks;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseException;
import com.google.firebase.heartbeatinfo.HeartBeatInfo;
import com.google.firebase.installations.FirebaseInstallationsException;
import com.google.firebase.installations.local.IidStore;
import com.google.firebase.installations.local.PersistedInstallation;
import com.google.firebase.installations.local.PersistedInstallationEntry;
import com.google.firebase.installations.remote.FirebaseInstallationServiceClient;
import com.google.firebase.installations.remote.InstallationResponse;
import com.google.firebase.installations.remote.TokenResult;
import com.google.firebase.platforminfo.UserAgentPublisher;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
public class FirebaseInstallations implements FirebaseInstallationsApi {
    private static final String CHIME_FIREBASE_APP_NAME = "CHIME_ANDROID_SDK";
    private static final String LOCKFILE_NAME_GENERATE_FID = "generatefid.lock";
    private static final Object lockGenerateFid = new Object();
    private static final ThreadFactory threadFactory = new ThreadFactory() { // from class: com.google.firebase.installations.FirebaseInstallations.1
        private final AtomicInteger mCount = new AtomicInteger(1);

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            return new Thread(runnable, String.format("firebase-installations-executor-%d", Integer.valueOf(this.mCount.getAndIncrement())));
        }
    };
    private final ExecutorService executor;
    private final RandomFidGenerator fidGenerator;
    private final FirebaseApp firebaseApp;
    private final IidStore iidStore;
    private final List<StateListener> listeners;
    private final Object lock;
    private final PersistedInstallation persistedInstallation;
    private final FirebaseInstallationServiceClient serviceClient;
    private final Utils utils;

    FirebaseInstallations(FirebaseApp firebaseApp, UserAgentPublisher userAgentPublisher, HeartBeatInfo heartBeatInfo) {
        this(new ThreadPoolExecutor(0, 1, 30L, TimeUnit.SECONDS, new LinkedBlockingQueue(), threadFactory), firebaseApp, new FirebaseInstallationServiceClient(firebaseApp.getApplicationContext(), userAgentPublisher, heartBeatInfo), new PersistedInstallation(firebaseApp), new Utils(), new IidStore(firebaseApp), new RandomFidGenerator());
    }

    FirebaseInstallations(ExecutorService executorService, FirebaseApp firebaseApp, FirebaseInstallationServiceClient firebaseInstallationServiceClient, PersistedInstallation persistedInstallation, Utils utils, IidStore iidStore, RandomFidGenerator randomFidGenerator) {
        this.lock = new Object();
        this.listeners = new ArrayList();
        this.firebaseApp = firebaseApp;
        this.serviceClient = firebaseInstallationServiceClient;
        this.executor = executorService;
        this.persistedInstallation = persistedInstallation;
        this.utils = utils;
        this.iidStore = iidStore;
        this.fidGenerator = randomFidGenerator;
    }

    private void preConditionChecks() {
        Preconditions.checkNotEmpty(getApplicationId());
        Preconditions.checkNotEmpty(getProjectIdentifier());
        Preconditions.checkNotEmpty(getApiKey());
    }

    String getProjectIdentifier() {
        if (TextUtils.isEmpty(this.firebaseApp.getOptions().getProjectId())) {
            return this.firebaseApp.getOptions().getGcmSenderId();
        }
        return this.firebaseApp.getOptions().getProjectId();
    }

    public static FirebaseInstallations getInstance() {
        return getInstance(FirebaseApp.getInstance());
    }

    public static FirebaseInstallations getInstance(FirebaseApp firebaseApp) {
        Preconditions.checkArgument(firebaseApp != null, "Null is not a valid value of FirebaseApp.");
        return (FirebaseInstallations) firebaseApp.get(FirebaseInstallationsApi.class);
    }

    String getApplicationId() {
        return this.firebaseApp.getOptions().getApplicationId();
    }

    String getApiKey() {
        return this.firebaseApp.getOptions().getApiKey();
    }

    String getName() {
        return this.firebaseApp.getName();
    }

    @Override // com.google.firebase.installations.FirebaseInstallationsApi
    public Task<String> getId() {
        preConditionChecks();
        Task<String> taskAddGetIdListener = addGetIdListener();
        this.executor.execute(FirebaseInstallations$$Lambda$1.lambdaFactory$(this));
        return taskAddGetIdListener;
    }

    @Override // com.google.firebase.installations.FirebaseInstallationsApi
    public Task<InstallationTokenResult> getToken(boolean z) {
        preConditionChecks();
        Task<InstallationTokenResult> taskAddGetAuthTokenListener = addGetAuthTokenListener();
        if (z) {
            this.executor.execute(FirebaseInstallations$$Lambda$2.lambdaFactory$(this));
        } else {
            this.executor.execute(FirebaseInstallations$$Lambda$3.lambdaFactory$(this));
        }
        return taskAddGetAuthTokenListener;
    }

    @Override // com.google.firebase.installations.FirebaseInstallationsApi
    public Task<Void> delete() {
        return Tasks.call(this.executor, FirebaseInstallations$$Lambda$4.lambdaFactory$(this));
    }

    private Task<String> addGetIdListener() {
        TaskCompletionSource taskCompletionSource = new TaskCompletionSource();
        GetIdListener getIdListener = new GetIdListener(taskCompletionSource);
        synchronized (this.lock) {
            this.listeners.add(getIdListener);
        }
        return taskCompletionSource.getTask();
    }

    private Task<InstallationTokenResult> addGetAuthTokenListener() {
        TaskCompletionSource taskCompletionSource = new TaskCompletionSource();
        GetAuthTokenListener getAuthTokenListener = new GetAuthTokenListener(this.utils, taskCompletionSource);
        synchronized (this.lock) {
            this.listeners.add(getAuthTokenListener);
        }
        return taskCompletionSource.getTask();
    }

    private void triggerOnStateReached(PersistedInstallationEntry persistedInstallationEntry) {
        synchronized (this.lock) {
            Iterator<StateListener> it = this.listeners.iterator();
            while (it.hasNext()) {
                if (it.next().onStateReached(persistedInstallationEntry)) {
                    it.remove();
                }
            }
        }
    }

    private void triggerOnException(PersistedInstallationEntry persistedInstallationEntry, Exception exc) {
        synchronized (this.lock) {
            Iterator<StateListener> it = this.listeners.iterator();
            while (it.hasNext()) {
                if (it.next().onException(persistedInstallationEntry, exc)) {
                    it.remove();
                }
            }
        }
    }
    public final void doGetId() {
        doRegistrationInternal(false);
    }
    public final void doGetAuthTokenWithoutForceRefresh() {
        doRegistrationInternal(false);
    }
    public final void doGetAuthTokenForceRefresh() {
        doRegistrationInternal(true);
    }

    private final void doRegistrationInternal(boolean z) {
        PersistedInstallationEntry persistedInstallationEntryRegisterFidWithServer;
        PersistedInstallationEntry prefsWithGeneratedIdMultiProcessSafe = getPrefsWithGeneratedIdMultiProcessSafe();
        if (z) {
            prefsWithGeneratedIdMultiProcessSafe = prefsWithGeneratedIdMultiProcessSafe.withClearedAuthToken();
        }
        triggerOnStateReached(prefsWithGeneratedIdMultiProcessSafe);
        try {
            if (prefsWithGeneratedIdMultiProcessSafe.isErrored() || prefsWithGeneratedIdMultiProcessSafe.isUnregistered()) {
                persistedInstallationEntryRegisterFidWithServer = registerFidWithServer(prefsWithGeneratedIdMultiProcessSafe);
            } else {
                if (!z && !this.utils.isAuthTokenExpired(prefsWithGeneratedIdMultiProcessSafe)) {
                    return;
                }
                persistedInstallationEntryRegisterFidWithServer = fetchAuthTokenFromServer(prefsWithGeneratedIdMultiProcessSafe);
            }
            this.persistedInstallation.insertOrUpdatePersistedInstallationEntry(persistedInstallationEntryRegisterFidWithServer);
            if (persistedInstallationEntryRegisterFidWithServer.isErrored()) {
                triggerOnException(persistedInstallationEntryRegisterFidWithServer, new FirebaseInstallationsException(FirebaseInstallationsException.Status.BAD_CONFIG));
            } else if (persistedInstallationEntryRegisterFidWithServer.isNotGenerated()) {
                triggerOnException(persistedInstallationEntryRegisterFidWithServer, new IOException("cleared fid due to auth error"));
            } else {
                triggerOnStateReached(persistedInstallationEntryRegisterFidWithServer);
            }
        } catch (IOException e) {
            triggerOnException(prefsWithGeneratedIdMultiProcessSafe, e);
        }
    }

    private PersistedInstallationEntry getPrefsWithGeneratedIdMultiProcessSafe() {
        PersistedInstallationEntry persistedInstallationEntryValue;
        synchronized (lockGenerateFid) {
            CrossProcessLock crossProcessLockAcquire = CrossProcessLock.acquire(this.firebaseApp.getApplicationContext(), LOCKFILE_NAME_GENERATE_FID);
            try {
                persistedInstallationEntryValue = this.persistedInstallation.readPersistedInstallationEntryValue();
                if (persistedInstallationEntryValue.isNotGenerated()) {
                    persistedInstallationEntryValue = this.persistedInstallation.insertOrUpdatePersistedInstallationEntry(persistedInstallationEntryValue.withUnregisteredFid(readExistingIidOrCreateFid(persistedInstallationEntryValue)));
                }
            } finally {
                crossProcessLockAcquire.releaseAndClose();
            }
        }
        return persistedInstallationEntryValue;
    }

    private String readExistingIidOrCreateFid(PersistedInstallationEntry persistedInstallationEntry) {
        if ((!this.firebaseApp.getName().equals(CHIME_FIREBASE_APP_NAME) && !this.firebaseApp.isDefaultApp()) || !persistedInstallationEntry.shouldAttemptMigration()) {
            return this.fidGenerator.createRandomFid();
        }
        String iid = this.iidStore.readIid();
        return TextUtils.isEmpty(iid) ? this.fidGenerator.createRandomFid() : iid;
    }

    private PersistedInstallationEntry registerFidWithServer(PersistedInstallationEntry persistedInstallationEntry) throws IOException {
        InstallationResponse installationResponseCreateFirebaseInstallation = this.serviceClient.createFirebaseInstallation(getApiKey(), persistedInstallationEntry.getFirebaseInstallationId(), getProjectIdentifier(), getApplicationId(), persistedInstallationEntry.getFirebaseInstallationId().length() == 11 ? this.iidStore.readToken() : null);
        int i = AnonymousClass2.$SwitchMap$com$google$firebase$installations$remote$InstallationResponse$ResponseCode[installationResponseCreateFirebaseInstallation.getResponseCode().ordinal()];
        if (i == 1) {
            return persistedInstallationEntry.withRegisteredFid(installationResponseCreateFirebaseInstallation.getFid(), installationResponseCreateFirebaseInstallation.getRefreshToken(), this.utils.currentTimeInSecs(), installationResponseCreateFirebaseInstallation.getAuthToken().getToken(), installationResponseCreateFirebaseInstallation.getAuthToken().getTokenExpirationTimestamp());
        }
        if (i == 2) {
            return persistedInstallationEntry.withFisError("BAD CONFIG");
        }
        throw new IOException();
    }

    private PersistedInstallationEntry fetchAuthTokenFromServer(PersistedInstallationEntry persistedInstallationEntry) throws IOException {
        TokenResult tokenResultGenerateAuthToken = this.serviceClient.generateAuthToken(getApiKey(), persistedInstallationEntry.getFirebaseInstallationId(), getProjectIdentifier(), persistedInstallationEntry.getRefreshToken());
        int i = AnonymousClass2.$SwitchMap$com$google$firebase$installations$remote$TokenResult$ResponseCode[tokenResultGenerateAuthToken.getResponseCode().ordinal()];
        if (i == 1) {
            return persistedInstallationEntry.withAuthToken(tokenResultGenerateAuthToken.getToken(), tokenResultGenerateAuthToken.getTokenExpirationTimestamp(), this.utils.currentTimeInSecs());
        }
        if (i == 2) {
            return persistedInstallationEntry.withFisError("BAD CONFIG");
        }
        if (i == 3) {
            return persistedInstallationEntry.withNoGeneratedFid();
        }
        throw new IOException();
    }
    static /* synthetic */ class AnonymousClass2 {
        static final /* synthetic */ int[] $SwitchMap$com$google$firebase$installations$remote$InstallationResponse$ResponseCode;
        static final /* synthetic */ int[] $SwitchMap$com$google$firebase$installations$remote$TokenResult$ResponseCode;

        static {
            int[] iArr = new int[TokenResult.ResponseCode.values().length];
            $SwitchMap$com$google$firebase$installations$remote$TokenResult$ResponseCode = iArr;
            try {
                iArr[TokenResult.ResponseCode.OK.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$com$google$firebase$installations$remote$TokenResult$ResponseCode[TokenResult.ResponseCode.BAD_CONFIG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$com$google$firebase$installations$remote$TokenResult$ResponseCode[TokenResult.ResponseCode.AUTH_ERROR.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[InstallationResponse.ResponseCode.values().length];
            $SwitchMap$com$google$firebase$installations$remote$InstallationResponse$ResponseCode = iArr2;
            try {
                iArr2[InstallationResponse.ResponseCode.OK.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                $SwitchMap$com$google$firebase$installations$remote$InstallationResponse$ResponseCode[InstallationResponse.ResponseCode.BAD_CONFIG.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }
    public Void deleteFirebaseInstallationId() throws IOException, FirebaseInstallationsException {
        PersistedInstallationEntry persistedInstallationEntryValue = this.persistedInstallation.readPersistedInstallationEntryValue();
        if (persistedInstallationEntryValue.isRegistered()) {
            try {
                this.serviceClient.deleteFirebaseInstallation(getApiKey(), persistedInstallationEntryValue.getFirebaseInstallationId(), getProjectIdentifier(), persistedInstallationEntryValue.getRefreshToken());
            } catch (FirebaseException unused) {
                throw new FirebaseInstallationsException("Failed to delete a Firebase Installation.", FirebaseInstallationsException.Status.BAD_CONFIG);
            }
        }
        this.persistedInstallation.insertOrUpdatePersistedInstallationEntry(persistedInstallationEntryValue.withNoGeneratedFid());
        return null;
    }
}

