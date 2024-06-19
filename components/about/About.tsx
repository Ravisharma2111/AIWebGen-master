// components/About.tsx
const About = ({ imageUrl, aboutHeading, aboutDescription, aboutButton }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src={imageUrl} alt="About" />
      <div>
        <h2>{aboutHeading}</h2>
        <p>{aboutDescription}</p>
        <button>{aboutButton}</button>
      </div>
    </div>
  );
};

export default About;
