package com.tchvu3.capvoicerecorder;

import android.content.Context;
import android.media.MediaRecorder;
import java.io.File;
import java.io.IOException;
public class CustomMediaRecorder {
    private Context context;
    private MediaRecorder mediaRecorder;
    private File outputFile;

    public CustomMediaRecorder(Context context) throws IOException {
        this.context = context;
        generateMediaRecorder();
    }

    private void generateMediaRecorder() throws IOException {
        MediaRecorder mediaRecorder = new MediaRecorder();
        this.mediaRecorder = mediaRecorder;
        mediaRecorder.setAudioSource(1);
        this.mediaRecorder.setOutputFormat(6);
        this.mediaRecorder.setAudioEncoder(3);
        setRecorderOutputFile();
        this.mediaRecorder.prepare();
    }

    private void setRecorderOutputFile() throws IOException {
        File fileCreateTempFile = File.createTempFile("voice_record_temp", ".aac", this.context.getCacheDir());
        this.outputFile = fileCreateTempFile;
        fileCreateTempFile.deleteOnExit();
        this.mediaRecorder.setOutputFile(this.outputFile.getAbsolutePath());
    }

    public void startRecording() {
        this.mediaRecorder.start();
    }

    public void stopRecording() {
        this.mediaRecorder.stop();
        this.mediaRecorder.release();
    }

    public File getOutputFile() {
        return this.outputFile;
    }

    public boolean deleteOutputFile() {
        return this.outputFile.delete();
    }

    public static boolean canPhoneCreateMediaRecorder(Context context) throws Throwable {
        CustomMediaRecorder customMediaRecorder;
        CustomMediaRecorder customMediaRecorder2 = null;
        try {
            try {
                customMediaRecorder = new CustomMediaRecorder(context);
            } catch (Exception e) {
                e = e;
            }
        } catch (Throwable th) {
            th = th;
        }
        try {
            customMediaRecorder.startRecording();
            customMediaRecorder.stopRecording();
            customMediaRecorder.deleteOutputFile();
            return true;
        } catch (Exception e2) {
            e = e2;
            customMediaRecorder2 = customMediaRecorder;
            boolean zStartsWith = e.getMessage().startsWith("stop failed");
            if (customMediaRecorder2 != null) {
                customMediaRecorder2.deleteOutputFile();
            }
            return zStartsWith;
        } catch (Throwable th2) {
            th = th2;
            customMediaRecorder2 = customMediaRecorder;
            if (customMediaRecorder2 != null) {
                customMediaRecorder2.deleteOutputFile();
            }
            throw th;
        }
    }
}

