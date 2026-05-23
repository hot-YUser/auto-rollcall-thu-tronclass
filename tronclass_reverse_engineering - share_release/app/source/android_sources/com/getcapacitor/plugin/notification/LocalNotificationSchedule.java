package com.getcapacitor.plugin.notification;

import com.getcapacitor.JSObject;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;
import kotlinx.coroutines.DebugKt;
public class LocalNotificationSchedule {
    public static String JS_DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
    private Date at;
    private Integer count;
    private String every;
    private DateMatch on;
    private Boolean repeats;

    public LocalNotificationSchedule(JSObject jSObject) throws ParseException {
        JSObject jSObject2 = jSObject.getJSObject("schedule");
        if (jSObject2 != null) {
            buildEveryElement(jSObject2);
            buildCountElement(jSObject2);
            buildAtElement(jSObject2);
            buildOnElement(jSObject2);
        }
    }

    public LocalNotificationSchedule() {
    }

    private void buildEveryElement(JSObject jSObject) {
        this.every = jSObject.getString("every");
    }

    private void buildCountElement(JSObject jSObject) {
        this.count = jSObject.getInteger("count", 1);
    }

    private void buildAtElement(JSObject jSObject) throws ParseException {
        this.repeats = jSObject.getBool("repeats");
        String string = jSObject.getString("at");
        if (string != null) {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat(JS_DATE_FORMAT);
            simpleDateFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
            this.at = simpleDateFormat.parse(string);
        }
    }

    private void buildOnElement(JSObject jSObject) {
        JSObject jSObject2 = jSObject.getJSObject(DebugKt.DEBUG_PROPERTY_VALUE_ON);
        if (jSObject2 != null) {
            DateMatch dateMatch = new DateMatch();
            this.on = dateMatch;
            dateMatch.setYear(jSObject2.getInteger("year"));
            this.on.setMonth(jSObject2.getInteger("month"));
            this.on.setDay(jSObject2.getInteger("day"));
            this.on.setHour(jSObject2.getInteger("hour"));
            this.on.setMinute(jSObject2.getInteger("minute"));
        }
    }

    public DateMatch getOn() {
        return this.on;
    }

    public void setOn(DateMatch dateMatch) {
        this.on = dateMatch;
    }

    public Date getAt() {
        return this.at;
    }

    public void setAt(Date date) {
        this.at = date;
    }

    public Boolean getRepeats() {
        return this.repeats;
    }

    public void setRepeats(Boolean bool) {
        this.repeats = bool;
    }

    public String getEvery() {
        return this.every;
    }

    public void setEvery(String str) {
        this.every = str;
    }

    public int getCount() {
        return this.count.intValue();
    }

    public void setCount(int i) {
        this.count = Integer.valueOf(i);
    }

    public boolean isRepeating() {
        return Boolean.TRUE.equals(this.repeats);
    }

    public boolean isRemovable() {
        if (this.every != null || this.on != null) {
            return false;
        }
        if (this.at != null) {
            return !isRepeating();
        }
        return true;
    }

    public Long getEveryInterval() {
        String str = this.every;
        str.hashCode();
        switch (str) {
            case "two-weeks":
                return Long.valueOf(((long) (this.count.intValue() * 2)) * 604800000);
            case "minute":
                return Long.valueOf(((long) this.count.intValue()) * 60000);
            case "second":
                return Long.valueOf(((long) this.count.intValue()) * 1000);
            case "day":
                return Long.valueOf(((long) this.count.intValue()) * 86400000);
            case "hour":
                return Long.valueOf(((long) this.count.intValue()) * 3600000);
            case "week":
                return Long.valueOf(((long) this.count.intValue()) * 604800000);
            case "year":
                return Long.valueOf(((long) this.count.intValue()) * 31449600000L);
            case "month":
                return Long.valueOf(((long) (this.count.intValue() * 30)) * 86400000);
            default:
                return null;
        }
    }

    public Long getNextOnSchedule(Date date) {
        return Long.valueOf(this.on.nextTrigger(date));
    }
}

