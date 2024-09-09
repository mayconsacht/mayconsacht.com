import Link from 'next/link';
import styles from './Home.module.css';

export const Home = () => (
  <>
    <h1>A bit about this... </h1>
    <div className={styles.sheet}>
      <p>
        Firstly, <span className={styles.strikethrough}>Hello world!</span> My
        name is Maycon Sacht & this is where I live on the internet.
      </p>
      <p>
        I&apos;m a software engineer living in the real world in Santa Catarina,
        Brazil, where lately I&apos;ve been mostly coding in .NET Framework &
        Javascript frameworks like Angular & NextJS{' '}
        <span className={styles.strikethrough}>
          (the way I&apos;m coding my digital home)
        </span>
        .{' '}
        <Link href='/about' className={styles.link} aria-label='Read more'>
          Read more about me and this site...
        </Link>
      </p>
      <p>
        At this point, I primaly use this site for writing about tecnologies,
        trips & personal life.{' '}
        <Link
          href='/blog'
          className={styles.link}
          aria-label='Read about this...'
        >
          Read more about this...
        </Link>
      </p>
    </div>
  </>
);
