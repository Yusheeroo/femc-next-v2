import s from './Navigation.module.scss';
import { NavLogo } from '../navigationLogo/NavLogo';
import { NavMenu } from '../navigationMenu/NavMenu';
import { NavSearch } from '../navigationSearch/NavSearch';
import { NavActions } from '../navigationActions/NavActions';

/** Компонент навигации */
export const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <NavLogo />
      <NavMenu />
      <NavSearch />
      <NavActions />
    </nav>
  );
}; 