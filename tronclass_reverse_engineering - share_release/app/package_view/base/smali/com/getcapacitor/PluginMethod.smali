.class public interface abstract annotation Lcom/getcapacitor/PluginMethod;
.super Ljava/lang/Object;
.source "PluginMethod.java"

# interfaces
.implements Ljava/lang/annotation/Annotation;


# annotations
.annotation system Ldalvik/annotation/AnnotationDefault;
    value = .subannotation Lcom/getcapacitor/PluginMethod;
        returnType = "promise"
    .end subannotation
.end annotation

.annotation runtime Ljava/lang/annotation/Retention;
    value = .enum Ljava/lang/annotation/RetentionPolicy;->RUNTIME:Ljava/lang/annotation/RetentionPolicy;
.end annotation


# static fields
.field public static final RETURN_CALLBACK:Ljava/lang/String; = "callback"

.field public static final RETURN_NONE:Ljava/lang/String; = "none"

.field public static final RETURN_PROMISE:Ljava/lang/String; = "promise"


# virtual methods
.method public abstract returnType()Ljava/lang/String;
.end method
