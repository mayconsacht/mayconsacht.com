import styles from './SkillsList.module.sass'

type Props = {
  skills: string[]
}

export const SkillsList = ({ skills }: Props) => (
  <ul className={styles.skills}>
    {skills.map((skill, index) => (
      <li key={index}>
        <span className={styles.marker}>•</span> {skill}
      </li>
    ))}
  </ul>
)
