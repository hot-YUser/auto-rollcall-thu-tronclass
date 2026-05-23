package com.wisdomgarden.trpc.openwith;

import org.json.JSONArray;
class SharedData {
    JSONArray items;
    int receivedCounts;

    public SharedData(int i, JSONArray jSONArray) {
        this.receivedCounts = i;
        this.items = jSONArray;
    }
}

