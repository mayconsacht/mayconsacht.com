import { ProjectCard } from 'components/ProjectCard/ProjectCard';
import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <h1>About me </h1>
      <div className={styles.sheet}>
        <p>
          I don&apos;t want to sound formal at all,{' '}
          <span className={styles.strikethrough}>
            I even thought about writing this section with bullet points,
          </span>{' '}
          but I&apos;ll make an effort to create paragraphs.
        </p>
        <p>
          Besides technology, which I&apos;ve been passionate about since I
          first saw a computer in the 2000s, I also view surfing as both therapy
          and a philosophy of life. Like technology, anyone who surfs will agree
          that it&apos;s a school for life, requiring continuous learning and
          practice. No matter how much you do, there will always be room for
          improvement.
        </p>
        <p>
          I also enjoy taking amateur photos with my iPhone. They&apos;re not
          professional or spectacular, but if you&apos;d like, you can take a
          look at my{' '}
          <Link
            href='https://unsplash.com/@mayconsacht'
            className={styles.link}
            aria-label='Unsplash'
            target='_blank'
            rel='noopener noreferrer'
            passHref
          >
            Unsplash.
          </Link>
        </p>
        <p>
          You might be interested in seeing some of my work. Although most of my
          projects have been private, you can check out a few examples on my{' '}
          <Link
            href='https://github.com/mayconsacht'
            className={styles.link}
            aria-label='Unsplash'
            target='_blank'
            rel='noopener noreferrer'
            passHref
          >
            Github.
          </Link>{' '}
          To make it easier, I&apos;ve highlighted some of the most interesting
          ones below.
        </p>

        <div className={styles.projects}>
          <ProjectCard
            title='Dogs'
            description='A simple social media platform for dogs.'
            tags={['Node.js', 'React']}
            gitUrl='https://github.com/mayconsacht/dogs'
            siteUrl='https://dogs.mayconsacht.com/'
          />
          <ProjectCard
            title='This Website'
            description='Explore this website code.'
            tags={['React', 'Next.js']}
            gitUrl='https://github.com/mayconsacht/mayconsacht.com'
            siteUrl='https://www.mayconsacht.com/'
          />
          <ProjectCard
            title='Driver'
            description='A simple app for drivers and passengers.'
            tags={['.NET Core', 'Angular']}
            gitUrl='https://github.com/mayconsacht/dogs'
            siteUrl='https://dogs.mayconsacht.com/'
          />
        </div>
      </div>
      <h1>About this site </h1>
      <div className={styles.sheet}>
        <p>
          It&apos;s been a long time since I started thinking about creating a
          personal website to serve as a blog for publishing things about
          technology and my life. My decision here was to &apos;keep it
          simple&apos;, a principle famously articulated by{' '}
          <Link
            href='https://en.wikipedia.org/wiki/Kelly_Johnson_(engineer)'
            className={styles.link}
            aria-label='Kelly Johnson'
            target='_blank'
            rel='noopener noreferrer'
            passHref
          >
            Kelly Johnson.
          </Link>{' '}
        </p>
        <p>
          I chose to use the{' '}
          <Link
            href='https://fonts.google.com/specimen/Inconsolata'
            className={styles.link}
            aria-label='Inconsolata font'
            target='_blank'
            rel='noopener noreferrer'
            passHref
          >
            Insonsolata
          </Link>{' '}
          font. I&apos;ve always liked this font for coding—it&apos;s a
          monospace that&apos;s easy to read. Just as architectural decisions
          can limit the design of an application, choosing Inconsolata almost
          forced me to develop a really square, retro-style layout, and I ended
          up really liking it!
        </p>
      </div>
    </>
  );
}
