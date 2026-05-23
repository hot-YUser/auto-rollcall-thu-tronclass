.class public interface abstract Lcom/google/firebase/encoders/DataEncoder;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-encoders-json@@16.0.0"


# virtual methods
.method public abstract encode(Ljava/lang/Object;)Ljava/lang/String;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/firebase/encoders/EncodingException;
        }
    .end annotation
.end method

.method public abstract encode(Ljava/lang/Object;Ljava/io/Writer;)V
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;,
            Lcom/google/firebase/encoders/EncodingException;
        }
    .end annotation
.end method
