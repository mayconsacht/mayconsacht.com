import { ContactLinks } from 'components/ContactLinks/ContactLinks';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <ContactLinks />
    </footer>
  );
};
