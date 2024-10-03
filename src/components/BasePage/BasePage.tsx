import { Footer } from 'components/Footer/Footer';
import { Menu } from 'components/Menu/Menu';
import styles from './BasePage.module.sass';

type Props = {
  children?: React.ReactNode;
};

export const BasePage = ({ children }: Props) => {
  return (
    <>
      <Menu />
      <div className={styles.container}>
        <section className={styles.section}>{children}</section>
        <Footer />
      </div>
    </>
  );
};
