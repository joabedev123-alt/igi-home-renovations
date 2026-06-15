import React from 'react';

const MobileCTA: React.FC = () => {
  return (
    <div className="mobile-cta-bar">
      <a
        href="tel:+13214244693"
        style={{
          flex: 1,
          background: 'linear-gradient(135deg, #0E8FD8, #0F4C81)',
          color: 'white',
          borderRadius: '10px',
          padding: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '15px',
          textDecoration: 'none',
          boxShadow: '0 4px 16px rgba(14,143,216,0.3)',
        }}
      >
        <i className="bi bi-telephone-fill"></i>
        Call Now
      </a>
      <a
        href="sms:+13214244693"
        style={{
          flex: 1,
          background: 'linear-gradient(135deg, #34D2B4, #58C7E8)',
          color: '#11132A',
          borderRadius: '10px',
          padding: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '15px',
          textDecoration: 'none',
          boxShadow: '0 4px 16px rgba(52,210,180,0.3)',
        }}
      >
        <i className="bi bi-chat-dots-fill"></i>
        Send Text
      </a>
    </div>
  );
};

export default MobileCTA;
