import s from './Header.module.scss';
import { Container } from '@/components/shared/container/Container';
import { HeaderLogo } from './headerLogo/HeaderLogo';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { HeaderActions } from './headerActions/HeaderActions';


/** Компонент хедера */
export const Header = () => {
  return (
    <div className={s.wrapper}>
      <Container>
        <header className={s.content}>
        <nav className={s.navigation}>
          <HeaderLogo />
          <div className={s.navigationWrapper}>
            <HeaderMenu />
            <HeaderActions />
          </div>
        </nav>
        </header>
      </Container>
    </div>
  );
};
