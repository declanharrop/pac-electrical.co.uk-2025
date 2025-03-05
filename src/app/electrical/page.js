import ServicesBlock from '@/Components/Blocks/ServicesBlock';
import SmoothScrollLogosBlock from '@/Components/Blocks/SmoothScrollLogosBlock';
import VideoHero from '@/Components/Hero/VideoHero';

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
    </div>
  );
}
