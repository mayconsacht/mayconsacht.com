import { Footer } from 'components/Footer/Footer';
import { Menu } from 'components/Menu/Menu';
import styles from './BasePage.module.css';

type Props = {
  children?: React.ReactNode;
};

export const BasePage = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Menu />
      <section className={styles.section}>{children}</section>
      <Footer />
    </div>
  );
};
