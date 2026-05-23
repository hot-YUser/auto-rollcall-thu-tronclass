.class Lcom/onesignal/shortcutbadger/impl/SonyHomeBadger$1;
.super Landroid/content/AsyncQueryHandler;
.source "SonyHomeBadger.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/shortcutbadger/impl/SonyHomeBadger;->executeBadgeByContentProvider(Landroid/content/Context;Landroid/content/ComponentName;I)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/shortcutbadger/impl/SonyHomeBadger;


# direct methods
.method constructor <init>(Lcom/onesignal/shortcutbadger/impl/SonyHomeBadger;Landroid/content/ContentResolver;)V
    .locals 0

    .line 84
    iput-object p1, p0, Lcom/onesignal/shortcutbadger/impl/SonyHomeBadger$1;->this$0:Lcom/onesignal/shortcutbadger/impl/SonyHomeBadger;

    invoke-direct {p0, p2}, Landroid/content/AsyncQueryHandler;-><init>(Landroid/content/ContentResolver;)V

    return-void
.end method
