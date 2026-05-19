// ComponentsV2/ContentBlocks/Navigation/Breadcrumbs.js

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on the homepage
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  const breadcrumbList = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    // Formats slugs like "battery-storage" into "Battery Storage"
    const title = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());
    return { title, href, isLast: index === pathSegments.length - 1 };
  });

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item:
          process.env.NEXT_PUBLIC_SITE_URL || 'https://pac-electrical.co.uk',
      },
      ...breadcrumbList.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: crumb.title,
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://pac-electrical.co.uk'}${crumb.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
        <ol className={styles.list}>
          <li className={styles.item}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          {breadcrumbList.map((crumb) => (
            <li key={crumb.href} className={styles.item}>
              <span className={styles.separator}>/</span>
              {crumb.isLast ? (
                <span className={styles.current} aria-current="page">
                  {crumb.title}
                </span>
              ) : (
                <Link href={crumb.href} className={styles.link}>
                  {crumb.title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
