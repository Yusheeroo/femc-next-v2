import s from './Button.module.scss';
import { FC, PropsWithChildren, MouseEvent } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

type ButtonProps = PropsWithChildren<{
  className?: string;
  htmlType?: 'submit' | 'button';
  type?: 'primary' | 'default';
  size?: 'middle';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  route?: string; // новый пропс для редиректа
}>;

export const Button: FC<ButtonProps> = (props) => {
  const { htmlType = 'button', type = 'default', size = 'middle', className, children, route, ...rest } = props;

  if (route) {
    return (
      <Link href={route} className={clsx(s.wrapper, s[type], s[size], className)} {...rest}>
        <span className={s.content}>{children}</span>
      </Link>
    );
  }

  return (
    <button className={clsx(s.wrapper, s[type], s[size], className)} type={htmlType} {...rest}>
      <span className={s.content}>{children}</span>
    </button>
  );
};
