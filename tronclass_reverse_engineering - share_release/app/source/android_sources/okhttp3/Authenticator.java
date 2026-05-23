package okhttp3;

import java.io.IOException;
import javax.annotation.Nullable;
public interface Authenticator {
    public static final Authenticator NONE = new Authenticator() { // from class: okhttp3.Authenticator.1
        @Override // okhttp3.Authenticator
        public Request authenticate(Route route, Response response) {
            return null;
        }
    };

    @Nullable
    Request authenticate(Route route, Response response) throws IOException;
}

