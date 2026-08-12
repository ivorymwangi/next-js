import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      {/* next/head lets us set the browser tab title and meta
          description separately on each page. */}
      <Head>
        <title>Ivory Mwangi — Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Ivory Mwangi, a web developer building projects with JavaScript, React and Next.js."
        />
      </Head>

      <Navbar />

      <main className="page">
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Hi, I&apos;m Ivory</p>
            <h1 className={styles.headline}>
              I build friendly, <span className={styles.highlight}>colourful</span>{' '}
              things for the web.
            </h1>
            <p className={styles.subtext}>
              I&apos;m a web developer learning by building — from small
              JavaScript experiments to full React apps with real API
              integrations. Here&apos;s a look at what I&apos;ve made so far.
            </p>
            <div className={styles.heroActions}>
              <Link href="/projects" className={styles.primaryButton}>
                See my projects
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Get in touch
              </Link>
            </div>
          </div>

          <div className={styles.heroImageWrap}>
            {/* TODO: replace this placeholder with your real photo.
                Easiest option: drop a file into /public (e.g.
                /public/profile.jpg) and change src to "/profile.jpg" —
                then you can remove the images.domains line in
                next.config.js too, since it's only needed for the
                placehold.co placeholder. */}
            <Image
              src="https://placehold.co/480x480/f3c9d4/5b4550?text=Your+Photo"
              alt="Ivory's profile photo"
              width={480}
              height={480}
              className={styles.heroImage}
              priority
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
