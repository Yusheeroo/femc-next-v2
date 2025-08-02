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
}>;

export const Button: FC<ButtonProps> = (props) => {
  const { htmlType = 'button', type = 'default', size = 'middle', className, children, ...rest } = props;

  return (
    <button className={clsx(s.wrapper, s[type], s[size], className)} type={htmlType} {...rest}>
      <span className={s.content}>{children}</span>
    </button>
  );
};
