import s from './NavActions.module.scss';

/** Компонент действий пользователя */
export const NavActions = () => {
  return (
    <div className={s.actions}>
      <button className={s.actionButton} title="Избранное">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path 
            d="M10 17.5L8.5 16.1C4.6 12.6 2 10.2 2 7.3C2 4.9 3.9 3 6.3 3C7.6 3 8.9 3.5 9.8 4.4L10 4.6L10.2 4.4C11.1 3.5 12.4 3 13.7 3C16.1 3 18 4.9 18 7.3C18 10.2 15.4 12.6 11.5 16.1L10 17.5Z" 
            stroke="#B0B0B0" 
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </button>
      
      <button className={s.actionButton} title="Профиль">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="6" r="3" stroke="#B0B0B0" strokeWidth="1.5" fill="none"/>
          <path 
            d="M3 17C3 13.1 6.1 10 10 10C13.9 10 17 13.1 17 17" 
            stroke="#B0B0B0" 
            strokeWidth="1.5" 
            fill="none"
          />
        </svg>
      </button>
      
      <button className={s.actionButton} title="Корзина">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path 
            d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 17.6 16.6 18 16 18H8C7.4 18 7 17.6 7 17V13H17Z" 
            stroke="#B0B0B0" 
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </button>
    </div>
  );
}; 