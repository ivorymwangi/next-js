import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

// The links shown in the navbar, kept as one array. Adding a new
// page later just means adding one line here instead of copy-pasting
// a whole new <Link> tag below.
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  // useRouter tells us which page the visitor is currently viewing,
  // so we can highlight the matching link in the nav.
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Ivory<span className={styles.logoDot}>.</span>
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            const linkClassName = isActive
              ? `${styles.link} ${styles.active}`
              : styles.link;

            return (
              <Link key={link.href} href={link.href} className={linkClassName}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
