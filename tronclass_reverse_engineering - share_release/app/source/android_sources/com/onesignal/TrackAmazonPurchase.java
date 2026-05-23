package com.onesignal;

import android.content.Context;
import com.amazon.device.iap.PurchasingListener;
import com.amazon.device.iap.PurchasingService;
import com.amazon.device.iap.model.Product;
import com.amazon.device.iap.model.ProductDataResponse;
import com.amazon.device.iap.model.PurchaseResponse;
import com.amazon.device.iap.model.PurchaseUpdatesResponse;
import com.amazon.device.iap.model.RequestId;
import com.amazon.device.iap.model.UserDataResponse;
import com.onesignal.OneSignal;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
class TrackAmazonPurchase {
    private boolean canTrack;
    private Context context;
    private Field listenerHandlerField;
    private Object listenerHandlerObject;
    private OSPurchasingListener osPurchasingListener;
    private boolean registerListenerOnMainThread;

    TrackAmazonPurchase(Context context) {
        this.canTrack = false;
        this.registerListenerOnMainThread = false;
        this.context = context;
        try {
            Class<?> cls = Class.forName("com.amazon.device.iap.internal.d");
            try {
                this.listenerHandlerObject = cls.getMethod("d", new Class[0]).invoke(null, new Object[0]);
            } catch (NullPointerException unused) {
                this.listenerHandlerObject = cls.getMethod("e", new Class[0]).invoke(null, new Object[0]);
                this.registerListenerOnMainThread = true;
            }
            Field declaredField = cls.getDeclaredField("f");
            this.listenerHandlerField = declaredField;
            declaredField.setAccessible(true);
            OSPurchasingListener oSPurchasingListener = new OSPurchasingListener();
            this.osPurchasingListener = oSPurchasingListener;
            oSPurchasingListener.orgPurchasingListener = (PurchasingListener) this.listenerHandlerField.get(this.listenerHandlerObject);
            this.canTrack = true;
            setListener();
        } catch (ClassCastException e) {
            logAmazonIAPListenerError(e);
        } catch (ClassNotFoundException e2) {
            logAmazonIAPListenerError(e2);
        } catch (IllegalAccessException e3) {
            logAmazonIAPListenerError(e3);
        } catch (NoSuchFieldException e4) {
            logAmazonIAPListenerError(e4);
        } catch (NoSuchMethodException e5) {
            logAmazonIAPListenerError(e5);
        } catch (InvocationTargetException e6) {
            logAmazonIAPListenerError(e6);
        }
    }

    private static void logAmazonIAPListenerError(Exception exc) {
        OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Error adding Amazon IAP listener.", exc);
        exc.printStackTrace();
    }

    private void setListener() {
        if (this.registerListenerOnMainThread) {
            OSUtils.runOnMainUIThread(new Runnable() { // from class: com.onesignal.TrackAmazonPurchase.1
                @Override // java.lang.Runnable
                public void run() {
                    PurchasingService.registerListener(TrackAmazonPurchase.this.context, TrackAmazonPurchase.this.osPurchasingListener);
                }
            });
        } else {
            PurchasingService.registerListener(this.context, this.osPurchasingListener);
        }
    }

    void checkListener() {
        if (this.canTrack) {
            try {
                PurchasingListener purchasingListener = (PurchasingListener) this.listenerHandlerField.get(this.listenerHandlerObject);
                OSPurchasingListener oSPurchasingListener = this.osPurchasingListener;
                if (purchasingListener != oSPurchasingListener) {
                    oSPurchasingListener.orgPurchasingListener = purchasingListener;
                    setListener();
                }
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
    }

    private class OSPurchasingListener implements PurchasingListener {
        private String currentMarket;
        private RequestId lastRequestId;
        PurchasingListener orgPurchasingListener;

        private OSPurchasingListener() {
        }

        private String marketToCurrencyCode(String str) {
            str.hashCode();
            switch (str) {
                case "AU":
                    return "AUD";
                case "BR":
                    return "BRL";
                case "CA":
                    return "CDN";
                case "DE":
                case "ES":
                case "FR":
                case "IT":
                    return "EUR";
                case "GB":
                    return "GBP";
                case "JP":
                    return "JPY";
                case "US":
                    return "USD";
                default:
                    return "";
            }
        }

        public void onProductDataResponse(ProductDataResponse productDataResponse) {
            RequestId requestId = this.lastRequestId;
            if (requestId != null && requestId.toString().equals(productDataResponse.getRequestId().toString())) {
                try {
                    if (AnonymousClass2.$SwitchMap$com$amazon$device$iap$model$ProductDataResponse$RequestStatus[productDataResponse.getRequestStatus().ordinal()] != 1) {
                        return;
                    }
                    JSONArray jSONArray = new JSONArray();
                    Map productData = productDataResponse.getProductData();
                    Iterator it = productData.keySet().iterator();
                    while (it.hasNext()) {
                        Product product = (Product) productData.get((String) it.next());
                        JSONObject jSONObject = new JSONObject();
                        jSONObject.put("sku", product.getSku());
                        jSONObject.put("iso", marketToCurrencyCode(this.currentMarket));
                        String price = product.getPrice();
                        if (!price.matches("^[0-9]")) {
                            price = price.substring(1);
                        }
                        jSONObject.put("amount", price);
                        jSONArray.put(jSONObject);
                    }
                    OneSignal.sendPurchases(jSONArray, false, null);
                    return;
                } catch (JSONException e) {
                    e.printStackTrace();
                    return;
                }
            }
            PurchasingListener purchasingListener = this.orgPurchasingListener;
            if (purchasingListener != null) {
                purchasingListener.onProductDataResponse(productDataResponse);
            }
        }

        public void onPurchaseResponse(PurchaseResponse purchaseResponse) {
            if (purchaseResponse.getRequestStatus() == PurchaseResponse.RequestStatus.SUCCESSFUL) {
                this.currentMarket = purchaseResponse.getUserData().getMarketplace();
                HashSet hashSet = new HashSet();
                hashSet.add(purchaseResponse.getReceipt().getSku());
                this.lastRequestId = PurchasingService.getProductData(hashSet);
            }
            PurchasingListener purchasingListener = this.orgPurchasingListener;
            if (purchasingListener != null) {
                purchasingListener.onPurchaseResponse(purchaseResponse);
            }
        }

        public void onPurchaseUpdatesResponse(PurchaseUpdatesResponse purchaseUpdatesResponse) {
            PurchasingListener purchasingListener = this.orgPurchasingListener;
            if (purchasingListener != null) {
                purchasingListener.onPurchaseUpdatesResponse(purchaseUpdatesResponse);
            }
        }

        public void onUserDataResponse(UserDataResponse userDataResponse) {
            PurchasingListener purchasingListener = this.orgPurchasingListener;
            if (purchasingListener != null) {
                purchasingListener.onUserDataResponse(userDataResponse);
            }
        }
    }
    static /* synthetic */ class AnonymousClass2 {
        static final /* synthetic */ int[] $SwitchMap$com$amazon$device$iap$model$ProductDataResponse$RequestStatus;

        static {
            int[] iArr = new int[ProductDataResponse.RequestStatus.values().length];
            $SwitchMap$com$amazon$device$iap$model$ProductDataResponse$RequestStatus = iArr;
            try {
                iArr[ProductDataResponse.RequestStatus.SUCCESSFUL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
        }
    }
}

