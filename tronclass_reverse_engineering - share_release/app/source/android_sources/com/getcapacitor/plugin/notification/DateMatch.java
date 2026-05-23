package com.getcapacitor.plugin.notification;

import java.util.Calendar;
import java.util.Date;
public class DateMatch {
    private static final String separator = " ";
    private Integer day;
    private Integer hour;
    private Integer minute;
    private Integer month;
    private Integer unit = -1;
    private Integer year;

    public Integer getYear() {
        return this.year;
    }

    public void setYear(Integer num) {
        this.year = num;
    }

    public Integer getMonth() {
        return this.month;
    }

    public void setMonth(Integer num) {
        this.month = num;
    }

    public Integer getDay() {
        return this.day;
    }

    public void setDay(Integer num) {
        this.day = num;
    }

    public Integer getHour() {
        return this.hour;
    }

    public void setHour(Integer num) {
        this.hour = num;
    }

    public Integer getMinute() {
        return this.minute;
    }

    public void setMinute(Integer num) {
        this.minute = num;
    }

    private Calendar buildCalendar(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(14, 0);
        calendar.set(13, 0);
        return calendar;
    }

    public long nextTrigger(Date date) {
        return postponeTriggerIfNeeded(buildCalendar(date), buildNextTriggerTime(date));
    }

    private long postponeTriggerIfNeeded(Calendar calendar, Calendar calendar2) {
        if (calendar2.getTimeInMillis() <= calendar.getTimeInMillis() && this.unit.intValue() != -1) {
            Integer num = -1;
            if (this.unit.intValue() == 1 || this.unit.intValue() == 2) {
                num = 1;
            } else if (this.unit.intValue() == 5) {
                num = 2;
            } else if (this.unit.intValue() == 11) {
                num = 5;
            } else if (this.unit.intValue() == 12) {
                num = 11;
            }
            if (num.intValue() != -1) {
                calendar2.set(num.intValue(), calendar2.get(num.intValue()) + 1);
            }
        }
        return calendar2.getTimeInMillis();
    }

    private Calendar buildNextTriggerTime(Date date) {
        Calendar calendarBuildCalendar = buildCalendar(date);
        Integer num = this.year;
        if (num != null) {
            calendarBuildCalendar.set(1, num.intValue());
            if (this.unit.intValue() == -1) {
                this.unit = 1;
            }
        }
        Integer num2 = this.month;
        if (num2 != null) {
            calendarBuildCalendar.set(2, num2.intValue());
            if (this.unit.intValue() == -1) {
                this.unit = 2;
            }
        }
        Integer num3 = this.day;
        if (num3 != null) {
            calendarBuildCalendar.set(5, num3.intValue());
            if (this.unit.intValue() == -1) {
                this.unit = 5;
            }
        }
        Integer num4 = this.hour;
        if (num4 != null) {
            calendarBuildCalendar.set(11, num4.intValue());
            if (this.unit.intValue() == -1) {
                this.unit = 11;
            }
        }
        Integer num5 = this.minute;
        if (num5 != null) {
            calendarBuildCalendar.set(12, num5.intValue());
            if (this.unit.intValue() == -1) {
                this.unit = 12;
            }
        }
        return calendarBuildCalendar;
    }

    public String toString() {
        return "DateMatch{year=" + this.year + ", month=" + this.month + ", day=" + this.day + ", hour=" + this.hour + ", minute=" + this.minute + '}';
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        DateMatch dateMatch = (DateMatch) obj;
        Integer num = this.year;
        if (num == null ? dateMatch.year != null : !num.equals(dateMatch.year)) {
            return false;
        }
        Integer num2 = this.month;
        if (num2 == null ? dateMatch.month != null : !num2.equals(dateMatch.month)) {
            return false;
        }
        Integer num3 = this.day;
        if (num3 == null ? dateMatch.day != null : !num3.equals(dateMatch.day)) {
            return false;
        }
        Integer num4 = this.hour;
        if (num4 == null ? dateMatch.hour != null : !num4.equals(dateMatch.hour)) {
            return false;
        }
        Integer num5 = this.minute;
        Integer num6 = dateMatch.minute;
        return num5 != null ? num5.equals(num6) : num6 == null;
    }

    public int hashCode() {
        Integer num = this.year;
        int iHashCode = (num != null ? num.hashCode() : 0) * 31;
        Integer num2 = this.month;
        int iHashCode2 = (iHashCode + (num2 != null ? num2.hashCode() : 0)) * 31;
        Integer num3 = this.day;
        int iHashCode3 = (iHashCode2 + (num3 != null ? num3.hashCode() : 0)) * 31;
        Integer num4 = this.hour;
        int iHashCode4 = (iHashCode3 + (num4 != null ? num4.hashCode() : 0)) * 31;
        Integer num5 = this.minute;
        return iHashCode4 + (num5 != null ? num5.hashCode() : 0);
    }

    public String toMatchString() {
        return (this.year + separator + this.month + separator + this.day + separator + this.hour + separator + this.minute + separator + this.unit).replace("null", "*");
    }

    public static DateMatch fromMatchString(String str) {
        DateMatch dateMatch = new DateMatch();
        String[] strArrSplit = str.split(separator);
        if (strArrSplit != null && strArrSplit.length == 6) {
            dateMatch.setYear(getValueFromCronElement(strArrSplit[0]));
            dateMatch.setMonth(getValueFromCronElement(strArrSplit[1]));
            dateMatch.setDay(getValueFromCronElement(strArrSplit[2]));
            dateMatch.setHour(getValueFromCronElement(strArrSplit[3]));
            dateMatch.setMinute(getValueFromCronElement(strArrSplit[4]));
            dateMatch.setUnit(getValueFromCronElement(strArrSplit[5]));
        }
        return dateMatch;
    }

    public static Integer getValueFromCronElement(String str) {
        try {
            return Integer.valueOf(Integer.parseInt(str));
        } catch (NumberFormatException unused) {
            return null;
        }
    }

    public Integer getUnit() {
        return this.unit;
    }

    public void setUnit(Integer num) {
        this.unit = num;
    }
}

