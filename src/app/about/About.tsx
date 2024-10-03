import BackToTopButton from 'components/BackToTopButton/BackToTopButton';
import { ExternalLink } from 'components/ExternalLink/ExternalLink';

import styles from './About.module.sass';

export default function About() {
  return (
    <>
      <h1>About me</h1>
      <div className={styles.sheet}>
        <p>
          I remember my first experience with programming back in 2008, when I
          was 14 years old. My clan in a game (
          <ExternalLink
            href='https://en.wikipedia.org/wiki/Gunbound'
            arialLabel='Gunbound'
          >
            Gunbound
          </ExternalLink>
          ) needed a website, and I confidently volunteered to build it{' '}
          <span className={styles.strikethrough}>
            —despite having no idea what HTML was at the time!
          </span>
          . Sadly, it&apos;s no longer online, but from that moment on, I knew
          exactly what I wanted to do with my life.
        </p>
        <p>
          I started my bachelor&apos;s degree in Information Systems in 2012 &
          I&apos;ve worked for major companies like{' '}
          <ExternalLink href='https://en.totvs.com/' arialLabel='TOTVS'>
            TOTVS
          </ExternalLink>
          , the largest software multinational in Latin America, where I built
          several SaaS platforms from the ground up, often bouncing between
          backend and frontend roles. Lately, though, I&apos;ve found myself
          leaning more towards backend development - it&apos;s just where I feel
          most at home!
        </p>
        <p>
          But I don&apos;t spend all my time coding! I&apos;m also a passionate
          surfer since 2015. While I&apos;m currently based in Brazil, I spent
          the last two years living in Australia, home to some of the most
          amazing waves in the world. Like technology, surfing is a lifelong
          journey that requires constant practice and improvement. No matter how
          far you get, there&apos;s always room to learn and grow.
        </p>
        <p>
          I also enjoy gaming, though I wouldn&apos;t call myself a hardcore
          gamer. Furthermore, I like taking amateur photos with my iPhone.
          They&apos;re not professional or spectacular, but if you&apos;d like,
          you can take a look at my{' '}
          <ExternalLink
            href='https://unsplash.com/@mayconsacht'
            arialLabel='Unsplash'
          >
            Unsplash
          </ExternalLink>
          .
        </p>
      </div>

      <h1 className={styles.title}>About this site</h1>
      <div className={styles.sheet}>
        <p>
          It&apos;s been a long time since I&apos;m thinking about creating a
          personal website to serve as a blog for sharing posts about technology
          & my life. My decision here was to &apos;keep it simple&apos;, a
          principle famously articulated by{' '}
          <ExternalLink
            href='https://en.wikipedia.org/wiki/Kelly_Johnson_(engineer)'
            arialLabel='Kelly Johnson'
          >
            Kelly Johnson
          </ExternalLink>
          .
        </p>
        <p>
          I chose to use the{' '}
          <ExternalLink
            href='https://fonts.google.com/specimen/Inconsolata'
            arialLabel='Inconsolata font'
          >
            Inconsolata
          </ExternalLink>{' '}
          font. I&apos;ve always liked this font for coding—it&apos;s a
          monospace that&apos;s easy to read. Just as architectural decisions
          can limit the design of an application, choosing Inconsolata almost
          forced me to develop a really square, retro-style layout & I ended up
          really liking it!
        </p>
      </div>
      <BackToTopButton />
    </>
  );
}
