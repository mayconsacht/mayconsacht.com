import Link from 'next/link';
import styles from './Home.module.sass';

export default function Home() {
  return (
    <>
      <h1>A bit about this... </h1>
      <div className={styles.sheet}>
        <p>
          Firstly, <span className={styles.strikethrough}>hello world!</span> My
          name is Maycon Sacht & this is where I live on the internet.
        </p>
        <p>
          I&apos;m a software engineer currently living in the real world in
          Santa Catarina, Brazil, where lately I&apos;ve been mostly coding in
          .NET Core & Javascript frameworks like Angular & Next.js{' '}
          <span className={styles.strikethrough}>
            (the way I&apos;m coding this digital home)
          </span>
          .{' '}
          <Link
            href='/about'
            className={styles.link}
            aria-label='Read abou me and this site'
          >
            Read more about me and this site...
          </Link>
        </p>
        <p>
          At this point, I primarily use this site to write about technology,
          travel, and my personal life.{' '}
          <Link
            href='/blog'
            className={styles.link}
            aria-label='Read about blog'
          >
            You can spy on this...
          </Link>
        </p>
        <p>I hope you enjoy!</p>
      </div>
    </>
  );
}
