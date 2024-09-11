import { ContactLinks } from './ContactLinks';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <span>Maycon Sacht © 2024</span>
      <ContactLinks />
    </footer>
  );
};
