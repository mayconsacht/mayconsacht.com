import slug from 'rehype-slug';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import headings from 'rehype-autolink-headings';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(slug)
    .use(headings, {
      behavior: 'wrap',
      properties: { className: 'anchor' },
    })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
