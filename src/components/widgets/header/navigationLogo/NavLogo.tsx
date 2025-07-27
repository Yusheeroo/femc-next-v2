'use client'

import s from './NavLogo.module.scss';
import Image from 'next/image';

/** Компонент логотипа */
export const NavLogo = () => {
  return (
    <a href="/" className={s.logo}>
      <Image src={'/images/femc_logo.png'} width={144} height={52} alt='main logo' />
    </a>
  );
}; 