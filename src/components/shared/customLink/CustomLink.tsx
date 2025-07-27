import s from './CustomLink.module.scss';
import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

type CustomLinkProps = {
  isAlert?: boolean;
  className?: string;
  isSemiBold?: boolean;
} & PropsWithChildren<LinkProps>;

export const CustomLink: FC<CustomLinkProps> = ({ isAlert, isSemiBold, className, ...rest }) => {
  return <Link className={clsx(s.link, isSemiBold && s.isSemibold, isAlert && s.isAlert, className)} {...rest} />;
};
