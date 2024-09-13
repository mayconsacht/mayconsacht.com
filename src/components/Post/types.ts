export type Frontmatter = {
  date: string;
  title: string;
  description: string;
};

export type Post = {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
};
