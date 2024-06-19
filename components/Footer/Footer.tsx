// components/Footer.tsx
const Footer = ({ imageUrl, ctaText }) => {
    return (
      <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <img src={imageUrl} alt="Footer Logo" style={{ height: '50px' }} />
        <button>{ctaText}</button>
      </footer>
    );
  