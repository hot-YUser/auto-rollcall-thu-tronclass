package com.wisdomgarden.qrcode;

import android.content.Context;
import android.graphics.Bitmap;
import com.king.logx.LogX;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.List;
import org.opencv.android.Utils;
import org.opencv.core.Mat;
import org.opencv.wechat_qrcode.WeChatQRCode;
public final class WisdomGardenQRCodeDetector {
    private static final String DETECT_CAFFE_MODEL = "detect.caffemodel";
    private static final String DETECT_PROTO_TXT = "detect.prototxt";
    private static final String MODEL_DIR = "models";
    private static final String SR_CAFFE_MODEL = "sr.caffemodel";
    private static final String SR_PROTO_TXT = "sr.prototxt";
    private static final String TAG = "WisdomGardenQRCodeDetector";
    private static volatile WeChatQRCode sWisdomGardenQRCode;

    private WisdomGardenQRCodeDetector() {
        throw new AssertionError();
    }

    public static void init(Context context) {
        initWisdomGardenQRCode(context.getApplicationContext());
    }

    private static void initWisdomGardenQRCode(Context context) {
        try {
            String externalFilesDir = getExternalFilesDir(context, MODEL_DIR);
            String[] strArr = {DETECT_PROTO_TXT, DETECT_CAFFE_MODEL, SR_PROTO_TXT, SR_CAFFE_MODEL};
            File file = new File(externalFilesDir);
            boolean zExists = file.exists();
            if (zExists) {
                int i = 0;
                while (true) {
                    if (i >= 4) {
                        break;
                    }
                    if (!new File(externalFilesDir, strArr[i]).exists()) {
                        zExists = false;
                        break;
                    }
                    i++;
                }
            }
            if (!zExists) {
                int i2 = 0;
                for (int i3 = 4; i2 < i3; i3 = 4) {
                    String str = strArr[i2];
                    InputStream inputStreamOpen = context.getAssets().open(MODEL_DIR + File.separatorChar + str);
                    File file2 = new File(file, str);
                    FileOutputStream fileOutputStream = new FileOutputStream(file2);
                    byte[] bArr = new byte[4096];
                    while (true) {
                        int i4 = inputStreamOpen.read(bArr);
                        if (i4 != -1) {
                            fileOutputStream.write(bArr, 0, i4);
                        }
                    }
                    fileOutputStream.flush();
                    inputStreamOpen.close();
                    fileOutputStream.close();
                    LogX.d("file: %s", file2.getAbsolutePath());
                    i2++;
                }
            }
            sWisdomGardenQRCode = new WeChatQRCode(externalFilesDir + File.separatorChar + strArr[0], externalFilesDir + File.separatorChar + strArr[1], externalFilesDir + File.separatorChar + strArr[2], externalFilesDir + File.separatorChar + strArr[3]);
            LogX.d("WisdomGardenQRCode loaded successfully", new Object[0]);
        } catch (Exception e) {
            LogX.e(e);
        }
    }

    private static String getExternalFilesDir(Context context, String str) {
        File file;
        File[] externalFilesDirs = context.getExternalFilesDirs(str);
        if (externalFilesDirs != null && externalFilesDirs.length > 0 && (file = externalFilesDirs[0]) != null) {
            return file.getAbsolutePath();
        }
        File externalFilesDir = context.getExternalFilesDir(str);
        if (externalFilesDir == null) {
            externalFilesDir = new File(context.getFilesDir(), str);
        }
        return externalFilesDir.getAbsolutePath();
    }

    public static List<String> detectAndDecode(Bitmap bitmap) {
        Mat mat = new Mat();
        try {
            Utils.bitmapToMat(bitmap, mat);
            return detectAndDecode(mat);
        } finally {
            mat.release();
        }
    }

    public static List<String> detectAndDecode(Bitmap bitmap, List<Mat> list) {
        Mat mat = new Mat();
        try {
            Utils.bitmapToMat(bitmap, mat);
            return detectAndDecode(mat, list);
        } finally {
            mat.release();
        }
    }

    public static List<String> detectAndDecode(Mat mat) {
        return sWisdomGardenQRCode.detectAndDecode(mat);
    }

    public static List<String> detectAndDecode(Mat mat, List<Mat> list) {
        return sWisdomGardenQRCode.detectAndDecode(mat, list);
    }
}

