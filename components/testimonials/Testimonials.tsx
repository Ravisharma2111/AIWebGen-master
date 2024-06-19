// components/Testimonials.tsx
const Testimonial = ({ heading, description }) => {
  return (
    <div>
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

const Testimonials = ({ testimonials }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} heading={testimonial.heading} description={testimonial.description} />
      ))}
    </div>
  );
};

export default Testimonials;
