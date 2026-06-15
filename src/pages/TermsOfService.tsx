import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <div>
      <section className="bg-hero" style={{ padding: '144px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: 'clamp(32px, 5vw, 48px)', color: 'white', lineHeight: '1.15', marginBottom: '20px' }}>
              Termos de <span className="gradient-text">Serviço</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-custom" style={{ maxWidth: '800px', margin: '0 auto', color: '#475569', lineHeight: '1.8' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px', color: '#11132A' }}>TERMS OF SERVICE</h2>
          <p style={{ marginBottom: '40px' }}><strong>IGI Home Renovations</strong><br />Effective Date: June 11, 2026<br />Last Updated: June 11, 2026</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>1. Acceptance of Terms</h3>
          <p style={{ marginBottom: '16px' }}>By accessing or using the website at https://igi-home-renovations.vercel.app (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use this Site.</p>
          <p style={{ marginBottom: '16px' }}>These Terms constitute a legally binding agreement between you ("User") and IGI Home Renovations ("Company," "we," "us," or "our"), a home renovation contractor operating in Florida, New Jersey, and Pennsylvania.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>2. Description of Services</h3>
          <p style={{ marginBottom: '16px' }}>IGI Home Renovations provides home renovation and remodeling services, including but not limited to: bathroom remodeling, kitchen remodeling, LVP flooring installation, ceramic tile installation, interior and exterior painting, fix-and-flip renovations, and full home renovations.</p>
          <p style={{ marginBottom: '16px' }}>This Site serves as an informational and lead-generation platform. No contract for renovation services is formed by submitting a contact form or requesting an estimate through this Site. A binding service agreement is only created through a separately executed written contract between the Company and the client.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>3. Use of the Site</h3>
          <p style={{ marginBottom: '8px' }}>You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others. You agree not to:</p>
          <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
            <li>Use the Site in any way that violates applicable federal, state, or local laws or regulations</li>
            <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
            <li>Attempt to gain unauthorized access to any part of the Site or its related systems</li>
            <li>Use automated tools, bots, or scrapers to access or collect data from the Site without our express written consent</li>
            <li>Submit false, misleading, or fraudulent information through the contact form</li>
          </ul>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>4. Estimates and Quotes</h3>
          <p style={{ marginBottom: '16px' }}>Any estimate, quote, or pricing information provided through this Site, by phone, or by text is non-binding until formalized in a written contract signed by both parties. Estimates are subject to change based on site conditions, material costs, and project scope modifications.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>5. Intellectual Property</h3>
          <p style={{ marginBottom: '16px' }}>All content on this Site, including but not limited to text, graphics, logos, images, and project photographs, is the property of IGI Home Renovations or its content suppliers and is protected under applicable United States copyright law (17 U.S.C. § 101 et seq.) and other intellectual property laws.</p>
          <p style={{ marginBottom: '16px' }}>You may not reproduce, distribute, modify, publicly display, or create derivative works from any content on this Site without our express prior written permission.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>6. User-Submitted Content</h3>
          <p style={{ marginBottom: '8px' }}>By submitting information through our contact form, you represent and warrant that:</p>
          <ul style={{ marginLeft: '24px', marginBottom: '16px' }}>
            <li>All information provided is accurate, current, and complete</li>
            <li>You have the legal authority to request services for the property described</li>
            <li>You are at least 18 years of age</li>
          </ul>
          <p style={{ marginBottom: '16px' }}>You grant IGI Home Renovations a non-exclusive, royalty-free license to use the information submitted solely for the purpose of responding to your inquiry and providing requested services.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>7. Disclaimer of Warranties</h3>
          <p style={{ marginBottom: '16px' }}>THIS SITE AND ALL CONTENT, INFORMATION, AND SERVICES PROVIDED THROUGH IT ARE OFFERED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>
          <p style={{ marginBottom: '16px' }}>We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>8. Limitation of Liability</h3>
          <p style={{ marginBottom: '16px' }}>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IGI HOME RENOVATIONS, ITS OWNERS, EMPLOYEES, AGENTS, AND SUBCONTRACTORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THIS SITE OR THE INFORMATION CONTAINED HEREIN, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          <p style={{ marginBottom: '16px' }}>Our total liability for any claim arising out of the use of this Site shall not exceed one hundred dollars ($100.00).</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>9. Indemnification</h3>
          <p style={{ marginBottom: '16px' }}>You agree to indemnify, defend, and hold harmless IGI Home Renovations and its officers, employees, agents, and subcontractors from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of your use of the Site, your violation of these Terms, or your submission of false or inaccurate information.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>10. Communications Consent</h3>
          <p style={{ marginBottom: '16px' }}>By providing your phone number through this Site, you expressly consent to receive calls and/or text messages from IGI Home Renovations, including messages sent using automated dialing technology, in accordance with the TCPA (47 U.S.C. § 227). You may revoke consent at any time by replying STOP to any text message or by contacting us directly.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>11. Third-Party Services</h3>
          <p style={{ marginBottom: '16px' }}>This Site may contain links to third-party platforms (Thumbtack, Instagram, Facebook, Blinq). These links are provided for convenience only. IGI Home Renovations does not endorse and is not responsible for the content, policies, or practices of any third-party websites.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>12. Privacy</h3>
          <p style={{ marginBottom: '16px' }}>Your use of this Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>13. Governing Law and Dispute Resolution</h3>
          <p style={{ marginBottom: '16px' }}>These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.</p>
          <p style={{ marginBottom: '16px' }}>Any dispute arising out of or relating to these Terms or the use of this Site shall first be subject to good-faith negotiation between the parties. If not resolved within thirty (30) days, disputes shall be submitted to binding arbitration in Orange County, Florida, under the rules of the American Arbitration Association (AAA). Nothing herein prevents either party from seeking injunctive relief in a court of competent jurisdiction.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>14. Severability</h3>
          <p style={{ marginBottom: '16px' }}>If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>15. Entire Agreement</h3>
          <p style={{ marginBottom: '16px' }}>These Terms, together with the Privacy Policy, constitute the entire agreement between you and IGI Home Renovations regarding your use of this Site and supersede all prior agreements or understandings relating to the same subject matter.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>16. Changes to These Terms</h3>
          <p style={{ marginBottom: '16px' }}>We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the Site with a revised "Last Updated" date. Continued use of the Site after any changes constitutes acceptance of the revised Terms.</p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '32px', marginBottom: '12px', color: '#11132A' }}>17. Contact Information</h3>
          <p style={{ marginBottom: '16px' }}>For questions about these Terms of Service, please contact:<br /><strong>IGI Home Renovations</strong><br />Phone/Text: (321) 424-4693</p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
