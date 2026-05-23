package com.onesignal;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.IBinder;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalRestClient;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import kotlin.time.DurationKt;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
class TrackGooglePurchase {
    private static Class<?> IInAppBillingServiceClass = null;
    private static int iapEnabled = -99;
    private Context appContext;
    private Method getPurchasesMethod;
    private Method getSkuDetailsMethod;
    private Object mIInAppBillingService;
    private ServiceConnection mServiceConn;
    private boolean newAsExisting;
    private boolean isWaitingForPurchasesRequest = false;
    private ArrayList<String> purchaseTokens = new ArrayList<>();

    TrackGooglePurchase(Context context) {
        this.newAsExisting = true;
        this.appContext = context;
        try {
            JSONArray jSONArray = new JSONArray(OneSignalPrefs.getString(OneSignalPrefs.PREFS_PLAYER_PURCHASES, "purchaseTokens", "[]"));
            for (int i = 0; i < jSONArray.length(); i++) {
                this.purchaseTokens.add(jSONArray.get(i).toString());
            }
            boolean z = jSONArray.length() == 0;
            this.newAsExisting = z;
            if (z) {
                this.newAsExisting = OneSignalPrefs.getBool(OneSignalPrefs.PREFS_PLAYER_PURCHASES, "ExistingPurchases", true);
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        trackIAP();
    }

    static boolean CanTrack(Context context) {
        if (iapEnabled == -99) {
            iapEnabled = context.checkCallingOrSelfPermission("com.android.vending.BILLING");
        }
        try {
            if (iapEnabled == 0) {
                IInAppBillingServiceClass = Class.forName("com.android.vending.billing.IInAppBillingService");
            }
            return iapEnabled == 0;
        } catch (Throwable unused) {
            iapEnabled = 0;
            return false;
        }
    }

    void trackIAP() {
        if (this.mServiceConn == null) {
            this.mServiceConn = new ServiceConnection() { // from class: com.onesignal.TrackGooglePurchase.1
                @Override // android.content.ServiceConnection
                public void onServiceDisconnected(ComponentName componentName) {
                    int unused = TrackGooglePurchase.iapEnabled = -99;
                    TrackGooglePurchase.this.mIInAppBillingService = null;
                }

                @Override // android.content.ServiceConnection
                public void onServiceConnected(ComponentName componentName, IBinder iBinder) {
                    try {
                        Method asInterfaceMethod = TrackGooglePurchase.getAsInterfaceMethod(Class.forName("com.android.vending.billing.IInAppBillingService$Stub"));
                        asInterfaceMethod.setAccessible(true);
                        TrackGooglePurchase.this.mIInAppBillingService = asInterfaceMethod.invoke(null, iBinder);
                        TrackGooglePurchase.this.QueryBoughtItems();
                    } catch (Throwable th) {
                        th.printStackTrace();
                    }
                }
            };
            Intent intent = new Intent("com.android.vending.billing.InAppBillingService.BIND");
            intent.setPackage("com.android.vending");
            this.appContext.bindService(intent, this.mServiceConn, 1);
            return;
        }
        if (this.mIInAppBillingService != null) {
            QueryBoughtItems();
        }
    }
    public void QueryBoughtItems() {
        if (this.isWaitingForPurchasesRequest) {
            return;
        }
        new Thread(new Runnable() { // from class: com.onesignal.TrackGooglePurchase.2
            @Override // java.lang.Runnable
            public void run() {
                TrackGooglePurchase.this.isWaitingForPurchasesRequest = true;
                try {
                    if (TrackGooglePurchase.this.getPurchasesMethod == null) {
                        TrackGooglePurchase.this.getPurchasesMethod = TrackGooglePurchase.getGetPurchasesMethod(TrackGooglePurchase.IInAppBillingServiceClass);
                        TrackGooglePurchase.this.getPurchasesMethod.setAccessible(true);
                    }
                    Bundle bundle = (Bundle) TrackGooglePurchase.this.getPurchasesMethod.invoke(TrackGooglePurchase.this.mIInAppBillingService, 3, TrackGooglePurchase.this.appContext.getPackageName(), "inapp", null);
                    if (bundle.getInt("RESPONSE_CODE") == 0) {
                        ArrayList arrayList = new ArrayList();
                        ArrayList arrayList2 = new ArrayList();
                        ArrayList<String> stringArrayList = bundle.getStringArrayList("INAPP_PURCHASE_ITEM_LIST");
                        ArrayList<String> stringArrayList2 = bundle.getStringArrayList("INAPP_PURCHASE_DATA_LIST");
                        for (int i = 0; i < stringArrayList2.size(); i++) {
                            String str = stringArrayList2.get(i);
                            String str2 = stringArrayList.get(i);
                            String string = new JSONObject(str).getString("purchaseToken");
                            if (!TrackGooglePurchase.this.purchaseTokens.contains(string) && !arrayList2.contains(string)) {
                                arrayList2.add(string);
                                arrayList.add(str2);
                            }
                        }
                        if (arrayList.size() > 0) {
                            TrackGooglePurchase.this.sendPurchases(arrayList, arrayList2);
                        } else if (stringArrayList2.size() == 0) {
                            TrackGooglePurchase.this.newAsExisting = false;
                            OneSignalPrefs.saveBool(OneSignalPrefs.PREFS_PLAYER_PURCHASES, "ExistingPurchases", false);
                        }
                    }
                } catch (Throwable th) {
                    th.printStackTrace();
                }
                TrackGooglePurchase.this.isWaitingForPurchasesRequest = false;
            }
        }).start();
    }
    public void sendPurchases(ArrayList<String> arrayList, final ArrayList<String> arrayList2) {
        try {
            if (this.getSkuDetailsMethod == null) {
                Method getSkuDetailsMethod = getGetSkuDetailsMethod(IInAppBillingServiceClass);
                this.getSkuDetailsMethod = getSkuDetailsMethod;
                getSkuDetailsMethod.setAccessible(true);
            }
            Bundle bundle = new Bundle();
            bundle.putStringArrayList("ITEM_ID_LIST", arrayList);
            Bundle bundle2 = (Bundle) this.getSkuDetailsMethod.invoke(this.mIInAppBillingService, 3, this.appContext.getPackageName(), "inapp", bundle);
            if (bundle2.getInt("RESPONSE_CODE") == 0) {
                ArrayList<String> stringArrayList = bundle2.getStringArrayList("DETAILS_LIST");
                HashMap map = new HashMap();
                Iterator<String> it = stringArrayList.iterator();
                while (it.hasNext()) {
                    JSONObject jSONObject = new JSONObject(it.next());
                    String string = jSONObject.getString("productId");
                    BigDecimal bigDecimalDivide = new BigDecimal(jSONObject.getString("price_amount_micros")).divide(new BigDecimal(DurationKt.NANOS_IN_MILLIS));
                    JSONObject jSONObject2 = new JSONObject();
                    jSONObject2.put("sku", string);
                    jSONObject2.put("iso", jSONObject.getString("price_currency_code"));
                    jSONObject2.put("amount", bigDecimalDivide.toString());
                    map.put(string, jSONObject2);
                }
                JSONArray jSONArray = new JSONArray();
                for (String str : arrayList) {
                    if (map.containsKey(str)) {
                        jSONArray.put(map.get(str));
                    }
                }
                if (jSONArray.length() > 0) {
                    OneSignal.sendPurchases(jSONArray, this.newAsExisting, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.TrackGooglePurchase.3
                        public void onFailure(int i, JSONObject jSONObject3, Throwable th) {
                            OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "HTTP sendPurchases failed to send.", th);
                            TrackGooglePurchase.this.isWaitingForPurchasesRequest = false;
                        }

                        @Override // com.onesignal.OneSignalRestClient.ResponseHandler
                        public void onSuccess(String str2) {
                            TrackGooglePurchase.this.purchaseTokens.addAll(arrayList2);
                            OneSignalPrefs.saveString(OneSignalPrefs.PREFS_PLAYER_PURCHASES, "purchaseTokens", TrackGooglePurchase.this.purchaseTokens.toString());
                            OneSignalPrefs.saveBool(OneSignalPrefs.PREFS_PLAYER_PURCHASES, "ExistingPurchases", true);
                            TrackGooglePurchase.this.newAsExisting = false;
                            TrackGooglePurchase.this.isWaitingForPurchasesRequest = false;
                        }
                    });
                }
            }
        } catch (Throwable th) {
            OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "Failed to track IAP purchases", th);
        }
    }
    public static Method getAsInterfaceMethod(Class cls) {
        for (Method method : cls.getMethods()) {
            Class<?>[] parameterTypes = method.getParameterTypes();
            if (parameterTypes.length == 1 && parameterTypes[0] == IBinder.class) {
                return method;
            }
        }
        return null;
    }
    public static Method getGetPurchasesMethod(Class cls) {
        for (Method method : cls.getMethods()) {
            Class<?>[] parameterTypes = method.getParameterTypes();
            if (parameterTypes.length == 4 && parameterTypes[0] == Integer.TYPE && parameterTypes[1] == String.class && parameterTypes[2] == String.class && parameterTypes[3] == String.class) {
                return method;
            }
        }
        return null;
    }

    private static Method getGetSkuDetailsMethod(Class cls) {
        for (Method method : cls.getMethods()) {
            Class<?>[] parameterTypes = method.getParameterTypes();
            Class<?> returnType = method.getReturnType();
            if (parameterTypes.length == 4 && parameterTypes[0] == Integer.TYPE && parameterTypes[1] == String.class && parameterTypes[2] == String.class && parameterTypes[3] == Bundle.class && returnType == Bundle.class) {
                return method;
            }
        }
        return null;
    }
}

