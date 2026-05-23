package androidx.camera.core.impl;

import androidx.camera.core.ImageProxy;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.List;
public interface ImageProxyBundle {
    List<Integer> getCaptureIds();

    ListenableFuture<ImageProxy> getImageProxy(int i);
}

