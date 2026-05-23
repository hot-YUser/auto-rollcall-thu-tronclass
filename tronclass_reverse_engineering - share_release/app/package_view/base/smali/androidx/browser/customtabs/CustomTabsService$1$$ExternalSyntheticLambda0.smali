.class public final synthetic Landroidx/browser/customtabs/CustomTabsService$1$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroid/os/IBinder$DeathRecipient;


# instance fields
.field public final synthetic f$0:Landroidx/browser/customtabs/CustomTabsService$1;

.field public final synthetic f$1:Landroidx/browser/customtabs/CustomTabsSessionToken;


# direct methods
.method public synthetic constructor <init>(Landroidx/browser/customtabs/CustomTabsService$1;Landroidx/browser/customtabs/CustomTabsSessionToken;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/browser/customtabs/CustomTabsService$1$$ExternalSyntheticLambda0;->f$0:Landroidx/browser/customtabs/CustomTabsService$1;

    iput-object p2, p0, Landroidx/browser/customtabs/CustomTabsService$1$$ExternalSyntheticLambda0;->f$1:Landroidx/browser/customtabs/CustomTabsSessionToken;

    return-void
.end method


# virtual methods
.method public final binderDied()V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/browser/customtabs/CustomTabsService$1$$ExternalSyntheticLambda0;->f$0:Landroidx/browser/customtabs/CustomTabsService$1;

    iget-object v1, p0, Landroidx/browser/customtabs/CustomTabsService$1$$ExternalSyntheticLambda0;->f$1:Landroidx/browser/customtabs/CustomTabsSessionToken;

    invoke-virtual {v0, v1}, Landroidx/browser/customtabs/CustomTabsService$1;->lambda$newSessionInternal$0$androidx-browser-customtabs-CustomTabsService$1(Landroidx/browser/customtabs/CustomTabsSessionToken;)V

    return-void
.end method
