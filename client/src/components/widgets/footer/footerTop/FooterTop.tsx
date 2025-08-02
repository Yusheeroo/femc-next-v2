import s from './FooterTop.module.scss';
import { footerMock } from '../mock';
import { MapPin } from 'lucide-react';

/** Компонент действий пользователя */
export const FooterTop = () => {
  return (
    <div className={s.footerTop}>
      <div className={s.innerTop}>
        <h2 className={s.title}>{footerMock.title}</h2>
        <div className={s.location}>
          <MapPin size={28} />
          <span>{footerMock.location}</span>
        </div>
      </div>
      <div className={s.innerBottom}>
        {footerMock.socials.map((social) => (
          <a
            key={social.title}
            href={social.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={s.social}
          >
            {social.title}
          </a>
        ))}
      </div>
    </div>
  );
}; 