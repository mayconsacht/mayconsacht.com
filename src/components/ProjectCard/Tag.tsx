import styles from './Tag.module.css';

type Props = {
  description: string;
};

export const Tag = ({ description }: Props) => {
  return <span className={styles.wrapper}>{description}</span>;
};
