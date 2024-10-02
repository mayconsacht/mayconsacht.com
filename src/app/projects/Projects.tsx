import BackToTopButton from 'components/BackToTopButton/BackToTopButton';
import { ExternalLink } from 'components/ExternalLink/ExternalLink';
import { ProjectCard } from 'components/ProjectCard/ProjectCard';
import Link from 'next/link';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <>
      <h1>Projects </h1>
      <div className={styles.sheet}>
        <p>
          I&apos;ve worked on a lot of projects over the years and most have
          been proprietary, but you can check out a few examples on my{' '}
          <ExternalLink
            href='https://github.com/mayconsacht'
            arialLabel='Github'
          >
            Github
          </ExternalLink>
          . To make it easier, I&apos;ve highlighted some of the most
          interesting ones below.
        </p>
      </div>
      <div className={styles.projects}>
        <ProjectCard
          title='Dogs'
          description='A simple social media platform for dogs.'
          tags={['Node.js', 'React', 'Typescript']}
          gitUrl='https://github.com/mayconsacht/dogs'
          siteUrl='https://dogs.mayconsacht.com/'
        />
        <ProjectCard
          title='Rider'
          description='A app for drivers and passengers. WIP'
          tags={['.NET Core', 'Angular']}
          gitUrl='https://github.com/mayconsacht/Rider'
        />
        <ProjectCard
          title='This Website'
          description='Explore this website code.'
          tags={['React', 'Next.js', 'Typescript']}
          gitUrl='https://github.com/mayconsacht/mayconsacht.com'
          siteUrl='https://www.mayconsacht.com/'
        />
      </div>
      <p>
        If you&apos;re more interested in my work experience, feel free to visit
        my{' '}
        <ExternalLink
          href='https://www.linkedin.com/in/maycon-sacht/'
          arialLabel='Linkedin'
        >
          Linkedin
        </ExternalLink>{' '}
        <span className={styles.strikethrough}>
          (though I&apos;m not a big fan of it either)
        </span>
      </p>
      <BackToTopButton />
    </>
  );
}
