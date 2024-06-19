import React from 'react';
import Heading from '../base/Heading';
import Subheading from '../base/Subheading';
import Button from '../base/Button';

type HeroSectionProps = {
  headingText: string;
  subheadingText: string;
  buttonText: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ headingText, subheadingText, buttonText }) => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <Heading text={headingText} />
    <Subheading text={subheadingText} />
    <Button label={buttonText} onClick={() => console.log('Button clicked')} />
  </div>
);

export default HeroSection;