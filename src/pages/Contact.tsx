import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const smsBody = encodeURIComponent(
    `Hi IGI! My name is ${formData.name || 'there'}. I'm interested in: ${formData.service || 'a renovation'}. ${formData.message || ''}`.trim()
  );

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="bg-hero" style={{ padding: '144px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div className="geo-circle" style={{ width: '500px', height: '500px', top: '-200px', right: '-100px', opacity: 0.25 }} />
        <div className="geo-circle" style={{ width: '280px', height: '280px', bottom: '-100px', left: '-60px', opacity: 0.15 }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp} style={{ maxWidth: '660px' }}>
            <span className="section-label">Free Estimate</span>
            <h1 style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: 'clamp(32px, 5vw, 56px)', color: 'white', lineHeight: '1.15', marginBottom: '20px' }}>
              Let's Talk About<br />
              <span className="gradient-text">Your Project</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.75' }}>
              Call, text, or fill out the form below. We respond fast and offer free on-site consultations — no commitment required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="section-padding" style={{ background: '#F5F7FA' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '64px', alignItems: 'start' }}>

            {/* LEFT — Contact Info */}
            <motion.div {...fadeUp}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', color: '#11132A', marginBottom: '8px', lineHeight: '1.2' }}>
                Get in Touch
              </h2>
              <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.8', marginBottom: '40px' }}>
                Ready to start your renovation? Reach out by phone, text, or social media. We serve homeowners, investors, and property managers across Florida, New Jersey & Pennsylvania.
              </p>

              {/* Phone */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                <a href="tel:+13214244693" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', padding: '20px 24px', background: 'white', borderRadius: '14px', border: '1px solid rgba(17,19,42,0.08)', boxShadow: '0 2px 12px rgba(17,19,42,0.06)', transition: 'all 0.2s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(14,143,216,0.15)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,143,216,0.2)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(17,19,42,0.06)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(17,19,42,0.08)'; }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, #0E8FD8, #34D2B4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="bi bi-telephone-fill" style={{ color: 'white', fontSize: '22px' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#475569', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>Call Us</div>
                    <div style={{ fontFamily: 'Montserrat', fontWeight: '700', fontSize: '22px', color: '#11132A' }}>(321) 424-4693</div>
                  </div>
                  <i className="bi bi-arrow-right" style={{ color: '#0E8FD8', fontSize: '18px', marginLeft: 'auto' }} />
                </a>

                <a href="sms:+13214244693" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', padding: '20px 24px', background: 'white', borderRadius: '14px', border: '1px solid rgba(17,19,42,0.08)', boxShadow: '0 2px 12px rgba(17,19,42,0.06)', transition: 'all 0.2s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(52,210,180,0.15)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(52,210,180,0.2)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(17,19,42,0.06)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(17,19,42,0.08)'; }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, #34D2B4, #58C7E8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="bi bi-chat-dots-fill" style={{ color: '#11132A', fontSize: '22px' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#475569', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>Send a Text</div>
                    <div style={{ fontFamily: 'Montserrat', fontWeight: '700', fontSize: '22px', color: '#11132A' }}>(321) 424-4693</div>
                  </div>
                  <i className="bi bi-arrow-right" style={{ color: '#34D2B4', fontSize: '18px', marginLeft: 'auto' }} />
                </a>
              </div>

              {/* Social */}
              <div style={{ marginBottom: '40px' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#475569', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>
                  Find Us Online
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {[
                    { href: 'https://www.instagram.com/igihomerenovations', icon: 'bi-instagram', label: 'Instagram', color: '#E1306C' },
                    { href: 'https://www.facebook.com/share/1W6gzd8YDP/', icon: 'bi-facebook', label: 'Facebook', color: '#1877F2' },
                    { href: 'https://blinq.me/6EmrW9XaMHTQ?bs=db', icon: 'bi-person-vcard', label: 'Blinq Card', color: '#34D2B4' },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', background: 'white', borderRadius: '10px', border: '1px solid rgba(17,19,42,0.08)', textDecoration: 'none', color: '#11132A', fontSize: '14px', fontWeight: '500', transition: 'all 0.2s ease', boxShadow: '0 2px 8px rgba(17,19,42,0.05)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px rgba(17,19,42,0.1)`; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(17,19,42,0.05)'; }}
                    >
                      <i className={`bi ${s.icon}`} style={{ fontSize: '18px', color: s.color }} />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Service Areas Quick View */}
              <div style={{ padding: '24px', background: 'white', borderRadius: '14px', border: '1px solid rgba(17,19,42,0.08)' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#475569', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>
                  Service Areas
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { state: 'Florida', cities: 'Orlando, Kissimmee, St. Cloud, Osceola & Orange County' },
                    { state: 'New Jersey', cities: 'Northern & Central NJ' },
                    { state: 'Pennsylvania', cities: 'Contact us for details' },
                  ].map(a => (
                    <div key={a.state} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="bi bi-geo-alt-fill" style={{ color: '#0E8FD8', fontSize: '14px', marginTop: '3px', flexShrink: 0 }} />
                      <div>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: '#11132A' }}>{a.state}: </span>
                        <span style={{ fontSize: '14px', color: '#475569' }}>{a.cities}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 8px 40px rgba(17,19,42,0.1)', border: '1px solid rgba(17,19,42,0.06)' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: '700', fontSize: '22px', color: '#11132A', marginBottom: '6px' }}>
                  Request a Free Estimate
                </h3>
                <p style={{ fontSize: '14px', color: '#475569', marginBottom: '28px', lineHeight: '1.6' }}>
                  Fill out the form and we'll reach out within 24 hours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#11132A', marginBottom: '6px' }}>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '13px 16px', border: '1.5px solid rgba(17,19,42,0.12)', borderRadius: '8px', fontSize: '15px', color: '#11132A', outline: 'none', fontFamily: 'Inter', transition: 'border-color 0.2s', background: '#FAFAFA' }}
                        onFocus={e => (e.target.style.borderColor = '#0E8FD8')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(17,19,42,0.12)')}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#11132A', marginBottom: '6px' }}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(407) 555-1234"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '13px 16px', border: '1.5px solid rgba(17,19,42,0.12)', borderRadius: '8px', fontSize: '15px', color: '#11132A', outline: 'none', fontFamily: 'Inter', transition: 'border-color 0.2s', background: '#FAFAFA' }}
                        onFocus={e => (e.target.style.borderColor = '#0E8FD8')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(17,19,42,0.12)')}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#11132A', marginBottom: '6px' }}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '13px 16px', border: '1.5px solid rgba(17,19,42,0.12)', borderRadius: '8px', fontSize: '15px', color: '#11132A', outline: 'none', fontFamily: 'Inter', transition: 'border-color 0.2s', background: '#FAFAFA' }}
                      onFocus={e => (e.target.style.borderColor = '#0E8FD8')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(17,19,42,0.12)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#11132A', marginBottom: '6px' }}>Service Needed</label>
                    <div style={{ position: 'relative' }}>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '13px 40px 13px 16px', border: '1.5px solid rgba(17,19,42,0.12)', borderRadius: '8px', fontSize: '15px', color: formData.service ? '#11132A' : '#94A3B8', outline: 'none', fontFamily: 'Inter', transition: 'border-color 0.2s', background: '#FAFAFA', appearance: 'none', cursor: 'pointer' }}
                        onFocus={e => (e.target.style.borderColor = '#0E8FD8')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(17,19,42,0.12)')}
                      >
                        <option value="">Select a service...</option>
                        <option>Bathroom Remodeling</option>
                        <option>Kitchen Remodeling</option>
                        <option>LVP Flooring</option>
                        <option>Ceramic Tile</option>
                        <option>Interior Painting</option>
                        <option>Exterior Painting</option>
                        <option>IGI Pro Painters</option>
                        <option>Fix-and-Flip Renovation</option>
                        <option>Full Home Renovation</option>
                        <option>Project Management</option>
                        <option>Other</option>
                      </select>
                      <i className="bi bi-chevron-down" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#475569', fontSize: '14px', pointerEvents: 'none' }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#11132A', marginBottom: '6px' }}>Tell Us About Your Project</label>
                    <textarea
                      name="message"
                      placeholder="Describe your project, timeline, and any questions you have..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      style={{ width: '100%', padding: '13px 16px', border: '1.5px solid rgba(17,19,42,0.12)', borderRadius: '8px', fontSize: '15px', color: '#11132A', outline: 'none', fontFamily: 'Inter', transition: 'border-color 0.2s', background: '#FAFAFA', resize: 'vertical', minHeight: '120px' }}
                      onFocus={e => (e.target.style.borderColor = '#0E8FD8')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(17,19,42,0.12)')}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <a
                      href={`sms:+13214244693?body=${smsBody}`}
                      className="btn-secondary"
                      style={{ justifyContent: 'center', padding: '16px', fontSize: '15px' }}
                    >
                      <i className="bi bi-send-fill" /> Send via Text Message
                    </a>
                    <a
                      href="tel:+13214244693"
                      className="btn-outline"
                      style={{ justifyContent: 'center', padding: '15px', fontSize: '15px', color: '#11132A', borderColor: 'rgba(17,19,42,0.25)' }}
                    >
                      <i className="bi bi-telephone-fill" /> Or Call Us Directly
                    </a>
                  </div>

                  <p style={{ fontSize: '12px', color: '#94A3B8', textAlign: 'center', lineHeight: '1.5' }}>
                    By submitting, your info will be sent directly to IGI via text message. We respond within 24 hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="cta-section" style={{ 
        position: 'relative', 
        padding: '120px 0',
        backgroundImage: 'linear-gradient(135deg, rgba(17,19,42,0.65) 0%, rgba(15,27,61,0.55) 50%, rgba(14,143,216,0.35) 100%), url("/imagens%20zip/Fotos%20IGI%20Home%20Renovation/Photo%20Feb%2002%202026,%203%2040%2016%20PM.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center calc(50% + 40px)',
      }}>
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: 'clamp(24px, 3.5vw, 40px)', color: 'white', marginBottom: '12px' }}>
              Prefer to Call? We're Ready.
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
              Talk to us directly — no forms, no waiting.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+13214244693" className="btn-call" style={{ padding: '16px 36px', fontSize: '16px' }}>
                <i className="bi bi-telephone-fill" /> (321) 424-4693
              </a>
              <a href="sms:+13214244693" className="btn-text" style={{ padding: '16px 36px', fontSize: '16px' }}>
                <i className="bi bi-chat-dots-fill" /> Send a Text
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
