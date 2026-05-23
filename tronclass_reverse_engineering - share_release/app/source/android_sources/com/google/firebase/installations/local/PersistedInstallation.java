package com.google.firebase.installations.local;

import com.google.firebase.FirebaseApp;
import com.silkimen.http.HttpRequest;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import org.json.JSONException;
import org.json.JSONObject;
public class PersistedInstallation {
    private static final String AUTH_TOKEN_KEY = "AuthToken";
    private static final String EXPIRES_IN_SECONDS_KEY = "ExpiresInSecs";
    private static final String FIREBASE_INSTALLATION_ID_KEY = "Fid";
    private static final String FIS_ERROR_KEY = "FisError";
    private static final String PERSISTED_STATUS_KEY = "Status";
    private static final String REFRESH_TOKEN_KEY = "RefreshToken";
    private static final String SETTINGS_FILE_NAME_PREFIX = "PersistedInstallation";
    private static final String TOKEN_CREATION_TIME_IN_SECONDS_KEY = "TokenCreationEpochInSecs";
    private final File dataFile;
    private final FirebaseApp firebaseApp;
    public enum RegistrationStatus {
        ATTEMPT_MIGRATION,
        NOT_GENERATED,
        UNREGISTERED,
        REGISTERED,
        REGISTER_ERROR
    }

    public PersistedInstallation(FirebaseApp firebaseApp) {
        this.dataFile = new File(firebaseApp.getApplicationContext().getFilesDir(), "PersistedInstallation." + firebaseApp.getPersistenceKey() + ".json");
        this.firebaseApp = firebaseApp;
    }

    public PersistedInstallationEntry readPersistedInstallationEntryValue() {
        JSONObject jSONFromFile = readJSONFromFile();
        String strOptString = jSONFromFile.optString(FIREBASE_INSTALLATION_ID_KEY, null);
        int iOptInt = jSONFromFile.optInt(PERSISTED_STATUS_KEY, RegistrationStatus.ATTEMPT_MIGRATION.ordinal());
        String strOptString2 = jSONFromFile.optString(AUTH_TOKEN_KEY, null);
        String strOptString3 = jSONFromFile.optString(REFRESH_TOKEN_KEY, null);
        long jOptLong = jSONFromFile.optLong(TOKEN_CREATION_TIME_IN_SECONDS_KEY, 0L);
        long jOptLong2 = jSONFromFile.optLong(EXPIRES_IN_SECONDS_KEY, 0L);
        return PersistedInstallationEntry.builder().setFirebaseInstallationId(strOptString).setRegistrationStatus(RegistrationStatus.values()[iOptInt]).setAuthToken(strOptString2).setRefreshToken(strOptString3).setTokenCreationEpochInSecs(jOptLong).setExpiresInSecs(jOptLong2).setFisError(jSONFromFile.optString(FIS_ERROR_KEY, null)).build();
    }

    private JSONObject readJSONFromFile() {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        byte[] bArr = new byte[16384];
        try {
            FileInputStream fileInputStream = new FileInputStream(this.dataFile);
            while (true) {
                try {
                    int i = fileInputStream.read(bArr, 0, 16384);
                    if (i >= 0) {
                        byteArrayOutputStream.write(bArr, 0, i);
                    } else {
                        return new JSONObject(byteArrayOutputStream.toString());
                    }
                } finally {
                }
            }
        } catch (IOException | JSONException unused) {
            return new JSONObject();
        }
    }

    public PersistedInstallationEntry insertOrUpdatePersistedInstallationEntry(PersistedInstallationEntry persistedInstallationEntry) {
        try {
            JSONObject jSONObject = new JSONObject();
            jSONObject.put(FIREBASE_INSTALLATION_ID_KEY, persistedInstallationEntry.getFirebaseInstallationId());
            jSONObject.put(PERSISTED_STATUS_KEY, persistedInstallationEntry.getRegistrationStatus().ordinal());
            jSONObject.put(AUTH_TOKEN_KEY, persistedInstallationEntry.getAuthToken());
            jSONObject.put(REFRESH_TOKEN_KEY, persistedInstallationEntry.getRefreshToken());
            jSONObject.put(TOKEN_CREATION_TIME_IN_SECONDS_KEY, persistedInstallationEntry.getTokenCreationEpochInSecs());
            jSONObject.put(EXPIRES_IN_SECONDS_KEY, persistedInstallationEntry.getExpiresInSecs());
            jSONObject.put(FIS_ERROR_KEY, persistedInstallationEntry.getFisError());
            File fileCreateTempFile = File.createTempFile(SETTINGS_FILE_NAME_PREFIX, "tmp", this.firebaseApp.getApplicationContext().getFilesDir());
            FileOutputStream fileOutputStream = new FileOutputStream(fileCreateTempFile);
            fileOutputStream.write(jSONObject.toString().getBytes(HttpRequest.CHARSET_UTF8));
            fileOutputStream.close();
            if (!fileCreateTempFile.renameTo(this.dataFile)) {
                throw new IOException("unable to rename the tmpfile to PersistedInstallation");
            }
        } catch (IOException | JSONException unused) {
        }
        return persistedInstallationEntry;
    }

    public void clearForTesting() {
        this.dataFile.delete();
    }
}

