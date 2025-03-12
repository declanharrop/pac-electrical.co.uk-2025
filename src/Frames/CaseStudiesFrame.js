'use client';

import CaseStudiesHero from '@/Components/FrameComponents/CaseStudiesHero';
import Styles from './Styles/CaseStudiesFrame.module.css';
import CaseStudiesGrid from '@/Components/FrameComponents/CaseStudiesGrid';

export default function CaseStudiesFrame({ data, title, article = true }) {
  const studies = data;

  return (
    <div className={Styles.CaseStudiesFrame}>
      <CaseStudiesHero data={studies} article={article} />
      <CaseStudiesGrid data={studies} title={title} article={article} />
    </div>
  );
}
