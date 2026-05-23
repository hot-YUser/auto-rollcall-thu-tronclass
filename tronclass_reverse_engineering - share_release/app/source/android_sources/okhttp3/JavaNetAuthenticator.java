package okhttp3;

import com.silkimen.http.HttpRequest;
import java.io.IOException;
import java.net.Authenticator;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.PasswordAuthentication;
import java.net.Proxy;
import java.util.List;
public final class JavaNetAuthenticator implements Authenticator {
    @Override // okhttp3.Authenticator
    public Request authenticate(Route route, Response response) throws IOException {
        PasswordAuthentication passwordAuthenticationRequestPasswordAuthentication;
        List<Challenge> listChallenges = response.challenges();
        Request request = response.request();
        HttpUrl httpUrlUrl = request.url();
        boolean z = response.code() == 407;
        Proxy proxy = route.proxy();
        int size = listChallenges.size();
        for (int i = 0; i < size; i++) {
            Challenge challenge = listChallenges.get(i);
            if ("Basic".equalsIgnoreCase(challenge.scheme())) {
                if (z) {
                    InetSocketAddress inetSocketAddress = (InetSocketAddress) proxy.address();
                    passwordAuthenticationRequestPasswordAuthentication = java.net.Authenticator.requestPasswordAuthentication(inetSocketAddress.getHostName(), getConnectToInetAddress(proxy, httpUrlUrl), inetSocketAddress.getPort(), httpUrlUrl.scheme(), challenge.realm(), challenge.scheme(), httpUrlUrl.url(), Authenticator.RequestorType.PROXY);
                } else {
                    passwordAuthenticationRequestPasswordAuthentication = java.net.Authenticator.requestPasswordAuthentication(httpUrlUrl.host(), getConnectToInetAddress(proxy, httpUrlUrl), httpUrlUrl.port(), httpUrlUrl.scheme(), challenge.realm(), challenge.scheme(), httpUrlUrl.url(), Authenticator.RequestorType.SERVER);
                }
                if (passwordAuthenticationRequestPasswordAuthentication != null) {
                    return request.newBuilder().header(z ? HttpRequest.HEADER_PROXY_AUTHORIZATION : HttpRequest.HEADER_AUTHORIZATION, Credentials.basic(passwordAuthenticationRequestPasswordAuthentication.getUserName(), new String(passwordAuthenticationRequestPasswordAuthentication.getPassword()), challenge.charset())).build();
                }
            }
        }
        return null;
    }

    private InetAddress getConnectToInetAddress(Proxy proxy, HttpUrl httpUrl) throws IOException {
        if (proxy != null && proxy.type() != Proxy.Type.DIRECT) {
            return ((InetSocketAddress) proxy.address()).getAddress();
        }
        return InetAddress.getByName(httpUrl.host());
    }
}

