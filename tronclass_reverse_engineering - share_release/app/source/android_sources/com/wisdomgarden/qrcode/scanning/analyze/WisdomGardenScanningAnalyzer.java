package com.wisdomgarden.qrcode.scanning.analyze;

import androidx.camera.core.ImageProxy;
import com.king.camera.scan.AnalyzeResult;
import com.king.camera.scan.FrameMetadata;
import com.king.camera.scan.analyze.Analyzer;
import com.king.camera.scan.util.ImageUtils;
import com.king.logx.LogX;
import com.wisdomgarden.qrcode.WisdomGardenQRCodeDetector;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.atomic.AtomicBoolean;
import org.opencv.core.Core;
import org.opencv.core.CvType;
import org.opencv.core.Mat;
import org.opencv.imgproc.Imgproc;
public class WisdomGardenScanningAnalyzer implements Analyzer<List<String>> {
    private static final int ROTATION_180 = 180;
    private static final int ROTATION_270 = 270;
    private static final int ROTATION_90 = 90;
    private final boolean isOutputVertices;
    private final AtomicBoolean joinQueue;
    private final Queue<byte[]> queue;

    public WisdomGardenScanningAnalyzer() {
        this(false);
    }

    public WisdomGardenScanningAnalyzer(boolean z) {
        this.queue = new ConcurrentLinkedQueue();
        this.joinQueue = new AtomicBoolean(false);
        this.isOutputVertices = z;
    }

    @Override // com.king.camera.scan.analyze.Analyzer
    public void analyze(ImageProxy imageProxy, Analyzer.OnAnalyzeListener<List<String>> onAnalyzeListener) {
        AnalyzeResult<List<String>> analyzeResultDetectAndDecode;
        if (!this.joinQueue.get()) {
            int width = imageProxy.getWidth() * imageProxy.getHeight();
            this.queue.add(new byte[width + ((width / 4) * 2)]);
            this.joinQueue.set(true);
        }
        byte[] bArrPoll = this.queue.poll();
        if (bArrPoll == null) {
            return;
        }
        try {
            ImageUtils.yuv_420_888toNv21(imageProxy, bArrPoll);
            analyzeResultDetectAndDecode = detectAndDecode(bArrPoll, new FrameMetadata(imageProxy.getWidth(), imageProxy.getHeight(), imageProxy.getImageInfo().getRotationDegrees()));
        } catch (Exception e) {
            LogX.w(e);
            analyzeResultDetectAndDecode = null;
        }
        if (analyzeResultDetectAndDecode != null) {
            this.joinQueue.set(false);
            onAnalyzeListener.onSuccess(analyzeResultDetectAndDecode);
        } else {
            this.queue.add(bArrPoll);
            onAnalyzeListener.onFailure(null);
        }
    }

    private AnalyzeResult<List<String>> detectAndDecode(byte[] bArr, FrameMetadata frameMetadata) {
        Mat mat = new Mat(frameMetadata.getHeight() + (frameMetadata.getHeight() / 2), frameMetadata.getWidth(), CvType.CV_8UC1);
        mat.put(0, 0, bArr);
        Mat mat2 = new Mat();
        Imgproc.cvtColor(mat, mat2, 93);
        mat.release();
        rotation(mat2, frameMetadata.getRotation());
        if (this.isOutputVertices) {
            ArrayList arrayList = new ArrayList();
            List<String> listDetectAndDecode = WisdomGardenQRCodeDetector.detectAndDecode(mat2, arrayList);
            mat2.release();
            if (listDetectAndDecode == null || listDetectAndDecode.isEmpty()) {
                return null;
            }
            return new QRCodeAnalyzeResult(bArr, 17, frameMetadata, listDetectAndDecode, arrayList);
        }
        List<String> listDetectAndDecode2 = WisdomGardenQRCodeDetector.detectAndDecode(mat2);
        mat2.release();
        if (listDetectAndDecode2 == null || listDetectAndDecode2.isEmpty()) {
            return null;
        }
        return new QRCodeAnalyzeResult(bArr, 17, frameMetadata, listDetectAndDecode2);
    }

    private void rotation(Mat mat, int i) {
        if (i == 90) {
            Core.transpose(mat, mat);
            Core.flip(mat, mat, 1);
        } else if (i == ROTATION_180) {
            Core.flip(mat, mat, 0);
            Core.flip(mat, mat, 1);
        } else if (i == ROTATION_270) {
            Core.transpose(mat, mat);
            Core.flip(mat, mat, 0);
        }
    }

    public static class QRCodeAnalyzeResult<T> extends AnalyzeResult<T> {
        private List<Mat> points;

        public QRCodeAnalyzeResult(byte[] bArr, int i, FrameMetadata frameMetadata, T t) {
            super(bArr, i, frameMetadata, t);
        }

        public QRCodeAnalyzeResult(byte[] bArr, int i, FrameMetadata frameMetadata, T t, List<Mat> list) {
            super(bArr, i, frameMetadata, t);
            this.points = list;
        }

        public List<Mat> getPoints() {
            return this.points;
        }
    }
}

