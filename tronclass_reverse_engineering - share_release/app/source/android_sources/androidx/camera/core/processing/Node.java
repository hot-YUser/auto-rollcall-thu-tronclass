package androidx.camera.core.processing;
public interface Node<I, O> {
    void release();

    O transform(I i);
}

