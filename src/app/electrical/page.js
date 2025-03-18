import ImageBlock from '@/Components/Blocks/FrameBlocks/ImageBlock';
import ServicesBlock from '@/Components/Blocks/ServicesBlock';
import SmoothScrollLogosBlock from '@/Components/Blocks/SmoothScrollLogosBlock';
import TextWithImageBlock from '@/Components/Blocks/TextWithImageBlock';
import VideoHero from '@/Components/Hero/VideoHero';

const METADATA = {
  Url: 'https://pac-electrical.co.uk/electrical',
  SiteName: 'Commercial Electrical Experts - Power & Control',
  Description:
    'Power & Control: Expert commercial electrical services across the Midlands & UK. From installations to maintenance, we deliver reliable solutions for your business. Get a quote',
};
export const metadata = {
  title: METADATA.SiteName,
  applicationName: METADATA.SiteName,
  description: METADATA.Description,
  referrer: 'origin-when-cross-origin',
  url: METADATA.Url,
  openGraph: {
    title: METADATA.SiteName,
    description: METADATA.Description,
    url: METADATA.Url,
    images: [
      {
        url: `${METADATA.Url}/images/sustain1.webp`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function ElectricalPage() {
  return (
    <div>
      <VideoHero margin height="70vh">
        <h1>Electrical</h1>
        <h3>ENERGISE YOUR SUCCESS</h3>
      </VideoHero>
      <SmoothScrollLogosBlock
        margin="0 auto 100px"
        brands={[
          { brand: 'NICEIC', image: 'accreds/NICEIC.png' },
          { brand: 'Chas', image: 'accreds/CHAS.png' },
          { brand: 'HEIS', image: 'accreds/Heis.png' },
          { brand: 'MCS', image: 'accreds/MCS.png' },
          { brand: 'Renewable Energy Hub', image: 'accreds/TREH.png' },
          { brand: 'RCP', image: 'accreds/RCPE.png' },
          { brand: 'OLEV', image: 'accreds/olev.png' },
          { brand: 'Trust a Trader', image: 'accreds/Trustatrader.png' },
          { brand: 'Solar Nation', image: 'accreds/Solarnation.png' },
          { brand: 'Contstructionline', image: 'accreds/Constructionline.png' },
        ]}
      />
      <ServicesBlock />
      <div style={{ marginTop: '100px' }} />
      <TextWithImageBlock
        image="/images/electrical/com1.webp"
        title="Electrical"
        text={[
          'At Power & Control, we are experienced in providing electrical installations, maintenance and repair services in commercial and domestic settings. Whether you’re looking for large-scale LED lighting installations or have a fault in your electrical system that needs fixing, we can help.',
          'From design to installation, we offer a complete turnkey solution for your project, providing everything you need from start to finish.',
        ]}
      />
      <div style={{ marginTop: '100px' }} />
      <ImageBlock
        data={{ image: { url: '/images/electrical/elec-large.webp' } }}
      />
    </div>
  );
}
