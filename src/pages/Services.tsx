import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  {
    icon: 'bi-droplet-fill',
    title: 'Bathroom Remodeling',
    desc: 'We transform bathrooms from top to bottom. Whether you want a luxurious spa-like retreat or a clean modern refresh, our team handles every detail — tile work, shower enclosures, vanities, fixtures, and full gut renovations.',
    features: ['Custom tile & stone work', 'Shower & tub surrounds', 'Vanity & fixture upgrades', 'Full gut renovations', 'ADA-accessible designs'],
  },
  {
    icon: 'bi-house-fill',
    title: 'Kitchen Remodeling',
    desc: 'The heart of your home deserves a fresh start. From cabinet refacing to full kitchen remodels, we deliver beautiful, functional kitchens that match your style and budget.',
    features: ['Cabinet installation & refacing', 'Countertop installation', 'Backsplash tile', 'Lighting & fixtures', 'Flooring installation'],
  },
  {
    icon: 'bi-grid-3x3-gap-fill',
    title: 'LVP Flooring',
    desc: 'Luxury Vinyl Plank is the ideal choice for Florida homes and rental properties. Waterproof, durable, and beautiful — we install LVP throughout entire homes or in individual rooms.',
    features: ['Waterproof construction', 'Full home installation', 'Subfloor preparation', 'Transition strips & molding', 'Rental-property ready'],
  },
  {
    icon: 'bi-grid-fill',
    title: 'Ceramic Tile',
    desc: 'Precision tile installation that elevates any space. From bathroom floors to kitchen backsplashes and large-format living room tiles, we deliver clean lines and lasting results.',
    features: ['Floor & wall tile', 'Shower & tub tile', 'Kitchen backsplash', 'Large-format tile', 'Grout & sealant finishing'],
  },
  {
    icon: 'bi-brush-fill',
    title: 'Interior Painting',
    desc: 'A fresh coat of paint is one of the highest-ROI upgrades you can make. Our interior painting services include proper surface prep, priming, and two-coat application with premium paints.',
    features: ['Full interior painting', 'Surface prep & priming', 'Trim & baseboards', 'Ceiling painting', 'Color consultation'],
  },
  {
    icon: 'bi-house-door-fill',
    title: 'Exterior Painting',
    desc: "First impressions matter. We revitalize your home's exterior with weather-resistant paints, proper pressure washing, priming, and professional application.",
    features: ['Pressure washing & prep', 'Stucco repair & painting', 'Trim & shutters', 'Weather-resistant coatings', 'HOA color compliance'],
  },
  {
    icon: 'bi-palette-fill',
    title: 'IGI Pro Painters',
    desc: 'Our dedicated painting division handles high-volume painting for investors, property managers, and landlords. We offer fast turnarounds, competitive rates, and consistent quality across multiple units.',
    features: ['Multi-unit painting', 'Fast turnaround', 'Investor pricing', 'Move-out & move-in ready', 'Consistent color matching'],
    highlight: true,
  },
  {
    icon: 'bi-building',
    title: 'Fix-and-Flip Renovations',
    desc: "We understand the fix-and-flip investor's needs: speed, quality, and ROI. IGI offers comprehensive renovation packages specifically designed to maximize your property's market value.",
    features: ['Full property assessment', 'Comprehensive renovation packages', 'Investor-focused pricing', 'Fast project timelines', 'Resale-value focused upgrades'],
  },
  {
    icon: 'bi-hammer',
    title: 'Full Home Renovations',
    desc: 'For complete property transformations, IGI manages the entire renovation process from start to finish — coordinating all trades, timelines, and materials under one roof.',
    features: ['Complete project management', 'Multiple trade coordination', 'Material procurement', 'Timeline management', 'Single point of contact'],
  },
];

const Services: React.FC = () => {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="bg-hero" style={{ padding: '144px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div className="geo-circle" style={{ width: '500px', height: '500px', top: '-200px', right: '-150px', opacity: 0.25 }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp} style={{ maxWidth: '640px' }}>
            <span className="section-label">What We Do</span>
            <h1 style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: 'clamp(32px, 5vw, 56px)', color: 'white', lineHeight: '1.15', marginBottom: '20px' }}>
              Our <span className="gradient-text">Services</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.75', marginBottom: '32px' }}>
              From single-room updates to full property overhauls, IGI delivers professional renovation services across Florida, New Jersey & Pennsylvania.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="tel:+13214244693" className="btn-call">
                <i className="bi bi-telephone-fill" /> Call for a Free Quote
              </a>
              <a href="sms:+13214244693" className="btn-text">
                <i className="bi bi-chat-dots-fill" /> Text Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding" style={{ background: '#F5F7FA' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '28px' }}>
            {services.map((s, i) => (
              <motion.a
                href={`sms:+13214244693?body=${encodeURIComponent(`Hi IGI Home Renovations! I am interested in your ${s.title} services. Can we schedule a free consultation?`)}`}
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="card-premium"
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                  padding: '36px 32px',
                  ...(s.highlight ? { border: '1.5px solid rgba(14,143,216,0.35)', background: 'linear-gradient(135deg, #fff 0%, rgba(14,143,216,0.04) 100%)' } : {}),
                }}
              >
                {s.highlight && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    background: 'linear-gradient(135deg, #0E8FD8, #34D2B4)',
                    borderRadius: '40px', padding: '4px 14px',
                    fontSize: '12px', fontWeight: '600', color: 'white',
                    marginBottom: '16px', letterSpacing: '0.5px',
                  }}>
                    <i className="bi bi-star-fill" style={{ fontSize: '10px' }} /> Featured Division
                  </div>
                )}
                <div className="icon-box" style={{ marginBottom: '20px' }}>
                  <i className={`bi ${s.icon}`} />
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '20px', marginBottom: '12px', color: '#11132A' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.75', color: '#475569', marginBottom: '24px' }}>{s.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {s.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#475569' }}>
                      <i className="bi bi-check2-circle" style={{ color: '#34D2B4', fontSize: '16px', flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>
                <div>
                  <span style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    fontSize: '13px', 
                    fontWeight: '600', 
                    color: '#0E8FD8', 
                    background: 'rgba(14,143,216,0.08)', 
                    border: '1px solid rgba(14,143,216,0.15)', 
                    padding: '8px 18px', 
                    borderRadius: '30px',
                    transition: 'all 0.3s ease'
                  }}>
                    Learn more <i className="bi bi-arrow-right" style={{ fontSize: '13px' }}></i>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #0F4C81 0%, #11132A 50%, #0E8FD8 100%)', padding: '96px 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: 'clamp(28px, 4vw, 48px)', color: 'white', marginBottom: '16px' }}>
              Not Sure Which Service You Need?
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto 40px', lineHeight: '1.7' }}>
              Call or text us. We'll visit your property, assess the work, and give you a detailed estimate — completely free.
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

export default Services;
