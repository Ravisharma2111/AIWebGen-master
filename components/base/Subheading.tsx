import React from 'react';

type SubheadingProps = {
  text: string;
};

const Subheading: React.FC<SubheadingProps> = ({ text }) => (
  <h2>{text}</h2>
);

export default Subheading;