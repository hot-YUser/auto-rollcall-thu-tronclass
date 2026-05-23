package androidx.room;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
@Retention(RetentionPolicy.CLASS)
public @interface Update {
    Class<?> entity() default Object.class;

    int onConflict() default 3;
}

