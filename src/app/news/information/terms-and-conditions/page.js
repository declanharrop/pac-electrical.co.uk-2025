import Markdown from 'markdown-to-jsx';
import styles from '@/Styles/Information/PrivacyPol.module.css';

const tac = `
##Standard Terms & Conditions

###Tender Qualifications

We have assumed the following facilities will be available on site free of charge.
- Shared welfare facilities until building works have been completed.
- Skips for disposal of our rubbish.
- Protections of building structures/finishes where applicable.
- Removal/reinstatement of building structure to enable our works to be carried out
where relevant.
<br/>
<br/>
No allowance has been made within our quotation for the following, unless specified within our quote.

###Builders Work
- Forming and making good holes, ducts and chasings in walls, floors, roofs including
firestopping of external perimeter holes.
- Provision of any purpose made boxings to house services.
- All holes in internal walls of 50mm and below will be formed by, ourselves.
- Statutory authority charges.
- Installation of lamp posts.
- Any decorative painting of services/associated equipment.
- Any costs associated with beneficial use of the electrical installations

###General Qualifications
- Our tender allows for reasonable and practicable measures in terms of protecting our
works.
- Our offer allows for cleaning of rubbish associated with our work to on site skips
provided by others.
- Our offer allows for attendance to any genuine material/workmanship defect during
the defects period.
- Our offer does not allows for any routine maintenance of the installations or any
remedy of defects caused by lack of maintenance, misuse or negligence on behalf of
the end user.

###Exclusions
- The disposal of site rubbish and provision for skips.
- Any works to the electrical supply and meter.
- Any works to CCTV systems.
- Any data network equipment or phones.
- Installation of incoming data and phone supplies.
- Any works required for the installation of water supplies to appliances and equipment.
- Wooden supports (595x595mm).
- We have not allowed for the supply of electric heating and air conditioning equipment.

###Warranty
- We offer a six year warranty on labour.
- The majority of our general parts have a two year warranty. Warranty on other parts may vary according to the product manufacturer. Please visit the manufacturers website for further information.

###EV Charger Warranty Information
Please see below, the direct links to each manufacturers warranty page:
- https://easee.com/uk/
- https://hypervolt.co.uk/
- https://andersen-ev.com/warranty-terms/
- https://wallbox.com/media/PDF/en_us/wallbox_warranty.pdf
- https://myenergi.com/terms-and-conditions/myenergi-product-warranty/
- https://www.projectev.co.uk/wp-content/uploads/2021/12/AC-DC-Warranty-2020-
V3-PDF.pdf
- https://a.storyblok.com/f/120859/x/f75d5c6f76/eo-charging-warranty-uk-ie.pdf

###Renewables Warranty Information
Please see below, the direct links to each manufacturers warranty page:
- https://puredrive-energy.co.uk/3-phase-battery/
- Solis Inverters - https://www.ginlong.com/global/productwarranty.html
- https://www.peimar.com/uk/home/technical-assistance/
- https://www.trinasolar.com/eu-en/our-company/quality
- https://www.solaxpower.com/uk-warranty-policy/

###Our Platinum Promise
By choosing us as an NICEIC certified business, we can give you peace of mind. We work to
the highest of standards and you will be backed up by the NICEIC Platinum Promise.

###What is the Platinum Promise?
Put simply, our Platinum Promise is a guarantee. If an NICEIC certified business carries out
work that falls within their scope of certification but it turns out to be non-compliant – and
have ceased trading – then the NICEIC will step in. At no extra cost to you, the NICEIC will
employ another business to rectify the non-compliant work. Subject to the Platinum Promise
Conditions & Exclusions outlined below:

1. The NICEIC Platinum Promise is only applicable for work completed on domestic
properties within the last six years.
2. Claims are limited to the evidenced maximum contract/invoice value, up to a
maximum of £25,000 for any one contract.
3. If your complaint requires immediate action you may wish to consider an alternative
route, as the NICEIC are not able to provide an ‘emergency service’ response.
4. You must provide clear evidence of non-conformities relating to the work before a
claim can be accepted.
5. Claims associated to maintenance or lack of certification/notification are the
responsibility of homeowners and will not be accepted.


VAT registration number: 364 8047 80
`;
export default function TCS() {
  return (
    <div className={styles.PrivPol}>
      <Markdown className={styles.markdown}>{tac}</Markdown>
    </div>
  );
}
