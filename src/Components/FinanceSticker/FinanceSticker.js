import Link from 'next/link';
import styles from './FinanceSticker.module.css'; // Import our CSS Module

/**
 * A floating sticker component to announce the new finance option.
 * (Updated for modern Next.js <Link> behavior)
 */
const FinanceSticker = () => (
  // Apply the className directly to the <Link> component.
  // No <a> tag is needed inside.
  <Link href="/solar/finance" className={styles.sticker}>
    We now offer <strong>Finance!</strong>
  </Link>
);

export default FinanceSticker;
