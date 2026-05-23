package com.getcapacitor;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONException;
public class JSArray extends JSONArray {
    public JSArray() {
    }

    public JSArray(String str) throws JSONException {
        super(str);
    }

    public JSArray(Collection collection) {
        super(collection);
    }

    public JSArray(Object obj) throws JSONException {
        super(obj);
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    public <E> List<E> toList() throws JSONException {
        ArrayList arrayList = new ArrayList();
        for (int i = 0; i < length(); i++) {
            get(i);
            try {
                arrayList.add(get(i));
            } catch (Exception unused) {
                throw new JSONException("Not all items are instances of the given type");
            }
        }
        return arrayList;
    }

    public static JSArray from(Object obj) {
        try {
            return new JSArray(obj);
        } catch (JSONException unused) {
            return null;
        }
    }
}

