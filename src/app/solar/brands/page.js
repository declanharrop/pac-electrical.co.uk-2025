import Link from 'next/link';
import BrandsBlock from '@/Components/Blocks/BrandsBlock';

export default function BrandsPage() {
  return (
    <div>
      <BrandsBlock />
      <Link href="/solar/finance" style={{ fontSize: '18px' }}>
        <img
          src="/images/finance-banners/Generic_Banner.png"
          alt="We offer finance."
          style={{ width: '100%', marginTop: '10px', maxWidth: '1200px' }}
        />
      </Link>
    </div>
  );
}
