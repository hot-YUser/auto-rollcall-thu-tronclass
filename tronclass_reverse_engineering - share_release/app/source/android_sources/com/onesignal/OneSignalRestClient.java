package com.onesignal;

import android.net.TrafficStats;
import android.os.Build;
import com.onesignal.OSThrowable;
import com.onesignal.OneSignal;
import com.silkimen.http.HttpRequest;
import java.io.IOException;
import java.io.InputStream;
import java.lang.Thread;
import java.net.ConnectException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.UnknownHostException;
import java.util.Scanner;
import org.json.JSONObject;
class OneSignalRestClient {
    private static final String BASE_URL = "https://api.onesignal.com/";
    static final String CACHE_KEY_GET_TAGS = "CACHE_KEY_GET_TAGS";
    static final String CACHE_KEY_REMOTE_PARAMS = "CACHE_KEY_REMOTE_PARAMS";
    private static final int GET_TIMEOUT = 60000;
    private static final String OS_ACCEPT_HEADER = "application/vnd.onesignal.v1+json";
    private static final String OS_API_VERSION = "1";
    private static final int THREAD_ID = 10000;
    private static final int TIMEOUT = 120000;

    private static int getThreadTimeout(int i) {
        return i + 5000;
    }

    static abstract class ResponseHandler {
        void onFailure(int i, String str, Throwable th) {
        }

        void onSuccess(String str) {
        }

        ResponseHandler() {
        }
    }

    OneSignalRestClient() {
    }

    public static void put(final String str, final JSONObject jSONObject, final ResponseHandler responseHandler) {
        OSUtils.startThreadWithRetry(new Thread(new Runnable() { // from class: com.onesignal.OneSignalRestClient.1
            @Override // java.lang.Runnable
            public void run() {
                OneSignalRestClient.makeRequest(str, HttpRequest.METHOD_PUT, jSONObject, responseHandler, OneSignalRestClient.TIMEOUT, null);
            }
        }, "OS_REST_ASYNC_PUT"));
    }

    public static void post(final String str, final JSONObject jSONObject, final ResponseHandler responseHandler) {
        OSUtils.startThreadWithRetry(new Thread(new Runnable() { // from class: com.onesignal.OneSignalRestClient.2
            @Override // java.lang.Runnable
            public void run() {
                OneSignalRestClient.makeRequest(str, "POST", jSONObject, responseHandler, OneSignalRestClient.TIMEOUT, null);
            }
        }, "OS_REST_ASYNC_POST"));
    }

    public static void get(final String str, final ResponseHandler responseHandler, final String str2) {
        OSUtils.startThreadWithRetry(new Thread(new Runnable() { // from class: com.onesignal.OneSignalRestClient.3
            @Override // java.lang.Runnable
            public void run() {
                OneSignalRestClient.makeRequest(str, null, null, responseHandler, OneSignalRestClient.GET_TIMEOUT, str2);
            }
        }, "OS_REST_ASYNC_GET"));
    }

    public static void getSync(String str, ResponseHandler responseHandler, String str2) {
        makeRequest(str, null, null, responseHandler, GET_TIMEOUT, str2);
    }

    public static void putSync(String str, JSONObject jSONObject, ResponseHandler responseHandler) {
        makeRequest(str, HttpRequest.METHOD_PUT, jSONObject, responseHandler, TIMEOUT, null);
    }

    public static void postSync(String str, JSONObject jSONObject, ResponseHandler responseHandler) {
        makeRequest(str, "POST", jSONObject, responseHandler, TIMEOUT, null);
    }
    public static void makeRequest(final String str, final String str2, final JSONObject jSONObject, final ResponseHandler responseHandler, final int i, final String str3) {
        if (OSUtils.isRunningOnMainThread()) {
            throw new OSThrowable.OSMainThreadException("Method: " + str2 + " was called from the Main Thread!");
        }
        if (str2 == null || !OneSignal.shouldLogUserPrivacyConsentErrorMessageForMethodName(null)) {
            final Thread[] threadArr = new Thread[1];
            Thread thread = new Thread(new Runnable() { // from class: com.onesignal.OneSignalRestClient.4
                @Override // java.lang.Runnable
                public void run() {
                    threadArr[0] = OneSignalRestClient.startHTTPConnection(str, str2, jSONObject, responseHandler, i, str3);
                }
            }, "OS_HTTPConnection");
            OSUtils.startThreadWithRetry(thread);
            try {
                thread.join(getThreadTimeout(i));
                if (thread.getState() != Thread.State.TERMINATED) {
                    thread.interrupt();
                }
                Thread thread2 = threadArr[0];
                if (thread2 != null) {
                    thread2.join();
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
    /* high-level source view WARN: Removed duplicated region for block: B:63:0x0265 A[DONT_GENERATE, PHI: r0 r13
  0x0265: PHI (r0v7 java.lang.Thread) = (r0v5 java.lang.Thread), (r0v21 java.lang.Thread) binds: [B:81:0x02b9, B:62:0x0263] A[DONT_GENERATE, DONT_INLINE]
  0x0265: PHI (r13v4 java.net.HttpURLConnection) = (r13v3 java.net.HttpURLConnection), (r13v7 java.net.HttpURLConnection) binds: [B:81:0x02b9, B:62:0x0263] A[DONT_GENERATE, DONT_INLINE]] */
    /* high-level source view WARN: Removed duplicated region for block: B:79:0x0298 A[Catch: all -> 0x02bd, TryCatch #3 {all -> 0x02bd, blocks: (B:73:0x0276, B:75:0x027a, B:78:0x027f, B:80:0x02b4, B:79:0x0298), top: B:93:0x0276 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public static Thread startHTTPConnection(String str, String str2, JSONObject jSONObject, ResponseHandler responseHandler, int i, String str3) {
        String str4;
        HttpURLConnection httpURLConnectionNewHttpURLConnection;
        int responseCode;
        Thread threadCallResponseHandlerOnFailure;
        String headerField;
        String next;
        String string;
        if (Build.VERSION.SDK_INT >= 26) {
            TrafficStats.setThreadStatsTag(10000);
        }
        try {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OneSignalRestClient: Making request to: https://api.onesignal.com/" + str);
            httpURLConnectionNewHttpURLConnection = newHttpURLConnection(str);
            try {
                httpURLConnectionNewHttpURLConnection.setUseCaches(false);
                httpURLConnectionNewHttpURLConnection.setConnectTimeout(i);
                httpURLConnectionNewHttpURLConnection.setReadTimeout(i);
                httpURLConnectionNewHttpURLConnection.setRequestProperty("SDK-Version", "onesignal/android/" + OneSignal.getSdkVersionRaw());
                httpURLConnectionNewHttpURLConnection.setRequestProperty(HttpRequest.HEADER_ACCEPT, OS_ACCEPT_HEADER);
                if (jSONObject != null) {
                    httpURLConnectionNewHttpURLConnection.setDoInput(true);
                }
                if (str2 != null) {
                    httpURLConnectionNewHttpURLConnection.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
                    httpURLConnectionNewHttpURLConnection.setRequestMethod(str2);
                    httpURLConnectionNewHttpURLConnection.setDoOutput(true);
                }
                if (jSONObject != null) {
                    String unescapedEUIDString = JSONUtils.toUnescapedEUIDString(jSONObject);
                    str4 = "OneSignalRestClient: Could not send last request, device is offline. Throwable: ";
                    try {
                        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OneSignalRestClient: " + str2 + " SEND JSON: " + unescapedEUIDString);
                        byte[] bytes = unescapedEUIDString.getBytes(HttpRequest.CHARSET_UTF8);
                        httpURLConnectionNewHttpURLConnection.setFixedLengthStreamingMode(bytes.length);
                        httpURLConnectionNewHttpURLConnection.getOutputStream().write(bytes);
                    } catch (Throwable th) {
                        th = th;
                        responseCode = -1;
                        try {
                            if (!(th instanceof ConnectException)) {
                                OneSignal.Log(OneSignal.LOG_LEVEL.INFO, str4 + th.getClass().getName());
                                threadCallResponseHandlerOnFailure = callResponseHandlerOnFailure(responseHandler, responseCode, null, th);
                                if (httpURLConnectionNewHttpURLConnection != null) {
                                }
                            }
                            return threadCallResponseHandlerOnFailure;
                        } finally {
                            if (httpURLConnectionNewHttpURLConnection != null) {
                                httpURLConnectionNewHttpURLConnection.disconnect();
                            }
                        }
                    }
                } else {
                    str4 = "OneSignalRestClient: Could not send last request, device is offline. Throwable: ";
                }
                if (str3 != null && (string = OneSignalPrefs.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_ETAG_PREFIX + str3, null)) != null) {
                    httpURLConnectionNewHttpURLConnection.setRequestProperty("if-none-match", string);
                    OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OneSignalRestClient: Adding header if-none-match: " + string);
                }
                responseCode = httpURLConnectionNewHttpURLConnection.getResponseCode();
                try {
                    OneSignal.Log(OneSignal.LOG_LEVEL.VERBOSE, "OneSignalRestClient: After con.getResponseCode to: https://api.onesignal.com/" + str);
                    if (responseCode == 200 || responseCode == 202) {
                        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OneSignalRestClient: Successfully finished request to: https://api.onesignal.com/" + str);
                        Scanner scanner = new Scanner(httpURLConnectionNewHttpURLConnection.getInputStream(), HttpRequest.CHARSET_UTF8);
                        String next2 = scanner.useDelimiter("\\A").hasNext() ? scanner.next() : "";
                        scanner.close();
                        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OneSignalRestClient: " + (str2 == null ? "GET" : str2) + " RECEIVED JSON: " + next2);
                        if (str3 != null && (headerField = httpURLConnectionNewHttpURLConnection.getHeaderField("etag")) != null) {
                            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OneSignalRestClient: Response has etag of " + headerField + " so caching the response.");
                            OneSignalPrefs.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_ETAG_PREFIX + str3, headerField);
                            OneSignalPrefs.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_HTTP_CACHE_PREFIX + str3, next2);
                        }
                        threadCallResponseHandlerOnFailure = callResponseHandlerOnSuccess(responseHandler, next2);
                    } else if (responseCode == 304) {
                        String string2 = OneSignalPrefs.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_HTTP_CACHE_PREFIX + str3, null);
                        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OneSignalRestClient: " + (str2 == null ? "GET" : str2) + " - Using Cached response due to 304: " + string2);
                        threadCallResponseHandlerOnFailure = callResponseHandlerOnSuccess(responseHandler, string2);
                    } else {
                        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OneSignalRestClient: Failed request to: https://api.onesignal.com/" + str);
                        InputStream errorStream = httpURLConnectionNewHttpURLConnection.getErrorStream();
                        if (errorStream == null) {
                            errorStream = httpURLConnectionNewHttpURLConnection.getInputStream();
                        }
                        if (errorStream != null) {
                            Scanner scanner2 = new Scanner(errorStream, HttpRequest.CHARSET_UTF8);
                            next = scanner2.useDelimiter("\\A").hasNext() ? scanner2.next() : "";
                            scanner2.close();
                            OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "OneSignalRestClient: " + str2 + " RECEIVED JSON: " + next);
                        } else {
                            OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "OneSignalRestClient: " + str2 + " HTTP Code: " + responseCode + " No response body!");
                            next = null;
                        }
                        threadCallResponseHandlerOnFailure = callResponseHandlerOnFailure(responseHandler, responseCode, next, null);
                    }
                } catch (Throwable th2) {
                    th = th2;
                    if (!(th instanceof ConnectException) || (th instanceof UnknownHostException)) {
                        OneSignal.Log(OneSignal.LOG_LEVEL.INFO, str4 + th.getClass().getName());
                    } else {
                        OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "OneSignalRestClient: " + str2 + " Error thrown from network stack. ", th);
                    }
                    threadCallResponseHandlerOnFailure = callResponseHandlerOnFailure(responseHandler, responseCode, null, th);
                    if (httpURLConnectionNewHttpURLConnection != null) {
                    }
                    return threadCallResponseHandlerOnFailure;
                }
            } catch (Throwable th3) {
                th = th3;
                str4 = "OneSignalRestClient: Could not send last request, device is offline. Throwable: ";
            }
        } catch (Throwable th4) {
            th = th4;
            str4 = "OneSignalRestClient: Could not send last request, device is offline. Throwable: ";
            httpURLConnectionNewHttpURLConnection = null;
        }
        return threadCallResponseHandlerOnFailure;
    }

    private static Thread callResponseHandlerOnSuccess(final ResponseHandler responseHandler, final String str) {
        if (responseHandler == null) {
            return null;
        }
        Thread thread = new Thread(new Runnable() { // from class: com.onesignal.OneSignalRestClient.5
            @Override // java.lang.Runnable
            public void run() {
                responseHandler.onSuccess(str);
            }
        }, "OS_REST_SUCCESS_CALLBACK");
        OSUtils.startThreadWithRetry(thread);
        return thread;
    }

    private static Thread callResponseHandlerOnFailure(final ResponseHandler responseHandler, final int i, final String str, final Throwable th) {
        if (responseHandler == null) {
            return null;
        }
        Thread thread = new Thread(new Runnable() { // from class: com.onesignal.OneSignalRestClient.6
            @Override // java.lang.Runnable
            public void run() {
                responseHandler.onFailure(i, str, th);
            }
        }, "OS_REST_FAILURE_CALLBACK");
        OSUtils.startThreadWithRetry(thread);
        return thread;
    }

    private static HttpURLConnection newHttpURLConnection(String str) throws IOException {
        return (HttpURLConnection) new URL(BASE_URL + str).openConnection();
    }
}

