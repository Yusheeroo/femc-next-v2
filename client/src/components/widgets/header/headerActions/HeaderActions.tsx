import s from './headerActions.module.scss';
import { UserRound } from 'lucide-react';

/** Компонент действий пользователя */
export const HeaderActions = () => {
  return (
    <div className={s.actions}>
      <button className={s.button}>
        <UserRound strokeWidth={2} size={26} />
      </button>
    </div>
  );
}; 