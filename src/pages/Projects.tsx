import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const categories = ['All', 'Bathroom', 'Kitchen', 'Flooring', 'Painting', 'Full Renovation'];

const projects = [
  { id: 1, title: 'Master Bath Remodel', category: 'Bathroom', location: 'Kissimmee, FL', desc: 'Complete gut renovation with custom tile shower, floating vanity, and modern fixtures.' },
  { id: 2, title: 'Guest Bathroom Refresh', category: 'Bathroom', location: 'Orlando, FL', desc: 'Tile surround, new vanity, and fresh paint to transform a dated bathroom.' },
  { id: 3, title: 'Kitchen Renovation', category: 'Kitchen', location: 'St. Cloud, FL', desc: 'Full kitchen remodel with new cabinets, quartz countertops, and tile backsplash.' },
  { id: 4, title: 'LVP Flooring — Full Home', category: 'Flooring', location: 'Osceola County, FL', desc: 'Luxury vinyl plank throughout entire 3-bedroom home, including transitions and molding.' },
  { id: 5, title: 'Exterior Paint — Investment Property', category: 'Painting', location: 'Orange County, FL', desc: 'Full exterior repaint with pressure wash, stucco patch, and weather-resistant coating.' },
  { id: 6, title: 'Fix-and-Flip Full Reno', category: 'Full Renovation', location: 'New Jersey', desc: 'Complete property overhaul for resale — flooring, painting, bathrooms, and kitchen.' },
  { id: 7, title: 'Interior Painting — 4-Unit', category: 'Painting', location: 'Orlando, FL', desc: 'Multi-unit interior painting for property management company with fast 3-day turnaround.' },
  { id: 8, title: 'Ceramic Tile Bathroom', category: 'Bathroom', location: 'Kissimmee, FL', desc: 'Floor-to-ceiling ceramic tile installation in a primary bathroom shower and floor.' },
  { id: 9, title: 'Kitchen Cabinet Refresh', category: 'Kitchen', location: 'Pennsylvania', desc: 'Cabinet painting, new hardware, and backsplash tile to modernize a dated kitchen.' },
  { id: 10, title: 'LVP + Tile Combo', category: 'Flooring', location: 'St. Cloud, FL', desc: 'LVP in living areas with matching ceramic tile in wet areas for a cohesive look.' },
  { id: 11, title: 'Full Home Interior Paint', category: 'Painting', location: 'Osceola County, FL', desc: 'Complete interior paint job with wall prep, priming, ceilings, trim, and doors.' },
  { id: 12, title: 'Investor Renovation Package', category: 'Full Renovation', location: 'New Jersey', desc: 'Bathroom, kitchen refresh, LVP flooring, and full interior paint for resale.' },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="bg-hero" style={{ padding: '144px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div className="geo-circle" style={{ width: '500px', height: '500px', top: '-200px', right: '-100px', opacity: 0.25 }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp} style={{ maxWidth: '640px' }}>
            <span className="section-label">Our Portfolio</span>
            <h1 style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: 'clamp(32px, 5vw, 56px)', color: 'white', lineHeight: '1.15', marginBottom: '20px' }}>
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.75' }}>
              Real work. Real results. Browse our portfolio of completed renovations across Florida, New Jersey, and Pennsylvania.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-padding" style={{ background: '#F5F7FA' }}>
        <div className="container-custom">
          {/* Filter Tabs */}
          <motion.div {...fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '48px', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '28px' }}
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="card-premium"
                  style={{ overflow: 'hidden' }}
                >
                  <div className="photo-placeholder" style={{ minHeight: '220px', borderRadius: '0', margin: '0', border: 'none', borderBottom: '1px dashed rgba(88,199,232,0.2)' }}>
                    <i className="bi bi-image" style={{ fontSize: '36px' }} />
                    <span style={{ fontSize: '13px' }}>Project Photo</span>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '12px' }}>
                      <h3 style={{ fontWeight: '700', fontSize: '17px', lineHeight: '1.3', color: '#11132A' }}>{project.title}</h3>
                      <span style={{
                        background: 'linear-gradient(135deg, rgba(14,143,216,0.1), rgba(52,210,180,0.08))',
                        border: '1px solid rgba(14,143,216,0.2)',
                        borderRadius: '40px', padding: '3px 12px',
                        fontSize: '11px', fontWeight: '600', color: '#0E8FD8',
                        whiteSpace: 'nowrap', flexShrink: 0,
                      }}>
                        {project.category}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                      <i className="bi bi-geo-alt" style={{ color: '#58C7E8', fontSize: '13px' }} />
                      <span style={{ fontSize: '13px', color: '#475569' }}>{project.location}</span>
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: '1.65', color: '#475569' }}>{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #0F4C81 0%, #11132A 50%, #0E8FD8 100%)', padding: '96px 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <h2 style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: 'clamp(28px, 4vw, 48px)', color: 'white', marginBottom: '16px' }}>
              Want Your Home in Our Portfolio?
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '460px', margin: '0 auto 40px', lineHeight: '1.7' }}>
              Let's plan your renovation. Call or text us for a free consultation and estimate.
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

export default Projects;
