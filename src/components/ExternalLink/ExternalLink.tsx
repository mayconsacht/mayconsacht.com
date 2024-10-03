import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './ExternalLink.module.sass';

type Props = {
  href: string;
  arialLabel: string;
  children: ReactNode;
};

export const ExternalLink = ({ href, arialLabel, children }: Props) => (
  <Link
    href={href}
    className={styles.link}
    aria-label={arialLabel}
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </Link>
);
