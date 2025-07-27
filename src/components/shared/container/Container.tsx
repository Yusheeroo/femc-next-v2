import { FC, PropsWithChildren } from 'react';
import s from './Container.module.scss';
import clsx from 'clsx';

/** Пропсы контейнера */
type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

/** Основной контейнер для страницы (добавляет отступы слева и справа) */
export const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={clsx(s.wrapper, className)}>{children}</div>;
};
