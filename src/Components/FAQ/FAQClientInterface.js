'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  Search,
  X,
  Share2,
  PlayCircle,
  ChevronRight,
  Zap,
  Sun,
  Car,
} from 'lucide-react';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import styles from './FAQClientInterface.module.css';

export default function FAQClientInterface({ faqs }) {
  const [searchTerm, setSearchTerm] = useState('');
  // Default is still Solar, but user can switch
  const [selectedService, setSelectedService] = useState('Solar');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeFAQ, setActiveFAQ] = useState(null);

  // 1. Filter by Service
  const serviceFAQs = useMemo(
    () => faqs.filter((f) => f.service === selectedService),
    [faqs, selectedService],
  );

  // 2. Get Categories for this Service
  const categories = useMemo(() => {
    const cats = new Set(serviceFAQs.map((f) => f.category));
    return ['All', ...Array.from(cats)];
  }, [serviceFAQs]);

  // 3. Final Filter
  const filteredFAQs = useMemo(
    () =>
      faqs.filter((faq) => {
        if (faq.service !== selectedService) return false;
        if (selectedCategory !== 'All' && faq.category !== selectedCategory)
          return false;

        const term = searchTerm.toLowerCase();
        const matchesSearch =
          faq.question.toLowerCase().includes(term) ||
          faq.keywords?.some((k) => k.toLowerCase().includes(term));

        return matchesSearch;
      }),
    [searchTerm, selectedService, selectedCategory, faqs],
  );

  // Inside your component that renders the modal:
  useEffect(() => {
    // 1. When the modal is open, prevent scrolling
    if (activeFAQ) {
      document.body.style.overflow = 'hidden';
      // Optional: Also target documentElement for full cross-browser support
      document.documentElement.style.overflow = 'hidden';
    }

    // 2. Cleanup function: restore scroll when modal closes or component unmounts
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [activeFAQ]); // Only re-run if 'activeFAQ' state changes

  const handleServiceChange = (service) => {
    setSelectedService(service);
    setSelectedCategory('All');
  };

  // UPDATED LINK
  const handleShare = (slug) => {
    const url = `${window.location.origin}/faqs/${slug}`;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <div className={styles.Interface}>
      {/* CONTROLS */}
      <div className={styles.Controls}>
        {/* Service Switcher */}
        <div className={styles.ServiceTabs}>
          <button
            type="button"
            className={`${styles.ServiceBtn} ${selectedService === 'Solar' ? styles.ActiveService : ''}`}
            onClick={() => handleServiceChange('Solar')}
          >
            <Sun size={18} /> Solar
          </button>
          <button
            type="button"
            className={`${styles.ServiceBtn} ${selectedService === 'EV' ? styles.ActiveService : ''}`}
            onClick={() => handleServiceChange('EV')}
          >
            <Car size={18} /> EV
          </button>
          <button
            type="button"
            className={`${styles.ServiceBtn} ${selectedService === 'Electrical' ? styles.ActiveService : ''}`}
            onClick={() => handleServiceChange('Electrical')}
          >
            <Zap size={18} /> Electrical
          </button>
        </div>

        {/* Search */}
        <div className={styles.SearchBar}>
          <Search size={20} className={styles.SearchIcon} />
          <input
            type="text"
            placeholder={`Search ${selectedService} questions...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className={styles.Categories}>
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              className={`${styles.CatBtn} ${selectedCategory === cat ? styles.ActiveCat : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className={styles.Grid}>
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq) => (
            <div
              key={faq._id}
              className={styles.Card}
              onClick={() => setActiveFAQ(faq)}
            >
              <div className={styles.CardHeader}>
                <span className={styles.CardCategory}>{faq.category}</span>
                {faq.videoUrl && <PlayCircle size={16} color="var(--green)" />}
              </div>
              <h3 className={styles.CardQuestion}>{faq.question}</h3>
              <div className={styles.ReadMore}>
                Read Answer <ChevronRight size={16} />
              </div>
            </div>
          ))
        ) : (
          <div className={styles.NoResults}>
            <h3>No questions found.</h3>
            <p>Try changing the category or search term.</p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {activeFAQ && (
        <div className={styles.ModalOverlay} onClick={() => setActiveFAQ(null)}>
          <div className={styles.Modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.ModalHeader}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span className={styles.ModalBadge}>{activeFAQ.service}</span>
                <span className={styles.ModalBadgeLight}>
                  {activeFAQ.category}
                </span>
              </div>
              <div className={styles.ModalActions}>
                <button
                  type="button"
                  onClick={() => handleShare(activeFAQ.slug)}
                  className={styles.IconBtn}
                >
                  <Share2 color="white" size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFAQ(null)}
                  className={styles.IconBtn}
                >
                  <X color="white" size={24} />
                </button>
              </div>
            </div>

            <div className={styles.ModalContent}>
              <h2 className={styles.ModalTitle}>{activeFAQ.question}</h2>

              {activeFAQ.videoUrl && (
                <div className={styles.VideoWrapper}>
                  <iframe
                    src={
                      activeFAQ.videoUrl
                        .replace('watch?v=', 'embed/')
                        .replace('shorts/', 'embed/') // Added support for Shorts
                        .split('?')[0] // Cleans off the ?si= tracker
                    }
                    className={styles.Iframe}
                    title={activeFAQ.question}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <div className={styles.PortableText}>
                <PortableText value={activeFAQ.answer} />
              </div>

              {activeFAQ.related && (
                <div className={styles.Related}>
                  <h4>Related Topics:</h4>
                  {activeFAQ.related.map((rel, i) => (
                    // UPDATED LINK
                    <Link
                      key={i}
                      href={`/faqs/${rel.slug}`}
                      className={styles.RelatedLink}
                    >
                      {rel.question}
                    </Link>
                  ))}
                </div>
              )}

              <div className={styles.ModalFooter}>
                {/* UPDATED LINK */}
                <Link
                  href={`/faqs/${activeFAQ.slug}`}
                  className={styles.DirectLink}
                >
                  Open Direct Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
