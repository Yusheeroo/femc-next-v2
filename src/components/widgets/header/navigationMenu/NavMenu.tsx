import s from './NavMenu.module.scss';
import { CustomLink } from '@/components/shared/customLink/CustomLink';
import Link from 'next/link';


/** Компонент меню навигации */
export const NavMenu = () => {
  return (
    <div className={s.menu}>
      <div className={s.linksButton}>
        <Link href="/servers" className={`${s.linkButton} ${s.linkButtonLeft}`}>Сервера</Link>
        <Link href="/fame" className={s.linkButton}>Новости</Link>
        <Link href="/team" className={s.linkButton}>Команда</Link>
        <Link href="/plans" className={s.linkButton}>Планы</Link>
        <Link href="/fame" className={s.linkButton}>Аллея славы</Link>
        <Link href="/chat" className={`${s.linkButton} ${s.linkButtonRight}`}>Чат</Link>
      </div>
    </div>
  );
}; 