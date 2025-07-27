'use client'

import s from './RootLayout.module.scss';
import { Header } from '@/components/widgets/header/Header';
import { Footer } from '@/components/widgets/footer/Footer';  
import { FC, PropsWithChildren } from 'react';

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.children}>{children}</main>
      <Footer />
    </div>
  );
};
