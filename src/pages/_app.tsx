import type { AppProps } from 'next/app';
import NextHead from 'next/head';

import 'styles/fonts.css';
import 'styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead>
        <link rel='shortcut icon' href='/img/favicon.ico' />
        <link rel='apple-touch-icon' href='/img/favicon.ico' />
      </NextHead>
      <Component {...pageProps} />
    </>
  );
}
