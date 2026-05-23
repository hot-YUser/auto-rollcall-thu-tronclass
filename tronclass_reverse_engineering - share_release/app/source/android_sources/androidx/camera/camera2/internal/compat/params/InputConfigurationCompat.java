package androidx.camera.camera2.internal.compat.params;

import android.hardware.camera2.params.InputConfiguration;
import android.os.Build;
import java.util.Objects;
public final class InputConfigurationCompat {
    private final InputConfigurationCompatImpl mImpl;

    private interface InputConfigurationCompatImpl {
        int getFormat();

        int getHeight();

        Object getInputConfiguration();

        int getWidth();

        boolean isMultiResolution();
    }

    public InputConfigurationCompat(int i, int i2, int i3) {
        if (Build.VERSION.SDK_INT >= 31) {
            this.mImpl = new InputConfigurationCompatApi31Impl(i, i2, i3);
        } else {
            this.mImpl = new InputConfigurationCompatApi23Impl(i, i2, i3);
        }
    }

    private InputConfigurationCompat(InputConfigurationCompatImpl inputConfigurationCompatImpl) {
        this.mImpl = inputConfigurationCompatImpl;
    }

    public static InputConfigurationCompat wrap(Object obj) {
        if (obj == null) {
            return null;
        }
        if (Build.VERSION.SDK_INT >= 31) {
            return new InputConfigurationCompat(new InputConfigurationCompatApi31Impl(obj));
        }
        return new InputConfigurationCompat(new InputConfigurationCompatApi23Impl(obj));
    }

    public int getWidth() {
        return this.mImpl.getWidth();
    }

    public int getHeight() {
        return this.mImpl.getHeight();
    }

    public int getFormat() {
        return this.mImpl.getFormat();
    }

    public boolean isMultiResolution() {
        return this.mImpl.isMultiResolution();
    }

    public boolean equals(Object obj) {
        if (obj instanceof InputConfigurationCompat) {
            return this.mImpl.equals(((InputConfigurationCompat) obj).mImpl);
        }
        return false;
    }

    public int hashCode() {
        return this.mImpl.hashCode();
    }

    public String toString() {
        return this.mImpl.toString();
    }

    public Object unwrap() {
        return this.mImpl.getInputConfiguration();
    }

    static final class InputConfigurationCompatBaseImpl implements InputConfigurationCompatImpl {
        private final int mFormat;
        private final int mHeight;
        private final int mWidth;

        @Override // androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl
        public Object getInputConfiguration() {
            return null;
        }

        @Override // androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl
        public boolean isMultiResolution() {
            return false;
        }

        InputConfigurationCompatBaseImpl(int i, int i2, int i3) {
            this.mWidth = i;
            this.mHeight = i2;
            this.mFormat = i3;
        }

        @Override // androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl
        public int getWidth() {
            return this.mWidth;
        }

        @Override // androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl
        public int getHeight() {
            return this.mHeight;
        }

        @Override // androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl
        public int getFormat() {
            return this.mFormat;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof InputConfigurationCompatBaseImpl)) {
                return false;
            }
            InputConfigurationCompatBaseImpl inputConfigurationCompatBaseImpl = (InputConfigurationCompatBaseImpl) obj;
            return inputConfigurationCompatBaseImpl.getWidth() == this.mWidth && inputConfigurationCompatBaseImpl.getHeight() == this.mHeight && inputConfigurationCompatBaseImpl.getFormat() == this.mFormat;
        }

        public int hashCode() {
            int i = 31 ^ this.mWidth;
            int i2 = this.mHeight ^ ((i << 5) - i);
            return this.mFormat ^ ((i2 << 5) - i2);
        }

        public String toString() {
            return String.format("InputConfiguration(w:%d, h:%d, format:%d)", Integer.valueOf(this.mWidth), Integer.valueOf(this.mHeight), Integer.valueOf(this.mFormat));
        }
    }

    private static class InputConfigurationCompatApi23Impl implements InputConfigurationCompatImpl {
        private final InputConfiguration mObject;

        @Override // androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl
        public boolean isMultiResolution() {
            return false;
        }

        InputConfigurationCompatApi23Impl(Object obj) {
            this.mObject = (InputConfiguration) obj;
        }

        InputConfigurationCompatApi23Impl(int i, int i2, int i3) {
            this(new InputConfiguration(i, i2, i3));
        }

        @Override // androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl
        public int getWidth() {
            return this.mObject.getWidth();
        }

        @Override // androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl
        public int getHeight() {
            return this.mObject.getHeight();
        }

        @Override // androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl
        public int getFormat() {
            return this.mObject.getFormat();
        }

        @Override // androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl
        public Object getInputConfiguration() {
            return this.mObject;
        }

        public boolean equals(Object obj) {
            if (obj instanceof InputConfigurationCompatImpl) {
                return Objects.equals(this.mObject, ((InputConfigurationCompatImpl) obj).getInputConfiguration());
            }
            return false;
        }

        public int hashCode() {
            return this.mObject.hashCode();
        }

        public String toString() {
            return this.mObject.toString();
        }
    }

    private static final class InputConfigurationCompatApi31Impl extends InputConfigurationCompatApi23Impl {
        InputConfigurationCompatApi31Impl(Object obj) {
            super(obj);
        }

        InputConfigurationCompatApi31Impl(int i, int i2, int i3) {
            super(i, i2, i3);
        }

        @Override // androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatApi23Impl, androidx.camera.camera2.internal.compat.params.InputConfigurationCompat.InputConfigurationCompatImpl
        public boolean isMultiResolution() {
            return ((InputConfiguration) getInputConfiguration()).isMultiResolution();
        }
    }
}

