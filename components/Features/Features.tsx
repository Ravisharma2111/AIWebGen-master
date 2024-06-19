// components/Features.tsx
const Feature = ({ icon, heading, description }) => {
    return (
      <div>
        <img src={icon} alt={heading} />
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  const Features = ({ features }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {features.map((feature, index) => (
          <Feature key={index} icon={feature.icon} heading={feature.heading} description={feature.description} />
        ))}
      </div>
    );
  };
  
  export default Features;
  