import styles from './Tag.module.sass';

type Props = {
  description: string;
};

export const Tag = ({ description }: Props) => {
  return <span className={styles.wrapper}>{description}</span>;
};
