import Link from 'next/link';
import styles from './not-found.module.css';

export const metadata = {
  title: 'Page Not Found | Power & Control',
  description: 'This page could not be found. Navigate back to our services.',
};

export default function NotFound() {
  return (
    <div className={styles.Wrapper}>
      <p className={styles.Code}>404</p>
      <h1 className={styles.Title}>Page Not Found</h1>
      <p className={styles.Subtitle}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <nav className={styles.Links}>
        <Link href="/" className={styles.Link}>
          Home
        </Link>
        <Link href="/solar" className={styles.Link}>
          Solar
        </Link>
        <Link href="/electrical" className={styles.Link}>
          Electrical
        </Link>
        <Link href="/ev" className={styles.Link}>
          EV Charging
        </Link>
      </nav>
    </div>
  );
}
