import { Button } from '@/components/shared/button/Button';
import s from './NavMenu.module.scss';


/** Компонент меню навигации */
export const NavMenu = () => {
  return (
    <div className={s.menu}>
      <Button type={'primary'}>
        Сервера
      </Button>

      <div className={s.menuLinks}>
        <a href="/plans" className={s.menuLink}>Планы</a>
        <a href="/chat" className={s.menuLink}>Чат</a>
        <a href="/team" className={s.menuLink}>Команда</a>
        <a href="/fame" className={s.menuLink}>Аллея славы</a>
      </div>
    </div>
  );
}; 