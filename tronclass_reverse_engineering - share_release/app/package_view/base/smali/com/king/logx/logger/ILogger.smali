.class public interface abstract Lcom/king/logx/logger/ILogger;
.super Ljava/lang/Object;
.source "ILogger.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0011\n\u0002\u0008\u0002\n\u0002\u0010\u0003\n\u0002\u0008\u0005\n\u0002\u0010\u0008\n\u0002\u0008\u0007\u0008f\u0018\u00002\u00020\u0001J/\u0010\u0002\u001a\u00020\u00032\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0016\u0010\u0006\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H&\u00a2\u0006\u0002\u0010\u0008J\u0012\u0010\u0002\u001a\u00020\u00032\u0008\u0010\t\u001a\u0004\u0018\u00010\nH&J9\u0010\u0002\u001a\u00020\u00032\u0008\u0010\t\u001a\u0004\u0018\u00010\n2\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0016\u0010\u0006\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H&\u00a2\u0006\u0002\u0010\u000bJ/\u0010\u000c\u001a\u00020\u00032\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0016\u0010\u0006\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H&\u00a2\u0006\u0002\u0010\u0008J\u0012\u0010\u000c\u001a\u00020\u00032\u0008\u0010\t\u001a\u0004\u0018\u00010\nH&J9\u0010\u000c\u001a\u00020\u00032\u0008\u0010\t\u001a\u0004\u0018\u00010\n2\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0016\u0010\u0006\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H&\u00a2\u0006\u0002\u0010\u000bJ/\u0010\r\u001a\u00020\u00032\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0016\u0010\u0006\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H&\u00a2\u0006\u0002\u0010\u0008J\u0012\u0010\r\u001a\u00020\u00032\u0008\u0010\t\u001a\u0004\u0018\u00010\nH&J9\u0010\r\u001a\u00020\u00032\u0008\u0010\t\u001a\u0004\u0018\u00010\n2\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0016\u0010\u0006\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H&\u00a2\u0006\u0002\u0010\u000bJ\u001a\u0010\u000e\u001a\u00020\u00032\u0006\u0010\u000f\u001a\u00020\u00102\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u0005H&J\u001a\u0010\u000e\u001a\u00020\u00032\u0006\u0010\u000f\u001a\u00020\u00102\u0008\u0010\t\u001a\u0004\u0018\u00010\nH&J$\u0010\u000e\u001a\u00020\u00032\u0006\u0010\u000f\u001a\u00020\u00102\u0008\u0010\t\u001a\u0004\u0018\u00010\n2\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u0005H&J\u0010\u0010\u0011\u001a\u00020\u00002\u0006\u0010\u0012\u001a\u00020\u0010H&J\u0010\u0010\u0013\u001a\u00020\u00002\u0006\u0010\u0013\u001a\u00020\u0005H&J/\u0010\u0014\u001a\u00020\u00032\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0016\u0010\u0006\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H&\u00a2\u0006\u0002\u0010\u0008J\u0012\u0010\u0014\u001a\u00020\u00032\u0008\u0010\t\u001a\u0004\u0018\u00010\nH&J9\u0010\u0014\u001a\u00020\u00032\u0008\u0010\t\u001a\u0004\u0018\u00010\n2\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0016\u0010\u0006\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H&\u00a2\u0006\u0002\u0010\u000bJ/\u0010\u0015\u001a\u00020\u00032\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0016\u0010\u0006\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H&\u00a2\u0006\u0002\u0010\u0008J\u0012\u0010\u0015\u001a\u00020\u00032\u0008\u0010\t\u001a\u0004\u0018\u00010\nH&J9\u0010\u0015\u001a\u00020\u00032\u0008\u0010\t\u001a\u0004\u0018\u00010\n2\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0016\u0010\u0006\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H&\u00a2\u0006\u0002\u0010\u000bJ/\u0010\u0016\u001a\u00020\u00032\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0016\u0010\u0006\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H&\u00a2\u0006\u0002\u0010\u0008J\u0012\u0010\u0016\u001a\u00020\u00032\u0008\u0010\t\u001a\u0004\u0018\u00010\nH&J9\u0010\u0016\u001a\u00020\u00032\u0008\u0010\t\u001a\u0004\u0018\u00010\n2\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0016\u0010\u0006\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00010\u0007\"\u0004\u0018\u00010\u0001H&\u00a2\u0006\u0002\u0010\u000b\u00a8\u0006\u0017"
    }
    d2 = {
        "Lcom/king/logx/logger/ILogger;",
        "",
        "d",
        "",
        "message",
        "",
        "args",
        "",
        "(Ljava/lang/String;[Ljava/lang/Object;)V",
        "t",
        "",
        "(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V",
        "e",
        "i",
        "log",
        "priority",
        "",
        "offset",
        "methodOffset",
        "tag",
        "v",
        "w",
        "wtf",
        "logx_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x7,
        0x1
    }
    xi = 0x30
.end annotation


# virtual methods
.method public varargs abstract d(Ljava/lang/String;[Ljava/lang/Object;)V
.end method

.method public abstract d(Ljava/lang/Throwable;)V
.end method

.method public varargs abstract d(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
.end method

.method public varargs abstract e(Ljava/lang/String;[Ljava/lang/Object;)V
.end method

.method public abstract e(Ljava/lang/Throwable;)V
.end method

.method public varargs abstract e(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
.end method

.method public varargs abstract i(Ljava/lang/String;[Ljava/lang/Object;)V
.end method

.method public abstract i(Ljava/lang/Throwable;)V
.end method

.method public varargs abstract i(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
.end method

.method public abstract log(ILjava/lang/String;)V
.end method

.method public abstract log(ILjava/lang/Throwable;)V
.end method

.method public abstract log(ILjava/lang/Throwable;Ljava/lang/String;)V
.end method

.method public abstract offset(I)Lcom/king/logx/logger/ILogger;
.end method

.method public abstract tag(Ljava/lang/String;)Lcom/king/logx/logger/ILogger;
.end method

.method public varargs abstract v(Ljava/lang/String;[Ljava/lang/Object;)V
.end method

.method public abstract v(Ljava/lang/Throwable;)V
.end method

.method public varargs abstract v(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
.end method

.method public varargs abstract w(Ljava/lang/String;[Ljava/lang/Object;)V
.end method

.method public abstract w(Ljava/lang/Throwable;)V
.end method

.method public varargs abstract w(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
.end method

.method public varargs abstract wtf(Ljava/lang/String;[Ljava/lang/Object;)V
.end method

.method public abstract wtf(Ljava/lang/Throwable;)V
.end method

.method public varargs abstract wtf(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
.end method
