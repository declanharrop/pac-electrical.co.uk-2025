import CaseStudiesHero from '@/Components/FrameComponents/CaseStudiesHero';
import Styles from './Styles/CaseStudiesFrame.module.css';

export default function CaseStudiesFrame({ data, title }) {
  const studies = data;

  return (
    <div className={Styles.CaseStudiesFrame}>
      <CaseStudiesHero data={studies} />
    </div>
  );
}
