import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <section className="bg-hero" style={{ padding: '144px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: 'clamp(32px, 5vw, 48px)', color: 'white', lineHeight: '1.15', marginBottom: '20px' }}>
              Política de Privacidade
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-custom" style={{ maxWidth: '800px', margin: '0 auto', color: '#475569', lineHeight: '1.8' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px', color: '#11132A' }}>PRIVACY POLICY</h2>
          <p style={{ marginBottom: '40px' }}><strong>IGI Home Renovations</strong><br />Effective Date: June 11, 2026<br />Last Updated: June 11, 2026</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>1. Introduction</h3>
          <p style={{ marginBottom: '16px' }}>IGI Home Renovations ("Company," "we," "us," or "our") operates the website located at https://igi-home-renovations.vercel.app (the "Site"). This Privacy Policy explains how we collect, use, disclose, and protect personal information submitted through this Site.</p>
          <p style={{ marginBottom: '16px' }}>By using this Site or submitting any information through our contact form, you agree to the terms of this Privacy Policy. If you do not agree, please do not use this Site.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>2. Information We Collect</h3>
          <p style={{ marginBottom: '16px' }}>We collect the following categories of personal information:</p>
          <p style={{ marginBottom: '8px' }}><strong>a) Information you provide directly:</strong></p>
          <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
            <li>Full name</li>
            <li>Phone number</li>
            <li>ZIP code</li>
            <li>Service type requested</li>
            <li>Project details and descriptions</li>
          </ul>
          <p style={{ marginBottom: '8px' }}><strong>b) Information collected automatically:</strong></p>
          <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on the Site</li>
            <li>Referring URL</li>
            <li>Device type and operating system</li>
          </ul>
          <p style={{ marginBottom: '16px' }}>We collect this automatic information through standard web server logs and may use third-party analytics tools such as Google Analytics.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>3. How We Use Your Information</h3>
          <p style={{ marginBottom: '8px' }}>We use the information collected for the following purposes:</p>
          <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
            <li>To respond to your renovation estimate requests and inquiries</li>
            <li>To contact you by phone, SMS/text message, or email regarding your project</li>
            <li>To schedule appointments and provide renovation services</li>
            <li>To improve the functionality and content of our Site</li>
            <li>To comply with legal obligations</li>
            <li>To send you service-related communications</li>
          </ul>
          <p style={{ marginBottom: '16px' }}><strong>SMS/Text Messaging:</strong> By submitting your phone number through our Site or by texting us directly, you consent to receive text messages from IGI Home Renovations at the number provided, including messages sent via automated systems, in accordance with the Telephone Consumer Protection Act (TCPA), 47 U.S.C. § 227. Message and data rates may apply. You may opt out at any time by replying STOP to any text message.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>4. Sharing of Information</h3>
          <p style={{ marginBottom: '8px' }}>We do not sell, rent, or trade your personal information to third parties for their own marketing purposes. We may share your information with:</p>
          <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
            <li>Service providers and subcontractors who assist in fulfilling renovation projects, bound by confidentiality obligations</li>
            <li>Analytics providers (e.g., Google Analytics) to help us understand Site usage</li>
            <li>Legal authorities when required by law, subpoena, court order, or to protect our rights</li>
            <li>Business successors in the event of a merger, acquisition, or sale of all or substantially all of our assets</li>
          </ul>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>5. California Residents — Your Rights Under CCPA</h3>
          <p style={{ marginBottom: '8px' }}>If you are a resident of California, you have the following rights under the California Consumer Privacy Act (CCPA), Cal. Civ. Code § 1798.100 et seq.:</p>
          <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Right to Know:</strong> You may request disclosure of the categories and specific pieces of personal information we have collected about you.</li>
            <li><strong>Right to Delete:</strong> You may request deletion of your personal information, subject to certain exceptions.</li>
            <li><strong>Right to Opt-Out of Sale:</strong> We do not sell personal information. If this practice changes, we will update this Policy and provide an opt-out mechanism.</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
          </ul>
          <p style={{ marginBottom: '16px' }}>To exercise these rights, contact us at: (321) 424-4693 or by text at the same number.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>6. Children's Privacy — COPPA Compliance</h3>
          <p style={{ marginBottom: '16px' }}>Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. In compliance with the Children's Online Privacy Protection Act (COPPA), 15 U.S.C. § 6501 et seq., if we learn that we have inadvertently collected information from a child under 13, we will promptly delete it. If you believe we have collected such information, please contact us immediately.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>7. Data Security</h3>
          <p style={{ marginBottom: '16px' }}>We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>8. Third-Party Links</h3>
          <p style={{ marginBottom: '16px' }}>Our Site may contain links to third-party websites, including our Thumbtack profile, Instagram, and Facebook pages. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>9. Cookies and Tracking Technologies</h3>
          <p style={{ marginBottom: '16px' }}>Our Site may use cookies and similar tracking technologies to enhance your browsing experience and collect usage data. You may configure your browser to refuse cookies; however, some features of the Site may not function properly without them.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>10. Retention of Information</h3>
          <p style={{ marginBottom: '16px' }}>We retain personal information submitted through our contact form for as long as necessary to fulfill the purposes described in this Policy, or as required by applicable law. Estimate requests and project information may be retained for up to five (5) years for business and legal purposes.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>11. Changes to This Privacy Policy</h3>
          <p style={{ marginBottom: '16px' }}>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised "Last Updated" date. Your continued use of the Site after any changes constitutes your acceptance of the updated Policy.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>12. Contact Us</h3>
          <p style={{ marginBottom: '16px' }}>If you have any questions about this Privacy Policy, please contact us:<br /><strong>IGI Home Renovations</strong><br />Phone/Text: (321) 424-4693</p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
