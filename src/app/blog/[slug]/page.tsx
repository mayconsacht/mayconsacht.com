import { getAllPosts, getPostBySlug } from 'lib/api';
import markdownToHtml from 'lib/markdownToHtml';
import BlogPost from '../BlogPost';

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

export default Post;
