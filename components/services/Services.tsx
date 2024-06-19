// components/Services.tsx
const Service = ({ heading, description }) => {
  return (
    <div>
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

const Services = ({ services }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {services.map((service, index) => (
        <Service key={index} heading={service.heading} description={service.description} />
      ))}
    </div>
  );
};

export default Services;
