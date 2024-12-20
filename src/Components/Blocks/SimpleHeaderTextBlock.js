import Styles from './Blocks.module.css';

export default function SimpleHeaderTextBlock({
  margin = '0',
  content = {
    title: 'Why Power & Control',
    text: [
      'Power and Control is committed to providing innovative and high-quality solutions that empower our clients to optimize their energy usage. We specialize in the design and installation of renewable energy systems, EV charging infrastructure, and energy-efficient electrical installations for residential and commercial properties.',
      'Our comprehensive service portfolio encompasses everything from routine maintenance and fault finding to the implementation of large-scale solar PV projects. We offer a complete turnkey solution, managing all aspects of the project lifecycle, from initial consultation and design to final installation and commissioning.',
      'Headquartered in the East Midlands, we are strategically positioned to serve commercial clients across the United Kingdom.',
    ],
  },
}) {
  return (
    <div
      className={Styles.SimpleHeaderTextBlock}
      style={{ margin: `${margin}` }}
    >
      <div className={Styles.SimpleHeaderTextBlock_Container}>
        <h2>{content.title}</h2>
        {content.text.map((paragraph, index) => (
          <p style={{ margin: '20px 0' }} key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
