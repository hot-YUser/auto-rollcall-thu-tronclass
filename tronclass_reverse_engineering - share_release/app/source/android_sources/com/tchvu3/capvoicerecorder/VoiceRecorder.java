package com.tchvu3.capvoicerecorder;

import android.media.MediaPlayer;
import android.util.Base64;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
@NativePlugin(permissions = {"android.permission.RECORD_AUDIO"}, requestCodes = {Messages.RECORD_AUDIO_REQUEST_CODE})
public class VoiceRecorder extends Plugin {
    private CustomMediaRecorder mediaRecorder;

    @PluginMethod
    public void canDeviceVoiceRecord(PluginCall pluginCall) {
        if (CustomMediaRecorder.canPhoneCreateMediaRecorder(getContext())) {
            pluginCall.resolve(ResponseGenerator.successResponse());
        } else {
            pluginCall.resolve(ResponseGenerator.failResponse());
        }
    }

    @PluginMethod
    public void requestAudioRecordingPermission(PluginCall pluginCall) {
        if (doesUserGaveAudioRecordingPermission()) {
            pluginCall.resolve(ResponseGenerator.successResponse());
        } else {
            saveCall(pluginCall);
            pluginRequestPermission("android.permission.RECORD_AUDIO", Messages.RECORD_AUDIO_REQUEST_CODE);
        }
    }

    @PluginMethod
    public void hasAudioRecordingPermission(PluginCall pluginCall) {
        pluginCall.resolve(ResponseGenerator.fromBoolean(doesUserGaveAudioRecordingPermission()));
    }

    @PluginMethod
    public void startRecording(PluginCall pluginCall) {
        if (!doesUserGaveAudioRecordingPermission()) {
            pluginCall.reject(Messages.MISSING_PERMISSION);
            return;
        }
        if (!CustomMediaRecorder.canPhoneCreateMediaRecorder(getContext())) {
            pluginCall.reject(Messages.CANNOT_RECORD_ON_THIS_PHONE);
            return;
        }
        if (this.mediaRecorder != null) {
            pluginCall.reject(Messages.ALREADY_RECORDING);
            return;
        }
        try {
            CustomMediaRecorder customMediaRecorder = new CustomMediaRecorder(getContext());
            this.mediaRecorder = customMediaRecorder;
            customMediaRecorder.startRecording();
            pluginCall.resolve(ResponseGenerator.successResponse());
        } catch (Exception e) {
            pluginCall.reject(Messages.FAILED_TO_RECORD, e);
        }
    }

    @PluginMethod
    public void stopRecording(PluginCall pluginCall) {
        CustomMediaRecorder customMediaRecorder = this.mediaRecorder;
        if (customMediaRecorder == null) {
            pluginCall.reject(Messages.RECORDING_HAS_NOT_STARTED);
            return;
        }
        try {
            try {
                customMediaRecorder.stopRecording();
                File outputFile = this.mediaRecorder.getOutputFile();
                RecordData recordData = new RecordData(readRecordedFileAsBase64(outputFile), getMsDurationOfAudioFile(outputFile.getAbsolutePath()), "audio/aac");
                if (recordData.getRecordDataBase64() == null || recordData.getMsDuration() < 0) {
                    pluginCall.reject(Messages.FAILED_TO_FETCH_RECORDING);
                } else {
                    pluginCall.resolve(ResponseGenerator.dataResponse(recordData.toJSObject()));
                }
            } catch (Exception e) {
                pluginCall.reject(Messages.FAILED_TO_FETCH_RECORDING, e);
            }
        } finally {
            this.mediaRecorder.deleteOutputFile();
            this.mediaRecorder = null;
        }
    }

    @Override // com.getcapacitor.Plugin
    protected void handleRequestPermissionsResult(int i, String[] strArr, int[] iArr) {
        super.handleRequestPermissionsResult(i, strArr, iArr);
        PluginCall savedCall = getSavedCall();
        if (savedCall == null || i != 1250) {
            return;
        }
        for (int i2 : iArr) {
            if (i2 == -1) {
                savedCall.resolve(ResponseGenerator.failResponse());
                return;
            }
        }
        savedCall.resolve(ResponseGenerator.successResponse());
    }

    private boolean doesUserGaveAudioRecordingPermission() {
        return hasPermission("android.permission.RECORD_AUDIO");
    }

    private String readRecordedFileAsBase64(File file) {
        byte[] bArr = new byte[(int) file.length()];
        try {
            BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream(file));
            bufferedInputStream.read(bArr);
            bufferedInputStream.close();
            return Base64.encodeToString(bArr, 0);
        } catch (IOException unused) {
            return null;
        }
    }

    private int getMsDurationOfAudioFile(String str) {
        try {
            MediaPlayer mediaPlayer = new MediaPlayer();
            mediaPlayer.setDataSource(str);
            mediaPlayer.prepare();
            return mediaPlayer.getDuration();
        } catch (Exception unused) {
            return -1;
        }
    }
}

