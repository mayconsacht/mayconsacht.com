import html from 'remark-html';
import headings from 'remark-autolink-headings';
import slug from 'remark-slug';
import remarkOembed from 'remark-oembed';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(html as any)
    .use(slug as any)
    .process(markdown);

  return result.toString();
}
