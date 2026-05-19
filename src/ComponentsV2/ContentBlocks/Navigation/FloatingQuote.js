// src/ComponentsV2/ContentBlocks/Navigation/FloatingQuote.js
import Link from 'next/link';
import styles from './FloatingQuote.module.css';

export default function FloatingQuote() {
  return (
    <Link href="/quote" className={styles.floatingBtn}>
      GET A QUOTE <span className={styles.arrow}>→</span>
    </Link>
  );
}
