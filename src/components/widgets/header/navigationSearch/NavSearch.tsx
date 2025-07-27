import s from './NavSearch.module.scss';

/** Компонент поиска */
export const NavSearch = () => {
  return (
    <div className={s.search}>
      <div className={s.searchInputWrapper}>
        <input 
          type="text" 
          placeholder="Поиск" 
          className={s.searchInput}
        />
        <button className={s.searchButton}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path 
              d="M7.5 13C10.5376 13 13 10.5376 13 7.5C13 4.46243 10.5376 2 7.5 2C4.46243 2 2 4.46243 2 7.5C2 10.5376 4.46243 13 7.5 13Z" 
              stroke="#B0B0B0" 
              strokeWidth="1.5"
            />
            <path 
              d="M11.5 11.5L14 14" 
              stroke="#B0B0B0" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}; 