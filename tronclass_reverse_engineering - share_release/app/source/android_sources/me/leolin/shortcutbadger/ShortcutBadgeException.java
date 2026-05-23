package me.leolin.shortcutbadger;
public class ShortcutBadgeException extends Exception {
    public ShortcutBadgeException(String str) {
        super(str);
    }

    public ShortcutBadgeException(String str, Exception exc) {
        super(str, exc);
    }
}

