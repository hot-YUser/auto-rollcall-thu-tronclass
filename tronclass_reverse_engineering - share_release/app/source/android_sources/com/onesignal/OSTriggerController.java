package com.onesignal;

import com.onesignal.OSDynamicTriggerController;
import com.onesignal.OSTrigger;
import com.onesignal.OneSignal;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
class OSTriggerController {
    OSDynamicTriggerController dynamicTriggerController;
    private final ConcurrentHashMap<String, Object> triggers = new ConcurrentHashMap<>();

    OSTriggerController(OSDynamicTriggerController.OSDynamicTriggerControllerObserver oSDynamicTriggerControllerObserver) {
        this.dynamicTriggerController = new OSDynamicTriggerController(oSDynamicTriggerControllerObserver);
    }

    boolean evaluateMessageTriggers(OSInAppMessageInternal oSInAppMessageInternal) {
        if (oSInAppMessageInternal.triggers.size() == 0) {
            return true;
        }
        Iterator<ArrayList<OSTrigger>> it = oSInAppMessageInternal.triggers.iterator();
        while (it.hasNext()) {
            if (evaluateAndTriggers(it.next())) {
                return true;
            }
        }
        return false;
    }

    private boolean evaluateAndTriggers(ArrayList<OSTrigger> arrayList) {
        Iterator<OSTrigger> it = arrayList.iterator();
        while (it.hasNext()) {
            if (!evaluateTrigger(it.next())) {
                return false;
            }
        }
        return true;
    }

    private boolean evaluateTrigger(OSTrigger oSTrigger) {
        if (oSTrigger.kind == OSTrigger.OSTriggerKind.UNKNOWN) {
            return false;
        }
        if (oSTrigger.kind != OSTrigger.OSTriggerKind.CUSTOM) {
            return this.dynamicTriggerController.dynamicTriggerShouldFire(oSTrigger);
        }
        OSTrigger.OSTriggerOperator oSTriggerOperator = oSTrigger.operatorType;
        Object obj = this.triggers.get(oSTrigger.property);
        if (obj == null) {
            if (oSTriggerOperator == OSTrigger.OSTriggerOperator.NOT_EXISTS) {
                return true;
            }
            return oSTriggerOperator == OSTrigger.OSTriggerOperator.NOT_EQUAL_TO && oSTrigger.value != null;
        }
        if (oSTriggerOperator == OSTrigger.OSTriggerOperator.EXISTS) {
            return true;
        }
        if (oSTriggerOperator == OSTrigger.OSTriggerOperator.NOT_EXISTS) {
            return false;
        }
        if (oSTriggerOperator == OSTrigger.OSTriggerOperator.CONTAINS) {
            return (obj instanceof Collection) && ((Collection) obj).contains(oSTrigger.value);
        }
        if ((obj instanceof String) && (oSTrigger.value instanceof String) && triggerMatchesStringValue((String) oSTrigger.value, (String) obj, oSTriggerOperator)) {
            return true;
        }
        return ((oSTrigger.value instanceof Number) && (obj instanceof Number) && triggerMatchesNumericValue((Number) oSTrigger.value, (Number) obj, oSTriggerOperator)) || triggerMatchesFlex(oSTrigger.value, obj, oSTriggerOperator);
    }
    static /* synthetic */ class AnonymousClass1 {
        static final /* synthetic */ int[] $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator;

        static {
            int[] iArr = new int[OSTrigger.OSTriggerOperator.values().length];
            $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator = iArr;
            try {
                iArr[OSTrigger.OSTriggerOperator.EQUAL_TO.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.NOT_EQUAL_TO.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.EXISTS.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.CONTAINS.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.NOT_EXISTS.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.LESS_THAN.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.GREATER_THAN.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.LESS_THAN_OR_EQUAL_TO.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.GREATER_THAN_OR_EQUAL_TO.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
        }
    }

    private boolean triggerMatchesStringValue(String str, String str2, OSTrigger.OSTriggerOperator oSTriggerOperator) {
        int i = AnonymousClass1.$SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[oSTriggerOperator.ordinal()];
        if (i == 1) {
            return str.equals(str2);
        }
        if (i == 2) {
            return !str.equals(str2);
        }
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.ERROR, "Attempted to use an invalid operator for a string trigger comparison: " + oSTriggerOperator.toString());
        return false;
    }

    private boolean triggerMatchesFlex(Object obj, Object obj2, OSTrigger.OSTriggerOperator oSTriggerOperator) {
        if (obj == null) {
            return false;
        }
        if (oSTriggerOperator.checksEquality()) {
            String string = obj.toString();
            String string2 = obj2.toString();
            if (obj2 instanceof Number) {
                string2 = new DecimalFormat("0.#").format(obj2);
            }
            return triggerMatchesStringValue(string, string2, oSTriggerOperator);
        }
        if ((obj2 instanceof String) && (obj instanceof Number)) {
            return triggerMatchesNumericValueFlex((Number) obj, (String) obj2, oSTriggerOperator);
        }
        return false;
    }

    private boolean triggerMatchesNumericValueFlex(Number number, String str, OSTrigger.OSTriggerOperator oSTriggerOperator) {
        try {
            return triggerMatchesNumericValue(Double.valueOf(number.doubleValue()), Double.valueOf(Double.parseDouble(str)), oSTriggerOperator);
        } catch (NumberFormatException unused) {
            return false;
        }
    }

    private boolean triggerMatchesNumericValue(Number number, Number number2, OSTrigger.OSTriggerOperator oSTriggerOperator) {
        double dDoubleValue = number.doubleValue();
        double dDoubleValue2 = number2.doubleValue();
        switch (AnonymousClass1.$SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[oSTriggerOperator.ordinal()]) {
            case 1:
                if (dDoubleValue2 != dDoubleValue) {
                    break;
                }
                break;
            case 2:
                if (dDoubleValue2 == dDoubleValue) {
                    break;
                }
                break;
            case 3:
            case 4:
            case 5:
                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.ERROR, "Attempted to use an invalid operator with a numeric value: " + oSTriggerOperator.toString());
                break;
            case 6:
                if (dDoubleValue2 >= dDoubleValue) {
                    break;
                }
                break;
            case 7:
                if (dDoubleValue2 <= dDoubleValue) {
                    break;
                }
                break;
            case 8:
                if (dDoubleValue2 >= dDoubleValue && dDoubleValue2 != dDoubleValue) {
                    break;
                }
                break;
            case 9:
                if (dDoubleValue2 <= dDoubleValue && dDoubleValue2 != dDoubleValue) {
                    break;
                }
                break;
        }
        return false;
    }

    boolean isTriggerOnMessage(OSInAppMessageInternal oSInAppMessageInternal, Collection<String> collection) {
        if (oSInAppMessageInternal.triggers == null) {
            return false;
        }
        for (String str : collection) {
            Iterator<ArrayList<OSTrigger>> it = oSInAppMessageInternal.triggers.iterator();
            while (it.hasNext()) {
                for (OSTrigger oSTrigger : it.next()) {
                    if (str.equals(oSTrigger.property) || str.equals(oSTrigger.triggerId)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    boolean messageHasOnlyDynamicTriggers(OSInAppMessageInternal oSInAppMessageInternal) {
        if (oSInAppMessageInternal.triggers == null || oSInAppMessageInternal.triggers.isEmpty()) {
            return false;
        }
        Iterator<ArrayList<OSTrigger>> it = oSInAppMessageInternal.triggers.iterator();
        while (it.hasNext()) {
            for (OSTrigger oSTrigger : it.next()) {
                if (oSTrigger.kind == OSTrigger.OSTriggerKind.CUSTOM || oSTrigger.kind == OSTrigger.OSTriggerKind.UNKNOWN) {
                    return false;
                }
            }
        }
        return true;
    }

    void addTriggers(Map<String, Object> map) {
        synchronized (this.triggers) {
            for (String str : map.keySet()) {
                this.triggers.put(str, map.get(str));
            }
        }
    }

    void removeTriggersForKeys(Collection<String> collection) {
        synchronized (this.triggers) {
            Iterator<String> it = collection.iterator();
            while (it.hasNext()) {
                this.triggers.remove(it.next());
            }
        }
    }

    Object getTriggerValue(String str) {
        synchronized (this.triggers) {
            if (!this.triggers.containsKey(str)) {
                return null;
            }
            return this.triggers.get(str);
        }
    }

    public ConcurrentHashMap<String, Object> getTriggers() {
        return this.triggers;
    }
}

