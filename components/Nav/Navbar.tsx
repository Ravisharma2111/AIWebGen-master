// components/Navbar.tsx
const Navbar = ({ logoUrl, buttonLabel }) => {
    return (
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <img src={logoUrl} alt="logo" style={{ height: '50px' }} />
        <button>{buttonLabel}</button>
      </nav>
    );
  };
  
  export default Navbar;
  