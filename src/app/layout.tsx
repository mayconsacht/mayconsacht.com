import { BasePage } from 'components/BasePage/BasePage';
import { Providers } from './providers';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

import 'styles/fonts.css';
import 'styles/global.css';
import 'styles/base.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='/img/favicon.ico' />
        <link rel='apple-touch-icon' href='/img/favicon.ico' />
      </head>
      <body>
        <main>
          <DefaultSeo {...SEO} />
          <Providers>
            <BasePage>{children}</BasePage>
          </Providers>
        </main>
      </body>
    </html>
  );
}