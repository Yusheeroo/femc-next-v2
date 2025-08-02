import s from './FooterBottom.module.scss';
import Image from 'next/image';
import { footerMock } from '../mock';

/** Компонент действий пользователя */
export const FooterBottom = () => {
  return (
    <>
      <div className={s.footerBottom}>
        <Image src={'/images/femc_logo.png'} width={145} height={52} alt='Лого в футере'/>
        <span>{footerMock.bottomText}</span>
      </div>
      <span className={s.rules}>{footerMock.rules}</span>
    </>
  );
}; 