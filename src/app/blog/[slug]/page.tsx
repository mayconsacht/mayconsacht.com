import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts, getPostBySlug } from 'lib/api';
import markdownToHtml from 'lib/markdownToHtml';
import { Post } from 'components/Post/types';
import BlogPost from '../BlogPost';

interface Props {
  params: {
    post: Post;
    content: string;
    nextPost: Post | null;
    prevPost: Post | null;
  };
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post?.content || '');

  const allPosts = getAllPosts();
  const currentPostIndex = allPosts.findIndex((p) => p.slug === params.slug);
  const nextPost = allPosts[currentPostIndex - 1] ?? null;
  const prevPost = allPosts[currentPostIndex + 1] ?? null;
  return (
    <BlogPost
      post={post}
      content={content}
      nextPost={nextPost}
      prevPost={prevPost}
    />
  );
};

type StaticProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams({ params: { slug } }: StaticProps) {
  console.log('execute it brow');
  const post = getPostBySlug(slug);
  const content = await markdownToHtml(post?.content || '');

  const allPosts = getAllPosts();
  const currentPostIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost = allPosts[currentPostIndex - 1] ?? null;
  const prevPost = allPosts[currentPostIndex + 1] ?? null;
  console.log('working');
  return {
    params: {
      post,
      content,
      nextPost,
      prevPost,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
