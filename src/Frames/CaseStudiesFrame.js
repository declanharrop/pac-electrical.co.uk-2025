import CaseStudiesHero from '@/Components/FrameComponents/CaseStudiesHero';
import Styles from './Styles/CaseStudiesFrame.module.css';

export default function CaseStudiesFrame({ data, title }) {
  const studies = data.caseStudies;

  const heroStudies = studies.slice(0, 4);
  const otherStudies = studies.slice(4);

  return (
    <div className={Styles.CaseStudiesFrame}>
      <CaseStudiesHero data={heroStudies} />
    </div>
  );
}
