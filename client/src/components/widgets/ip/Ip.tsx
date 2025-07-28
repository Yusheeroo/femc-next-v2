import s from './ip.module.scss'
import { IpPanel } from './ipPanel/IpPanel';

/** Компонент Панели с IP */
export const Ip = () => {
    return (
        <div className={s.ip}>
            <IpPanel />
        </div>
    );
};
