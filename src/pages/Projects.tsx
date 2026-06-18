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
  { 
    id: 1, 
    title: 'Master Bath Remodel', 
    category: 'Bathroom', 
    location: 'Kissimmee, FL', 
    desc: 'Complete gut renovation with custom tile shower, floating vanity, and modern fixtures.',
    images: [
      '/banheiros/banheiro1.jpeg',
      '/banheiros/banheiro2.jpeg',
      '/banheiros/banheiro3.jpeg',
      '/banheiros/banheiro4.jpeg',
      '/banheiros/banheiro5.jpeg'
    ]
  },
  { 
    id: 2, 
    title: 'Transformation: Before and After', 
    category: 'Bathroom', 
    location: 'Orlando, FL', 
    desc: 'See the incredible before and after of this renovation. Custom tile work, new vanity, and fresh paint completely transformed this dated bathroom.',
    images: [
      '/Before and After/Antes 01.jpeg',
      '/Before and After/Depois 01.jpeg',
      '/Before and After/Antes 02.jpeg',
      '/Before and After/Depois 02.jpeg',
      '/Before and After/Antes 03.jpeg',
      '/Before and After/Depois 03.jpeg',
      '/Before and After/Antes 04.jpeg',
      '/Before and After/Depois 04.jpeg'
    ]
  },
  { 
    id: 3, 
    title: 'Complete Kitchen Renovation', 
    category: 'Kitchen', 
    location: 'St. Cloud, FL', 
    desc: 'Full kitchen remodel with new cabinets, quartz countertops, and elegant tile backsplash.',
    images: [
      '/kitchen/cozinha1.jpeg',
      '/kitchen/WhatsApp Image 2026-06-16 at 11.42.40.jpeg',
      '/kitchen/WhatsApp Image 2026-06-16 at 11.42.40 (1).jpeg',
      '/kitchen/WhatsApp Image 2026-06-16 at 11.42.40 (2).jpeg',
      '/kitchen/WhatsApp Image 2026-06-16 at 11.42.40 (3).jpeg',
      '/kitchen/WhatsApp Image 2026-06-16 at 11.42.41.jpeg'
    ]
  },
  { 
    id: 4, 
    title: 'Finished Basement Transformation', 
    category: 'Full Renovation', 
    location: 'Pennsylvania', 
    desc: 'Complete basement finishing including framing, drywall, custom flooring, and modern recessed lighting.',
    images: [
      '/Basements/Basements1.jpeg',
      '/Basements/Basements2.jpeg',
      '/Basements/Basements3.jpeg',
      '/Basements/Basements44.jpeg'
    ]
  },
  { 
    id: 5, 
    title: 'Epoxy Garage Floor Coating', 
    category: 'Flooring', 
    location: 'Orange County, FL', 
    desc: 'Professional epoxy floor application providing a clean, seamless, and high-durability surface for garages and basements.',
    images: [
      '/Epoxy Floor Application/aplicação1.jpeg'
    ]
  },
  { 
    id: 6, 
    title: 'Luxury Vinyl Plank Installation', 
    category: 'Flooring', 
    location: 'New Jersey', 
    desc: 'Premium LVP flooring installation throughout the entire living area, providing a beautiful, durable, and waterproof finish.',
    images: [
      '/Flooring/Flooring1.jpeg',
      '/Flooring/WhatsApp Image 2026-06-16 at 11.44.10.jpeg',
      '/Flooring/WhatsApp Image 2026-06-16 at 11.44.10 (1).jpeg',
      '/Flooring/WhatsApp Image 2026-06-16 at 11.44.10 (2).jpeg'
    ]
  },
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (project.images) {
      setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card-premium"
      style={{ overflow: 'hidden' }}
    >
      {project.images ? (
        <div style={{ position: 'relative', height: '240px', borderBottom: '1px solid rgba(88,199,232,0.1)' }}>
          <img 
            src={project.images[currentImage]} 
            alt={`${project.title} foto ${currentImage + 1}`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          
          {/* Arrows */}
          <button onClick={prevImage} style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(15,27,61,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(4px)', transition: 'background 0.2s' }}>
            <i className="bi bi-chevron-left" style={{ fontSize: '13px' }}></i>
          </button>
          <button onClick={nextImage} style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(15,27,61,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(4px)', transition: 'background 0.2s' }}>
            <i className="bi bi-chevron-right" style={{ fontSize: '13px' }}></i>
          </button>
          
          {/* Dots */}
          <div style={{ position: 'absolute', bottom: '10px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '5px' }}>
            {project.images.map((_: any, idx: number) => (
              <div key={idx} style={{ width: '5px', height: '5px', borderRadius: '50%', background: currentImage === idx ? 'white' : 'rgba(255,255,255,0.4)', transition: 'background 0.3s' }} />
            ))}
          </div>
        </div>
      ) : (
        <div className="photo-placeholder" style={{ minHeight: '220px', borderRadius: '0', margin: '0', border: 'none', borderBottom: '1px dashed rgba(88,199,232,0.2)' }}>
          <i className="bi bi-image" style={{ fontSize: '36px' }} />
          <span style={{ fontSize: '13px' }}>Project Photo</span>
        </div>
      )}
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
  );
};

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
              Renovation Works: <br /><span className="gradient-text">Before & After</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.75', marginBottom: '24px' }}>
              Real work. Incredible results. Browse our portfolio to see complete space transformations in our projects across Florida, New Jersey, and Pennsylvania.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255,255,255,0.85)', fontSize: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center' }}><i className="bi bi-check-circle-fill" style={{ color: '#58C7E8', marginRight: '10px', fontSize: '18px' }}></i> 1,000+ Paint Jobs Completed</li>
              <li style={{ display: 'flex', alignItems: 'center' }}><i className="bi bi-check-circle-fill" style={{ color: '#58C7E8', marginRight: '10px', fontSize: '18px' }}></i> 300+ Bathrooms Remodeled</li>
              <li style={{ display: 'flex', alignItems: 'center' }}><i className="bi bi-check-circle-fill" style={{ color: '#58C7E8', marginRight: '10px', fontSize: '18px' }}></i> 200+ Kitchens Renovated</li>
              <li style={{ display: 'flex', alignItems: 'center' }}><i className="bi bi-shield-fill-check" style={{ color: '#58C7E8', marginRight: '10px', fontSize: '18px' }}></i> Licensed in 3 States</li>
            </ul>
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
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '15px',
                  transition: 'all 0.3s ease',
                  background: activeFilter === cat ? '#0E8FD8' : '#0F1B3D',
                  color: 'white',
                  boxShadow: activeFilter === cat ? '0 4px 15px rgba(14,143,216,0.3)' : '0 4px 6px rgba(0,0,0,0.1)'
                }}
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
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ 
        position: 'relative', 
        padding: '120px 0',
        backgroundImage: 'linear-gradient(135deg, rgba(17,19,42,0.65) 0%, rgba(15,27,61,0.55) 50%, rgba(14,143,216,0.35) 100%), url("/imagens%20zip/Fotos%20IGI%20Home%20Renovation/Photo%20Feb%2002%202026,%203%2040%2016%20PM.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center calc(50% + 40px)',
      }}>
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
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
