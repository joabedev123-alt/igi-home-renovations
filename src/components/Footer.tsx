import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #0F1B3D 0%, #11132A 100%)', paddingTop: '48px', paddingBottom: '24px' }}>
      <div className="container-custom">
        {/* Top Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', paddingBottom: '32px', borderBottom: '1px solid rgba(88,199,232,0.1)' }}>
          
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '16px' }}>
              <img src="/logo.png" alt="IGI Home Renovations" style={{ height: '140px', width: 'auto' }} />
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>
              Empresa de reformas residenciais completa, atendendo proprietários, investidores e administradores de imóveis na Flórida, Nova Jersey e Pensilvânia.
            </p>
            <div style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Montserrat', color: 'white', marginBottom: '16px' }}>
              <a href="tel:+13214244693" style={{ color: 'white', textDecoration: 'none' }}>(321) 424-4693</a>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <a href="tel:+13214244693" className="btn-call" style={{ padding: '10px 16px', fontSize: '13px' }}>
                <i className="bi bi-telephone-fill"></i> Chamar
              </a>
              <a href="sms:+13214244693" className="btn-text" style={{ padding: '10px 16px', fontSize: '13px' }}>
                <i className="bi bi-chat-dots-fill"></i> Texto
              </a>
            </div>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://www.instagram.com/igihomerenovations" target="_blank" rel="noopener noreferrer"
                style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '16px', textDecoration: 'none', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(14,143,216,0.2)'; (e.currentTarget as HTMLElement).style.color = '#58C7E8'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
              ><i className="bi bi-instagram"></i></a>
              <a href="https://www.facebook.com/share/1W6gzd8YDP/" target="_blank" rel="noopener noreferrer"
                style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '16px', textDecoration: 'none', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(14,143,216,0.2)'; (e.currentTarget as HTMLElement).style.color = '#58C7E8'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
              ><i className="bi bi-facebook"></i></a>
              <a href="https://blinq.me/6EmrW9XaMHTQ?bs=db" target="_blank" rel="noopener noreferrer"
                style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '16px', textDecoration: 'none', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(52,210,180,0.2)'; (e.currentTarget as HTMLElement).style.color = '#34D2B4'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
              ><i className="bi bi-person-vcard"></i></a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontFamily: 'Montserrat', fontWeight: '700', fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#58C7E8', marginBottom: '16px' }}>Empresa</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[['Lar', '/'], ['Serviços', '/services'], ['Projetos', '/projects'], ['Gerenciamento de projetos', '/project-management'], ['Sobre', '/about'], ['Contato', '/contact']].map(([label, path]) => (
                <Link key={path} to={path} className="footer-link">{label}</Link>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 style={{ fontFamily: 'Montserrat', fontWeight: '700', fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#58C7E8', marginBottom: '16px' }}>Serviços</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Reforma de banheiro', 'Remodelação de cozinha', 'Piso de vinil de luxo (LVP)', 'Azulejo cerâmico', 'Pintura de Interiores', 'Pintura Exterior', 'Pintores profissionais IGI', 'Reforma e revenda', 'Reforma completa de casa'].map(s => (
                <Link key={s} to="/services" className="footer-link">{s}</Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 style={{ fontFamily: 'Montserrat', fontWeight: '700', fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#58C7E8', marginBottom: '16px' }}>Áreas de atendimento</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Área Metropolitana de Orlando', 'Kissimmee', 'Santa Nuvem', 'Condado de Osceola', 'Condado de Orange', 'Nova Jersey', 'Pensilvânia'].map(a => (
                <span key={a} className="footer-link" style={{ cursor: 'default' }}>{a}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Reformas Residenciais IGI.
          </p>
          <div style={{ display: 'flex', gap: '24px', fontSize: '13px' }}>
            <Link to="/privacy-policy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#58C7E8'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Política de Privacidade</Link>
            <Link to="/terms-of-service" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#58C7E8'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Termos de Serviço</Link>
          </div>
          <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#34D2B4'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
            Produzida com 💚 por CAMALY
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
