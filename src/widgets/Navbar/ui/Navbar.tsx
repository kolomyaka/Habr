import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "feature/ThemeSwitcher";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(cls.navbar)}>
          <div className={cls.links}>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                  Главная
              </AppLink>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                  О сайте
              </AppLink>
          </div>
        </div>
    );
};


