// src/ComponentsV2/ContentBlocks/Navigation/NavDrawer.js

'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

export default function NavDrawer({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTier1, setActiveTier1] = useState(null);
  const [activeTier2, setActiveTier2] = useState(null);
  const pathname = usePathname();

  // Automatic state reset on Next.js soft routing
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Window lock integration to trap scroll layers
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleDrawer = () => setIsOpen(!isOpen);

  // Dynamic Routing Handler Engine
  const renderLink = (item, className, closeOnClick = true) => {
    const isExternal = item.linkType === 'external';
    const href = isExternal ? item.externalUrl : item.slug || '#';
    const isActive = !isExternal && pathname === href;
    const finalClassName = `${className} ${isActive ? styles.activeLink : ''}`;

    if (isExternal) {
      return (
        <a
          href={href}
          className={finalClassName}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeOnClick ? toggleDrawer : undefined}
        >
          {item.title} <span className={styles.externalIcon}>↗</span>
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={finalClassName}
        onClick={closeOnClick ? toggleDrawer : undefined}
      >
        {item.title}
      </Link>
    );
  };

  if (!items || items.length === 0) return null;

  return (
    <>
      {/* Structural Toggle Control */}
      <button
        className={styles.hamburger}
        onClick={toggleDrawer}
        aria-label="Toggle Menu"
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Layout Scrim Layer */}
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleDrawer}
            />

            {/* Elastic Drawer Chassis */}
            <motion.div
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className={styles.drawerHeader}>
                {/* INJECTED LOGO HERE */}
                <img
                  src="/logo/pac-logo-black.svg"
                  alt="P&C Electrical"
                  className={styles.drawerLogoImage}
                />
                <button onClick={toggleDrawer} className={styles.closeBtn}>
                  ✕
                </button>
              </div>

              {/* Recursive 3-Tier Execution Tree */}
              <nav className={styles.navLinks}>
                {items.map((tier1) => {
                  const hasTier2 = tier1.subItems && tier1.subItems.length > 0;

                  return (
                    <div key={tier1._key} className={styles.tier1Container}>
                      {!hasTier2 ? (
                        renderLink(tier1, styles.navLink)
                      ) : (
                        <>
                          <button
                            className={styles.navLinkBtn}
                            onClick={() =>
                              setActiveTier1(
                                activeTier1 === tier1._key ? null : tier1._key,
                              )
                            }
                          >
                            {tier1.title}
                            <span
                              className={`${styles.chevron} ${activeTier1 === tier1._key ? styles.rotated : ''}`}
                            >
                              ▼
                            </span>
                          </button>

                          <AnimatePresence>
                            {activeTier1 === tier1._key && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className={styles.tier2Menu}
                              >
                                {tier1.subItems.map((tier2) => {
                                  const hasTier3 =
                                    tier2.subItems && tier2.subItems.length > 0;

                                  return (
                                    <div
                                      key={tier2._key}
                                      className={styles.tier2Container}
                                    >
                                      {!hasTier3 ? (
                                        renderLink(tier2, styles.subNavLink)
                                      ) : (
                                        <>
                                          <button
                                            className={styles.subNavBtn}
                                            onClick={() =>
                                              setActiveTier2(
                                                activeTier2 === tier2._key
                                                  ? null
                                                  : tier2._key,
                                              )
                                            }
                                          >
                                            {tier2.title}
                                            <span
                                              className={`${styles.chevronSmall} ${activeTier2 === tier2._key ? styles.rotated : ''}`}
                                            >
                                              ▼
                                            </span>
                                          </button>

                                          <AnimatePresence>
                                            {activeTier2 === tier2._key && (
                                              <motion.div
                                                initial={{
                                                  height: 0,
                                                  opacity: 0,
                                                }}
                                                animate={{
                                                  height: 'auto',
                                                  opacity: 1,
                                                }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className={styles.tier3Menu}
                                              >
                                                {tier2.subItems.map((tier3) => (
                                                  <div key={tier3._key}>
                                                    {renderLink(
                                                      tier3,
                                                      styles.tier3Link,
                                                    )}
                                                  </div>
                                                ))}
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </>
                                      )}
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Mobile Adaptive Footer with CTAs & Socials */}
              <div className={styles.drawerFooter}>
                {/* CTA Buttons */}
                <div className={styles.drawerCTAs}>
                  <Link
                    href="/quote"
                    className={`${styles.drawerBtn} ${styles.quoteBtn}`}
                    onClick={toggleDrawer}
                  >
                    GET A QUOTE <span>→</span>
                  </Link>
                  <Link
                    href="/request-callback"
                    className={`${styles.drawerBtn} ${styles.callbackBtn}`}
                    onClick={toggleDrawer}
                  >
                    Request a Callback
                  </Link>
                </div>

                {/* Social Icons */}
                <div className={styles.drawerSocials}>
                  <a
                    href="#"
                    className={styles.drawerSocialIcon}
                    aria-label="Instagram"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className={styles.drawerSocialIcon}
                    aria-label="Facebook"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className={styles.drawerSocialIcon}
                    aria-label="LinkedIn"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
