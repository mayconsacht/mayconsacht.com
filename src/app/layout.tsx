import type { Metadata } from 'next';
import { BasePage } from 'components/BasePage/BasePage';
import { Providers } from './providers';

import 'styles/fonts.sass';
import 'styles/global.sass';
import 'styles/base.sass';

export const metadata: Metadata = {
  title: 'Maycon Sacht | Software Enginner',
  description:
    'This is where I live on the internet. Here you can find out more about my personal and professional life.',
};

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
          <Providers>
            <BasePage>{children}</BasePage>
          </Providers>
        </main>
      </body>
    </html>
  );
}
