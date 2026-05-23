package com.king.opencv.qrcode;

import android.graphics.Bitmap;
import java.util.List;
import org.opencv.android.Utils;
import org.opencv.core.Mat;
import org.opencv.objdetect.QRCodeDetector;
public class OpenCVQRCodeDetector extends QRCodeDetector {
    public String detectAndDecode(Bitmap bitmap) {
        Mat mat = new Mat();
        try {
            Utils.bitmapToMat(bitmap, mat);
            return detectAndDecode(mat);
        } finally {
            mat.release();
        }
    }

    public String detectAndDecode(Bitmap bitmap, Mat mat) {
        Mat mat2 = new Mat();
        try {
            Utils.bitmapToMat(bitmap, mat2);
            return detectAndDecode(mat2, mat);
        } finally {
            mat2.release();
        }
    }

    public boolean detectAndDecodeMulti(Bitmap bitmap, List<String> list) {
        Mat mat = new Mat();
        try {
            Utils.bitmapToMat(bitmap, mat);
            return detectAndDecodeMulti(mat, list);
        } finally {
            mat.release();
        }
    }

    public boolean detectAndDecodeMulti(Bitmap bitmap, List<String> list, Mat mat) {
        Mat mat2 = new Mat();
        try {
            Utils.bitmapToMat(bitmap, mat2);
            return detectAndDecodeMulti(mat2, list, mat);
        } finally {
            mat2.release();
        }
    }
}

