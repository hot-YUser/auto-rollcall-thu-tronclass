.class public Lorg/apache/cordova/AuthenticationToken;
.super Ljava/lang/Object;
.source "AuthenticationToken.java"


# instance fields
.field private password:Ljava/lang/String;

.field private userName:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 24
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public getPassword()Ljava/lang/String;
    .locals 1

    .line 53
    iget-object v0, p0, Lorg/apache/cordova/AuthenticationToken;->password:Ljava/lang/String;

    return-object v0
.end method

.method public getUserName()Ljava/lang/String;
    .locals 1

    .line 34
    iget-object v0, p0, Lorg/apache/cordova/AuthenticationToken;->userName:Ljava/lang/String;

    return-object v0
.end method

.method public setPassword(Ljava/lang/String;)V
    .locals 0

    .line 63
    iput-object p1, p0, Lorg/apache/cordova/AuthenticationToken;->password:Ljava/lang/String;

    return-void
.end method

.method public setUserName(Ljava/lang/String;)V
    .locals 0

    .line 44
    iput-object p1, p0, Lorg/apache/cordova/AuthenticationToken;->userName:Ljava/lang/String;

    return-void
.end method
