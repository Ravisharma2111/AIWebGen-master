// In ./components/cta/CTA.tsx
import React from 'react';

type CTAProps = {
  ctaTitle: string;
  ctaDescription: string;
  buttonText: string;
};

const CTA: React.FC<CTAProps> = ({ ctaTitle, ctaDescription, buttonText }) => {
  return (
    <section style={{ backgroundColor: '#007bff', color: 'white', textAlign: 'center', padding: '40px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <h2>{ctaTitle}</h2>
        <p>{ctaDescription}</p>
        <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default CTA;
