package androidx.camera.camera2.internal;

import androidx.camera.core.CameraState;
import androidx.camera.core.Logger;
import androidx.camera.core.impl.CameraInternal;
import androidx.camera.core.impl.CameraStateRegistry;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import java.util.Objects;
class CameraStateMachine {
    private static final String TAG = "CameraStateMachine";
    private final CameraStateRegistry mCameraStateRegistry;
    private final MutableLiveData<CameraState> mCameraStates;

    CameraStateMachine(CameraStateRegistry cameraStateRegistry) {
        this.mCameraStateRegistry = cameraStateRegistry;
        MutableLiveData<CameraState> mutableLiveData = new MutableLiveData<>();
        this.mCameraStates = mutableLiveData;
        mutableLiveData.postValue(CameraState.create(CameraState.Type.CLOSED));
    }
    static /* synthetic */ class AnonymousClass1 {
        static final /* synthetic */ int[] $SwitchMap$androidx$camera$core$impl$CameraInternal$State;

        static {
            int[] iArr = new int[CameraInternal.State.values().length];
            $SwitchMap$androidx$camera$core$impl$CameraInternal$State = iArr;
            try {
                iArr[CameraInternal.State.PENDING_OPEN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$androidx$camera$core$impl$CameraInternal$State[CameraInternal.State.OPENING.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$androidx$camera$core$impl$CameraInternal$State[CameraInternal.State.OPEN.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                $SwitchMap$androidx$camera$core$impl$CameraInternal$State[CameraInternal.State.CONFIGURED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                $SwitchMap$androidx$camera$core$impl$CameraInternal$State[CameraInternal.State.CLOSING.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                $SwitchMap$androidx$camera$core$impl$CameraInternal$State[CameraInternal.State.RELEASING.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                $SwitchMap$androidx$camera$core$impl$CameraInternal$State[CameraInternal.State.CLOSED.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                $SwitchMap$androidx$camera$core$impl$CameraInternal$State[CameraInternal.State.RELEASED.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    public void updateState(CameraInternal.State state, CameraState.StateError stateError) {
        CameraState cameraStateOnCameraPendingOpen;
        switch (AnonymousClass1.$SwitchMap$androidx$camera$core$impl$CameraInternal$State[state.ordinal()]) {
            case 1:
                cameraStateOnCameraPendingOpen = onCameraPendingOpen();
                break;
            case 2:
                cameraStateOnCameraPendingOpen = CameraState.create(CameraState.Type.OPENING, stateError);
                break;
            case 3:
            case 4:
                cameraStateOnCameraPendingOpen = CameraState.create(CameraState.Type.OPEN, stateError);
                break;
            case 5:
            case 6:
                cameraStateOnCameraPendingOpen = CameraState.create(CameraState.Type.CLOSING, stateError);
                break;
            case 7:
            case 8:
                cameraStateOnCameraPendingOpen = CameraState.create(CameraState.Type.CLOSED, stateError);
                break;
            default:
                throw new IllegalStateException("Unknown internal camera state: " + state);
        }
        Logger.d(TAG, "New public camera state " + cameraStateOnCameraPendingOpen + " from " + state + " and " + stateError);
        if (Objects.equals(this.mCameraStates.getValue(), cameraStateOnCameraPendingOpen)) {
            return;
        }
        Logger.d(TAG, "Publishing new public camera state " + cameraStateOnCameraPendingOpen);
        this.mCameraStates.postValue(cameraStateOnCameraPendingOpen);
    }

    private CameraState onCameraPendingOpen() {
        return this.mCameraStateRegistry.isCameraClosing() ? CameraState.create(CameraState.Type.OPENING) : CameraState.create(CameraState.Type.PENDING_OPEN);
    }

    public LiveData<CameraState> getStateLiveData() {
        return this.mCameraStates;
    }
}

