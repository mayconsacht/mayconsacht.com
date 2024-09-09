import styles from './BasePage.module.css';

type Props = {
  children?: React.ReactNode;
};

export const BasePage = ({ children }: Props) => {
  return <section className={styles.container}>{children}</section>;
};
