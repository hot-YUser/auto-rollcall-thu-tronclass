package androidx.camera.lifecycle;

import android.content.Context;
import androidx.arch.core.util.Function;
import androidx.camera.core.Camera;
import androidx.camera.core.CameraEffect;
import androidx.camera.core.CameraFilter;
import androidx.camera.core.CameraInfo;
import androidx.camera.core.CameraInfoUnavailableException;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.CameraX;
import androidx.camera.core.CameraXConfig;
import androidx.camera.core.ConcurrentCamera;
import androidx.camera.core.UseCase;
import androidx.camera.core.UseCaseGroup;
import androidx.camera.core.ViewPort;
import androidx.camera.core.impl.CameraConfig;
import androidx.camera.core.impl.CameraInternal;
import androidx.camera.core.impl.ExtendedCameraConfigProviderStore;
import androidx.camera.core.impl.utils.ContextUtil;
import androidx.camera.core.impl.utils.Threads;
import androidx.camera.core.impl.utils.executor.CameraXExecutors;
import androidx.camera.core.impl.utils.futures.AsyncFunction;
import androidx.camera.core.impl.utils.futures.FutureCallback;
import androidx.camera.core.impl.utils.futures.FutureChain;
import androidx.camera.core.impl.utils.futures.Futures;
import androidx.camera.core.internal.CameraUseCaseAdapter;
import androidx.concurrent.futures.CallbackToFutureAdapter;
import androidx.core.util.Preconditions;
import androidx.lifecycle.LifecycleOwner;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Objects;
public final class ProcessCameraProvider implements LifecycleCameraProvider {
    private static final ProcessCameraProvider sAppInstance = new ProcessCameraProvider();
    private CameraX mCameraX;
    private ListenableFuture<CameraX> mCameraXInitializeFuture;
    private Context mContext;
    private final Object mLock = new Object();
    private CameraXConfig.Provider mCameraXConfigProvider = null;
    private ListenableFuture<Void> mCameraXShutdownFuture = Futures.immediateFuture(null);
    private final LifecycleCameraRepository mLifecycleCameraRepository = new LifecycleCameraRepository();

    static /* synthetic */ CameraXConfig lambda$configureInstanceInternal$3(CameraXConfig cameraXConfig) {
        return cameraXConfig;
    }

    public static ListenableFuture<ProcessCameraProvider> getInstance(final Context context) {
        Preconditions.checkNotNull(context);
        return Futures.transform(sAppInstance.getOrCreateCameraXInstance(context), new Function() { // from class: androidx.camera.lifecycle.ProcessCameraProvider$$ExternalSyntheticLambda3
            @Override // androidx.arch.core.util.Function
            public final Object apply(Object obj) {
                return ProcessCameraProvider.lambda$getInstance$0(context, (CameraX) obj);
            }
        }, CameraXExecutors.directExecutor());
    }

    static /* synthetic */ ProcessCameraProvider lambda$getInstance$0(Context context, CameraX cameraX) {
        ProcessCameraProvider processCameraProvider = sAppInstance;
        processCameraProvider.setCameraX(cameraX);
        processCameraProvider.setContext(ContextUtil.getApplicationContext(context));
        return processCameraProvider;
    }

    private ListenableFuture<CameraX> getOrCreateCameraXInstance(Context context) {
        synchronized (this.mLock) {
            ListenableFuture<CameraX> listenableFuture = this.mCameraXInitializeFuture;
            if (listenableFuture != null) {
                return listenableFuture;
            }
            final CameraX cameraX = new CameraX(context, this.mCameraXConfigProvider);
            ListenableFuture<CameraX> future = CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.lifecycle.ProcessCameraProvider$$ExternalSyntheticLambda0
                @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
                public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                    return this.f$0.m187x6ee14178(cameraX, completer);
                }
            });
            this.mCameraXInitializeFuture = future;
            return future;
        }
    }
    /* synthetic */ Object m187x6ee14178(final CameraX cameraX, final CallbackToFutureAdapter.Completer completer) throws Exception {
        synchronized (this.mLock) {
            Futures.addCallback(FutureChain.from(this.mCameraXShutdownFuture).transformAsync(new AsyncFunction() { // from class: androidx.camera.lifecycle.ProcessCameraProvider$$ExternalSyntheticLambda4
                @Override // androidx.camera.core.impl.utils.futures.AsyncFunction
                public final ListenableFuture apply(Object obj) {
                    return cameraX.getInitializeFuture();
                }
            }, CameraXExecutors.directExecutor()), new FutureCallback<Void>() { // from class: androidx.camera.lifecycle.ProcessCameraProvider.1
                @Override // androidx.camera.core.impl.utils.futures.FutureCallback
                public void onSuccess(Void r2) {
                    completer.set(cameraX);
                }

                @Override // androidx.camera.core.impl.utils.futures.FutureCallback
                public void onFailure(Throwable th) {
                    completer.setException(th);
                }
            }, CameraXExecutors.directExecutor());
        }
        return "ProcessCameraProvider-initializeCameraX";
    }

    public static void configureInstance(CameraXConfig cameraXConfig) {
        sAppInstance.configureInstanceInternal(cameraXConfig);
    }

    private void configureInstanceInternal(final CameraXConfig cameraXConfig) {
        synchronized (this.mLock) {
            Preconditions.checkNotNull(cameraXConfig);
            Preconditions.checkState(this.mCameraXConfigProvider == null, "CameraX has already been configured. To use a different configuration, shutdown() must be called.");
            this.mCameraXConfigProvider = new CameraXConfig.Provider() { // from class: androidx.camera.lifecycle.ProcessCameraProvider$$ExternalSyntheticLambda1
                @Override // androidx.camera.core.CameraXConfig.Provider
                public final CameraXConfig getCameraXConfig() {
                    return ProcessCameraProvider.lambda$configureInstanceInternal$3(cameraXConfig);
                }
            };
        }
    }

    public ListenableFuture<Void> shutdown() {
        Threads.runOnMainSync(new Runnable() { // from class: androidx.camera.lifecycle.ProcessCameraProvider$$ExternalSyntheticLambda2
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m188x331eedbd();
            }
        });
        CameraX cameraX = this.mCameraX;
        if (cameraX != null) {
            cameraX.getCameraFactory().getCameraCoordinator().shutdown();
        }
        CameraX cameraX2 = this.mCameraX;
        ListenableFuture<Void> listenableFutureShutdown = cameraX2 != null ? cameraX2.shutdown() : Futures.immediateFuture(null);
        synchronized (this.mLock) {
            this.mCameraXConfigProvider = null;
            this.mCameraXInitializeFuture = null;
            this.mCameraXShutdownFuture = listenableFutureShutdown;
        }
        this.mCameraX = null;
        this.mContext = null;
        return listenableFutureShutdown;
    }
    /* synthetic */ void m188x331eedbd() {
        unbindAll();
        this.mLifecycleCameraRepository.clear();
    }

    private void setCameraX(CameraX cameraX) {
        this.mCameraX = cameraX;
    }

    private void setContext(Context context) {
        this.mContext = context;
    }

    public Camera bindToLifecycle(LifecycleOwner lifecycleOwner, CameraSelector cameraSelector, UseCase... useCaseArr) {
        if (getCameraOperatingMode() == 2) {
            throw new UnsupportedOperationException("bindToLifecycle for single camera is not supported in concurrent camera mode, call unbindAll() first");
        }
        setCameraOperatingMode(1);
        return bindToLifecycle(lifecycleOwner, cameraSelector, null, Collections.emptyList(), useCaseArr);
    }

    public Camera bindToLifecycle(LifecycleOwner lifecycleOwner, CameraSelector cameraSelector, UseCaseGroup useCaseGroup) {
        if (getCameraOperatingMode() == 2) {
            throw new UnsupportedOperationException("bindToLifecycle for single camera is not supported in concurrent camera mode, call unbindAll() first");
        }
        setCameraOperatingMode(1);
        return bindToLifecycle(lifecycleOwner, cameraSelector, useCaseGroup.getViewPort(), useCaseGroup.getEffects(), (UseCase[]) useCaseGroup.getUseCases().toArray(new UseCase[0]));
    }

    public ConcurrentCamera bindToLifecycle(List<ConcurrentCamera.SingleCameraConfig> list) {
        if (!this.mContext.getPackageManager().hasSystemFeature("android.hardware.camera.concurrent")) {
            throw new UnsupportedOperationException("Concurrent camera is not supported on the device");
        }
        if (getCameraOperatingMode() == 1) {
            throw new UnsupportedOperationException("Camera is already running, call unbindAll() before binding more cameras");
        }
        if (list.size() < 2) {
            throw new IllegalArgumentException("Concurrent camera needs two camera configs");
        }
        if (list.size() > 2) {
            throw new IllegalArgumentException("Concurrent camera is only supporting two  cameras at maximum.");
        }
        ArrayList arrayList = new ArrayList();
        List<CameraInfo> availableCameraInfos = getAvailableCameraInfos();
        CameraInfo cameraInfoFromCameraSelector = getCameraInfoFromCameraSelector(list.get(0).getCameraSelector(), availableCameraInfos);
        CameraInfo cameraInfoFromCameraSelector2 = getCameraInfoFromCameraSelector(list.get(1).getCameraSelector(), availableCameraInfos);
        if (cameraInfoFromCameraSelector == null || cameraInfoFromCameraSelector2 == null) {
            throw new IllegalArgumentException("Invalid camera selectors in camera configs");
        }
        arrayList.add(cameraInfoFromCameraSelector);
        arrayList.add(cameraInfoFromCameraSelector2);
        if (!getActiveConcurrentCameraInfos().isEmpty() && !arrayList.equals(getActiveConcurrentCameraInfos())) {
            throw new UnsupportedOperationException("Cameras are already running, call unbindAll() before binding more cameras");
        }
        setCameraOperatingMode(2);
        ArrayList arrayList2 = new ArrayList();
        for (ConcurrentCamera.SingleCameraConfig singleCameraConfig : list) {
            arrayList2.add(bindToLifecycle(singleCameraConfig.getLifecycleOwner(), singleCameraConfig.getCameraSelector(), singleCameraConfig.getUseCaseGroup().getViewPort(), singleCameraConfig.getUseCaseGroup().getEffects(), (UseCase[]) singleCameraConfig.getUseCaseGroup().getUseCases().toArray(new UseCase[0])));
        }
        setActiveConcurrentCameraInfos(arrayList);
        return new ConcurrentCamera(arrayList2);
    }

    Camera bindToLifecycle(LifecycleOwner lifecycleOwner, CameraSelector cameraSelector, ViewPort viewPort, List<CameraEffect> list, UseCase... useCaseArr) {
        CameraConfig cameraConfig;
        CameraConfig config;
        Threads.checkMainThread();
        CameraSelector.Builder builderFromSelector = CameraSelector.Builder.fromSelector(cameraSelector);
        int length = useCaseArr.length;
        int i = 0;
        while (true) {
            cameraConfig = null;
            if (i >= length) {
                break;
            }
            CameraSelector cameraSelector2 = useCaseArr[i].getCurrentConfig().getCameraSelector(null);
            if (cameraSelector2 != null) {
                Iterator<CameraFilter> it = cameraSelector2.getCameraFilterSet().iterator();
                while (it.hasNext()) {
                    builderFromSelector.addCameraFilter(it.next());
                }
            }
            i++;
        }
        LinkedHashSet<CameraInternal> linkedHashSetFilter = builderFromSelector.build().filter(this.mCameraX.getCameraRepository().getCameras());
        if (linkedHashSetFilter.isEmpty()) {
            throw new IllegalArgumentException("Provided camera selector unable to resolve a camera for the given use case");
        }
        LifecycleCamera lifecycleCamera = this.mLifecycleCameraRepository.getLifecycleCamera(lifecycleOwner, CameraUseCaseAdapter.generateCameraId(linkedHashSetFilter));
        Collection<LifecycleCamera> lifecycleCameras = this.mLifecycleCameraRepository.getLifecycleCameras();
        for (UseCase useCase : useCaseArr) {
            for (LifecycleCamera lifecycleCamera2 : lifecycleCameras) {
                if (lifecycleCamera2.isBound(useCase) && lifecycleCamera2 != lifecycleCamera) {
                    throw new IllegalStateException(String.format("Use case %s already bound to a different lifecycle.", useCase));
                }
            }
        }
        if (lifecycleCamera == null) {
            lifecycleCamera = this.mLifecycleCameraRepository.createLifecycleCamera(lifecycleOwner, new CameraUseCaseAdapter(linkedHashSetFilter, this.mCameraX.getCameraFactory().getCameraCoordinator(), this.mCameraX.getCameraDeviceSurfaceManager(), this.mCameraX.getDefaultConfigFactory()));
        }
        for (CameraFilter cameraFilter : cameraSelector.getCameraFilterSet()) {
            if (cameraFilter.getIdentifier() != CameraFilter.DEFAULT_ID && (config = ExtendedCameraConfigProviderStore.getConfigProvider(cameraFilter.getIdentifier()).getConfig(lifecycleCamera.getCameraInfo(), this.mContext)) != null) {
                if (cameraConfig != null) {
                    throw new IllegalArgumentException("Cannot apply multiple extended camera configs at the same time.");
                }
                cameraConfig = config;
            }
        }
        lifecycleCamera.setExtendedConfig(cameraConfig);
        if (useCaseArr.length == 0) {
            return lifecycleCamera;
        }
        this.mLifecycleCameraRepository.bindToLifecycleCamera(lifecycleCamera, viewPort, list, Arrays.asList(useCaseArr), this.mCameraX.getCameraFactory().getCameraCoordinator());
        return lifecycleCamera;
    }

    @Override // androidx.camera.lifecycle.LifecycleCameraProvider
    public boolean isBound(UseCase useCase) {
        Iterator<LifecycleCamera> it = this.mLifecycleCameraRepository.getLifecycleCameras().iterator();
        while (it.hasNext()) {
            if (it.next().isBound(useCase)) {
                return true;
            }
        }
        return false;
    }

    @Override // androidx.camera.lifecycle.LifecycleCameraProvider
    public void unbind(UseCase... useCaseArr) {
        Threads.checkMainThread();
        if (getCameraOperatingMode() == 2) {
            throw new UnsupportedOperationException("unbind usecase is not supported in concurrent camera mode, call unbindAll() first");
        }
        this.mLifecycleCameraRepository.unbind(Arrays.asList(useCaseArr));
    }

    @Override // androidx.camera.lifecycle.LifecycleCameraProvider
    public void unbindAll() {
        Threads.checkMainThread();
        setCameraOperatingMode(0);
        this.mLifecycleCameraRepository.unbindAll();
    }

    @Override // androidx.camera.core.CameraProvider
    public boolean hasCamera(CameraSelector cameraSelector) throws CameraInfoUnavailableException {
        try {
            cameraSelector.select(this.mCameraX.getCameraRepository().getCameras());
            return true;
        } catch (IllegalArgumentException unused) {
            return false;
        }
    }

    @Override // androidx.camera.core.CameraProvider
    public List<CameraInfo> getAvailableCameraInfos() {
        ArrayList arrayList = new ArrayList();
        Iterator<CameraInternal> it = this.mCameraX.getCameraRepository().getCameras().iterator();
        while (it.hasNext()) {
            arrayList.add(it.next().getCameraInfo());
        }
        return arrayList;
    }

    public List<List<CameraInfo>> getAvailableConcurrentCameraInfos() {
        Objects.requireNonNull(this.mCameraX);
        Objects.requireNonNull(this.mCameraX.getCameraFactory().getCameraCoordinator());
        List<List<CameraSelector>> concurrentCameraSelectors = this.mCameraX.getCameraFactory().getCameraCoordinator().getConcurrentCameraSelectors();
        List<CameraInfo> availableCameraInfos = getAvailableCameraInfos();
        ArrayList arrayList = new ArrayList();
        for (List<CameraSelector> list : concurrentCameraSelectors) {
            ArrayList arrayList2 = new ArrayList();
            Iterator<CameraSelector> it = list.iterator();
            while (it.hasNext()) {
                CameraInfo cameraInfoFromCameraSelector = getCameraInfoFromCameraSelector(it.next(), availableCameraInfos);
                if (cameraInfoFromCameraSelector != null) {
                    arrayList2.add(cameraInfoFromCameraSelector);
                }
            }
            arrayList.add(arrayList2);
        }
        return arrayList;
    }

    public boolean isConcurrentCameraModeOn() {
        return getCameraOperatingMode() == 2;
    }

    private int getCameraOperatingMode() {
        CameraX cameraX = this.mCameraX;
        if (cameraX == null) {
            return 0;
        }
        return cameraX.getCameraFactory().getCameraCoordinator().getCameraOperatingMode();
    }

    private void setCameraOperatingMode(int i) {
        CameraX cameraX = this.mCameraX;
        if (cameraX == null) {
            return;
        }
        cameraX.getCameraFactory().getCameraCoordinator().setCameraOperatingMode(i);
    }

    private List<CameraInfo> getActiveConcurrentCameraInfos() {
        CameraX cameraX = this.mCameraX;
        if (cameraX == null) {
            return new ArrayList();
        }
        return cameraX.getCameraFactory().getCameraCoordinator().getActiveConcurrentCameraInfos();
    }

    private void setActiveConcurrentCameraInfos(List<CameraInfo> list) {
        CameraX cameraX = this.mCameraX;
        if (cameraX == null) {
            return;
        }
        cameraX.getCameraFactory().getCameraCoordinator().setActiveConcurrentCameraInfos(list);
    }

    private CameraInfo getCameraInfoFromCameraSelector(CameraSelector cameraSelector, List<CameraInfo> list) {
        List<CameraInfo> listFilter = cameraSelector.filter(list);
        if (listFilter.isEmpty()) {
            return null;
        }
        return listFilter.get(0);
    }

    private ProcessCameraProvider() {
    }
}

