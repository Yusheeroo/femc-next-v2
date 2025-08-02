import s from './headerMenu.module.scss';
import Link from 'next/link';
import { Routes } from '@/app/config/routes';


/** Компонент меню навигации */
export const HeaderMenu = () => {
  return (
    <div className={s.menu}>
      <div className={s.buttons}>
        <Link href={Routes.SERVERS} className={s.linkButton}>Сервера</Link>
        <Link href={Routes.CHAT} className={s.linkButton}>Чат</Link>
      </div>

      <div className={s.links}>
        <Link href={Routes.NEWS} className={s.link}>Новости</Link>
        <Link href={Routes.FAME} className={s.link}>Аллея славы</Link>
        <Link href={Routes.ABOUT} className={s.link}>О комплексе</Link>
        <Link href={Routes.CONNECTION} className={s.link}>Подключение</Link>
      </div>
    </div>
  );
}; 