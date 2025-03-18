import RecruitmentFeedTemplateStyles from './styles/RecruitmentFeedTemplate.styles';
import ThreeStorySection from '../Components/FeatureSections/ThreeStorySection';
import GeneralStorySection from '../Components/FeatureSections/GeneralStorySection';

export default function RecruitmentFeedTemplate({
  recentJobsData,
  allJobsData,
}) {
  return (
    <>
      <Head
        title="Recruitment Opportunities | Power and Control - Electrical Contractors"
        description="At Power and Control, we believe in the power of talent and innovation to drive our mission of creating a sustainable energy future. Our Recruitment Page is where you'll discover opportunities to be a part of a dynamic team that's at the forefront of the renewable energy revolution."
        ogImage={recentJobsData[0].hero.url}
        url="https://pac-electrical.co.uk/recruitment"
      />
      <div className="spacer-lg" />
      <div className="spacer-lg" />
      <div className="spacer-lg" />
      <div className="spacer-lg" />
      <div className="spacer-lg" />
      <div className="spacer-lg" />
      <h1>Recruitment Opportunities</h1>
      <div className="spacer-lg" />
      <RecruitmentFeedTemplateStyles>
        <div className="divider" />
        {recentJobsData.length > 0 && (
          <ThreeStorySection data={recentJobsData} link="recruitment" />
        )}
        <div className="divider" />
        {allJobsData.length > 0 && (
          <GeneralStorySection data={allJobsData} link="recruitment" />
        )}
      </RecruitmentFeedTemplateStyles>
    </>
  );
}
