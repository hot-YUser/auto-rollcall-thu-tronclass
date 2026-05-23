package androidx.room;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
@Target({})
@Retention(RetentionPolicy.CLASS)
public @interface Junction {
    String entityColumn() default "";

    String parentColumn() default "";

    Class<?> value();
}

