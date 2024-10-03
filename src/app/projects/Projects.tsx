import BackToTopButton from 'components/BackToTopButton/BackToTopButton'
import { ExternalLink } from 'components/ExternalLink/ExternalLink'
import { ProjectCard } from 'components/ProjectCard/ProjectCard'
import { SkillsList } from 'components/SkillsList/SkillsList'

import styles from './Projects.module.sass'

export default function Projects() {
  return (
    <>
      <h1>Projects </h1>
      <div className={styles.sheet}>
        <p>
          I&apos;ve been writing code for over 10 years, and in my most recent
          projects, I&apos;ve been focusing more on the following patterns and
          technologies:
        </p>
        <SkillsList
          skills={[
            'C#/.NET Core',
            'gRPC/SignalR/DDS',
            'xUnit/Jest/Cypress/Postman',
            'Javascript/Typescript/Node.js',
            'RabbitMQ/REST',
            'SQL/NoSQL/Cache',
            'Angular/React/Next.js',
            'DDD/CQRS/SOLID',
            'Microservices/Clean Architecture'
          ]}
        ></SkillsList>
        <p>
          Although most of my work has been on proprietary projects, you can
          check out a few examples on my{' '}
          <ExternalLink
            href="https://github.com/mayconsacht"
            arialLabel="Github"
          >
            Github
          </ExternalLink>
          . To make it easier, I&apos;ve highlighted some of the more
          interesting ones below.
        </p>
      </div>
      <div className={styles.projects}>
        <ProjectCard
          title="Dogs"
          description="A simple social media platform for dogs."
          tags={['Node.js', 'React', 'Typescript']}
          gitUrl="https://github.com/mayconsacht/dogs"
          siteUrl="https://dogs.mayconsacht.com/"
        />
        <ProjectCard
          title="Rider"
          description="A app for drivers and passengers. WIP"
          tags={['.NET Core', 'Angular']}
          gitUrl="https://github.com/mayconsacht/Rider"
        />
        <ProjectCard
          title="This Website"
          description="Explore this website code."
          tags={['React', 'Next.js', 'Typescript']}
          gitUrl="https://github.com/mayconsacht/mayconsacht.com"
          siteUrl="https://www.mayconsacht.com/"
        />
      </div>
      <p>
        If you&apos;re more interested in my career, feel free to visit my{' '}
        <ExternalLink
          href="https://www.linkedin.com/in/maycon-sacht/"
          arialLabel="Linkedin"
        >
          Linkedin
        </ExternalLink>{' '}
        <span className={styles.strikethrough}>
          (though I&apos;m not a big fan of it either)
        </span>
      </p>
      <BackToTopButton />
    </>
  )
}
