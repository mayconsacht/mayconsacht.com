import Post from 'components/Post/Post';
import { Post as PostType } from 'components/Post/types';
import { getAllPosts } from 'lib/api';

export default function BlogList() {
  const posts = getAllPosts().filter((post) => post !== null) as PostType[];
  return (
    <>
      {posts.map((post, i) => (
        <Post
          key={i}
          slug={post?.slug}
          title={post?.frontmatter.title}
          date={post?.frontmatter.date}
          description={post?.frontmatter.description}
        />
      ))}
    </>
  );
}
