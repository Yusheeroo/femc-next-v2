import s from './Header.module.scss';
import { Container } from '@/components/shared/container/Container';
import { Navigation } from './navigation/Navigation';

/** Компонент хедера */
export const Header = () => {
  return (
    <div className={s.wrapper}>
      <Container>
        <header className={s.content}>
          <Navigation />
        </header>
      </Container>
    </div>
  );
};
