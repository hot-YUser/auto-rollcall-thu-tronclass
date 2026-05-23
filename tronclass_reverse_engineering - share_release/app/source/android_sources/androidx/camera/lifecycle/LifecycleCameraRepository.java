package androidx.camera.lifecycle;

import androidx.camera.core.CameraEffect;
import androidx.camera.core.UseCase;
import androidx.camera.core.ViewPort;
import androidx.camera.core.concurrent.CameraCoordinator;
import androidx.camera.core.internal.CameraUseCaseAdapter;
import androidx.core.util.Preconditions;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleObserver;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.OnLifecycleEvent;
import java.util.ArrayDeque;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
final class LifecycleCameraRepository {
    CameraCoordinator mCameraCoordinator;
    private final Object mLock = new Object();
    private final Map<Key, LifecycleCamera> mCameraMap = new HashMap();
    private final Map<LifecycleCameraRepositoryObserver, Set<Key>> mLifecycleObserverMap = new HashMap();
    private final ArrayDeque<LifecycleOwner> mActiveLifecycleOwners = new ArrayDeque<>();

    LifecycleCameraRepository() {
    }

    LifecycleCamera createLifecycleCamera(LifecycleOwner lifecycleOwner, CameraUseCaseAdapter cameraUseCaseAdapter) {
        LifecycleCamera lifecycleCamera;
        synchronized (this.mLock) {
            Preconditions.checkArgument(this.mCameraMap.get(Key.create(lifecycleOwner, cameraUseCaseAdapter.getCameraId())) == null, "LifecycleCamera already exists for the given LifecycleOwner and set of cameras");
            if (lifecycleOwner.getLifecycle().getState() == Lifecycle.State.DESTROYED) {
                throw new IllegalArgumentException("Trying to create LifecycleCamera with destroyed lifecycle.");
            }
            lifecycleCamera = new LifecycleCamera(lifecycleOwner, cameraUseCaseAdapter);
            if (cameraUseCaseAdapter.getUseCases().isEmpty()) {
                lifecycleCamera.suspend();
            }
            registerCamera(lifecycleCamera);
        }
        return lifecycleCamera;
    }

    LifecycleCamera getLifecycleCamera(LifecycleOwner lifecycleOwner, CameraUseCaseAdapter.CameraId cameraId) {
        LifecycleCamera lifecycleCamera;
        synchronized (this.mLock) {
            lifecycleCamera = this.mCameraMap.get(Key.create(lifecycleOwner, cameraId));
        }
        return lifecycleCamera;
    }

    Collection<LifecycleCamera> getLifecycleCameras() {
        Collection<LifecycleCamera> collectionUnmodifiableCollection;
        synchronized (this.mLock) {
            collectionUnmodifiableCollection = Collections.unmodifiableCollection(this.mCameraMap.values());
        }
        return collectionUnmodifiableCollection;
    }

    void clear() {
        synchronized (this.mLock) {
            Iterator it = new HashSet(this.mLifecycleObserverMap.keySet()).iterator();
            while (it.hasNext()) {
                unregisterLifecycle(((LifecycleCameraRepositoryObserver) it.next()).getLifecycleOwner());
            }
        }
    }

    private void registerCamera(LifecycleCamera lifecycleCamera) {
        Set<Key> hashSet;
        synchronized (this.mLock) {
            LifecycleOwner lifecycleOwner = lifecycleCamera.getLifecycleOwner();
            Key keyCreate = Key.create(lifecycleOwner, lifecycleCamera.getCameraUseCaseAdapter().getCameraId());
            LifecycleCameraRepositoryObserver lifecycleCameraRepositoryObserver = getLifecycleCameraRepositoryObserver(lifecycleOwner);
            if (lifecycleCameraRepositoryObserver != null) {
                hashSet = this.mLifecycleObserverMap.get(lifecycleCameraRepositoryObserver);
            } else {
                hashSet = new HashSet<>();
            }
            hashSet.add(keyCreate);
            this.mCameraMap.put(keyCreate, lifecycleCamera);
            if (lifecycleCameraRepositoryObserver == null) {
                LifecycleCameraRepositoryObserver lifecycleCameraRepositoryObserver2 = new LifecycleCameraRepositoryObserver(lifecycleOwner, this);
                this.mLifecycleObserverMap.put(lifecycleCameraRepositoryObserver2, hashSet);
                lifecycleOwner.getLifecycle().addObserver(lifecycleCameraRepositoryObserver2);
            }
        }
    }

    void unregisterLifecycle(LifecycleOwner lifecycleOwner) {
        synchronized (this.mLock) {
            LifecycleCameraRepositoryObserver lifecycleCameraRepositoryObserver = getLifecycleCameraRepositoryObserver(lifecycleOwner);
            if (lifecycleCameraRepositoryObserver == null) {
                return;
            }
            setInactive(lifecycleOwner);
            Iterator<Key> it = this.mLifecycleObserverMap.get(lifecycleCameraRepositoryObserver).iterator();
            while (it.hasNext()) {
                this.mCameraMap.remove(it.next());
            }
            this.mLifecycleObserverMap.remove(lifecycleCameraRepositoryObserver);
            lifecycleCameraRepositoryObserver.getLifecycleOwner().getLifecycle().removeObserver(lifecycleCameraRepositoryObserver);
        }
    }

    private LifecycleCameraRepositoryObserver getLifecycleCameraRepositoryObserver(LifecycleOwner lifecycleOwner) {
        synchronized (this.mLock) {
            for (LifecycleCameraRepositoryObserver lifecycleCameraRepositoryObserver : this.mLifecycleObserverMap.keySet()) {
                if (lifecycleOwner.equals(lifecycleCameraRepositoryObserver.getLifecycleOwner())) {
                    return lifecycleCameraRepositoryObserver;
                }
            }
            return null;
        }
    }

    void bindToLifecycleCamera(LifecycleCamera lifecycleCamera, ViewPort viewPort, List<CameraEffect> list, Collection<UseCase> collection, CameraCoordinator cameraCoordinator) {
        synchronized (this.mLock) {
            Preconditions.checkArgument(!collection.isEmpty());
            this.mCameraCoordinator = cameraCoordinator;
            LifecycleOwner lifecycleOwner = lifecycleCamera.getLifecycleOwner();
            Set<Key> set = this.mLifecycleObserverMap.get(getLifecycleCameraRepositoryObserver(lifecycleOwner));
            CameraCoordinator cameraCoordinator2 = this.mCameraCoordinator;
            if (cameraCoordinator2 == null || cameraCoordinator2.getCameraOperatingMode() != 2) {
                Iterator<Key> it = set.iterator();
                while (it.hasNext()) {
                    LifecycleCamera lifecycleCamera2 = (LifecycleCamera) Preconditions.checkNotNull(this.mCameraMap.get(it.next()));
                    if (!lifecycleCamera2.equals(lifecycleCamera) && !lifecycleCamera2.getUseCases().isEmpty()) {
                        throw new IllegalArgumentException("Multiple LifecycleCameras with use cases are registered to the same LifecycleOwner.");
                    }
                }
            }
            try {
                lifecycleCamera.getCameraUseCaseAdapter().setViewPort(viewPort);
                lifecycleCamera.getCameraUseCaseAdapter().setEffects(list);
                lifecycleCamera.bind(collection);
                if (lifecycleOwner.getLifecycle().getState().isAtLeast(Lifecycle.State.STARTED)) {
                    setActive(lifecycleOwner);
                }
            } catch (CameraUseCaseAdapter.CameraException e) {
                throw new IllegalArgumentException(e.getMessage());
            }
        }
    }

    void unbind(Collection<UseCase> collection) {
        synchronized (this.mLock) {
            Iterator<Key> it = this.mCameraMap.keySet().iterator();
            while (it.hasNext()) {
                LifecycleCamera lifecycleCamera = this.mCameraMap.get(it.next());
                boolean zIsEmpty = lifecycleCamera.getUseCases().isEmpty();
                lifecycleCamera.unbind(collection);
                if (!zIsEmpty && lifecycleCamera.getUseCases().isEmpty()) {
                    setInactive(lifecycleCamera.getLifecycleOwner());
                }
            }
        }
    }

    void unbindAll() {
        synchronized (this.mLock) {
            Iterator<Key> it = this.mCameraMap.keySet().iterator();
            while (it.hasNext()) {
                LifecycleCamera lifecycleCamera = this.mCameraMap.get(it.next());
                lifecycleCamera.unbindAll();
                setInactive(lifecycleCamera.getLifecycleOwner());
            }
        }
    }

    void setActive(LifecycleOwner lifecycleOwner) {
        synchronized (this.mLock) {
            if (hasUseCaseBound(lifecycleOwner)) {
                if (this.mActiveLifecycleOwners.isEmpty()) {
                    this.mActiveLifecycleOwners.push(lifecycleOwner);
                } else {
                    CameraCoordinator cameraCoordinator = this.mCameraCoordinator;
                    if (cameraCoordinator == null || cameraCoordinator.getCameraOperatingMode() != 2) {
                        LifecycleOwner lifecycleOwnerPeek = this.mActiveLifecycleOwners.peek();
                        if (!lifecycleOwner.equals(lifecycleOwnerPeek)) {
                            suspendUseCases(lifecycleOwnerPeek);
                            this.mActiveLifecycleOwners.remove(lifecycleOwner);
                            this.mActiveLifecycleOwners.push(lifecycleOwner);
                        }
                    }
                }
                unsuspendUseCases(lifecycleOwner);
            }
        }
    }

    void setInactive(LifecycleOwner lifecycleOwner) {
        synchronized (this.mLock) {
            this.mActiveLifecycleOwners.remove(lifecycleOwner);
            suspendUseCases(lifecycleOwner);
            if (!this.mActiveLifecycleOwners.isEmpty()) {
                unsuspendUseCases(this.mActiveLifecycleOwners.peek());
            }
        }
    }

    private boolean hasUseCaseBound(LifecycleOwner lifecycleOwner) {
        synchronized (this.mLock) {
            LifecycleCameraRepositoryObserver lifecycleCameraRepositoryObserver = getLifecycleCameraRepositoryObserver(lifecycleOwner);
            if (lifecycleCameraRepositoryObserver == null) {
                return false;
            }
            Iterator<Key> it = this.mLifecycleObserverMap.get(lifecycleCameraRepositoryObserver).iterator();
            while (it.hasNext()) {
                if (!((LifecycleCamera) Preconditions.checkNotNull(this.mCameraMap.get(it.next()))).getUseCases().isEmpty()) {
                    return true;
                }
            }
            return false;
        }
    }

    private void suspendUseCases(LifecycleOwner lifecycleOwner) {
        synchronized (this.mLock) {
            LifecycleCameraRepositoryObserver lifecycleCameraRepositoryObserver = getLifecycleCameraRepositoryObserver(lifecycleOwner);
            if (lifecycleCameraRepositoryObserver == null) {
                return;
            }
            Iterator<Key> it = this.mLifecycleObserverMap.get(lifecycleCameraRepositoryObserver).iterator();
            while (it.hasNext()) {
                ((LifecycleCamera) Preconditions.checkNotNull(this.mCameraMap.get(it.next()))).suspend();
            }
        }
    }

    private void unsuspendUseCases(LifecycleOwner lifecycleOwner) {
        synchronized (this.mLock) {
            Iterator<Key> it = this.mLifecycleObserverMap.get(getLifecycleCameraRepositoryObserver(lifecycleOwner)).iterator();
            while (it.hasNext()) {
                LifecycleCamera lifecycleCamera = this.mCameraMap.get(it.next());
                if (!((LifecycleCamera) Preconditions.checkNotNull(lifecycleCamera)).getUseCases().isEmpty()) {
                    lifecycleCamera.unsuspend();
                }
            }
        }
    }

    static abstract class Key {
        public abstract CameraUseCaseAdapter.CameraId getCameraId();

        public abstract LifecycleOwner getLifecycleOwner();

        Key() {
        }

        static Key create(LifecycleOwner lifecycleOwner, CameraUseCaseAdapter.CameraId cameraId) {
            return new AutoValue_LifecycleCameraRepository_Key(lifecycleOwner, cameraId);
        }
    }

    private static class LifecycleCameraRepositoryObserver implements LifecycleObserver {
        private final LifecycleCameraRepository mLifecycleCameraRepository;
        private final LifecycleOwner mLifecycleOwner;

        LifecycleCameraRepositoryObserver(LifecycleOwner lifecycleOwner, LifecycleCameraRepository lifecycleCameraRepository) {
            this.mLifecycleOwner = lifecycleOwner;
            this.mLifecycleCameraRepository = lifecycleCameraRepository;
        }

        LifecycleOwner getLifecycleOwner() {
            return this.mLifecycleOwner;
        }

        @OnLifecycleEvent(Lifecycle.Event.ON_START)
        public void onStart(LifecycleOwner lifecycleOwner) {
            this.mLifecycleCameraRepository.setActive(lifecycleOwner);
        }

        @OnLifecycleEvent(Lifecycle.Event.ON_STOP)
        public void onStop(LifecycleOwner lifecycleOwner) {
            this.mLifecycleCameraRepository.setInactive(lifecycleOwner);
        }

        @OnLifecycleEvent(Lifecycle.Event.ON_DESTROY)
        public void onDestroy(LifecycleOwner lifecycleOwner) {
            this.mLifecycleCameraRepository.unregisterLifecycle(lifecycleOwner);
        }
    }
}

