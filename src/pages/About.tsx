import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const values = [
  { icon: 'bi-award', title: 'Quality Craftsmanship', desc: 'We take pride in every detail, using premium materials and proven techniques on every project.' },
  { icon: 'bi-shield-check', title: 'Licensed & Insured', desc: "Fully licensed and insured in Florida, New Jersey, and Pennsylvania — you're always protected." },
  { icon: 'bi-chat-square-text', title: 'Clear Communication', desc: 'We keep you informed at every stage. No surprises, no guesswork — just straight answers.' },
  { icon: 'bi-clock', title: 'On-Time Delivery', desc: 'We respect your time and your budget. Our projects stay on schedule and on budget.' },
  { icon: 'bi-currency-dollar', title: 'Transparent Pricing', desc: "Itemized estimates with no hidden fees. You know exactly what you're paying for." },
  { icon: 'bi-heart', title: 'Customer Satisfaction', desc: "We don't consider a job done until you're completely satisfied. Your home, your standards." },
];

const areas = [
  { state: 'Florida', cities: ['Orlando Metro Area', 'Kissimmee', 'St. Cloud', 'Osceola County', 'Orange County'] },
  { state: 'New Jersey', cities: ['Northern NJ', 'Central NJ', 'Contact us for full coverage area'] },
  { state: 'Pennsylvania', cities: ['Contact us for coverage area details'] },
];

const About: React.FC = () => {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="bg-hero" style={{ padding: '144px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div className="geo-circle" style={{ width: '500px', height: '500px', top: '-200px', right: '-100px', opacity: 0.25 }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp} style={{ maxWidth: '660px' }}>
            <span className="section-label">Our Story</span>
            <h1 style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: 'clamp(32px, 5vw, 56px)', color: 'white', lineHeight: '1.15', marginBottom: '20px' }}>
              About <span className="gradient-text">IGI Home</span><br />Renovations
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.75' }}>
              A team of dedicated craftsmen committed to transforming homes across Florida, New Jersey, and Pennsylvania with quality, integrity, and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div {...fadeUp}>
              <span className="section-label">Who We Are</span>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                Built on craftsmanship<br />and trust.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                IGI Home Renovations was founded on a simple belief: homeowners and real estate investors deserve a contractor they can trust — one who delivers exceptional quality, shows up on time, and communicates clearly from day one until the final walkthrough.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                With over 10 years of experience in residential renovations, our team has completed more than 100 projects across Florida, New Jersey, and Pennsylvania — from small bathroom upgrades to full gut renovations for fix-and-flip investors.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569' }}>
                We specialize in bathrooms, kitchens, flooring, painting, and full project management — bringing the same level of care and professionalism to every project, regardless of size.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ maxWidth: '400px', width: '100%' }}>
                <div style={{ position: 'relative', marginBottom: '24px' }}>
                  <img 
                    src="/foto.jpeg" 
                    alt="IGI Home Renovations Team" 
                    style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '10px' }}>
                  {[
                    { number: '100+', label: 'Completed Projects', icon: 'bi-house-check' },
                    { number: '3', label: 'Licensed States', icon: 'bi-geo-alt' },
                    { number: '10+', label: 'Years of Experience', icon: 'bi-calendar-check' },
                    { number: '5★', label: 'Average Rating', icon: 'bi-star' },
                  ].map(stat => (
                    <div key={stat.label} style={{
                      padding: '12px 8px', background: '#F5F7FA', borderRadius: '12px',
                      border: '1px solid rgba(17,19,42,0.06)', textAlign: 'center',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <i className={`bi ${stat.icon}`} style={{ fontSize: '16px', color: '#0E8FD8', marginBottom: '6px', display: 'block' }} />
                      <div style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: '18px', color: '#11132A', lineHeight: '1' }}>{stat.number}</div>
                      <div style={{ fontSize: '10px', color: '#475569', marginTop: '4px', lineHeight: '1.2' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-section-dark">
        <div className="container-custom">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Our Values</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', color: 'white', marginBottom: '16px' }}>
              What Drives <span className="gradient-text-cyan">Everything We Do</span>
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="value-card"
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(14,143,216,0.2), rgba(52,210,180,0.15))',
                  border: '1px solid rgba(52,210,180,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <i className={`bi ${v.icon}`} style={{ color: '#34D2B4', fontSize: '22px' }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: '700', fontSize: '16px', color: 'white', marginBottom: '6px' }}>{v.title}</h4>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.65' }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section-padding" style={{ background: '#F5F7FA' }}>
        <div className="container-custom">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Where We Work</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', marginBottom: '16px' }}>Service Areas</h2>
            <p style={{ fontSize: '17px', color: '#475569', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
              We currently serve clients across three states. Contact us to confirm coverage for your specific location.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '24px' }}>
            {areas.map((area, i) => (
              <motion.div
                key={area.state}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-premium"
                style={{ padding: '32px 28px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #0E8FD8, #34D2B4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <i className="bi bi-geo-alt-fill" style={{ color: 'white', fontSize: '20px' }} />
                  </div>
                  <h3 style={{ fontWeight: '700', fontSize: '20px', color: '#11132A' }}>{area.state}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {area.cities.map(city => (
                    <div key={city} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#34D2B4', flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', color: '#475569' }}>{city}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #0F4C81 0%, #11132A 50%, #0E8FD8 100%)', padding: '96px 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: 'clamp(28px, 4vw, 48px)', color: 'white', marginBottom: '16px' }}>
              Ready to Start Your Project?
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto 40px', lineHeight: '1.7' }}>
              Get in touch — we offer free consultations and on-site estimates with no commitment required.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-secondary" style={{ padding: '16px 36px', fontSize: '16px' }}>
                <i className="bi bi-envelope-fill" /> Contact Us
              </Link>
              <a href="tel:+13214244693" className="btn-call" style={{ padding: '16px 36px', fontSize: '16px' }}>
                <i className="bi bi-telephone-fill" /> (321) 424-4693
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
