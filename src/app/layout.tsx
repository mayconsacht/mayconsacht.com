import type { Metadata } from 'next';
import { BasePage } from 'components/BasePage/BasePage';

import 'styles/fonts.css';
import 'styles/global.css';

export const metadata: Metadata = {
  title: 'Maycon Sacht',
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
          <BasePage>{children}</BasePage>
        </main>
      </body>
    </html>
  );
}
