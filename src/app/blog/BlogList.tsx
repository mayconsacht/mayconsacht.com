import Post from 'components/Post/Post';
import { getAllPosts } from 'lib/api';

interface Post {
  slug: string;
  frontmatter: {
    date: string;
    title: string;
    description: string;
  };
  content: string;
}

export default function BlogList() {
  const posts = getAllPosts().filter((post) => post !== null) as Post[];
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
