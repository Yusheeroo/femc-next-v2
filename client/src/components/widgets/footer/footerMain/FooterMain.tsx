import s from './FooterMain.module.scss';

/** Компонент действий пользователя */
export const FooterMain = () => {
  return (
    <div className={s.footerMain}>
      <div className={s.grid}>
        <span>Новости</span>
        <span>Новости</span>
        <span>Новости</span>
        <span>Новости</span>
        <span>Новости</span>
        <span>Новости</span>
      </div>
    </div>
  );
}; 