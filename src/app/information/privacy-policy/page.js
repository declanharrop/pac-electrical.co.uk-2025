import Markdown from 'markdown-to-jsx';
import style from '@/Styles/Information/PrivacyPol.module.css';

const privpol = `
<br>
<br>
At Power and Control Ltd, we take your privacy seriously and are committed to protecting the personal information that you share with us. This Privacy Policy describes how we collect, use, and share information when you use our website located at [www.powerandcontrol.com](http://www.powerandcontrol.com/) (the "Site").
###1. Information We Collect
  
When you visit our Site, we collect information about you and your use of our Site. This information may include:
- Your name, email address, phone number, and other contact information that you provide to us when you fill out a form or submit an inquiry.
- Information about your computer or device, including your IP address, browser type, and operating system.
- Information about your use of our Site, such as pages visited, time spent on the Site, and links clicked.
  
###2.  How We Use Your Information

We use the information we collect for the following purposes:
- To provide you with information about our products and services.
- To respond to your inquiries and requests.
- To improve our Site and the products and services we offer.
- To analyze how users interact with our Site and to personalize your experience.

###3.  How We Share Your Information

We may share your information with third-party service providers who help us operate our Site, such as website hosting providers, email service providers, and analytics providers. These service providers are contractually obligated to keep your information confidential and to use it only for the purposes of providing services to us.
We may also disclose your information if required by law, such as in response to a court order or subpoena.

###4.  Cookies and Other Tracking Technologies

We use cookies and other tracking technologies to collect information about your use of our Site. Cookies are small data files that are stored on your device and allow us to recognize your browser and remember your preferences.
You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some features of our Site.

###5.  Links to Third-Party Websites

Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party websites.

###6.  Children's Privacy

Our Site is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will delete that information.

###7.  Changes to this Privacy Policy

We may update this Privacy Policy from time to time. We will post the updated Privacy Policy on our Site and indicate the date it was last updated.

###8.  Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at <enquiries@pac-electrical.com>.
`;
export default function PrivacyPolicy() {
  return (
    <div className={style.PrivPol}>
      <h1>Privacy Policy</h1>
      <Markdown className={style.markdown}>{privpol}</Markdown>
    </div>
  );
}
