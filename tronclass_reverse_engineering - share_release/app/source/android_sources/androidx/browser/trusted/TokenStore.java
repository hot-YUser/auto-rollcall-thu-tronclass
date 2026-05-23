package androidx.browser.trusted;
public interface TokenStore {
    Token load();

    void store(Token token);
}

