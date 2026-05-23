.class public interface abstract annotation Lcom/getcapacitor/NativePlugin;
.super Ljava/lang/Object;
.source "NativePlugin.java"

# interfaces
.implements Ljava/lang/annotation/Annotation;


# annotations
.annotation system Ldalvik/annotation/AnnotationDefault;
    value = .subannotation Lcom/getcapacitor/NativePlugin;
        name = ""
        permissionRequestCode = 0x2328
        permissions = {}
        requestCodes = {}
    .end subannotation
.end annotation

.annotation runtime Ljava/lang/annotation/Retention;
    value = .enum Ljava/lang/annotation/RetentionPolicy;->RUNTIME:Ljava/lang/annotation/RetentionPolicy;
.end annotation


# virtual methods
.method public abstract name()Ljava/lang/String;
.end method

.method public abstract permissionRequestCode()I
.end method

.method public abstract permissions()[Ljava/lang/String;
.end method

.method public abstract requestCodes()[I
.end method
