import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

// A simple list of skills, kept as an array so adding or removing
// one only means editing this list — not the markup below.
const skills = [
  'HTML & CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Bootstrap',
  'Git & GitHub',
  'TypeScript basics',
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — Ivory Mwangi</title>
      </Head>

      <Navbar />

      <main className="page">
        <section className={styles.section}>
          <p className={styles.eyebrow}>About me</p>
          <h1 className={styles.heading}>The story so far</h1>

          {/* TODO: swap this placeholder paragraph for your own bio */}
          <p className={styles.paragraph}>
            I started out learning HTML and CSS, then moved into
            JavaScript, Bootstrap, and now React and Next.js. I like
            building things I can actually click around in — that&apos;s
            why most of my projects are small, complete apps rather than
            half-finished demos. Right now I&apos;m especially interested
            in how front-end apps talk to real APIs and payment systems.
          </p>

          <h2 className={styles.subheading}>Skills</h2>
          <ul className={styles.skillList}>
            {skills.map((skill) => (
              <li key={skill} className={styles.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
