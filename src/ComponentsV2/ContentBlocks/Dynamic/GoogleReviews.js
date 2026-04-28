'use client'

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import styles from '../Styles/GoogleReviews.module.css';

export default function GoogleReviews({ reviewsData }) {
  const scrollRef = useRef(null);

  if (!reviewsData || !reviewsData.reviews || reviewsData.reviews.length === 0) return null;

  const { reviews, rating, totalReviews } = reviewsData;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.Wrapper}>
      <div className={styles.Container}>
        
        <div className={styles.TopRow}>
          <div className={styles.TextLeft}>
            <h2 className={styles.Title}>PROVEN <span>EXCELLENCE</span></h2>
            <div className={styles.TrustBadge}>
              <div className={styles.StarsSummary}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(rating) ? "var(--green)" : "none"} color="var(--green)" />
                ))}
                <span className={styles.RatingNum}>{rating}</span>
              </div>
              <p className={styles.TotalCount}>BASED ON {totalReviews} GOOGLE REVIEWS</p>
            </div>
          </div>

          <div className={styles.SliderControls}>
            <button onClick={() => scroll('left')} className={styles.NavBtn}><ChevronLeft size={20} /></button>
            <button onClick={() => scroll('right')} className={styles.NavBtn}><ChevronRight size={20} /></button>
          </div>
        </div>

        {/* NEW WRAPPER FOR THE FADE EFFECT */}
        <div className={styles.SliderWrapper}>
          <div className={styles.Slider} ref={scrollRef}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.ReviewCard}>
                <div className={styles.CardHeader}>
                  {review.profile_photo_url ? (
                    <img 
                      src={review.profile_photo_url} 
                      alt="" 
                      className={styles.Avatar} 
                      referrerPolicy="no-referrer" /* THIS FIXES THE AVATAR LOADING */
                    />
                  ) : (
                    <div className={styles.AvatarFallback}>{review.author_name.charAt(0)}</div>
                  )}
                  <div className={styles.AuthorBox}>
                    <h3 className={styles.AuthorName}>{review.author_name}</h3>
                    <p className={styles.ReviewDate}>{review.relative_time_description}</p>
                  </div>
                </div>
                
                <p className={styles.ReviewText}>"{review.text}"</p>
                
                <div className={styles.CardFooter}>
                  <div className={styles.CardStars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? "var(--green)" : "none"} color="var(--green)" />
                    ))}
                  </div>
                  <div className={styles.GoogleG}>G</div> 
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}