package org.apache.cordova;

import android.util.Base64;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;
public class PluginResult {
    public static final int MESSAGE_TYPE_ARRAYBUFFER = 6;
    public static final int MESSAGE_TYPE_BINARYSTRING = 7;
    public static final int MESSAGE_TYPE_BOOLEAN = 4;
    public static final int MESSAGE_TYPE_JSON = 2;
    public static final int MESSAGE_TYPE_MULTIPART = 8;
    public static final int MESSAGE_TYPE_NULL = 5;
    public static final int MESSAGE_TYPE_NUMBER = 3;
    public static final int MESSAGE_TYPE_STRING = 1;
    public static String[] StatusMessages = {"No result", "OK", "Class not found", "Illegal access", "Instantiation error", "Malformed url", "IO error", "Invalid action", "JSON error", "Error"};
    private String encodedMessage;
    private boolean keepCallback;
    private final int messageType;
    private List<PluginResult> multipartMessages;
    private final int status;
    private String strMessage;

    public enum Status {
        NO_RESULT,
        OK,
        CLASS_NOT_FOUND_EXCEPTION,
        ILLEGAL_ACCESS_EXCEPTION,
        INSTANTIATION_EXCEPTION,
        MALFORMED_URL_EXCEPTION,
        IO_EXCEPTION,
        INVALID_ACTION,
        JSON_EXCEPTION,
        ERROR
    }

    public PluginResult(Status status) {
        this(status, StatusMessages[status.ordinal()]);
    }

    public PluginResult(Status status, String str) {
        this.keepCallback = false;
        this.status = status.ordinal();
        this.messageType = str == null ? 5 : 1;
        this.strMessage = str;
    }

    public PluginResult(Status status, JSONArray jSONArray) {
        this.keepCallback = false;
        this.status = status.ordinal();
        this.messageType = 2;
        this.encodedMessage = jSONArray.toString();
    }

    public PluginResult(Status status, JSONObject jSONObject) {
        this.keepCallback = false;
        this.status = status.ordinal();
        this.messageType = 2;
        this.encodedMessage = jSONObject.toString();
    }

    public PluginResult(Status status, int i) {
        this.keepCallback = false;
        this.status = status.ordinal();
        this.messageType = 3;
        this.encodedMessage = "" + i;
    }

    public PluginResult(Status status, float f) {
        this.keepCallback = false;
        this.status = status.ordinal();
        this.messageType = 3;
        this.encodedMessage = "" + f;
    }

    public PluginResult(Status status, boolean z) {
        this.keepCallback = false;
        this.status = status.ordinal();
        this.messageType = 4;
        this.encodedMessage = Boolean.toString(z);
    }

    public PluginResult(Status status, byte[] bArr) {
        this(status, bArr, false);
    }

    public PluginResult(Status status, byte[] bArr, boolean z) {
        this.keepCallback = false;
        this.status = status.ordinal();
        this.messageType = z ? 7 : 6;
        this.encodedMessage = Base64.encodeToString(bArr, 2);
    }

    public PluginResult(Status status, List<PluginResult> list) {
        this.keepCallback = false;
        this.status = status.ordinal();
        this.messageType = 8;
        this.multipartMessages = list;
    }

    public void setKeepCallback(boolean z) {
        this.keepCallback = z;
    }

    public int getStatus() {
        return this.status;
    }

    public int getMessageType() {
        return this.messageType;
    }

    public String getMessage() {
        if (this.encodedMessage == null) {
            this.encodedMessage = JSONObject.quote(this.strMessage);
        }
        return this.encodedMessage;
    }

    public int getMultipartMessagesSize() {
        return this.multipartMessages.size();
    }

    public PluginResult getMultipartMessage(int i) {
        return this.multipartMessages.get(i);
    }

    public String getStrMessage() {
        return this.strMessage;
    }

    public boolean getKeepCallback() {
        return this.keepCallback;
    }

    @Deprecated
    public String getJSONString() {
        return "{\"status\":" + this.status + ",\"message\":" + getMessage() + ",\"keepCallback\":" + this.keepCallback + "}";
    }

    @Deprecated
    public String toCallbackString(String str) {
        if (this.status == Status.NO_RESULT.ordinal() && this.keepCallback) {
            return null;
        }
        if (this.status == Status.OK.ordinal() || this.status == Status.NO_RESULT.ordinal()) {
            return toSuccessCallbackString(str);
        }
        return toErrorCallbackString(str);
    }

    @Deprecated
    public String toSuccessCallbackString(String str) {
        return "cordova.callbackSuccess('" + str + "'," + getJSONString() + ");";
    }

    @Deprecated
    public String toErrorCallbackString(String str) {
        return "cordova.callbackError('" + str + "', " + getJSONString() + ");";
    }
}

