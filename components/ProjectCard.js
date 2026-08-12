import Image from 'next/image';
import styles from './ProjectCard.module.css';

// This component takes one project object and displays it as a
// card. Having a component like this means the Projects page can
// just loop over a list of projects instead of repeating the same
// markup five or six times by hand.
export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={`Preview of ${project.title}`}
          fill
          sizes="(max-width: 600px) 100vw, 320px"
          className={styles.image}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <a href={project.liveUrl} className={styles.linkPrimary}>
            Live demo
          </a>
          <a href={project.repoUrl} className={styles.linkSecondary}>
            Code
          </a>
        </div>
      </div>
    </article>
  );
}
