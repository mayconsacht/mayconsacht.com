import { Post } from 'components/Post/types';
import Link from 'next/link';

import styles from './BlogPost.module.css';

type Props = {
  post: Post | null;
  content: string;
  nextPost: Post | null;
  prevPost: Post | null;
};

const BlogPost = ({ post, content }: Props) => {
  return (
    <>
      <div className={styles.header}>
        <Link href='/blog' passHref>
          <span className={styles.back}>← Back to list</span>
        </Link>

        <span className={styles.date}>{post?.frontmatter.date}</span>

        <h1 className={styles.title}>{post?.frontmatter.title}</h1>
        <span className={styles.description}>
          {post?.frontmatter.description}
        </span>
      </div>
      <div className={styles.main}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
};

export default BlogPost;
