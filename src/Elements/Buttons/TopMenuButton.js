import Link from 'next/link';
import Styles from './Buttons.module.css';

export default function TopMenuButton({ title, link = '/' }) {
  return (
    <Link href={link}>
      <button className={Styles.TopMenuButton} type="button">
        {title}
      </button>
    </Link>
  );
}
