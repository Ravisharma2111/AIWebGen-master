// components/base/Navbar.tsx
import React from 'react';

type NavbarProps = {
  links: { label: string; href: string }[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => (
  <nav>
    {/* Your navbar implementation */}
  </nav>
);

export default Navbar;
