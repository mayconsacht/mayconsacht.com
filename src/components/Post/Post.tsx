import Link from 'next/link';
import styles from './Post.module.sass';

type Props = {
  slug: string;
  date: string;
  title: string;
  description: string;
};

const Post = ({ slug, date, title, description }: Props) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className={styles.link}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.date}>{date}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
