import { ContactLinks } from './ContactLinks';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <ContactLinks />
    </footer>
  );
};
