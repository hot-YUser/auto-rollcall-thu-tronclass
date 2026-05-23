.class public Lcom/getcapacitor/UriMatcher;
.super Ljava/lang/Object;
.source "UriMatcher.java"


# static fields
.field private static final EXACT:I = 0x0

.field private static final MASK:I = 0x3

.field static final PATH_SPLIT_PATTERN:Ljava/util/regex/Pattern;

.field private static final REST:I = 0x2

.field private static final TEXT:I = 0x1


# instance fields
.field private mChildren:Ljava/util/ArrayList;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/ArrayList<",
            "Lcom/getcapacitor/UriMatcher;",
            ">;"
        }
    .end annotation
.end field

.field private mCode:Ljava/lang/Object;

.field private mText:Ljava/lang/String;

.field private mWhich:I


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 118
    const-string v0, "/"

    invoke-static {v0}, Ljava/util/regex/Pattern;->compile(Ljava/lang/String;)Ljava/util/regex/Pattern;

    move-result-object v0

    sput-object v0, Lcom/getcapacitor/UriMatcher;->PATH_SPLIT_PATTERN:Ljava/util/regex/Pattern;

    return-void
.end method

.method private constructor <init>()V
    .locals 2

    .line 40
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 41
    iput-object v0, p0, Lcom/getcapacitor/UriMatcher;->mCode:Ljava/lang/Object;

    const/4 v1, -0x1

    .line 42
    iput v1, p0, Lcom/getcapacitor/UriMatcher;->mWhich:I

    .line 43
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    iput-object v1, p0, Lcom/getcapacitor/UriMatcher;->mChildren:Ljava/util/ArrayList;

    .line 44
    iput-object v0, p0, Lcom/getcapacitor/UriMatcher;->mText:Ljava/lang/String;

    return-void
.end method

.method public constructor <init>(Ljava/lang/Object;)V
    .locals 0

    .line 33
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 34
    iput-object p1, p0, Lcom/getcapacitor/UriMatcher;->mCode:Ljava/lang/Object;

    const/4 p1, -0x1

    .line 35
    iput p1, p0, Lcom/getcapacitor/UriMatcher;->mWhich:I

    .line 36
    new-instance p1, Ljava/util/ArrayList;

    invoke-direct {p1}, Ljava/util/ArrayList;-><init>()V

    iput-object p1, p0, Lcom/getcapacitor/UriMatcher;->mChildren:Ljava/util/ArrayList;

    const/4 p1, 0x0

    .line 37
    iput-object p1, p0, Lcom/getcapacitor/UriMatcher;->mText:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public addURI(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V
    .locals 15

    move-object/from16 v0, p3

    move-object/from16 v1, p4

    if-eqz v1, :cond_c

    const/4 v2, 0x1

    const/4 v3, 0x0

    if-eqz v0, :cond_1

    .line 71
    invoke-virtual/range {p3 .. p3}, Ljava/lang/String;->length()I

    move-result v4

    if-lez v4, :cond_0

    invoke-virtual {v0, v3}, Ljava/lang/String;->charAt(I)C

    move-result v4

    const/16 v5, 0x2f

    if-ne v4, v5, :cond_0

    .line 72
    invoke-virtual {v0, v2}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object v0

    .line 74
    :cond_0
    sget-object v4, Lcom/getcapacitor/UriMatcher;->PATH_SPLIT_PATTERN:Ljava/util/regex/Pattern;

    invoke-virtual {v4, v0}, Ljava/util/regex/Pattern;->split(Ljava/lang/CharSequence;)[Ljava/lang/String;

    move-result-object v0

    goto :goto_0

    :cond_1
    const/4 v0, 0x0

    :goto_0
    if-eqz v0, :cond_2

    .line 77
    array-length v4, v0

    goto :goto_1

    :cond_2
    move v4, v3

    :goto_1
    const/4 v5, -0x2

    move-object v7, p0

    move v6, v5

    :goto_2
    if-ge v6, v4, :cond_b

    const/4 v8, -0x1

    if-ne v6, v5, :cond_3

    move-object/from16 v9, p1

    goto :goto_3

    :cond_3
    if-ne v6, v8, :cond_4

    move-object/from16 v9, p2

    goto :goto_3

    .line 86
    :cond_4
    aget-object v9, v0, v6

    .line 87
    :goto_3
    iget-object v10, v7, Lcom/getcapacitor/UriMatcher;->mChildren:Ljava/util/ArrayList;

    .line 88
    invoke-virtual {v10}, Ljava/util/ArrayList;->size()I

    move-result v11

    move v12, v3

    :goto_4
    if-ge v12, v11, :cond_6

    .line 92
    invoke-virtual {v10, v12}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v13

    check-cast v13, Lcom/getcapacitor/UriMatcher;

    .line 93
    iget-object v14, v13, Lcom/getcapacitor/UriMatcher;->mText:Ljava/lang/String;

    invoke-virtual {v9, v14}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v14

    if-eqz v14, :cond_5

    move-object v7, v13

    goto :goto_5

    :cond_5
    add-int/lit8 v12, v12, 0x1

    goto :goto_4

    :cond_6
    :goto_5
    if-ne v12, v11, :cond_a

    .line 100
    new-instance v10, Lcom/getcapacitor/UriMatcher;

    invoke-direct {v10}, Lcom/getcapacitor/UriMatcher;-><init>()V

    .line 101
    const-string v11, "*"

    if-ne v6, v8, :cond_7

    invoke-virtual {v9, v11}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v8

    if-eqz v8, :cond_7

    const/4 v8, 0x3

    .line 102
    iput v8, v10, Lcom/getcapacitor/UriMatcher;->mWhich:I

    goto :goto_6

    .line 103
    :cond_7
    const-string v8, "**"

    invoke-virtual {v9, v8}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v8

    if-eqz v8, :cond_8

    const/4 v8, 0x2

    .line 104
    iput v8, v10, Lcom/getcapacitor/UriMatcher;->mWhich:I

    goto :goto_6

    .line 105
    :cond_8
    invoke-virtual {v9, v11}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v8

    if-eqz v8, :cond_9

    .line 106
    iput v2, v10, Lcom/getcapacitor/UriMatcher;->mWhich:I

    goto :goto_6

    .line 108
    :cond_9
    iput v3, v10, Lcom/getcapacitor/UriMatcher;->mWhich:I

    .line 110
    :goto_6
    iput-object v9, v10, Lcom/getcapacitor/UriMatcher;->mText:Ljava/lang/String;

    .line 111
    iget-object v7, v7, Lcom/getcapacitor/UriMatcher;->mChildren:Ljava/util/ArrayList;

    invoke-virtual {v7, v10}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    move-object v7, v10

    :cond_a
    add-int/lit8 v6, v6, 0x1

    goto :goto_2

    .line 115
    :cond_b
    iput-object v1, v7, Lcom/getcapacitor/UriMatcher;->mCode:Ljava/lang/Object;

    return-void

    .line 64
    :cond_c
    new-instance v0, Ljava/lang/IllegalArgumentException;

    const-string v1, "Code can\'t be null"

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public match(Landroid/net/Uri;)Ljava/lang/Object;
    .locals 13

    .line 128
    invoke-virtual {p1}, Landroid/net/Uri;->getPathSegments()Ljava/util/List;

    move-result-object v0

    .line 129
    invoke-interface {v0}, Ljava/util/List;->size()I

    move-result v1

    if-nez v1, :cond_0

    .line 133
    invoke-virtual {p1}, Landroid/net/Uri;->getAuthority()Ljava/lang/String;

    move-result-object v2

    if-nez v2, :cond_0

    .line 134
    iget-object p1, p0, Lcom/getcapacitor/UriMatcher;->mCode:Ljava/lang/Object;

    return-object p1

    :cond_0
    const/4 v2, -0x2

    move-object v4, p0

    move v3, v2

    :goto_0
    if-ge v3, v1, :cond_c

    if-ne v3, v2, :cond_1

    .line 140
    invoke-virtual {p1}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v5

    goto :goto_1

    :cond_1
    const/4 v5, -0x1

    if-ne v3, v5, :cond_2

    .line 142
    invoke-virtual {p1}, Landroid/net/Uri;->getAuthority()Ljava/lang/String;

    move-result-object v5

    goto :goto_1

    .line 144
    :cond_2
    invoke-interface {v0, v3}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Ljava/lang/String;

    .line 145
    :goto_1
    iget-object v6, v4, Lcom/getcapacitor/UriMatcher;->mChildren:Ljava/util/ArrayList;

    if-nez v6, :cond_3

    goto :goto_6

    .line 150
    :cond_3
    invoke-virtual {v6}, Ljava/util/ArrayList;->size()I

    move-result v4

    const/4 v7, 0x0

    const/4 v8, 0x0

    move-object v9, v7

    :goto_2
    if-ge v8, v4, :cond_a

    .line 152
    invoke-virtual {v6, v8}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v10

    check-cast v10, Lcom/getcapacitor/UriMatcher;

    .line 154
    iget v11, v10, Lcom/getcapacitor/UriMatcher;->mWhich:I

    if-eqz v11, :cond_6

    const/4 v12, 0x1

    if-eq v11, v12, :cond_7

    const/4 v12, 0x2

    if-eq v11, v12, :cond_5

    const/4 v12, 0x3

    if-eq v11, v12, :cond_4

    goto :goto_4

    .line 156
    :cond_4
    iget-object v11, v10, Lcom/getcapacitor/UriMatcher;->mText:Ljava/lang/String;

    invoke-static {v11}, Lcom/getcapacitor/util/HostMask$Parser;->parse(Ljava/lang/String;)Lcom/getcapacitor/util/HostMask;

    move-result-object v11

    invoke-interface {v11, v5}, Lcom/getcapacitor/util/HostMask;->matches(Ljava/lang/String;)Z

    move-result v11

    if-eqz v11, :cond_8

    goto :goto_3

    .line 169
    :cond_5
    iget-object p1, v10, Lcom/getcapacitor/UriMatcher;->mCode:Ljava/lang/Object;

    return-object p1

    .line 161
    :cond_6
    iget-object v11, v10, Lcom/getcapacitor/UriMatcher;->mText:Ljava/lang/String;

    invoke-virtual {v11, v5}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v11

    if-eqz v11, :cond_8

    :cond_7
    :goto_3
    move-object v9, v10

    :cond_8
    :goto_4
    if-eqz v9, :cond_9

    goto :goto_5

    :cond_9
    add-int/lit8 v8, v8, 0x1

    goto :goto_2

    :cond_a
    :goto_5
    move-object v4, v9

    if-nez v4, :cond_b

    return-object v7

    :cond_b
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 180
    :cond_c
    :goto_6
    iget-object p1, v4, Lcom/getcapacitor/UriMatcher;->mCode:Ljava/lang/Object;

    return-object p1
.end method
