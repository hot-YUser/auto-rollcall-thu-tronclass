package com.king.camera.scan.analyze;

import androidx.camera.core.ImageProxy;
import com.king.camera.scan.AnalyzeResult;
public interface Analyzer<T> {

    public interface OnAnalyzeListener<T> {
        void onFailure(Exception exc);

        void onSuccess(AnalyzeResult<T> analyzeResult);
    }

    void analyze(ImageProxy imageProxy, OnAnalyzeListener<T> onAnalyzeListener);
}

