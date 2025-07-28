import { Button } from '@/components/shared/button/Button';
import s from './headerMenu.module.scss';
import Link from 'next/link';


/** Компонент меню навигации */
export const HeaderMenu = () => {
  return (
    <div className={s.menu}>
      <div className={s.links}>
        <Button type='primary' route='/servers'>Сервера</Button>
        <Link href="/fame" className={s.link}>Новости</Link>
        <Link href="/team" className={s.link}>Команда</Link>
        <Link href="/plans" className={s.link}>Планы</Link>
        <Link href="/fame" className={s.link}>Аллея славы</Link>
        <Link href="/chat" className={s.link}>Чат</Link>
      </div>
    </div>
  );
}; 