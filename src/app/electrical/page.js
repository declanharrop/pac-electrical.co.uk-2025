import ImageBlock from '@/Components/Blocks/FrameBlocks/ImageBlock';
import ServicesBlock from '@/Components/Blocks/ServicesBlock';
import SmoothScrollLogosBlock from '@/Components/Blocks/SmoothScrollLogosBlock';
import TextWithImageBlock from '@/Components/Blocks/TextWithImageBlock';
import VideoHero from '@/Components/Hero/VideoHero';

const METADATA = {
  Url: 'https://pac-electrical.co.uk/electrical',
  // SEO UPGRADE: More descriptive for UK search intent
  SiteName: 'Commercial Electrical Contractors Derbyshire | Power & Control',
  Description:
    'NICEIC approved commercial electrical contractors in Derby. Providing expert installations, EICR testing, and maintenance services across the Midlands and UK.',
};

export const metadata = {
  title: METADATA.SiteName,
  description: METADATA.Description,
  // ... (keep the rest of your metadata/OG)
};

export default function ElectricalPage() {
  // SEO UPGRADE: Schema to link the Hub to your specific services
  const electricalHubSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Service',
    serviceType: 'Electrical Contracting Services',
    provider: {
      '@type': 'Electrician',
      name: 'Power & Control Ltd',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Derby',
        addressRegion: 'Derbyshire',
      },
    },
    description:
      'Professional commercial and domestic electrical services including design, installation, and maintenance by NICEIC approved contractors.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Electrical Installations',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Domestic Rewiring & Upgrades',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'EICR Compliance & Testing',
          },
        },
      ],
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(electricalHubSchema),
        }}
      />

      <VideoHero margin height="70vh">
        {/* SEO UPGRADE: Regional H1 for maximum Local SEO impact */}
        <h1>Commercial & Domestic Electrical Contractors</h1>
        <h3>Derbyshire’s Trusted Electrical Experts</h3>
      </VideoHero>

      <SmoothScrollLogosBlock
        margin="0 auto 100px"
        brands={[
          { brand: 'NICEIC', image: 'accreds/NICEIC.png' },
          { brand: 'Chas', image: 'accreds/CHAS.png' },
          { brand: 'Constructionline', image: 'accreds/Constructionline.png' },
          { brand: 'HEIS', image: 'accreds/Heis.png' },
          { brand: 'MCS', image: 'accreds/MCS.png' },
          { brand: 'Renewable Energy Hub', image: 'accreds/TREH.png' },
          { brand: 'RCP', image: 'accreds/RCPE.png' },
          { brand: 'OLEV', image: 'accreds/olev.png' },
          { brand: 'Trust a Trader', image: 'accreds/Trustatrader.png' },
          { brand: 'Solar Nation', image: 'accreds/Solarnation.png' },
        ]}
      />

      <ServicesBlock />

      <div style={{ marginTop: '100px' }} />

      <TextWithImageBlock
        image="/images/electrical/com1.webp"
        title="Bespoke Electrical Solutions"
        text={[
          'At Power & Control, our NICEIC-approved engineers specialise in providing comprehensive electrical installations, maintenance, and repair services for both commercial and domestic clients in Derbyshire and the East Midlands.',
          'Whether you require large-scale industrial three-phase installations, LED lighting upgrades, or proactive EICR compliance testing, we provide a complete turnkey solution from initial design to final certification.',
        ]}
      />

      <div style={{ marginTop: '100px' }} />

      <ImageBlock
        data={{ image: { url: '/images/electrical/elec-large.webp' } }}
      />
    </div>
  );
}
