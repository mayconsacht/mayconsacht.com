import styles from './LinkIconCard.module.css';

type Props = {
  url: string;
  title: string;
  iconPath: string;
  viewBox: string;
};

export const LinkIcon = ({ url, title, iconPath, viewBox }: Props) => (
  <a
    className={styles.link}
    href={url}
    title={title}
    target='_blank'
    rel='noopener noreferrer'
  >
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox={viewBox}
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        height='1rem'
        width='1rem'
      >
        <path d={iconPath} />
      </svg>
    </div>
  </a>
);
