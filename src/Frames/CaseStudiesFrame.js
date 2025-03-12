'use client';

import CaseStudiesHero from '@/Components/FrameComponents/CaseStudiesHero';
import Styles from './Styles/CaseStudiesFrame.module.css';
import CaseStudiesGrid from '@/Components/FrameComponents/CaseStudiesGrid';

export default function CaseStudiesFrame({ data, title }) {
  const studies = data;

  return (
    <div className={Styles.CaseStudiesFrame}>
      <CaseStudiesHero data={studies} />
      <CaseStudiesGrid data={studies} title={title} />
    </div>
  );
}
