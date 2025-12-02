'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './FrameBlocks.module.css';

export default function FAQsBlock({ data }) {
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (key) => {
    setIsOpen(isOpen === key ? null : key); // Toggle logic
  };

  const animateFrom = { height: '0px' };
  const animateTo = { height: 'auto' };
  const animateExit = { height: '0px' };
  const transition = { height: { ease: 'easeOut', duration: 0.3 } };

  return (
    <div className={styles.FAQsBlock}>
      <h2 className={styles.FAQsBlock__title}>{data.title}</h2>

      <div className={styles.FAQsBlock__Container}>
        {(data.faqs || []).map((faq) => (
          <div key={faq._key} className={styles.FAQsBlock__Container__Item}>
            <div
              className={styles.FAQsBlock__Container__Item__Q}
              onClick={() => handleClick(faq._key)}
            >
              <h4>{faq.question}</h4>
            </div>

            <AnimatePresence>
              {isOpen === faq._key && (
                <motion.div
                  className={styles.FAQsBlock__Container__Item__A}
                  initial={animateFrom}
                  animate={animateTo}
                  exit={animateExit}
                  transition={transition}
                >
                  <p className={styles.FAQsBlock__Container__Item__A__Text}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
