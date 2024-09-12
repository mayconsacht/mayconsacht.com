import { ProjectCard } from 'components/ProjectCard/ProjectCard';
import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <h1>About me </h1>
      <div className={styles.sheet}>
        <p>
          I don&apos;t want to sound formal or make this feel like a resume.{' '}
          <span className={styles.strikethrough}>
            I even thought about writing this section with bullet points,
          </span>{' '}
          but I&apos;ll stick with the usual format and write some paragraphs.
          =)
        </p>
        <p>
          If you&apos;re looking for something more professional, I&apos;ll
          include links to some of my projects below. Alternatively, if
          you&apos;re more interested in my work experience, feel free to visit
          my{' '}
          <Link
            href='https://www.linkedin.com/in/maycon-sacht/'
            className={styles.link}
            aria-label='Linkedin'
            target='_blank'
            rel='noopener noreferrer'
            passHref
          >
            Linkedin
          </Link>{' '}
          <span className={styles.strikethrough}>
            (though I&apos;m not a big fan of it either)
          </span>
          .
        </p>
        <p>
          Besides technology, which I&apos;ve been passionate about since I
          first saw a computer, I also view surfing as both therapy & a
          philosophy of life. Like technology, anyone who surfs will agree that
          it&apos;s a school for life, requiring continuous learning & practice.
          No matter how much you do, there will always be room for improvement.
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
          I started my Bachelor&apos;s degree in Information Systems in 2012,
          and I&apos;ve been writing code for over 10 years. When it comes to my
          professional life, you might be interested in seeing some of my work.
          Although most of my projects have been private, you can check out a
          few examples on my{' '}
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
          It&apos;s been a long time since I&apos;m thinking about creating a
          personal website to serve as a blog for sharing posts about technology
          & my life. My decision here was to &apos;keep it simple&apos;, a
          principle famously articulated by{' '}
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
          forced me to develop a really square, retro-style layout & I ended up
          really liking it!
        </p>
      </div>
    </>
  );
}
