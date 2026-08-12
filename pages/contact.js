import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

// TODO: swap these placeholder values for your real contact details
const contactLinks = [
  { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
  { label: 'GitHub', value: 'ivorymwangi', href: 'https://github.com/ivorymwangi' },
  { label: 'LinkedIn', value: 'your-linkedin-handle', href: '#' },
];

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Ivory Mwangi</title>
      </Head>

      <Navbar />

      <main className="page">
        <section className={styles.section}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h1 className={styles.heading}>Let&apos;s talk</h1>
          <p className={styles.paragraph}>
            Feel free to reach out about a project, a job opportunity, or
            just to say hi.
          </p>

          <div className={styles.list}>
            {contactLinks.map((item) => (
              <a key={item.label} href={item.href} className={styles.item}>
                <span className={styles.itemLabel}>{item.label}</span>
                <span className={styles.itemValue}>{item.value}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
