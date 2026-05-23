package org.apache.commons.io.input;
public class TailerListenerAdapter implements TailerListener {
    @Override // org.apache.commons.io.input.TailerListener
    public void fileNotFound() {
    }

    @Override // org.apache.commons.io.input.TailerListener
    public void fileRotated() {
    }

    @Override // org.apache.commons.io.input.TailerListener
    public void handle(Exception exc) {
    }

    @Override // org.apache.commons.io.input.TailerListener
    public void handle(String str) {
    }

    @Override // org.apache.commons.io.input.TailerListener
    public void init(Tailer tailer) {
    }
}

