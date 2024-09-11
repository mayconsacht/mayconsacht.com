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
          Maybe you are interested in seeing some of my work. Unfortunately, I
          have always worked on private projects, but you can check out a few
          things on my{' '}
          <Link
            href='https://github.com/mayconsacht'
            className={styles.link}
            aria-label='Unsplash'
            target='_blank'
            rel='noopener noreferrer'
            passHref
          >
            Github
          </Link>
          , and to assist you, I can show you the most interesting ones below.
        </p>

        <div className={styles.projects}>
          <ProjectCard
            title='Dogs'
            description='A simple social media platform for dogs.'
            tags={['Node.js', 'React', 'Next.js']}
            gitUrl='https://github.com/mayconsacht/dogs'
            siteUrl='https://dogs.mayconsacht.com/'
          />
          <ProjectCard
            title='Dogs'
            description='A simple social media platform for dogs.'
            tags={['Node.js', 'React', 'Next.js']}
            gitUrl='https://github.com/mayconsacht/dogs'
            siteUrl='https://dogs.mayconsacht.com/'
          />
          <ProjectCard
            title='Dogs'
            description='A simple social media platform for dogs.'
            tags={['Node.js', 'React', 'Next.js']}
            gitUrl='https://github.com/mayconsacht/dogs'
            siteUrl='https://dogs.mayconsacht.com/'
          />
        </div>

        <h1>About this site </h1>
        <p>
          Besides technology, which I&apos;ve been passionate about since I
          first saw a computer in the 2000s, I also view surfing as both therapy
          and a philosophy of life. Like technology, anyone who surfs will agree
          that it&apos;s a school for life, requiring continuous learning and
          practice. No matter how much you do, there will always be room for
          improvement.
        </p>
      </div>
    </>
  );
}
