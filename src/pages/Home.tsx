import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  { icon: 'bi-water', title: 'Bathroom Remodeling', desc: 'Complete bathroom transformations — tile, custom showers, vanities, and full gut renovations.' },
  { icon: 'bi-cup-hot-fill', title: 'Kitchen Remodeling', desc: 'Modern kitchen upgrades including custom cabinets, countertops, and elegant backsplash tile.' },
  { icon: 'bi-layers-fill', title: 'Luxury Vinyl Plank (LVP)', desc: 'Professional installation of durable, beautiful LVP flooring throughout your entire home.' },
  { icon: 'bi-grid-3x3-gap-fill', title: 'Ceramic Tile', desc: 'Expert tile installation for floors, walls, custom showers, and elegant backsplashes.' },
  { icon: 'bi-paint-bucket', title: 'Interior Painting', desc: 'Flawless interior finishes using premium paints and meticulous professional prep work.' },
  { icon: 'bi-brush-fill', title: 'Exterior Painting', desc: 'Curb appeal transformations with high-quality, weather-resistant exterior coatings.' },
];

const stats = [
  { number: '+100', label: 'Projetos Concluídos' },
  { number: '3', label: 'States Served' },
  { number: '10+', label: 'Years Experience' },
  { number: '5★', label: 'Client Reviews' },
];

const process = [
  { num: '01', title: 'Free Consultation', desc: 'We visit your property, understand your vision, and assess the scope of work.' },
  { num: '02', title: 'Detailed Estimate', desc: 'Transparent, itemized quote with no hidden fees or surprises.' },
  { num: '03', title: 'Expert Execution', desc: 'Our skilled team delivers quality craftsmanship on schedule.' },
  { num: '04', title: 'Final Walkthrough', desc: 'We review every detail together until you are 100% satisfied.' },
];

const Home: React.FC = () => {
  return (
    <div>
      {/* HERO — full-bleed background */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
        }} />

        {/* Dark overlay gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(17,19,42,0.65) 0%, rgba(15,27,61,0.45) 50%, rgba(15,27,61,0.20) 100%)',
        }} />

        {/* Subtle geometric circles */}
        <div className="geo-circle" style={{ width: '600px', height: '600px', top: '-200px', right: '-150px', opacity: 0.18 }} />
        <div className="geo-circle" style={{ width: '300px', height: '300px', bottom: '-100px', left: '-80px', opacity: 0.10 }} />

        {/* Content */}
        <div className="container-custom" style={{ position: 'relative', zIndex: 2, paddingTop: '120px', paddingBottom: '140px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Headline */}
            <h1 style={{
              fontFamily: 'Montserrat',
              fontWeight: '800',
              fontSize: 'clamp(20px, 3.2vw, 52px)',
              color: 'white',
              lineHeight: '1.2',
              marginBottom: '18px',
              letterSpacing: '-0.3px',
            }}>
              Renovation Experts for Homes,<br />
              <span className="gradient-text">Investments & Property Upgrades.</span>
            </h1>

            {/* Subheadline */}
            <p style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '28px',
            }}>
              IGI Home Renovations helps homeowners, real estate investors, and property managers transform properties through remodeling, painting, flooring, and complete renovation solutions.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a href="tel:+13214244693" className="btn-call" style={{ padding: '13px 26px', fontSize: '14px' }}>
                <i className="bi bi-telephone-fill" /> Call Now
              </a>
              <a href="sms:+13214244693" className="btn-text" style={{ padding: '13px 26px', fontSize: '14px' }}>
                <i className="bi bi-chat-dots-fill" /> Get Free Quote
              </a>
              <Link to="/projects" className="btn-outline" style={{ padding: '13px 22px', fontSize: '14px' }}>
                View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Bottom bar — floating stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              marginTop: '40px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
            }}
          >
            {[
              { icon: 'bi-star-fill', text: '5-Star Rated' },
              { icon: 'bi-shield-check', text: 'Licensed & Insured' },
              { icon: 'bi-geo-alt-fill', text: 'Florida • New Jersey • Pennsylvania' },
              { icon: 'bi-telephone-fill', text: '(321) 424-4693' },
            ].map(item => (
              <div key={item.text} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                fontSize: '13px', fontWeight: '500',
                color: 'rgba(255,255,255,0.6)',
              }}>
                <i className={`bi ${item.icon}`} style={{ color: '#58C7E8', fontSize: '14px' }} />
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
          background: 'linear-gradient(to top, #11132A, transparent)',
          pointerEvents: 'none',
        }} />
      </section>



      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-custom">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Our Services</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', marginBottom: '16px' }}>
              Everything Your Home Needs
            </h2>
            <p style={{ fontSize: '17px', color: '#475569', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
              From single-room upgrades to complete residential transformations, IGI always delivers exclusive, exceptional results.
            </p>
          </motion.div>

          <div className="grid-services">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.05, translateY: -10, boxShadow: '0 20px 40px rgba(14,143,216,0.15)' }}
                className="card-dark"
                style={{ padding: '32px 28px', cursor: 'pointer', position: 'relative', overflow: 'hidden', background: '#0F1B3D', border: '1px solid rgba(88,199,232,0.15)' }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', background: 'linear-gradient(135deg, rgba(14,143,216,0.15), transparent)', borderBottomLeftRadius: '120px', zIndex: 0 }} />
                <div className="icon-box" style={{ marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                  <i className={`bi ${s.icon}`} />
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '10px', color: 'white', position: 'relative', zIndex: 1 }}>{s.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(255,255,255,0.6)', position: 'relative', zIndex: 1 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn-primary">
              View All Services <i className="bi bi-arrow-right" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY IGI */}
      <section className="section-padding bg-section-dark">
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div {...fadeUp}>
              <span className="section-label">Why Choose IGI</span>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '800', color: 'white', lineHeight: '1.2', marginBottom: '24px' }}>
                The Professional Standard<br />
                <span className="gradient-text-cyan">You Deserve</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '36px' }}>
                We're not just contractors — we're craftsmen who take pride in every detail, every finish, and every client relationship we build.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { icon: 'bi-shield-check', text: 'Licensed, bonded & insured in FL, NJ, and PA' },
                  { icon: 'bi-clock', text: 'On-time project delivery with clear timelines' },
                  { icon: 'bi-chat-square-text', text: 'Transparent communication throughout every project' },
                  { icon: 'bi-currency-dollar', text: 'Fair, competitive pricing with no hidden costs' },
                  { icon: 'bi-people', text: 'Experienced team with 10+ years in the industry' },
                  { icon: 'bi-trophy', text: '5-star quality on every single project' },
                ].map(item => (
                  <div key={item.text} className="value-card">
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '10px',
                      background: 'linear-gradient(135deg, rgba(14,143,216,0.18), rgba(52,210,180,0.12))',
                      border: '1px solid rgba(52,210,180,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <i className={`bi ${item.icon}`} style={{ color: '#34D2B4', fontSize: '17px' }} />
                    </div>
                    <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.5' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { icon: 'bi-house-check', label: 'Residential', sub: 'Homeowners' },
                  { icon: 'bi-building', label: 'Investment', sub: 'Fix & Flip' },
                  { icon: 'bi-people-fill', label: 'Property Mgmt', sub: 'Investors' },
                  { icon: 'bi-palette', label: 'IGI Pro', sub: 'Painting Division' },
                ].map(item => (
                  <div key={item.label} className="card-dark" style={{ padding: '28px 24px', textAlign: 'center' }}>
                    <i className={`bi ${item.icon}`} style={{ fontSize: '30px', color: '#58C7E8', marginBottom: '12px', display: 'block' }} />
                    <div style={{ fontFamily: 'Montserrat', fontWeight: '700', fontSize: '15px', color: 'white', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{item.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '20px' }}>
                <Link to="/about" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                  Learn About Us <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-custom">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>How It Works</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', marginBottom: '16px' }}>
              Simple & Stress-Free Process
            </h2>
            <p style={{ fontSize: '17px', color: '#475569', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
              Getting your renovation started is easy. We handle every detail so you don't have to.
            </p>
          </motion.div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {process.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="process-step"
                style={{ padding: '0 20px', flex: '1 1 200px', maxWidth: '280px' }}
              >
                <div className="process-number">{step.num}</div>
                <h4 style={{ fontWeight: '700', fontSize: '16px', marginBottom: '8px' }}>{step.title}</h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>{step.desc}</p>
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
              Contact us today for a free, no-obligation estimate. Let's bring your vision to life.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+13214244693" className="btn-call" style={{ padding: '16px 36px', fontSize: '16px' }}>
                <i className="bi bi-telephone-fill" /> (321) 424-4693
              </a>
              <a href="sms:+13214244693" className="btn-text" style={{ padding: '16px 36px', fontSize: '16px' }}>
                <i className="bi bi-chat-dots-fill" /> Send Us a Text
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
