.class Lme/leolin/shortcutbadger/impl/SonyHomeBadger$1;
.super Landroid/content/AsyncQueryHandler;
.source "SonyHomeBadger.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lme/leolin/shortcutbadger/impl/SonyHomeBadger;->executeBadgeByContentProvider(Landroid/content/Context;Landroid/content/ComponentName;I)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lme/leolin/shortcutbadger/impl/SonyHomeBadger;


# direct methods
.method constructor <init>(Lme/leolin/shortcutbadger/impl/SonyHomeBadger;Landroid/content/ContentResolver;)V
    .locals 0

    .line 83
    iput-object p1, p0, Lme/leolin/shortcutbadger/impl/SonyHomeBadger$1;->this$0:Lme/leolin/shortcutbadger/impl/SonyHomeBadger;

    invoke-direct {p0, p2}, Landroid/content/AsyncQueryHandler;-><init>(Landroid/content/ContentResolver;)V

    return-void
.end method
