'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './FinanceSticker.module.css';

const FinanceSticker = () => {
  const pathname = usePathname();

  // Define routes where the sticker should be hidden
  const hiddenRoutes = ['/quote', '/thank-you'];

  const isHidden = hiddenRoutes.some((route) => pathname.startsWith(route));
  if (isHidden) {
    return null;
  }
  return (
    <Link href="/request-callback" className={styles.sticker}>
      Request a Callback
    </Link>
  );
};
export default FinanceSticker;
