.class public Lcordova/plugins/Diagnostic;
.super Lorg/apache/cordova/CordovaPlugin;
.source "Diagnostic.java"


# static fields
.field public static final CPU_ARCH_ARMv6:Ljava/lang/String; = "ARMv6"

.field public static final CPU_ARCH_ARMv7:Ljava/lang/String; = "ARMv7"

.field public static final CPU_ARCH_ARMv8:Ljava/lang/String; = "ARMv8"

.field public static final CPU_ARCH_MIPS:Ljava/lang/String; = "MIPS"

.field public static final CPU_ARCH_MIPS_64:Ljava/lang/String; = "MIPS_64"

.field public static final CPU_ARCH_UNKNOWN:Ljava/lang/String; = "unknown"

.field public static final CPU_ARCH_X86:Ljava/lang/String; = "X86"

.field public static final CPU_ARCH_X86_64:Ljava/lang/String; = "X86_64"

.field protected static final STATUS_DENIED_ALWAYS:Ljava/lang/String; = "DENIED_ALWAYS"

.field protected static final STATUS_DENIED_ONCE:Ljava/lang/String; = "DENIED_ONCE"

.field protected static final STATUS_GRANTED:Ljava/lang/String; = "GRANTED"

.field protected static final STATUS_NOT_REQUESTED:Ljava/lang/String; = "NOT_REQUESTED"

.field public static final TAG:Ljava/lang/String; = "Diagnostic"

.field public static instance:Lcordova/plugins/Diagnostic;

.field protected static final maxSdkPermissionMap:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field

.field protected static final minSdkPermissionMap:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field

.field protected static final permissionsMap:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field


# instance fields
.field protected applicationContext:Landroid/content/Context;

.field protected callbackContexts:Ljava/util/HashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/HashMap<",
            "Ljava/lang/String;",
            "Lorg/apache/cordova/CallbackContext;",
            ">;"
        }
    .end annotation
.end field

.field protected currentContext:Lorg/apache/cordova/CallbackContext;

.field debugEnabled:Z

.field protected editor:Landroid/content/SharedPreferences$Editor;

.field protected permissionStatuses:Ljava/util/HashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/HashMap<",
            "Ljava/lang/String;",
            "Lorg/json/JSONObject;",
            ">;"
        }
    .end annotation
.end field

.field protected sharedPref:Landroid/content/SharedPreferences;


# direct methods
.method static constructor <clinit>()V
    .locals 21

    .line 92
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    .line 95
    const-string v1, "ACCESS_COARSE_LOCATION"

    const-string v2, "android.permission.ACCESS_COARSE_LOCATION"

    invoke-static {v0, v1, v2}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 96
    const-string v1, "ACCESS_FINE_LOCATION"

    const-string v2, "android.permission.ACCESS_FINE_LOCATION"

    invoke-static {v0, v1, v2}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 97
    const-string v1, "ADD_VOICEMAIL"

    const-string v2, "android.permission.ADD_VOICEMAIL"

    invoke-static {v0, v1, v2}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 98
    const-string v1, "BODY_SENSORS"

    const-string v2, "android.permission.BODY_SENSORS"

    invoke-static {v0, v1, v2}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 99
    const-string v1, "CALL_PHONE"

    const-string v2, "android.permission.CALL_PHONE"

    invoke-static {v0, v1, v2}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 100
    const-string v1, "CAMERA"

    const-string v2, "android.permission.CAMERA"

    invoke-static {v0, v1, v2}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 101
    const-string v1, "GET_ACCOUNTS"

    const-string v2, "android.permission.GET_ACCOUNTS"

    invoke-static {v0, v1, v2}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 102
    const-string v1, "PROCESS_OUTGOING_CALLS"

    const-string v2, "android.permission.PROCESS_OUTGOING_CALLS"

    invoke-static {v0, v1, v2}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 103
    const-string v1, "READ_CALENDAR"

    const-string v2, "android.permission.READ_CALENDAR"

    invoke-static {v0, v1, v2}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 104
    const-string v1, "READ_CALL_LOG"

    const-string v2, "android.permission.READ_CALL_LOG"

    invoke-static {v0, v1, v2}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 105
    const-string v1, "READ_CONTACTS"

    const-string v2, "android.permission.READ_CONTACTS"

    invoke-static {v0, v1, v2}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 106
    const-string v1, "android.permission.READ_EXTERNAL_STORAGE"

    const-string v2, "READ_EXTERNAL_STORAGE"

    invoke-static {v0, v2, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 107
    const-string v1, "READ_PHONE_STATE"

    const-string v3, "android.permission.READ_PHONE_STATE"

    invoke-static {v0, v1, v3}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 108
    const-string v1, "READ_SMS"

    const-string v3, "android.permission.READ_SMS"

    invoke-static {v0, v1, v3}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 109
    const-string v1, "RECEIVE_MMS"

    const-string v3, "android.permission.RECEIVE_MMS"

    invoke-static {v0, v1, v3}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 110
    const-string v1, "RECEIVE_SMS"

    const-string v3, "android.permission.RECEIVE_SMS"

    invoke-static {v0, v1, v3}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 111
    const-string v1, "RECEIVE_WAP_PUSH"

    const-string v3, "android.permission.RECEIVE_WAP_PUSH"

    invoke-static {v0, v1, v3}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 112
    const-string v1, "RECORD_AUDIO"

    const-string v3, "android.permission.RECORD_AUDIO"

    invoke-static {v0, v1, v3}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 113
    const-string v1, "SEND_SMS"

    const-string v3, "android.permission.SEND_SMS"

    invoke-static {v0, v1, v3}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 114
    const-string v1, "USE_SIP"

    const-string v3, "android.permission.USE_SIP"

    invoke-static {v0, v1, v3}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 115
    const-string v1, "WRITE_CALENDAR"

    const-string v3, "android.permission.WRITE_CALENDAR"

    invoke-static {v0, v1, v3}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 116
    const-string v1, "WRITE_CALL_LOG"

    const-string v3, "android.permission.WRITE_CALL_LOG"

    invoke-static {v0, v1, v3}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 117
    const-string v1, "WRITE_CONTACTS"

    const-string v3, "android.permission.WRITE_CONTACTS"

    invoke-static {v0, v1, v3}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 118
    const-string v1, "android.permission.WRITE_EXTERNAL_STORAGE"

    const-string v3, "WRITE_EXTERNAL_STORAGE"

    invoke-static {v0, v3, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 121
    const-string v1, "android.permission.ANSWER_PHONE_CALLS"

    const-string v4, "ANSWER_PHONE_CALLS"

    invoke-static {v0, v4, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 122
    const-string v1, "android.permission.READ_PHONE_NUMBERS"

    const-string v5, "READ_PHONE_NUMBERS"

    invoke-static {v0, v5, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 125
    const-string v1, "android.permission.ACCEPT_HANDOVER"

    const-string v6, "ACCEPT_HANDOVER"

    invoke-static {v0, v6, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 128
    const-string v1, "android.permission.ACCESS_BACKGROUND_LOCATION"

    const-string v7, "ACCESS_BACKGROUND_LOCATION"

    invoke-static {v0, v7, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 129
    const-string v1, "android.permission.ACCESS_MEDIA_LOCATION"

    const-string v8, "ACCESS_MEDIA_LOCATION"

    invoke-static {v0, v8, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 130
    const-string v1, "android.permission.ACTIVITY_RECOGNITION"

    const-string v9, "ACTIVITY_RECOGNITION"

    invoke-static {v0, v9, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 133
    const-string v1, "android.permission.BLUETOOTH_ADVERTISE"

    const-string v10, "BLUETOOTH_ADVERTISE"

    invoke-static {v0, v10, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 134
    const-string v1, "android.permission.BLUETOOTH_CONNECT"

    const-string v11, "BLUETOOTH_CONNECT"

    invoke-static {v0, v11, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 135
    const-string v1, "android.permission.BLUETOOTH_SCAN"

    const-string v12, "BLUETOOTH_SCAN"

    invoke-static {v0, v12, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 136
    const-string v1, "android.permission.UWB_RANGING"

    const-string v13, "UWB_RANGING"

    invoke-static {v0, v13, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 139
    const-string v1, "android.permission.BODY_SENSORS_BACKGROUND"

    const-string v14, "BODY_SENSORS_BACKGROUND"

    invoke-static {v0, v14, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 140
    const-string v1, "android.permission.NEARBY_WIFI_DEVICES"

    const-string v15, "NEARBY_WIFI_DEVICES"

    invoke-static {v0, v15, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 141
    const-string v1, "android.permission.POST_NOTIFICATIONS"

    move-object/from16 v16, v3

    const-string v3, "POST_NOTIFICATIONS"

    invoke-static {v0, v3, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 142
    const-string v1, "android.permission.READ_MEDIA_AUDIO"

    move-object/from16 v17, v2

    const-string v2, "READ_MEDIA_AUDIO"

    invoke-static {v0, v2, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 143
    const-string v1, "android.permission.READ_MEDIA_IMAGES"

    move-object/from16 v18, v2

    const-string v2, "READ_MEDIA_IMAGES"

    invoke-static {v0, v2, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 144
    const-string v1, "android.permission.READ_MEDIA_VIDEO"

    move-object/from16 v19, v2

    const-string v2, "READ_MEDIA_VIDEO"

    invoke-static {v0, v2, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 147
    const-string v1, "android.permission.READ_MEDIA_VISUAL_USER_SELECTED"

    move-object/from16 v20, v2

    const-string v2, "READ_MEDIA_VISUAL_USER_SELECTED"

    invoke-static {v0, v2, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 149
    invoke-static {v0}, Ljava/util/Collections;->unmodifiableMap(Ljava/util/Map;)Ljava/util/Map;

    move-result-object v0

    sput-object v0, Lcordova/plugins/Diagnostic;->permissionsMap:Ljava/util/Map;

    .line 157
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    const/16 v1, 0x1a

    .line 160
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-static {v0, v4, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    const/16 v1, 0x1a

    .line 161
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-static {v0, v5, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    const/16 v1, 0x1c

    .line 164
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-static {v0, v6, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    const/16 v1, 0x1d

    .line 167
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-static {v0, v7, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 168
    invoke-static {v0, v8, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 169
    invoke-static {v0, v9, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    const/16 v1, 0x1f

    .line 172
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-static {v0, v10, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 173
    invoke-static {v0, v11, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 174
    invoke-static {v0, v12, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 175
    invoke-static {v0, v13, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    const/16 v1, 0x21

    .line 178
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-static {v0, v14, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 179
    invoke-static {v0, v15, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 180
    invoke-static {v0, v3, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    move-object/from16 v3, v18

    .line 181
    invoke-static {v0, v3, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    move-object/from16 v3, v19

    .line 182
    invoke-static {v0, v3, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    move-object/from16 v3, v20

    .line 183
    invoke-static {v0, v3, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    const/16 v1, 0x22

    .line 186
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-static {v0, v2, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 188
    invoke-static {v0}, Ljava/util/Collections;->unmodifiableMap(Ljava/util/Map;)Ljava/util/Map;

    move-result-object v0

    sput-object v0, Lcordova/plugins/Diagnostic;->minSdkPermissionMap:Ljava/util/Map;

    .line 196
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    const/16 v1, 0x20

    .line 198
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    move-object/from16 v2, v17

    invoke-static {v0, v2, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    const/16 v1, 0x20

    .line 199
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    move-object/from16 v2, v16

    invoke-static {v0, v2, v1}, Lcordova/plugins/Diagnostic;->addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V

    .line 201
    invoke-static {v0}, Ljava/util/Collections;->unmodifiableMap(Ljava/util/Map;)Ljava/util/Map;

    move-result-object v0

    sput-object v0, Lcordova/plugins/Diagnostic;->maxSdkPermissionMap:Ljava/util/Map;

    const/4 v0, 0x0

    .line 252
    sput-object v0, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    return-void
.end method

.method public constructor <init>()V
    .locals 1

    .line 274
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    .line 208
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Lcordova/plugins/Diagnostic;->callbackContexts:Ljava/util/HashMap;

    .line 213
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Lcordova/plugins/Diagnostic;->permissionStatuses:Ljava/util/HashMap;

    const/4 v0, 0x0

    .line 254
    iput-boolean v0, p0, Lcordova/plugins/Diagnostic;->debugEnabled:Z

    return-void
.end method

.method protected static addBiDirMapEntry(Ljava/util/Map;Ljava/lang/Object;Ljava/lang/Object;)V
    .locals 0

    .line 810
    invoke-interface {p0, p1, p2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 811
    invoke-interface {p0, p2, p1}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method

.method public static getInstance()Lcordova/plugins/Diagnostic;
    .locals 1

    .line 277
    sget-object v0, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    return-object v0
.end method

.method private isDebugBuild()Z
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 551
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    .line 552
    invoke-virtual {v0}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x3

    invoke-virtual {v0, v1, v2}, Landroid/content/Context;->createPackageContext(Ljava/lang/String;I)Landroid/content/Context;

    move-result-object v1

    invoke-virtual {v1}, Landroid/content/Context;->getClassLoader()Ljava/lang/ClassLoader;

    move-result-object v1

    .line 553
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v0}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v2, ".BuildConfig"

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Ljava/lang/ClassLoader;->loadClass(Ljava/lang/String;)Ljava/lang/Class;

    move-result-object v0

    .line 554
    const-string v1, "DEBUG"

    invoke-virtual {v0, v1}, Ljava/lang/Class;->getField(Ljava/lang/String;)Ljava/lang/reflect/Field;

    move-result-object v0

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Ljava/lang/reflect/Field;->getBoolean(Ljava/lang/Object;)Z

    move-result v0

    .line 555
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Debug build: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p0, v1}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    return v0
.end method


# virtual methods
.method protected _getPermissionsAuthorizationStatus([Ljava/lang/String;)Lorg/json/JSONObject;
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 644
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    const/4 v1, 0x0

    .line 645
    :goto_0
    array-length v2, p1

    if-ge v1, v2, :cond_5

    .line 646
    aget-object v2, p1, v1

    .line 647
    sget-object v3, Lcordova/plugins/Diagnostic;->permissionsMap:Ljava/util/Map;

    invoke-interface {v3, v2}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result v4

    if-eqz v4, :cond_4

    .line 650
    invoke-interface {v3, v2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/lang/String;

    .line 651
    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "Get authorisation status for "

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    const-string v5, "Diagnostic"

    invoke-static {v5, v4}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    .line 652
    invoke-virtual {p0, v3}, Lcordova/plugins/Diagnostic;->hasRuntimePermission(Ljava/lang/String;)Z

    move-result v4

    if-nez v4, :cond_3

    .line 653
    invoke-virtual {p0, v2}, Lcordova/plugins/Diagnostic;->isPermissionImplicitlyGranted(Ljava/lang/String;)Z

    move-result v4

    if-eqz v4, :cond_0

    goto :goto_1

    .line 656
    :cond_0
    iget-object v4, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v4}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v4

    invoke-virtual {p0, v4, v3}, Lcordova/plugins/Diagnostic;->shouldShowRequestPermissionRationale(Landroid/app/Activity;Ljava/lang/String;)Z

    move-result v3

    if-nez v3, :cond_2

    .line 658
    invoke-virtual {p0, v2}, Lcordova/plugins/Diagnostic;->isPermissionRequested(Ljava/lang/String;)Z

    move-result v3

    if-eqz v3, :cond_1

    .line 659
    const-string v3, "DENIED_ALWAYS"

    invoke-virtual {v0, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_2

    .line 661
    :cond_1
    const-string v3, "NOT_REQUESTED"

    invoke-virtual {v0, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_2

    .line 664
    :cond_2
    const-string v3, "DENIED_ONCE"

    invoke-virtual {v0, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_2

    .line 654
    :cond_3
    :goto_1
    const-string v3, "GRANTED"

    invoke-virtual {v0, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    :goto_2
    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    .line 648
    :cond_4
    new-instance p1, Ljava/lang/Exception;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Permission name \'"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\' is not a valid permission"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-direct {p1, v0}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    throw p1

    :cond_5
    return-object v0
.end method

.method protected _requestRuntimePermissions(Lorg/json/JSONArray;I)V
    .locals 9
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 672
    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->jsonArrayToStringArray(Lorg/json/JSONArray;)[Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->_getPermissionsAuthorizationStatus([Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    .line 673
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0}, Lorg/json/JSONArray;-><init>()V

    const/4 v1, 0x0

    .line 674
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONObject;->names()Lorg/json/JSONArray;

    move-result-object v2

    invoke-virtual {v2}, Lorg/json/JSONArray;->length()I

    move-result v2

    const-string v3, "Diagnostic"

    if-ge v1, v2, :cond_7

    .line 675
    invoke-virtual {p1}, Lorg/json/JSONObject;->names()Lorg/json/JSONArray;

    move-result-object v2

    invoke-virtual {v2, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v2

    .line 677
    sget-object v4, Lcordova/plugins/Diagnostic;->permissionsMap:Ljava/util/Map;

    invoke-interface {v4, v2}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_6

    .line 681
    invoke-virtual {p1, v2}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v5

    const-string v6, "GRANTED"

    if-ne v5, v6, :cond_0

    goto :goto_1

    .line 682
    :cond_0
    invoke-virtual {p0, v2}, Lcordova/plugins/Diagnostic;->isPermissionImplicitlyGranted(Ljava/lang/String;)Z

    move-result v5

    if-eqz v5, :cond_1

    .line 683
    :goto_1
    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "Permission already granted for "

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    invoke-static {v3, v4}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 684
    iget-object v3, p0, Lcordova/plugins/Diagnostic;->permissionStatuses:Ljava/util/HashMap;

    invoke-static {p2}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v3, v4}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Lorg/json/JSONObject;

    .line 685
    invoke-virtual {v3, v2, v6}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 686
    iget-object v2, p0, Lcordova/plugins/Diagnostic;->permissionStatuses:Ljava/util/HashMap;

    invoke-static {p2}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v2, v4, v3}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    goto/16 :goto_4

    .line 689
    :cond_1
    sget-object v5, Lcordova/plugins/Diagnostic;->minSdkPermissionMap:Ljava/util/Map;

    invoke-interface {v5, v2}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result v6

    const-string v7, " not supported for build SDK version "

    const-string v8, "Permission "

    if-eqz v6, :cond_3

    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getDeviceRuntimeSdkVersion()I

    move-result v6

    invoke-interface {v5, v2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Ljava/lang/Integer;

    invoke-virtual {v5}, Ljava/lang/Integer;->intValue()I

    move-result v5

    if-lt v6, v5, :cond_2

    goto :goto_2

    .line 690
    :cond_2
    new-instance p1, Ljava/lang/Exception;

    new-instance p2, Ljava/lang/StringBuilder;

    invoke-direct {p2, v8}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getDeviceRuntimeSdkVersion()I

    move-result v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    throw p1

    .line 693
    :cond_3
    :goto_2
    sget-object v5, Lcordova/plugins/Diagnostic;->maxSdkPermissionMap:Ljava/util/Map;

    invoke-interface {v5, v2}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result v6

    if-eqz v6, :cond_5

    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getDeviceRuntimeSdkVersion()I

    move-result v6

    invoke-interface {v5, v2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Ljava/lang/Integer;

    invoke-virtual {v5}, Ljava/lang/Integer;->intValue()I

    move-result v5

    if-gt v6, v5, :cond_4

    goto :goto_3

    .line 694
    :cond_4
    new-instance p1, Ljava/lang/Exception;

    new-instance p2, Ljava/lang/StringBuilder;

    invoke-direct {p2, v8}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getDeviceRuntimeSdkVersion()I

    move-result v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    throw p1

    .line 697
    :cond_5
    :goto_3
    invoke-interface {v4, v2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 698
    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "Requesting permission for "

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    invoke-static {v3, v4}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 699
    invoke-virtual {v0, v2}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    :goto_4
    add-int/lit8 v1, v1, 0x1

    goto/16 :goto_0

    .line 678
    :cond_6
    new-instance p1, Ljava/lang/Exception;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "Permission name \'"

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, "\' is not a supported permission"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    throw p1

    .line 702
    :cond_7
    invoke-virtual {v0}, Lorg/json/JSONArray;->length()I

    move-result p1

    if-lez p1, :cond_8

    .line 703
    const-string p1, "Requesting permissions"

    invoke-static {v3, p1}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    .line 704
    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->jsonArrayToStringArray(Lorg/json/JSONArray;)[Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p0, p2, p1}, Lcordova/plugins/Diagnostic;->requestPermissions(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V

    goto :goto_5

    .line 707
    :cond_8
    const-string p1, "No permissions to request: returning result"

    invoke-static {v3, p1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 708
    invoke-virtual {p0, p2}, Lcordova/plugins/Diagnostic;->sendRuntimeRequestResult(I)V

    :goto_5
    return-void
.end method

.method protected clearRequest(I)V
    .locals 1

    .line 795
    invoke-static {p1}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object p1

    .line 796
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->callbackContexts:Ljava/util/HashMap;

    invoke-virtual {v0, p1}, Ljava/util/HashMap;->containsKey(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 799
    :cond_0
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->callbackContexts:Ljava/util/HashMap;

    invoke-virtual {v0, p1}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 800
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->permissionStatuses:Ljava/util/HashMap;

    invoke-virtual {v0, p1}, Ljava/util/HashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method

.method protected concatStrings([Ljava/lang/String;[Ljava/lang/String;)[Ljava/lang/String;
    .locals 4

    .line 1040
    array-length v0, p1

    .line 1041
    array-length v1, p2

    add-int v2, v0, v1

    .line 1042
    new-array v2, v2, [Ljava/lang/String;

    const/4 v3, 0x0

    .line 1043
    invoke-static {p1, v3, v2, v3, v0}, Ljava/lang/System;->arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V

    .line 1044
    invoke-static {p2, v3, v2, v0, v1}, Ljava/lang/System;->arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V

    return-object v2
.end method

.method protected doColdRestart()V
    .locals 3

    .line 888
    :try_start_0
    const-string v0, "Cold restarting application"

    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->logInfo(Ljava/lang/String;)V

    .line 889
    sget-object v0, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    iget-object v0, v0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 895
    invoke-virtual {v0}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v1

    .line 896
    invoke-virtual {v0}, Landroid/app/Activity;->getPackageName()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Landroid/content/pm/PackageManager;->getLaunchIntentForPackage(Ljava/lang/String;)Landroid/content/Intent;

    move-result-object v1

    .line 897
    invoke-virtual {v0}, Landroid/app/Activity;->finishAffinity()V

    .line 898
    invoke-virtual {v0, v1}, Landroid/app/Activity;->startActivity(Landroid/content/Intent;)V

    const/4 v0, 0x0

    .line 899
    invoke-static {v0}, Ljava/lang/System;->exit(I)V

    goto :goto_0

    .line 901
    :cond_0
    const-string v0, "Unable to cold restart application: Activity is null"

    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 904
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Unable to cold restart application: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method protected doWarmRestart()V
    .locals 2

    .line 868
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    new-instance v1, Lcordova/plugins/Diagnostic$2;

    invoke-direct {v1, p0}, Lcordova/plugins/Diagnostic$2;-><init>(Lcordova/plugins/Diagnostic;)V

    invoke-virtual {v0, v1}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method public escapeDoubleQuotes(Ljava/lang/String;)Ljava/lang/String;
    .locals 2

    .line 596
    const-string v0, "\""

    const-string v1, "\\\""

    invoke-virtual {p1, v0, v1}, Ljava/lang/String;->replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p1

    .line 597
    const-string v0, "%22"

    const-string v1, "\\%22"

    invoke-virtual {p1, v0, v1}, Ljava/lang/String;->replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 307
    iput-object p3, p0, Lcordova/plugins/Diagnostic;->currentContext:Lorg/apache/cordova/CallbackContext;

    const/4 v0, 0x0

    .line 310
    :try_start_0
    const-string v1, "enableDebug"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    const/4 v2, 0x1

    if-eqz v1, :cond_0

    .line 311
    iput-boolean v2, p0, Lcordova/plugins/Diagnostic;->debugEnabled:Z

    .line 312
    const-string p1, "Debug enabled"

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    .line 313
    invoke-virtual {p3}, Lorg/apache/cordova/CallbackContext;->success()V

    goto/16 :goto_1

    .line 314
    :cond_0
    const-string v1, "switchToSettings"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 315
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->switchToAppSettings()V

    .line 316
    invoke-virtual {p3}, Lorg/apache/cordova/CallbackContext;->success()V

    goto/16 :goto_1

    .line 317
    :cond_1
    const-string v1, "switchToMobileDataSettings"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    .line 318
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->switchToMobileDataSettings()V

    .line 319
    invoke-virtual {p3}, Lorg/apache/cordova/CallbackContext;->success()V

    goto/16 :goto_1

    .line 320
    :cond_2
    const-string v1, "switchToWirelessSettings"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_3

    .line 321
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->switchToWirelessSettings()V

    .line 322
    invoke-virtual {p3}, Lorg/apache/cordova/CallbackContext;->success()V

    goto/16 :goto_1

    .line 323
    :cond_3
    const-string v1, "isDataRoamingEnabled"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_5

    .line 324
    sget p1, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 p2, 0x20

    if-gt p1, p2, :cond_4

    .line 325
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->isDataRoamingEnabled()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto :goto_0

    .line 327
    :cond_4
    const-string p1, "Data roaming setting not available on Android 12L / API32+"

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    .line 329
    :goto_0
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->isDataRoamingEnabled()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto/16 :goto_1

    .line 330
    :cond_5
    const-string v1, "getPermissionAuthorizationStatus"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_6

    .line 331
    invoke-virtual {p0, p2}, Lcordova/plugins/Diagnostic;->getPermissionAuthorizationStatus(Lorg/json/JSONArray;)V

    goto/16 :goto_1

    .line 332
    :cond_6
    const-string v1, "getPermissionsAuthorizationStatus"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_7

    .line 333
    invoke-virtual {p0, p2}, Lcordova/plugins/Diagnostic;->getPermissionsAuthorizationStatus(Lorg/json/JSONArray;)V

    goto/16 :goto_1

    .line 334
    :cond_7
    const-string v1, "requestRuntimePermission"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_8

    .line 335
    invoke-virtual {p0, p2}, Lcordova/plugins/Diagnostic;->requestRuntimePermission(Lorg/json/JSONArray;)V

    goto/16 :goto_1

    .line 336
    :cond_8
    const-string v1, "requestRuntimePermissions"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_9

    .line 337
    invoke-virtual {p0, p2}, Lcordova/plugins/Diagnostic;->requestRuntimePermissions(Lorg/json/JSONArray;)V

    goto/16 :goto_1

    .line 338
    :cond_9
    const-string v1, "isADBModeEnabled"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_a

    .line 339
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->isADBModeEnabled()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto/16 :goto_1

    .line 340
    :cond_a
    const-string v1, "isDeviceRooted"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_b

    .line 341
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->isDeviceRooted()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto/16 :goto_1

    .line 342
    :cond_b
    const-string v1, "isMobileDataEnabled"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_c

    .line 343
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->isMobileDataEnabled()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto/16 :goto_1

    .line 344
    :cond_c
    const-string v1, "isAccessibilityModeEnabled"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_d

    .line 345
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->isAccessibilityModeEnabled()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto/16 :goto_1

    .line 346
    :cond_d
    const-string v1, "isTouchExplorationEnabled"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_e

    .line 347
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->isAccessibilityTouchExplorationEnabled()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto/16 :goto_1

    .line 348
    :cond_e
    const-string v1, "restart"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_f

    .line 349
    invoke-virtual {p0, p2}, Lcordova/plugins/Diagnostic;->restart(Lorg/json/JSONArray;)V

    goto :goto_1

    .line 350
    :cond_f
    const-string p2, "getArchitecture"

    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_10

    .line 351
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getCPUArchitecture()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    goto :goto_1

    .line 352
    :cond_10
    const-string p2, "getCurrentBatteryLevel"

    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_11

    .line 353
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getCurrentBatteryLevel()I

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto :goto_1

    .line 354
    :cond_11
    const-string p2, "isAirplaneModeEnabled"

    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_12

    .line 355
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->isAirplaneModeEnabled()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto :goto_1

    .line 356
    :cond_12
    const-string p2, "getDeviceOSVersion"

    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_13

    .line 357
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getDeviceOSVersion()Lorg/json/JSONObject;

    move-result-object p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V

    goto :goto_1

    .line 358
    :cond_13
    const-string p2, "getBuildOSVersion"

    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_14

    .line 359
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getBuildOSVersion()Lorg/json/JSONObject;

    move-result-object p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V

    goto :goto_1

    .line 360
    :cond_14
    const-string p2, "isDebugBuild"

    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_15

    .line 361
    invoke-direct {p0}, Lcordova/plugins/Diagnostic;->isDebugBuild()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    :goto_1
    return v2

    .line 363
    :cond_15
    const-string p1, "Invalid action"

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return v0

    :catch_0
    move-exception p1

    .line 367
    const-string p2, "Exception occurred: "

    invoke-virtual {p1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Ljava/lang/String;->concat(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;)V

    return v0
.end method

.method public executeGlobalJavascript(Ljava/lang/String;)V
    .locals 2

    .line 852
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    new-instance v1, Lcordova/plugins/Diagnostic$1;

    invoke-direct {v1, p0, p1}, Lcordova/plugins/Diagnostic$1;-><init>(Lcordova/plugins/Diagnostic;Ljava/lang/String;)V

    invoke-virtual {v0, v1}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method public executePluginJavascript(Ljava/lang/String;)V
    .locals 2

    .line 861
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "cordova.plugins.diagnostic."

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->executeGlobalJavascript(Ljava/lang/String;)V

    return-void
.end method

.method protected generateRandom()Ljava/lang/String;
    .locals 2

    .line 760
    new-instance v0, Ljava/util/Random;

    invoke-direct {v0}, Ljava/util/Random;-><init>()V

    const v1, 0xf4240

    .line 761
    invoke-virtual {v0, v1}, Ljava/util/Random;->nextInt(I)I

    move-result v0

    add-int/lit8 v0, v0, 0x1

    .line 762
    invoke-static {v0}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method protected generateRandomRequestId()Ljava/lang/String;
    .locals 3

    const/4 v0, 0x0

    :goto_0
    move-object v1, v0

    :cond_0
    if-nez v1, :cond_1

    .line 751
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->generateRandom()Ljava/lang/String;

    move-result-object v1

    .line 752
    iget-object v2, p0, Lcordova/plugins/Diagnostic;->callbackContexts:Ljava/util/HashMap;

    invoke-virtual {v2, v1}, Ljava/util/HashMap;->containsKey(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_0

    goto :goto_0

    :cond_1
    return-object v1
.end method

.method public getADBMode()I
    .locals 3

    .line 448
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->applicationContext:Landroid/content/Context;

    invoke-virtual {v0}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v0

    const-string v1, "adb_enabled"

    const/4 v2, 0x0

    invoke-static {v0, v1, v2}, Landroid/provider/Settings$Global;->getInt(Landroid/content/ContentResolver;Ljava/lang/String;I)I

    move-result v0

    return v0
.end method

.method protected getBuildMinimumSdkVersion()I
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 1016
    sget-object v0, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    iget-object v0, v0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    .line 1017
    invoke-virtual {v0}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v1

    invoke-virtual {v0}, Landroid/app/Activity;->getPackageName()Ljava/lang/String;

    move-result-object v0

    const/4 v2, 0x0

    invoke-virtual {v1, v0, v2}, Landroid/content/pm/PackageManager;->getApplicationInfo(Ljava/lang/String;I)Landroid/content/pm/ApplicationInfo;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 1020
    iget v2, v0, Landroid/content/pm/ApplicationInfo;->minSdkVersion:I

    :cond_0
    return v2
.end method

.method public getBuildOSVersion()Lorg/json/JSONObject;
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 993
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 994
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getBuildTargetSdkVersion()I

    move-result v1

    .line 995
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getBuildMinimumSdkVersion()I

    move-result v2

    .line 997
    const-string v3, "targetApiLevel"

    invoke-virtual {v0, v3, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 998
    const-string v3, "targetApiName"

    invoke-virtual {p0, v1}, Lcordova/plugins/Diagnostic;->getNameForApiLevel(I)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v3, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 999
    const-string v1, "minApiLevel"

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 1000
    const-string v1, "minApiName"

    invoke-virtual {p0, v2}, Lcordova/plugins/Diagnostic;->getNameForApiLevel(I)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    return-object v0
.end method

.method protected getBuildTargetSdkVersion()I
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 1006
    sget-object v0, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    iget-object v0, v0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    .line 1007
    invoke-virtual {v0}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v1

    invoke-virtual {v0}, Landroid/app/Activity;->getPackageName()Ljava/lang/String;

    move-result-object v0

    const/4 v2, 0x0

    invoke-virtual {v1, v0, v2}, Landroid/content/pm/PackageManager;->getApplicationInfo(Ljava/lang/String;I)Landroid/content/pm/ApplicationInfo;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 1009
    iget v2, v0, Landroid/content/pm/ApplicationInfo;->targetSdkVersion:I

    :cond_0
    return v2
.end method

.method protected getCPUArchitecture()Ljava/lang/String;
    .locals 2

    .line 916
    sget-object v0, Landroid/os/Build;->SUPPORTED_ABIS:[Ljava/lang/String;

    const/4 v1, 0x0

    aget-object v0, v0, v1

    .line 920
    const-string v1, "armeabi"

    if-ne v0, v1, :cond_0

    .line 921
    const-string v0, "ARMv6"

    goto :goto_0

    .line 922
    :cond_0
    const-string v1, "armeabi-v7a"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 923
    const-string v0, "ARMv7"

    goto :goto_0

    .line 924
    :cond_1
    const-string v1, "arm64-v8a"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    .line 925
    const-string v0, "ARMv8"

    goto :goto_0

    .line 926
    :cond_2
    const-string v1, "x86"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_3

    .line 927
    const-string v0, "X86"

    goto :goto_0

    .line 928
    :cond_3
    const-string v1, "x86_64"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_4

    .line 929
    const-string v0, "X86_64"

    goto :goto_0

    .line 930
    :cond_4
    const-string v1, "mips"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_5

    .line 931
    const-string v0, "MIPS"

    goto :goto_0

    .line 932
    :cond_5
    const-string v1, "mips64"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_6

    .line 933
    const-string v0, "MIPS_64"

    goto :goto_0

    .line 932
    :cond_6
    const-string v0, "unknown"

    :goto_0
    return-object v0
.end method

.method protected getContextById(Ljava/lang/String;)Lorg/apache/cordova/CallbackContext;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 788
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->callbackContexts:Ljava/util/HashMap;

    invoke-virtual {v0, p1}, Ljava/util/HashMap;->containsKey(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 791
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->callbackContexts:Ljava/util/HashMap;

    invoke-virtual {v0, p1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lorg/apache/cordova/CallbackContext;

    return-object p1

    .line 789
    :cond_0
    new-instance v0, Ljava/lang/Exception;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "No context found for request id="

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v0, p1}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method protected getCurrentBatteryLevel()I
    .locals 2

    .line 952
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/Context;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "batterymanager"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/os/BatteryManager;

    const/4 v1, 0x4

    .line 953
    invoke-virtual {v0, v1}, Landroid/os/BatteryManager;->getIntProperty(I)I

    move-result v0

    return v0
.end method

.method public getDeviceOSVersion()Lorg/json/JSONObject;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 980
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 981
    const-string v1, "version"

    sget-object v2, Landroid/os/Build$VERSION;->RELEASE:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 982
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getDeviceRuntimeSdkVersion()I

    move-result v1

    .line 983
    const-string v2, "apiLevel"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 984
    const-string v2, "apiName"

    invoke-virtual {p0, v1}, Lcordova/plugins/Diagnostic;->getNameForApiLevel(I)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    return-object v0
.end method

.method protected getDeviceRuntimeSdkVersion()I
    .locals 1

    .line 989
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    return v0
.end method

.method protected getNameForApiLevel(I)Ljava/lang/String;
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 1029
    const-class v0, Landroid/os/Build$VERSION_CODES;

    invoke-virtual {v0}, Ljava/lang/Class;->getFields()[Ljava/lang/reflect/Field;

    move-result-object v0

    .line 1031
    array-length v1, v0

    const-string v2, "UNKNOWN"

    const/4 v3, 0x0

    :goto_0
    if-ge v3, v1, :cond_1

    aget-object v4, v0, v3

    .line 1032
    const-class v5, Landroid/os/Build$VERSION_CODES;

    invoke-virtual {v4, v5}, Ljava/lang/reflect/Field;->getInt(Ljava/lang/Object;)I

    move-result v5

    if-ne v5, p1, :cond_0

    .line 1033
    invoke-virtual {v4}, Ljava/lang/reflect/Field;->getName()Ljava/lang/String;

    move-result-object v2

    :cond_0
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    :cond_1
    return-object v2
.end method

.method public getPermissionAuthorizationStatus(Lorg/json/JSONArray;)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    const/4 v0, 0x0

    .line 415
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    .line 416
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0}, Lorg/json/JSONArray;-><init>()V

    .line 417
    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    .line 418
    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->jsonArrayToStringArray(Lorg/json/JSONArray;)[Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->_getPermissionsAuthorizationStatus([Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    .line 419
    iget-object v1, p0, Lcordova/plugins/Diagnostic;->currentContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, p1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v1, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    return-void
.end method

.method public getPermissionsAuthorizationStatus(Lorg/json/JSONArray;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    const/4 v0, 0x0

    .line 409
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getJSONArray(I)Lorg/json/JSONArray;

    move-result-object p1

    .line 410
    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->jsonArrayToStringArray(Lorg/json/JSONArray;)[Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->_getPermissionsAuthorizationStatus([Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    .line 411
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->currentContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, p1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V

    return-void
.end method

.method public handleError(Ljava/lang/String;)V
    .locals 1

    .line 621
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->currentContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p0, p1, v0}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;Lorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method public handleError(Ljava/lang/String;I)V
    .locals 2

    .line 633
    invoke-static {p2}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object v0

    .line 634
    iget-object v1, p0, Lcordova/plugins/Diagnostic;->callbackContexts:Ljava/util/HashMap;

    invoke-virtual {v1, v0}, Ljava/util/HashMap;->containsKey(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 635
    iget-object v1, p0, Lcordova/plugins/Diagnostic;->callbackContexts:Ljava/util/HashMap;

    invoke-virtual {v1, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lorg/apache/cordova/CallbackContext;

    goto :goto_0

    .line 637
    :cond_0
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->currentContext:Lorg/apache/cordova/CallbackContext;

    .line 639
    :goto_0
    invoke-virtual {p0, p1, v0}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;Lorg/apache/cordova/CallbackContext;)V

    .line 640
    invoke-virtual {p0, p2}, Lcordova/plugins/Diagnostic;->clearRequest(I)V

    return-void
.end method

.method public handleError(Ljava/lang/String;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 608
    :try_start_0
    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->logError(Ljava/lang/String;)V

    .line 609
    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 611
    invoke-virtual {p1}, Ljava/lang/Exception;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->logError(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method protected hasBuildPermission(Ljava/lang/String;)Z
    .locals 7

    const/4 v0, 0x0

    .line 960
    :try_start_0
    iget-object v1, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v1

    iget-object v2, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v2}, Lorg/apache/cordova/CordovaInterface;->getContext()Landroid/content/Context;

    move-result-object v2

    invoke-virtual {v2}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v2

    const/16 v3, 0x1000

    invoke-virtual {v1, v2, v3}, Landroid/content/pm/PackageManager;->getPackageInfo(Ljava/lang/String;I)Landroid/content/pm/PackageInfo;

    move-result-object v1

    .line 961
    iget-object v2, v1, Landroid/content/pm/PackageInfo;->requestedPermissions:[Ljava/lang/String;

    if-eqz v2, :cond_1

    .line 962
    iget-object v1, v1, Landroid/content/pm/PackageInfo;->requestedPermissions:[Ljava/lang/String;

    array-length v2, v1

    move v3, v0

    :goto_0
    if-ge v3, v2, :cond_1

    aget-object v4, v1, v3

    .line 963
    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5}, Ljava/lang/StringBuilder;-><init>()V

    const-string v6, "android.permission."

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v4, v5}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v4
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    if-eqz v4, :cond_0

    const/4 p1, 0x1

    return p1

    :cond_0
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    :catch_0
    move-exception p1

    .line 969
    invoke-virtual {p1}, Ljava/lang/Exception;->printStackTrace()V

    :cond_1
    return v0
.end method

.method protected hasRuntimePermission(Ljava/lang/String;)Z
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    const/4 v0, 0x1

    .line 818
    :try_start_0
    iget-object v1, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-virtual {v1}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v1

    const-string v2, "hasPermission"

    new-array v3, v0, [Ljava/lang/Class;

    invoke-virtual {p1}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v4

    const/4 v5, 0x0

    aput-object v4, v3, v5

    invoke-virtual {v1, v2, v3}, Ljava/lang/Class;->getMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v1

    .line 819
    iget-object v2, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    filled-new-array {p1}, [Ljava/lang/Object;

    move-result-object v3

    invoke-virtual {v1, v2, v3}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/Boolean;

    .line 820
    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0
    :try_end_0
    .catch Ljava/lang/NoSuchMethodException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 822
    :catch_0
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Cordova v7.0.0 does not support runtime permissions so defaulting to GRANTED for "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->logWarning(Ljava/lang/String;)V

    :goto_0
    return v0
.end method

.method public initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V
    .locals 3

    .line 288
    const-string v0, "initialize()"

    const-string v1, "Diagnostic"

    invoke-static {v1, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 289
    sput-object p0, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    .line 291
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    iput-object v0, p0, Lcordova/plugins/Diagnostic;->applicationContext:Landroid/content/Context;

    .line 292
    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Landroid/app/Activity;->getSharedPreferences(Ljava/lang/String;I)Landroid/content/SharedPreferences;

    move-result-object v0

    iput-object v0, p0, Lcordova/plugins/Diagnostic;->sharedPref:Landroid/content/SharedPreferences;

    .line 293
    invoke-interface {v0}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object v0

    iput-object v0, p0, Lcordova/plugins/Diagnostic;->editor:Landroid/content/SharedPreferences$Editor;

    .line 295
    invoke-super {p0, p1, p2}, Lorg/apache/cordova/CordovaPlugin;->initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V

    return-void
.end method

.method public isADBModeEnabled()Z
    .locals 3

    const/4 v0, 0x0

    .line 462
    :try_start_0
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getADBMode()I

    move-result v1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    const/4 v2, 0x1

    if-ne v1, v2, :cond_0

    move v0, v2

    goto :goto_0

    :catch_0
    move-exception v1

    .line 464
    invoke-virtual {v1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p0, v1}, Lcordova/plugins/Diagnostic;->logError(Ljava/lang/String;)V

    .line 466
    :cond_0
    :goto_0
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "ADB mode enabled: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p0, v1}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    return v0
.end method

.method public isAccessibilityModeEnabled()Z
    .locals 3

    .line 529
    :try_start_0
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "accessibility"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/view/accessibility/AccessibilityManager;

    .line 530
    invoke-virtual {v0}, Landroid/view/accessibility/AccessibilityManager;->isEnabled()Z

    move-result v0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 532
    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    const/4 v0, 0x0

    .line 534
    :goto_0
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Accessibility mode enabled: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p0, v1}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    return v0
.end method

.method public isAccessibilityTouchExplorationEnabled()Z
    .locals 3

    .line 541
    :try_start_0
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "accessibility"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/view/accessibility/AccessibilityManager;

    .line 542
    invoke-virtual {v0}, Landroid/view/accessibility/AccessibilityManager;->isTouchExplorationEnabled()Z

    move-result v0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 544
    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    const/4 v0, 0x0

    .line 546
    :goto_0
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Accessibility touch exploration enabled: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p0, v1}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    return v0
.end method

.method public isAirplaneModeEnabled()Z
    .locals 3

    .line 975
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v0

    const-string v1, "airplane_mode_on"

    const/4 v2, 0x0

    invoke-static {v0, v1, v2}, Landroid/provider/Settings$Global;->getInt(Landroid/content/ContentResolver;Ljava/lang/String;I)I

    move-result v0

    if-eqz v0, :cond_0

    const/4 v2, 0x1

    :cond_0
    return v2
.end method

.method public isDataRoamingEnabled()Z
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 384
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v0

    const-string v1, "data_roaming"

    const/4 v2, 0x0

    invoke-static {v0, v1, v2}, Landroid/provider/Settings$Global;->getInt(Landroid/content/ContentResolver;Ljava/lang/String;I)I

    move-result v0

    const/4 v1, 0x1

    if-ne v0, v1, :cond_0

    move v2, v1

    :cond_0
    return v2
.end method

.method public isDeviceRooted()Z
    .locals 8

    .line 476
    sget-object v0, Landroid/os/Build;->TAGS:Ljava/lang/String;

    const/4 v1, 0x1

    if-eqz v0, :cond_0

    .line 477
    const-string v2, "test-keys"

    invoke-virtual {v0, v2}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v0

    if-eqz v0, :cond_0

    return v1

    :cond_0
    const/4 v0, 0x2

    const/4 v2, 0x0

    const/16 v3, 0x9

    .line 483
    :try_start_0
    new-array v4, v3, [Ljava/lang/String;

    const-string v5, "/system/app/Superuser.apk"

    aput-object v5, v4, v2

    const-string v5, "/sbin/su"

    aput-object v5, v4, v1

    const-string v5, "/system/bin/su"

    aput-object v5, v4, v0

    const-string v5, "/system/xbin/su"

    const/4 v6, 0x3

    aput-object v5, v4, v6

    const-string v5, "/data/local/xbin/su"

    const/4 v6, 0x4

    aput-object v5, v4, v6

    const-string v5, "/data/local/bin/su"

    const/4 v6, 0x5

    aput-object v5, v4, v6

    const-string v5, "/system/sd/xbin/su"

    const/4 v6, 0x6

    aput-object v5, v4, v6

    const-string v5, "/system/bin/failsafe/su"

    const/4 v6, 0x7

    aput-object v5, v4, v6

    const-string v5, "/data/local/su"

    const/16 v6, 0x8

    aput-object v5, v4, v6

    move v5, v2

    :goto_0
    if-ge v5, v3, :cond_2

    .line 485
    aget-object v6, v4, v5

    .line 486
    new-instance v7, Ljava/io/File;

    invoke-direct {v7, v6}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    invoke-virtual {v7}, Ljava/io/File;->exists()Z

    move-result v6
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    if-eqz v6, :cond_1

    return v1

    :cond_1
    add-int/lit8 v5, v5, 0x1

    goto :goto_0

    :catch_0
    move-exception v3

    .line 491
    invoke-virtual {v3}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {p0, v3}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    :cond_2
    const/4 v3, 0x0

    .line 497
    :try_start_1
    invoke-static {}, Ljava/lang/Runtime;->getRuntime()Ljava/lang/Runtime;

    move-result-object v4

    new-array v0, v0, [Ljava/lang/String;

    const-string v5, "/system/xbin/which"

    aput-object v5, v0, v2

    const-string v5, "su"

    aput-object v5, v0, v1

    invoke-virtual {v4, v0}, Ljava/lang/Runtime;->exec([Ljava/lang/String;)Ljava/lang/Process;

    move-result-object v3

    .line 498
    new-instance v0, Ljava/io/BufferedReader;

    new-instance v4, Ljava/io/InputStreamReader;

    invoke-virtual {v3}, Ljava/lang/Process;->getInputStream()Ljava/io/InputStream;

    move-result-object v5

    invoke-direct {v4, v5}, Ljava/io/InputStreamReader;-><init>(Ljava/io/InputStream;)V

    invoke-direct {v0, v4}, Ljava/io/BufferedReader;-><init>(Ljava/io/Reader;)V

    .line 499
    invoke-virtual {v0}, Ljava/io/BufferedReader;->readLine()Ljava/lang/String;

    move-result-object v0
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    if-eqz v0, :cond_4

    if-eqz v3, :cond_3

    .line 505
    invoke-virtual {v3}, Ljava/lang/Process;->destroy()V

    :cond_3
    return v1

    :cond_4
    if-eqz v3, :cond_5

    goto :goto_1

    :catchall_0
    move-exception v0

    goto :goto_2

    :catch_1
    move-exception v0

    .line 503
    :try_start_2
    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    if-eqz v3, :cond_5

    .line 505
    :goto_1
    invoke-virtual {v3}, Ljava/lang/Process;->destroy()V

    :cond_5
    return v2

    :goto_2
    if-eqz v3, :cond_6

    invoke-virtual {v3}, Ljava/lang/Process;->destroy()V

    .line 506
    :cond_6
    throw v0
.end method

.method public isMobileDataEnabled()Z
    .locals 5

    .line 514
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "connectivity"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/net/ConnectivityManager;

    const/4 v1, 0x0

    .line 516
    :try_start_0
    invoke-virtual {v0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v2

    invoke-static {v2}, Ljava/lang/Class;->forName(Ljava/lang/String;)Ljava/lang/Class;

    move-result-object v2

    .line 517
    const-string v3, "getMobileDataEnabled"

    new-array v4, v1, [Ljava/lang/Class;

    invoke-virtual {v2, v3, v4}, Ljava/lang/Class;->getDeclaredMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v2

    const/4 v3, 0x1

    .line 518
    invoke-virtual {v2, v3}, Ljava/lang/reflect/Method;->setAccessible(Z)V

    .line 519
    new-array v3, v1, [Ljava/lang/Object;

    invoke-virtual {v2, v0, v3}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/Boolean;

    invoke-virtual {v0}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 521
    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    :goto_0
    return v1
.end method

.method protected isPermissionImplicitlyGranted(Ljava/lang/String;)Z
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 714
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getBuildTargetSdkVersion()I

    move-result v0

    .line 715
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->getDeviceRuntimeSdkVersion()I

    move-result v1

    .line 717
    sget-object v2, Lcordova/plugins/Diagnostic;->minSdkPermissionMap:Ljava/util/Map;

    invoke-interface {v2, p1}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_0

    .line 718
    invoke-interface {v2, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Integer;

    invoke-virtual {v2}, Ljava/lang/Integer;->intValue()I

    move-result v2

    if-lt v0, v2, :cond_0

    if-ge v1, v2, :cond_0

    .line 721
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Permission "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v2, " is implicitly granted because while it\'s defined in build SDK version "

    invoke-virtual {p1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, ", the device runtime SDK version "

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, " does not support it."

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v0, "Diagnostic"

    invoke-static {v0, p1}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return p1
.end method

.method protected isPermissionRequested(Ljava/lang/String;)Z
    .locals 2

    .line 948
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->sharedPref:Landroid/content/SharedPreferences;

    const/4 v1, 0x0

    invoke-interface {v0, p1, v1}, Landroid/content/SharedPreferences;->getBoolean(Ljava/lang/String;Z)Z

    move-result p1

    return p1
.end method

.method protected jsonArrayToStringArray(Lorg/json/JSONArray;)[Ljava/lang/String;
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    if-nez p1, :cond_0

    const/4 p1, 0x0

    return-object p1

    .line 769
    :cond_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v0

    new-array v1, v0, [Ljava/lang/String;

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v0, :cond_1

    .line 771
    invoke-virtual {p1, v2}, Lorg/json/JSONArray;->optString(I)Ljava/lang/String;

    move-result-object v3

    aput-object v3, v1, v2

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_1
    return-object v1
.end method

.method public logDebug(Ljava/lang/String;)V
    .locals 2

    if-nez p1, :cond_0

    return-void

    .line 565
    :cond_0
    iget-boolean v0, p0, Lcordova/plugins/Diagnostic;->debugEnabled:Z

    if-eqz v0, :cond_1

    .line 566
    const-string v0, "Diagnostic"

    invoke-static {v0, p1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 567
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "console.log(\"Diagnostic[native]: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->escapeDoubleQuotes(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "\")"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->executeGlobalJavascript(Ljava/lang/String;)V

    :cond_1
    return-void
.end method

.method public logError(Ljava/lang/String;)V
    .locals 2

    if-nez p1, :cond_0

    return-void

    .line 589
    :cond_0
    const-string v0, "Diagnostic"

    invoke-static {v0, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    .line 590
    iget-boolean v0, p0, Lcordova/plugins/Diagnostic;->debugEnabled:Z

    if-eqz v0, :cond_1

    .line 591
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "console.error(\"Diagnostic[native]: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->escapeDoubleQuotes(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "\")"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->executeGlobalJavascript(Ljava/lang/String;)V

    :cond_1
    return-void
.end method

.method public logInfo(Ljava/lang/String;)V
    .locals 2

    if-nez p1, :cond_0

    return-void

    .line 573
    :cond_0
    const-string v0, "Diagnostic"

    invoke-static {v0, p1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 574
    iget-boolean v0, p0, Lcordova/plugins/Diagnostic;->debugEnabled:Z

    if-eqz v0, :cond_1

    .line 575
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "console.info(\"Diagnostic[native]: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->escapeDoubleQuotes(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "\")"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->executeGlobalJavascript(Ljava/lang/String;)V

    :cond_1
    return-void
.end method

.method public logWarning(Ljava/lang/String;)V
    .locals 2

    if-nez p1, :cond_0

    return-void

    .line 581
    :cond_0
    const-string v0, "Diagnostic"

    invoke-static {v0, p1}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    .line 582
    iget-boolean v0, p0, Lcordova/plugins/Diagnostic;->debugEnabled:Z

    if-eqz v0, :cond_1

    .line 583
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "console.warn(\"Diagnostic[native]: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->escapeDoubleQuotes(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "\")"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->executeGlobalJavascript(Ljava/lang/String;)V

    :cond_1
    return-void
.end method

.method public onRequestPermissionResult(I[Ljava/lang/String;[I)V
    .locals 9
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 1062
    invoke-static {p1}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object v0

    .line 1063
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Received result for permissions request id="

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    const-string v2, "Diagnostic"

    invoke-static {v2, v1}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    .line 1066
    :try_start_0
    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->getContextById(Ljava/lang/String;)Lorg/apache/cordova/CallbackContext;

    move-result-object v1

    .line 1067
    iget-object v3, p0, Lcordova/plugins/Diagnostic;->permissionStatuses:Ljava/util/HashMap;

    invoke-virtual {v3, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lorg/json/JSONObject;

    .line 1069
    array-length v3, p2

    const/4 v4, 0x0

    :goto_0
    if-ge v4, v3, :cond_5

    .line 1070
    aget-object v5, p2, v4

    .line 1071
    sget-object v6, Lcordova/plugins/Diagnostic;->permissionsMap:Ljava/util/Map;

    invoke-interface {v6, v5}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v6

    check-cast v6, Ljava/lang/String;

    .line 1072
    sget v7, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v8, 0x1d

    if-ge v7, v8, :cond_0

    const-string v7, "ACCESS_BACKGROUND_LOCATION"

    invoke-virtual {v6, v7}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v7

    if-eqz v7, :cond_0

    .line 1074
    const-string v6, "ACCESS_COARSE_LOCATION"

    .line 1076
    :cond_0
    sget v7, Landroid/os/Build$VERSION;->SDK_INT:I

    if-ge v7, v8, :cond_1

    const-string v7, "ACTIVITY_RECOGNITION"

    invoke-virtual {v6, v7}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v7

    if-eqz v7, :cond_1

    .line 1078
    const-string v6, "BODY_SENSORS"

    .line 1081
    :cond_1
    aget v7, p3, v4

    const/4 v8, -0x1

    if-ne v7, v8, :cond_4

    .line 1082
    iget-object v7, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v7}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v7

    invoke-virtual {p0, v7, v5}, Lcordova/plugins/Diagnostic;->shouldShowRequestPermissionRationale(Landroid/app/Activity;Ljava/lang/String;)Z

    move-result v5

    if-nez v5, :cond_3

    .line 1084
    invoke-virtual {p0, v6}, Lcordova/plugins/Diagnostic;->isPermissionRequested(Ljava/lang/String;)Z

    move-result v5

    if-eqz v5, :cond_2

    .line 1086
    const-string v5, "DENIED_ALWAYS"

    goto :goto_1

    .line 1089
    :cond_2
    const-string v5, "NOT_REQUESTED"

    goto :goto_1

    .line 1093
    :cond_3
    const-string v5, "DENIED_ONCE"

    goto :goto_1

    .line 1097
    :cond_4
    const-string v5, "GRANTED"

    .line 1099
    :goto_1
    invoke-virtual {v0, v6, v5}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1100
    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5}, Ljava/lang/StringBuilder;-><init>()V

    const-string v7, "Authorisation for "

    invoke-virtual {v5, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    const-string v7, " is "

    invoke-virtual {v5, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v0, v6}, Lorg/json/JSONObject;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v6

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v2, v5}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    .line 1101
    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->clearRequest(I)V

    add-int/lit8 v4, v4, 0x1

    goto :goto_0

    .line 1104
    :cond_5
    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_2

    :catch_0
    move-exception p2

    .line 1106
    const-string p3, "Exception occurred onRequestPermissionsResult: "

    invoke-virtual {p2}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p3, p2}, Ljava/lang/String;->concat(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p0, p2, p1}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;I)V

    :goto_2
    return-void
.end method

.method protected requestPermissions(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 829
    :try_start_0
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-virtual {v0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v0

    const-string v1, "requestPermissions"

    const/4 v2, 0x3

    new-array v2, v2, [Ljava/lang/Class;

    const-class v3, Lorg/apache/cordova/CordovaPlugin;

    const/4 v4, 0x0

    aput-object v3, v2, v4

    sget-object v3, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    const/4 v5, 0x1

    aput-object v3, v2, v5

    const-class v3, [Ljava/lang/String;

    const/4 v5, 0x2

    aput-object v3, v2, v5

    invoke-virtual {v0, v1, v2}, Ljava/lang/Class;->getMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v0

    .line 830
    iget-object v1, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-static {p2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p2

    filled-new-array {p1, p2, p3}, [Ljava/lang/Object;

    move-result-object p1

    invoke-virtual {v0, v1, p1}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;

    .line 831
    array-length p1, p3

    :goto_0
    if-ge v4, p1, :cond_0

    aget-object p2, p3, v4

    .line 832
    sget-object v0, Lcordova/plugins/Diagnostic;->permissionsMap:Ljava/util/Map;

    invoke-interface {v0, p2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p2

    check-cast p2, Ljava/lang/String;

    invoke-virtual {p0, p2}, Lcordova/plugins/Diagnostic;->setPermissionRequested(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/NoSuchMethodException; {:try_start_0 .. :try_end_0} :catch_0

    add-int/lit8 v4, v4, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 835
    :catch_0
    new-instance p1, Ljava/lang/Exception;

    const-string p2, "requestPermissions() method not found in CordovaInterface implementation of Cordova v7.0.0"

    invoke-direct {p1, p2}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public requestRuntimePermission(Ljava/lang/String;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 433
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->storeCurrentContextByRequestId()I

    move-result v0

    invoke-virtual {p0, p1, v0}, Lcordova/plugins/Diagnostic;->requestRuntimePermission(Ljava/lang/String;I)V

    return-void
.end method

.method public requestRuntimePermission(Ljava/lang/String;I)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 437
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0}, Lorg/json/JSONArray;-><init>()V

    .line 438
    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    .line 439
    invoke-virtual {p0, v0, p2}, Lcordova/plugins/Diagnostic;->_requestRuntimePermissions(Lorg/json/JSONArray;I)V

    return-void
.end method

.method public requestRuntimePermission(Lorg/json/JSONArray;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    const/4 v0, 0x0

    .line 429
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->requestRuntimePermission(Ljava/lang/String;)V

    return-void
.end method

.method public requestRuntimePermissions(Lorg/json/JSONArray;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    const/4 v0, 0x0

    .line 423
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getJSONArray(I)Lorg/json/JSONArray;

    move-result-object p1

    .line 424
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->storeCurrentContextByRequestId()I

    move-result v0

    .line 425
    invoke-virtual {p0, p1, v0}, Lcordova/plugins/Diagnostic;->_requestRuntimePermissions(Lorg/json/JSONArray;I)V

    return-void
.end method

.method public restart(Lorg/json/JSONArray;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    const/4 v0, 0x0

    .line 374
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 376
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->doColdRestart()V

    goto :goto_0

    .line 378
    :cond_0
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->doWarmRestart()V

    :goto_0
    return-void
.end method

.method protected sendRuntimeRequestResult(I)V
    .locals 4

    .line 729
    invoke-static {p1}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object p1

    .line 730
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->callbackContexts:Ljava/util/HashMap;

    invoke-virtual {v0, p1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lorg/apache/cordova/CallbackContext;

    .line 731
    iget-object v1, p0, Lcordova/plugins/Diagnostic;->permissionStatuses:Ljava/util/HashMap;

    invoke-virtual {v1, p1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lorg/json/JSONObject;

    .line 732
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Sending runtime request result for id="

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v2, "Diagnostic"

    invoke-static {v2, p1}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    .line 733
    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V

    return-void
.end method

.method protected setPermissionRequested(Ljava/lang/String;)V
    .locals 2

    .line 940
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->editor:Landroid/content/SharedPreferences$Editor;

    const/4 v1, 0x1

    invoke-interface {v0, p1, v1}, Landroid/content/SharedPreferences$Editor;->putBoolean(Ljava/lang/String;Z)Landroid/content/SharedPreferences$Editor;

    .line 941
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->editor:Landroid/content/SharedPreferences$Editor;

    invoke-interface {v0}, Landroid/content/SharedPreferences$Editor;->commit()Z

    move-result v0

    if-nez v0, :cond_0

    .line 943
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Failed to set permission requested flag for "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;)V

    :cond_0
    return-void
.end method

.method protected shouldShowRequestPermissionRationale(Landroid/app/Activity;Ljava/lang/String;)Z
    .locals 5
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 842
    :try_start_0
    const-class v0, Landroidx/core/app/ActivityCompat;

    const-string v1, "shouldShowRequestPermissionRationale"

    const/4 v2, 0x2

    new-array v2, v2, [Ljava/lang/Class;

    const-class v3, Landroid/app/Activity;

    const/4 v4, 0x0

    aput-object v3, v2, v4

    const-class v3, Ljava/lang/String;

    const/4 v4, 0x1

    aput-object v3, v2, v4

    invoke-virtual {v0, v1, v2}, Ljava/lang/Class;->getMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v0

    .line 843
    filled-new-array {p1, p2}, [Ljava/lang/Object;

    move-result-object p1

    const/4 p2, 0x0

    invoke-virtual {v0, p2, p1}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/Boolean;

    .line 844
    invoke-virtual {p1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p1
    :try_end_0
    .catch Ljava/lang/NoSuchMethodException; {:try_start_0 .. :try_end_0} :catch_0

    return p1

    .line 846
    :catch_0
    new-instance p1, Ljava/lang/Exception;

    const-string p2, "shouldShowRequestPermissionRationale() method not found in ActivityCompat class."

    invoke-direct {p1, p2}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method protected storeContextByRequestId(Lorg/apache/cordova/CallbackContext;)I
    .locals 2

    .line 741
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic;->generateRandomRequestId()Ljava/lang/String;

    move-result-object v0

    .line 742
    iget-object v1, p0, Lcordova/plugins/Diagnostic;->callbackContexts:Ljava/util/HashMap;

    invoke-virtual {v1, v0, p1}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 743
    iget-object p1, p0, Lcordova/plugins/Diagnostic;->permissionStatuses:Ljava/util/HashMap;

    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1}, Lorg/json/JSONObject;-><init>()V

    invoke-virtual {p1, v0, v1}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 744
    invoke-static {v0}, Ljava/lang/Integer;->valueOf(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/Integer;->intValue()I

    move-result p1

    return p1
.end method

.method protected storeCurrentContextByRequestId()I
    .locals 1

    .line 737
    iget-object v0, p0, Lcordova/plugins/Diagnostic;->currentContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->storeContextByRequestId(Lorg/apache/cordova/CallbackContext;)I

    move-result v0

    return v0
.end method

.method protected stringArrayToJsonArray([Ljava/lang/String;)Lorg/json/JSONArray;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    if-nez p1, :cond_0

    const/4 p1, 0x0

    return-object p1

    .line 780
    :cond_0
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0}, Lorg/json/JSONArray;-><init>()V

    const/4 v1, 0x0

    .line 781
    :goto_0
    array-length v2, p1

    if-ge v1, v2, :cond_1

    .line 782
    aget-object v2, p1, v1

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONArray;->put(ILjava/lang/Object;)Lorg/json/JSONArray;

    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_1
    return-object v0
.end method

.method public switchToAppSettings()V
    .locals 4

    .line 388
    const-string v0, "Switch to App Settings"

    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    .line 389
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.settings.APPLICATION_DETAILS_SETTINGS"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 390
    iget-object v1, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Activity;->getPackageName()Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x0

    const-string v3, "package"

    invoke-static {v3, v1, v2}, Landroid/net/Uri;->fromParts(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v1

    .line 391
    invoke-virtual {v0, v1}, Landroid/content/Intent;->setData(Landroid/net/Uri;)Landroid/content/Intent;

    .line 392
    iget-object v1, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/app/Activity;->startActivity(Landroid/content/Intent;)V

    return-void
.end method

.method public switchToMobileDataSettings()V
    .locals 2

    .line 397
    const-string v0, "Switch to Mobile Data Settings"

    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    .line 398
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.settings.DATA_ROAMING_SETTINGS"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 399
    iget-object v1, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/app/Activity;->startActivity(Landroid/content/Intent;)V

    return-void
.end method

.method public switchToWirelessSettings()V
    .locals 2

    .line 403
    const-string v0, "Switch to wireless Settings"

    invoke-virtual {p0, v0}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    .line 404
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.settings.WIRELESS_SETTINGS"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 405
    iget-object v1, p0, Lcordova/plugins/Diagnostic;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/app/Activity;->startActivity(Landroid/content/Intent;)V

    return-void
.end method
