package androidx.appcompat.view.menu;

import androidx.appcompat.view.menu.MenuPresenter;
interface MenuHelper {
    void dismiss();

    void setPresenterCallback(MenuPresenter.Callback callback);
}

