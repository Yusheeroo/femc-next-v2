import s from './Footer.module.scss';
import { Container } from '@/components/shared/container/Container';
import { FooterTop } from './footerTop/FooterTop';
import { FooterBottom } from './footerBottom/FooterBottom';

/** Компонент футера */
export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <Container>
        <footer className={s.footer}>
          <FooterTop />
          <FooterBottom />
        </footer>
      </Container>
    </div>
  );
};
