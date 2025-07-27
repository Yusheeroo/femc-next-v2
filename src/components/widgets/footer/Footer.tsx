import s from './Footer.module.scss';
import { Container } from '@/components/shared/container/Container';

/** Компонент футера */
export const Footer = () => {
  return (
    <Container>
      <header className={s.wrapper}>
        <div className={s.title}>FOOTER</div>
      </header>
    </Container>
  );
};
