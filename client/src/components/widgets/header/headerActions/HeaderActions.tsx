import s from './headerActions.module.scss';
import { Copy } from 'lucide-react';

/** Компонент действий пользователя */
export const HeaderActions = () => {
  return (
    <div className={s.actions}>
      <button className={s.copy}>
        <span>femc.space</span>
        <Copy />
      </button>

      <button className={s.button}>
      </button>
    </div>
  );
}; 