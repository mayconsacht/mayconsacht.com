import { ContactLinks } from './ContactLinks';
import styles from './Footer.module.sass';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <span>Maycon Sacht © 2024</span>
      <ContactLinks />
    </footer>
  );
};
