import Link from 'next/link';
import styles from './FinanceSticker.module.css';

const FinanceSticker = () => (
  <Link href="/request-callback" className={styles.sticker}>
    Request a Callback
  </Link>
);

export default FinanceSticker;
