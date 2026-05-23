.class public Lcom/getcapacitor/plugin/notification/DateMatch;
.super Ljava/lang/Object;
.source "DateMatch.java"


# static fields
.field private static final separator:Ljava/lang/String; = " "


# instance fields
.field private day:Ljava/lang/Integer;

.field private hour:Ljava/lang/Integer;

.field private minute:Ljava/lang/Integer;

.field private month:Ljava/lang/Integer;

.field private unit:Ljava/lang/Integer;

.field private year:Ljava/lang/Integer;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 25
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, -0x1

    .line 23
    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    return-void
.end method

.method private buildCalendar(Ljava/util/Date;)Ljava/util/Calendar;
    .locals 2

    .line 74
    invoke-static {}, Ljava/util/Calendar;->getInstance()Ljava/util/Calendar;

    move-result-object v0

    .line 75
    invoke-virtual {v0, p1}, Ljava/util/Calendar;->setTime(Ljava/util/Date;)V

    const/16 p1, 0xe

    const/4 v1, 0x0

    .line 76
    invoke-virtual {v0, p1, v1}, Ljava/util/Calendar;->set(II)V

    const/16 p1, 0xd

    .line 77
    invoke-virtual {v0, p1, v1}, Ljava/util/Calendar;->set(II)V

    return-object v0
.end method

.method private buildNextTriggerTime(Ljava/util/Date;)Ljava/util/Calendar;
    .locals 3

    .line 117
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/notification/DateMatch;->buildCalendar(Ljava/util/Date;)Ljava/util/Calendar;

    move-result-object p1

    .line 118
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->year:Ljava/lang/Integer;

    const/4 v1, -0x1

    if-eqz v0, :cond_0

    .line 119
    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    const/4 v2, 0x1

    invoke-virtual {p1, v2, v0}, Ljava/util/Calendar;->set(II)V

    .line 120
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    if-ne v0, v1, :cond_0

    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    .line 122
    :cond_0
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->month:Ljava/lang/Integer;

    if-eqz v0, :cond_1

    .line 123
    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    const/4 v2, 0x2

    invoke-virtual {p1, v2, v0}, Ljava/util/Calendar;->set(II)V

    .line 124
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    if-ne v0, v1, :cond_1

    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    .line 126
    :cond_1
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->day:Ljava/lang/Integer;

    if-eqz v0, :cond_2

    .line 127
    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    const/4 v2, 0x5

    invoke-virtual {p1, v2, v0}, Ljava/util/Calendar;->set(II)V

    .line 128
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    if-ne v0, v1, :cond_2

    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    .line 130
    :cond_2
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->hour:Ljava/lang/Integer;

    if-eqz v0, :cond_3

    .line 131
    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    const/16 v2, 0xb

    invoke-virtual {p1, v2, v0}, Ljava/util/Calendar;->set(II)V

    .line 132
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    if-ne v0, v1, :cond_3

    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    .line 134
    :cond_3
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->minute:Ljava/lang/Integer;

    if-eqz v0, :cond_4

    .line 135
    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    const/16 v2, 0xc

    invoke-virtual {p1, v2, v0}, Ljava/util/Calendar;->set(II)V

    .line 136
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    if-ne v0, v1, :cond_4

    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    :cond_4
    return-object p1
.end method

.method public static fromMatchString(Ljava/lang/String;)Lcom/getcapacitor/plugin/notification/DateMatch;
    .locals 3

    .line 193
    new-instance v0, Lcom/getcapacitor/plugin/notification/DateMatch;

    invoke-direct {v0}, Lcom/getcapacitor/plugin/notification/DateMatch;-><init>()V

    .line 194
    const-string v1, " "

    invoke-virtual {p0, v1}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p0

    if-eqz p0, :cond_0

    .line 195
    array-length v1, p0

    const/4 v2, 0x6

    if-ne v1, v2, :cond_0

    const/4 v1, 0x0

    .line 196
    aget-object v1, p0, v1

    invoke-static {v1}, Lcom/getcapacitor/plugin/notification/DateMatch;->getValueFromCronElement(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/DateMatch;->setYear(Ljava/lang/Integer;)V

    const/4 v1, 0x1

    .line 197
    aget-object v1, p0, v1

    invoke-static {v1}, Lcom/getcapacitor/plugin/notification/DateMatch;->getValueFromCronElement(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/DateMatch;->setMonth(Ljava/lang/Integer;)V

    const/4 v1, 0x2

    .line 198
    aget-object v1, p0, v1

    invoke-static {v1}, Lcom/getcapacitor/plugin/notification/DateMatch;->getValueFromCronElement(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/DateMatch;->setDay(Ljava/lang/Integer;)V

    const/4 v1, 0x3

    .line 199
    aget-object v1, p0, v1

    invoke-static {v1}, Lcom/getcapacitor/plugin/notification/DateMatch;->getValueFromCronElement(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/DateMatch;->setHour(Ljava/lang/Integer;)V

    const/4 v1, 0x4

    .line 200
    aget-object v1, p0, v1

    invoke-static {v1}, Lcom/getcapacitor/plugin/notification/DateMatch;->getValueFromCronElement(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/notification/DateMatch;->setMinute(Ljava/lang/Integer;)V

    const/4 v1, 0x5

    .line 201
    aget-object p0, p0, v1

    invoke-static {p0}, Lcom/getcapacitor/plugin/notification/DateMatch;->getValueFromCronElement(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object p0

    invoke-virtual {v0, p0}, Lcom/getcapacitor/plugin/notification/DateMatch;->setUnit(Ljava/lang/Integer;)V

    :cond_0
    return-object v0
.end method

.method public static getValueFromCronElement(Ljava/lang/String;)Ljava/lang/Integer;
    .locals 0

    .line 208
    :try_start_0
    invoke-static {p0}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result p0

    invoke-static {p0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p0
    :try_end_0
    .catch Ljava/lang/NumberFormatException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p0

    :catch_0
    const/4 p0, 0x0

    return-object p0
.end method

.method private postponeTriggerIfNeeded(Ljava/util/Calendar;Ljava/util/Calendar;)J
    .locals 5

    .line 97
    invoke-virtual {p2}, Ljava/util/Calendar;->getTimeInMillis()J

    move-result-wide v0

    invoke-virtual {p1}, Ljava/util/Calendar;->getTimeInMillis()J

    move-result-wide v2

    cmp-long p1, v0, v2

    if-gtz p1, :cond_5

    iget-object p1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    invoke-virtual {p1}, Ljava/lang/Integer;->intValue()I

    move-result p1

    const/4 v0, -0x1

    if-eq p1, v0, :cond_5

    .line 98
    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    .line 99
    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    const/4 v2, 0x1

    if-eq v1, v2, :cond_3

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    const/4 v3, 0x2

    if-ne v1, v3, :cond_0

    goto :goto_0

    .line 101
    :cond_0
    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    const/4 v4, 0x5

    if-ne v1, v4, :cond_1

    .line 102
    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    goto :goto_1

    .line 103
    :cond_1
    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    const/16 v3, 0xb

    if-ne v1, v3, :cond_2

    .line 104
    invoke-static {v4}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    goto :goto_1

    .line 105
    :cond_2
    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    const/16 v4, 0xc

    if-ne v1, v4, :cond_4

    .line 106
    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    goto :goto_1

    .line 100
    :cond_3
    :goto_0
    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    .line 109
    :cond_4
    :goto_1
    invoke-virtual {p1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    if-eq v1, v0, :cond_5

    .line 110
    invoke-virtual {p1}, Ljava/lang/Integer;->intValue()I

    move-result v0

    invoke-virtual {p1}, Ljava/lang/Integer;->intValue()I

    move-result p1

    invoke-virtual {p2, p1}, Ljava/util/Calendar;->get(I)I

    move-result p1

    add-int/2addr p1, v2

    invoke-virtual {p2, v0, p1}, Ljava/util/Calendar;->set(II)V

    .line 113
    :cond_5
    invoke-virtual {p2}, Ljava/util/Calendar;->getTimeInMillis()J

    move-result-wide p1

    return-wide p1
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p0, p1, :cond_0

    return v0

    :cond_0
    const/4 v1, 0x0

    if-eqz p1, :cond_c

    .line 155
    invoke-virtual {p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v2

    invoke-virtual {p1}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v3

    if-eq v2, v3, :cond_1

    goto :goto_5

    .line 157
    :cond_1
    check-cast p1, Lcom/getcapacitor/plugin/notification/DateMatch;

    .line 159
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->year:Ljava/lang/Integer;

    if-eqz v2, :cond_2

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/DateMatch;->year:Ljava/lang/Integer;

    invoke-virtual {v2, v3}, Ljava/lang/Integer;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_3

    goto :goto_0

    :cond_2
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/DateMatch;->year:Ljava/lang/Integer;

    if-eqz v2, :cond_3

    :goto_0
    return v1

    .line 160
    :cond_3
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->month:Ljava/lang/Integer;

    if-eqz v2, :cond_4

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/DateMatch;->month:Ljava/lang/Integer;

    invoke-virtual {v2, v3}, Ljava/lang/Integer;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_5

    goto :goto_1

    :cond_4
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/DateMatch;->month:Ljava/lang/Integer;

    if-eqz v2, :cond_5

    :goto_1
    return v1

    .line 161
    :cond_5
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->day:Ljava/lang/Integer;

    if-eqz v2, :cond_6

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/DateMatch;->day:Ljava/lang/Integer;

    invoke-virtual {v2, v3}, Ljava/lang/Integer;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_7

    goto :goto_2

    :cond_6
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/DateMatch;->day:Ljava/lang/Integer;

    if-eqz v2, :cond_7

    :goto_2
    return v1

    .line 162
    :cond_7
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->hour:Ljava/lang/Integer;

    if-eqz v2, :cond_8

    iget-object v3, p1, Lcom/getcapacitor/plugin/notification/DateMatch;->hour:Ljava/lang/Integer;

    invoke-virtual {v2, v3}, Ljava/lang/Integer;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_9

    goto :goto_3

    :cond_8
    iget-object v2, p1, Lcom/getcapacitor/plugin/notification/DateMatch;->hour:Ljava/lang/Integer;

    if-eqz v2, :cond_9

    :goto_3
    return v1

    .line 163
    :cond_9
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->minute:Ljava/lang/Integer;

    iget-object p1, p1, Lcom/getcapacitor/plugin/notification/DateMatch;->minute:Ljava/lang/Integer;

    if-eqz v2, :cond_a

    invoke-virtual {v2, p1}, Ljava/lang/Integer;->equals(Ljava/lang/Object;)Z

    move-result v0

    goto :goto_4

    :cond_a
    if-nez p1, :cond_b

    goto :goto_4

    :cond_b
    move v0, v1

    :goto_4
    return v0

    :cond_c
    :goto_5
    return v1
.end method

.method public getDay()Ljava/lang/Integer;
    .locals 1

    .line 45
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->day:Ljava/lang/Integer;

    return-object v0
.end method

.method public getHour()Ljava/lang/Integer;
    .locals 1

    .line 53
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->hour:Ljava/lang/Integer;

    return-object v0
.end method

.method public getMinute()Ljava/lang/Integer;
    .locals 1

    .line 61
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->minute:Ljava/lang/Integer;

    return-object v0
.end method

.method public getMonth()Ljava/lang/Integer;
    .locals 1

    .line 37
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->month:Ljava/lang/Integer;

    return-object v0
.end method

.method public getUnit()Ljava/lang/Integer;
    .locals 1

    .line 215
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    return-object v0
.end method

.method public getYear()Ljava/lang/Integer;
    .locals 1

    .line 29
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->year:Ljava/lang/Integer;

    return-object v0
.end method

.method public hashCode()I
    .locals 3

    .line 168
    iget-object v0, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->year:Ljava/lang/Integer;

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    invoke-virtual {v0}, Ljava/lang/Integer;->hashCode()I

    move-result v0

    goto :goto_0

    :cond_0
    move v0, v1

    :goto_0
    mul-int/lit8 v0, v0, 0x1f

    .line 169
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->month:Ljava/lang/Integer;

    if-eqz v2, :cond_1

    invoke-virtual {v2}, Ljava/lang/Integer;->hashCode()I

    move-result v2

    goto :goto_1

    :cond_1
    move v2, v1

    :goto_1
    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 170
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->day:Ljava/lang/Integer;

    if-eqz v2, :cond_2

    invoke-virtual {v2}, Ljava/lang/Integer;->hashCode()I

    move-result v2

    goto :goto_2

    :cond_2
    move v2, v1

    :goto_2
    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 171
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->hour:Ljava/lang/Integer;

    if-eqz v2, :cond_3

    invoke-virtual {v2}, Ljava/lang/Integer;->hashCode()I

    move-result v2

    goto :goto_3

    :cond_3
    move v2, v1

    :goto_3
    add-int/2addr v0, v2

    mul-int/lit8 v0, v0, 0x1f

    .line 172
    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->minute:Ljava/lang/Integer;

    if-eqz v2, :cond_4

    invoke-virtual {v2}, Ljava/lang/Integer;->hashCode()I

    move-result v1

    :cond_4
    add-int/2addr v0, v1

    return v0
.end method

.method public nextTrigger(Ljava/util/Date;)J
    .locals 2

    .line 88
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/notification/DateMatch;->buildCalendar(Ljava/util/Date;)Ljava/util/Calendar;

    move-result-object v0

    .line 89
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/notification/DateMatch;->buildNextTriggerTime(Ljava/util/Date;)Ljava/util/Calendar;

    move-result-object p1

    .line 90
    invoke-direct {p0, v0, p1}, Lcom/getcapacitor/plugin/notification/DateMatch;->postponeTriggerIfNeeded(Ljava/util/Calendar;Ljava/util/Calendar;)J

    move-result-wide v0

    return-wide v0
.end method

.method public setDay(Ljava/lang/Integer;)V
    .locals 0

    .line 49
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->day:Ljava/lang/Integer;

    return-void
.end method

.method public setHour(Ljava/lang/Integer;)V
    .locals 0

    .line 57
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->hour:Ljava/lang/Integer;

    return-void
.end method

.method public setMinute(Ljava/lang/Integer;)V
    .locals 0

    .line 65
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->minute:Ljava/lang/Integer;

    return-void
.end method

.method public setMonth(Ljava/lang/Integer;)V
    .locals 0

    .line 41
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->month:Ljava/lang/Integer;

    return-void
.end method

.method public setUnit(Ljava/lang/Integer;)V
    .locals 0

    .line 219
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    return-void
.end method

.method public setYear(Ljava/lang/Integer;)V
    .locals 0

    .line 33
    iput-object p1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->year:Ljava/lang/Integer;

    return-void
.end method

.method public toMatchString()Ljava/lang/String;
    .locals 3

    .line 182
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->year:Ljava/lang/Integer;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->month:Ljava/lang/Integer;

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->day:Ljava/lang/Integer;

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->hour:Ljava/lang/Integer;

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v2, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->minute:Ljava/lang/Integer;

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->unit:Ljava/lang/Integer;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 183
    const-string v1, "null"

    const-string v2, "*"

    invoke-virtual {v0, v1, v2}, Ljava/lang/String;->replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 143
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "DateMatch{year="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->year:Ljava/lang/Integer;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", month="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->month:Ljava/lang/Integer;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", day="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->day:Ljava/lang/Integer;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", hour="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->hour:Ljava/lang/Integer;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", minute="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/notification/DateMatch;->minute:Ljava/lang/Integer;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
