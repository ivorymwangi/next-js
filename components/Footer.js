import styles from './Footer.module.css';

export default function Footer() {
  // Calculating the year from the current date means we never have
  // to remember to update it by hand next January.
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {year} Ivory Mwangi. Built with Next.js.</p>
    </footer>
  );
}
