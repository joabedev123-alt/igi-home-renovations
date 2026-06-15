import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const phases = [
  { num: '01', icon: 'bi-clipboard2-check', title: 'Initial Assessment', desc: 'We evaluate the property, understand the renovation scope, set goals, and create a comprehensive project plan with timelines and budget.' },
  { num: '02', icon: 'bi-calendar3', title: 'Scheduling & Procurement', desc: 'We coordinate all trades, order materials, and build a master schedule to ensure every phase runs smoothly and on time.' },
  { num: '03', icon: 'bi-people', title: 'Execution & Oversight', desc: 'Our team manages all subcontractors and work phases daily, ensuring quality standards and timeline adherence at every step.' },
  { num: '04', icon: 'bi-graph-up-arrow', title: 'Progress Reporting', desc: 'Regular updates keep you informed on progress, costs, and any scope changes — complete transparency throughout.' },
  { num: '05', icon: 'bi-check2-all', title: 'Quality Control', desc: 'Thorough inspections at each phase milestone ensure every detail meets our standards before moving forward.' },
  { num: '06', icon: 'bi-house-check', title: 'Final Delivery', desc: 'Final walkthrough, punch list completion, and handoff — your property delivered on time and on budget.' },
];

const clients = [
  {
    icon: 'bi-building',
    title: 'Real Estate Investors',
    desc: 'Fix-and-flip investors rely on IGI to maximize renovation ROI with fast timelines and resale-focused upgrades. We understand holding costs and move efficiently.',
    tags: ['Fix & Flip', 'Fast Turnaround', 'ROI-Focused'],
  },
  {
    icon: 'bi-house-heart',
    title: 'Homeowners',
    desc: 'For homeowners managing large renovations, our project management service removes the stress of coordinating multiple contractors and timelines.',
    tags: ['Stress-Free', 'Single Point of Contact', 'Full Coordination'],
  },
  {
    icon: 'bi-people-fill',
    title: 'Property Managers',
    desc: "We handle multi-unit renovation projects for landlords and property management companies — coordinating all trades and maintaining your portfolio efficiently.",
    tags: ['Multi-Unit', 'Consistent Quality', 'Portfolio Ready'],
  },
];

const ProjectManagement: React.FC = () => {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="bg-hero" style={{ padding: '144px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div className="geo-circle" style={{ width: '600px', height: '600px', top: '-250px', right: '-150px', opacity: 0.25 }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp} style={{ maxWidth: '680px' }}>
            <span className="section-label">Turnkey Solutions</span>
            <h1 style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: 'clamp(32px, 5vw, 56px)', color: 'white', lineHeight: '1.15', marginBottom: '20px' }}>
              Project <span className="gradient-text">Management</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.75', marginBottom: '32px' }}>
              One team. One point of contact. Complete coordination from planning through final delivery — we manage your renovation so you don't have to.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="tel:+13214244693" className="btn-call">
                <i className="bi bi-telephone-fill" /> Call to Discuss Your Project
              </a>
              <a href="sms:+13214244693" className="btn-text">
                <i className="bi bi-chat-dots-fill" /> Text Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div {...fadeUp}>
              <span className="section-label">What We Offer</span>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                Full-Service Renovation<br />Coordination
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                Managing a renovation involves dozens of moving parts — contractors, timelines, materials, permits, and quality control. A single coordination failure can cascade into delays, cost overruns, and stress.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '32px' }}>
                IGI's project management service gives you a dedicated team that handles every aspect of your renovation from start to finish, delivering your property on time and on budget.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {[
                  { icon: 'bi-clock-history', label: 'On-Time Delivery' },
                  { icon: 'bi-currency-dollar', label: 'Budget Control' },
                  { icon: 'bi-shield-check', label: 'Quality Assured' },
                  { icon: 'bi-chat-dots', label: 'Clear Communication' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', background: '#F5F7FA', borderRadius: '10px', border: '1px solid rgba(17,19,42,0.06)' }}>
                    <i className={`bi ${item.icon}`} style={{ color: '#0E8FD8', fontSize: '20px', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#11132A' }}>{item.label}</span>
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
              <div style={{ background: 'linear-gradient(135deg, #0F1B3D 0%, #11132A 100%)', borderRadius: '20px', padding: '40px', border: '1px solid rgba(88,199,232,0.12)' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: '700', fontSize: '20px', color: 'white', marginBottom: '8px' }}>
                  What's Included
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>
                  Every project management engagement includes:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'Dedicated project manager for your property',
                    'Detailed scope of work & budget breakdown',
                    'All trade coordination (plumbing, tile, paint, etc.)',
                    'Material sourcing & procurement',
                    'Daily site supervision & quality checks',
                    'Weekly progress reports',
                    'Final walkthrough & punch list',
                    'Single invoice for all completed work',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <i className="bi bi-check-circle-fill" style={{ color: '#34D2B4', fontSize: '16px', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.5' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section className="section-padding bg-section-dark">
        <div className="container-custom">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Our Process</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', color: 'white', marginBottom: '16px' }}>
              From Start to <span className="gradient-text-cyan">Final Delivery</span>
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
              A structured, proven process that keeps every project on track.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '24px' }}>
            {phases.map((phase, i) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="card-dark"
                style={{ padding: '32px 28px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #0E8FD8, #34D2B4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <i className={`bi ${phase.icon}`} style={{ color: 'white', fontSize: '20px' }} />
                  </div>
                  <span style={{ fontFamily: 'Montserrat', fontWeight: '800', fontSize: '12px', color: 'rgba(88,199,232,0.5)', letterSpacing: '1.5px' }}>
                    PHASE {phase.num}
                  </span>
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '18px', color: 'white', marginBottom: '10px' }}>{phase.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)' }}>{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section-padding" style={{ background: '#F5F7FA' }}>
        <div className="container-custom">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Who We Work With</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', marginBottom: '16px' }}>
              Built for Every Property Owner
            </h2>
            <p style={{ fontSize: '17px', color: '#475569', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
              Whether you're flipping a home, upgrading your primary residence, or managing a portfolio — we have you covered.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '28px' }}>
            {clients.map((client, i) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-premium"
                style={{ padding: '36px 32px' }}
              >
                <div className="icon-box" style={{ marginBottom: '20px' }}>
                  <i className={`bi ${client.icon}`} />
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '20px', marginBottom: '12px' }}>{client.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.75', color: '#475569', marginBottom: '20px' }}>{client.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {client.tags.map(tag => (
                    <span key={tag} style={{
                      background: 'linear-gradient(135deg, rgba(14,143,216,0.08), rgba(52,210,180,0.06))',
                      border: '1px solid rgba(14,143,216,0.15)',
                      borderRadius: '40px', padding: '4px 14px',
                      fontSize: '12px', fontWeight: '600', color: '#0E8FD8',
                    }}>
                      {tag}
                    </span>
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
              Let's Manage Your Next Project
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto 40px', lineHeight: '1.7' }}>
              Talk to us about your property. We'll create a custom plan and give you a free estimate.
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

export default ProjectManagement;
