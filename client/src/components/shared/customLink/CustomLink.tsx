import s from './CustomLink.module.scss';
import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

type CustomLinkProps = {
  className?: string;
  isSecondary?: boolean;
} & PropsWithChildren<LinkProps>;

export const CustomLink: FC<CustomLinkProps> = ({ isSecondary, className, ...rest }) => {
  return <Link className={clsx(s.link, isSecondary && s.isSecondary, className)} {...rest} />;
};
