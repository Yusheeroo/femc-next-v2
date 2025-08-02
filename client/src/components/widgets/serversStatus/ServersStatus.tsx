import s from './ServersStatus.module.scss';
import { Container } from '@/components/shared/container/Container';
import { CustomLink } from '@/components/shared/customLink/CustomLink';

/** Компонент статуса серверов */
export const ServersStatus = () => {
  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.content}>
          <div className={s.serverBlock}>
            <div className={s.title}>CELEDIA</div>
          </div>
          <div className={s.serverBlock}>
            <div className={s.title}>PAWHERA</div>
          </div>
          <div className={s.serverBlock}>
            <div className={s.title}>WENSAR</div>
          </div>
        </div>
      </Container>
    </div>
  );
};
