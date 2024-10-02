'use client';

import Link from 'next/link';
import styles from './Menu.module.css';
import { usePathname } from 'next/navigation';

export const Menu = () => {
  const pathname = usePathname();
  function renderLink(path: string, displayName: string, label: string) {
    return (
      <li className={styles.colunm}>
        <Link
          href={path}
          className={`${styles.item} ${pathname === path ? styles.active : ''}`}
          aria-label={label}
        >
          {displayName}
        </Link>
      </li>
    );
  }
  return (
    <header className={styles.header}>
      <div className={styles.wrapper} aria-label='Main navigation'>
        <Link href='/' className={styles.me}>
          MAYCON SACHT
        </Link>
        <ul className={styles.items}>
          {renderLink('/', 'Home', 'Home page')}
          {renderLink('/about', 'About', 'About page')}
          {renderLink('/projects', 'Projects', 'Projects page')}
          {renderLink('/blog', 'Blog', 'Blog page')}
        </ul>
      </div>
    </header>
  );
};
