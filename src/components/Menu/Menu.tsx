import Link from 'next/link';
import styles from './Menu.module.css';

export const Menu = () => {
  function renderLink(path: string, displayName: string, label: string) {
    return (
      <li>
        <Link href={path} className={styles.item} aria-label={label}>
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
          {renderLink('/about', 'About', 'About page')}
          {renderLink('/projects', 'Projects', 'Projects page')}
        </ul>
      </div>
    </header>
  );
};
