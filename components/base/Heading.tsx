import React from 'react';

type HeadingProps = {
  text: string;
};

const Heading: React.FC<HeadingProps> = ({ text }) => (
  <h1>{text}</h1>
);

export default Heading;