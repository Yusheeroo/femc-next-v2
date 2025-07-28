'use client'

import s from './headerLogo.module.scss';
import Image from 'next/image';

/** Компонент логотипа */
export const HeaderLogo = () => {
  return (
    <a href="/" className={s.logo}>
      <Image src={'/images/femc_logo.png'} width={144} height={52} alt='main logo' />
    </a>
  );
}; 