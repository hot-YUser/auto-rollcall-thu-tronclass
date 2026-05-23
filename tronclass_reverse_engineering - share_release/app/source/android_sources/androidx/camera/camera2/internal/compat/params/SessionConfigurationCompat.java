package androidx.camera.camera2.internal.compat.params;

import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.params.InputConfiguration;
import android.hardware.camera2.params.OutputConfiguration;
import android.hardware.camera2.params.SessionConfiguration;
import android.os.Build;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.Executor;
public final class SessionConfigurationCompat {
    public static final int SESSION_HIGH_SPEED = 1;
    public static final int SESSION_REGULAR = 0;
    private final SessionConfigurationCompatImpl mImpl;

    private interface SessionConfigurationCompatImpl {
        Executor getExecutor();

        InputConfigurationCompat getInputConfiguration();

        List<OutputConfigurationCompat> getOutputConfigurations();

        Object getSessionConfiguration();

        CaptureRequest getSessionParameters();

        int getSessionType();

        CameraCaptureSession.StateCallback getStateCallback();

        void setInputConfiguration(InputConfigurationCompat inputConfigurationCompat);

        void setSessionParameters(CaptureRequest captureRequest);
    }

    @Retention(RetentionPolicy.SOURCE)
    public @interface SessionMode {
    }

    public SessionConfigurationCompat(int i, List<OutputConfigurationCompat> list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
        if (Build.VERSION.SDK_INT < 28) {
            this.mImpl = new SessionConfigurationCompatBaseImpl(i, list, executor, stateCallback);
        } else {
            this.mImpl = new SessionConfigurationCompatApi28Impl(i, list, executor, stateCallback);
        }
    }

    private SessionConfigurationCompat(SessionConfigurationCompatImpl sessionConfigurationCompatImpl) {
        this.mImpl = sessionConfigurationCompatImpl;
    }

    public static SessionConfigurationCompat wrap(Object obj) {
        if (obj != null && Build.VERSION.SDK_INT >= 28) {
            return new SessionConfigurationCompat(new SessionConfigurationCompatApi28Impl(obj));
        }
        return null;
    }

    static List<OutputConfigurationCompat> transformToCompat(List<OutputConfiguration> list) {
        ArrayList arrayList = new ArrayList(list.size());
        Iterator<OutputConfiguration> it = list.iterator();
        while (it.hasNext()) {
            arrayList.add(OutputConfigurationCompat.wrap(it.next()));
        }
        return arrayList;
    }

    public static List<OutputConfiguration> transformFromCompat(List<OutputConfigurationCompat> list) {
        ArrayList arrayList = new ArrayList(list.size());
        Iterator<OutputConfigurationCompat> it = list.iterator();
        while (it.hasNext()) {
            arrayList.add((OutputConfiguration) it.next().unwrap());
        }
        return arrayList;
    }

    public int getSessionType() {
        return this.mImpl.getSessionType();
    }

    public List<OutputConfigurationCompat> getOutputConfigurations() {
        return this.mImpl.getOutputConfigurations();
    }

    public CameraCaptureSession.StateCallback getStateCallback() {
        return this.mImpl.getStateCallback();
    }

    public Executor getExecutor() {
        return this.mImpl.getExecutor();
    }

    public InputConfigurationCompat getInputConfiguration() {
        return this.mImpl.getInputConfiguration();
    }

    public void setInputConfiguration(InputConfigurationCompat inputConfigurationCompat) {
        this.mImpl.setInputConfiguration(inputConfigurationCompat);
    }

    public CaptureRequest getSessionParameters() {
        return this.mImpl.getSessionParameters();
    }

    public void setSessionParameters(CaptureRequest captureRequest) {
        this.mImpl.setSessionParameters(captureRequest);
    }

    public Object unwrap() {
        return this.mImpl.getSessionConfiguration();
    }

    public boolean equals(Object obj) {
        if (obj instanceof SessionConfigurationCompat) {
            return this.mImpl.equals(((SessionConfigurationCompat) obj).mImpl);
        }
        return false;
    }

    public int hashCode() {
        return this.mImpl.hashCode();
    }

    private static final class SessionConfigurationCompatBaseImpl implements SessionConfigurationCompatImpl {
        private final Executor mExecutor;
        private final List<OutputConfigurationCompat> mOutputConfigurations;
        private final int mSessionType;
        private final CameraCaptureSession.StateCallback mStateCallback;
        private InputConfigurationCompat mInputConfig = null;
        private CaptureRequest mSessionParameters = null;

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public Object getSessionConfiguration() {
            return null;
        }

        SessionConfigurationCompatBaseImpl(int i, List<OutputConfigurationCompat> list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this.mSessionType = i;
            this.mOutputConfigurations = Collections.unmodifiableList(new ArrayList(list));
            this.mStateCallback = stateCallback;
            this.mExecutor = executor;
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public int getSessionType() {
            return this.mSessionType;
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public List<OutputConfigurationCompat> getOutputConfigurations() {
            return this.mOutputConfigurations;
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public CameraCaptureSession.StateCallback getStateCallback() {
            return this.mStateCallback;
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public Executor getExecutor() {
            return this.mExecutor;
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public InputConfigurationCompat getInputConfiguration() {
            return this.mInputConfig;
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public void setInputConfiguration(InputConfigurationCompat inputConfigurationCompat) {
            if (this.mSessionType != 1) {
                this.mInputConfig = inputConfigurationCompat;
                return;
            }
            throw new UnsupportedOperationException("Method not supported for high speed session types");
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public CaptureRequest getSessionParameters() {
            return this.mSessionParameters;
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public void setSessionParameters(CaptureRequest captureRequest) {
            this.mSessionParameters = captureRequest;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof SessionConfigurationCompatBaseImpl) {
                SessionConfigurationCompatBaseImpl sessionConfigurationCompatBaseImpl = (SessionConfigurationCompatBaseImpl) obj;
                if (Objects.equals(this.mInputConfig, sessionConfigurationCompatBaseImpl.mInputConfig) && this.mSessionType == sessionConfigurationCompatBaseImpl.mSessionType && this.mOutputConfigurations.size() == sessionConfigurationCompatBaseImpl.mOutputConfigurations.size()) {
                    for (int i = 0; i < this.mOutputConfigurations.size(); i++) {
                        if (!this.mOutputConfigurations.get(i).equals(sessionConfigurationCompatBaseImpl.mOutputConfigurations.get(i))) {
                            return false;
                        }
                    }
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int iHashCode = this.mOutputConfigurations.hashCode() ^ 31;
            int i = (iHashCode << 5) - iHashCode;
            InputConfigurationCompat inputConfigurationCompat = this.mInputConfig;
            int iHashCode2 = (inputConfigurationCompat == null ? 0 : inputConfigurationCompat.hashCode()) ^ i;
            return this.mSessionType ^ ((iHashCode2 << 5) - iHashCode2);
        }
    }

    private static final class SessionConfigurationCompatApi28Impl implements SessionConfigurationCompatImpl {
        private final SessionConfiguration mObject;
        private final List<OutputConfigurationCompat> mOutputConfigurations;

        SessionConfigurationCompatApi28Impl(Object obj) {
            SessionConfiguration sessionConfiguration = (SessionConfiguration) obj;
            this.mObject = sessionConfiguration;
            this.mOutputConfigurations = Collections.unmodifiableList(SessionConfigurationCompat.transformToCompat(sessionConfiguration.getOutputConfigurations()));
        }

        SessionConfigurationCompatApi28Impl(int i, List<OutputConfigurationCompat> list, Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this(new SessionConfiguration(i, SessionConfigurationCompat.transformFromCompat(list), executor, stateCallback));
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public int getSessionType() {
            return this.mObject.getSessionType();
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public List<OutputConfigurationCompat> getOutputConfigurations() {
            return this.mOutputConfigurations;
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public CameraCaptureSession.StateCallback getStateCallback() {
            return this.mObject.getStateCallback();
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public Executor getExecutor() {
            return this.mObject.getExecutor();
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public InputConfigurationCompat getInputConfiguration() {
            return InputConfigurationCompat.wrap(this.mObject.getInputConfiguration());
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public void setInputConfiguration(InputConfigurationCompat inputConfigurationCompat) {
            this.mObject.setInputConfiguration((InputConfiguration) inputConfigurationCompat.unwrap());
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public CaptureRequest getSessionParameters() {
            return this.mObject.getSessionParameters();
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public void setSessionParameters(CaptureRequest captureRequest) {
            this.mObject.setSessionParameters(captureRequest);
        }

        @Override // androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat.SessionConfigurationCompatImpl
        public Object getSessionConfiguration() {
            return this.mObject;
        }

        public boolean equals(Object obj) {
            if (obj instanceof SessionConfigurationCompatApi28Impl) {
                return Objects.equals(this.mObject, ((SessionConfigurationCompatApi28Impl) obj).mObject);
            }
            return false;
        }

        public int hashCode() {
            return this.mObject.hashCode();
        }
    }
}

