'use client';

import NewsHero from '@/Components/FrameComponents/NewsHero';
import NewsGrid from '@/Components/FrameComponents/NewsGrid';
import Styles from './Styles/NewsPageFrame.module.css';

export default function NewsPageFrame({ data, title }) {
  // Pass all data to Hero (it handles slice logic) and Grid
  return (
    <div className={Styles.NewsPageFrame}>
      <NewsHero data={data} />
      <NewsGrid data={data} title={title} />
    </div>
  );
}
