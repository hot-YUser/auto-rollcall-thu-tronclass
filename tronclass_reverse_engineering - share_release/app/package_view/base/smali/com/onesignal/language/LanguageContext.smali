.class public Lcom/onesignal/language/LanguageContext;
.super Ljava/lang/Object;
.source "LanguageContext.java"


# static fields
.field private static instance:Lcom/onesignal/language/LanguageContext;


# instance fields
.field private strategy:Lcom/onesignal/language/LanguageProvider;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>(Lcom/onesignal/OSSharedPreferences;)V
    .locals 3

    .line 21
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 22
    sput-object p0, Lcom/onesignal/language/LanguageContext;->instance:Lcom/onesignal/language/LanguageContext;

    .line 23
    invoke-interface {p1}, Lcom/onesignal/OSSharedPreferences;->getPreferencesName()Ljava/lang/String;

    move-result-object v0

    const-string v1, "PREFS_OS_LANGUAGE"

    const/4 v2, 0x0

    invoke-interface {p1, v0, v1, v2}, Lcom/onesignal/OSSharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 25
    new-instance v0, Lcom/onesignal/language/LanguageProviderAppDefined;

    invoke-direct {v0, p1}, Lcom/onesignal/language/LanguageProviderAppDefined;-><init>(Lcom/onesignal/OSSharedPreferences;)V

    iput-object v0, p0, Lcom/onesignal/language/LanguageContext;->strategy:Lcom/onesignal/language/LanguageProvider;

    goto :goto_0

    .line 28
    :cond_0
    new-instance p1, Lcom/onesignal/language/LanguageProviderDevice;

    invoke-direct {p1}, Lcom/onesignal/language/LanguageProviderDevice;-><init>()V

    iput-object p1, p0, Lcom/onesignal/language/LanguageContext;->strategy:Lcom/onesignal/language/LanguageProvider;

    :goto_0
    return-void
.end method

.method public static getInstance()Lcom/onesignal/language/LanguageContext;
    .locals 1

    .line 18
    sget-object v0, Lcom/onesignal/language/LanguageContext;->instance:Lcom/onesignal/language/LanguageContext;

    return-object v0
.end method


# virtual methods
.method public getLanguage()Ljava/lang/String;
    .locals 1

    .line 38
    iget-object v0, p0, Lcom/onesignal/language/LanguageContext;->strategy:Lcom/onesignal/language/LanguageProvider;

    invoke-interface {v0}, Lcom/onesignal/language/LanguageProvider;->getLanguage()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public setStrategy(Lcom/onesignal/language/LanguageProvider;)V
    .locals 0

    .line 33
    iput-object p1, p0, Lcom/onesignal/language/LanguageContext;->strategy:Lcom/onesignal/language/LanguageProvider;

    return-void
.end method
