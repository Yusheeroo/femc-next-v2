import { Button } from '@/components/shared/button/Button';
import s from './FooterTop.module.scss';

/** Компонент действий пользователя */
export const FooterTop = () => {
  return (
    <div className={s.footerTop}>
      <Button route='/celedia'>Celedia</Button>
      <Button route='/pawhera'>Pawhera</Button>
      <Button route='/wensar'>Wensar</Button>
    </div>
  );
}; 