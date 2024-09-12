import matter from 'gray-matter';
import { join } from 'path';
import fs from 'fs';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

interface Frontmatter {
  date: string;
  title: string;
  description: string;
}

interface Post {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

const postsDirectory = join(process.cwd(), 'posts');

export function getPostBySlug(slug: string | undefined): Post | null {
  if (!slug) return null;

  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  if (!data.date || !data.title || !data.description) {
    return null;
  }

  const formattedDate = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt,
  });

  return {
    slug: realSlug,
    frontmatter: {
      ...data,
      date: formattedDate,
    },
    content,
  } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) =>
      new Date(post1.frontmatter.date) > new Date(post2.frontmatter.date)
        ? -1
        : 1
    );

  return posts;
}
